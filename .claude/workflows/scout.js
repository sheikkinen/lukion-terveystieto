export const meta = {
  name: 'scout',
  description: 'Research fan-out for a committed research brief: one researcher per aspect, then a critic that spot-checks, finds gaps, proposes the data model and compares with the expected answers',
  whenToUse: 'A research brief with expected answers written first. args: {brief, root, aspects: [{key, prompt}], critic_tasks}',
  phases: [
    { title: 'Research', detail: 'one agent per aspect' },
    { title: 'Critic', detail: 'spot-checks, gaps, data model, expected answers' },
  ],
}

const ROOT = args && args.root
if (!ROOT) throw new Error('args.root (the project folder) is required')
const BRIEF = args && args.brief
const ASPECTS = (args && args.aspects) || []
if (!BRIEF || !ASPECTS.length) throw new Error('args.brief and args.aspects are required')

const RULES = `Project root: ${ROOT}. Read ${ROOT}\\CLAUDE.md and ${ROOT}\\${BRIEF} first. Research only: do not edit project files, commit or push. Read primary pages (WebSearch/WebFetch, loaded with ToolSearch), not memory. Grade each claim: verified (read on the page, URL given), likely, or unverified. Grade fields separately where they differ (a death year can be verified when a licence is not). Give each web read at most two tries: if a page fails (403, timeout, JavaScript-only), list it under could_not_read and move on, never retry in a loop. Never include personal data in searches. Quote at most 15 words of any source.`

const FINDINGS = {
  type: 'object',
  properties: {
    summary: { type: 'string' },
    findings: { type: 'array', items: { type: 'object', properties: {
      claim: { type: 'string' }, source_url: { type: 'string' },
      confidence: { type: 'string', enum: ['verified', 'likely', 'unverified'] } }, required: ['claim', 'confidence'] } },
    recommendations: { type: 'array', items: { type: 'string' } },
    sources_or_tools: { type: 'array', items: { type: 'object', properties: {
      name: { type: 'string' }, url: { type: 'string' }, what: { type: 'string' }, access: { type: 'string' }, licence: { type: 'string' } }, required: ['name', 'what'] } },
    could_not_read: { type: 'array', items: { type: 'string' } },
    versus_expected: { type: 'string', description: 'how this compares with the brief\'s expected answer for this aspect' },
  },
  required: ['summary', 'findings', 'recommendations', 'versus_expected'],
}

phase('Research')
const research = (await parallel(ASPECTS.map(a => () =>
  agent(`${RULES}\n\nYour aspect: ${a.key}.\n${a.prompt}`, { label: `research:${a.key}`, phase: 'Research', model: 'sonnet', schema: FINDINGS })
    .then(r => r && ({ key: a.key, ...r }))))).filter(Boolean)
const missing = ASPECTS.map(a => a.key).filter(k => !research.find(r => r.key === k))
log(`${research.length}/${ASPECTS.length} researchers returned${missing.length ? `; missing: ${missing.join(', ')}` : ''}`)

phase('Critic')
const critic = await agent(`You are the completeness critic. ${RULES}
The research results, as JSON:\n${JSON.stringify(research).slice(0, 150000)}\n
Do the following:
1. List gaps, contradictions and unverified claims that matter. Spot-check the five most load-bearing claims on the web yourself.
2. For each of the brief's expected answers, say right, wrong or refined, in one or two sentences.
3. The project-specific tasks: ${args.critic_tasks || 'propose the structure of the deliverable.'}
Return raw data.`, {
  label: 'critic', phase: 'Critic', model: 'opus',
  schema: { type: 'object', properties: {
    gaps: { type: 'array', items: { type: 'string' } },
    spot_checks: { type: 'array', items: { type: 'object', properties: { claim: { type: 'string' }, result: { type: 'string' }, url: { type: 'string' } }, required: ['claim', 'result'] } },
    versus_expected: { type: 'array', items: { type: 'object', properties: { aspect: { type: 'string' }, verdict: { type: 'string', enum: ['right', 'wrong', 'refined'] }, note: { type: 'string' } }, required: ['aspect', 'verdict', 'note'] } },
    proposal: { type: 'array', description: 'the answers to the project-specific tasks, one entry per item', items: { type: 'object', properties: { task: { type: 'string' }, title: { type: 'string' }, detail: { type: 'string' }, sources: { type: 'array', items: { type: 'string' } } }, required: ['task', 'title', 'detail'] } },
  }, required: ['gaps', 'spot_checks', 'versus_expected', 'proposal'] },
})

return { research, critic }
