# Repeat clean-up, 2026-11-23

**Decision:** the operator answered "Decide on the repeated per-page notes now?" with "Remove repeats". This applies
row 5 of the norm ledger in lukio-runko (`docs/norm-ledger.md`): a site-wide fact is stated once on a site page, and
topic pages do not repeat it. The contract addendum of the same date records the rule changes
(`docs/content-contract.md`); the style guide now says where each note is said once.

**Input:** the repeat report of the build with lukio-runko v0.5.1 before this clean-up. Every main-region cluster that
appears in three or more topic groups is classified below by reading its text. Repetition alone was not a reason to
remove anything: task instructions, lesson steps, model answers and their criteria, curriculum texts, sources,
headings, labels and subject content stay.

**Not touched:** the one help block in TE1 08 mielenterveys (D-014) and the services, 112 included, that TE3 05 teaches
as subject content.

## Result

| | Clusters (main region, 3+ topic groups) | Build |
|---|---|---|
| Before (v0.5.1, before this clean-up) | 159 | 0 errors, 164 warnings |
| After (content clean-up, engine before its stamp change) | 144 | 0 errors, 149 warnings |
| After (content clean-up, current lukio-runko v0.5.1 working tree) | 142 | 0 errors, 145 warnings |
| After the verifier restored the link-out lines (final check, 23.11.2026) | 146 | 0 errors, 146 warnings |

Of the 160 clusters classified, 21 are in scope and 139 out of scope. After the clean-up every in-scope cluster is gone
from the report. The last two, the engine's timing stamp *(esimerkki, koulu päättää)*, left the report when
lukio-runko v0.5.1 (`views_topic.py`, not yet committed) stopped printing it; the rebuild of 23.11.2026 confirms it.
One new cluster appears: "Kirjoita vastaukset omaan muistioosi.", the Pohdinta instruction that stays.

## Open for the main session

- **Label "Sivuston ehdotus opettajalle" / "Sivuston ehdotus" in Pelisäännöt** (TE1 01–07 and 09, as a bullet
  opening or an italic intro line). It looks like the same kind of stamp as *(esimerkki, koulu päättää)*, but it is
  what marks those lines as house style and not a rule (norm-ledger row 10). Removing it means rewording, and it
  could turn suggestions into rules. Left as is; needs a decision.
- **Push order.** `requirements.txt` pins `lukio-runko@v0.5.1`. That tag is not on the remote yet (latest remote tag
  v0.5.0); v0.5.1 exists only as uncommitted changes in the engine, including the `views_topic.py` change that removes
  the timing stamp and the yearly-facts note. The engine must be committed, tagged v0.5.1 and pushed before this site,
  or the site's CI cannot install the engine.

## What is now said once

- **Polku** (added): exam tasks can be done in parts and without a time limit; every topic has a visual novel based on
  its content, playable in the browser on a phone too; slow reading or writing: ask the school's learning support,
  and the study counsellor (opinto-ohjaaja) for the matriculation exam's special arrangements.
- **Opetussuunnitelma** (added): YTL sets the exam tasks from the subject's compulsory and national optional studies,
  so one module's tasks practise only part of the exam. Basis: YTL, *Reaaliaineiden kokeiden määräykset ja ohjeet*,
  section 2.1, read 23.11.2026 (also in the page's `official_links`).
- **Already there, nothing added:** the scoring and the tasks are the site's own (etusivu, opetussuunnitelma);
  materials are labelled *kuvitteellinen* (opetussuunnitelma; each material keeps its label); no one has to tell
  about their own health (etusivu, polku); the self-study mark is stored only in this browser (polku *Omat tietosi*,
  etusivu); changing figures are linked, not copied (etusivu *Ajantasaisuus*); tasks work on paper
  (saavutettavuus); timings are examples and the school decides (etusivu, opetussuunnitelma).

## Beyond the cluster list

| Text | Where | Scope | Action |
|---|---|---|---|
| The other editorial sentences ("Sivusto ei kirjoita…", "Sivusto linkittää…", "Sivusto selittää…") | `data/yearly-facts.yaml`, 42 rules in all | IN: the same site-wide note as clusters 143 and 164, in other words | Removed from the rules; the facts and their links stay; no fact became unused |
| "Tehtävissä on kuvitteellisia tapauksia, joissa ei kuvata väkivaltaa. Voit jättää minkä tahansa tehtävän väliin. Kenenkään ei tarvitse kertoa…" | TE2 07, top of Tehtävät | IN: one-off reassurance; Pelisäännöt keeps the rules for the teacher | Removed |
| "Muistiinpano jää sinulle, eikä sitä tarvitse näyttää kenellekään." | TE1 10, the optional task about one's own studies | OUT: said once, where it matters (the only task that invites personal content) | Kept |
| "Raskaita aiheita käsittelevien sivujen alussa on sisältöhuomautus, ja jokaisen aiheen lopussa kerrotaan, mistä saa apua." | etusivu | No longer true since D-014 | Removed |
| `accessibility` lines in the front matter | every topic | Not rendered by the engine | Kept |

## Clusters

| Sample (first 80 characters) | Groups | Scope | Reason | Action | Stated once on |
|---|---|---|---|---|---|
| Pisteytys on sivuston oma harjoitusohje, ei ylioppilastutkintolautakunnan. | 31 | IN | Scoring disclaimer under every model answer | Removed from 30 topics (101 lines) | etusivu *Koetehtävät*; opetussuunnitelma *Terveystieto lyhyesti* and *Näin mallivastaus on rakennettu* (already there) |
| Pelisäännöt ja oletusten tarkistus | 30 | OUT | Heading or UI label | Kept | – |
| Tarina perustuu tämän aiheen sisältöön, ja sen voi pelata selaimessa myös puheli… | 30 | IN | Generic visual-novel blurb; link and chapter title stay | Sentence removed from 30 topics | polku (added) |
| Kirjoita vastaukset omaan muistioosi. Voit ohittaa kysymyksen, eikä vastauksia t… | 30 | IN | Privacy reassurance; the instruction sentence stays | Second sentence removed from 30 topics | polku: no need to write about own health, notes stay in the browser (already there) |
| Pohdi yksi Pohdinnan kysymyksistä ja tee itsearviointi (5 min). | 30 | OUT | Self-study step | Kept | – |
| Jos huomaat oletuksen, muotoile esimerkki uudelleen. | 30 | OUT | Lesson-plan step or teacher role | Kept | – |
| Sisältö (osa A20 pisteytetään vain sisällön perusteella): | 30 | OUT | Model-answer criterion | Kept | – |
| Lukion opetussuunnitelman perusteet 2019, OPH-2263-2019. Tarkistettu 21.11.2026. | 30 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Tuki: Jos lukeminen tai kirjoittaminen on hidasta, kysy koulusi oppimisen tuesta… | 30 | IN | Generic support referral stamped on every lesson | **Tuki** line removed from 30 topics | polku (added, without the stamp *(esimerkki)*) |
| Opetussuunnitelma: tämä aihe palvelee | 30 | OUT | Heading or UI label | Kept | – |
| S2 ja selkeä kieli: Käy sanasto läpi ennen Tehtävää 1. | 30 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Tee Tehtävä 1 (20 min) ja Tehtävä 2 (10 min). | 30 | OUT | Self-study step | Kept | – |
| Lue osio Opiskelijalle (8 min). | 30 | OUT | Self-study step | Kept | – |
| Sanamuoto on Lukion opetussuunnitelman perusteista 2019 sellaisenaan. | 30 | OUT | Curriculum text or its attribution (engine) | Kept | – |
| Aikaa kuluu: noin 70 minuuttia. | 30 | OUT | Self-study step | Kept | – |
| Kerro, että mallivastaukset ovat sivulla. | 30 | OUT | Lesson-plan step or teacher role | Kept | – |
| Tehtävät ovat sivuston omia harjoitustehtäviä ylioppilaskokeen tehtävätyypeissä. | 30 | IN | Provenance disclaimer (site's own tasks) | Koetehtävät opening paragraph removed from 30 topics | etusivu *Koetehtävät* (already there) |
| Itsearviointi. Arvioi jokainen kohta asteikolla En vielä · Osittain · Melko hyvi… | 30 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Tehtävä 3 on lisätehtävä (15 min). | 30 | OUT | Self-study step | Kept | – |
| 45 min, 60 min, 75 min | 30 | OUT | Heading or UI label | Kept | – |
| Merkintä tallentuu vain tähän selaimeen, kun painat painiketta. Itseopiskelupolk… | 30 | IN | Engine note on where the self-study mark is stored | Removed by lukio-runko v0.5.1; pin raised | polku *Omat tietosi* and etusivu (already there) |
| Tee Tehtävä 1 (20 min) ja Tehtävä 2 (10 min). Tehtävä 3 on lisätehtävä (15 min). | 29 | OUT | Self-study step | Kept | – |
| Jos jokin kohta on vielä "En vielä", tee siihen liittyvä koetehtävä ja vertaa va… | 29 | OUT | Self-study step | Kept | – |
| Tehtävä 1 tehdään kokonaan, ei lyhennetä. | 29 | OUT | Lesson-plan step or teacher role | Kept | – |
| Kierrä ja kysy perusteluja. | 27 | OUT | Lesson-plan step or teacher role | Kept | – |
| Harjoittelet: Osaan 2 ja 3 | 27 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Harjoittele koetehtävä K1 (25 min) ja tarkista vastauksesi mallivastauksella. | 27 | OUT | Self-study step | Kept | – |
| Tehtävänannon osapisteet (a 15 p, b 8 p, c 7 p) sisältävät sekä sisällön että ti… | 27 | OUT | Model-answer criterion | Kept | – |
| Kysymyksiä ja keskeneräisten loppuun. | 26 | OUT | Lesson-plan step or teacher role | Kept | – |
| Koetehtävät voi tehdä osissa ilman aikarajaa, jos se auttaa. | 26 | IN | Site-wide fact restated in every Eriyttäminen | Sentence removed from 30 topics (all wordings) | polku (added) |
| Näitä tietoja ei kopioida tälle sivulle. Katso arvo virallisesta lähteestä. | 26 | IN | Engine note under the yearly facts | Removed by lukio-runko v0.5.1; pin raised | etusivu *Ajantasaisuus* (already there) |
| Tehtävän 3 paperiversio on tehtävän kohdassa Ilman laitetta. | 25 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Kierrä ja kysy perusteluja. Tehtävä 1 tehdään kokonaan, ei lyhennetä. | 24 | OUT | Lesson-plan step or teacher role | Kept | – |
| Tiedonkäsittely 10 p (tiedonkäsittelyn arviointi: käsitteiden käyttö, soveltamin… | 23 | OUT | Model-answer criterion | Kept | – |
| Yhteensä 5 × 4 p = 20 p. | 21 | OUT | Model-answer criterion | Kept | – |
| K2 ja K3 sopivat kertaukseen. | 21 | OUT | Self-study step | Kept | – |
| TE2 kattaa vain osan ylioppilaskokeesta: loput tulevat TE1- ja TE3-moduuleista. | 20 | IN | Site-wide exam-structure fact | Removed with the Koetehtävät opening paragraph | opetussuunnitelma *Terveystieto lyhyesti* (added, basis YTL reaali rules) |
| Exit-lappu: yksi epäselvä käsite. | 20 | OUT | Lesson-plan step or teacher role | Kept | – |
| Tehtävä 2 kokonaan pareittain (20 min). | 20 | OUT | Lesson-plan step or teacher role | Kept | – |
| Kerro, että K1–K3 ovat harjoituksia kotiin tai kertaukseen. | 18 | OUT | Lesson-plan step or teacher role | Kept | – |
| Harjoittele koetehtävä K1 (25 min) ja tarkista vastauksesi mallivastauksella. K2… | 18 | OUT | Self-study step | Kept | – |
| Tehtävät toimivat ilman tulosteita. | 18 | IN | Site-wide fact restated in every Valmistelu | Sentence removed from 18 topics | saavutettavuus: tasks work on paper (already there) |
| Osa B20 · Harjoittelee: Osaan 1, 4 | 17 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| 1. vuosi, syksy (esimerkki, koulu päättää) | 17 | IN | Engine stamp on suggested timing | Engine change in lukio-runko v0.5.1 `views_topic.py`; gone from the 23.11. rebuild | etusivu *Näin sivustoa käytetään* and opetussuunnitelma *Koulu päättää* (already there) |
| Avaa kuva suurempana (kuva avautuu omalle sivulleen, ja sitä voi lähentää) | 17 | OUT | Heading or UI label | Kept | – |
| Opiskelijat kirjoittavat vastauksen itselleen. | 16 | OUT | Lesson-plan step or teacher role | Kept | – |
| Ilman laitetta: Tehtävät 1 ja 2, kaikki koetehtävät ja mallivastaukset toimivat … | 16 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Varaa nimettömiä lappuja virittäytymiseen ja exitiin. | 15 | OUT | Lesson-plan step or teacher role | Kept | – |
| Osa C30 · Harjoittelee: Osaan 3, 4, 5 | 15 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Ilman laitetta: Tehtävät 1 ja 2, kaikki koetehtävät ja mallivastaukset toimivat … | 15 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Tehtävät ovat sivuston omia harjoitustehtäviä ylioppilaskokeen tehtävätyypeissä.… | 14 | IN | Provenance + fictional + exam-structure paragraph | Removed from topics | etusivu, opetussuunnitelma (see rows above) |
| Tee K3 kokonaan ja arvioi vastaustasi tiedonkäsittelyn viiden kriteerin avulla. | 14 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| 1. vuosi, kevät (esimerkki, koulu päättää) | 13 | IN | Engine stamp on suggested timing | Engine change (as above); gone from the 23.11. rebuild | etusivu, opetussuunnitelma (already there) |
| Kerro K1–K3:sta kotiharjoituksina. | 12 | OUT | Lesson-plan step or teacher role | Kept | – |
| Opiskeluhuolto, Opetushallitus. Luettu 21.11.2026. | 12 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Terveystiedon LOPS 2019 -tukimateriaali, Opetushallitus. Luettu 21.11.2026. | 12 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Virittäytyminen ja aiemman tiedon aktivointi | 12 | OUT | Heading or UI label | Kept | – |
| Osa A20 · Harjoittelee: Osaan 1, 2 | 12 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Tehtävänannon osapisteet (a 12 p, b 8 p) sisältävät sekä sisällön että tiedonkäs… | 11 | OUT | Model-answer criterion | Kept | – |
| Opiskeluterveydenhuolto, Terveyden ja hyvinvoinnin laitos (THL). Luettu 21.11.20… | 11 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Tehtävä 2 kokonaan (20 min), sitten Tehtävän 1 vaiheet 1–3 (5 min). | 11 | OUT | Lesson-plan step or teacher role | Kept | – |
| Aika: 20 min Tarvitset: paperia ja kynän Ilman laitetta: Tämä on paperitehtävä: … | 11 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Osa A20 · Harjoittelee: Osaan 1, 2, 3 | 11 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Tarkista ajantasainen tieto: Terveyden ja hyvinvoinnin laitos (THL). | 11 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Kerää laput ja lue muutama ääneen. | 10 | OUT | Lesson-plan step or teacher role | Kept | – |
| K2: Aineiston analyysi, 35 min (20 p) | 10 | OUT | Heading or UI label | Kept | – |
| Lue tapaus kahdessa osassa. | 10 | OUT | Lesson-plan step or teacher role | Kept | – |
| Ilman laitetta: Tehtävät 1 ja 2, kaikki koetehtävät ja mallivastaukset toimivat … | 10 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Lue muutama lappu ja ryhmittele taululle. | 10 | OUT | Lesson-plan step or teacher role | Kept | – |
| Kokoa kolme ehdotusta taululle. | 10 | OUT | Lesson-plan step or teacher role | Kept | – |
| Osa C30 · Harjoittelee: Osaan 2, 3, 4, 5 | 10 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Kirjoita enintään 900 merkkiä. | 10 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Exit-lappu: yksi epäselvä käsite. K1 kotiin. | 10 | OUT | Lesson-plan step or teacher role | Kept | – |
| Tehtävä 2 kokonaan pareittain (20 min), sitten Tehtävän 1 vaiheet 1–3 (5 min). | 10 | OUT | Lesson-plan step or teacher role | Kept | – |
| Yksin: kirjoita kaksi ehdotusta. | 10 | OUT | Lesson-plan step or teacher role | Kept | – |
| Tehtävä 1 kokonaan (20 min). | 10 | OUT | Lesson-plan step or teacher role | Kept | – |
| Mitä terveys on? Voimavarat ja terveyden taustatekijät | 10 | OUT | Heading or UI label | Kept | – |
| Ryhmätyö tehdään kuvitteellisilla tapauksilla. | 9 | IN | Fictional-cases disclaimer in Tavoitetehtävä; Pelisäännöt on the same page says it | Removed with the privacy sentence after it (04-ravinto keeps its second sentence: it says nothing is weighed or measured) | each topic's Pelisäännöt; etusivu *Terveys ja turvallisuus* (already there) |
| Kirjoita pari vastausta taululle. | 9 | OUT | Lesson-plan step or teacher role | Kept | – |
| Opiskelijat pärjäävät tyhjällä paperilla. | 9 | IN | TE1 wording of "Tehtävät toimivat ilman tulosteita" in Valmistelu | Sentence removed from 9 topics | saavutettavuus: tasks work on paper (already there) |
| YTL: terveystiedon ylioppilaskokeen arvosteluohje (syksy 2024), Ylioppilastutkin… | 9 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Tehtävä 1 (20 min) yksin tai pareittain, sitten Tehtävän 2 vaiheet 1–3 (5 min). | 8 | OUT | Lesson-plan step or teacher role | Kept | – |
| Osa B20 · Harjoittelee: Osaan 1, 2, 4 | 8 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Väittämät paperilla, opiskelija vastaa yksin. | 8 | OUT | Lesson-plan step or teacher role | Kept | – |
| Tehtävä 1 (20 min), sitten Tehtävän 2 vaiheet 1–3 (5 min). | 8 | OUT | Lesson-plan step or teacher role | Kept | – |
| Ne ovat link-out-aineistoa: linkitä, älä kopioi. | 8 | OUT | Licence line tied to the materials named in the same bullet | Kept | – |
| Tehtävän pisteet eivät mene alle nollan. | 7 | OUT | Model-answer criterion | Kept | – |
| Harjoittelet: Osaan 2, 4 ja 5 | 7 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Kirjoita ehdotus taululle ja kysy: miksi sen pitäisi vaikuttaa? | 7 | OUT | Lesson-plan step or teacher role | Kept | – |
| TE01 Terveys voimavarana, verkko-opintojakso, Omnia, Espoon aikuislukio (aoe.fi)… | 7 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| TE1 Terveys voimavarana (verkkokurssin runko), Schildtin lukio (aoe.fi). Luettu … | 7 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Kerro, että K1–K3 ovat kotiharjoituksia. | 7 | OUT | Lesson-plan step or teacher role | Kept | – |
| Näytä, miten 4 pistettä jakautuu. | 7 | OUT | Lesson-plan step or teacher role | Kept | – |
| K1:n kohdat 1–5 yksin (7 min) ja tarkistus (3 min). | 7 | OUT | Lesson-plan step or teacher role | Kept | – |
| Ylioppilastutkinnon hyvän vastauksen piirteet, terveystieto (syksy 2024), Yliopp… | 7 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Kirjoita kaksi vastausta taululle. | 7 | OUT | Lesson-plan step or teacher role | Kept | – |
| Kokoa ehdotukset taululle tasoittain. | 7 | OUT | Lesson-plan step or teacher role | Kept | – |
| Exit-lappu: yksi käsite, joka on vielä epäselvä. | 7 | OUT | Lesson-plan step or teacher role | Kept | – |
| Kaikki esimerkit ovat kuvitteellisia. | 6 | IN | Fictional disclaimer + privacy line in Tavoitetehtävä | Removed; Pelisäännöt keeps the topic-specific rule | each topic's Pelisäännöt (already there) |
| Hyvinvointi ja opiskelukyky (opinto-ohjaus, aihe 04), Lukion opinto-ohjaus -sivu… | 6 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Harjoittele koetehtävä K1 (25 min) ja tarkista vastauksesi mallivastauksella. K2… | 6 | OUT | Self-study step | Kept | – |
| Oikea vastaus 2 p, väärä −1 p, tyhjä 0 p. | 6 | OUT | Model-answer criterion | Kept | – |
| Parit vastaavat Tehtävän 2 vaiheeseen 5. | 6 | OUT | Lesson-plan step or teacher role | Kept | – |
| (Mielenterveystalo), Mielenterveystalo.fi (HUS). | 6 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Näytä K1:n pisteytys ja kysy: mistä 4 pistettä syntyy? | 6 | OUT | Lesson-plan step or teacher role | Kept | – |
| Aika: 20 min Tarvitset: paperia, kynän, alla olevan tapauksen Ilman laitetta: Tä… | 6 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Kerro K1–K4:stä kotiharjoituksina. | 6 | OUT | Lesson-plan step or teacher role | Kept | – |
| pystyy kuvailemaan ja jäsentelemään keskeisiä ihmisen voimavaroja ja terveyttä m… | 6 | OUT | Curriculum text or its attribution (engine) | Kept | – |
| S2 ja selkeä kieli: Käy sanasto läpi ennen Tehtävää 2. Sarakkeisiin voi kirjoitt… | 5 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Aika: 15 min Tarvitset: puhelimen tai tietokoneen, paperia Ilman laitetta: Ohita… | 5 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| K1: Käsitteiden nimeäminen, 25 min (20 p) | 5 | OUT | Heading or UI label | Kept | – |
| Osa A20 · Harjoittelee: Osaan 1, 2, 3, 4 | 5 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Koko ryhmä vastaa Tehtävän 2 vaiheeseen 5. | 5 | OUT | Lesson-plan step or teacher role | Kept | – |
| tunnistaa omiin elintapoihinsa vaikuttavia tekijöitä ja pystyy arvioimaan elinta… | 5 | OUT | Curriculum text or its attribution (engine) | Kept | – |
| Osa B20 · Harjoittelee: Osaan 1 | 5 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Ottawa Charter for Health Promotion (WHO), World Health Organization. Luettu 21.… | 5 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| osaa esitellä ja analysoida fyysisen ja psykososiaalisen ympäristön yhteyksiä ja… | 5 | OUT | Curriculum text or its attribution (engine) | Kept | – |
| Mielenterveystalo: nuoret, Mielenterveystalo.fi (HUS). Luettu 21.11.2026. | 5 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Pisteet eivät mene alle nollan. | 5 | OUT | Model-answer criterion | Kept | – |
| Osa C30 · Harjoittelee: Osaan 2, 4 | 5 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Analysoidaan kuvitteellisia henkilöitä ja ilmiöitä. | 5 | OUT | Teacher ground rule in Pelisäännöt, the one place per topic | Kept | – |
| Aika: 12 min Tarvitset: puhelimen tai tietokoneen, paperia Ilman laitetta: Ohita… | 5 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| K3: Eettinen analyysi, 50 min (30 p) | 5 | OUT | Heading or UI label | Kept | – |
| Käy väittämät läpi perustellen. | 5 | OUT | Lesson-plan step or teacher role | Kept | – |
| Tarkista ajantasainen tieto: Sosiaali- ja terveysministeriö (STM). | 4 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Yksi näkökulma 4 p, kaksi 7 p, kolme 10 p, neljä 13 p. | 4 | OUT | Model-answer criterion | Kept | – |
| Kaikki tapaukset ovat kuvitteellisia. | 4 | IN | Fictional disclaimer + privacy line in Tavoitetehtävä | Removed; Pelisäännöt keeps the topic-specific rule | each topic's Pelisäännöt (already there) |
| K1:n väittämät 1–5 yksin (7 min) ja tarkistus mallivastauksella (3 min). | 4 | OUT | Lesson-plan step or teacher role | Kept | – |
| Syvempi polku: Tee K3 kokonaan ja arvioi vastaustasi tiedonkäsittelyn viiden kri… | 4 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| K1: Virheiden tunnistaminen, 25 min (20 p) | 4 | OUT | Heading or UI label | Kept | – |
| Lukeminen, keskittyminen ja jännitys: Lue taulukko rivi kerrallaan ja peitä muut… | 4 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Syvempi polku: Etsi Tehtävän 1 tapauksesta tekijä, joka kuuluu kahdelle tasolle,… | 4 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Osa A20 · Harjoittelee: Osaan 1, 2, 3, 4, 5 | 4 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Sivusto ei neuvo testien käytössä vaan ohjaa oireissa opiskeluterveydenhuoltoon. | 4 | IN | Yearly-fact rule ends in a no-advice disclaimer | Sentence removed from the rule in data/yearly-facts.yaml | etusivu *Terveys ja turvallisuus* (already there) |
| Vastaukset voi kirjoittaa omalla kielellä; koetehtävissä harjoitellaan suomenkie… | 4 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Kotona tehdyn testin tulos voi olla väärä kumpaankin suuntaan, näytteenotto vaik… | 4 | OUT | Subject content (yearly-fact rule) | Kept | – |
| Terveys kaikissa politiikoissa (Health in All Policies, HiAP) tarkoittaa, että t… | 4 | OUT | Subject content (yearly-fact rule) | Kept | – |
| Kierrä ja kysy. Tehtävä 2 tehdään kokonaan, ei lyhennetä. | 4 | OUT | Lesson-plan step or teacher role | Kept | – |
| K1: Määrittele ja anna esimerkki, 25 min (20 p) | 4 | OUT | Heading or UI label | Kept | – |
| Tulokset linkitetään, lukuja ei kopioida. | 4 | IN | Editorial note in a yearly-fact rule | Sentence removed at the source (data/yearly-facts.yaml) | etusivu *Ajantasaisuus* (already there) |
| K3: Viitekehyksen soveltaminen, 50 min (30 p) | 4 | OUT | Heading or UI label | Kept | – |
| Seksuaaliterveyden palveluita saa opiskeluterveydenhuollosta ja terveysasemilta. | 4 | OUT | Subject content (yearly-fact rule) | Kept | – |
| Tiedonkäsittely 10 p (tiedonkäsittelyn arviointi; kokonaisarvio viiden kriteerin… | 4 | OUT | Model-answer criterion | Kept | – |
| Tarkista ajantasainen tieto: Suomalainen Lääkäriseura Duodecim (Terveyskirjasto)… | 4 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Nuorten hyvinvointi (THL), Terveyden ja hyvinvoinnin laitos (THL). Luettu 21.11.… | 4 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| K1:n väittämät 1–2 yksin (4 min) ja tarkistus (3 min). Exit-lappu: yksi epäselvä… | 4 | OUT | Lesson-plan step or teacher role | Kept | – |
| Aiheesta järjestettiin WHO:n 8. kansainvälinen terveyden edistämisen konferenssi… | 4 | OUT | Subject content (yearly-fact rule) | Kept | – |
| Aika: 20 min Tarvitset: paperia, kynän, alla olevan tapauksen Ilman laitetta: Te… | 4 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| osaa analysoida terveyteen ja sairauksiin liittyviä eettisiä kysymyksiä, kuvata … | 4 | OUT | Curriculum text or its attribution (engine) | Kept | – |
| Ottawa Charter, asiakirjan teksti (WHO 1986, arkistoitu), World Health Organizat… | 4 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Aika: 15 min Tarvitset: paperia ja kynän; vaiheeseen 4 puhelimen tai tietokoneen… | 4 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Tehtävät ovat sivuston omia harjoitustehtäviä ylioppilaskokeen tehtävätyypeissä.… | 4 | IN | Provenance + fictional + exam-structure paragraph | Removed from topics | etusivu, opetussuunnitelma (see rows above) |
| K3: Aineiston lukeminen, 45 min (30 p) | 4 | OUT | Heading or UI label | Kept | – |
| THL toteuttaa Kouluterveyskyselyn parittomina vuosina keväällä; lukion 1. ja 2. … | 4 | OUT | Subject content (yearly-fact rule) | Kept | – |
| Kytke ne lappujen ryhmiin. | 4 | OUT | Lesson-plan step or teacher role | Kept | – |
| Itsetuntemus, vahvuudet ja arvot (opinto-ohjaus, aihe 05), Lukion opinto-ohjaus … | 4 | OUT | Source citation (Lähteet or the engine's fact source link) | Kept | – |
| Aika: 15 min Tarvitset: paperia ja kynän Ilman laitetta: Tämä on paperitehtävä: … | 4 | OUT | Task instruction, task meta or differentiation step | Kept | – |
| Tietoa ja neuvontaa antavat järjestöt, esimerkiksi Väestöliitto. | 4 | OUT | Subject content (yearly-fact rule) | Kept | – |
| K1: Oikein vai väärin -väittämät, 25 min (20 p) | 4 | OUT | Heading or UI label | Kept | – |
| Sivusto ei kirjoita lukuja vaan linkittää tilaston. | 4 | IN | Editorial note in yearly-fact rules | Removed at the source with all 42 "Sivusto ei…" variants | etusivu *Ajantasaisuus* (already there) |

## Verifier's corrections, 23.11.2026

- The link-out line beside a named material ("Ne ovat link-out-aineistoa: linkitä, älä kopioi." and its variants) is
  a licence line and out of scope, as the table says. It had been removed from 11 lesson plans; it is restored. This
  also restores the referent of "nekin" in the Wikipedia sentences of TE3 01 and TE3 02.
- "Opiskelijat pärjäävät tyhjällä paperilla." was removed as the TE1 wording of "Tehtävät toimivat ilman tulosteita";
  its row now says IN.
- Two yearly facts that no topic uses, `seksitaudit_tilastot` and `kela_hedelmoityshoito`, are deleted from
  `data/yearly-facts.yaml`, so /lahteet/ no longer prints them. They were already unused before this clean-up.
