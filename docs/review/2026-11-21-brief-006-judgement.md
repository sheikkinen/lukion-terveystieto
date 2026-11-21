# Judgement: brief 006, TE1 exam drive

**Judge:** Opus, workflow agent. I wrote nothing in this project. 2026-11-21.
**Ruled from files only:** `CLAUDE.md`, `prompts/006-te1-exam-drive.md`, `docs/content-contract.md` and its addendum,
`docs/style-guide.md` (§7, §7a, §8), `docs/research/2026-11-21-exam-cross-check.md` and `.json`, the rubric section
"Tiedonkäsittely koetehtävissä" in `content/pages/opetussuunnitelma.md`, the ten topic files, and the lead, fixer,
checker and re-mapper reports.
**What I did myself:** I built the site (`python -m lukio_runko build --root ...`): "0 errors, 0 warnings". I counted
the lines of every topic (max 500: 05 and 06 are at 500, 04 at 498). I listed the C30 sub-part splits of all ten
topics from the task lines and the "osapisteet" lines. I read 03 K1 with its model answer, the 06 K3 material, the
04 nutrient table, the 09 K3 model answer and scoring, and the Tehtävät and Tuntisuunnitelma sections of 04, 05, 06
and 08 for the new content. I scanned 04, 05, 06, 08 and 09 for amounts with units (none) and the topics for local
paths, keys and e-mails (none). I did not open any outside source; facts rest on the facts checker's report.

## Verdict: reject (one narrow round on four items, then accept)

The drive did what it was for. The re-mapping meets the coverage target, the build is clean, every topic is within
500 lines, and the safety, facts and curriculum checks pass with no must-fix. But none of the four open pedagogy items
was fixed. The file times show 02, 06 and 08 untouched since the pedagogy check, and the one fix that touched a split
(09, now 8/12/10) created the 08/09 collision rather than removing one. All four are rules the project wrote for
itself (style guide §7) or scoring faults a student would pay for, so they block the commit. Each is a local edit.

## Open items

| # | Item | Real? | Blocks? | Ruling |
|---|---|---|---|---|
| 1 | Shared C30 splits | Yes, confirmed | **Yes** | Splits now: 01 15/8/7, 02 8/10/12, 03 10/10/10, 04 10/8/12, 05 12/8/10, 06 8/10/12, 07 5/15/10, 08 8/12/10, 09 8/12/10, 10 12/6/12. 02 = 06 and 08 = 09, against §7 ("no two topics share the same C30 split"). Change one of each pair to a split no topic uses (for example 06 to 6/12/12 and 09 to 9/11/10), and keep the task line, the "osapisteet"/"Yhteensä" line and the Sisältö 15 p sub-scoring in step. Fixing 06 can go with item 4. |
| 2 | 03 K1 item 9 and pairs 5/6, 7/8 | Yes, confirmed | **Yes** | Item 9 (checking author and sources) is keyed "Terveysosaaminen", but line 128 of the same page says reliability checking is part of terveyslukutaito. A student who follows the page loses a point. Items 5/6: item 5 ends in "lisätutkimuksia", so ylitutkimus is a defensible answer. Items 7/8: item 7 ("lupaa parantaa kaikki vaivat") also fits the ylilupaus tactic. Reword the cases so each has one key, or list the accepted alternatives in the Pisteytys. Keep the "samaa käsitettä ei käytetä kahdesti" rule workable. |
| 3 | New content only in exam tasks | Yes, confirmed | **Yes** | In 04, 05 and 06 the new content appears in Tehtävät and lesson plans only as an Osaan outcome line. 04 Tehtävä 3 step 1 still opens the general Ruokavirasto page. 08 has one mention in the lesson-plan alustus row and one discussion question, which I count as met for 08. For 04, 05 and 06, add one task step and one lesson-plan cell (the "Jos aika loppuu" or "Vaihtoehto" column is enough) using the nutrient table, the sleep-stage table and the communicable-disease classification or fertility. 05 and 06 are at 500 lines, so tighten first; drop no curriculum content. |
| 4 | Figures in 06 K3 material | Yes, confirmed | **Yes** | 06 is flagged and its table has respondent counts (120/85, 48/60, 78/47, 84/51, 30/17). §7 says flagged pages use material without figures. No exception is recorded in the style guide. Rewrite the table with categories (useimmat / noin puolet / osa / harvat, as in 08 K3), redo a) and its scoring (it asks for "muutosta lukuineen" and relies on counts vs shares), and fix the pedagogy minor "laski vain vähän" at the same time. Not a safety breach: the counts are of sources, not bodies. |
| 5 | Rubric is a section, not `tiedonkasittely.md` | Yes | No | Engine gap E-11; the section exists and the links resolve. Record the deviation in the diary. |
| 6 | Facts checker minors (two redirected URLs, three thl.fi pages not opened by curl, unused 06 fertility link, "eikä vaurio korjaudu", lautasmalli wording) | Yes | No | Fix in the same round where cheap; open the thl.fi alcohol and nicotine pages in a browser before the push. |
| 7 | Safety and curriculum minors (unlinked "(Terveyskirjasto)" in 06, "Jokainen sukupuolitauti...", duplicate front-matter entries, fat quality vs amount wording) | Yes | No | Same round where cheap. |
| 8 | Pedagogy minors (deduction placement 01-06 vs 07-10, three "Aineiston analyysi" K3s, 10 K3 "ympäristö" level) | Yes | No | Make the 5 p deduction placement uniform if lines allow; the rest can wait. |
| 9 | TE2/TE3 links point to the curriculum page | By design | No | Retarget when TE2 and TE3 exist. |
| 10 | Opiskelijalle near 600 words in 02, 04, 08, 09 | Yes | No | Any addition there needs a matching cut. |

## Coverage before and after (re-mapper's numbers)

| Base | Full | Partial | None |
|---|---|---|---|
| Cross-check, before (its own 1045 p base) | 13% | 81% | 6% |
| Same rows, before (re-mapper's 955 p base) | 135 p (14%) | 848 p | 62-102 p |
| **After (955 p, like-for-like)** | **435 p (45.5%)** | 520 p (54.5%) | **0 p (0%)** |
| After, sensitivity (1105 p, adds marginal-TE1 TE2/TE3 rows) | 435 p (39.4%) | 670 p | 0 p |

The cross-check's 1045 p base could not be reproduced exactly from the JSON, so the before figures are not strictly
like-for-like. I rule on the 955 p base, because the added 150 p are TE2/TE3 content that TE1 is not meant to
carry. The 23 partial rows left are mostly TE2/TE3 content (blood pressure, water, substances, environment) and are
not TE1 work.

## Done-when lines

| Done-when line | Status |
|---|---|
| The exam's TE1 topics are on the site with the new concepts | Met: Ottawa areas, WHO critique, stages in depth, terveysosaaminen, ylidiagnostiikka, nutrient table, sleep stages, STI classification, fertility, emotion skills, social media, loneliness, climate anxiety, eustress/distress, noise. |
| Tasks in the exam's formats | Met: all eight §7a formats are used at least once, with self-made material labelled kuvitteellinen. |
| Model answers scored as the exam scores them | Met in structure (content and information-processing halves, rubric link, 5 p deduction), **but** 03 K1 penalises a right answer (item 2) and 06 K3 breaks the flagged-page rule (item 4). |
| Re-mapping: full at least 40%, none 0% | **Met:** 45.5% full, 0% none (like-for-like base). |
| Judge accepts | **Not yet:** after items 1-4. |

The brief's expectation that some topics would be split did not happen: all fit by tightening. That is fine.

## What blocks the commit

1. Items 1-4 above, in 02 or 06, 08 or 09, 03, 04, 05 and 06.
2. Then rebuild (0 errors, 0 warnings), recount lines (at most 500), and re-list the ten C30 splits. A full new
   review is not needed; a judge reading those four places is enough.

## For the operator

1. The exam drive reached its target: 45.5% of the exam's TE1 points are now fully covered, up from 13%, and none are uncovered.
2. The site builds clean, every topic fits in 500 lines, and the facts, safety and curriculum checks all pass.
3. Four small teaching faults are still open: repeated point splits, one ambiguous answer key, one table with numbers on a sensitive page, and new facts not yet in the lessons.
4. One short fix round on those four, then a quick recheck, and it can be committed and published.
5. Nothing has been committed or pushed.
