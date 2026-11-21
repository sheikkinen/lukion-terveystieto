# Judgement: brief 007 (images)

Judge on Opus, 2026-11-21. I wrote nothing that I judge. I read CLAUDE.md, prompts/007-images.md with both
addenda, the visualization research, the style guide and the ten topics. I opened all seven diagram SVGs (text,
viewBox, font sizes), eight illustrations at full size (front, 03, 04, 05, 06, 08, 09 and the run log prompts for all
twelve), and the checker screenshots in tmp/shots-images. I built into my own scratch folder: 0 errors, 0 warnings.

## Verdict: reject

Every illustration is in place and the build is clean, but all five open items are still open in the files on disk.
Two of them break a Done-when line directly: a diagram that cannot be read on a phone is not a "clear Finnish
diagram", and one illustration is off style. None is large; one more redo round should close them.

## Open items

| # | Item | Owner | What I found in the files | Ruling |
|---|------|-------|---------------------------|--------|
| 1 | dg-taustatekijat expected_labels | art | The SVG has 16 text lines ("ilmasto, ympäristö," / "maailmantalous,", "koulutus, toimeentulo," / "asuminen,", "harrastukset" / "ja työpaikka", "perimä, ikä," / "elintavat,"). data/images.yaml lists 12, four of them joined. The manifest's own header says one entry per rendered line. Wording matches topic 01. | Open, must fix |
| 2 | dg-hypnogrammi phone width | render | SVG is fixed at width 771, viewBox 771x363, 14 px text (title 17 px). At 343 px that is 0.44 scale, about 6 px. The 500 px screenshot confirms the tick and stage labels are barely legible. Data shape is right (N3 early, REM longer towards morning, no clock hours, marked schematic). | Open, must fix |
| 3 | il-te1-04-ravinto style | art | Opened at full size: textured birch foliage, gravel texture, soft photographic sky; the other illustrations are flat. The "pier" is a low boardwalk along the shore, not a jetty over water. No food, drink or health-rule problem. | Open, must fix |
| 4 | Hypnogram on a phone (browse) | render | Same defect as item 2, seen on the built topic 05 page. Also: the addendum asks for a Finnish caption and data table beside the chart; topic 05 has one introductory sentence (line 133) but no table of the chart's stages. | Open, merged with item 2 |
| 5 | Local paths in tools/render_diagrams.py | render | Lines 27-28 still hold Windows `Program Files` install paths for chrome.exe paths (plus Linux and macOS install paths). The file is untracked and would be committed. CLAUDE.md forbids committing a local path. | Open, must fix |

Note on item 4's owner: the browse checker gave it to art, but the fix is in the Vega-Lite spec and its render, so
it goes with item 2 to render.

## Done-when lines

| Line | Status |
|------|--------|
| A calm illustration at the top of every TE1 topic, the front page and the TE1 page | Met: 12 webp files, all placed, build 0 warnings |
| Clear Finnish diagrams where they help | Not met: hypnogram unreadable at phone width |
| Each label spelled right and matching the text | Spelling and wording match the topics; the exact-string manifest check fails for dg-taustatekijat |
| No picture breaks the health rules | Met in the pictures I opened. Minor: a small bowl-like object on the grass in 06 |
| The checks pass | Not met: images, browse and gates checks all failed |
| The spend is recorded | Met: data/images.run.yaml |
| The judge accepts | Not this round |

## Spend

data/images.run.yaml has 16 entries at $0.005 each: 12 first generations plus two regenerations each of
il-te1-03 and il-te1-04. Total **$0.08** of the $3 cap for this brief. Diagrams cost nothing (Mermaid, a ring
generator and Vega-Lite run locally). The fix for item 3 is one or two more calls, about $0.01.

## Remaining (for the next redo round)

1. **art:** in data/images.yaml list the four split lines of dg-taustatekijat line by line (16 entries), or change
   data/charts/dg-taustatekijat.rings.json so the wrapping matches the current list.
2. **render:** re-render data/charts/dg-hypnogrammi.vl.json for narrow screens (for example about 360-400 px wide,
   taller, 15-16 px text, fewer x ticks) so text stays at 11 px or more at 343 px; and add to topic 05 a short
   Finnish caption and a small table of the schematic stages beside the chart, as the addendum asks.
3. **art:** regenerate il-te1-04-ravinto with a prompt shaped like the other eleven (short scene, flat shapes, the
   style line, short negatives), with a jetty clearly out over the water. Update its alt.
4. **render:** remove the hard-coded install paths from tools/render_diagrams.py; keep CHROME_PATH and the PATH
   lookup only.

Minors the producer may take or leave: the second bicycle in il-te1-05 is malformed; the object on the grass in
il-te1-06; il-te1-09's alt no longer describes the picture (one student at a desk); il-te1-03 has a collar
sweater close to a uniform and little visible variety; Mermaid edge labels have lines running through them; the
Takapakki-to-Harkinta arrow simplifies what topic 02 says; the hypnogram SVG has no title or desc.

Not checked by me: print beyond the browse checker's PDF, and the pages in a live browser.
Nothing was committed or pushed.

## For the operator

- Not accepted yet: the 12 illustrations are in place, but three pictures and one script need fixing.
- The sleep chart is too small to read on a phone, and one food-topic picture looks different from the rest.
- Spent $0.08 of the $3 for this brief; the fixes cost about $0.01 more.
- No decision needed from you; one more redo round, then I judge again.

## Re-judgement 2026-11-21

Judge on Opus; I wrote nothing that I judge. I built into my own scratch folder (0 errors, 0 warnings), opened
dg-hypnogrammi.svg, il-te1-04-ravinto.webp and the 390 px screenshot in tmp/shots-images2, and read the files below.

**Verdict: accept with minors.** All four remaining items are closed in the files on disk:

1. dg-taustatekijat: the SVG's 16 text lines and the 16 expected_labels in data/images.yaml are identical, in order.
2. Hypnogram: the SVG is now 374x482 with 15 px labels (17 px title), so text is about 14 px at 343 px. The x axis
   shows only "alku" and "loppu", the chart is marked schematic, and N3 is early, REM longer towards morning. At
   390 px every label reads clearly. Topic 05 says it is a schematic example, not a measured night, and has a
   four-row stage table (N1, N2, N3, REM). It is exactly 500 lines. The figure sits at the end of its H2 section
   (engine placement) and the sentence says so.
3. il-te1-04-ravinto: now flat and in the same palette as the rest. A lakeside path, a bench, two walking and two
   seated, one waving; no food, drink or health-rule problem, no text; the alt matches the picture. The jetty I
   suggested was dropped. I accept that: the defect was the style, and the jetty was only one way to show the lake.
4. tools/render_diagrams.py finds Chrome only from CHROME_PATH or PATH. No local paths in tracked project files
   (the hits are in the gitignored tools/node_modules and in this review's own description of the old path).

**Spend:** data/images.run.yaml has 17 entries at $0.005, **$0.085** of the $3 cap (about $2.9 left).

**Remaining (minors, take or leave):** one walker in il-te1-04 carries a small shoulder bag although the prompt
said none; the caption is carried by the intro sentence, table and alt, not a figcaption; the Mermaid SVGs were not
re-rendered after the script change (render needs CHROME_PATH set); and the earlier minors still stand (second
bicycle in il-te1-05, object on the grass in il-te1-06, il-te1-09's alt, il-te1-03's variety, Mermaid edge labels,
no title/desc in the hypnogram SVG). Not checked by me: the pages in a live browser and print.
Nothing was committed or pushed.

- Accepted: every picture is in place, the sleep chart now reads on a phone, and the food-topic picture matches.
- Spent $0.085 of the $3 for this brief.
- Only small optional touch-ups remain; the producer can commit and push.
