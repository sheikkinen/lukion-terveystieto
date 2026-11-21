# Judgement: brief 009 (TE2 exam drive)

Judge on Opus, 2026-11-21. I wrote nothing that I judge. I read CLAUDE.md, prompts/009-te2-exam-drive.md,
docs/content-contract.md with its addendum, docs/style-guide.md (§7a and §15 TE2) and the TE2 cross-check report.
I built into my own scratch folder and got 0 errors and 0 warnings. I read te2-02, te2-04 and te2-10 in full: the new
sections, the exam tasks and the model answers. I checked every open item against the files on disk and checked the
front matter of all ten TE2 topics. I did not open any linked web pages. Where a ruling depends on what a page says,
I rely on the checkers' reports and the authors' own yearly-facts notes.

## Verdict: reject

The drive did its job. Coverage met the target (full 74.4%, none 0%), the build is clean, the safety check passed,
and the exam formats the cross-check named are now on the site. But all six distinct open items are still open in
the files. Four of them break the one law, which says every new health fact is a dated link. One is a wrong fraction
in a model answer, and two are C30 sub-parts that earn no content points. Each is a one-line or one-paragraph edit,
so one short fix round should close them all.

## Mechanical checks (judge's own)

| Check | Result |
|---|---|
| Build into own out folder | 0 errors, 0 warnings |
| Line counts (01–10) | 500, 499, 495, 493, 498, 477, 470, 491, 499, 500: none over 500 |
| `exam_tasks` and `review_status` in all ten TE2 front matters | Present in all ten; review_status all `none` |
| Twelve new yearly-facts keys (groups A and C) | All present in data/yearly-facts.yaml |
| Local paths or e-mails in topic files | None found |
| materials.yaml in sync | Not re-run by me. The curriculum, safety and pedagogy checkers each re-synced and found no diff |

## Open items

The eight listed items reduce to six. The curriculum and facts checkers both raised the te2-09 nicotine sentence,
and the curriculum and pedagogy checkers both raised the te2-08 TTL sentence.

| # | Item | Group | What I found in the files | Ruling |
|---|---|---|---|---|
| 1 | te2-09 nicotine and placenta | C | Line 97: "Nikotiini heikentää istukan verenkiertoa ja vaikuttaa sikiön aivojen kehitykseen." has no citation. The next citation is the THL blog, which is about alcohol. dlk00984 (Terveyskirjasto, 20.9.2024) is already in official_links and cited earlier in the paragraph. The facts checker read it and says it backs the claim. | Open, must fix: cite dlk00984 right after the nicotine sentence. If it cannot be confirmed, cut the sentence. K4 does not change. |
| 2 | te2-08 bare "(Työterveyslaitos)" | C | Line 90 ends with a publisher name in brackets, no link and no read date. The TTL työkyky page is already in official_links, and the facts checker says that page states the claim. | Open, must fix: change the bracket to a link to the TTL työkyky page (already dated), or drop the sentence. |
| 3 | te2-10 warning labels | C | Line 121 lists "varoitusmerkinnät" as a lever, cited to STM. The author's own note in yearly-facts says "Sivu ei mainitse varoitusmerkintöjä". So the citation does not support the claim. The fix round put this in. Osaan 4 and the K4 list do not name warning labels. | Open, must fix: remove "sekä varoitusmerkinnät" from the text and from the rule in yearly-facts `alkoholipolitiikka` (keep the note). The brief's warning-label lever stays undone until a dated official source names it. That is an accepted gap, not a defect. |
| 4 | te2-02 K2 b) fraction | A | Table 1: 300, 240, 180 answered out of 600. The model says "puolesta kolmasosaan", but 180/600 is three tenths. | Open, must fix: "viidestä kymmenesosasta kolmeen kymmenesosaan" (or "puolesta kolmeen kymmenesosaan"). |
| 5 | te2-05 K3 b) content points | B | Sisältö 15 p lists only a) 10 p and c) 5 p. Sub-part b) (9 p) asks for the easiest step, who it reaches, the most important step and why, but earns no content points. | Open, must fix: add a b) line, for example 3 p (feasibility and cost 1 p, who is reached 1 p, a reasoned choice 1 p), and rebalance a) to 7 p (or a) 8 p, c) 4 p) so the list still sums to 15. |
| 6 | te2-10 K3 b) content points | C | Sisältö 15 p is 5 x 3 p for the Ottawa proposals only. Sub-part b) (14 p) asks for both sides, a weighing and the current legal status, but earns no content points. | Open, must fix: for example 5 x 2 p for a) (keino and toimija together 1 p, mechanism 1 p) and 5 p for b): arguments for 1 p, against 1 p, legal status with its dated link 1 p, weighing 1 p, chosen proposal with a reason 1 p. Total 15. |

te2-04 K3 has the same pattern: content points cover only the a) proposals, while b) and c) are left to the
information-processing half. It was not flagged, and the split predates this drive, so I make it a minor item, not a
blocker. Fix it the same way while the file is open.

## Done-when lines

| Line | Status |
|---|---|
| The operator finds the exam's TE2 facts on the site | Met in what I read. te2-02 has research vocabulary and a risk section. te2-04 has radon, an indoor-air table, water, and nature as both resource and risk. te2-10 names the harms in words, the carcinogen concept and the policy levers. Also confirmed: te2-08 (work-life change and the work-ability house) and te2-09 (brain, fetus, FASD). |
| Tasks in the exam's formats | Met. There is a 20-item true/false set (te2-01 K4). List-and-count tasks are te2-04 K1 and te2-08 K1. te2-04 K2 is a described risk map, te2-02 K4 a two-series chart with three risk texts, and te2-05 K3 a described video. Character limits are stated in the new tasks. |
| Re-mapping: full at least 70%, none 0% | Met. Full 74.4%, partial 25.6%, none 0%. The strict reading, with row 34 counted as partial, gives full 71.2%. |
| The judge accepts | Not this round. Items 1 to 6 are open. |

The brief's expected results also hold. Full coverage rose above 70%. The substance pages gained harms in words, and
the safety checker passed them. Several files now sit at the 500-line limit.

## Coverage before and after (re-mapper, 35 TE2 rows, 473.7 weighted points)

| | Before (brief 008 baseline, reproduced) | After |
|---|---|---|
| Full | 57.7% | 74.4% (strict 71.2%) |
| Partial | 40.4% | 25.6% (strict 28.8%) |
| None | 1.9% | 0.0% |
| Rows full / partial / none | n/a | 25 / 10 / 0 |

The cross-check report gave about 55% full, 43% partial and 2–3% none. The re-mapper reproduced the baseline at
57.7% full on the same weights.

## Remaining (not blocking once items 1 to 6 are fixed)

- Warning labels in te2-10: they need a dated official source before they can return.
- Partial rows from the re-mapper:
  - 1 bone health;
  - 13 nature-activity risks;
  - 15 Heart Symbol;
  - 17 water treatment and shortage;
  - 18 intoxication and drug-class vocabulary;
  - 23 caffeine and energy drinks;
  - 28 substances, sleep and eating in one answer;
  - 30 measuring functional capacity;
  - 32 four more indoor pollutants (CO2, formaldehyde, CO, asbestos);
  - 33 acute effects and mixing. Row 33 is partly blocked on purpose by the safety rules.
- Loose cite placement:
  - te2-01: present bias and bandwagon have no source;
  - te2-02: qualitative, quantitative and experimental are defined in original wording next to the Käypä hoito
    link;
  - te2-06: climate-anxiety measures are mostly the author's wording;
  - te2-04: "viilentää" should read "lievittää helteen haittoja";
  - te2-09: the model-answer clause "sikiö poistaa sitä hitaasti" has no source.
- Pedagogy minors:
  - te2-05 says "nämä kolme asiaa" over four bullets;
  - te2-02 K4 states a character limit with no consequence in the scoring;
  - te2-03 K1 and te2-05 K1 do not state "(10 x 2 p)";
  - te2-08 K4 has a repeated limit sentence and a weak sector example;
  - te2-04 K1 type slug (it does not classify) and its K3 content points (see above);
  - te2-10 K1 item 9 has a tell (the right answer is the longest);
  - te2-02 K1 answer letters are skewed.
- Safety minors (te2-09):
  - "jos juo vain vähän" in K4;
  - the adult-versus-youth comparison wording.
- Line budget: te2-01, te2-10 (500), te2-02 and te2-09 (499) cannot grow. Every fix must save at least as many lines
  as it adds.
- Human review: the teacher and health-professional reviews are still `none` on every page.

## For the operator

1. The drive worked: TE2 exam coverage is now about three quarters full and nothing is missing outright.
2. I can't accept yet: six small edits remain, mostly missing or wrong source links, one wrong fraction and two
   scoring lists.
3. Group C has four of the six (te2-08, te2-09, te2-10), group A one (te2-02) and group B one (te2-05).
4. Warning labels on alcohol are left out until an official page that names them is found.
5. After one short fix round and a quick recheck, this can be accepted, committed and pushed. Nothing is committed now.

## Recheck after the fix round

Second judge, 2026-11-21. I wrote nothing I check. I read each item in the files on disk. The build gives 0 errors and
0 warnings. No file in content/topics is over 500 lines (the largest are 500: te2-01, te2-10 and te1-05).

| # | Item | Ruling |
|---|---|---|
| 1 | te2-09 nicotine and placenta | Closed. Cited to dlk00984 right after the sentence. |
| 2 | te2-08 bare "(Työterveyslaitos)" | Closed. Now a link to the TTL työkyky page, which is dated in official_links. |
| 3 | te2-10 warning labels | Closed. Gone from the text and from the `alkoholipolitiikka` rule; the note is kept. |
| 4 | te2-02 K2 b) fraction | Closed. "puolesta kolmeen kymmenesosaan" matches 300/600 and 180/600. The a) fractions (3/5 to 4/5) are also right. |
| 5 | te2-05 K3 content points | Closed. a) 5 + b) 5 + c) 5 = 15; the b) points match what b) asks. |
| 6 | te2-10 K3 content points | Closed. a) 10 + b) 5 = 15. The task b) does not ask for the legal status, so dropping that point fits the task. |
| minor | te2-04 K3 content points | Closed. a) 10 + b) 3 + c) 2 = 15, and each line matches its sub-part. |

The Finnish in the edited lines reads naturally. Two small notes, not blocking:

- te2-10 K3: the scoring gives 1 p for a reasoned choice, but task b) only says "valitse". Adding "perustellen" to the
  task would make the two match. The a) and b) lines also sit in one bullet, where two would read better.
- te2-05 K3: c) earns 5 content points out of its 6, so almost none of c) is left for information processing.
  This is allowed, but a) 6 p and c) 4 p would spread the points more evenly.

Verdict after recheck: accept
