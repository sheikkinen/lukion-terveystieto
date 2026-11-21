# Engine issues: what lukio-runko v0.1.0 lacks for terveystieto

**Recorded by the site builder, brief 005, 2026-11-21.** The site uses the engine at the pinned tag `v0.1.0` and does
not fork it. Each issue says what the content contract (`docs/content-contract.md`) asks for, what the engine does, and
what the site does until the engine changes by its own brief in the engine repository.

## E-1: No review banner or site notice

- **Contract:** every page says "Sisältöä ei ole vielä tarkastanut terveystiedon opettaja eikä terveydenhuollon
  ammattilainen." until `review_status` is signed off.
- **Engine:** `subject.yaml` has no site notice, and topics have no per-page notice; `review_status` is not read.
- **Site now:** `templates/base.html` is a copy of the engine's v0.1.0 template with the banner added at the top of
  `<main>` (the README's documented override). The front page also carries the banner in its own text. The copy
  must be compared with the engine's template whenever the pin moves.
- **Wanted:** `site.notice` (HTML, optional) in `subject.yaml`, shown on every page, or a notice driven by a
  front-matter field such as `review_status`.

## E-2: Content note is not rendered at the top

- **Contract:** a flagged topic (`safety_flags`) shows `content_note` at the top of the page and of the lesson plan.
- **Engine:** ignores `safety_flags` and `content_note`. Text before the first `##` is not rendered, so the
  hand-written `> **Sisältöhuomautus:**` blockquotes in topics 06 and 07 do not appear on the site.
- **Site now:** `content_note` is declared in `topics.extra_fields` (label *Sisältöhuomautus*), so it shows as a row
  of the meta list near the top of both the student view and the lesson view of topics 04, 06, 07, 08 and 09. The
  blockquotes are kept in the Markdown for readers of the source.
- **Wanted:** a content-note box above the first section of both views when `content_note` is set, and a build
  check that a flagged topic has one.

## E-3: No "Linkitetyt materiaalit" list

- **Contract:** `## Linkitetyt materiaalit` is generated from the front matter `materials` list
  (`{title, url, publisher, licence_class, licence, audience, read}`); `excluded` entries are never shown.
- **Engine:** has no such section. A hand-written `## Linkitetyt materiaalit` is an unknown section (a build error).
- **Site now:** the one-line placeholder section was removed from the ten topics. Material links that are also in
  `official_links` appear in the generated Lähteet; the teacher materials (OPH tukimateriaali, aoe.fi course plans,
  UNESCO guidance, Tunne rintasi ry) do not appear on the site yet. The Valmistelu notes of topics 01, 02, 03, 06
  and 07 still point to "(linkitetyt materiaalit)".
- **Wanted:** a generated list (after Apua ja tukea, before Lähteet) with publisher, licence class and read date,
  `excluded` left out, and a build check of licence class and read date (12 months).

## E-4: The front-matter key `materials` means something else in the engine

- **Contract:** `materials` is the list of linked materials (E-3).
- **Engine:** `materials` is the lesson supplies list (*Tarvikkeet*) and is printed as text in the lesson view's
  meta list, so the contract's mappings were shown as raw Python dictionaries, including an `excluded` entry.
- **Site now:** each topic has `materials: []` (no supplies row) and the linked materials under
  `linked_materials`, unchanged otherwise. `docs/content-contract.md` and the style guide still say `materials`;
  the producer should add a contract addendum, and any tool that reads `materials` must read `linked_materials`.
- **Wanted:** a separate key for linked materials in the engine (for example `linked_materials`), or supplies under
  a key of their own.

## E-5: Topic file names are fixed by the id rule

- **Contract:** `content/topics/te1-NN-slug.md` with `id: te1-NN-slug`.
- **Engine:** requires `id` to be `<module lower case>-<file name>`, so a file `te1-01-x.md` would need the id
  `te1-te1-01-x`.
- **Site now:** the files were renamed to `content/topics/NN-slug.md` (as in opinto-ohjaus); ids are unchanged, and
  the pages are at `te1/NN-slug/`. The contract, the style guide and the README table still name `te1-NN-slug.md`.
- **Wanted:** nothing, if the contract adopts `NN-slug.md`; otherwise an id rule that accepts a module prefix in the
  file name.

## E-6: The three lesson plans must be one section

- **Contract:** three H2 sections `## Tuntisuunnitelma (75 min)`, `(60 min)` and `(45 min)`.
- **Engine:** reads one `## Tuntisuunnitelma (75 min)` section with the shorter plans as `### Tuntisuunnitelma (60
  min)` and `### Tuntisuunnitelma (45 min)` inside it; a second H2 plan is not rendered or checked.
- **Site now:** the 60 and 45 minute headings are H3. Valmistelu, Avoimet kysymykset and Pelisäännöt follow the
  45 minute table and are shown as the plan's shared notes.

## E-7: Exam-task headings must end in the points

- **Contract and style guide:** `### K1: Virheiden tunnistaminen (20 p, 25 min)`; model answers `### K1:
  Mallivastaus`.
- **Engine:** a task heading must end in `(N p)` and its model answer must have the same heading.
- **Site now:** `### K1: Virheiden tunnistaminen, 25 min (20 p)` in both sections. Points and minutes are kept.
- **Wanted:** a heading pattern in `subject.yaml`, or a check that matches tasks and answers by id (`K1`).

## E-8: Contract checks the engine does not run

The engine runs the opinto-ohjaus checks plus the exam-section pairing. It does not check: coverage of every TE1
code by an exam task (`exam_tasks.codes`), that the points of a model answer add up to the heading, "Osaan"
coverage, `licence_class` and read dates of linked materials, the help section on flagged topics (112 and dated
help links), the figure scanner on flagged pages, the privacy linter, or `review_status`. These stay with the
checker agents until the engine has them.

## E-9: Curriculum file format

- The engine's `fetch-curriculum` writes its own format to `data/curriculum.yaml` (codes keyed by `TE.yt1`,
  `TE1.t1`, `TE1.s1` ... `TE1.s7`, the same codes the topics use) and only for the modules in `subject.yaml`, without
  the content-group names (*Terveyden kokonaisvaltaisuus*, *Kehon ja mielen hyvinvoinnin keskeiset perusteet*).
- **Site now:** `data/curriculum.yaml` is the engine's file (TE1). The earlier site-format file with TE1-TE3 and the
  content groups is kept as `data/curriculum-te1-te3.yaml` for TE2 and TE3 work; the engine does not read it.

## E-10: Every yearly fact needs a read date

- **Engine:** `data/yearly-facts.yaml` fails the build for any fact without `read`, used or not.
- **Site now:** the three unread law facts (alkoholilaki, tupakkalaki, huumausainelaki; no TE1 topic uses them)
  moved to `data/yearly-facts-pending.yaml`, which the engine does not read. They go back when their pages are read.

## E-11: No extra static pages, and no heading anchors

- **Brief 006:** a shared page `content/pages/tiedonkasittely.md` with the information-processing rubric, linked from
  every topic's model answers.
- **Engine:** writes only the six pages in `STATIC_PAGES` (`build.py`). Any other file in `content/pages/` is loaded
  and its links are checked, but it is never written, so a link to it would break. Headings get no `id` (the Markdown
  renderer has no `toc` or `attr_list` extension), so a link cannot point at a section.
- **Site now (lead writer, brief 006, 2026-11-21):** the rubric is the section *Tiedonkäsittely koetehtävissä* of
  `content/pages/opetussuunnitelma.md`. Topics link the page itself: `../../opetussuunnitelma/` from a topic page and
  `../../../opetussuunnitelma/` from a lesson view (`tunti/`), with the section name in the link text.
- **Wanted:** extra pages declared in `subject.yaml` (slug, title, nav or not), and heading ids so a link can name a
  section. When both exist, the section moves to its own page `tiedonkasittely`.
