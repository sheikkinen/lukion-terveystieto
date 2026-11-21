# 003: Cross-check TE1 against the matriculation exam: does TE1 cover what the exam asks?

**Written before the work.** Producer's brief, 2026-11-21. Research and analysis only. Run as a workflow.

## Why

The operator [O]: "add a cross check - matriculation exam. is TE1 covering the topics for the exam".

**Serves:** G-1 (TE1) and G-2 (TE2, TE3). **Goal type:** research; the expected answer is written first.
**Chain:** brief 3. **Models:** four exam readers on Sonnet (one per year, both sessions), the critic on Opus.

What stands [A]:
- The terveystieto exam has 120 points and 9 tasks in three parts: choose 1 of three 20-point tasks, 2 of three
  20-point tasks, and 2 of three 30-point tasks. Many tasks are material-based. YTL publishes per-task "hyvän vastauksen
  piirteet" documents (brief 001 research).
- Past exam tasks are not openly licensed, so they are read, mapped and linked, never copied.
- TE1's 3 objectives and 7 content areas are coded in `data/curriculum.yaml`, and the ten topics are in
  `content/topics/`.

## Expected answer, written before the work [M]

1. The exam draws on all three modules, because it tests the whole syllabus. TE1 content appears in about a third
   to a half of the tasks, often combined with TE2 or TE3.
2. The TE1 areas asked most: the determinants of health, mental health and stress, sleep, exercise and nutrition,
   sexual health, and the four behaviour models (applied to a case or material).
3. TE2 (substances and dependence, research and source criticism, health communication, environment, safety) and TE3
   (health in society, services, global health, policy) make up the rest. A student who takes only TE1 cannot cover
   the exam.
4. The exam weights information processing: reading tables, graphs and research summaries, comparing, and
   evaluating. TE1's exam tasks lean on concept recall and lack enough material-based tasks with data.
5. Possible thin spots in our topics: applying the models to material, health-culture phenomena with current
   examples, and reading statistics (for example from Kouluterveyskysely).

## The work

1. Four readers, one per year (2023, 2024, 2025, 2026; spring and autumn sessions). For each exam task, from the
   public hyvän vastauksen piirteet document (and the published exam page if open), each reader records:
   - the session, task number, part and points;
   - a one-line description in its own words (at most 15 quoted words);
   - the task type and whether it is material-based (what material);
   - the curriculum codes it draws on, from `data/curriculum.yaml` (TE1, TE2, TE3, or none);
   - which of our TE1 topics covers it, and how well (full, partial, none);
   - the URL.
2. The critic aggregates:
   - a coverage matrix (TE1 codes and topics against exam tasks, and the share of points per module);
   - the TE1 areas the exam asks that our topics treat thinly;
   - whether our exam-task types match the real distribution;
   - recommendations: changes to TE1 topics, new exam-style tasks, and what TE2 and TE3 must carry.

   It compares all of this with the expected answer.
3. The producer writes `docs/research/2026-11-21-exam-cross-check.md` and adds the findings to the next fix or build
   brief.

## Limits

€0. Read-only on the web and in this repository (another workflow is editing the topics). No exam text copied
beyond 15-word quotes; tasks are described in our own words and linked.

## Done when

The operator can read which share of the exam TE1 covers, which exam topics our TE1 pages cover well, partly or not at
all, and what to change. Internally: every task of the sessions read is mapped, unread sessions are listed, and the
expected answers are marked right, wrong or refined.
