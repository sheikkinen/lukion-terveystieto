# 005: Build the TE1 site on the shared engine and publish it on GitHub Pages

**Written before the work.** Producer's brief, 2026-11-21. Runs as soon as the shared engine `lukio-runko` is
accepted and tagged (opinto-ohjaus brief 008).

## Why

The operator [O]: "is the pages site up and running? then te1 exam drive". D-002: its own GitHub Pages site on the
shared engine. D-004: the Markdown was published first, the site once the engine exists.

**Serves:** G-1. **Goal type:** technical; the build checks and the live checks decide. **Chain:** brief 5.
**Models:**
- builder on Sonnet: subject config, data and build fixes;
- checkers on Sonnet: browse, live and safety;
- gates on Haiku;
- judge on Opus.

## The work

1. **`subject.yaml` for terveystieto:**
   - name "Lukion terveystieto", short name and address `https://sheikkinen.github.io/lukion-terveystieto/`;
   - ePerusteet ids: peruste 6828810, oppiaine 6834386, TE1 6834847, with TE2 and TE3 added later;
   - `assessment: numeric`, with the Koetehtävät and Mallivastaukset sections;
   - role label "Opettajan rooli", the help section "Apua ja tukea", localStorage key `te:v1`;
   - the CC BY line, and the review banner on every page until the teacher and the health professional sign off.
2. **The engine renders what the contract adds,** where the engine supports it: the content note at the top of a
   flagged page and its lesson plan (then the hand-written blockquotes in te1-06 and te1-07 go), the "Linkitetyt
   materiaalit" list from `materials`, and the banner. What the engine lacks is recorded as an engine issue and
   handled in the site's own template overrides, not by forking the engine.
3. **Build** with `lukio-runko build`, and fix every build-check failure in the content (sections, codes, dated
   links, lesson minutes, the figure scanner on flagged pages).
4. **Pages:** a workflow that installs the pinned engine and deploys `_site`. Pages is turned on, and the site is
   pushed and deployed.
5. **Checks** by agents that wrote nothing:
   - live browse: every page at desktop and phone width, print one length, the self-study path;
   - safety on the rendered pages: banners, content notes, help boxes, no adult-service links;
   - gates: the build, tests, no external requests, no local paths.
6. **Judge,** then the producer updates the README with the site address.

## Limits

€0. The engine is used at a pinned tag; engine changes go to the engine repository by its own brief. No new content
in this brief beyond what the build checks require.

## Done when

The operator opens `https://sheikkinen.github.io/lukion-terveystieto/` and finds TE1's ten topics as student pages
and lesson plans, with the review banner, content notes and help boxes, exam tasks and model answers, and linked
materials. Internally: the build passes, the live checks pass, and the judge accepts.
