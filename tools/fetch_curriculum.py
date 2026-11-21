#!/usr/bin/env python3
"""Fetch the terveystieto (TE) curriculum from ePerusteet into data/curriculum.yaml.

Usage: python tools/fetch_curriculum.py [--out data/curriculum.yaml] [--from-file saved.json]

Codes follow docs/content-contract.md, assigned by API order and resolved by
koodi.arvo (never by list index): TE.yt1-5 for the subject's general objectives,
TE1.t1-3 for module objectives, TE1.s1-7 for content items (numbered across the
content groups), and the same for TE2 and TE3.
"""
import argparse
import datetime
import json
import sys
import urllib.request
from pathlib import Path

import yaml

PERUSTE_ID = 6828810
SUBJECT = "TE"
URL = (f"https://eperusteet.opintopolku.fi/eperusteet-service/api/perusteet/"
       f"{PERUSTE_ID}/kaikki")
EXPECTED = {"yt": 5, "TE1": (3, 7), "TE2": None, "TE3": None}


def fi(node):
    """Finnish text of a localized node, tags stripped and whitespace trimmed."""
    text = (node or {}).get("fi") or ""
    for tag in ("<p>", "</p>", "<br>", "<br/>"):
        text = text.replace(tag, " ")
    return " ".join(text.split())


def iso(ms):
    if not ms:
        return None
    try:
        from zoneinfo import ZoneInfo
        zone = ZoneInfo("Europe/Helsinki")
    except Exception:  # no tz database: fixed UTC+3 is close enough for a date
        zone = datetime.timezone(datetime.timedelta(hours=3))
    return datetime.datetime.fromtimestamp(ms / 1000, zone).date().isoformat()


def find_subject(node):
    if isinstance(node, dict):
        code = node.get("koodi")
        if isinstance(code, dict) and code.get("arvo") == SUBJECT and "moduulit" in node:
            return node
        for value in node.values():
            found = find_subject(value)
            if found:
                return found
    elif isinstance(node, list):
        for value in node:
            found = find_subject(value)
            if found:
                return found
    return None


def objectives(block, prefix):
    out = []
    for area in block.get("tavoitealueet", []) or [block]:
        for obj in area.get("tavoitteet", []):
            out.append(obj)
    return [
        {"code": f"{prefix}{i}", "id": int(o["_id"]), "text": fi(o)}
        for i, o in enumerate(out, 1)
    ]


def module_entry(mod):
    mcode = mod["koodi"]["arvo"]
    objs = [
        {"code": f"{mcode}.t{i}", "id": int(o["_id"]), "text": fi(o)}
        for i, o in enumerate(mod["tavoitteet"]["tavoitteet"], 1)
    ]
    groups, n = [], 0
    for grp in mod["sisallot"]:
        items = []
        for item in grp["sisallot"]:
            n += 1
            items.append({"code": f"{mcode}.s{n}", "id": int(item["_id"]), "text": fi(item)})
        groups.append({"name": fi(grp["kohde"]), "id": int(grp["kohde"]["_id"]), "items": items})
    return {
        "code": mcode,
        "id": mod["id"],
        "name": fi(mod["nimi"]),
        "credits": mod["laajuus"],
        "compulsory": bool(mod["pakollinen"]),
        "description": fi(mod.get("kuvaus")),
        "objectives_intro": fi(mod["tavoitteet"].get("kohde")),
        "objectives": objs,
        "content_groups": groups,
    }


def build(data):
    subject = find_subject(data)
    if subject is None:
        sys.exit(f"oppiaine with koodi.arvo == {SUBJECT} not found")
    general = objectives(subject["tavoitteet"], f"{SUBJECT}.yt")
    modules = {m["koodi"]["arvo"]: module_entry(m) for m in subject["moduulit"]}
    if len(general) != EXPECTED["yt"] or "TE1" not in modules:
        sys.exit("unexpected curriculum shape: general objectives or TE1 missing")
    te1 = modules["TE1"]
    if (len(te1["objectives"]), sum(len(g["items"]) for g in te1["content_groups"])) != EXPECTED["TE1"]:
        sys.exit("unexpected TE1 shape (expected 3 objectives and 7 content items)")
    return {
        "source": {
            "url": URL,
            "peruste_id": PERUSTE_ID,
            "diaarinumero": data.get("diaarinumero"),
            "valid_from": iso(data.get("voimassaoloAlkaa")),
            "published": iso(data.get("viimeisinJulkaisuAika")),
            "modified": iso(data.get("muokattu")),
            "checked": datetime.date.today().isoformat(),
        },
        "subject": {
            "code": SUBJECT,
            "id": subject["id"],
            "name": fi(subject["nimi"]),
            "objectives_intro": fi(subject["tavoitteet"]["tavoitealueet"][0]["nimi"]),
            "objectives": general,
        },
        "modules": [modules[k] for k in sorted(modules)],
    }


def main():
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--out", default=str(Path(__file__).resolve().parent.parent / "data" / "curriculum.yaml"))
    ap.add_argument("--from-file", help="read a saved API response instead of fetching")
    args = ap.parse_args()
    if args.from_file:
        data = json.loads(Path(args.from_file).read_text(encoding="utf-8"))
    else:
        req = urllib.request.Request(URL, headers={"Accept": "application/json"})
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    result = build(data)
    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    header = "# Generated by tools/fetch_curriculum.py from ePerusteet. Do not edit by hand.\n"
    out.write_text(header + yaml.safe_dump(result, allow_unicode=True, sort_keys=False, width=100),
                   encoding="utf-8")
    print(f"wrote {out.name}: {len(result['modules'])} modules")


if __name__ == "__main__":
    main()
