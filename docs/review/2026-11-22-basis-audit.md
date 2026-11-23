# Basis audit: judgement

Judge, 2026-11-23. I wrote none of the audited content and edited no file except this one. I checked against
lukio-runko `docs/content-guideline.md` (v0.4.0), this site's CLAUDE.md, `docs/content-contract.md` with its addenda,
and `docs/style-guide.md`. Nothing is committed or pushed.

## What was audited

- The basis audit of the topic files in `content/topics/`, audited, fixed and verified group by group. The results
  relayed to me covered TE1 01-05 in full (audit, fix, verify) and TE1 09 in part, because the relay was cut off
  inside the 09 audit. I judged the other groups from the files on disk.
- The working tree: all 30 topic files are modified (740 insertions, 1000 deletions). `subject.yaml`,
  `docs/style-guide.md` and `docs/content-contract.md` are unchanged.
- My own build into a scratch folder, with `PYTHONIOENCODING=utf-8` set. Without it the engine crashes on Windows
  while printing a warning that contains U+2212.

## Build

- **15 errors, 194 warnings.** All 15 errors are `missing section '## Apua ja tukea'` in TE1 01-05, TE2 01-05 and
  TE3 01-05, because `subject.yaml` line 60 still requires the section. The target is 0 errors and 0 warnings.
- The warnings are all repeat clusters except two. The fix added three new five-topic clusters: the
  "Sivuston harjoitusohje" deduction line, which now appears in 12 places, and two Pelisäännöt lines.
- Line counts: the largest file is `10-riippuvuudet.md` at 500 lines, so none is over the cap. TE1 01-05 are 468 to
  491 lines. The verifier counted Opiskelijalle in 01-05 at 499 to 596 words, link URLs included, which is within
  600. I did not count words in the other topics.

## Findings by type and action (items relayed: 25 for TE1 01-05, 6 for 09)

| Problem | remove | reword-idiom | label-own-framing | add-basis | reword-as-weighing | Total |
|---|---|---|---|---|---|---|
| english-habit | 2 | 0 | 1 | 1 | 0 | 4 |
| basis-mismatch | 0 | 3 | 3 | 1 (09) | 0 | 7 |
| no-basis | 0 | 0 | 6 (2 in 09) | 9 (2 in 09) | 3 | 18 |
| value-graded | 0 | 0 | 0 | 0 | 2 (1 in 09) | 2 |
| **Total** | 2 | 3 | 10 | 11 | 5 | 31 |

## Spot checks on disk

Fixed items, all confirmed on disk:
- 01: the Dahlgren-Whitehead ring diagram is now "Sivuston oma kehäkaavio ... muokattu", citing the OPH figure. The
  placement of examples on the rings is labelled as the site's own.
- 02: every Tuki line is now "Tuen esimerkki".
- 05: the energy stores are tied to "varsinkin syvän unen aikana", and clearance is tied to sleep in general, with
  TTL attribution.
- 09: the crisis types, the Cullberg phases, the coping groups and the three routes are all labelled
  "sivuston oma jäsennys".
- 04: the content note and the `eating` flag are gone, and painoleima is gone.

Partly fixed or not fixed:
- 03 medikalisaatio: "leimautuminen vähenee" is still unsourced. The verifier showed that the report does not state
  it.
- 04: the eating-disorder claims have lost their source and remain unlabelled. "Paino ei yksin kerro terveydestä" is
  still taught as fact in Osaan 3, Tehtävä 2 and K1. The Eriyttäminen opt-out ("Jos aihe tuntuu raskaalta...") is
  still there.
- 05: the immunity sentence is hedged but has no TTL attribution, and "joten vastustuskyky voi heiketä" is still the
  site's own inference.
- 03 K2 c: the instruction still asks for a "kunnioittava" answer. The tone point was removed from the scoring.

Two groups I checked myself (which groups the auditors called clean was lost with the cut-off relay):
- TE2 05 sosiaali- ja terveyspalvelut: 112 and Sekasin appear as subject content about services, which is
  acceptable, not a help block. No unbased norm sentences found.
- TE3 07 eettisen analyysin näkökulmat: the content is weighing-based, but the page still ends with
  `## Apua ja tukea`. That breaks guideline section 4.

## Does the site meet guideline sections 1-4?

- **Section 1 (basis): mostly, in the checked groups.** The listed residuals in 03, 04, 05 and 01 remain.
- **Section 2 (weighing): largely met.** The rubrics now accept argued views. 09 K3 c still names a preferred action
  as the scoring content, according to the 09 audit, and I did not see that fix confirmed.
- **Section 3 (review against basis): not met at the site level.** The style guide is still unmarked as house style
  and still teaches as rules the 5 p deduction (lines 163 and 197), content notes (section 10) and the help box
  (section 11). Contract section 9 and the contract's build checks still recommend a help block on every page.
- **Section 4 (watch list): not met.** `## Apua ja tukea` remains in 14 topics besides 08 (TE2 06-10 and TE3 06-10,
  including 09 stressi ja kriisit). `content_note` remains in 06 and 07 (both topics named 07), 09 (both topics named
  09) and 10-riippuvuudet. The guideline allows one help block, in 08 mielenterveys only, and no content notes.

## What remains

1. Remove the help blocks and content notes from every topic except the one block in 08. Then drop the section
   requirement from `subject.yaml` and the `content_note` extra field if it is no longer used.
2. Amend contract section 9, its build-check line and the content-note rules. Mark the style-guide rows as house
   style or give their basis, and fix the 5 p sentence and sections 10 and 11.
3. Fix the residual claims: 03 leimautuminen, 04 eating disorders and weight, 05 immunity attribution, 01 the
   definition of terveyden edistäminen, and the "Puhu siksi tekijöistä" lines in 01, 02 and 05.
4. Reword the three new five-topic repeat clusters per topic, or allow them in `allowed_repeats`, and rebuild to
   0 errors and 0 warnings.
5. Fix the engine crash: it prints warnings with the console code page on Windows. This belongs in an engine issue.
6. Fix the Finnish slips the verifier found: 03 "oikeudenmukaisia" for "fair", "kumpikin" for three items, a
   duplicate "c)" bullet in 03, and the unlabelled inner/outer split in 05.

## Verdict

**reject.** The basis work in the checked TE1 groups is good and mostly holds. The site still fails its build and
still carries the US-style help blocks and content notes that guideline section 4 excludes on 14 and 6 pages.

## For the operator

- Most claims now have a source or say plainly that they are the site's own; the checked pages hold up.
- The build still fails: the site config demands the help section that is being removed.
- 14 pages still carry the help block and 6 the content note; only the mental-health page may keep one.
- The style guide and contract still teach those rules; they need amending before the next round.
