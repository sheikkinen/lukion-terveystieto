"""Regenerate the te2-NN blocks of data/materials.yaml from the TE2 topic front matter.

Run from anywhere: python tools/sync_te2_materials.py [--root PROJECT_ROOT]
Licence class, licence, audience and note are kept from the existing entry for the
same topic and address (else from the same address in another topic, else from the
topic's linked_materials, else a default).
"""
import argparse
import re
from pathlib import Path

import yaml

LIC_DEFAULT = {"licence_class": "link-out", "licence": "Kaikki oikeudet pidätetään"}
LIC_SIBLING = {"licence_class": "open-cc-by", "licence": "CC BY 4.0"}
KEYS = ("title", "url", "publisher", "licence_class", "licence", "audience", "read", "listed_in", "note")


def front(path):
    text = path.read_text(encoding="utf-8")
    return yaml.safe_load(re.match(r"---\n(.*?)\n---\n", text, re.S).group(1))


def build(root):
    mat_path = root / "data" / "materials.yaml"
    text = mat_path.read_text(encoding="utf-8")
    data = yaml.safe_load(text)
    old = data["topics"]
    by_url = {}
    for tid, items in old.items():
        for it in items:
            by_url.setdefault(it["url"], it)
    out = {}
    for fn in sorted((root / "content" / "topics").glob("*.md")):
        fm = front(fn)
        if fm.get("module") != "TE2":
            continue
        tid = fm["id"][:6]
        prev = {i["url"]: i for i in old.get(tid, [])}
        entries = {}
        for field in ("official_links", "linked_materials", "sibling_links"):
            for it in fm.get(field) or []:
                e = entries.setdefault(it["url"], {"fm": {}, "listed_in": []})
                e["fm"].update(it)
                e["listed_in"].append(field)
        items = []
        for url, e in entries.items():
            f = e["fm"]
            p = prev.get(url) or by_url.get(url) or {}
            base = LIC_SIBLING if "sibling_links" in e["listed_in"] else LIC_DEFAULT
            row = {"title": f["title"], "url": url, "publisher": f["publisher"]}
            for k in ("licence_class", "licence", "audience"):
                row[k] = f.get(k) or p.get(k) or base.get(k) or ""
            row["read"] = str(f["read"])
            row["listed_in"] = e["listed_in"]
            note = prev.get(url, {}).get("note") or p.get("note")
            if note:
                row["note"] = note
            items.append({k: row[k] for k in KEYS if k in row})
        out[tid] = items
    return mat_path, text, out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=str(Path(__file__).resolve().parent.parent))
    root = Path(ap.parse_args().root)
    mat_path, text, out = build(root)
    start = text.index("  te2-01:\n")
    end = text.index("\nexcluded:")
    block = yaml.safe_dump({"topics": out}, allow_unicode=True, sort_keys=False, width=100000)
    block = block.split("topics:\n", 1)[1]
    new = text[:start] + block.rstrip("\n") + "\n" + text[end:]
    mat_path.write_text(new, encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main()
