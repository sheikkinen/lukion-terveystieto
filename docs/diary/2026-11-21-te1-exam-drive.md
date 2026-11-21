# Brief 006: TE1 exam drive, accepted with minors

**Date:** 2026-11-21 **IDs:** brief 006

## What happened

A lead writer added the shared information-processing rubric (as a section of the curriculum page, since the engine
makes only six fixed pages: E-11) and templates for eight exam formats. Three fixers added the cross-check's gaps. A
re-mapper re-ran the coverage on the 72 exam tasks: full coverage of the exam's TE1 points rose from 13% to 45.5%, and
none fell to 0%. The judge rejected twice on narrow teaching items (shared point splits, an ambiguous answer key, new
content not practised, figures on a flagged page); the producer applied the last two one-line edits and restored two
front-matter blocks a fixer had dropped.

## Traps

- **A fixer can drop fields the build does not check.** Topic 06 lost `exam_tasks` and `review_status`; only the judge
  noticed.

## Heuristic

Check every topic's front matter against the contract's required keys after a fix round, not only the build.

**Seed:** Should the engine (or a site test) refuse a topic that lacks a field the contract requires?
