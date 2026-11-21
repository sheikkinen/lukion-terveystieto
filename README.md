# Lukion terveystieto

> **Huom.** Sisältöä ei ole vielä tarkastanut terveystiedon opettaja eikä terveydenhuollon ammattilainen. Se on
> luonnos tarkastettavaksi. Sivusto ei anna terveysneuvontaa: omista oireista kysy opiskeluterveydenhuollosta tai
> lääkäriltä, ja hätätilanteessa soita 112.

Avoin, CC BY 4.0 -lisensoitu materiaali lukion terveystietoon. Se seuraa lukion opetussuunnitelman perusteita 2019.
Ensimmäisenä on valmis pakollinen moduuli TE1 *Terveys voimavarana* (10 aihetta), ja TE2 ja TE3 tulevat
myöhemmin. Jokainen aihe toimii kahdella tavalla: itsenäisenä oppituntina opettajalle (tuntisuunnitelma 75, 60 ja
45 minuutille) ja itseopiskelun askeleena opiskelijalle. Jokaisessa aiheessa on ylioppilaskokeen tehtävätyyppejä
mukailevia omia harjoitustehtäviä mallivastauksineen sekä linkit olemassa oleviin materiaaleihin (THL, Ruokavirasto,
UKK-instituutti, Mielenterveystalo, MIELI ry, Nyyti, Väestöliitto, Seta ja muut) ja niiden lisenssit.

Tämä on sisarsivusto [lukion opinto-ohjauksen](https://sheikkinen.github.io/lukion-opinto-ohjaus/) materiaalille.
**Sivusto:** <https://sheikkinen.github.io/lukion-terveystieto/>, jonka rakentaa yhteinen moottori
[lukio-runko](https://github.com/sheikkinen/lukio-runko) (versio lukittu tiedostossa `requirements.txt`). Aiheet
Markdown-tiedostoina:

| Aihe | Tiedosto |
|---|---|
| 1. Mitä terveys on? Voimavarat ja terveyden taustatekijät | [te1-01](content/topics/01-terveys-voimavarana.md) |
| 2. Elintapoja selittävät mallit | [te1-02](content/topics/02-elintapamallit.md) |
| 3. Terveyskulttuurin ilmiöt | [te1-03](content/topics/03-terveyskulttuuri.md) |
| 4. Ravinto, syöminen ja painonhallinta | [te1-04](content/topics/04-ravinto.md) |
| 5. Liikunta, lepo ja uni | [te1-05](content/topics/05-liikunta-ja-uni.md) |
| 6. Seksuaalisuus ja seksuaaliterveys | [te1-06](content/topics/06-seksuaaliterveys.md) |
| 7. Seksuaalioikeudet, suostumus ja moninaisuus | [te1-07](content/topics/07-seksuaalioikeudet.md) |
| 8. Mielenterveyttä suojaavat tekijät | [te1-08](content/topics/08-mielenterveys.md) |
| 9. Stressi, kriisit ja kuormituksen hallinta | [te1-09](content/topics/09-stressi-ja-kriisit.md) |
| 10. Opiskeluhyvinvointi ja oma oppiminen | [te1-10](content/topics/10-opiskeluhyvinvointi.md) |

**Lisenssi:** CC BY 4.0, katso [LICENSE](LICENSE). Opetussuunnitelman tekstit ovat Opetushallituksen (ePerusteet), ja
linkitetyillä materiaaleilla on omat ehtonsa. Ylioppilaskokeiden tehtäviä ei ole kopioitu: harjoitustehtävät ovat
omia, ja niiden pisteytys on sivuston oma harjoitusohje, ei ylioppilastutkintolautakunnan.

## Tunnetut puutteet / known issues

- [ ] **Expert review not done:** a terveystieto teacher (curriculum fit and exam tasks), a health professional
  (facts), and a safe-messaging reviewer (topics 04, 08, 09) should read the content before wider use.
- [ ] **Law texts not read in full:** the alcohol, tobacco and student health care rules rest on summaries. The site
  states only age limits and links the laws.
- [ ] **Sleep:** no official Finnish recommendation was found, so the topics state no hours.
- [ ] **Content notes** appear in the front matter of every flagged page, and in topics 06 and 07 also as a blockquote
  in the text. The site build will render them once, and the blockquotes will be removed.
- [ ] **Offline tasks:** several topics invent a person on paper offline, while the online steps use a named case.
- [ ] **Matriculation exam coverage:** TE1 is the main subject of about 28% of exam points; our topics cover its TE1 content mostly partly. Additions per topic are in `docs/research/2026-11-21-exam-cross-check.md`.

- [ ] **Live check minors (2026-11-21):** the crisis-line number is written in the text, although changing figures
  should be links; a THL page written for professionals is listed among the official sources (not as help); the
  lesson views of topics 01, 02, 03, 05 and 10 have no help section; the 404 page is GitHub's default.

The process: briefs written before the work in `prompts/`, decisions in `decisions/INDEX.md`, rulings in
`docs/review/`, research in `docs/research/`, diary lines in `docs/diary/`.
