"""Render nested-ring diagrams (data/charts/<id>.rings.json) to narrow, centred SVG.

Mermaid's nested clusters come out wide and off-centre, so the four background-factor levels are drawn here.
Each level is a frame with a bold title and its factors; the next level sits centred inside it.
"""
import json
from html import escape

WIDTH = 360
PAD = 14
LINE = 20
FONT = "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"


def _frame_height(levels):
    first, rest = levels[0], levels[1:]
    own = PAD + LINE + len(first["lines"]) * LINE + 8
    return own + (_frame_height(rest) + PAD if rest else 0) + (0 if rest else PAD - 8)


def render_rings(spec):
    out = []
    levels = spec["levels"]

    def draw(lvls, x, y, w):
        lv = lvls[0]
        h = _frame_height(lvls)
        out.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="14" fill="{lv["fill"]}" '
                   f'stroke="{lv["stroke"]}" stroke-width="1.5"/>')
        cx, ty = x + w / 2, y + PAD + 15
        out.append(f'<text x="{cx}" y="{ty}" text-anchor="middle" font-weight="700" fill="#1a1a1a">'
                   f'{escape(lv["title"])}</text>')
        for i, line in enumerate(lv["lines"]):
            out.append(f'<text x="{cx}" y="{ty + LINE * (i + 1)}" text-anchor="middle" fill="#1a1a1a">'
                       f'{escape(line)}</text>')
        if len(lvls) > 1:
            top = y + PAD + LINE + len(lv["lines"]) * LINE + 8
            draw(lvls[1:], x + PAD, top, w - 2 * PAD)

    draw(levels, 2, 2, WIDTH - 4)
    height = _frame_height(levels) + 4
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {WIDTH} {height}" role="img" '
            f'font-family="{FONT}" font-size="15">'
            f'<title>{escape(spec["title"])}</title><desc>{escape(spec["desc"])}</desc>'
            + "".join(out) + "</svg>")


def render_all(root, out_dir):
    done = []
    for src in sorted((root / "data" / "charts").glob("*.rings.json")):
        spec = json.loads(src.read_text(encoding="utf-8"))
        target = out_dir / (src.name[: -len(".rings.json")] + ".svg")
        target.write_text(render_rings(spec), encoding="utf-8")
        done.append(target)
    return done
