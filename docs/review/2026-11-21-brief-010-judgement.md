# Judgement: brief 010 (TE3 *Terveys ja yhteiskunta*)

Judge on Opus, 2026-11-21. I wrote nothing that I judge. I read prompts/010-te3.md, CLAUDE.md,
docs/content-contract.md with its addendum, the style guide's TE3 section, and data/materials.yaml and
data/yearly-facts.yaml where an item points to them. I read te3-01, te3-03 and te3-09 in full, and te3-06 in part:
its student text, tasks, exam tasks and scoring. That covers the lead writer plus one topic from each writer group.
For every open item I checked the named passage in te3-02, 04, 05, 07, 08 and 10. I built into my own scratch folder
and got 0 errors and 0 warnings. I opened no web pages. Where a ruling depends on what a page says, I rely on the
checkers' reports and the authors' own notes in yearly-facts.

## Verdict: reject

The module is mostly there. Ten TE3 topics build cleanly, every TE3 code has a topic and an exam task, the safety
check passed, the earlier must-fix items are fixed (Valvira, syyhy, the HIV sentence, the TE1 link in 07 and the
TE2/TE3 curriculum listing), and the re-mapping shows 66.7% full coverage. But the final recheck left items that
break the contract or the one law. Two tasks go over the 5-step cap. Some sentences are not supported by their
source or are wrong (the type 2 diabetes trend, the tuberculosis prevention cell, organ donation, the definition
of an epidemic). 07 promises an example that is not on the page. The 02 cloze scoring rewards guessing while the
page tells students not to guess. Each fix is a paragraph or less, so one more fix round should close them.

## Mechanical checks (judge's own)

| Check | Result |
|---|---|
| Build into own out folder | 0 errors, 0 warnings |
| TE3 line counts | 412-441, none over 460 |
| Orders and ids | 21-30, te3-NN-slug, no collision with TE1 or TE2 |
| Curriculum and home pages | TE1, TE2 and TE3 sections with `{{module_codes}}`; the home page names all three modules |
| C30 content points (01, 03, 09 checked) | Sum to 15 and name every sub-part |
| te3-03 K3 table arithmetic | 60/20 000, 40/10 000 and 80/40 000 match 300, 400 and 200 |

## Open items from the final recheck

The 20 listed items come down to 14. The same te3-03 gap was raised three times. The 05 and 06 step caps were each
raised by both the curriculum and pedagogy checkers.

| # | Item | Real? | What I found | Blocks? |
|---|---|---|---|---|
| 1 | te3-03 lacks memory disorders, metabolic syndrome, carcinogen classes, bone health, rheumatic disease and functional capacity | Real | Valmistelu line 370 is a production note ("lisää luotettava lähde") in the teacher view. Opiskelijalle covers none of these, only a definition of toimintakyky. | Yes, the wording. Rewrite the Valmistelu bullet as a plain statement of the gap that says matriculation exams have asked about these topics, and drop the production instruction. Record the gap in the diary and in the re-mapper input. Adding the content with dated sources is welcome but not required this round. The item allows a named gap. |
| 2 | 05 Tehtävä 2 has 6 steps, and step 6 says "lapsi tarvitsee tukea koulussa", which situation D does not say | Real | Confirmed. Step 6 has several actions. | Yes (contract cap). Trim to 5 single-action steps and make situation D and the step say the same thing. |
| 3 | 06 Tehtävä 2 has 7 steps, mixing a source table, medicine classes and Kela | Real | Confirmed. Kela is already practised in K2 c), so step 7 can go. | Yes (contract cap). Cut to 5 steps. |
| 4 | te3-01 salutogenic sentence misstates the Hoitotiede abstract | Real per the checker | The text says the abstract "esittelee" the sense-of-coherence measures. The checker says the abstract looks for measures beyond them. The page sits behind a bot check. | Yes (one law; one line). Reword to what the article does, or cut the attribution. |
| 5 | te3-01: materials.yaml has the download URL but the front matter has the view URL; the Kansanlääkintä label is stale | Real | Confirmed (materials.yaml line 2512). | No, minor. Align the URL and relabel to Kansanparannus. |
| 6 | te3-03 type 2 diabetes: the trend in young people, family history and gestational diabetes are not on dlk00011 | Real | The sentence is still in the text. | Yes (one law). Remove it, or cite a page that states it. |
| 7 | te3-04 tuberculosis row: "ilmanvaihto, rokotus riskiryhmille" | Real | The two cited pages do not state the prevention measures. The facts checker found BCG for at-risk children on the THL programme page, which is already linked. | Yes (one law). Cite that page for the vaccination and drop "ilmanvaihto", or drop the cell. |
| 8 | THL Opiskeluterveydenhuolto help link is written for professionals and labelled unevenly | Real | 02-04 say "tietoa palveluista", 05-07 say "kirjoitettu ammattilaisille", 08-10 give no note. | Yes (brief: help links read for their audience). Use one honest label on all nine pages, or link a student-facing page. |
| 9 | te3-09 organ donation rests on a 2010 STM release with different wording | Real | The project's own yearly-facts note says to check it against Finlex before publishing. | Yes. Align the wording with the source ("ellei tiedetä tai oleteta vastustaneen") and add a current official source, or mark the sentence as dated. |
| 10 | te3-08 abortion threshold, fertility-law claims, materials.yaml | Partly fixed | The threshold and the authority now cite the LVV page (read 21.11.2026). The fertility-law sentence (adult donor, child's information at adulthood) still cites a Finlex page nobody could read. LVV and the WHO Ottawa actions page are missing from materials.yaml. | Fertility sentence yes: verify it against the consolidated text from the Finlex open API, or cite a read page. The materials sync is minor (re-run the generator). |
| 11 | te3-02 K1 cloze: two options per gap with +2/−1 scoring | Real | Confirmed: all ten gaps have two options. Guessing gains +0.5 p per gap, but the lesson plan says "väärä vastaus vie pisteen". | Yes. Give each gap three or four options, and keep the model answer and the 20 p total. |
| 12 | te3-04: wrong definition of epidemic, missing content, 45-min plan | Real | The epidemic definition ("suurella osalla alueen väestöä") is wrong in the text and in the S2 glossary. Valmistelu line 371 says "koetehtävät eivät vaadi niitä", which is false for the exam (S24-2, A24-3). | Definition yes: clearly more cases than expected. Valmistelu sentence yes: same fix as item 1. Content gap and 45-min plan: no; record them as a named gap. |
| 13 | te3-07: seven viewpoints never defined, wallet example missing, TE1 uses six | Real | The table heading says "Pikakertaus Kimin lompakon avulla", but no wallet case follows, and all three lesson plans say to use it. TE1-07 lists six viewpoints (norms and duties together). | Yes. Add the wallet case with one line for each of the seven viewpoints, and one sentence explaining that TE1 grouped norms and duties together. |
| 14 | te3-10: global inequality is thin | Real | Two sentences, with no task or exam part. Osaan 1 and TE3.s10 promise both Finland and the world. | Yes. Add a short sourced global paragraph (the WHO social-determinants page, already linked) and one task step or exam sub-part that uses it. |

## Done-when lines

| Line | Status |
|---|---|
| Ten TE3 topics readable on the site | Met in the build (0/0). Not live yet: the producer pushes after acceptance. |
| Each with linked materials | Met. linked_materials and official_links are in every topic. The materials.yaml sync is out of date (minor, items 5 and 10). |
| Exam-style tasks with model answers | Met. Three per topic, with half-and-half scoring, typical errors and the fixed line. Items 11 and 13 are defects inside them. |
| Balanced handling of ethical questions | Met. 08 and 09 have symmetric positions, no verdict asked, content notes and help sections; the safety check passed. |
| Every TE3 code covered by a topic and an exam task | Met (curriculum checker, 4 objectives and 10 contents). |
| Checks passed or named | Named. All four checkers' remaining items are above or in the minors. |
| Re-mapping reported | Met. See below. |
| The judge accepts | Not this round. Items 1-4, 6-9, 10 (fertility sentence) and 11-14 are open. |

## Exam re-mapping (38 rows, 556.5 weighted points)

Full 66.7%, partial 30.9%, none 2.4%. The brief's expected answer (at least 60% full, none 0%) is half met. The
"none" rows are S25-2 (travel health and malaria), A25-3 (special diets, which are TE1) and A26-1 (study design,
which is TE2). The re-mapper also lists A26-7 (work ability, which is TE2) among them. The main partial gaps are in
te3-04 (cold versus influenza, malaria, salmonella, communicable disease law) and te3-03 (metabolic syndrome,
osteoporosis, memory disorders). These are content gaps, not defects. Items 1 and 12 require them to be named
honestly. Filling them is work for a later brief.

## Minor (fix while the file is open, does not block)

- te3-04's 45-minute plan teaches neither vaccines nor antimicrobial resistance (Osaan 2 and 4).
- te3-09 hoitotahto: say that refusing a named treatment binds professionals and that other wishes guide care.
- te3-02 epidemiological transition: name Omran (three phases) and the later two-phase addition, as Wikipedia does.
- te3-03 syöpä: cite the carcinogen sentence to a source that names causes of cancer, not only NCD risk factors.
- yearly-facts notes that still say "tutkija luki" for pages the checkers have now read (hiap_helsinki_2013 and others).

## For the operator

1. Reject, but close: 14 small fixes, none of them structural; one fix round, then a recheck.
2. Content is clean on safety and balance; the faults are unsupported sentences, step caps and two scoring flaws.
3. Exam fit is 66.7% full; travel health, flu versus cold and metabolic syndrome are left as named gaps.
4. Organ donation and the fertility law must be checked against current law text before the push.
5. Nothing committed.

## Recheck after fix round 2

Same judge, 2026-11-21. I read every item's passage on disk, built into my own scratch folder (0 errors, 0
warnings) and counted lines: TE3 topics are 417-444, none over 460. I opened no web pages; source rulings rest on
the rechecks, where at least one checker opened each contested page (Hoitotiede, dlk00011, kudoslaki 9 §, the
fertility law 13 § and 23 §, WHO social determinants).

| # | Ruling |
|---|---|
| 1 | Closed. te3-03 Valmistelu states the gap plainly and names the exam; four short sourced entries added (Osaan 6, K2 row). |
| 2 | Closed. 05 Tehtävä 2 has 5 steps; situation D and step 2 match. |
| 3 | Closed. 06 Tehtävä 2 has 5 steps; the Kela step is gone. |
| 4 | Closed. The sentence says what the article does; the pedagogy checker read the abstract. |
| 5 | Closed. View URL and Kansanparannus label in front matter and materials.yaml. |
| 6 | Closed. Family history and gestational diabetes removed; three checkers found the young-people trend on dlk00011, so my earlier claim was wrong. |
| 7 | Closed. BCG for children at raised risk, cited to the THL programme; "ilmanvaihto" dropped. |
| 8 | Closed. One identical help line on all ten pages, no THL link in the help box. |
| 9 | Closed on the page (kudoslaki 9 §, read). Data side open, see below. |
| 10 | Closed. Fertility sentence verified in the Finlex consolidated text; LVV and Ottawa actions are in materials.yaml. |
| 11 | Closed. Three options per gap; the guessing advice now matches the scoring. |
| 12 | Closed. "Odotettua enemmän" in text and glossary; Valmistelu is a named gap; 45-min plan covers vaccines and resistance. |
| 13 | Closed. Seven-row wallet table and the TE1 six-viewpoint sentence. |
| 14 | Closed. WHO 33-year and 13-times figures, used in Tehtävä 2 step 5. |

**Remaining must-fix from the rechecks.** The elinluovutus entry in data/yearly-facts.yaml (facts and curriculum
checkers). Real: it renders as a fact box on the te3-09 page, links the 2010 STM release and says "sivusto ei esitä
lakipykäliä" directly below a sentence citing kudoslaki 9 §. Not blocking: the rule it states agrees with 9 §, so no
health fact is wrong. It is a pre-push condition: point rule, url, publisher and note at the Finlex consolidated text
(read 2026-11-21) and drop "tarkistetaan ennen julkaisua". Align the hedelmoityshoitolaki url with the open-data URL
in te3-08 at the same time (real, not blocking).

**Minors to fix while files are open (not blocking):** te3-08 cite STM 2023 after the on-request-to-week-12 sentence;
te3-10 NCD sentence to the WHO 75% wording or no figure; THL professional page still in 05-07 front matter; te3-04
tartuntatautilaki to the open-data URL; steps that still bundle two actions (04 T2/T3, 05 T2 s5, 09 T3 s5, 10 T2 s5);
te3-10 K2 uses "välittävä tekijä" undefined in the student text; te3-03 K1/K2 answers lean on blood tests and risk
factors the text does not state; self-study minute totals; stray periods before links in 09 and 10; inline citations
by name in 03 and 04 (the links do render in the page source list).

**Coverage gaps still named (for a later brief):** te3-03 carcinogen classes, rheumatic diseases, fuller heart disease
and diabetes; te3-04 water treatment, autoimmune diseases, zoonoses beyond the definition, travel health and malaria
(S25-2) and flu versus cold as tasks; te3-02 ordered child-mortality measures (S23-1); screening ages and intervals;
euthanasia legal status (pending, unread). Student-text word counts on 02-04 are at the 600 limit.

Verdict after recheck: accept-with-minors (condition: fix the elinluovutus data entry before the push).
