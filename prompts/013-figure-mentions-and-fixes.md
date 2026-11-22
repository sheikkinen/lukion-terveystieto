# 013: Figure mentions in the text, small fixes, and no review banner

**Written before the work.** Producer's brief, 2026-11-22. One workflow for the text and picture fixes; the banner
removal is done by the producer.

## Why

The operator [O]: "small fixes: implement, pages mention: implement; banner: remove", answering the open items after
briefs 011 and 012.

**Serves:** G-1, G-2. **Goal type:** technical (checks) and look. **Models:** three text fixers by module and one
picture fixer on Sonnet; a checker per kind on Sonnet; judge on Opus.

## The work

1. **Banner (producer, D-008):** delete `templates/base.html` (identical to the engine's template apart from the
   banner), drop the banner from the README, and record the change in CLAUDE.md and a contract addendum.
2. **Figure mentions (three fixers: TE1, TE2, TE3):** each of the 22 diagrams and charts in `data/images.yaml` is
   named in its topic's text where it helps, in a short phrase, for example "(kaavio tämän osion lopussa)". The engine
   places a diagram at the end of its section, so the phrase says where it is. A figure in Mallivastaukset is named in
   the model answer it illustrates. Sections at the 600-word limit trade a weaker phrase for the mention.
3. **Small fixes:**
   - te3-03: the type 2 diabetes sentence goes back to the source's wording ("ilman selviä oireita"), and "näytön
     vahvuuden mukaan" is restored if the word budget allows;
   - charts: the life-expectancy chart shows its source, licence and read date in its caption or subtitle and labels
     2025 on the axis; the transition chart's phase labels are short and readable at 343 px;
   - placements: the transition chart and the action-area diagram sit next to the K3 model answers they illustrate,
     if the engine supports a finer placement; otherwise the model answer's mention says where they are;
   - illustrations: redo il-te2-05 (no paper cup), il-te2-06 (weak composition), il-te2-07 (hazy right side) and
     il-te3-01 (text-like blocks), at most $0.05.

## Limits

€0 apart from the four redos. Files at most 500 lines; Opiskelijalle at most 600 words. One agent runs the image tool.

## Done when

Every diagram and chart is named in its page's text, the named small fixes are in, the banner is gone from every
page, the build is clean, and the judge accepts.
