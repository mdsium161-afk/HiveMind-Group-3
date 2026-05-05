# Decisions & Scope Log — Group 3 (Christoph Dashboard)

A running record of key decisions, scope changes, and rationale throughout the 4-week sprint.

---

## Decision 1 — Focus Area Confirmed: Christoph Dashboard

**Date:** Week 0 (Pre-sprint)
**Decision:** Group 3 confirmed as Area A — "Christoph" Dashboard.
**Rationale:** Group allocation set by Dr Aruna Duraisingam. Dashboard focus aligns with our combined CS and design skills.
**Impact:** All research, design, and testing scoped to the Dashboard feature; Onboarding and AI Assistant included only as supporting features within the dashboard view.

---

## Decision 2 — Interview Audience Extended Beyond Brief

**Date:** Week 1
**Decision:** Accepted interviews with professionals across banking, telecoms, fintech, and civil engineering sectors (not limited to UK-based participants).
**Rationale:** Reaching 6–8 participants within the timeline required accepting international professionals (Nepal-based bank and fintech). Their pain points with scattered information and AI distrust were directly analogous to Christoph's.
**Impact:** Richer variety of sector contexts; findings remain valid as pain points were universal across participants regardless of geography.

---

## Decision 3 — Prototype Scope Trimmed to Three Core Flows

**Date:** Week 2 (mentor session)
**Decision:** Reduced prototype scope to three core task flows:
1. Dashboard home view (unified view of tasks, contacts, knowledge, AI)
2. Knowledge Hub search and document retrieval
3. AI Assistant query with source transparency

**Rationale:** Five flows were originally planned (also included Onboarding checklist and Notifications centre). Mentor feedback indicated these were out of scope for a 4-week sprint and risked diluting quality.
**Impact:** Removed Notifications centre and full Onboarding checklist from prototype; referenced in dashboard as "My Progress" widget only.

---

## Decision 4 — Carbon Design System Adopted

**Date:** Week 2
**Decision:** UI design and React components built on IBM Carbon Design System.
**Rationale:** Specified in the student handbook. Carbon provides an accessible, professionally recognised component library aligned with enterprise software patterns — appropriate for a workplace tool like HiveMind.
**Impact:** Tech stretch task uses `@carbon/react`; Figma designs reference Carbon component patterns for buttons, inputs, tiles, and navigation.

---

## Decision 5 — No Documentation Lead in Group 3

**Date:** Week 1
**Decision:** Documentation Lead role (listed as Rolando Duran Del Carmen in README) is shared across the group due to group composition constraints.
**Rationale:** The official allocation sheet does not include a Documentation Lead for Group 3; the README lists Rolando who is in Group 5. All group members contribute to documentation with Alessio (Project Lead) holding final review responsibility.
**Impact:** Weekly log and evidence pack maintained collaboratively; Alessio reviews before each check-in.

---

## Decision 6 — React Tech Stretch Implemented for AI Assistant Card

**Date:** Week 3
**Decision:** Tech stretch scope limited to AI Assistant input component and Dashboard summary tile.
**Rationale:** Full dashboard React implementation was out of scope. Demonstrating two Carbon components in Storybook proves technical feasibility without over-committing.
**Impact:** `/Tech/src/` contains `AIDashboardTile.jsx`, `AIAssistantInput.jsx`, and Storybook stories.

---

## Decision 7 — Figma Prototype Used as Primary Test Artefact

**Date:** Week 4
**Decision:** Usability testing conducted exclusively with the Figma prototype (not the React slice).
**Rationale:** Figma prototype covers all three task flows end-to-end; React slice covers only 2 components and would not support full task scenarios.
**Impact:** React/Storybook demo shown as a supplementary tech showcase during final presentation only.

---

## Scope Summary

| Feature | In Scope | Rationale |
|---|---|---|
| Dashboard home view | Yes | Core focus area |
| Knowledge Hub search | Yes | Primary pain point in interviews |
| AI Assistant with source transparency | Yes | Critical trust requirement |
| Full onboarding flow | No | Out of scope for Group 3 (Area B) |
| Notifications centre | No | Trimmed in Week 2 mentor session |
| Mobile responsive design | No | Desktop-first for workplace context |
| Authentication / login flow | No | Not part of MVP validation scope |
