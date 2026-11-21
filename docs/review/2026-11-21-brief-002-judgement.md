# Judgement: brief 002, TE1 content

**Judge:** Opus, workflow agent. I wrote nothing in this project. 2026-11-21.
**Ruled from files only:** `prompts/002-te1-content.md`, `CLAUDE.md`, `docs/content-contract.md`,
`docs/style-guide.md`, the ten files in `content/topics/` and `data/`. I opened no web page, so every claim about
what a page says rests on the data notes and the checkers' records. Where those disagree, I say so.
**Read in full:** te1-01 (sample), te1-03 (02-04), te1-07 (05-07) and te1-09 (08-10), with their exam tasks, model
answers, help boxes and lesson plans. I also ran a script over all ten files (H2 order, plan totals, exam-task count,
fixed line, Opiskelijalle word count, 112, link lists against `data/materials.yaml`).

## Verdict: reject (one narrow fix round, then accept)

The structure is sound. All ten files follow the contract's section order. Every plan adds up to 75, 60 and 45
minutes. Each file has three exam tasks with model answers and the fixed line, Opiskelijalle runs 422-511 words,
112 appears on every page, and every file is under 500 lines. Two content defects are not acceptable on a page for
students, and one data claim is false. All three are small edits.

## Final recheck's open items

| # | Item | Real? | Blocks? | Ruling |
|---|---|---|---|---|
| 1 | 03: source criticism is TE2 content | Partly | No | Osaan 5 and K2 are already narrowed to alternative treatments (TE1.s3). TE.yt2 is a subject-wide objective ("arvioida tiedon luotettavuutta"), so a short checklist in TE1 is allowed. Add one sentence saying systematic source comparison is deepened in TE2. Tehtävä 2 can stay. |
| 2 | materials.yaml does not match the topics | Yes | **Yes** | The note says the inventory "kattaa myös aiheiden official_links-osoitteet". It does not: the script finds 4-9 missing URLs per topic, including aoe 1852 for 01, THL Opiskeluterveydenhuolto for 02-10, and the OPH support page, aoe 1113 and aoe 1852 for 05-10. Generate the per-topic lists from front matter (one entry per URL, with licence class and read date), or cut the claim from the note. "Data files ready" is not true while the file misdescribes itself. |
| 3 | 06 body links an adult Sexpo service page with no front-matter entry | Yes, and worse | **Yes** | See item 11. |
| 4 | 01 licence text differs from the inventory | Yes | No | Lines 46 and 67 differ only in wording; the class is the same. Align with "Kaikki oikeudet pidätetään". |
| 5 | Opiskeluterveydenhuolto, UKK youth page, aoe 4704 missing from the inventory | Yes | Fixed with #2 | Same fix as #2. Keep aoe 4704 in 03's front matter only if the build is guaranteed never to render `excluded`; the contract says it does, so this can stay. |
| 6 | 06: "voi kysyä myös nimettömästi" has no source | Yes | Fixed with #11 | The sentence goes when the SeriE link goes. |
| 7 | 05: sleep need "vähenee iän myötä lapsuudesta lähtien" | Disputed | No | The files disagree: the first facts check says the page states this, the recheck says it does not, and yearly-facts records no passage. It is a stable rule, gives no figure and is not advice. Record the passage in yearly-facts or drop the clause. Not a blocker. |
| 8 | 10: survey "jonka perusteella arvioidaan terveystarkastuksen tarve" | Yes | No | The yearly-facts note does not support that wording. Reword to what the note records (survey at the start of studies, run by student health care), and keep the link. |
| 9 | 07 K3: the model answer treats teaching about diversity as optional | Yes | **Yes** | "Kanta 2: aihe jätetään kodin asiaksi ... koulun on kunnioitettava sitä", together with equal points for either stance, presents a curriculum content (TE1.s5: seksuaalioikeudet) and the school's equality duty as negotiable. Keep the dilemma, but make the stance the student argues about *how* the school informs and involves guardians, not *whether* the topic is taught. State in the model answer that the content belongs to the curriculum. Change "he usein kokevat syrjintää" to "he voivat kokea syrjintää". |
| 10 | content_note: blockquote only in 06/07 | Yes | No (for this brief) | It is an engine question. Record in the build brief that the engine renders `content_note` at the top of the page and of the lesson plan. Then remove the hand-written blockquotes from 06 and 07. Do it before the first build. |
| 11 | 06 links an adult Sexpo service page (safety) | Yes | **Yes** | Project files (the 05-07 writer's report, the facts checker, the materials.yaml note "ei SeriE-palvelu") all describe SeriE as a service for people whose sexual interest is directed at children, and for professionals. The body calls it a "neuvontapalvelu" for students. Remove the link and the sentence. If a Sexpo link is wanted, use https://sexpo.fi/, which is already in materials. |
| 12 | 05-07: offline alternatives point to the page's own sections | Yes | No | The style guide says "no printout". This applies to 05 T2/T3, 06 T2/T3 and 07 T2/T3, and also to 01 T2 (the sample uses the same pattern). Write the needed facts on the task itself. Quality fix, not a blocker. |
| 13 | 08-10: offline Tehtävä 3 (and 09 T2 step 5) point to page sections | Yes | No | Same as #12. |
| 14 | 09: the 45-minute plan asks for a crisis-phase sentence it never teaches | Yes | No | Change the 7-minute closing sentence to the stress chain, or name the four phases in the 7-minute alustus. |
| 15 | 01 K2: "one factor per level" but the model gives two | Yes | No | Change the task text to "yksi tai kaksi", or trim the model. Scoring per row still works. |
| 16 | 03 K1 and 04 K2/K3 "Harjoittelee" labels overclaim | Partly | No | 03 K1: no row on how health-culture phenomena form, so drop Osaan 1. 04 K2: part a (weight as a health measure) does exercise Osaan 3, but Osaan 1 is weak, so drop it. 04 K3: no weight content, so drop Osaan 3. Coverage stays complete without those labels. |
| 17 | 10 K1 claims Osaan 2 | Yes | No | No statement is about lifestyle. Drop 2 from the label, or turn one correct statement into a lifestyle one. |

## Done-when lines

| Line | Ruling |
|---|---|
| All ten TE1 topics exist as complete Markdown files to the contract | **Met in form; not yet in content.** Structure and counts pass. Items 9 and 11 are contract violations (inclusive wording; help links that are safe and correct). |
| ...each with linked existing materials | **Met.** Every topic has dated materials with licence classes. The excluded aoe 4704 is recorded only. |
| ...exam-style tasks and model answers | **Met.** 30 tasks, A20/B20/C30 in each topic, the YTL types, points that add up, the fixed line, and value-neutral rubrics in 03 and 07 (apart from item 9's framing). |
| The style guide is ready | **Met.** |
| The data files are ready | **Not met** until item 2 is fixed. curriculum.yaml is good. yearly-facts carries honest "not read" notes for the Finlex rules, and no topic uses those rules. |
| The judge accepts | **Not yet.** Accept once items 2, 9 and 11 are fixed. Items 1, 4, 7, 8 and 12-17 can be minors in the same pass. |
| The operator sees the pages when the site is built | Out of scope here; it waits for the engine (item 10 goes into that brief). |

## Remaining items (blocking first)

1. **Blocking:** te1-06 'Mistä apua ja tietoa saa?'. Remove the an adult Sexpo service page link and the anonymity sentence.
2. **Blocking:** te1-07 K3 Mallivastaus. Teaching diversity is not optional. The stance debate is about how guardians
   are informed and involved. Change "usein kokevat" to "voivat kokea".
3. **Blocking:** data/materials.yaml. Make the per-topic lists match the front matter (generate them), or correct
   the note's coverage claim.
4. Minor: offline alternatives must be self-contained in 01 T2, 05-07 T2/T3, 08-10 T3 and 09 T2 step 5.
5. Minor: te1-09 45-minute plan, the crisis-phase sentence.
6. Minor: "Harjoittelee" labels in 03 K1, 04 K2/K3 and 10 K1; 01 K2 task wording.
7. Minor: te1-10 survey wording; te1-05 sleep clause; te1-01 licence wording; a TE2 note in te1-03.
8. Build brief: the engine renders content_note (page and lesson plan); then delete the blockquotes in 06 and 07.

## For the operator

- Not accepted yet. Ten complete topics exist, but three small fixes are needed first.
- One help link on the sexual-health page points to the wrong service, and it is being removed.
- One model answer suggests teaching about sexual and gender diversity is optional. It is being reworded.
- The materials list in data/ claims to be complete but is not. A script will regenerate it.
- Nothing is committed. After this fix round I expect to accept.

## Re-judgement 2026-11-21

**Judge:** Opus, workflow agent. I wrote nothing in this project. **Ruled from files only:** CLAUDE.md, the brief,
the contract, the style guide, the first judgement above, the working-tree diff, `data/`, and the three checkers'
records of this round. I opened no web page; where a ruling rests on what a page says, it rests on a checker's
record or on the URL itself. **Read in full:** te1-06, te1-07, te1-05 and te1-10. Spot-read te1-02, te1-03 and te1-09
for the label and plan items. Script: line counts, a SeriE grep over `content/` and `data/`, a grep for the help URLs,
and a grep for local paths.

### Verdict: accept with minors

The three blockers are fixed. What is left is mechanical: an honest relabel of two help links, one self-contained
offline line, one line-limit trim, and quality fixes to plans and labels. None needs a new source, a new page read or
a new judgement. The producer applies items 1-3 of the list below and confirms them by grep and line count before the
commit. Items 4-6 may go in the same pass or the next brief.

| # | Item | Real? | Blocks? | Ruling |
|---|---|---|---|---|
| B1 | te1-06: SeriE link and anonymity sentence | Fixed | – | No `serie` anywhere in `content/` or `data/`. The only Sexpo link is the root, audience opettaja. The new youth source (Väestöliitto nuoret) is in the body, help box, official_links and materials, and promises no chat. |
| B2 | te1-07 K3: diversity teaching treated as optional | Fixed | – | Material, sub-questions and model answer now say the content belongs to the curriculum and the equality duty; the dispute is how guardians are informed and involved. "voivat kokea" is in. A typical-error bullet guards against the old framing. |
| B3 | materials.yaml does not match the front matter | Fixed | – | Regenerated per topic from the three front-matter fields; the note no longer claims body-link coverage. The generator lives outside the project, so the file goes stale when front matter changes; record that in the diary. |
| 1 | THL "Opiskeluterveydenhuolto" glossed as student help | Yes | Fix before commit | The URL itself is `thl.fi/ohjeita-ammattilaisille/...`, so the files alone show the page is written for professionals. Not unsafe, but mislabelled. Relabel, do not replace. In the help box of te1-02 to te1-10 the bullet becomes: "[Opiskeluterveydenhuolto, tietoa ammattilaisille (luettu 21.11.2026)](url): taustatietoa siitä, mitä opiskeluterveydenhuoltoon kuuluu. Oman ajan varaat koulusi tai hyvinvointialueesi kautta." In te1-07 line 161 unlink the word *opiskeluterveydenhuollosta*, as te1-06 already does. In the front matter and materials set the audience to opettaja or add a note. The student route stays in the help-box sentence ("Koulusi kertoo, miten aika varataan"). |
| 1b | OPH "Opiskeluhuolto" gloss | Yes | Fix before commit | The data note says the content was not read closely; the safety checker opened it and records that it is mainly for education providers but states students' right to kuraattori and psykologi. Gloss in te1-01 to te1-10: "tietoa opiskeluhuollosta ja opiskelijan oikeudesta kuraattori- ja psykologipalveluihin. Sivu on kirjoitettu pääosin kouluille." Update the materials note to cite that reading. Tehtävä 3 step 1 in te1-08 and te1-10 ("millaisia ammattilaisia opiskeluhuoltoon kuuluu") fits the page and can stay. |
| 2 | te1-07 Tehtävä 2 offline line not self-contained | Yes | Fix before commit | Same defect as item 12 of the first judgement. Step 2 becomes "Peitä tarkistusrivi ja kirjoita jokaiselle selitys omin sanoin." Step 3 becomes "Tarkista selitykset tarkistusriviltä ja korjaa." Add under the steps: "*Tarkistusrivi (peitä se kirjoittaessasi):* seksuaalinen suuntautuminen = keneen ihminen ihastuu tai tuntee kiinnostusta; sukupuoli-identiteetti = kokemus omasta sukupuolesta; sukupuolen ilmaisu = tapa ilmaista sukupuolta, esimerkiksi pukeutumisella tai puhetavalla; sukupuolen moninaisuus = sukupuolta koetaan ja ilmaistaan monin tavoin; syrjintä = huonompi kohtelu esimerkiksi suuntautumisen tai sukupuolen vuoksi." The offline line then reads "Tämä on paperitehtävä. Tee vaiheet 1–5 paperilla." The writer's objection that this defeats the self-check does not hold: covering the line is the self-check. |
| 3 | te1-07 is 501 lines (new) | Yes | Fix before commit | CLAUDE.md rule 8 and style guide section 13: no file over 500 lines. The checkers did not catch it. Item 2 adds one line, so cut at least two: drop one of the six Avoimet kysymykset (5-8 allowed) and merge the Valmistelu line on UNESCO and OPH into the line above it. te1-06 is exactly 500, which passes rule 8 but not the style guide's "under 500"; anything added there needs a matching cut. Do not remove the content_note blockquotes; that stays with the engine brief. |
| 4 | te1-10 plans: the alustus names no learning way | Yes | No | Goal Tehtävä 2 step 1 needs the five ways. In all three plans the Lyhyt alustus teacher cell names them (aktiivinen kertaus, jaksotettu kertaus, pilkkominen, palautteen käyttö, tauot) next to the goal example. Replace the 45-minute fallback "Tavoite kotiin" with "Näytä vain tapojen nimet ja esimerkkitavoite." |
| 5 | te1-05 plans: factor kinds and levels not named | Partly | No | The 75-minute Työskentely teacher cell names the five kinds; the levels Y, Yh and Yk appear in no plan, and the 45-minute plan names neither. Add to the alustus teacher cell in all three plans: "ohjaavat tekijät: tarve, käsitys, asenne, arvo, olosuhde; tasot Y, Yh, Yk". Same quality class as first-judgement item 14. |
| 6 | te1-09 75 and 60-minute plans: crisis types not named; contradictory fallback | Yes | No | Add "kehityskriisi ja traumaattinen kriisi" to the alustus of both plans. Replace the 75-minute fallback "Siirrä kriisin vaiheet Tehtävään 2" and the 60-minute "Kriisin vaiheet kotiin" with "Näytä vaiheet nimillä ilman esimerkkejä." |
| 7 | Harjoittelee labels | Yes | No | te1-02 K1: drop Osaan 2 and 3 (the true/false set only describes). te1-03 K1: drop 5 (row 5 defines, it does not judge reliability). te1-03 K2: drop 3 (no medicalisation). te1-07 K3: drop 4 and add 3 (part c is the syrjintä-and-support chain); keep 1, since part a names rights. Coverage stays complete: in te1-02, 2 and 3 are carried by K2 and K3; in te1-03, 5 by K2; in te1-07, 4 by Tehtävä 3. |
| 8 | Other minors from the checkers | Yes | No | te1-07 help box: the "nuorille tarkoitettu chat-palvelu" gloss sits on the seksuaaliterveys link, but the youth counselling is on vaestoliitto.fi/nuoret; gloss the first link as "tietoa seksuaaliterveydestä" or point it to the nuoret page. `data/yearly-facts.yaml`, key terveyskysely_opiskeluterveydenhuolto: cut "Sen perusteella arvioidaan terveystarkastuksen tarve", which the note does not support. te1-05 Tehtävä 1 offline: "omalla henkilölläsi" becomes "keksimälläsi henkilöllä". The mismatch between an invented person offline and the named case in the steps (te1-01, 03, 05, 06, 07, 08, 09), te1-06 tunnerintasi.fi and a RIKU link in te1-06, and the other checker minors may go to the next brief, within item 3's line budget. |
| 9 | Local path in a committed research file (new to this list) | Yes | Blocks the push, not this commit | `docs/research/2026-11-21-scouting.json` names a local folder path three times (around lines 823 and 866-867). Public hygiene forbids it. Scrub it before the first push and run the pre-publish scan over all tracked files. |
| 10 | content_note duplication | – | – | Left for the engine brief, as before. |

### Done-when lines

| Line | Ruling |
|---|---|
| All ten topics complete to the contract | **Met** once items 1-3 are applied. The checkers confirmed structure, plan totals, points and the fixed line; te1-07's line count is the one hard-limit breach. |
| ...with linked existing materials | **Met.** |
| ...exam-style tasks and model answers | **Met.** The labels in item 7 overclaim, but coverage holds without them. |
| The style guide is ready | **Met.** |
| The data files are ready | **Met.** One sentence in yearly-facts to cut (item 8). |
| The judge accepts | **Accepted with minors**, on condition that items 1-3 are applied before the commit. |

### Remaining (in order)

1. Before commit: relabel the THL help link as background for professionals in te1-02 to te1-10, unlink it in te1-07
   line 161 and adjust its front matter and materials entry; reword the OPH Opiskeluhuolto gloss in te1-01 to te1-10
   and its data note.
2. Before commit: te1-07 Tehtävä 2 gets a self-check line with the five definitions, and its offline line becomes
   self-contained.
3. Before commit: te1-07 at or under 500 lines (cut at least two lines after item 2); keep te1-06 at or under 500.
4. Plans in te1-10, te1-05 and te1-09: name in the Lyhyt alustus rows what the goal task needs (items 4-6).
5. Harjoittelee labels in te1-02 K1, te1-03 K1 and K2, and te1-07 K3 (item 7).
6. te1-07 Väestöliitto chat gloss; the yearly-facts terveyskysely sentence; te1-05 "omalla henkilölläsi".
7. Before the first push: scrub the local path from the scouting JSON and run the pre-publish scan.
8. Engine brief: render content_note, then delete the blockquotes in te1-06 and te1-07.

### For the operator

- Accepted with small fixes. The three problems from the first review are gone.
- Two help links lead to pages written for professionals and schools. They stay, but get honest labels.
- One page is a line over the length limit, and one task still needs the page to check answers. Both are quick edits.
- Nothing is committed or pushed. A research file holds a local folder path that must go before the first push.
