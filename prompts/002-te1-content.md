# 002: Write TE1 *Terveys voimavarana*: ten topics, exam tasks and links, ahead of the shared engine

**Written before the work.** Producer's brief, 2026-11-21. Run by `.claude/workflows/te1-content.js`. Content
only: the site is built later, when the shared engine `lukio-runko` exists (opinto-ohjaus brief 008).

## Why

The operator [O]: "start terveystieto, TE1 as intermediate target. utilize existing materials via links, as seen
fit". The research (`docs/research/2026-11-21-research.md`) and the contract (`docs/content-contract.md`) are done.

**Serves:** G-1. **Goal type:** technical (checks) with look (voice; the operator's eye on the built site later).
**Chain:** brief 2. **Models:**
- a data agent on Sonnet: curriculum data, the materials inventory and yearly facts;
- the lead writer on Opus: topic 01 and the style guide;
- three topic writers on Sonnet;
- four checkers on Sonnet: curriculum, health facts and links, safety and inclusion, pedagogy and exam tasks;
- fixers on Sonnet, the judge on Opus.

## Expected result, written before the work [M]

- Ten topics in the critic's order, every TE1 code covered by a topic and an exam task.
- The safety checker finds the most: numbers on the eating and activity pages, wording that reads as advice, and
  help boxes missing dates.
- The facts checker finds links that moved (THL and Ruokavirasto URLs changed during the research).

## The work

1. **In parallel:**
   - *Data* (`data/`, `tools/fetch_curriculum.py`): fetch TE from ePerusteet into `data/curriculum.yaml` with the
     contract's codes and exact wording. Write `data/materials.yaml`, the link inventory per topic with licence
     classes (every URL opened, with a read date), and `data/yearly-facts.yaml` for the health facts that change.
   - *Lead writer* (`docs/style-guide.md`, `content/topics/te1-01-*.md`): the terveystieto voice and a glossary
     (terveyden taustatekijät, voimavarat, medikalisaatio, the four models' Finnish names, and others), and topic 01
     in full, with exam tasks and model answers. Its task times vary, its offline alternative needs paper only, and it
     has a help box.
2. **Topics, in parallel,** each following topic 01 and the style guide: 02–04; 05–07; 08–10.
3. **Checks** by agents that wrote nothing:
   - *Curriculum:* codes against `data/curriculum.yaml`; coverage by topic and by exam task.
   - *Health facts and links:* every URL opened; stable rules right; no figure that changes typed in the text.
   - *Safety and inclusion:* the content notes and help boxes; no figures that invite comparison; no advice; no
     disclosure prompts; inclusive wording.
   - *Pedagogy and exam tasks:* plans add up; tasks fit their times; exam tasks in the YTL types; model answers and
     points match; nothing copied from YTL.
4. **One fix round** by topic group, then a recheck.
5. **Judge** on the final recheck's open items. The producer commits; nothing is pushed until the site builds on
   the engine.

## Limits

€0. No images in this brief (a budget is asked for later). No text, pictures or tasks copied from publishers, YTL,
OPH or the open aoe.fi items. The open items are linked, and CC BY material is adapted only with credit, if at all.

## Done when

All ten TE1 topics exist as complete Markdown files to the contract, each with linked existing materials, exam-style
tasks and model answers. The style guide and data files are ready, and the judge accepts. The operator sees the
pages when the site is built on the shared engine.
