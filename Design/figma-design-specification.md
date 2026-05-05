# Figma Design Specification — Group 3 (Christoph Dashboard)

**Figma file:** [Open prototype](https://www.figma.com/design/3vk6xmimlwcnfTfcLTmXaf/Untitled?node-id=0-1&t=U4JML9oAz8AxmDmi-1)

This document describes the design decisions, screen inventory, component system, and interaction flows implemented in the Figma prototype.

---

## 1. Design Principles

The prototype was designed against three core principles derived from user interview insights:

| Principle | Source | Implementation |
|---|---|---|
| **Clarity over completeness** | "Too many tools, I don't know where to start" (T5-P01) | Dashboard shows only 4 top-level sections; no sidebar overload |
| **Trust through transparency** | "I don't know where the AI gets its answer from" (T3-P01) | Every AI response has a source badge, date, and confidence indicator |
| **Guided progression** | "I didn't know what to do next for two weeks" (T2-P01) | Onboarding Checklist widget on dashboard with progress bar |

---

## 2. Design Tokens (Mini Carbon Style System)

All tokens align with the IBM Carbon Design System White theme (`white` / `g10`).

### Colours

| Token | Value | Usage |
|---|---|---|
| Primary Interactive | `#0f62fe` (Carbon Blue 60) | Buttons, active states, AI icon |
| Background | `#f4f4f4` (Carbon Gray 10) | App background |
| Layer 01 | `#ffffff` | Card/tile backgrounds |
| Layer 02 | `#e8e8e8` | Source metadata background, input fields |
| Text Primary | `#161616` | Headings, body text |
| Text Secondary | `#525252` | Subtitles, labels, metadata |
| Border Subtle | `#e0e0e0` | Card borders, dividers |
| Success | `#24a148` (Carbon Green 50) | High-confidence badge |
| Warning | `#f1c21b` (Carbon Yellow 40) | Medium-confidence badge |
| Error | `#da1e28` (Carbon Red 60) | Low-confidence badge |
| AI Accent | `#8a3ffc` (Carbon Purple 60) | AI tile left border |

### Typography

| Style | Size | Weight | Usage |
|---|---|---|---|
| Heading 05 | 28px | 400 | Page titles |
| Heading 03 | 20px | 400 | Section headings |
| Heading 01 | 14px | 600 | Card headings |
| Body 01 | 16px | 400 | Body copy |
| Body Compact 01 | 14px | 400 | Secondary text, descriptions |
| Helper Text 01 | 12px | 400 | Metadata, captions, source dates |
| Label 01 | 12px | 400 | Form labels, tags |

### Spacing (Carbon 8px grid)

`4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px`

---

## 3. Screen Inventory

### Page: UI (High-Fidelity Screens)

| Screen | Description |
|---|---|
| `01-Dashboard-Home` | Unified view: greeting, AI insight tile, task list, team contacts, onboarding checklist |
| `02-Knowledge-Hub-Empty` | Knowledge Hub with search bar, category filters, empty state |
| `03-Knowledge-Hub-Results` | Search results list with document cards (name, version, date, author) |
| `04-Document-Detail` | Full document view with version badge, last-updated, owner, and verified badge |
| `05-AI-Assistant-Empty` | AI input screen, empty state with suggested prompts |
| `06-AI-Assistant-Loading` | AI input screen, loading state (skeleton tiles) |
| `07-AI-Assistant-Response` | AI response with answer, source badge, confidence indicator, "See full document" CTA |
| `08-AI-Assistant-Low-Confidence` | Low-confidence state with warning and "Ask HR instead" CTA |
| `09-Team-Contacts` | People directory with search, contact cards (name, role, email, Teams link) |
| `10-Onboarding-Checklist` | Progress view showing completed and upcoming onboarding milestones |

---

## 4. Navigation Structure (IA)

```
HiveMind Dashboard
├── Dashboard Home          ← Default view
│   ├── AI Insight Tile
│   ├── My Tasks (3 pinned)
│   ├── Team Contacts (3 pinned)
│   └── Onboarding Checklist (progress bar)
├── Knowledge Hub
│   ├── Search
│   ├── Browse by Category
│   │   ├── Policies & Compliance
│   │   ├── Processes & How-to
│   │   ├── Team & Contacts
│   │   └── Tools & Systems
│   └── Document Detail View
├── AI Assistant
│   ├── Query Input
│   └── Response View
│       ├── Answer text
│       ├── Source attribution
│       ├── Confidence badge
│       └── "See full document" CTA
└── My Profile / Settings  (out of scope for prototype)
```

---

## 5. Key Component Specifications

### AI Insight Tile (Dashboard)

```
┌─────────────────────────────────────────────────────┐
│  [AI icon]  AI Assistant          [High confidence] │
│─────────────────────────────────────────────────────│
│  "What is the expense limit for client meals?"      │
│                                                     │
│  The limit is £50 per person per meal...            │
│                                                     │
│  Based on: Finance & Expenses Policy v2.3           │
│  · Last updated 14 Feb 2026                         │
│                                                     │
│  [View full answer & source →]                      │
└─────────────────────────────────────────────────────┘

Left border: 3px solid #8a3ffc (AI purple)
Background: White (Layer 01)
Confidence badge: Green Tag (Carbon)
Source row: Gray 10 background, Helper Text 01
```

### Document Card (Knowledge Hub)

```
┌─────────────────────────────────────────────────────┐
│  📄  Finance & Expenses Policy          [v2.3]      │
│      Last updated 14 Feb 2026 · Finance team        │
│      [✓ Verified source]                            │
└─────────────────────────────────────────────────────┘

Version badge: Carbon Tag (Blue)
Verified badge: Carbon Tag (Green) — shows only on latest version
Card: Tile component, hover state lifts shadow
```

### AI Response Screen

```
┌─────────────────────────────────────────────────────┐
│  [AI icon]  AI Assistant                            │
│  Answers come from your Knowledge Hub               │
│─────────────────────────────────────────────────────│
│  Your question:                                     │
│  "What is the expense limit for client meals?"      │
│                                                     │
│  Answer:                                            │
│  The limit is £50 per person per meal...            │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │  📄 Finance & Expenses Policy v2.3           │  │
│  │     Last updated 14 Feb 2026                 │  │
│  │     [HIGH CONFIDENCE]  [Open document →]     │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
│  Was this helpful?  [👍 Yes]  [👎 No, ask a person]│
└─────────────────────────────────────────────────────┘
```

---

## 6. Prototype Interactions (Figma — Prototype page)

### Flow 1 — Find Key Document (Task 1)
1. `01-Dashboard-Home` → click "Knowledge Hub" in left nav → `02-Knowledge-Hub-Empty`
2. Type "compliance" in search → `03-Knowledge-Hub-Results`
3. Click document card → `04-Document-Detail`
4. User reads version badge and "Last updated" → task complete

### Flow 2 — Find Team Contact (Task 2)
1. `01-Dashboard-Home` → scroll to "Team Contacts" widget
2. Click "View all contacts" → `09-Team-Contacts`
3. User finds IT Support contact card → task complete
4. (Alternative path: click "Team Contacts" in left nav directly)

### Flow 3 — AI Assistant Query (Task 3)
1. `01-Dashboard-Home` → click "AI Assistant" in left nav → `05-AI-Assistant-Empty`
2. Type question → submit → `06-AI-Assistant-Loading` (1s delay)
3. `07-AI-Assistant-Response` — user reads answer + source badge
4. Click "Open document →" → `04-Document-Detail` (source document)
5. Post-task: "Would you trust this?" → verbal response

---

## 7. Accessibility Notes

- All interactive elements meet Carbon's 44×44px minimum touch target
- Colour contrast: all text passes WCAG AA (4.5:1 for body, 3:1 for large text)
- Confidence badges use both colour AND text label (not colour alone)
- All icons are accompanied by text labels or aria-labels
- Tab order follows reading order (left-to-right, top-to-bottom)

---

## 8. What Was Not Prototyped

- Login / authentication screen
- Notifications centre
- Full onboarding flow (Area B scope)
- Settings / profile
- Mobile responsive layouts
