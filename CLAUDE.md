# CLAUDE.md — lukion-terveystieto

A free, public website for terveystieto in Finnish general upper secondary school (lukio), following the national
core curriculum LOPS 2019. Like the opinto-ohjaus site (`sheikkinen/lukion-opinto-ohjaus`), each topic works as a
stand-alone lesson for the teacher and as a self-study step for the student. The site is in Finnish, licensed CC BY
4.0, and built by the shared engine `lukio-runko` (D-011 in the opinto-ohjaus repository). TE1 *Terveys voimavarana*
is the intermediate target; the national modules TE2 and TE3 follow.

The process is the same as the opinto-ohjaus site's: briefs written before the work, research by a fan-out plus a
critic, a content contract, separate checkers, and a judge outside the author.

## The one law

Normalize at the boundary. Every topic is written to the content contract, its curriculum references are codes
resolved from ePerusteet, and every health fact is a dated link to its official source or a stable rule stated in
original words.

## Roles

- **Operator** (the human) decides scope, look, cost (over €5) and publishing. Questions only where no safe default
  exists; defaults go into the brief.
- **Producer** (the long session) writes the briefs, runs the workflows and reports.
- **Builders, checkers, judge:** workflow agents. Builders own separate files; checkers and the judge wrote nothing
  they check.
- **Human reviewers** (recommended): a terveystieto teacher (curriculum and exam tasks) and a health professional
  (facts). Their sign-off is recorded in `review_status`. The site-wide review banner was removed by the operator
  (D-008); the pages still give no medical advice.

## Rules in force

1. **Written-before.** Every brief is committed before its work; a research brief writes its expected answer first;
   changes go in an addendum.
2. **Decision grades:** `O` operator, `A` committed file or page read, `M` model-only.
3. **Curriculum fidelity:** every topic cites the TE objectives and content it serves; nothing is presented as
   required by the curriculum unless it is.
4. **Health facts with a source and a date.** Recommendations (nutrition, physical activity, sleep), laws (alcohol,
   tobacco, drugs, sexual health), services (student health care, wellbeing services counties, crisis lines) and
   statistics link to their official source (THL, Ruokavirasto, UKK-instituutti, Finlex, Mielenterveystalo and
   others) with the date read. Figures that change are linked, not copied.
5. **Existing materials are linked, not copied,** with their publisher and licence class: open (CC BY or CC BY-SA, may
   be adapted with credit only where the licence allows), link-out (all rights reserved), or excluded. No text,
   pictures or exam tasks are copied from publishers, YTL or other sites.
6. **Judge outside the author.** Look questions end on the operator's answer.
7. **Diary after every brief,** with a `**Seed:**`.
8. **Code limits** as in the engine: no file over 500 lines, ruff clean, fast tests with no network.

## Health and safety rules

- **No medical advice.** Pages teach health knowledge and health literacy, not care for one's own symptoms.
  Services such as student health care are taught as subject content where the curriculum names them.
- **Safe messaging:** suicide, self-harm, eating disorders and substance use are written to the safe-messaging
  guidelines the research names. No methods, no numbers that invite comparison (weights, calories, amounts). One help block
  only, in 08-mielenterveys; no help blocks, 112 lines, referrals or content notes elsewhere (D-014).
- **No scare tactics,** no shaming and no moralising. Inclusive of every gender, sexual orientation, body and
  background; sexuality education follows the evidence-based guidance the research names.
- **Students' privacy:** no accounts, analytics or forms; progress and notes only in the browser; no task asks the
  student to disclose their own health information to the site or to the class.

## Standing limits

- **Money:** €0 metered, apart from images within a budget the operator sets.
- **Publishing:** the target is a public GitHub Pages site (D-011). The first push happens after the judge's
  acceptance and a pre-publish scan, and is reported.
- **Public hygiene:** never commit a key, a local path, a personal e-mail or personal names of private individuals.
  Commits use the GitHub noreply e-mail. Workflow scripts take the project folder as a required argument.
- **Models:** a script for building; Haiku for rule-based checks; Sonnet for research, writing and checks; Opus for
  design and the judge.
