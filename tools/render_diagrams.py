"""Render content/diagrams/*.mmd and data/charts/*.vl.json to site-src/img/<id>.svg.

Mermaid: @mermaid-js/mermaid-cli 12.2.0 (tools/package.json, npm install into the
gitignored tools/node_modules with PUPPETEER_SKIP_DOWNLOAD=1) run through a local Chrome.
Nested rings: tools/render_rings.py (data/charts/*.rings.json).
Vega-Lite: vl-convert-python (pip install vl-convert-python==1.9.0.post1), no browser.

Chrome is found only from the CHROME_PATH environment variable or a PATH lookup
(google-chrome, chromium, chrome); no install path is hard-coded.
The Puppeteer config is written to a temporary folder, so no path is committed.
Usage: python tools/render_diagrams.py [--root PROJECT_DIR]
"""
import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

TOOLS = Path(__file__).resolve().parent
sys.path.insert(0, str(TOOLS))
TIMEOUT = 90
RETRIES = 2


def find_chrome():
    found = os.environ.get("CHROME_PATH")
    if found and Path(found).is_file():
        return found
    for name in ("google-chrome", "chromium", "chrome"):
        found = shutil.which(name)
        if found:
            return found
    sys.exit("Chrome not found: set CHROME_PATH")


def find_mmdc():
    exe = TOOLS / "node_modules" / ".bin" / ("mmdc.cmd" if os.name == "nt" else "mmdc")
    if not exe.is_file():
        sys.exit("mmdc missing: run npm install in tools/ with PUPPETEER_SKIP_DOWNLOAD=1")
    return str(exe)


def trim_numbers(svg):
    """Mermaid writes shape paths with 15-digit floats; two decimals are plenty and 3x smaller."""
    return re.sub(r"-?\d+\.\d{3,}", lambda m: f"{float(m.group(0)):.2f}".rstrip("0").rstrip("."), svg)


def render_mermaid(root, out_dir):
    sources = sorted((root / "content" / "diagrams").glob("*.mmd"))
    if not sources:
        return []
    mmdc, chrome = find_mmdc(), find_chrome()
    done = []
    with tempfile.TemporaryDirectory() as tmp:
        pconf = Path(tmp) / "puppeteer.json"
        pconf.write_text(json.dumps({"executablePath": chrome, "headless": "shell",
                                     "args": ["--no-sandbox"]}), encoding="utf-8")
        for src in sources:
            target = out_dir / f"{src.stem}.svg"
            cmd = [mmdc, "-i", str(src), "-o", str(target), "-c", str(TOOLS / "mermaid-config.json"),
                   "-p", str(pconf), "-b", "transparent", "--svgId", src.stem, "-q"]
            for attempt in range(1, RETRIES + 1):
                try:
                    res = subprocess.run(cmd, capture_output=True, text=True, timeout=TIMEOUT, check=False)
                except subprocess.TimeoutExpired:
                    print(f"{src.name}: timeout (try {attempt})", file=sys.stderr)
                    continue
                if res.returncode == 0 and target.is_file():
                    target.write_text(trim_numbers(target.read_text(encoding="utf-8")), encoding="utf-8")
                    break
                print(f"{src.name}: failed (try {attempt}): {res.stderr.strip()[:300]}", file=sys.stderr)
            else:
                sys.exit(f"could not render {src.name}")
            done.append(target)
    return done


def render_vega(root, out_dir):
    sources = sorted((root / "data" / "charts").glob("*.vl.json"))
    if not sources:
        return []
    import vl_convert as vlc
    done = []
    for src in sources:
        spec = json.loads(src.read_text(encoding="utf-8"))
        spec.setdefault("config", {})["aria"] = False
        svg = vlc.vegalite_to_svg(spec)
        target = out_dir / (src.name[: -len(".vl.json")] + ".svg")
        target.write_text(svg, encoding="utf-8")
        done.append(target)
    return done


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", default=str(TOOLS.parent))
    root = Path(parser.parse_args().root).resolve()
    out_dir = root / "site-src" / "img"
    out_dir.mkdir(parents=True, exist_ok=True)
    from render_rings import render_all as render_rings
    for target in render_mermaid(root, out_dir) + render_vega(root, out_dir) + render_rings(root, out_dir):
        print(f"{target.name}: {target.stat().st_size} bytes")


if __name__ == "__main__":
    main()
