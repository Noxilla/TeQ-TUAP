# TUAP — Mobbin Research Summary

## Research Goal
Find proven web UI patterns for a frontend-only TUAP website built from the Notion workspace:
landing page, application flow, onboarding checklist, How It Works, About, Growth & Recognition
(points / ranks / leaderboard), Resources Hub, Events & Campaigns, Contact & Support.

## Searches Used (platform: web)
1. Screens — landing hero for student/learning programme with headline, two CTAs, photos
2. Screens — grid of coloured category cards (icon, title, description, topics)
3. Screens — membership tiers with progress bar, points per level, perks
4. Screens — leaderboard with avatars, school, rank badge, top-3 highlight
5. Flows — multi-step application form → review → submitted confirmation
6. Screens — onboarding checklist grouped in phases with progress
7. Screens — resource library with category filters and downloadable file cards
8. Screens — upcoming events list with filters, date block, status tag
9. Screens — contact/support page with channel cards + FAQ accordion

---

## Pattern Clusters

### 1. Landing hero: "career promise + two doors"
- [Brilliant](https://mobbin.com/screens/f8ff59f5-d476-48ce-9082-06c843aaa39c) — huge headline ("Learn by doing"), two audience CTAs, subject strip underneath.
- [SuperHi](https://mobbin.com/screens/49cf5c96-52d1-4330-916a-aaff99566662) — "Curate your own creative career" + learner count in subhead + two pill CTAs. Closest tone to TUAP.
- [SchoolAI](https://mobbin.com/screens/2f316cb2-3af1-46c5-b1ac-3bacdae1999b) — left-aligned headline, image mosaic right, trust badges under CTAs.
- [ClassDojo](https://mobbin.com/screens/08e50895-bb63-41a2-914c-e642135347da) — "Get started as a…" role cards + tilted photo strip of real people.

**Why it works:** one bold promise, a primary action (Apply) and a secondary low-commitment action (Learn how it works). Real faces build belonging.

### 2. Department cards: tinted, scannable, selectable
- [Adobe Express](https://mobbin.com/screens/5dc7e7f1-d718-4a46-a83a-3883af873357) — pastel-tinted cards, illustration, title, one-line description, meta.
- [Headspace](https://mobbin.com/screens/a9203c34-f2bc-4025-8a5b-3576d794d5aa) — saturated colour tiles; colour alone differentiates categories.
- [Remote](https://mobbin.com/screens/ef218449-3b89-4c72-8946-fa26f10472fb) — selectable icon cards with checkbox and "Top interest" tag (ideal for department choice inside the application).

**Why it works:** each of TUAP's 6 departments already has its own colour in Notion (pink, blue, orange, green, red, purple) — tinted cards keep that identity while the topic list stays behind an expand / detail view.

### 3. Rank progression: segmented tier bar + "what's next"
- [lululemon](https://mobbin.com/screens/5eaeb751-d5db-48b1-9452-bd3bdcd4b881) — 3-segment bar (Collective → Plus → Pinnacle), "X away from unlocking".
- [Urban Outfitters](https://mobbin.com/screens/4c9be39a-a82e-4bfd-9964-9292e8664ca4) — thresholds printed on the bar (300 / 600 pts).
- [Klook](https://mobbin.com/screens/6b7c72cb-8401-4117-9e99-0f02da4024f6) — "How to level up" tinted cards per level.
- [Kiwi.com](https://mobbin.com/screens/103e587e-5b47-48dc-a62c-16b817bf0d3c) — perks-per-tier comparison with check columns.
- [Circle](https://mobbin.com/screens/cd5daccd-6265-486c-be44-b4c182c6c4f0) — level grid with locks + points; 7d / 30d / All-time filter.
- [Tripadvisor](https://mobbin.com/screens/b8cf2592-4c97-42ea-81f6-c5a1d521fb2b) — locked badge circles with "0/5" progress.

**Why it works:** users need the next goal, not just the current state. The "distance to next rank" line is the motivator.

### 4. Leaderboard: medals, "you" row, promotion line
- [Duolingo](https://mobbin.com/screens/c60e1207-648b-491d-8eb8-4b626fb22c17) — gold/silver/bronze top 3, highlighted current-user row, "Top 15 advance".
- [Uxcel](https://mobbin.com/screens/154735d4-72e4-410c-b748-9225f4c752ac) — "Promotion Zone" divider inside the list.
- [Peerlist](https://mobbin.com/screens/7345ce03-b10b-41f5-87fb-ae4b0a766874) — monthly spotlight with #1–#3 medals.

**For TUAP:** Promotion-zone dividers at 30 pts (TeQstar) and 90 pts (TeQGrandstar); filters for month and institution (Unilag / Unilorin, from the Notion tracker).

### 5. Application: stepper + one topic per step + celebratory end
- [Deputy](https://mobbin.com/flows/39b243dd-d98c-4a7b-aa0a-53598cee249f) — left step rail with icons, friendly headings ("Hey there, what should we call you? 👋"), Back/Next, "All submitted" confetti.
- [7shifts](https://mobbin.com/flows/0254fd4e-48a3-4a1f-8ecc-d74903b2dde1) — top progress bar, centred question, "You're all done!" with illustration.
- [Gusto](https://mobbin.com/flows/4c148fb2-f611-4b54-bc2d-4eebdb50dc58) — "Step 1 of 5" with dense grouped fields.

**Why it works:** chunking reduces drop-off; friendly copy suits a student audience; the confirmation screen tells them what happens next.

### 6. Onboarding checklist: phases, counts, points per task, sequential unlock
- [Langdock](https://mobbin.com/screens/79f9a652-a8b4-4e7a-afcc-f9a22153b2de) — points ring (105/595), sections with "0/6", "+20" points per task. **Best fit for TUAP.**
- [Graphite](https://mobbin.com/screens/d5e25ee0-a30a-4bbe-bc78-e2fb213e811d) — numbered steps, future steps dimmed until the current one is done (matches Notion's "Don't skip or jump a step").
- [Vanta](https://mobbin.com/screens/d6c8a960-3253-4ca4-b4aa-06e902fa0e4e) — collapsible phases with "4 of 4 complete".
- [HoneyBook](https://mobbin.com/screens/7c915d6b-2a99-4eb0-956d-e7a3a97bb265) — time estimates per step ("2 mins").
- [Pipedrive](https://mobbin.com/screens/e7f636d0-1d6f-4a07-a5fa-9baaffea7734) — completion banner once done.

### 7. Resources Hub: category filter + file-type cards
- [HoneyBook templates](https://mobbin.com/screens/6a7d2011-d1bc-4e81-aecb-42bf77c4d34a) — filter chips, grid/list toggle, sort.
- [Behance assets](https://mobbin.com/screens/f83d8866-d925-4113-a82e-68c33e74b890) — sidebar filters by category + file extension.
- [Langdock library](https://mobbin.com/screens/e119f9d2-249b-4a16-9ac3-7ac533b2f676) — file-type icon (PDF, Word, PPT) on each card.

### 8. Events: timeline list with status + format
- [Luma](https://mobbin.com/screens/01732b58-0dc7-4c31-9965-6002f42611fa) — date column on the left, card with thumbnail right, LIVE / Going tags, Upcoming/Past toggle.
- [Codecademy community events](https://mobbin.com/screens/66bd70b2-6912-48a9-8c19-37ca0f00b8df) — Upcoming / Your events / Past tabs + dropdown filters + compact cards.
- [Eventbrite](https://mobbin.com/screens/113ebf56-4e5d-431c-aa94-df25137bbde6) — urgency chips ("Going fast", "Almost full").
- [Nextdoor](https://mobbin.com/screens/3d683c37-08d4-41b2-bb44-86342b04b12d) — date block overlaid on image.

**For TUAP:** map Notion's Status (Registration open / Planning / Done), Format (In person / Virtual) and Category directly to chips and filters.

### 9. Contact & Support: channel cards + FAQ
- [Base44](https://mobbin.com/screens/ca48e5b6-af35-4479-b931-1b498fac9f73) — three coloured channel cards with "Get started →".
- [Etsy](https://mobbin.com/screens/bbabe8d9-8849-4762-8158-4cf6528a1aa2) / [HBO Max](https://mobbin.com/screens/828499b3-12e0-480d-818c-37af8b00ace8) — FAQ accordion + "Still have questions?" link.

---

## Recommendations
1. **Hero:** "Build the Career Behind Your Passion." + Apply (primary) + How it works (secondary); photo mosaic of students; a Learn · Build · Earn strip under the CTAs (Brilliant-style subject strip).
2. **Departments:** 6 tinted cards in Notion colours; click opens a detail sheet with "You'll explore" + "Build". Reuse the same cards as selectable options in the application.
3. **Rank ladder:** 3-segment bar with thresholds 0 / 30 / 90, perks per rank, "X pts to TeQstar" demo state.
4. **Points:** "Ways to earn" table as cards with point chips; leaderboard with medals, promotion-zone dividers and month/institution filters (demo data).
5. **Application:** 5 steps — About you → School → Department → Motivation → Review → Submitted screen with what-happens-next.
6. **Onboarding:** 6 phases, sequential unlock, per-phase counts, overall progress ring, state kept in localStorage; congratulations banner at the end ("Active TeQster").
7. **Resources:** 5 categories as filter chips, cards with file-type tag; "members only" note from Notion.
8. **Events:** Upcoming/Past tabs, filters for category and format, status chips.
9. **Contact:** WhatsApp / Telegram / Social cards + FAQ accordion (Contact page in Notion is currently empty — content to be written).

## Content issues found in Notion (to confirm before build)
- **Scoring contradiction:** Growth & Recognition says "The more you show up and recruit, the faster you rise" and rank thresholds require 10+ / 20+ referrals, while How It Works and About say progression is "not based on recruitment alone" and "We reward value, not noise."
- **Squads vs departments:** the Task Tracker and Resources Hub use old squads (Comm. / Prep / Hybrid, "Test Prep Mentors"); the rest of the site uses the 6 departments.
- **Contact & Support page is empty** (only a cover image).
- Stray text at the bottom of Growth & Recognition ("I want to go ho") and a typo in Onboarding ("officiatlly").
