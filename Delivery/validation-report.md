# Validation Report — Group 3 (Christoph Dashboard)

**Project:** HiveMind × Ravensbourne WBL — Area A: Christoph Dashboard
**Date:** April 2026
**Prepared by:** Alessio Ikenna Akabuogu (Project Lead), Sish Mohammad Mosnobi (UX Research Lead)
**Prototype:** [Figma Prototype](https://www.figma.com/design/3vk6xmimlwcnfTfcLTmXaf/Untitled?node-id=0-1&t=U4JML9oAz8AxmDmi-1)

---

## 1. Executive Summary

Group 3 conducted 6 discovery interviews in Weeks 1–2 and 5 usability test sessions in Week 4, evaluating a high-fidelity Figma prototype of the HiveMind Christoph Dashboard. The dashboard was designed to address the core pain points of cognitive overload, scattered information, and AI distrust in workplace settings.

**Key finding:** The prototype successfully addressed 4 of 5 hypotheses. The unified dashboard, Knowledge Hub, and AI trust transparency were all rated positively. Navigation labelling remains an area for improvement.

**SUS Score: 82 / 100** (Good — above our target of ≥ 80)

---

## 2. Research Participants

### Discovery Interviews (Week 1–2)

| Participant | Role | Sector | Company Size |
|---|---|---|---|
| T1-P01 | Junior IT Technician | IT Services | 11–50 |
| T2-P01 | Senior Project Manager | Civil Engineering | 1000+ |
| T3-P01 | Senior Operations Officer | Banking | 1000+ |
| T4-P02 | Software Engineer | Fintech | 50–100 |
| T5-P01 | Junior Network Operations | Telecoms | 50–100 |
| T6-P02 | Sales Executive | Real Estate | 50–100 |

### Usability Test Participants (Week 4)

5 participants — all working professionals (not students), varying sectors and seniority levels. Sessions were 20–25 minutes via video call and in-person. Think-aloud protocol used.

---

## 3. Discovery Findings (Weeks 1–2)

### Theme 1: Information Scattered Across Multiple Tools
All 6 participants reported using 2+ separate platforms daily to find basic workplace information. Typical flow: Teams/Slack → email → shared drive → ask a colleague. Time lost: 5–30 minutes per search session.

> *"I have to check multiple sources. There is no integrated system. Everything exists in silos."* — T6-P02, Sales Executive

> *"How often do you check more than one place? Very often — almost every day. It's rare to find everything in one place."* — T3-P01, Senior Operations Officer

### Theme 2: Onboarding Felt Generic and Overwhelming
5 of 6 participants described their onboarding as either "overwhelming" or "box-ticking." None reported knowing their priorities clearly in the first two weeks without asking a colleague or manager.

> *"I spent hours and hours on compliance training that had nothing to do with project management."* — T2-P01, Senior Project Manager

> *"They gave us big onboarding files and said 'read these.' No one checks if you understood anything."* — T5-P01, Network Operations

### Theme 3: No Single Source of Truth — Document Versioning Problem
Participants described acting on outdated documents, being unsure which version was current, and losing time to verify currency manually.

> *"There were multiple versions of documents. You spend extra time verifying it."* — T3-P01

### Theme 4: AI Tools Used but Not Fully Trusted
Every participant who had used AI at work (4 of 6) cited lack of source transparency as the primary barrier to trusting AI answers. Three specifically asked for source links before they would act on output.

> *"I would trust it more if it shows the source of the information, like linking to the original document."* — T3-P01

### Theme 5: Cognitive Overload — Too Many Dashboards, Too Many Tools
Participants in operational roles (T5, T6) described managing 6–10 dashboards simultaneously, with contradictory information across them, and no single reconciled view.

> *"One dashboard shows a region 'healthy,' another shows 'severe degradation.' Who do you trust? No one knows."* — T5-P01

---

## 4. Usability Test Results (Week 4)

### Task 1 — Find Key Document

| Metric | Target | Result |
|---|---|---|
| Task success rate | ≥ 80% | **100%** (5/5) |
| Average time on task | ≤ 90 sec | **67 sec** |
| Average clicks to document | ≤ 3 clicks | **2.4 clicks** |
| Participants confirmed document currency | Pass/Fail | **4/5 passed** (1 hesitated on version label) |

**Observation:** One participant did not immediately notice the "Last updated" date stamp because it was positioned below the document title in a smaller font. Recommendation: increase visual weight of version metadata.

---

### Task 2 — Find Team Contact

| Metric | Target | Result |
|---|---|---|
| Task success rate | ≥ 80% | **80%** (4/5) |
| Average time on task | ≤ 120 sec | **98 sec** |
| Wrong navigation steps | ≤ 1 | **1.2 average** |

**Observation:** One participant navigated to the Knowledge Hub first rather than the Dashboard contacts widget. The "People" section label was not immediately obvious. The label "Team Contacts" was suggested as clearer than the current "Directory" label.

---

### Task 3 — AI Assistant + Trust

| Metric | Target | Result |
|---|---|---|
| Task success rate | ≥ 80% | **100%** (5/5) |
| Average time to locate AI | ≤ 2 clicks | **1.8 clicks** |
| Source identified within 30 sec | Pass/Fail | **5/5 passed** |
| Post-task trust rating | ≥ 4/5 | **4.4 / 5** |
| Would act on AI answer | ≥ 3/5 yes | **4/5 yes** |

**Observation:** This was the strongest-performing task. Every participant identified the source document and most expressed positive surprise at the transparency ("Oh, it shows me where it came from — that's actually really useful."). One participant asked whether the AI could also indicate when a policy was due for review.

---

### System Usability Scale (SUS)

Average SUS score across 5 participants: **82 / 100**

| Participant | SUS Score |
|---|---|
| P1 | 85 |
| P2 | 80 |
| P3 | 87.5 |
| P4 | 77.5 |
| P5 | 80 |
| **Average** | **82** |

Industry benchmark: SUS ≥ 80 = "Good"; ≥ 90 = "Excellent". We exceeded our target of 80.

---

### Qualitative Findings

**What worked well:**
- AI source transparency was unanimously praised — participants felt empowered to act on answers
- Dashboard home view was described as "clean" and "not overwhelming" by 4 of 5 participants
- Knowledge Hub search with version stamps received positive comments about trust

**What needs improvement:**
1. **"Directory" label** — rename to "Team Contacts" or "People Directory" for clarity
2. **Version metadata prominence** — increase font size and visual weight of "Last updated" on documents
3. **Navigation labelling** — "My Progress" widget unclear to 2 participants (rename to "Onboarding Checklist")
4. **AI answer length** — 2 participants found the AI response too brief and wanted a "read more" option

---

## 5. Hypothesis Validation Results

| Hypothesis | Result | Evidence |
|---|---|---|
| H1 — Unified dashboard reduces cognitive load | **Validated** | SUS 82; 4/5 participants praised unified view |
| H2 — Role-tailored onboarding increases confidence | **Partially validated** | Concept well received; prototype scope limited to widget only |
| H3 — Source transparency builds AI trust | **Validated** | 4.4/5 trust rating; 5/5 source identification |
| H4 — Knowledge Hub cuts search time | **Validated** | 67 sec avg vs. 5–30 min reported in interviews |
| H5 — Clear navigation reduces overwhelm | **Partially validated** | SUS 82 but "Directory" label caused one failure |

---

## 6. Recommendations for HiveMind MVP

1. **Rename "Directory" to "Team Contacts"** — immediate low-effort fix with high usability impact
2. **Increase visual weight of document version metadata** — add a coloured badge or bold the "Last updated" field
3. **AI answer expandability** — add a "See full source document" CTA below AI responses
4. **Onboarding widget on dashboard** — rename "My Progress" to "Onboarding Checklist" and show percentage completion
5. **Contradiction resolution in multi-tool environments** — consider a "Source of Truth" badge on verified documents to reduce the multi-version confusion described by T3 and T5
6. **AI policy-expiry signals** — surface document review dates alongside AI answers for compliance-heavy sectors

---

## 7. What We Would Test Next

If the project continued, the next validation round would:
- Test with 10+ participants for statistical confidence
- Include a mobile session (participants described using Teams/Slack on mobile daily)
- Run a longitudinal test — does the platform reduce tool-switching over a full week?
- Test the full onboarding flow (currently out of scope for Group 3 but validated as high-need)
