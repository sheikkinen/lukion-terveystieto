# 009: TE2 exam drive: close the fact gaps the cross-check found

**Written before the work.** Producer's brief, 2026-11-21. Run as a workflow.

## Why

The operator [O]: "TE2 exam drive", after the TE2 cross-check (`docs/research/2026-11-21-te2-exam-cross-check.md`)
found TE2 in about 28–31% of exam points, with our pages covering that content about 55% fully, 43% partly and 2–3%
not at all. The gaps are specific facts.

**Serves:** G-2. **Goal type:** technical, measured by re-running the mapping. **Chain:** brief 9. **Models:** three
fixers on Sonnet (by topic group); checkers on Sonnet (curriculum, facts and links, safety, pedagogy); a re-mapper on
Sonnet; judge on Opus.

## Expected result, written before the work [M]

- Full coverage of TE2-touching points rises from about 55% to at least 70%, and "none" falls to 0%.
- The substance pages (te2-09, te2-10) gain the named health harms in words, with no amounts, doses, methods or
  figures. The safety checker confirms the pages stay within the rules.
- A few files approach the 500-line limit, so the additions are compact and some wording is tightened.

## The work

Narrow: add to the existing pages, don't rewrite them, with at most one new exam task per topic. Every new fact is a
dated link.

1. **Group A, te2-01 to te2-03:**
   - te2-01: Dunning-Kruger and the other biases the exam asks for (optimism, present bias, framing, bandwagon), and
     placebo moved into Opiskelijalle;
   - te2-02, the highest value: research vocabulary (empirical, qualitative versus quantitative, mixed methods,
     observational versus experimental, cohort, retrospective versus prospective, significance in words), a
     risk-concept section (risk and risk factor, relative and absolute risk, exposure, subjective risk) with a
     three-text task, and a two-series chart task on neutral, non-substance data;
   - te2-03: packaging and health claims, and judging home tests.
2. **Group B, te2-04 to te2-06:**
   - te2-04: radon (lung cancer, smokers' much higher risk, geology, building tightness, ventilation, measuring and
     remediation) with a task on a described fictional risk map; an indoor-air source-and-effect table; water safety;
     nature as a resource and a risk;
   - te2-05: loneliness and FOMO defined, and a multi-source task with text plus a described video;
   - te2-06: climate anxiety as a concept, with its mechanism and promotion measures at three levels.
3. **Group C, te2-07 to te2-10:**
   - te2-07: traffic and e-scooter safety as an applied case, small;
   - te2-08: how working life has changed since 1950, and the work-ability house (linked);
   - te2-09: what alcohol and nicotine do to the developing brain and to the fetus (FASD named), in words, with a
     claims task;
   - te2-10: substance-specific harms in words (alcohol, tobacco, e-cigarettes, nicotine pouches, cannabis),
     carcinogen as a concept, alcohol policy levers (price and tax, the monopoly, opening hours, marketing bans,
     warning labels, brief intervention), and guidance for minors.
4. **Across the module:** one 20-item true/false set and one list-and-count task in suitable topics, and character
   limits stated in the exam tasks where the real exam states them.
5. **Checks:** the four checkers, plus a re-mapper that re-runs the TE2 coverage judgement on the mapped tasks in
   `2026-11-21-te2-exam-cross-check.json`. Then one fix round, the judge on the final recheck, and commit, push and
   check live.

## Limits

€0. Safety rules unchanged: no amounts, doses, methods or figures on flagged pages (te2-07, te2-09, te2-10), and
student-facing help only. Nothing copied from YTL.

## Done when

The operator finds the exam's TE2 facts on the site, with tasks in the exam's formats. The re-mapping shows full
coverage of at least 70% and none at 0%, and the judge accepts.
