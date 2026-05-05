# Tech — HiveMind Group 3 (Christoph Dashboard)

This folder contains the optional React + Carbon Design System stretch implementation for the Christoph Dashboard.

## What is Built

Two Carbon-based components and a minimal Vite/React shell:

| Component | File | Description |
|---|---|---|
| `AIDashboardTile` | `src/components/AIDashboardTile.jsx` | Dashboard tile showing an AI insight with source attribution, confidence badge, and CTA |
| `AIAssistantInput` | `src/components/AIAssistantInput.jsx` | Full AI query input with sensitive-topic detection, character count, and privacy note |
| App shell | `src/App.jsx` | Three-view shell (Dashboard / Knowledge Hub / AI Assistant) showing components in context |

Both components use **IBM Carbon Design System** (`@carbon/react`) and are styled with scoped SCSS using Carbon design tokens.

## Setup Instructions

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install dependencies

```bash
cd Tech
npm install
```

### Run the React app

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. You will see the Christoph Dashboard shell with:
- **Dashboard view** — AI insight tile + Team Contacts + Onboarding Checklist sidebar
- **AI Assistant view** — full query input, submit a question to see the tile response
- **Knowledge Hub view** — placeholder (connect to a CMS API in production)

### Run Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to browse component stories:

| Story | Path |
|---|---|
| `AIDashboardTile / Default` | High-confidence AI answer with source attribution |
| `AIDashboardTile / Medium Confidence` | Yellow warning badge |
| `AIDashboardTile / Low Confidence` | Red badge with "verify with manager" message |
| `AIDashboardTile / Loading` | InlineLoading state |
| `AIAssistantInput / Default` | Empty state |
| `AIAssistantInput / Disabled` | Disabled during AI generation |
| `AIAssistantInput / Sensitive query warning` | Type "salary" to trigger warning |

### Build for production

```bash
npm run build
```

Output goes to `Tech/dist/`.

## Design Decisions

- **Carbon Design System** — chosen per the student handbook specification; provides accessible, enterprise-grade components appropriate for a workplace tool
- **Source transparency** — every AI response surfaces document name, version, and last-updated date directly in the UI (addresses the #1 trust barrier from user interviews)
- **Sensitive topic detection** — keyword matching triggers a contextual `InlineNotification` advising the user to speak with HR/management (addresses the privacy concern raised in 4 of 6 interviews)
- **SCSS tokens** — all spacing, colour, and typography uses Carbon's CSS custom properties (`--cds-*`) so the UI will auto-adapt when the Carbon theme changes

## Figma Prototype Link

The interactive Figma prototype covers all three task flows end-to-end and is the primary artefact used in Week 4 usability testing:

[https://www.figma.com/design/3vk6xmimlwcnfTfcLTmXaf/Untitled?node-id=0-1&t=U4JML9oAz8AxmDmi-1](https://www.figma.com/design/3vk6xmimlwcnfTfcLTmXaf/Untitled?node-id=0-1&t=U4JML9oAz8AxmDmi-1)
