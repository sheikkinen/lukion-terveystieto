# Judgement: brief 005, TE1 site on lukio-runko v0.1.0

**Judge:** Opus, workflow agent. I wrote nothing in this project. 2026-11-21.
**Ruled from files only:** `CLAUDE.md`, `prompts/005-te1-site.md`, `docs/content-contract.md`, `docs/style-guide.md`,
`docs/engine-issues.md`, `subject.yaml`, `requirements.txt`, the topic sources, and the builder, fixer and checker
reports.
**What I did myself:** I built the site twice (`python -m lukio_runko build --root ...`, once with `TE_TODAY=2026-11-21`).
Both runs gave "0 errors, 0 warnings" and exited 0. I read the rendered text of the front page, `/te1/`,
`te1/06-seksuaaliterveys/` (student view), `te1/04-ravinto/tunti/` and `te1/09-stressi-ja-kriisit/`. I looked at
`tmp/shots/chk_front_1366.png`, `chk_t08s_500.png` and `chk_crop_08_1366_1.png`. I counted the lines of every topic
file and scanned `_site` for adult-service links and for list items merged into paragraphs. I started no server.

## Verdict: reject (one narrow fix round, then accept)

The site is in good shape. It builds clean, every page carries the review banner, and the five flagged topics show
their content note in both views. All ten student views have Apua ja tukea with 112 and dated help links. Exam
tasks and model answers render well at 1366 and 500 px, the drill path works, and nothing loads from outside the
site. Three things stop the push. Two are small edits. The third needs either a template override or the
producer's written decision.

## Open items and Done-when lines

| # | Item | Real? | Blocks? | Ruling |
|---|---|---|---|---|
| 1 | Topic files over 500 lines | Yes (found by judge) | **Yes** | The fixer's blank lines pushed 05 to 502 lines, and 06 and 07 to 505 each. CLAUDE.md rule 8 says no file over 500 lines, and the builder had already trimmed 07 for this rule. Shorten all three to 500 lines or fewer, then rebuild. |
| 2 | "Linkitetyt materiaalit" not on the site (E-3, E-4) | Yes | **Yes** | The Done-when line names "linked materials". Brief item 2 says the site handles engine gaps with its own template overrides, which is how the banner was done. No override was tried for the materials. Do one of two things. (a) Add a site template override that renders `linked_materials` with publisher, licence class and read date, after Apua ja tukea and leaving out `excluded`. (b) Have the producer write an addendum to brief 005 that defers the list to an engine brief. Either way, the Valmistelu notes in 01, 02, 03 and 06 still point readers to "(linkitetyt materiaalit)", a section that does not exist. Reword or remove them. 07 line 448 is fine. |
| 3 | Contract and style guide out of step with the site | Yes | **Yes** (before commit) | The site now uses `NN-slug.md` file names, `linked_materials`, H3 plans for 60 and 45 min, and the `, 25 min (20 p)` heading form. Rule 1 says changes go in an addendum. Add one to `docs/content-contract.md` (or to brief 005) recording E-4 to E-7. Without it, the next checker will fail the site against the contract. |
| 4 | Content note is a meta row, not a box (E-2) | Yes | No | It shows near the top of both views on 04, 06, 07, 08 and 09, and is absent on the unflagged topics. This meets "content notes" in Done-when. Brief item 2 says the hand-written blockquotes in 06 and 07 then go. They do not render, so delete them when convenient. Keep the box as an engine request. |
| 5 | Review banner shown twice on the front page | Yes | No | The template banner is followed by a near-identical blockquote from `etusivu.md` (visible in `chk_front_1366.png`). Remove the blockquote from `etusivu.md`. |
| 6 | No site tests (`tests/test_site.py`, `pyproject.toml`) | Yes | No | Brief item 5 lists tests under gates, and rule 8 asks for fast tests. The build is the only check today. Add a test like the one in opinto-ohjaus in a later brief. Not a push blocker for a static content site. |
| 7 | Contract checks the engine does not run (E-8) | Yes | No | Checker agents cover these. The safety checker confirmed the help sections, no figures on flagged pages, the fixed scoring line and no adult links. I confirmed no sexpo or SeriE link anywhere in `_site` or `content`. |
| 8 | Transient FileNotFound on the first gates build | Unconfirmed | No | Both of my runs were clean. Watch the CI log on the first deploy. |
| 9 | Topic 01's help section lacks the "Opiskeluterveydenhuolto: oman ajan varaat..." line | Yes | No | 01 still names student health care and 112. Add the line for consistency. |
| 10 | Lesson views have no help links | By design | No | The contract makes Apua ja tukea a student section, and the banner gives 112 on every page. |
| 11 | Pages not enabled, not pushed | Yes | No | The task said not to. Pushing happens after acceptance and the pre-publish scan. |
| 12 | Fix round: lists, a)/b)/c), K1 statements | Fixed | No | No Pisteytys or "Tyypilliset virheet" list is merged into a paragraph in any of the ten topics. The only inline a)-d) left are two in-sentence lists in 05 and 07, which are correct. |

| Done-when line | Status |
|---|---|
| Ten topics as student pages and lesson plans | Met locally: 20 views plus 3 plan lengths each. |
| Review banner | Met: every page (top of `<main>`, `role="note"`). |
| Content notes | Met as a meta row on both views of the five flagged topics (item 4). |
| Help boxes | Met on all ten student views. |
| Exam tasks and model answers | Met: three of each per topic, scoring rendered as lists. |
| Linked materials | **Not met** (item 2). |
| Build passes | Met: 0 errors, 0 warnings, twice. |
| Live checks pass | Pending: checked after the push. |
| Judge accepts | Not yet: after items 1-3. |

## What blocks the push

1. Topics 05, 06 and 07 are over 500 lines (502, 505, 505).
2. Linked materials: either a template override that renders them, or a producer addendum deferring them. In both
   cases, fix the dangling "(linkitetyt materiaalit)" pointers in 01, 02, 03 and 06.
3. A contract addendum recording the file-name, key, plan-heading and exam-heading changes (E-4 to E-7).

After these, a re-run of the build and a check of the line counts are enough. A full new review is not needed.
Items 4, 5 and 9 can go into the same round.

## For the operator

- The site builds and looks right locally: banner, content notes, help links, exam tasks and model answers are all there.
- It is not pushed yet: three topic files are slightly too long, and the linked-materials list is missing.
- The missing list needs your producer's choice: render it now with a site template, or postpone it to an engine update.
- Once those are done, the push and the live check can go ahead without another full review.
