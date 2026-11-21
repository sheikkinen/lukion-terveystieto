# 008: Cross-check TE2 against the matriculation exam

**Written before the work.** Producer's brief, 2026-11-21. Analysis only. Run as a workflow.

## Why

The operator [O]: "TE2 exam check first", in answer to "Next: TE3, or the TE2 exam cross-check first?".

**Serves:** G-2. **Goal type:** research; the expected answer is written first. **Chain:** brief 8. **Models:** a
re-mapper on Sonnet, the critic on Opus.

What stands [A]:
- Brief 003 mapped all 72 tasks of the eight exams from 2023 to 2026, with their curriculum codes, in
  `docs/research/2026-11-21-exam-cross-check.json`. TE2-only tasks were 21% of points, and many mixed tasks have a TE2
  strand.
- The cross-check listed what TE2 must carry:
  - research designs and the reliability of a study report; survey versus register data;
  - cognitive biases and the concept of risk;
  - health communication, advertising, social media and AI-produced health text;
  - alcohol, nicotine and drugs, dependence and the brain, with chart tasks;
  - the physical environment (radon, indoor air, noise, water), sustainable development, work ability.
- The ten TE2 topics are live (brief 004).

## Expected answer, written before the work [M]

1. TE2 content is in about 35–45% of exam points: the TE2-only 21% plus the TE2 strands of mixed tasks.
2. Our TE2 topics were written with the cross-check's list in hand, so full coverage of TE2-touching points starts
   higher than TE1's did: about 30–40% full, with none at 5% or less.
3. Thin spots likely remain where the exam asks for specific facts: radon and indoor air, water safety, research
   terms (case-control, cohort, longitudinal), risk measures (relative and absolute risk), and chart drawing from
   substance data.
4. The task formats should already match, because TE2 used the exam-drive templates.

## The work

1. **A re-mapper** reads the 72 mapped tasks. For every task with a TE2 code, it judges our TE2 topics' coverage
   (full, partial, none), names the topic and what is missing, and computes the shares by points.
2. **A critic** spot-checks four tasks on YTL's pages, lists the thin spots per topic with the concrete additions, says
   what still needs TE3, and marks each expected answer right, wrong or refined.
3. The producer writes `docs/research/2026-11-21-te2-exam-cross-check.md`. If the gaps are worth closing, they become a
   TE2 exam-drive brief, as brief 006 did for TE1.

## Limits

€0. Read-only. No exam text copied beyond 15-word quotes.

## Done when

The operator can read what share of the exam TE2 covers, how fully our TE2 pages cover it, and what to add. Internally:
every TE2-touching task is judged, and the expected answers are marked.
