# Basis audit, round 2: judgement

Judge, 2026-11-23. I wrote none of the audited content. I edited no file except this one. Nothing is committed.

I checked against the lukio-runko content guideline and norm ledger, the round-1 judgement
(`2026-11-22-basis-audit.md`), and the round-2 results relayed to me: the config change, and group 1
(TE1 01, 02, 04, 05 and TE3 03) with fix, verify, redo and a second verify. The relay was cut off inside the
second verify. I judged the other groups from the files on disk.

## Build

- **0 errors, 170 warnings.** All 170 are repeat warnings. There are no length or section warnings, so every
  Opiskelijalle section is within the word limit.
- The repeat count went down: 204 at the last commit, 170 now.
- One new five-topic cluster comes from this round's edits. TE2 01-05 each got the same new sentence:
  "Pisteytys on sivuston harjoitusohje, joka seuraa YTL:n arvosteluohjeen periaatteita: ... ja aineistoon
  viittaamattomasta vastauksesta vähennetään pisteitä." See item 3 below.
- The other new clusters are source-list entries on the sources page (Ottawa text, two YTL pages) and the
  engine's "Tarkista ajantasainen tieto: THL" line. They are generated from front matter, not new prose.
- All files are at most 489 lines. All front matter parses as YAML.
- Visual novel lines: 30 "Pelaa aiheesta visual novel" lines, the same as at the last commit.

## What is fixed

Help blocks and content notes, in the topic files:
- No `## Apua ja tukea` section is left outside 08. 08 keeps one block, now an H3 inside Opiskelijalle.
- No `content_note` is left in any topic.
- No Sekasin, MIELI crisis line, 116 111 or kuraattori help pointer outside 08, except as subject content in
  TE3 05 sosiaali- ja terveyspalvelut (services) and as cited sources in 06 kestävä kehitys and 09 stressi.
- No praise formulas found. The one "Hyvä kysymys" is inside a fictional AI answer that students analyse.

Config and docs: `subject.yaml` no longer requires the help section. The contract has a D-014 addendum. The
style guide no longer teaches the 5 p deduction or content notes. D-014 is in `decisions/INDEX.md`.

Spot checks on disk (all confirmed):
1. 01: the K1 correction defines terveyden edistäminen with the Ottawa wording.
2. 04: the eating-disorder paragraph is gone and the heading is "Ruokapuhe".
3. 04: K1 item 9 cites Terveyskirjasto on BMI. The appearance sentence in the model answer is gone.
4. 03 terveyskulttuuri: "leimautuminen vähenee" is gone. K2 c now asks for an "asiallinen" answer.
5. 03 tarttumattomat: K2 b scores probability, not "ei ole syy".
6. TE3 07 eettisen analyysin näkökulmat: the help section is gone.
7. 09 stressi ja kriisit: the help section is gone. K3 c accepts either position, inside the case's own premise.
8. 08 mielenterveys: one help block, as an H3. No content note.
9. TE1 01, 02, 04, 05 and TE3 03: the yearly fact with the 112 line is gone from the pages.

## What remains

1. **112 line still renders on four pages.** TE1 06, 07, 09 and 10 list the yearly fact
   `opiskeluterveydenhuolto`. The engine renders its text on the student and teacher pages:
   "Omissa oireissa ota yhteys opiskeluterveydenhuoltoon, lääkäriin tai hätätilanteessa 112:een."
   Group 1 removed the same key for this reason. Action: remove the key from these four topics.
   TE3 05 also lists it, together with `sekasin_chat`. That topic is about services, so the operator may keep it.
2. **Teacher referral bullets remain** in other groups. Group 1 removed the same kind.
   - 01 terveyskäsitykset, Pelisäännöt: "Jos opiskelija kysyy omasta terveydestään, ohjaa opiskeluterveydenhuoltoon."
   - 06 seksuaaliterveys and 07 seksuaalioikeudet, Pelisäännöt: "Jos opiskelija kertoo huolestaan, kuuntele ja ohjaa
     opiskeluterveydenhuoltoon tai opiskeluhuoltoon ..."
   - 06 and 07, Valmistelu: "Selvitä ... opiskeluterveydenhuollon ja kuraattorin yhteystiedot".
   Action: delete them, or ask the operator whether teacher-side referrals may stay. Treat all topics the same.
3. **New TE2 scoring sentence misstates its source** and repeats in five topics. I opened the linked YTL grading
   instructions (autumn 2024). The page calls the parts osa 1, 2 and 3, not A, B and C. The 5 p deduction for not
   referring to the material is stated only for task 8. The sentence presents it as a general principle. It also adds
   a new unofficial scoring note, which is an operator-pending area. Action: remove the added clause from TE2 01-05,
   and restore the earlier text.
4. **The 5 p deduction is still taught in 24 topics.** 55 lines read "Jos vastaus ei viittaa aineistoon,
   kokonaispisteistä vähennetään 5 p." TE1 07-10 also state it in the opening paragraph. The style guide now says this
   line was house style and is not taught. Group 1 removed it from its files. Three labelled lines remain in 03
   tarttumattomat, which are acceptable. Action: remove the unlabelled lines, as group 1 did.
5. **03 tarttumattomat, K3 c (small).** The model answer ends "Ilman riskitekijöitäkin voi sairastua." The scoring
   gives 1 p for it, but the task does not ask for it. Action: drop the sentence and move the point to something
   c asks for. Keep "Yhteensä 5 p".
6. **05 liikunta ja uni, K2 b (small).** The model answer still ends "..., joten vastustuskyky voi heiketä." The TTL
   article does not say this. Round 1 already listed it. Action: drop the clause or label it as the site's inference.
7. **Style guide (small).** Section 10 still gives "Jos sinulla on oireita tai huolia, ota yhteyttä
   opiskeluterveydenhuoltoon." as the good example. Section 15 still says cases end in "a route to help". Both
   contradict D-014. The contract body still says the text sends students to "student health care, a doctor or 112".
   The addendum overrides it, so this one can wait.

## Pending operator decisions (not changed, as instructed)

- The repeated disclaimers about fictional materials ("Aineistot ovat kuvitteellisia", "Tehtävät ovat sivuston omia
  harjoitustehtäviä").
- The privacy lines ("Voit ohittaa kysymyksen", "Kenenkään ei tarvitse kertoa ...").
- The unofficial scoring notes ("Pisteytys on sivuston oma harjoitusohje, ei ylioppilastutkintolautakunnan.").
- The "Malliksi kelpaava vastaus" headings, and the filosofia vocabulary questions.
- Whether teacher-side referrals ("ohjaa opiskeluterveydenhuoltoon") and the school_adapts contact-detail entries may
  stay. Group 1 removed them; other groups kept them.
- Whether TE3 05 sosiaali- ja terveyspalvelut may keep the services yearly facts that end with the 112 line.
- The site's CLAUDE.md still says pages "send the student to student health care" and asks for "help links on every
  such page". That contradicts D-014. Only the operator may change CLAUDE.md.
- The engine has no optional section. The 08 block now lives as an H3. An `optional: true` flag would be an engine
  change.

## Verdict

**reject.** The build is clean, the help sections and content notes are gone, and the group 1 work holds up. But a
112 line still renders on four pages outside 08, teacher referrals remain in three topics, the 5 p deduction is still
taught in 24 topics, and this round added a five-topic sentence that misstates the YTL page.

## For the operator

- The build now passes with no errors, and repeat warnings fell from 204 to 170.
- Help sections and content notes are gone everywhere except the one block in mental health.
- Four pages still show a 112 line through a yearly fact. Group 1 fixed this; the other groups did not.
- The 5 p deduction is still taught in 24 topics. A new TE2 sentence misreads the YTL page.
- Please decide whether teachers may still be told to refer students to student health care.

## 23.11.2026, round 3

Judge, 2026-11-23. I wrote none of the audited content and edited no file except this one. Nothing is committed. I
checked the files on disk, not the fixer reports.

### Build

- **0 errors, 165 warnings**, built into my own out folder. All warnings are repeat warnings. Round 2 had 170.
- No new repeat cluster. The TE2 scoring-sentence cluster is gone. This round only deleted or shortened lines.
- All topic files are at most 486 lines. All front matter parses as YAML.
- Visual novel lines: 30, unchanged. No diff line touches them.
- No local paths, e-mails or keys in content, data or subject.yaml.

### Round-2 items

1. **Fixed.** `opiskeluterveydenhuolto` is gone from TE1 06, 07, 09 and 10. TE3 05 also dropped it and
   `sekasin_chat`. Only 08 lists it now. On the TE1 and TE3 topic pages, no "Omissa oireissa" line renders.
2. **Partly fixed.** The listed bullets are gone from 01 terveyskäsitykset, 06 and 07, and the TE3 05 Valmistelu
   bullet is gone too. The same bullets remain in two TE1 topics:
   - 09 stressi ja kriisit, Pelisäännöt: "Jos opiskelija kertoo huolestaan, kuuntele ja ohjaa opiskeluhuoltoon koulun
     käytännön mukaan." Valmistelu: "Selvitä koulun opiskeluhuollon yhteystiedot, ajanvaraus ja kriisisuunnitelma".
   - 10 opiskeluhyvinvointi, Pelisäännöt: the same "ohjaa opiskeluhuoltoon" bullet. Valmistelu: "Selvitä koulun
     opiskeluhuollon ja opiskeluterveydenhuollon yhteystiedot (esimerkki) sekä oppimisen tuen käytännöt."
   The 08 Valmistelu bullet may stay. The `school_adapts` contact entries are still pending with the operator.
3. **Fixed.** The added sentence is gone from TE2 01-05. The opening paragraphs of 01 and 03 match HEAD. In 05
   psykososiaalinen, the opening keeps an earlier one-topic note on the character limit. It is not part of the
   cluster.
4. **Fixed in the topics.** No unlabelled "kokonaispisteistä vähennetään 5 p" line is left in any topic, and the
   TE1 07-10 openings no longer say it. Three labelled "Sivuston harjoitusohje" lines remain in 03 terveyskulttuuri.
   Those are acceptable.
5. **Fixed.** In 03 tarttumattomat K3 c, the sentence is gone from the model answer. The point now goes to the limits
   of the material, which c asks for. "Yhteensä 5 p" is kept.
6. **Fixed.** In 05 liikunta ja uni K2 b, the answer ends with the TTL claim on inflammation and vaccine response.
7. **Fixed.** Style guide §10 has a knowledge example. "a route to help" is gone from §15.

### New findings (outside the topic files; round 2 missed them)

- **Site page `content/pages/polku.md`, line 9:** "Jos sinulla on oireita tai huolia, ota yhteyttä
  opiskeluterveydenhuoltoon. Hätätilanteessa soita 112." It renders on `polku/`. This is a referral and a 112 line
  outside 08. Action: delete these two sentences. Leave the privacy sentence before them, which is operator-pending.
- **Sources page `lahteet/`:** the engine prints the rule text of every yearly fact in `data/yearly-facts.yaml`,
  including facts no topic uses. The page shows "Omissa oireissa ... 112:een", "Kriisipuhelin 09 2525 0111 ...
  Hätätilanteessa soita 112", the 116 111 rule and the Sekasin/Apuu rule. The rule for this round says no yearly fact
  may render a 112 or helpline line outside 08. Action: in `data/yearly-facts.yaml`, delete the last sentence of
  `opiskeluterveydenhuolto` and of `kriisipuhelimet`. 08 already has 112 in its own help block. Delete the unused
  `mll_116111` and `sekasin_chat` facts. The Kriisipuhelin number would still show on the sources page, so the operator
  must choose: either the engine prints only facts that topics use, or the sources page may list 08's facts.
- **Site page `content/pages/opetussuunnitelma.md`, line 77:** "Jos vastaus ei viittaa aineistoon lainkaan,
  kokonaispisteistä vähennetään 5 p. ... Sääntö koskee sivuston kaikkia aineistotehtäviä." The topics no longer apply
  this rule, so the sentence is now false, and round 2 found that YTL states it for one task only. Action: delete the
  bold sentence and "Sääntö koskee sivuston kaikkia aineistotehtäviä." Keep "Ylioppilaskokeessa vähennys kerrotaan
  tehtäväkohtaisesti arvosteluohjeissa."
- **Small:** the TE3 06 itsehoito fact `itsehoitolaakkeet` renders "omissa oireissa ohjataan opiskeluterveydenhuoltoon,
  lääkäriin tai apteekkiin." It has no 112 or helpline, and the topic teaches self-care as subject content. It can
  stay. A rewording such as "omissa oireissa voi kysyä neuvoa apteekista tai terveydenhuollosta" is the operator's
  choice.

### Allowed 112 renders

TE3 05 shows 112 only as subject content: the service-path diagram, the "Hätätilanne" service list and a model answer.
It comes from no yearly fact. On the TE2 09 and 10 pages, "112" appears only inside a Terveyskirjasto URL.

### Verdict

**reject.** Six of the seven round-2 items are fixed, the build is clean and no repeat cluster was added. Three
breaches of this round's rules remain:
- referrals still sit in TE1 09 and 10;
- a referral and a 112 line are on the self-study page;
- the sources page prints the 112 and helpline facts.
Each is a short deletion. The opetussuunnitelma page still states the 5 p rule for all tasks.

### For the operator

- The topic pages are clean. 112 and helplines are left only in mental health and as subject content in the TE3
  services topic.
- Two topics (09 stressi, 10 opiskeluhyvinvointi) still tell the teacher to refer students. These lines are easy to
  delete.
- The self-study page and the sources page still show 112. The sources page lists every yearly fact, including
  helplines. Please choose: should the engine list only the facts topics use, or may it keep listing 08's?
