# Brief 012 judgement: images for TE2 and TE3

Judge's ruling, written by an agent that made none of the pictures. Brief: `prompts/012-te2-te3-images.md`.

## Run 1

**Verdict: reject (one must-fix open).** Run 1 is nearly done. Every TE2 and TE3 topic and module page has a
header illustration. The seven TE2 diagrams and the chart are correct, readable on a phone and fine in both themes.
One picture still breaks the style line and its alt text is wrong: `il-te2-09-riippuvuuden-mekanismit`. The redo
round fixed four other pictures but did not touch this one. Its file and prompt are still those of the first run
(seed 1510898316), so the run needs one more p-image call before it can be accepted.

### What I checked myself

- **Build:** `python -m lukio_runko build` into my own scratch folder gave 0 errors and 0 warnings.
- **Diagram SVGs:** I opened all seven new SVGs. Each has real `<text>` labels and a Finnish title and description.
  None has a foreignObject or @font-face. Sizes run from 11 to 57 KB. The labels match the topics: six research steps
  with the repeat loop, risk 2 vs 4 per hundred, six means of influence, three prevention levels, four floors of the
  work-ability house, and the reward loop with no substance named. The chart is marked *Kuvitteellinen aineisto
  (Taulukko 3)*.
- **Screenshots** in `tmp/shots-images-012/`: dg-palkitsemiskeha at 375 px in dark mode reads clearly on its light
  card. The browse check found no horizontal overflow at 375 px.
- **Illustrations:** I opened eight new ones (te2-02, te2-07, te2-10, te3-06, te3-08, te3-09, te2-06 and te3-04),
  plus te2-09 at full size. None shows substances, violence, sickbeds, needles, pregnant bodies, deathbeds or legible
  text. te3-08 is a bead-chain sculpture and te3-09 a park bench, as planned.
- **te2-09 at full size:** the flagged problems are all there. The two drummers on the right have raised brows and
  open mouths, which reads as worried. The woman in the middle has folded hands and no instrument. The keyboard stand
  is empty. Nobody sings or laughs, but the alt says *soittaa ja laulaa yhdessä ... ja nauraa*.

### Table

| Item | Result |
|---|---|
| Header illustration on all 20 TE2/TE3 topic pages and both module pages | pass |
| 6 TE2 Mermaid diagrams (labels, facts, alt, 343 px) | pass |
| TE2 Vega-Lite chart dg-kaatumiset-reitit (fictional, in Mallivastaukset) | pass |
| Both themes (light card behind the diagrams) | pass |
| Health picture rules: substances, violence, hospital, pregnancy, deathbed | pass |
| Style line: no worried faces; alt matches picture | **fail: il-te2-09** |
| Build 0 errors / 0 warnings | pass |
| No topic file edited by this run; manifests append-only | pass (gate check) |
| No key, local path or e-mail in files | pass (gate check) |
| Spend under the $2 cap | pass |
| TE3 diagrams and charts | not due (run 2, after brief 011) |
| Committed or pushed | no, as instructed |

### Spend

From `data/images.run.yaml`, entries dated 2026-11-22:

- 48 entries at $0.005, so **$0.24 recorded**. 20 of them repeat an id with the same sha256.
- They come from 28 distinct images: 22 first pictures and 6 redo calls. That is $0.14 if the repeats are only
  duplicate log lines, and $0.24 if every line was a paid call. Either way it is far under the $2 brief cap.
- The image-grant total is about $0.55 (opinto-ohjaus) + $0.085 (brief 007) + $0.24 = **$0.875** of €10.
- Fixing te2-09 adds $0.005 to $0.01.

### Remaining

Must fix before run 1 is accepted:

1. **il-te2-09-riippuvuuden-mekanismit (art):** regenerate with a new seed and a shorter prompt. Ask for smiling
   faces, every person holding an instrument (guitar, keyboard on its stand, hand drum, one singing), and no empty
   stands. Open the result at full size. Rewrite the alt so it says only what the picture shows.

Minors (no redo needed; the producer may fold them into run 2):

- il-te3-04: the students look about 10 to 12, not 16 to 19.
- il-te3-05: the alt says one young person and one adult, but four people sit at the table.
- il-te2-07: the right half is hazy and some students wear shorts. The alt now matches the picture.
- il-te2-06: weak composition, with mostly bare sand and tiny figures.
- il-te2-10: the people write in notebooks beside the puzzle. The alt says they assemble it, which is close enough.
- il-te3-01: the map has text-like line blocks. il-te2-05: a paper coffee cup.
- Three tall diagrams render narrower than the 343 px column. dg-tutkimusprosessi text is about 11 to 14 px at 375 px.
  All are legible, and the enlarge link is there.
- Four TE1 diagram SVGs were re-rendered with sub-pixel geometry changes and unchanged sources. Keep them or restore
  them from HEAD; either is fine.
- The run log has 20 repeated entries. The engine's append should be checked so the log stays one line per call.
- The TE2 topic text does not mention the new figures yet (topic files were off limits). It can be added after
  brief 011.

Run 2 still owes the TE3 diagrams and charts, the same checks, and the final ruling.

### For the operator

- TE2 and TE3 now have calm header pictures on every page, and TE2 has seven clear diagrams and charts.
- One TE2 picture (music on the dependence page) shows worried-looking faces and must be redone; this costs under one cent.
- Spend for this brief is $0.24 at most, so the €10 image grant has used under $1 in total.
- TE3 diagrams come in run 2, after the TE3 exam work. Nothing is committed or pushed yet.

## Run 1 recheck

Second look by the judge, who made none of these pictures. All three opened at full size and compared with
`data/images-illustrations.yaml` and the run log.

| Item | Finding | Ruling |
|---|---|---|
| il-te2-09 (must-fix) | New seed 1510898318, shorter prompt. Three calm, smiling friends; two play guitars, the middle one rests her hands on a small white hand drum. No worried faces, no empty stands, no substances. Alt (three friends play together and smile) fits; the drum is barely visible and not clearly played. | closed |
| il-te3-04 (minor) | Regenerated (seed 1128148114) with "about 17" in the prompt, but the students still look about 12 to 14 and several wear skirt-and-shirt sets that read as uniforms. Health rules and alt are fine. | open (minor) |
| il-te3-05 (minor) | Alt now says three young people and one adult at a round table, which matches the picture. The prompt still says one young person; harmless. | closed |

Verdict after recheck: accept-with-minors. il-te3-04 (students look too young) and the other minors above can be folded into run 2.

## Run 2 and final ruling

**Verdict: reject (one must-fix open).** The eight TE3 diagrams and charts are correct and readable at 343 px in
both themes. il-te3-04 is still not fixed. The site's picture is the seed 1128148114 file (sha256 67a1ac98...);
opened at full size, it shows nine children of about 11 to 14 in matching teal or coral tops with skirts or shorts
that read as uniforms. The seed 1128148115 redo is logged (sha256 829391e7...) but matches no file on disk, and
`data/images-illustrations.yaml` has no diff against HEAD, so its prompt does not match the last logged run.

Checked myself: build into my own scratch folder, 0 errors and 0 warnings, all eight figures on their pages. The
eight new SVGs have real text, no foreignObject, @font-face, local path or key (10 to 65 KB). Screenshots in
`tmp/shots-images-012b/` of dg-ottawa-eriarvoisuus (375, light) and dg-elinajanodote (375, dark) read cleanly.
Only the eight new SVGs are new in `site-src/img/`; no tracked picture differs; manifests appended to only.

| Item | Result |
|---|---|
| Header illustrations and TE2 figures (run 1) | pass |
| 6 TE3 Mermaid diagrams: labels, facts, Finnish title and description | pass |
| dg-epidemiologinen-siirtyma (schematic) and dg-elinajanodote (StatFin 12am, CC BY 4.0) | pass |
| Both themes, 375 px, no horizontal overflow | pass |
| Health picture rules | pass |
| Students look 16 to 19, no uniforms; manifest prompt matches run | **fail: il-te3-04** |
| Build 0/0, no topic edit, no key or path, spend under $2 | pass |
| Committed or pushed | no, as instructed |

### Spend

`data/images.run.yaml`, dated 2026-11-22: 51 lines at $0.005, **$0.255 recorded** (48 run 1, 2 recheck, 1 run 2),
31 distinct pictures. Run 2 spent $0.005. Image grant total about **$0.89** of €10.

### Remaining

Must fix: **il-te3-04-tartuntataudit-ja-rokotukset (art).** Edit the existing entry's prompt in place, as the
run-1 redos did: three young adults of 18 to 19, clearly adult proportions, mixed individual clothes, no matching
sets. Run the image tool with `--only` and `--redo` for this id ($0.005). Open the result at full size and check its
sha256 equals the newest log line.

Minors: put the StatFin chart's read date and licence in its caption or the te3-10 source line; stage names on the
transition chart's x-axis; no 2025 tick on dg-elinajanodote; two Mallivastaukset figures sit after K4, not beside K3;
some TE3 diagrams are narrow or tall; topic 01 has a line-ending-only diff to clear before commit; topic text does
not yet mention the new figures; duplicate run-log lines.

### For the operator

- TE3 now has eight clear Finnish diagrams and charts, including real life-expectancy data from Statistics Finland.
- One picture needs a redo: the handwashing picture on the infections page shows children, not lukio students.
- The redo costs under one cent; the brief has used about $0.26 and the image grant under $1 in total.
- After that redo the brief can be accepted. Nothing is committed or pushed.

## Final recheck

| Check (il-te3-04-tartuntataudit-ja-rokotukset) | Result |
|---|---|
| Opened at full size: three people with adult faces, heights and builds, read as 17 to 19 | pass |
| Individual clothes (teal hoodie, denim jacket, coral knit sweater), no uniforms or matching sets | pass |
| No text or logos; health picture rules (007, 012): calm everyday scene, no medical items | pass |
| Style matches il-te3-03 and il-te3-06 (flat, muted teal/sand/coral, off-white) | pass |
| File sha256 05194a18... equals last log entry (seed 1128148116); log prompt = manifest prompt + style line | pass |

Verdict after final recheck: accept-with-minors (the run-2 minors remain open; no must-fix left).
