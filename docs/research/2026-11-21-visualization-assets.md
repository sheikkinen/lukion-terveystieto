# Visualization options and open visual assets for the two lukio sites

2026-11-21. This research covers lukion-terveystieto (TE1) and lukion-opinto-ohjaus, both built by `lukio-runko`. Three
readers covered (1) diagrams and charts, (2) animation and ready-made interactives, and (3) images, icons and open data.
The producer also queried the npm and PyPI registries, measured browser bundles and rendered test diagrams locally. The
raw notes, claim by claim with URLs, are in `2026-11-21-visualization-assets.json`. No site code or content was changed.

Grades:
- [V] verified: read on the primary page, or measured here.
- [L] likely: from a secondary source or an inference.
- [U] unverified.

Quotes are kept under 15 words.

The rules this is measured against:
- no external requests at runtime;
- every page readable without JS and printable;
- WCAG 2.1 AA;
- Finnish;
- light and dark themes;
- usable on a phone;
- content CC BY 4.0;
- the health picture rules.

## In plain words

1. **Mermaid fits the flowcharts, but only with three settings.**
   - With mermaid-cli 12.2.0 as installed, a default flowchart came out at 202 KB [V, local test]:
     - its labels are HTML inside `<foreignObject>`, not SVG text;
     - it embeds a font ("Recursive Variable") as base64;
     - it uses the new `redux-color` theme.
   - With `htmlLabels: false`, `layout: dagre` and a system font, the same diagram is 18 KB (3.4 KB gzip), with real
     `<text>` labels and no embedded font [V, local test].
   - Finnish letters render correctly [V, local test].
   - `accTitle`/`accDescr` become `<title>`, `<desc>` and ARIA attributes [V].
2. **Mermaid is not the tool for the hypnogram.**
   - Its `xychart` has a numeric y axis only, so the stage names (valve, REM, N1–N3) cannot be axis labels.
   - Its line was barely visible in the neutral theme [V, local test].
   - **Vega-Lite rendered in Python** (`vl-convert-python`, no browser) drew a correct step-line hypnogram with Finnish
     decimal commas: 10.7 KB SVG (1.3 KB gzip) in about 3 s [V, local test].
3. **For data charts, render Vega-Lite to SVG at build time and put an HTML table next to it.**
   - This runs inside the Python engine with no Node and no Chrome.
   - Vega's built-in ARIA labels are English, so turn them off and use a Finnish caption and table [V, local test].
4. **Animation: use CSS inside inline SVG, honour `prefers-reduced-motion` and keep motion under 5 seconds.**
   - WCAG 2.2.2 (level A) requires a pause control for motion that runs longer than 5 s [V].
   - Without JS the animation still plays; in print it shows the final frame.
   - **three.js is not worth it** for these pilots:
     - module plus core is about 195 KB gzip [V, measured];
     - a canvas is empty without JS, in print and for screen readers;
     - a 2D SVG does the same teaching job.
5. **Ready-made interactives mostly break the rules:**
   - **PhET** changed its licence to **CC BY-NC 4.0** for sims released from 2026-03-29 [V]. A downloaded sim still loads
     Google Tag Manager and PhET's usage counter unless switched off [V].
   - **GeoGebra** is non-commercial, its materials are CC BY-NC-SA, and geogebra.org uses Google Analytics [V].
   - **Desmos** needs an API key, loads from desmos.com, and its free tier covers only personal non-commercial use [V].
   - **H5P** can be self-hosted (h5p-standalone, MIT), but nothing shows without JS and the H5P core is GPL-3.0 [V].
   - Link to the PhET Finnish "Hermosolu" sim; do not embed it.
6. **Icons and people pictures:**
   - **Lucide (ISC)** or **Tabler (MIT)** for icons [V].
   - **Open Peeps** and **Humaaans** (both CC0) for people [V].
   - **Twemoji** graphics are CC BY 4.0, the same licence as the sites [V].
   - **Avoid unDraw:** its licence bans bundling the assets and building a similar collection [V]. A public repo
     folder full of its SVGs risks both.
7. **Open data for real charts:**
   - Statistics Finland: CC BY 4.0, credited "Lähde: Tilastokeskus" [V].
   - THL Sotkanet: CC BY 4.0 [V]. It carries the Kouluterveyskysely indicators for lukio students [L].
   - Vipunen: CC BY 4.0 [L]; its site refused our reader.
   - Fetch once, commit a CSV snapshot and chart from it, so builds make no requests.

## 1. Diagrams rendered to static SVG at build time

| Tool | Licence | What the build needs | SVG text | Dark theme | Verdict |
|---|---|---|---|---|---|
| Mermaid + mermaid-cli | MIT [V] | Node ≥ 22.13 and headless Chrome; about 433 MB node_modules (no Chrome download) [V] | `foreignObject` by default; `<text>` with `htmlLabels: false` [V] | Fixed colours per render; one config per theme [V] | **Adopt** for flowcharts, loops, levels, mind maps |
| Graphviz | EPL-2.0 (binary) [V]; Python `graphviz` MIT [V]; @viz-js/viz MIT [V]; @hpcc-js/wasm-graphviz Apache-2.0 [V] | `dot` binary or a WASM package; no browser | Real `<text>` [L] | Colours set in the source; two renders [L] | Keep in reserve; its `circo` layout draws true circles [L] |
| D2 | MPL-2.0 [V] | One Go binary; no browser | `<text>`, fonts embedded with `@font-face` [V] | `--dark-theme` adds a `prefers-color-scheme` block [V] | Reserve; no accessibility syntax [V]; TALA layout is paid [V] |
| PlantUML | Jars in GPL, LGPL, Apache, EPL, MIT variants; non-GPL ones lack features [V] | Java [L]; public server receives the source [V] | — | — | Reject: software-modelling notation, poor fit |
| Kroki | MIT [V] | Docker plus companion containers [V]; public kroki.io receives the source at build time [L] | as the backend | as the backend | Reject: too much machinery for two sites |

**Mermaid details** (sources: mermaid.js.org config, theming and accessibility pages; the mermaid-cli repository):

- **Labels.** The source defaults `htmlLabels` to true; set `htmlLabels: false` at the top level, since
  `flowchart.htmlLabels` is deprecated [V].
  - With the default, labels vanish in viewers that ignore foreignObject, such as librsvg and Inkscape [L].
  - With `htmlLabels: false`, the local render had 0 foreignObject and only `<text>` labels [V].
- **Themes in v12:**
  - default, base, dark, forest, neutral, neo, neo-dark, redux, redux-dark, redux-color and redux-dark-color [V].
  - Only `base` takes `themeVariables` [V].
  - The `-t` flag is ignored when the config file sets a theme [V, local test].
  - Neutral mindmaps had pale boxes that look under 4.5:1 contrast [L, visual check]. Use `base` with the site's own
    colours and check contrast.
- **Dark mode.** Nothing in Mermaid follows `prefers-color-scheme` [V, absence in the docs]. Options:
  - **(a)** One SVG with light box fills, dark text and mid-grey lines that pass 3:1 on both page backgrounds. This is
    simplest and prints well.
  - **(b)** Two renders switched by the site's theme class.
  - **(c)** Inline the SVG and map its colours to the site's CSS custom properties.

  Start with (a).
- **Diagram types** (Finnish letters render; long labels wrap automatically in quoted "markdown strings", default
  width 120 [V]):

  | Type | Status |
  |---|---|
  | `flowchart` | Good [V, local test] |
  | `mindmap` | Good with base-theme colours [V, local test] |
  | `xychart` | No for categorical axes [V, local test] |
  | `timeline`, `pie`, `quadrantChart`, `sankey`, `block`, `kanban` | Not tested [U] |

  Draw pies and bars with Vega-Lite instead.
- **Cycles.** A flowchart cycle comes out as a row with a return arrow, not a circle [V, local test]. That is fine for
  the stages-of-change model. A true circle needs a hand-written SVG or Graphviz `circo`.
- **Build step for `lukio-runko`:**
  - Install mermaid-cli 12.2.0 with `PUPPETEER_SKIP_DOWNLOAD=1` and point `--puppeteerConfigFile` at the local Chrome
    (`executablePath`, `"headless": "shell"`) [V]. The docs guarantee only the bundled Chromium [V].
  - Call it per file from Python with `subprocess.run([...], timeout=90)`, passing `-c`, `-b transparent` and
    `--svgId <id>` [V].
  - The timeout matters: one local run hung until it was killed, and a rerun with the same input finished [V].
  - Unique SVG ids are needed when diagrams are inlined, because the default root id `my-svg` would clash [V].
  - Each call starts Chrome, about 2–5 s per diagram [L].
  - Cache by a hash of source and config, so only changed diagrams render. Commit the SVGs, so a build without Node
    still works.

## 2. Charts from data

| Tool | Licence | Static SVG at build time | Fits a Python engine | Browser size if run live (gzip) | Verdict |
|---|---|---|---|---|---|
| Vega-Lite + `vl-convert-python` | BSD-3-Clause [V] | Yes, embedded V8, no browser, no network [V] | In-process: `vegalite_to_svg(spec)` [V] | vega 180 KB + vega-lite 82 KB [V] | **Adopt** |
| matplotlib | matplotlib licence (PSF-based, BSD-compatible) [V] | Yes; `svg.fonttype: 'none'` keeps text as text; `svg.hashsalt` gives stable ids [V] | Native | n/a | Second choice, for anything Vega-Lite cannot draw |
| Observable Plot | ISC [V] | Yes, with jsdom through the `document` option [V] | Needs a Node step | 69 KB [V] | Skip: adds Node for no gain |
| ECharts | Apache-2.0 [V] | Yes, `renderToSVGString()` with `ssr: true` [V] | Needs Node | 362 KB [V] | Skip |
| Chart.js | MIT [V] | No, canvas only [V] | — | 70 KB [V] | Reject: breaks the no-JS rule |

Every "yes" above gives a static SVG that can sit in a `<figure>` with a Finnish `<figcaption>` and a `<table>` of the
same numbers. The table is the accessible version, and it also prints. In the local Vega-Lite test [V]:
- `config.locale.number` with `decimal: ","` gives Finnish decimals;
- a step line needs an explicit `order` encoding by time;
- the automatic ARIA text is English ("X-axis titled …"), so set `aria: false` and rely on the caption and table;
- the SVG had no external URLs other than the SVG namespaces.

## 3. Animation and interactivity

| Option | Licence | Size | No JS / print | Accessibility | Worth it when |
|---|---|---|---|---|---|
| CSS animation in inline SVG | — | 0 | Runs without JS; a print rule shows the final frame [L] | `prefers-reduced-motion` works in all browsers since 2020 [V]; WCAG 2.2.2 pause needed past 5 s [V] | **Default** for every pilot |
| SVG SMIL (`<animate>`) | — | 0 | Runs without JS [V] | Does not follow reduced motion by itself [L] | Only what CSS cannot do; under 5 s |
| D3 | ISC [V] | 92 KB full bundle [V] | Can run at build time only [L] | — | Not needed: Vega-Lite covers the charts |
| three.js 0.187.0 | MIT [V] | module 89 KB + core 105 KB gzip [V] | Empty canvas without JS and in print [L] | Canvas has none by default [L]; WebGL 1 at about 97.6%, WebGL 2 at about 97.3% of browsers [V] | Only for a real 3D object students rotate themselves; not these pilots |
| p5.js 2.4.0 | LGPL-2.1 [V] | 308 KB gzip [V] | Canvas | `describe()` gives a text description [V] | Only if students write sketches; ship unmodified and list as an LGPL exception [L] |
| lottie-web 5.13.0 | MIT [V] | 46 KB light player [V] | Needs JS | Can set a title and description [V]; reduced motion must be added [V] | Skip |
| dotLottie web | MIT [V] | WASM engine | Loads its WASM from a CDN unless `setWasmUrl()` is set [V] | — | Reject |
| LottieFiles free animations | Lottie Simple License [V] | — | — | — | Reject: copies must keep that licence and can't be relabelled CC BY [V] |

## 4. Ready-made open interactives

| Source | Licence and terms | Self-host? | Outside requests | Verdict |
|---|---|---|---|---|
| PhET | Sims released from 2026-03-29 are CC BY-NC 4.0; earlier ones were CC BY 4.0 [V]. The PhET logo must stay visible [V]. Licensing lists "Government or institutional distribution programs" as commercial [V] | Files download, but the per-sim source repositories are archived [V] | Google Tag Manager, a usage counter and an update check, on by default; `?yotta=false` turns them off [V] | **Link out** to Finnish Neuron ("Hermosolu"). Other Finnish sims [V]: Molecule Shapes, Balancing Act, Build a Molecule, pH Scale, Concentration, Energy Forms and Changes, Color Vision. Natural Selection, Gene Expression Essentials and Membrane Transport have no Finnish version [V] |
| GeoGebra | Apps non-commercial with attribution; source EUPL-1.2; materials CC BY-NC-SA 4.0 [V] | A self-host bundle exists [V] | geogebra.org uses GA, GTM and reCAPTCHA [V]; the self-hosted bundle is untested [U] | Reject |
| H5P | Core GPL-3.0 [V]; h5p-standalone 3.8.2 MIT [V]; common content types MIT [V] | Yes on a static host; saving progress needs a server [V]; README examples load from jsDelivr, so copy the files [V] | None once self-hosted [L] | Later, for self-check quizzes, always with a plain HTML version |
| Desmos | API key required; free tier personal non-commercial or a 90-day test; self-hosting only for paying partners [V] | No | desmos.com | Reject; a plain link is fine |

## 5. Open images and icons

The CC FAQ answers how outside assets can sit in a CC BY 4.0 site [V]:
- the site licence covers only our own work, and each third-party asset keeps its own licence;
- **CC BY-SA** used unchanged can sit on a CC BY page, but a modified copy must stay BY-SA;
- **NC** and **ND** assets do not fit and should not be used.

Credit by TASL: title, author, source and licence with links [V]. The title is optional for 4.0, and a separate credits
page is fine for images [V].

| Source | Licence | Attribution | Fits CC BY site | Notes |
|---|---|---|---|---|
| Wikimedia Commons | Per file (CC0, PD, CC BY, CC BY-SA, GFDL) [V] | Per file; credit the creator, not the uploader [V] | File by file | API `extmetadata` gives the licence and author but is unreliable for multi-licence files [V]. Prefer schematic SVGs; many photos break the health rules |
| Openverse | Search engine only; it does not verify licences [V] | As at the source | As at the source | Download from the original page and check there |
| unDraw | Own licence: free, no attribution [V]; bans packs or bundles, similar services, scraping, AI training [V] | No | Only as a few marked exceptions | Weakest fit |
| Open Peeps | CC0 [V] | No | Yes | Avoid poses that suggest comparing bodies |
| Humaaans | CC0 [V] | No | Yes | Same |
| Lucide | ISC, with Feather-derived icons MIT [V] | Keep both notices [V] | Yes | npm `lucide-static` |
| Tabler Icons | MIT [V] | Keep the notice [V] | Yes | npm `@tabler/icons` |
| Noto Emoji | Images Apache-2.0, fonts OFL-1.1, flags PD [V] | Notice | Yes | — |
| Twemoji (jdecked fork) | Graphics CC BY 4.0, code MIT [V] | Footer or About page credit accepted [V] | Yes, same licence | — |

Self-hosting is the same for all of them:
- copy the SVG files into the repo;
- inline the icons, or use `<img>` with an empty `alt` when the icon is decorative;
- keep each library's LICENSE file beside its files and list them on the licence page.

Leave out pill, syringe, wine, beer and cigarette glyphs (health rules).

## 6. Open data for real charts

| Source | Licence | Access | Use |
|---|---|---|---|
| THL Sotkanet | CC BY 4.0, THL [V] (site footer; thl.fi/avoindata). Credit each indicator's producer [L] | REST at `sotkanet.fi/rest/1.1` (`/indicators`, `/regions`) [L]; terms page returned an error [U] | National Kouluterveyskysely indicators for lukio [L] |
| Kouluterveyskysely | Results via THL's results service, Sotkanet and cubes [L]; microdata restricted at FSD [L] | Through Sotkanet | National lukio figures only, redrawn from numbers, not THL's charts; small-cell threshold not found [U] |
| Tilastokeskus StatFin (PxWeb) | CC BY 4.0 for data, tables and charts; photos and others' data excluded [V] | PxWeb API; limits contradict between docs (30 per 10 s) and config (40 per 60 s), check the live config [V] | Minimum credit "Lähde: Tilastokeskus" [V] |
| Vipunen | CC BY 4.0 with a REST/JSON API [L] (rOpenGov docs; vipunen.fi refused fetches) | — | Education statistics for opinto-ohjaus |
| YTL statistics | Not read [U] | — | Matriculation counts are in StatFin under CC BY 4.0 [L] |

A chart task can redraw national numbers (for example, the share of lukio students who sleep too little, or feel lonely)
as our own Vega-Lite chart, with the source and year in the caption. Snapshots go in `data/` as CSV with the fetch date.
The engine reads the CSV and never fetches at build time.

## 7. Recommendation

**(a) Flowcharts, cycles, levels, mind maps**
1. **Mermaid via `@mermaid-js/mermaid-cli` 12.2.0** (mermaid 12.3.0 through the lockfile; puppeteer ^25 as its peer,
   with the local Chrome and no download).
   - Config: `{"htmlLabels": false, "layout": "dagre", "theme": "base", "themeVariables": {…site palette…}, "fontFamily": "system-ui, sans-serif"}`.
   - Use `accTitle`/`accDescr` in Finnish, plus the full Finnish alt or caption text on the page.
   - Commit the SVGs.
2. **Hand-written SVG** for the shapes Mermaid lays out badly (true circles, concentric rings, the hypnogram frame).
3. **Graphviz `circo`** (@viz-js/viz 3.31.0 or the `dot` binary) only if many circular diagrams appear.

**(b) Data charts**
1. **Vega-Lite specs rendered by `vl-convert-python==1.9.0.post1`** inside the Python build.
   - Finnish locale and `aria: false`.
   - A `<figure>` with caption and an HTML data table.
2. **matplotlib 3.11.2** with `svg.fonttype: 'none'` and `svg.hashsalt` for anything Vega-Lite can't draw.

**(c) A few animations**
1. **CSS in inline SVG.**
   - Runs once, in under 5 s, and ends on the meaningful frame.
   - Shows the final frame under `@media (prefers-reduced-motion: reduce)` and `@media print`.
   - Add a pause button with a few lines of JS only if motion lasts longer.
2. **SMIL** only for what CSS can't do.
3. **No three.js, p5, Lottie or D3 in the browser** for now.

**(d) Illustrations and icons**
1. Keep the sites' own generated illustrations.
2. **Lucide** (`lucide-static`) for icons. Pin **1.70.0** (2026-11-06; the newest at least two weeks old), or
   **Tabler `@tabler/icons` 3.50.0** (2026-10-27).
3. **Open Peeps / Humaaans** (CC0) for any people drawings.
4. **Wikimedia Commons** only per file, with TASL.
5. Do not use: unDraw, LottieFiles, PhET embeds, GeoGebra, Desmos.

### Pilot 1: animated schematic hypnogram (TE1 topic 05)

- **What it is.** The Vega-Lite step line from the local test, made from a hand-written sequence of stages and labelled
  "kaavamainen, ei todellista dataa".
  - Y axis: Valve, REM, N1, N2, N3.
  - X axis: hours since falling asleep.
- **Animation.** CSS `stroke-dashoffset` draws the line over about 4 s, once.
- **Fallback.**
  - Without JS it is the same SVG, animated or still.
  - With reduced motion or in print, the full line shows.
  - Under the figure: a table of stages and times, and a Finnish caption explaining that deep sleep comes early in the
    night and REM late.
- **Exam link.** The hypnogram-reading task the exam cross-check asked for.
- **Cost.** About 1.3 KB gzip [V].

### Pilot 2: the determinants of health as rings (TE1 topic 01)

- **What it is.** A hand-written SVG with four concentric rings, from inside out:
  - yksilölliset tekijät;
  - elintavat;
  - ympäristöt;
  - yhteiskunta.

  The labels are real `<text>`, horizontal and never rotated.
- **Animation.** The rings appear one by one from the centre outwards (about 3 s, once), which teaches the layering.
  - Rotating labelled rings would hurt reading.
  - If rotation is wanted, rotate only a decorative tick ring for under 5 s.
- **Fallback.**
  - The final frame shows without motion and in print.
  - The levels are also a nested list in the text.
- **3D.** A three.js version would cost about 195 KB gzip [V], need a static fallback anyway and add no teaching value.

### Versions to pin

All are at least two weeks old on 2026-11-21 unless marked.

| Package | Version | Released | Note |
|---|---|---|---|
| `@mermaid-js/mermaid-cli` | 12.2.0 | 2026-11-02 | |
| `mermaid` | 12.3.0 | 2026-11-03 | Through the lockfile |
| `puppeteer` | per the lockfile | | Latest 25.18.1 is 4 days old; 25.16.0 is the newest at least two weeks old |
| `vl-convert-python` | 1.9.0.post1 | 2026-01-21 | Bundles Vega 6.2.0 [V] |
| `matplotlib` | 3.11.2 | 2026-09-11 | |
| `@viz-js/viz` | 3.31.0 | | Reserve |
| `lucide-static` | 1.70.0 | | |
| `@tabler/icons` | 3.50.0 | | |
| `h5p-standalone` | 3.8.2 | | Later |
| `three` | 0.187.0 | | Not adopted; only if a real 3D case appears |

## Pages that could not be read

- **Diagrams and charts:**
  - the npmjs.com page for mermaid-cli (403; registry JSON used instead);
  - observablehq.com Plot docs (429; GitHub docs used);
  - the Vega-Lite description docs page (404);
  - the d2lang.com man page (empty; D2 source used).
- **Animation and interactives:**
  - three.js installation and WebGPURenderer manual pages (404 or empty JS shell);
  - the h5p.org accessibility page (404);
  - the H5P help page on accessible content types (403);
  - desmos.com/terms and desmos.com/my-api (JS only).
- **Images and data:**
  - the Sotkanet terms of use (500) and `sotkanet.fi/rest` (404);
  - two THL open-data and Kouluterveyskysely result pages (404);
  - vipunen.fi (403, 404) and the OPH Vipunen page (404);
  - the YTL statistics page (404);
  - openverse.org/about (403), and the Openverse API page, which needs JS;
  - the avoindata.suomi.fi and avoindata.fi licence pages (403).
- **Not tried:** the THL wiki page with the full open-data licence text.

## Open questions for the producer

- Is the sites' light/dark switch a manual toggle or only `prefers-color-scheme`? That decides between one shared SVG
  and two renders.
- Should a Mermaid step go into `lukio-runko` now (subprocess plus a hash cache), or stay a pre-build script as the
  brief 007 addendum says?
- Ask THL for the exact Sotkanet credit wording and the small-cell rule before the first Kouluterveyskysely chart.
