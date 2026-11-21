# 012: Images for TE2 and TE3: diagrams, charts and illustrations within the existing budget

**Written before the work.** Producer's brief, 2026-11-22. Two workflow runs: TE2 and the TE3 illustrations now,
the TE3 diagrams and charts after brief 011 (the TE3 exam drive) settles the TE3 pages.

## Why

The operator [O]: "do all te1, te2, te3 have graphics, charts, etc. continue with existing budget". Only TE1 does: seven
diagrams and charts and twelve illustrations (brief 007). TE2 and TE3 have none [A]. The existing budget is the €10
image grant (D-005): $0.55 spent on the opinto-ohjaus site and $0.085 here (`data/images.run.yaml` in each) [A].

**Serves:** G-2. **Goal type:** look; the operator's eye on the pages decides. **Chain:** brief 12. **Models:** as
brief 007: the art director and judge on Opus; the renderer, image checker and browse checker on Sonnet; the tool
runner and gate checker on Haiku.

## The effect [M]

- **Illustrations on p-image** ($0.005 each): one calm header per TE2 and TE3 topic (20) plus the TE2 and TE3 module
  pages (2): 22 pictures, about $0.11. Same style line as TE1.
- **Diagrams in Mermaid,** rendered to real-text SVG ahead of the build (D-006, brief 007's settings), where a picture
  helps more than text. Candidates:
  - TE2: the research process, risk concepts (relative and absolute), the work-ability house, how dependence forms
    (the reward loop), communication's means of influence, and the levels of violence prevention;
  - TE3: the explanatory models of disease on a timeline, prevention levels, transmission routes, the service paths
    (where to go), the seven ethical viewpoints, and the WHO action areas applied to inequality.
- **Charts in Vega-Lite** (vl-convert-python), sized for a 343 px phone first:
  - TE2: a schematic two-series chart for the risk task, on self-made data labelled *kuvitteellinen*;
  - TE3: the epidemiological transition as schematic curves (birth rate, death rate, population), and, if an open
    dataset can be committed as a CSV snapshot with its licence, one real-data chart (Sotkanet or Statistics Finland,
    CC BY 4.0), for example life expectancy by education. Otherwise schematic only.
- **Health picture rules** as brief 007, plus for TE2 and TE3: no substances or paraphernalia even on the dependence
  pages; no violence, weapons or injury on the safety page; no sickbeds, needles or hospital scenes on the disease and
  ethics pages; no pregnant bodies or foetuses on te3-08; no deathbed scenes on te3-09. Calm everyday scenes only.

## The work

1. **Run 1 (now):** the art director plans all TE2 pictures and the TE3 illustrations; the renderer and tool runner
   make them; image, browse and gate checks; one redo round; a judge's interim ruling.
2. **Run 2 (after brief 011 is committed):** the TE3 diagrams and charts from the final TE3 text, with the same
   checks, and the judge's final ruling.
3. The producer commits, pushes and checks the live site after each run.

## Limits

- **Money:** at most $2 in this brief. The grant total stays far under €10.
- **game-engine** is read-only through the engine's image tool; its GPU lock is respected (p-image runs on Replicate).
- Run 1 never edits TE3 topic files, which brief 011 is changing.

## Done when

The operator sees a calm illustration at the top of every TE2 and TE3 topic and module page, and clear Finnish
diagrams and charts where they help, readable on a phone and in both themes. No picture breaks the health rules.
Internally: the checks pass, the spend is recorded, and the judge accepts.
