# Judgement: brief 004, TE2 content

**Judge:** Opus, workflow agent. I wrote nothing in this project. 2026-11-21.
**Ruled from files only:** `prompts/004-te2.md`, `CLAUDE.md`, `docs/content-contract.md`, `docs/style-guide.md`, the
ten TE2 files in `content/topics/` and `data/`. I opened no web page. Where an item rests on what a page says, I
rely on the checkers' records and say so.
**Read in full:** te2-01 (sample), te2-03 (02-04), te2-07 (05-07) and te2-10 (08-10), including their exam tasks,
model answers, help boxes and 45-minute plans. I also read the relevant parts of te2-05, 06, 08 and 09 for the open
items. I ran the build into the scratchpad (`0 errors, 0 warnings`). A script over all ten TE2 files checked plan
totals (75/60/45 in every topic), the fixed line (3 per topic), 112, no text before the first H2, line counts
(max 499) and Opiskelijalle length (393-584 words). A second script compared front-matter URLs with
`data/materials.yaml`.

## Verdict: accept-with-minors

The ten topics are complete and follow the contract. Every TE2 code (t1-t5, s1-s8) is served by a topic and by an
exam task. The flagged pages (07, 09, 10) have content notes and 112 first. Their help boxes now hold only services
that address young people, and Nollalinja and Peluuri have moved to the teacher notes. The pages give no figures,
amounts or methods, and no task asks for testimonies or self-disclosure. The round-0 must-fixes I checked are done:
the hand-written content-note blockquotes are gone, the ilmanlaatuindeksi link is in, kuvi.fi has been dropped,
te2-10 Tehtävä 3 now points at Finlex and the release, the hours have been removed from the text, and the TTL
työkyky link has been fixed.

None of the twelve open items is a safety defect or makes curriculum content optional. Each is an edit of a sentence
or two. Four of them change what a student reads, so they must be done **before the push**. They do not need
another judge.

## Final recheck's open items

| # | Item | Real? | Blocks? | Ruling |
|---|---|---|---|---|
| 1 | 09:421 and 10:443: "Sarja tunteja" cited to EHYT | Yes, per the facts record | No | Both topics already carry the THL school-prevention link in front matter. Change the citation to THL, or cite both. |
| 2 | Rahapelilaki release publisher (VM vs sisäministeriö) | Yes, per the record; I could not read the page | No | It appears in three places, not two: `materials.yaml` te2-10, `yearly-facts.yaml` `rahapelilaki`, **and** te2-10 front matter (official_links and linked_materials). Correct all three to what valtioneuvosto.fi shows. |
| 3 | 09: BuenoTalk in linked_materials, not official_links | Yes (script confirms; the only TE2 case) | No | Add it to official_links so it appears in Lähteet. Line 403 already says "ks. Lähteet" for EHYT/THL, so after the fix that pointer covers BuenoTalk too. |
| 4 | `materials.yaml` te2-02 to 08 stale vs front matter | Yes (script confirms every item listed; te2-01, 09, 10 now match) | No (no page reads it); fix before commit | This is the same failure as brief 002 item 2: the header says "tuotettu front matterista" and it is not. Regenerate te2-02 to 08 from front matter (add sekasin, THL opiskeluterveydenhuolto, mielenterveystalo, OPH opiskeluhuolto, sibling links, ilmanlaatuindeksi, ilmanlaatu, WHO Ottawa, TTL työkyky, Finlex 1383/2001; drop kuvi.fi from te2-03). Better still, add the generator that the data agent said is missing. |
| 5 | aoe 2319 excluded entry: wrong reason and title | Yes, per the record | No | The `excluded` list is never rendered. Correct the title and note: Swedish version of 2284, CC BY-SA 4.0, excluded as not Finnish-language. |
| 6 | 06:132: HiAP "on myös Ottawan ensimmäinen toiminta-alue" | Yes | No; **before push** | Student-facing. Health in All Policies builds on Ottawa's *terveyttä edistävä yhteiskuntapolitiikka* but is not the same thing. Change to "Se jatkaa Ottawan asiakirjan ensimmäistä toiminta-aluetta, terveyttä edistävää yhteiskuntapolitiikkaa, jonka tunnet …". This was a round-0 minor that the fix round left undone. |
| 7 | 07:438: Nollalinja "aikuisille ja kaikille väkivaltaa kokeneille" | Yes, per the record | No | Teacher note only. Reword to "naisiin kohdistuvaa ja lähisuhdeväkivaltaa tai sen uhkaa kokeneille, sukupuolesta riippumatta". Align the front-matter audience string (07 line ~67) with it. |
| 8 | "Aikuisella on velvollisuus toimia … lastensuojeluilmoitus" (07:437, 454; 09:420; 10:442) | Yes | No | The sentences sit in teacher notes, and they err toward getting the student help. But they state a legal rule with no dated source (CLAUDE.md rule 4), and the subject is too broad: the child-welfare notification duty falls on named professionals, school staff among them. Name the subject ("koulun henkilökunnalla, kuten opettajalla, terveydenhoitajalla ja kuraattorilla") and add a dated THL or Finlex link, which someone must read first. Until it has been read, the 07 wording "tarkista koulusi ohjeista" is the safe fallback for all four sentences. |
| 9 | 08 K3 a): "Se, ettei harva tiedä, …" | Yes (line 310) | No; **before push** | The double negative reverses the material ("harva" = few know). Change it to "Se, että harva tietää, keneltä …". |
| 10 | 08: K1 three-way classification vs the page's two environments; K2 calls unclear instructions a "vaatimus" | Yes (Opiskelijalle puts "työn sisältö ja organisointi" inside psychosocial; Osaan 2 names two environments) | No; **before push** | A student who follows the page would lose points on "vuorojen suunnittelu" and "ohjeet". Simplest fix: in K1 a) keep two classes and let "työn organisointi" be a sub-label of psychosocial. Change the three model rows to "psykososiaalinen (työn organisointi)" and let either label score. In the K2 b) model answer, change "ovat vaatimus" to "ovat voimavaran puute, joka lisää vaatimuksia", as K3 already words it. |
| 11 | 05 K1 items 5 and 8 (syrjintä, yhteisön normi) not taught on the page | Yes (syrjintä is named but not defined; "normi" appears only in K1 and its model answer) | No; **before push** | Add two one-line definitions to Opiskelijalle, near line 99 and line 41: *syrjintä* = worse treatment because of a personal characteristic; *yhteisön normi eli pelisääntö* = a shared rule on how to treat others. Opiskelijalle is at 497 words, so there is room. |
| 12 | (judge's own) 10 K1 item 7 option d): "eivät suosita" | Yes | No | Grammar error in a student item. Change it to "eivät suosittele". |

## Done-when lines

| Line | Ruling |
|---|---|
| The operator can read ten TE2 topics on GitHub | **Not yet, by design.** The ten files exist and build clean, but nothing is committed. Step 3 of the brief (producer commits and pushes) comes after the minors. |
| …each with linked materials | **Met.** Every topic has dated `linked_materials` with licence classes, and every non-excluded item also appears in official_links except BuenoTalk (item 3). |
| …exam-style tasks with model answers | **Met, with items 9-12.** There are 30 tasks, A20/B20/C30 in each topic. Headings match between Koetehtävät and Mallivastaukset. Every model answer has content and information-processing halves, links the rubric, adds up, and ends with the fixed line. The C30 splits vary. |
| …safe handling of violence and dependence | **Met.** Content notes come from front matter only. 112 comes first, and the help links (Sekasin/Apuu, Nettiturvakoti, RIKU youth section, Nuortenlinkki) are youth-addressed with read dates. The text has no hours, figures, amounts or methods. Responsibility is always placed on the person using violence. Gaming is not treated as dependence by default. Prevention is stated as curriculum content, not optional. The teacher notes rule out testimonies, self-tests and one-off lessons. Item 8 is a sourcing defect, not a safety one. |
| Every TE2 code covered by a topic and an exam task | **Met.** Script-verified: t1-t5 and s1-s8 appear in both topic `curriculum` and `exam_tasks` codes. |
| The checks passed or named | **Met.** The four round-0 checks failed and named their must-fixes. The fix round cleared those I re-checked. The final recheck names the twelve remaining items above. |
| The judge accepts | **Accepted with minors.** No re-judge is needed if the edits are made as written. |

## Remaining items

Before the push, because a student reads these:
1. te2-08 K3 a): "Se, että harva tietää, …".
2. te2-08 K1 and its model answer: two classes, with organisation as a sub-label. In the K2 b) model answer, use "voimavaran puute".
3. te2-05 Opiskelijalle: one-line definitions of syrjintä and yhteisön normi (pelisääntö).
4. te2-06 line 132: HiAP "jatkaa", not "on", Ottawa's first action area.
5. te2-10 K1 item 7: "suosittele".

Before the commit, in data and teacher notes:
6. `data/materials.yaml` te2-02 to 08: regenerate from front matter, or add the generator. Correct the aoe 2319 excluded note.
7. Rahapelilaki release publisher: fix in materials.yaml, yearly-facts.yaml and te2-10 front matter.
8. te2-09: add BuenoTalk to official_links.
9. te2-09 and 10 "Sarja tunteja": cite THL.
10. te2-07 Nollalinja audience: fix the wording in the note and in the front matter.
11. Duty-to-act sentences (07, 09, 10): name school staff as the subject. Add a dated source once one has been read, or use 07's "tarkista koulusi ohjeista" wording.

Carried, not blocking: the style guide is at 346 lines against the 260 limit (the operator decides); te2-10
Pohdinta Q1 uses "mielestäsi" (unassessed); te2-07 has 499 lines and 584 Opiskelijalle words, so item 10 must keep
its length neutral; aoe 4038 metadata expires on 2027-07-30; teacher, health-professional and safe-messaging review
are still `none`.

## For the operator

TE2 is accepted with minors: ten topics, every curriculum code covered, and the build is clean.
Violence and dependence pages are handled safely; help boxes list only youth services.
Five small student-facing wording fixes come first (topics 05, 06, 08, 10), then data and teacher-note tidying.
No safety or curriculum problem remains; nothing needs another judge.
Nothing is committed yet; the producer pushes after the fixes.
