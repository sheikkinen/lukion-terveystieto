# Judgement: brief 011 (TE3 exam drive)

Judge on Opus, 2026-11-22. I wrote nothing that I judge. I read CLAUDE.md, prompts/011-te3-exam-drive.md,
docs/content-contract.md with its addendum, docs/style-guide.md (§7, §7a, §8, §9 and §16 with R1-R13) and
docs/review/2026-11-21-brief-010-judgement.md. I read te3-03, te3-04, te3-08 and te3-10 in full. For te3-02 I read
the K4 task and its scoring, and for te3-07 the K4 task, the front matter, the plans and the help box. I built
into my own scratch folder. I opened six pages myself, each on the first try: Terveyskirjasto ltt01290 and kpp00002,
the THL waterborne-outbreak guide, the Climate-ADAPT mental-health page and Väestöliitto *Keitä olemme*. Every
other source ruling rests on the checkers' reads.

## Verdict: reject (close; one short fix round)

The drive did what the brief asked. Whole-site full coverage went from 73.6% to 96.4%, with none at 0%. The new
tasks are original, the materials are fictional or linked, and the safety frame holds. Twelve defects remain.
Each is a sentence or a step. They are unsupported or over-read sentences, tasks that ask for facts the page no
longer gives, a step cap, a material that hands out the answer, a missing scoring line, and one unrequested task
that duplicates another. Brief 010 blocked on defects of the same kind, and I do the same here.

## Mechanical checks (judge's own)

| Check | Result |
|---|---|
| Build into own scratch folder | 0 errors, 0 warnings |
| TE3 line counts | 421-500; 02 and 10 are at exactly 500 |
| exam_tasks and review_status in every TE3 front matter | Present in all ten |
| C30 sub-part splits, all 31 on the site (TE1-TE3) | All unique, including te3-04 K4 (6/8/10/6) |
| te3 linked_materials against data/materials.yaml | Every front-matter entry is in the yaml with the same url and read date. Extra yaml rows are official_links. |
| Student sections at most 600 words (build counter) | No warning |
| TE1/TE2 untouched | Not verifiable: the folder is not a git repository here |

## Open items

The 16 items reduce to 13. The step cap (A), the 5 cm threshold (B, raised three times) and the Väestöliitto line
(C) were each raised more than once.

| # | Item (topic) | Real? | What I found | Blocks? |
|---|---|---|---|---|
| 1 | Tehtävä 1 has 6 steps (03) | Real | Lines 118-123: step 6 is the TE2 survey-versus-register step. Contract cap: 5. | Yes. Move step 6 into Eriyttäminen (Syvempi polku already names it) and change "ohita vaiheet 1 ja 6" to "ohita vaihe 1". |
| 2 | Muistisairaudet bullet has no definition, but Osaan 6 promises one (03) | Real | Line 95 lists only risk factors. | Yes. Add one clause that khp00094 states (dementia is a syndrome caused by an advanced memory disease; Alzheimer's is the most common, slowly progressing one). |
| 3 | Esiintyvyys definition is linked to ltt01290 (03) | Real, opened | The page defines only ilmaantuvuus and points to esiintyvyys with "vrt.". | Yes. Put the link on the ilmaantuvuus sentence only. State esiintyvyys as a stable rule in the site's own words (glossary §16), or link a page that defines it. |
| 4 | te3-02 K4 scoring lacks the 5 p deduction line (02) | Real | The task has material but no "Jos vastaus ei viittaa aineistoon ..." line. §8 requires it. | Yes (one line). |
| 5 | K2 b) 5 cm and K1 item 9 d) fever after travel: the student text no longer states either (04) | Real, opened kpp00002 | kpp00002 says to see a doctor if the redness is at least 5 cm across. Neither sentence is in Opiskelijalle, so both tasks ask for facts the page does not teach. | Yes. Add one dated sentence each (kpp00002, read 22.11.2026; dlk00620) to Opiskelijalle or to the K2 material. Cut a weaker sentence to stay within 600 words. In the K2 model answer, add that any symptom after a bite is a reason to contact health care. Change the K2 read date to the actual read. |
| 6 | K2 a) asks for five aspects; the page gives transmission and treatment for neither cold nor flu (04) | Real | The material and text give cause, symptoms, the vaccine and "antibiotics do not help". Cold transmission and both treatments appear only in the model answer. | Yes. Add the missing lines to the K2 material (descriptions A and B, sourced to dlk00590 and dlk00570), or drop those aspects from the task and the scoring. |
| 7 | Water sentences over-read the THL outbreak guide (04) | Real, opened | The page lists indicator-bacteria analyses as outbreak tests and filtration and disinfection as processes to assess. Chlorination is an order to the utility during an outbreak. The boil advice is a containment step and names no authority. | Yes. Opiskelijalle: say that in a waterborne outbreak the water is tested, the cause is sought and users can be told to boil water. K3 b) model: drop "esimerkiksi kloorilla" and "terveydensuojeluviranomainen kehottaa", or use the page's own frame (an order to start chlorination during an outbreak). |
| 8 | K4 Aineisto 1 states the answers to part a) (04) | Real | The material names the class (valvottava), the report to THL and the contact question, so 3 of 4 a) points are copied. | Yes. Drop those three facts from the case ("lääkäri kertoo, mitä laki edellyttää"), or ask a) as "perustele lain pykälillä" and score the section, not the fact. |
| 9 | te3-07 K4 (Noor) is unrequested and repeats te3-04 K4; 4-task count against contract | Real | Brief 011 asked for nothing in te3-07. Noor uses the same law sections, the same potilaslaki sections and the same frame as Robin. S23-8 is still covered without it (te3-04 K4, te3-08). The contract says 2-3 exam tasks; six topics now have four. | Yes. Remove te3-07 K4 with its sexuality flag, content note, yearly-facts entry and Pelisäännöt line, and re-sync materials.yaml. Producer: add a contract addendum that allows a fourth exam task when a brief adds it (brief 011 did, "at most one new exam task per topic"). |
| 10 | Climate-ADAPT sentence says loss of property or home (10) | Real, opened | The page names damage, loss of livelihoods and displacement, not home or property. | Yes. Reword to "vahinkojen, toimeentulon menetyksen ja kotoa lähtemään joutumisen kautta". |
| 11 | Väestöliitto help line: "Ikärajat ja aukioloajat ovat sivulla" (07, 08) | Real, opened | The page gives no age limits or opening hours. | Yes (help links must say what the page says). Cut the sentence in 08 line 484. In 07 it goes with item 9, or cut it there too. |
| 12 | A24-1 four-way grouping only in Tehtävä 1 (10) | Real | Tehtävä 1 reads sex, age, education and region. K2 still uses three groups. The re-mapper rated the row full through K2. | No. Record it as a named partial gap in exam format (diary and Valmistelu), or turn the K2 table into the four-way grouping in a later brief. |
| 13 | Lesson plans still say "K1-K3" (04 lines 427 and 437, 07 line 395, 10 line 423) | Real | Stale labels. Minute totals are unaffected. | No (minor). Change them to K1-K4 while the files are open. In 07, K1-K3 becomes correct again after item 9. |

## Done-when lines

| Line | Status |
|---|---|
| Operator finds the named TE3 gaps on the site in the exam's formats | Mostly met: cold versus flu (K2), five diseases (Tehtävä 2), travel, the communicable diseases act (K4), water (K3), biobank (08 K4), cancer costs (03 K4, 10 K4), climate and mental health. Partial: S23-1 became an ordering task on health-care milestones, not child-mortality measures, because no source ties the steps to child mortality. A24-1 is not in an exam task (item 12). |
| Re-mapping: full at least 80%, none 0% (whole site) | Met: 96.4% full, 3.6% partial, 0% none |
| Strict TE3 reading reported | Met: 86.4% full, 11.8% partial, 1.8% none |
| The judge accepts | Not this round: items 1-11 are open |

## Coverage (38 rows, 556.5 weighted points)

| Reading | Full | Partial | None |
|---|---|---|---|
| Whole site, baseline (before edits) | 73.6% | 26.4% | 0.0% |
| Whole site, after | 96.4% | 3.6% | 0.0% |
| Strict TE3, baseline | 61.8% | 37.1% | 1.1% |
| Strict TE3, after | 86.4% | 11.8% | 1.8% |

The brief expected a baseline of about 70% and at least 80% full afterwards. Both are met. The only whole-site
gap is S23-1 (five child-mortality measures in order). The rows that are none in the strict reading (A23-6 survey
versus register, A25-3 special diets, A26-1 study designs) belong to TE1 or TE2 and are linked from TE3. Removing
te3-07 K4 (item 9) changes no row: S23-8 stays full through te3-04 K4 and te3-08.

## Minor (fix while the file is open, does not block)

- te3-04 K4 scoring does not follow the §16 eettinen-analyysi template (4/7/10/13 + 2). Align it or note why.
- te3-07 front matter still carries the THL professional student-health page (a brief-010 minor).
- te3-02 and te3-10 are at 500 lines. Any fix there must cut a line for each line it adds.
- The diary should record S23-1 and A24-1 as named gaps.

## For the operator

1. Reject, but close: 11 one-sentence or one-step fixes, then a recheck. No rewrite.
2. Exam fit rose from 73.6% to 96.4% full (whole site), and none stays at 0%. The brief's target is met.
3. Main faults: te3-04 tasks ask for facts the page dropped, and some water sentences over-read the THL source.
4. Remove the unrequested te3-07 task. It repeats te3-04 K4, and the four-task count needs a contract addendum.
5. Nothing committed; TE1/TE2 untouched could not be verified without git.

## Recheck after the fix round

Judge, 2026-11-22. I read the three fixers' reports and both rechecks, then checked the files on disk. Build into my
own scratch folder: 0 errors, 0 warnings. TE3 line counts 420-500 (02 and 10 at 500, 03 and 04 at 498, 07 at 420).
The contract addendum of 2026-11-22 now allows 2-4 exam tasks, so the four-task count is settled. I opened no pages
this round; source rulings rest on the facts recheck, which opened every page involved.

| # | Ruling |
|---|---|
| 1 | Closed. Tehtävä 1 has 5 steps, step 6 is in Syvempi polku, "Ohita vaihe 1". |
| 2 | Open (one sentence). Line 95 "Muistisairaudet ovat aivosairauksia" over-reads khp00094; the dementia clause is missing. |
| 3 | Closed. ltt01290 only on ilmaantuvuus; esiintyvyys in the site's own words. |
| 4 | Closed. te3-02 K4 has the 5 p deduction line (line 379). |
| 5 | Open (one sentence). 5 cm and fever-after-travel are in Opiskelijalle with dated links. The K2 b) model line "Myös muu oire ... terveydenhuoltoon" is not on kpp00002. My item 5 asked for it; that was my error. |
| 6 | Open. K2 a) still asks for transmission and treatment of both diseases; Kuvaus A/B and Opiskelijalle give neither. They are only in the model answer, the state I rejected. |
| 7 | Closed. Water text and K3 b) follow the THL guide; no chlorine, no named authority. |
| 8 | Closed. K4 Aineisto 1 no longer gives the class, the report or the contact question. |
| 9 | Closed. te3-07 has K1-K3, safety_flags [], no Finlex rows or yearly-facts keys left. |
| 10 | Open (one sentence). The pathway is stated for floods only; for wildfires the page gives an association. |
| 11 | Closed. Väestöliitto line cut in 07 and reduced to "nuorten palveluja" in 08. |
| 12 | Not blocking, still open. A24-1 and S23-1 are not yet recorded as named gaps. |
| 13 | Closed. Plans say K1-K4 in 02, 03, 04 and 10; K1-K3 in 07 is correct. |

Rechecks' must-fix items, ruled:

- Facts, te3-04 K2 b) "muu oire" sentence: upheld. Delete it (or move it to unlinked own-words teacher guidance).
- Facts, te3-10 line 101 wildfires: upheld. Limit the pathway to floods; say "metsäpalot on yhdistetty ahdistukseen ja masennukseen".
- Facts, te3-03 line 95: upheld. Use "Alzheimerin tauti on hitaasti etenevä aivosairaus" and add that dementia is a syndrome caused by advanced memory diseases.
- Pedagogy, te3-04 K2 a) (item 6): upheld. Either add one dated line each to Kuvaus A (dlk00590: transmission, rest and pain relief) and Kuvaus B (dlk00570: respiratory secretions, antiviral), or drop transmission and treatment from the task, cut a) to 4 p and trim the model answer.
- Rechecks' minors (te3-03 read dates 2026-11-21 for khp00094 and ltt01290; te3-04 K4 not on the §16 template; te3-07 THL student-health link; K1 9 b "ei tartu tavallisessa kosketuksessa"): minors, not blocking. The Sekasin line is supported (facts recheck opened it).

Named gaps: S23-1 (child-mortality measures in order; no source ties the steps to child mortality) and A24-1
(four-way grouping only in Tehtävä 1, not in an exam task). Both still need a line in the diary and in Valmistelu.
TE1/TE2 untouched still cannot be verified: the folder is not a git repository.

Verdict after recheck: reject. Four one-sentence or one-line fixes remain (items 2, 5, 6 and 10), all in te3-03,
te3-04 and te3-10. No other item is open. A third round needs only these four edits and a facts check.

## Final recheck

Judge's recheck, 2026-11-22. I opened khp00094, dlk00590, dlk00570, kpp00002, dlk00011 and the Climate-ADAPT page myself. Build into my scratch folder: 0 errors, 0 warnings. TE3 files are 420-500 lines (02 and 10 at 500).

| # | Ruling |
|---|---|
| 2 | Closed. Line 95 now says Alzheimer's is a slowly progressing brain disease and dementia is a syndrome caused by advanced memory diseases. khp00094 says both. Risk factors and "todennäköisesti ehkäistä tai siirtää" are also on the page. |
| 5 | Closed. The "Myös muu oire" line is gone from the whole site. The K2 b) lines that remain (removal within a day, TBE in minutes, 5 cm, "paras näyttää lääkärille", redness missed on unchecked skin) are all on kpp00002. |
| 6 | Closed. Kuvaus A now gives droplet/airborne and hand spread, recovery without treatment and rest; Kuvaus B gives respiratory secretions and the antiviral. dlk00590 and dlk00570 state each of these. The model answer's extra details (pain relief, a day or two, yearly vaccine) are also on those pages. |
| 10 | Closed. Line 101 gives the damage, livelihood and displacement pathway for floods only and says wildfires "on yhdistetty" to anxiety and depression. Young people's vulnerability is on the page too. |
| 03 trims | No change of meaning that matters. Three small minors: the risk-factor line dropped "tunnettua"; "näytön vahvuuden mukaan" became "näytön mukaan"; and "voi olla pitkään oireeton" is slightly stronger than dlk00011's "ilman selviä oireita". None is wrong enough to block. |

Items 12 (A24-1 and S23-1 are still not recorded as named gaps) and the earlier minors stay open but do not block.

Verdict after final recheck: accept-with-minors.
