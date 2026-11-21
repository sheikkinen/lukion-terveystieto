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

## Re-judgement 2026-11-21

**Judge:** Opus, workflow agent. I wrote nothing in this project, and I edited no topic in this round.
**Ruled from files only:** `CLAUDE.md`, `prompts/006-te1-exam-drive.md`, `docs/style-guide.md` (§7, §7a), this
judgement, the three fixer reports and the two checker reports.
**What I did myself:** I built into my own `--out` folder: "0 errors, 0 warnings". I counted lines: 01 478, 02 493,
03 480, 04 498, 05 500, 06 489, 07 459, 08 481, 09 473, 10 450 (none over 500). I listed the ten C30 splits from the
task lines and the "osapisteet"/"Yhteensä" lines. I read 03 K1 (cases, key and Pisteytys), 04 Tehtävä 3 and the 75
min alustus row, 05 Tehtävä 2 step 5, 06 Tehtävä 3 step 6 and the 75 min alustus row, and 06 K3 (material, task,
model answer a-c).

### Verdict: reject (two one-line edits, then accept)

Items 1, 2 and 4 are fixed, and item 3 is fixed for 05 and 06. Two small faults remain. Both are one-line edits that
need no new lines, so the 500-line limit is not touched.

### Items

| # | Item | Status | Blocks? | Ruling |
|---|---|---|---|---|
| 1 | Shared C30 splits | Fixed | No | 01 15/8/7, 02 9/9/12, 03 10/10/10, 04 10/8/12, 05 12/8/10, 06 6/12/12, 07 5/15/10, 08 8/12/10, 09 10/12/8, 10 12/6/12. All ten differ. 04, 05, 08 and 09 reuse the numbers 8, 10 and 12 in other orders: within §7 read literally, thin variety, not a fault. |
| 2 | 03 K1 keys | Fixed | No | Case 9 is keyed Terveyslukutaito, matching line 128; terveysosaaminen is accepted with a named reason. Case 5 has no extra tests (ylidiagnostiikka), 6 is ylihoito, 7 is vaihtoehtohoito without overpromise wording, 8 is kokemustarina. The Pisteytys states each key. "Samaa käsitettä ei käytetä kahdesti" still works. |
| 3a | 05 and 06 new content in a task and a lesson cell | Fixed | No | 05 Tehtävä 2 step 5 names a sleep stage and its function; 06 Tehtävä 3 step 6 uses the THL three-class list; both have a 75 min Vaihtoehto cell. |
| 3b | 04 nutrient table in a task step | **Open, confirmed** | **Yes** | Step 1 opens the general Ruokavirasto page; step 2 offers "ruokakolmio tai yksi ravintoaine" on Ruokavirasto's own page, as an option, and step 3 asks why it supports health, not its function or food source. The page's table "Ravintoaineet: tehtävät ja ruokalähteet" is used only in the 75 min Vaihtoehto cell. Retarget step 2 in place (no line added). |
| 4 | Figures in 06 K3 | Fixed | No | The table uses osa / useimmat / noin puolet / harvat; a) asks for changes "luokkineen"; scoring a 3 + b 8 + c 4 = 15 p; "laski vain vähän" is gone. |
| 5 | 06 K3 model answer a) reads a change the table does not show | **New, confirmed** | **Yes** | Line 337 ends "Se ei myöskään kerro, miksi terveydenhoitajan maininnat vähenivät." The table row Terveydenhoitaja is harvat / harvat, so no fall can be read. It is a leftover from the counts version (30/17). A student who reads the table right contradicts the model answer. Replace the sentence in place. |
| 6 | Minors from the first judgement (rubric section in the diary, "eikä vaurio korjaudu" in 10, lautasmalli wording, deduction placement 01-06 vs 07-10, Opiskelijalle near 600 words) | Open | No | As ruled before. The thl.fi alcohol and nicotine pages were opened in a browser by the safety-facts checker and return 200, so that pre-push item is done. |
| 7 | New cells in 05 and 06 only in the 75 min plan | Open | No | Optional; the 60 and 45 min plans may follow later. |

### Remaining

1. `content/topics/04-ravinto.md`, Tehtävä 3 step 2 (line 193): replace in place, for example "Valitse sivun
   ravintoaine-taulukosta yksi ravintoaine. Kirjoita sen tehtävä ja yksi ruokalähde, ja tarkista
   [Ruokaviraston Ravintoaineet-sivulta](https://www.ruokavirasto.fi/elintarvikkeet/terveytta-edistava-ruokavalio/ravintoaineet/),
   että tehtävä täsmää." Keep step 3 working with it ("miksi tämä ravintoaine tukee ..."). The file stays at 498 lines.
2. `content/topics/06-seksuaaliterveys.md`, K3 model answer a) (line 337): replace the last sentence, for example
   "Se ei myöskään kerro, vaikuttiko vastaanottoaikojen väheneminen siihen, että terveydenhoitajan mainitsi yhä vain
   harva." No line added.
3. Then rebuild (0 errors, 0 warnings) and recount 04 and 06. A judge reading those two lines is enough.
4. Non-blocking, before or after the push: the diary note on the rubric section (item 5 of the first judgement) and
   "eikä vaurio korjaudu" in 10 (suggested "voi jäädä pysyväksi").

### For the operator

1. Three of the four teaching faults are fixed: point splits now all differ, the answer key is clear, and the sensitive table has no numbers.
2. Two one-line faults are left: one nutrition task does not yet use the page's nutrient table, and one model answer reads a change the table does not show.
3. The site builds clean, every topic is within 500 lines, and all links open, including the THL pages checked in a browser.
4. After those two edits and a quick recheck it can be committed; nothing has been committed or pushed.

## Final ruling 2026-11-21

**Verdict: accept with minors.** Both edits are correct Finnish and match the task and scoring: 04 Tehtävä 3 step 2 uses the page's table "Ravintoaineet: tehtävät ja ruokalähteet" and step 3 follows it, and 06 K3 a) reads only class changes and no longer claims a fall for Terveydenhoitaja; no figures were added, the build gives "0 errors, 0 warnings", and all ten files are at most 500 lines (04 498, 06 489).
Before the commit, with no new judging: put back `exam_tasks` and `review_status` in the 06 front matter (taken out against HEAD, which the contract requires; 06 goes to 493), and in 06 K3 b) change "terveydenhoitajan luvun muutos" to "terveydenhoitajan maininnat", since the table has no number and no change there.
