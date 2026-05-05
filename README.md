# HiveMind × Ravensbourne — Group 3: Christoph Dashboard

**Module:** Work-Based Learning (WBL) — HiveMind Academy
**Focus Area:** Area A — "Christoph" Dashboard
**Duration:** 4 weeks (16 March – 24 April 2026)

---

## Group Members & Roles

| Name | Role |
|---|---|
| **Alessio Ikenna Akabuogu** | Project Lead / Client Communications |
| **Sish Mohammad Mosnobi** | UX Research & Validation Lead |
| **Johannu Ayomiposi Dafidi Akinsola** | UX / IA Designer |
| **Md Sium** | UI / Prototype Designer |
| **Adnan Sadab Rain** | Technical Feasibility & QA Lead |

---

## Project Summary

Group 3 acted as a **Product Discovery Squad** for HiveMind Academy. We were tasked with validating whether HiveMind's proposed Christoph Dashboard feature truly solves the pain points of workplace professionals — specifically cognitive load from scattered information, no unified view, and difficulty navigating workplace tools.

Over 4 weeks we:
1. Conducted **6 discovery interviews** with working professionals across IT, banking, civil engineering, fintech, telecoms, and real estate
2. Synthesised findings into **5 testable hypotheses**
3. Designed a **high-fidelity Figma prototype** covering 3 core task flows
4. Built **React + Carbon Design System components** as a tech stretch
5. Ran **5 usability test sessions** achieving a **SUS score of 82/100**

---

## Key Links

| Resource | Link |
|---|---|
| Figma Prototype | [Open in Figma](https://www.figma.com/design/3vk6xmimlwcnfTfcLTmXaf/Untitled?node-id=0-1&t=U4JML9oAz8AxmDmi-1) |
| Validation Report | [delivery/validation-report.md](delivery/validation-report.md) |
| Hypotheses | [Docs/hypotheses.md](Docs/hypotheses.md) |
| Research Plan | [Docs/research-plan.md](Docs/research-plan.md) |
| Weekly Log | [weekly-log.md](weekly-log.md) |
| Tech Setup | [Tech/README.md](Tech/README.md) |
| Design Spec | [Design/figma-design-specification.md](Design/figma-design-specification.md) |

---

## Repository Structure

```
HiveMind-Group-3/
├── README.md                          ← This file
├── weekly-log.md                      ← Activity log by week and person
├── Docs/
│   ├── research-plan.md               ← Interview plan, questions, participants
│   ├── hypotheses.md                  ← 5 testable hypotheses with evidence
│   ├── success-metrics.md             ← Quantitative and qualitative KPIs
│   └── decisions.md                   ← Scope changes and key decisions
├── Research/
│   ├── Transcript/                    ← Raw interview transcripts (T1–T6)
│   ├── Consent/                       ← Participant consent records
│   ├── Synthesis                      ← Research synthesis paper (Sish)
│   └── Reasearch- Sish                ← Research notes
├── Design/
│   ├── figma-design-specification.md  ← Design tokens, screens, components, flows
│   ├── Journey maps                   ← Current vs. future journey map exports
│   ├── Prototype 1                    ← Prototype exports
│   └── Prototype idea                 ← Early concept exploration
├── testing/
│   └── tasks.md                       ← 3 critical user tasks + test script
├── delivery/
│   └── validation-report.md           ← Full validation findings and recommendations
├── Delivery/
│   └── Findings/
│       ├── Finding Raw                ← Raw usability test notes
│       └── Recommendations/
│           └── Recommendations Raw    ← Raw recommendation notes
└── Tech/
    ├── README.md                      ← Setup guide (npm install, run dev, run storybook)
    ├── package.json                   ← Dependencies (Vite, @carbon/react, Storybook)
    └── src/
        ├── App.jsx                    ← Three-view app shell
        ├── App.scss                   ← App-level layout styles
        └── components/
            ├── AIDashboardTile.jsx    ← AI insight tile with source attribution
            ├── AIDashboardTile.scss
            ├── AIDashboardTile.stories.jsx
            ├── AIAssistantInput.jsx   ← AI query input with sensitive-topic detection
            ├── AIAssistantInput.scss
            └── AIAssistantInput.stories.jsx
```

---

## Core Findings (4 Weeks of Research + Testing)

| Pain Point Validated | Evidence |
|---|---|
| Information scattered across 2+ tools daily | 6/6 participants |
| Generic onboarding — no role-specific guidance | 5/6 participants |
| No single source of truth for documents | 4/6 participants |
| AI tools not trusted (no source transparency) | 4/6 participants used AI; 4/4 cited source opacity as barrier |
| Cognitive overload from too many dashboards | Explicitly stated by T5, T6 |

**SUS Score: 82/100** — Prototype rated "Good" on the System Usability Scale.

---

## Contact

For questions about this project:
- **Project Lead:** Alessio Ikenna Akabuogu — alessioakabuogu@gmail.com
- **HiveMind contacts:** andrei@hivemindacademy.com / madalina@hivemindacademy.com
