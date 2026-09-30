# TUAP website

Frontend for the TeQ University Ambassador Programme (TUAP), built from the TUAP Notion workspace.
Next.js 16 (App Router) + Tailwind CSS 4. UI patterns are based on the Mobbin research in `../research/mobbin-research.md`.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

| Route | Content |
| --- | --- |
| `/` | Landing page: hero, Learn/Build/Earn, departments, ranks, benefits |
| `/about` | Who we are, vision, mission, values, TeQ connection |
| `/how-it-works` | Pillars, departments, growth journey, expectations, ecosystem |
| `/growth` | Points table, rank progression, points estimator, leaderboard |
| `/onboarding` | Phase-by-phase checklist (progress saved in the browser) |
| `/apply` | 5-step application form |
| `/resources` | Resources Hub with category filters |
| `/events` | Upcoming / past events with format filter |
| `/contact` | Official channels |

## Editing content

All copy and data live in **`src/data/tuap.ts`** — departments, ranks and thresholds, point values,
onboarding tasks, resources, events, and social links. Change it there; pages update automatically.

## Frontend-only notes

- **Applications are not sent anywhere yet.** The form validates, shows a confirmation, and clears its draft.
  To receive applications, connect `next()` in `src/components/application-form.tsx` to a form service or API route.
- **Onboarding progress and application drafts** are stored in the visitor's browser (localStorage).
- **The leaderboard uses sample data** (`sampleLeaderboard` in `src/data/tuap.ts`), clearly labelled on the page.
- **Resources** are listed but not downloadable — files are shared with ambassadors during onboarding.
