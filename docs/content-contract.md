# Content contract: terveystieto

**Written before the work.** Producer, 2026-11-21, from the critic's proposal in `docs/research/2026-11-21-scouting.json`.
It extends the opinto-ohjaus contract (`sheikkinen/lukion-opinto-ohjaus`, `docs/content-contract.md`), which the
shared engine will carry. Changes go in a dated addendum.

## Curriculum codes

`data/curriculum.yaml`, fetched from ePerusteet (peruste 6828810; oppiaine TE 6834386; TE1 6834847, TE2 6834848,
TE3 6834849, looked up by `koodi.arvo`, names trimmed). Codes in API order:
- `TE.yt1`–`TE.yt5`: the subject's general objectives.
- `TE1.t1`–`TE1.t3`: TE1's objectives.
- `TE1.s1`–`TE1.s3`: TE1's content group *Terveyden kokonaisvaltaisuus*.
- `TE1.s4`–`TE1.s7`: TE1's content group *Kehon ja mielen hyvinvoinnin keskeiset perusteet*.
- Later `TE2.*` and `TE3.*`.

## A topic file

`content/topics/te1-NN-slug.md`, Finnish, Markdown with front matter.

Front matter as in opinto-ohjaus (id, module, order, title, summary, curriculum, suggested_timing, duration_options
`[45, 60, 75]`, self_study_minutes, prerequisites, official_links with read dates, yearly_facts, materials, last_reviewed),
plus:
- `assessment: numeric` (from the subject config).
- `safety_flags`: a subset of `suicide_selfharm`, `eating`, `substances`, `sexuality`, `violence`.
- `content_note`: required when a flag is set. One plain sentence shown at the top of the page and of the lesson plan.
- `materials`: `[{title, url, publisher, licence_class: open-cc-by | open-cc-by-sa | link-out | excluded, licence,
  audience, read}]`. `excluded` is kept for the record and never shown.
- `exam_tasks`: `[{id, type, part: A20 | B20 | C30, points, minutes, codes}]`.
- `review_status`: `{teacher, health_professional, safe_messaging}`, each `none` or a date.
- `sibling_links`: links to the opinto-ohjaus site, with read dates.

Sections (H2), in order, checked by the build:
1. `## Opiskelijalle`: 300–600 words, "Osaan…" outcomes mirroring the cited objectives; stable rules only, every
   changing figure a link.
2. `## Tehtävät`: 1–3 tasks, each with a title, time, materials, up to 5 steps (one action each) and an offline
   alternative a student can do alone with paper. Times vary with the task.
3. `## Pohdinta`: 2–3 prompts that never ask for the student's own health information.
4. `## Koetehtävät`: 2–3 original tasks in the matriculation exam's task types: a true/false set, finding errors,
   comparing on aspects, completing a table, applying a theory, analysing a figure or material, ethical analysis, or
   a research plan. Each heading carries points and minutes. Any material is self-written and labelled
   *kuvitteellinen*, or a linked open or official source. Never text from publishers or YTL.
5. `## Mallivastaukset`: for each task:
   - a model answer in original wording;
   - *Pisteytys*: the content points by required element, and an information-processing rubric (concepts,
     application, analysis, evaluation, argumentation, structure);
   - *Tyypilliset virheet*;
   - the fixed line: "Pisteytys on sivuston oma harjoitusohje, ei ylioppilastutkintolautakunnan."
6. `## Itseopiskelun askel`.
7. `## Tuntisuunnitelma (75 min)`, `## Tuntisuunnitelma (60 min)`, `## Tuntisuunnitelma (45 min)`: tables that add up.
   The 45-minute plan keeps the goal task. Role column "Opettajan rooli".
8. `## Eriyttäminen`.
9. `## Apua ja tukea`: student health care, 112, and the official help links with dates. It is required when a safety
   flag is set, and recommended on every page.
10. `## Linkitetyt materiaalit` and `## Lähteet`: generated from the front matter, never written by hand.

## Health and safety rules (checked where a script can)

- **No figures that invite comparison** on pages with `eating` or `suicide_selfharm` flags: weights, kilograms,
  calories, BMI, grams, portions, doses or methods. A scanner fails the build.
- **No medical advice:** for one's own symptoms the text sends the student to student health care, a doctor or 112.
- **Inclusive wording:** every gender and sexual orientation, weight-neutral. No scare tactics, no shaming.
- **Privacy:** no prompt asks the student to share their own health, body, sexuality or substance use with the site
  or the class. A linter flags first-person health questions in Pohdinta and Tehtävät.
- **The review banner:** until the teacher and the health professional have signed off (`review_status`), every page
  says "Sisältöä ei ole vielä tarkastanut terveystiedon opettaja eikä terveydenhuollon ammattilainen."

## Build checks (fail the build)

- Every TE1 objective and content code is covered by a topic and by at least one exam task.
- Every Koetehtävä has a matching Mallivastaus, and the points add up.
- Every "Osaan" outcome is named in a task step or an exam task.
- Every material has a licence class and a read date under 12 months old. CC BY-SA and link-out content is never
  inlined.
- A safety flag requires a content note and an "Apua ja tukea" section with 112 and dated help links. The figure
  scanner runs on flagged pages.
- Plus every check of the opinto-ohjaus contract.

## Addendum 2026-11-21: what the shared engine requires (brief 005)

Written by the producer after the brief 005 judgement. The site is built by `lukio-runko` v0.1.0. Where the engine's
format differs from this contract, the engine's format applies until an engine version supports the contract's
form. The gaps are recorded in `docs/engine-issues.md` (E-1 to E-10).

- **File names:** `content/topics/NN-slug.md` (the module comes from the front matter), not `te1-NN-slug.md`. The
  topic ids stay `te1-NN-slug`, and pages live at `te1/NN-slug/`. (E-5)
- **Linked materials:** the front-matter key is `linked_materials`, because the engine uses `materials` for lesson
  supplies. Until the engine renders a "Linkitetyt materiaalit" list with licence classes, every non-excluded linked
  material is also listed in `official_links`, so it shows in the generated *Lähteet* with its read date. Licence
  classes stay in the front matter and in `data/materials.yaml`. (E-3, E-4)
- **Lesson plans:** one `## Tuntisuunnitelma (75 min)` section, with `### Tuntisuunnitelma (60 min)` and
  `### Tuntisuunnitelma (45 min)` inside it. (E-6)
- **Exam tasks:** headings take the form `### K1: Nimi, 25 min (20 p)`, and each model answer repeats the same
  heading. (E-7)
- **Content notes:** `content_note` in the front matter is shown as a row near the top of both views ("Sisältöhuomautus"),
  not as a box. Text before the first `##` heading is not rendered. (E-2)
- **Review banner:** shown on every page by the site's `templates/base.html`, a copy of the engine template with the
  banner. It must be re-synced when the engine pin moves. (E-1)
- **Checks the engine does not run** (exam-task code coverage, points sums, Osaan coverage, material licences and
  ages, help sections on flagged pages, the figure scanner, the privacy linter) stay with the checker agents. (E-8)

## Addendum 2026-11-22: a fourth exam task (briefs 009 and 011)

Written by the producer after the brief 011 judgement. The exam drives (briefs 009 and 011) added a fourth exam task
to some topics, where a brief asked for one new task per topic and the existing three could not take the new format.
`## Koetehtävät` may therefore hold 2–4 tasks. A fourth task needs a brief that asks for it, a matching model answer,
and the same checks as the others. Lesson plans that name the tasks say "K1–K4" where a fourth exists.

## Addendum 2026-11-22: no review banner (D-008)

The operator removed the site-wide review banner ("banner: remove"). The rule "every page says Sisältöä ei ole vielä
tarkastanut…" is withdrawn, and the site's `templates/base.html` override is deleted, so the engine's own template
applies (E-1 no longer needs re-syncing). `review_status` stays in every front matter as the record of human review.
The rules on medical advice are unchanged: the front page says the site gives no health advice, and every page sends
students with their own symptoms to student health care, a doctor or 112.
