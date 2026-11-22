# Brief 013 judgement: figure mentions, small fixes, no review banner

Judge: Opus, outside the authors. Date 2026-11-22. Ruled from the files only, after building it myself.

## Verdict: reject (three small open items remain)

The banner is gone, every figure is mentioned, the charts are fixed and the build is clean. Three of the final open
items are still in the working tree unchanged. Each one is a short fix, but each breaks a Done-when line or a
standing picture rule, so I cannot accept yet.

## What I checked

| Check | Result |
|---|---|
| Build to my own scratch folder | 0 errors, 0 warnings |
| Topic files at most 500 lines | Pass (max 500: 10-riippuvuudet, 10-terveyden-eriarvoisuus) |
| Opiskelijalle at most 600 words | Pass by the engine. My rough count (table markup included) gives 610 for te3-07 and at most 594 elsewhere |
| Figure mentions in `git diff -- content/topics` | 21 new mentions in 16 files across TE1, TE2 and TE3 (at least 8 needed). hypnogrammi already had one |
| Banner removed (D-008) | Pass. `templates/base.html` deleted in ca70ed1. No built page (73 HTML) has `review-banner` or "vielä tarkastanut". README, CLAUDE.md and the contract addendum record it |
| te3-03 diabetes sentence, "näytön vahvuuden mukaan" | Pass (text checker verified against Terveyskirjasto dlk00011) |
| dg-elinajanodote | Pass. Subtitle "Lähde: Tilastokeskus, CC BY 4.0, / luettu 22.11.2026", 2025 labelled |
| dg-epidemiologinen-siirtyma | Pass. Labels 1 Nälkä, 2 Rutot, 3 Sairaus, 4 Ikä, 5 Erot. Width 347, scales to 343 |
| K3 placements | Pass by the fallback. The engine places only at H2, so te3-02 K3 a) and te3-10 K3 b) say "Mallikuva on Mallivastausten lopussa" |
| il-te2-07, il-te3-01 | Pass (I opened both, and the sha256 matches the newest line in data/images.run.yaml) |
| il-te2-05 | Fail. Opened it: the crumpled paper scrap is still on the floor at the bottom right |
| il-te2-06 | Fail. Opened it: the file is unchanged since 09:01. The green-shirt girl and the white-shirt boy look sad or worried |
| Local paths, keys, e-mails | None found in content/topics or data/charts |
| Nothing committed | Pass. The changes are uncommitted in the working tree |

## Rulings on the final open items

1. **te3-07 dg-eettiset-nakokulmat mention (TE3): upheld, not done.** Line 77 still reads "eivät aina johda samaan
   tulokseen (kaavio tämän osion lopussa)". Move the mention to the table-introducing sentence on line 63
   ("Pikakertaus kuvitteellisella tapauksella: ...", for example "Kaavio tämän osion lopussa kokoaa taulukon.").
   Restore line 77 to its original wording. The net word count stays the same.
2. **il-te2-05 floor litter (pictures): upheld, not done.** There is a paper or wrapper scrap at about x 1030-1130,
   y 680-710. Brief 013 says "no paper cup" and the picture should not show litter. Regenerate it, or remove the
   scrap with one redo.
3. **il-te2-06 worried faces (pictures): upheld, not done.** The standing rule bans worried faces, and this is a
   hopeful theme. Redo it with calm or smiling faces and keep the composition.

## Done-when lines

- Every diagram and chart is named in its page's text: **met**, but one mention is misplaced (item 1).
- The named small fixes are in: **not met.** The text and chart fixes are in. il-te2-05 and il-te2-06 are not.
- The banner is gone from every page: **met.**
- The build is clean: **met.**
- The judge accepts: **not yet.**

## Minors (do not block)

- Mentions say "osion lopussa", but most sit in an H3 that is not the last one. "Opiskelijalle-osion lopussa" would be
  clearer.
- Two pages use the same phrase twice for two figures at one place: te1-01 (taustatekijat, ottawa) and te2-02
  (tutkimusprosessi, riski). Naming each figure would help.
- te3-01: the dg-selitysmallit mention would fit better next to the model table.
- Word-budget trims shifted some meaning a little. te3-03 "tiettynä hetkenä tai jaksona" became "tiettynä aikana".
  "usein" and "myös" were dropped in TE1.
- te1-01 has back-to-back parentheses "(kaavio osion lopussa) ([WHO](...))". te2-02 has "avoimia, vain linkitettyjä".
- il-te2-07: the pedestrian also wears a helmet, and the adult at the door is very small.

## Remaining

TE3: move one mention (te3-07). Pictures: one redo each for il-te2-05 and il-te2-06, about $0.01 each, and log the
sha256 in data/images.run.yaml. Then rebuild, and a short re-judge on these three items only.

## For the operator

1. The banner is gone from every page, and the build is clean (0 errors, 0 warnings).
2. All 22 diagrams and charts are now mentioned in the text, and both charts are fixed.
3. Three small things are still open: one misplaced mention, a paper scrap in one picture, and sad faces in another.
4. Nothing is committed. After those three fixes it can be accepted.

## Final recheck

Recheck by Opus, outside the authors, on the three open items only. Both pictures opened at full size.

| Item | Result |
|---|---|
| te3-07 mention | Pass. On the "Pikakertaus kuvitteellisella tapauksella..." sentence (line 63); line 77 equals HEAD |
| il-te2-05 | Pass. Floor bare; no paper, cup or litter; no text; health rules met |
| il-te2-06 | Pass. Two smiling faces, one calm and focused; no text; health rules met |
| sha256 and prompts | Pass. Both match the newest images.run.yaml entry; prompt = manifest prompt + style line |
| Build to scratch folder | 0 errors, 0 warnings |

Verdict after final recheck: accept
