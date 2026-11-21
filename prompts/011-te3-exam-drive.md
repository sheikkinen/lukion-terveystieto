# 011: TE3 exam drive: close the gaps the TE3 re-mapping found

**Written before the work.** Producer's brief, 2026-11-22. Run as a workflow.

## Why

The operator [O]: "TE3 exam drive", and after a status check, "Resume TE3 drive". Brief 010's re-mapper put full
coverage of the 38 TE3-touching exam rows (about 557 weighted points) at 66.7%, partial 30.9% and none 2.4%, measured
before brief 010's second fix round. The gaps are named in `docs/review/2026-11-21-brief-010-judgement.md`.

**Serves:** G-2. **Goal type:** technical, measured by re-running the mapping. **Chain:** brief 11. **Models:** a
baseline re-mapper, three fixers, checkers and the final re-mapper on Sonnet; judge on Opus.

## Expected result, written before the work [M]

- The baseline, re-measured on today's pages, is about 70% full, because brief 010's second round added memory
  disorders, metabolic syndrome, osteoporosis, salmonella, malaria and flu versus cold.
- After the drive: full at least 80% and none 0%, when rows whose content belongs to TE1 or TE2 (special diets, study
  design, work ability) are judged against the whole site. The strict TE3-only reading is reported beside it.
- The student sections of te3-02 to te3-04 are at the 600-word limit, so additions go into exam-task material, tables
  and model answers, or replace weaker sentences.

## The work

Narrow, as brief 009: add to the existing pages, don't rewrite them, with at most one new exam task per topic. Every
new fact is a dated link whose page states it.

1. **Baseline:** a re-mapper judges the 38 rows in `docs/research/2026-11-21-te3-scouting.json` (critic proposal 5)
   against today's pages, before any edit.
2. **Group A, te3-01 to te3-03:**
   - te3-02: the child-mortality measures (S23-1): what lowered infant and child mortality in Finland, in an order a
     source supports, as a list-and-order task if sourced;
   - te3-03: carcinogen classes and survey-versus-register data by linking TE2 rather than repeating; protective
     factors beside risk factors; rheumatic disease as a short sourced entry; cancer costs and health economics as a
     concept (A26-9), with no figures typed.
3. **Group B, te3-04 to te3-06:**
   - te3-04: cold versus flu as a five-perspective table task (S24-2); transmission and two preventions for Lyme
     disease, HIV, flu, malaria and salmonella (A24-3); travel health and travel vaccines (S25-2); the communicable
     diseases act's notification idea (S23-8); water purity, contamination, hygiene and shortage (A24-9); autoimmune
     disease and zoonosis as concepts;
   - te3-05 and te3-06: only fixes the checkers raise.
4. **Group C, te3-07 to te3-10:**
   - te3-08: biobanks (the biobank act, consent, research use) with an ethical-analysis task on a fictional video
     described in text (S24-8);
   - te3-10: reading a health-behaviour table by sex, age, education and region (A24-1); mental-health promotion in
     environmental crises, linking TE2's climate anxiety (S23-7); cancer costs through the WHO action areas (A26-9).
5. **Checks:** curriculum, facts and links, safety (te3-08 and te3-09 stay flagged, rules R1–R13), pedagogy, and the
   final re-mapper. One fix round, then the judge.

## Limits

€0. Files at most 500 lines; student sections at most 600 words. Safety and the no-weights rule unchanged. Nothing
copied from YTL.

## Done when

The operator finds the named TE3 gaps on the site in the exam's formats. The re-mapping shows full at least 80% and
none at 0% (whole-site reading), the strict reading is reported, and the judge accepts.
