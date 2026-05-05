# Weekly Log — Group 3 (Christoph Dashboard)

Group members and roles:
| Name | Role |
|---|---|
| Alessio Ikenna Akabuogu | Project Lead |
| Sish Mohammad Mosnobi | UX Research & Validation Lead |
| Johannu Ayomiposi Dafidi Akinsola | UX / IA Designer |
| Md Sium | UI / Prototype Designer |
| Adnan Sadab Rain | Technical Feasibility & QA Lead |

---

## Pre-Sprint (Before Week 1)

| Activity | Who | Time |
|---|---|---|
| Read HiveMind × Ravensbourne brief and project spec | All | 1 hr |
| Confirmed focus area: Area A — Christoph Dashboard | Alessio | 30 min |
| Set up GitHub repository and invited HiveMind team | Alessio | 1 hr |
| Created initial Figma file with pages (Research, IA & Flows, Wireframes, UI, Prototype) | Johannu, Md Sium | 2 hrs |
| Agreed roles and secondary responsibilities | All | 30 min |

---

## Week 1 — Discovery & Hypotheses

**Sprint goal:** Understand Christoph's pain points through real interviews; map current vs. future journey; define hypotheses.

| Activity | Who | Time |
|---|---|---|
| Reviewed Christoph persona and pain points as a group | All | 1 hr |
| Drafted interview questions (6–8 neutral questions across Sections A–F) | Sish | 2 hrs |
| Reviewed and aligned interview questions with other groups | Alessio, Sish | 1 hr |
| Conducted interview — Participant T1 (Junior IT Technician, 11–50 employees) | Sish | 45 min |
| Conducted interview — Participant T2 (Senior Project Manager, 1000+ employees) | Sish | 45 min |
| Conducted interview — Participant T3 (Senior Operations Officer, Banking, 1000+ employees) | Sish | 45 min |
| Saved raw transcripts and consent records to `/Research/Transcript/` and `/Research/Consent/` | Sish | 1 hr |
| Sketched initial current journey map on Figma Research page | Johannu | 2 hrs |
| Synthesised pain points into 5 themes | Sish, Alessio | 2 hrs |
| Wrote 5 hypotheses in `/Docs/hypotheses.md` | Alessio, Sish | 1 hr |
| Drafted success metrics in `/Docs/success-metrics.md` | Alessio | 1 hr |
| Created research plan in `/Docs/research-plan.md` | Sish, Alessio | 1 hr |
| Drew current vs. future journey map (Figma — Research page) | Johannu | 3 hrs |
| Updated weekly log | Alessio | 30 min |

**Week 1 total:** ~18 hrs across group

**Key outputs:**
- 3 interviews completed, transcripts saved
- 5 hypotheses documented
- Current vs. Future journey map in Figma (Research page)
- Research plan, hypotheses, and success metrics files created

---

## Week 2 — Information Architecture & Wireframing

**Sprint goal:** Define IA structure; sketch wireframes for 3 core task flows; agree in-scope prototype screens with mentor.

| Activity | Who | Time |
|---|---|---|
| Conducted interview — Participant T4 (Software Engineer, Fintech, 50–100 employees) | Sish | 45 min |
| Listed main information chunks Christoph needs (tasks, contacts, Knowledge Hub, AI help, progress) | Johannu, Alessio | 1 hr |
| Created IA diagram / sitemap in Figma (IA & Flows page) | Johannu | 3 hrs |
| Defined 3 critical user tasks and wrote them in `/testing/tasks.md` | Alessio | 1 hr |
| Sketched low-fidelity wireframes for all 3 task flows (Figma — Wireframes page) | Johannu, Md Sium | 4 hrs |
| Referenced Carbon React Storybook for component shapes while wireframing | Johannu | 1 hr |
| Mentor session — walked through IA and wireframes, agreed on 3-flow prototype scope | Alessio (lead), All | 1 hr |
| Recorded scope decisions in `/Docs/decisions.md` | Alessio | 30 min |
| Exported IA diagrams and key wireframes to `/Design/` folder | Md Sium | 1 hr |
| Updated weekly log | Alessio | 30 min |

**Week 2 total:** ~14 hrs across group

**Key outputs:**
- 4th interview completed
- IA diagram and sitemap in Figma
- Low-fidelity wireframes (3 task flows)
- `testing/tasks.md` created
- Scope confirmed with mentor

---

## Week 3 — High-Fidelity UI & Trust Patterns

**Sprint goal:** Build hi-fi prototype in Figma; implement React/Carbon tech slice; conduct internal dry run.

| Activity | Who | Time |
|---|---|---|
| Conducted interview — Participant T5 (Junior Network Operations, 50–100 employees) | Sish | 45 min |
| Conducted interview — Participant T6 (Sales Executive, Real Estate, 50–100 employees) | Sish | 45 min |
| Defined mini Carbon-style token system in Figma (typography, colours, buttons, inputs) | Md Sium | 2 hrs |
| Converted wireframes to hi-fi screens (Figma — UI page) | Md Sium, Johannu | 6 hrs |
| Built interactive prototype linking all screens (Figma — Prototype page) | Md Sium | 3 hrs |
| Added microcopy for AI source transparency ("Based on: [document name] · Last updated: [date]") | Johannu, Md Sium | 1 hr |
| Set up React app with Vite + @carbon/react + Sass | Adnan | 2 hrs |
| Implemented `AIDashboardTile` Carbon component | Adnan | 2 hrs |
| Implemented `AIAssistantInput` Carbon component | Adnan | 2 hrs |
| Added Storybook and wrote stories for both components | Adnan | 2 hrs |
| Wrote `/Tech/README.md` with setup instructions | Adnan | 30 min |
| Internal dry run — one teammate played Christoph through all 3 flows | All | 1 hr |
| Fixed 3 dead ends and 2 labelling issues identified in dry run | Md Sium | 1 hr |
| Synthesis write-up by Sish (research paper) saved to `/Research/Reasearch- Sish` | Sish | 3 hrs |
| Updated weekly log | Alessio | 30 min |

**Week 3 total:** ~27 hrs across group

**Key outputs:**
- 2 more interviews (6 total)
- Hi-fi Figma prototype with 3 complete interactive flows
- React/Carbon components + Storybook stories
- AI trust microcopy in place
- Internal dry run complete with fixes applied

---

## Week 4 — Validation & Findings

**Sprint goal:** Run usability tests; synthesise results; write validation report; prepare final presentation.

| Activity | Who | Time |
|---|---|---|
| Wrote usability test script (intro, consent, 3 tasks, closing questions) | Sish | 2 hrs |
| Recruited 5 usability test participants (professionals, not students) | Alessio, Sish | 2 hrs |
| Ran usability sessions (5 × 25 min) | Sish (lead), Alessio (observer) | 3 hrs |
| Captured think-aloud notes and per-task data to `/testing/` folder | Sish, Alessio | 1 hr |
| Scored SUS questionnaires | Adnan | 1 hr |
| Synthesised test findings into themes | Sish, Alessio | 2 hrs |
| Wrote validation report in `/Delivery/validation-report.md` | Sish, Alessio | 3 hrs |
| Prepared final 10-minute presentation deck | Md Sium, Johannu | 4 hrs |
| Rehearsed presentation | All | 1 hr |
| Finalised evidence pack (check all folders complete) | Alessio | 1 hr |
| Pushed all final files to GitHub | Alessio | 30 min |
| Updated weekly log | Alessio | 30 min |

**Week 4 total:** ~21 hrs across group

**Key outputs:**
- 5 usability test sessions completed
- SUS scores calculated
- Validation report written
- Final presentation prepared
- Evidence pack finalised

---

## Grand Total: ~80 hrs across 5 team members over 4 weeks
