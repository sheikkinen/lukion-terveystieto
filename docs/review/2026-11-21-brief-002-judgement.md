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
