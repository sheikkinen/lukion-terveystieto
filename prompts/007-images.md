# 007: Images for the terveystieto site: diagrams and illustrations within the remaining budget

**Written before the work.** Producer's brief, 2026-11-21. Runs after brief 006 (the exam drive), so the diagrams
can show the concepts it adds. Uses the engine's image tool (`lukio-runko images`).

## Why

The operator [O]: "was there images in terveystieto site? continue with existing budget". There were none. The
existing budget is the €10 granted for images on the opinto-ohjaus site (D-007 there), of which $0.55 is spent
(`data/images.run.yaml` there) [A]. Recorded here as D-005.

**Serves:** G-1. **Goal type:** look; the operator's eye on the pages decides. **Chain:** brief 7. **Models:**
- art director on Opus: the image plan, prompts and Finnish alt texts;
- generation by the engine's script;
- image checker on Sonnet (vision);
- browse checker on Sonnet;
- judge on Opus.

## The effect [M]

- **Diagrams on nano-banana** (about $0.034 each), about 6–8, every label in Finnish and checked letter by letter
  against its expected labels:
  - the four levels of health's determinants (individual, lifestyle, environments, society);
  - the stages-of-change model;
  - the WHO/Ottawa five action areas of health promotion;
  - sleep stages, as a schematic hypnogram with no real data;
  - the stress chain, from strain to reaction to recovery;
  - protective factors of mental health on three levels;
  - the self-study loop.

  The same information is in the page text and in a full alt text. A diagram whose labels are still wrong after two
  tries is drawn as SVG instead.
- **Illustrations on p-image** ($0.005 each; the local model needs disk space the machine lacks): one per topic (10),
  the front page and the TE1 page. One calm style, the same palette family as the opinto-ohjaus site, so the two read
  as siblings.
- **Health-specific rules for every picture:**
  - no bodies shown for comparison, no weighing, no scales, no measuring tapes;
  - no food portions or quantities, no diet imagery;
  - no alcohol, tobacco, nicotine products, drugs or paraphernalia;
  - no injuries, blood, medical procedures or hospital scenes;
  - no distressed faces on mental-health pages, only calm, supportive scenes;
  - varied genders, backgrounds, bodies and abilities, shown without stereotypes;
  - no text, no logos, no real people.

## The work

1. **Art director:** `data/images.yaml` (diagrams) and `data/images-illustrations.yaml`, with the style line, prompts,
   Finnish alt texts, expected labels and facts taken from the topics.
2. **Generate** with `lukio-runko images`, diagrams first, with a cap of $3 for this brief.
3. **Checks:** every picture opened at full size (labels, facts, the health rules, style); the pages at desktop and
   phone width; the build and sizes.
4. **Redo** at most two rounds; then the judge. The producer commits, pushes and checks the live site.

## Limits

- **Money:** at most $3 in this brief. The total across both sites stays within the €10 grant.
- **game-engine** is used read-only through the engine's image tool, and its GPU lock is respected.

## Done when

The operator sees a calm illustration at the top of every TE1 topic, the front page and the TE1 page. Clear Finnish
diagrams appear where they help, each label spelled right and matching the text. No picture breaks the health rules.
Internally: the checks pass, the spend is recorded, and the judge accepts.
