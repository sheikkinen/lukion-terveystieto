# 006: TE1 exam drive: close the gaps the matriculation exam cross-check found

**Written before the work.** Producer's brief, 2026-11-21. Runs after brief 005 (the site), before TE2's content.

## Why

The operator [O]: "then te1 exam drive", after the cross-check (`docs/research/2026-11-21-exam-cross-check.md`)
showed TE1 is the main subject of 28% of exam points, and that our topics cover the exam's TE1 content 13% fully,
81% partly and 6% not at all.

**Serves:** G-1. **Goal type:** technical (checks), measured by the same mapping re-run. **Chain:** brief 6.
**Models:** three content fixers on Sonnet (by topic group); the lead writer on Opus for the shared rubric page and
the new task formats; checkers on Sonnet (curriculum, facts and links, safety, pedagogy and exam tasks); a re-mapper on
Sonnet; judge on Opus.

## Expected result, written before the work [M]

- Full coverage of the exam's TE1-touching points rises from 13% to at least 40%, and "none" falls to 0%.
- The additions fit the safety rules: the nutrient table names functions and sources without amounts, the
  fertility section is inclusive and gives no medical advice, and the social media and loneliness sections point to
  student-facing help.
- Some additions exceed the 500-line limit, so a few topics are split or trimmed.

## The work

1. **The lead writer:**
   - adds a shared page `content/pages/tiedonkasittely.md` with the information-processing rubric (concept use,
     application, analysis, evaluation, argumentation) and the rule that answers must use the given material;
   - adds templates for the missing exam formats to the style guide: list-and-classify with a count rubric,
     define-and-exemplify, multiple choice with penalty, naming concepts, drawing a model or chart, reading a chart,
     table, map or image (self-made, labelled *kuvitteellinen*), applying a given framework, and critiquing a concept.
2. **Three fixers, by topic group, add the cross-check's items** (each in its own words, every fact a dated link):
   - te1-01: the WHO/Ottawa five action areas with a task that applies them, the critique of the WHO 1948 definition,
     prevention versus promotion;
   - te1-02: stage-by-stage depth for the stages-of-change model, and a draw-and-explain task;
   - te1-03: health competence, overdiagnosis and overtreatment, advertising tactics;
   - te1-04: the nutrient table without amounts (calcium, vitamin D, iron and its absorption, iodine, vitamin C, fat
     quality, salt, fibre), label reading, the food triangle, special diets, bone health;
   - te1-05: sleep stages and their functions with a hypnogram-reading task on self-made data, brain effects,
     immune resistance;
   - te1-06: protecting one's fertility; STIs and the communicable-disease classification (link to TE3);
   - te1-08: emotion skills, social media, loneliness, climate anxiety;
   - te1-09: eustress and distress compared; how emotions affect health;
   - te1-10: noise and hearing in the study environment;
   - every topic:
     - model answers split into content and information-processing halves, linking the rubric page;
     - the 5-point deduction for unused material stated;
     - varied 30-point templates;
     - at least one task with a self-made chart, table or figure across each group;
     - one line naming alcohol and nicotine as lifestyle factors with a link to TE2 where the exam expects it;
     - a note that TE1 alone covers part of the exam.
3. **Checks:** the four checkers as in brief 002, plus a re-mapper. The re-mapper re-runs the cross-check's coverage
   judgement on the 72 mapped tasks against the updated topics, from `2026-11-21-exam-cross-check.json`.
4. **One fix round, the judge** on the final recheck, then commit, push and redeploy.

## Limits

€0. Safety rules unchanged: no amounts, weights or doses on flagged pages; no medical advice; student-facing help
only. Nothing copied from YTL; formats are mirrored with our own material.

## Done when

The operator finds the exam's TE1 topics on the site with the new concepts, tasks in the exam's formats, and model
answers scored as the exam scores them. The re-mapping shows full coverage of at least 40% and none at 0%, and the
judge accepts.
