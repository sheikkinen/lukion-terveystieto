export const meta = {
  name: 'module-content',
  description: 'lukion-terveystieto: one module (TE1, TE2, TE3): data and sample topic in parallel, three topic writers, four separate checks, one fix round by group, judge on the final recheck',
  whenToUse: 'Write a module\'s topics ahead of the engine. args: {root, brief, judgement, now}',
  phases: [
    { title: 'Foundation', detail: 'data agent and lead writer' },
    { title: 'Topics', detail: 'three writers following the sample' },
    { title: 'Check', detail: 'curriculum, facts and links, safety and inclusion, pedagogy and exam tasks' },
    { title: 'Fix', detail: 'one round by topic group, then recheck' },
    { title: 'Judge' },
  ],
}

const ROOT = args && args.root
if (!ROOT) throw new Error('args.root (the project folder) is required')
const BRIEF = (args && args.brief) || 'prompts/002-te1-content.md'
const JUDGEMENT = (args && args.judgement) || 'docs/review/2026-11-21-brief-002-judgement.md'
const NOW = (args && args.now) || '2026-11-21'
const MOD = ((args && args.module) || 'TE1').toUpperCase()
const mod = MOD.toLowerCase()
const RESEARCH = (args && args.research) || 'docs/research/2026-11-21-scouting.json'
const FLAGGED = (args && args.flagged) || []

const RF = `Project root: ${ROOT}. Build with python -m lukio_runko build --root "${ROOT}" (your own --out folder if the shared _site is busy; 0 errors, 0 warnings); topic files at most 500 lines; the contract addendum's engine formats apply (exam headings '### K1: Nimi, 25 min (20 p)', one H2 lesson plan with H3 60/45, linked_materials, model-answer halves linking the rubric section of the curriculum page). First read ${ROOT}\\CLAUDE.md (rules, health and safety), ${ROOT}\\${BRIEF} (your brief), docs/content-contract.md and docs/research/2026-11-21-research.md; the module's topic list with codes, link inventory and safety rules is the critic's 'proposal' array in ${RESEARCH}. The module is ${MOD}; topic ids are ${mod}-NN-slug and files content/topics/NN-slug.md with module: ${MOD} in the front matter (the engine derives the id; see the contract addendum). Check that slugs and order numbers do not collide with existing TE1 files and follow the engine's rule for order (read lukio-runko's README). The finished TE1 topics (content/topics/te1-*) are the model for form and voice; do not repeat TE1 content, link to it. The sibling site lukion-opinto-ohjaus (its folder is next to this one) is a read-only reference for form and voice (its docs/style-guide.md and content/topics/04-hyvinvointi.md). Today is ${NOW}. Do not commit or push. Leave no server running. Never write a local path, key or personal name into a file. Web reads: at most two tries per page; list what you could not read. The content language is Finnish.`
const WRITE = `Write warm, plain, respectful Finnish (selkeä yleiskieli), sinä to the student, collegial to the teacher. Follow docs/style-guide.md and the sample ${mod}-01 topic (content/topics/01-*.md with module: ${MOD}) exactly in structure and voice, and every section of the contract in order. Curriculum codes from the critic's list; never type curriculum wording. Health and safety: no medical advice, no figures that invite comparison on flagged pages, no scare tactics or shaming, weight-neutral and inclusive of every gender and orientation, no prompt asking the student to disclose their own health, a content note and an 'Apua ja tukea' section with 112 and dated official help links on flagged pages. Exam tasks: original, in the YTL task types, with model answers, scoring and typical errors, never copied from YTL. Link existing materials from data/materials.yaml with their licence class; never copy their text. Task times vary with the work; offline alternatives need paper only; the 45-minute plan keeps the goal task; every 'Osaan' outcome is practised by a task step or exam task.`
const REPORT = { type: 'object', properties: { files: { type: 'array', items: { type: 'string' } }, summary: { type: 'string' }, not_done: { type: 'array', items: { type: 'string' } } }, required: ['files', 'summary', 'not_done'] }
const CHECK = { type: 'object', properties: { passed: { type: 'boolean' }, must_fix: { type: 'array', items: { type: 'object', properties: { what: { type: 'string' }, where: { type: 'string', description: 'file and section' }, group: { type: 'string', enum: ['01', '02-04', '05-07', '08-10', 'data'], description: 'topic group by number within the module' } }, required: ['what', 'where', 'group'] } }, minor: { type: 'array', items: { type: 'string' } }, summary: { type: 'string' } }, required: ['passed', 'must_fix', 'summary'] }

phase('Foundation')
const foundation = (await parallel([
  ['data', 'sonnet', `You are the data agent. ${RF}
You own data/, subject.yaml and tools/fetch_curriculum.py. (0) Add ${MOD} to subject.yaml (its ePerusteet module id from data/curriculum-te1-te3.yaml, its route, expected code counts), then run python -m lukio_runko fetch-curriculum --root "${ROOT}" so data/curriculum.yaml has the ${MOD} codes in the engine's format, and confirm the build still passes for TE1. (1) If tools/fetch_curriculum.py does not exist, write it (stdlib + PyYAML, under 200 lines, no local paths) that fetches https://eperusteet.opintopolku.fi/eperusteet-service/api/perusteet/6828810/kaikki, selects the oppiaine with koodi.arvo == TE and its modules by koodi.arvo, and writes data/curriculum.yaml with the contract's codes (TE.yt1-5, TE1.t1-3, TE1.s1-7, and TE2/TE3 codes the same way) and the exact Finnish wording (names trimmed), ids, credits, compulsory flags, the record's publication date and the date checked. Run it. (2) Add to data/materials.yaml (keep the existing entries): per ${MOD} topic id the 3-6 best existing materials from the critic's inventory, each {title, url, publisher, licence_class, licence, audience, read}; open every URL and fix moved ones (find the current page), drop dead ones with a note. (3) Add to data/yearly-facts.yaml (keep existing keys) the ${MOD} facts that change, from the research, each {key, rule (stable rule only, plain Finnish), url, publisher, read, note}. Validate the YAML.`],
  ['sample', undefined, `You are the lead writer and set the voice. ${RF}
You own docs/style-guide.md (additions only, keep it under 260 lines) and content/topics/${mod}-01-*.md. (1) Add the ${MOD} glossary, material-based task templates and the ${MOD}-specific safety rules from the research to the style guide. (2) Topic ${mod}-01 (title and codes from the critic's list) in full to the contract, with 2-3 exam tasks and model answers, materials linked from data/materials.yaml if it exists yet (else from the critic's inventory, opened yourself), varied task times, a paper-only offline alternative, a help box. It must be the best example the writers can copy.
${WRITE}`],
].map(([k, m, p]) => () => agent(p, { label: `foundation:${k}`, phase: 'Foundation', schema: REPORT, ...(m ? { model: m } : {}) }).then(r => r && ({ key: k, ...r }))))).filter(Boolean)

phase('Topics')
const GROUPS = [['02-04', `topics ${mod}-02, ${mod}-03 and ${mod}-04`], ['05-07', `topics ${mod}-05, ${mod}-06 and ${mod}-07`], ['08-10', `topics ${mod}-08, ${mod}-09 and ${mod}-10 (and any later ${mod} topic in the critic's list)`]]
const writers = (await parallel(GROUPS.map(([g, which]) => () => agent(`You are a topic writer. ${RF}
Write ${which} as content/topics/NN-slug.md with module: ${MOD} with the titles, codes, safety flags and links of the critic's list and data/materials.yaml. You own only those files. Read docs/style-guide.md and the sample topic ${mod}-01 first and match them.
${WRITE}`, { label: `topics:${g}`, phase: 'Topics', model: 'sonnet', schema: REPORT }).then(r => r && ({ group: g, ...r }))))).filter(Boolean)

const CHECKS = {
  curriculum: `You are the curriculum checker; you wrote nothing. ${RF} Check every topic's codes against data/curriculum.yaml, that each ${MOD} objective and content code is covered by a topic AND by at least one exam task, that nothing is presented as required that is not, and that ${MOD} topics do not repeat TE1 content but link to it, and that assessment never targets values, attitudes or health behaviour. Spot-check data/curriculum.yaml against the API for 4 codes. Each problem is a must_fix with its group. Do not edit.`,
  facts: `You are the health facts and links checker; you wrote nothing. ${RF} Open every URL in the topics, data/materials.yaml and data/yearly-facts.yaml (two tries each). Report broken or moved links, links that do not support their sentence, missing read dates, licence classes that look wrong, stable health rules stated wrongly, and any changing figure typed into text (hours of sleep, minutes of activity, amounts, ages beyond the stable ones in yearly-facts). Do not edit.`,
  safety: `You are the safety and inclusion checker; you wrote nothing. ${RF} Read every topic in full. Check: content notes and an 'Apua ja tukea' section with 112 and dated help links on every flagged page (${FLAGGED.join(', ') || 'every page with safety_flags'}); no figures that invite comparison (kg, kcal, BMI, grams, portions, doses, methods) on flagged pages; nothing reads as medical advice; no scare tactics, shaming or moralising; weight-neutral; inclusive of every gender and orientation; no prompt asks a student to disclose their own health, body, sexuality or substance use; the safe-messaging rules in CLAUDE.md and the style guide. Do not edit.`,
  pedagogy: `You are the pedagogy and exam-task checker; you wrote nothing. ${RF} Read every topic. Check: lesson tables add up for 75, 60, 45 and the 45-minute plan keeps the goal task; task times fit the work and vary; offline alternatives need paper only; every 'Osaan' outcome is practised; exam tasks are in the YTL task types, original (nothing copied from YTL or publishers), with model answers whose points add up to the task's points, a scoring guide and typical errors; consistent voice with ${mod}-01, the TE1 topics and the style guide; plain, correct Finnish. Do not edit.`,
}
const runChecks = keys => parallel(keys.map(k => () => agent(CHECKS[k], { label: `check:${k}`, phase: 'Check', model: 'sonnet', schema: CHECK }).then(r => r && ({ check: k, ...r }))))

phase('Check')
let checks = (await runChecks(Object.keys(CHECKS))).filter(Boolean)
const history = [{ round: 0, foundation, writers, checks }]
let failing = checks.filter(c => !c.passed || c.must_fix.length)
if (failing.length) {
  phase('Fix')
  const items = failing.flatMap(c => c.must_fix.map(f => ({ check: c.check, ...f })))
  const owners = { '01': `the ${MOD} topic 01 file and docs/style-guide.md`, '02-04': `the ${MOD} topic files 02-04`, '05-07': `the ${MOD} topic files 05-07`, '08-10': `the ${MOD} topic files 08 and later`, 'data': 'data/, subject.yaml and tools/' }
  const groups = [...new Set(items.map(i => i.group))].filter(g => owners[g])
  const fixes = (await parallel(groups.map(g => () => agent(`You are the fixer for ${owners[g]}. ${RF} You own only those files. Fix each item at its root; never invent facts (a fact you cannot source becomes a link or is removed).
${g === 'data' ? '' : WRITE}
Items: ${JSON.stringify(items.filter(i => i.group === g))}`, { label: `fix:${g}`, phase: 'Fix', model: 'sonnet', schema: REPORT }).then(r => r && ({ group: g, ...r }))))).filter(Boolean)
  const re = (await runChecks(failing.map(c => c.check))).filter(Boolean)
  checks = checks.map(c => re.find(r => r.check === c.check) || c)
  history.push({ round: 1, fixes, recheck: re })
  failing = checks.filter(c => !c.passed || c.must_fix.length)
}
const finalOpen = failing.flatMap(c => c.must_fix.map(f => ({ check: c.check, ...f })))

phase('Judge')
const judgement = await agent(`You are the judge; you wrote nothing in this project. Rule from files only: ${ROOT}\\${BRIEF}, CLAUDE.md, the contract, the style guide, the ${MOD} topics, data/. Read at least four topics in full (${mod}-01, one per writer group), including their exam tasks, model answers, help boxes and 45-minute plans. Rule first on the FINAL recheck's open items: ${JSON.stringify(finalOpen)} (real or not; blocks the build brief or not). Then rule on each Done-when line. Context to verify: ${JSON.stringify(history).slice(0, 40000)}
Write ${ROOT}\\${JUDGEMENT} (under 150 lines): verdict (accept / accept-with-minors / reject), a table, remaining items, at most 5 plain lines for the operator. Do not commit.`, { label: 'judge', phase: 'Judge', schema: { type: 'object', properties: { verdict: { type: 'string', enum: ['accept', 'accept-with-minors', 'reject'] }, operator_summary: { type: 'string' }, remaining: { type: 'array', items: { type: 'string' } } }, required: ['verdict', 'operator_summary', 'remaining'] } })

return { foundation, writers, checks, final_open: finalOpen, judgement }
