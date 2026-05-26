# Arkode Labs Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand the full website and admin dashboard to Arkode Labs using the supplied company profile and logo.

**Architecture:** Keep the existing React/Vite/Tailwind structure. Update centralized content first, then shared styling/layout components, then page-level copy and admin styling. Preserve the localStorage admin CMS behavior.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, Vitest, Testing Library.

---

### Task 1: Brand Content And Asset

**Files:**
- Modify: `src/content/site.ts`
- Create: `public/arkode-labs-logo.png`
- Test: `src/test/App.test.tsx`

- [ ] Copy the supplied logo image into `public/arkode-labs-logo.png`.
- [ ] Replace `NusaCode Studio` content with Arkode Labs name, tagline, service names, process, pricing, and blog topics from the company profile.
- [ ] Update tests that assert old brand copy so they expect Arkode Labs.
- [ ] Run `npm test`.

### Task 2: Shared Theme And Layout

**Files:**
- Modify: `src/styles.css`
- Modify: `tailwind.config.js`
- Modify: `src/components/Layout.tsx`
- Modify: `src/components/CTA.tsx`
- Modify: `src/components/Cards.tsx`
- Modify: `src/components/Section.tsx`

- [ ] Add Arkode Labs color tokens and global soft-blue background.
- [ ] Update header, footer, buttons, cards, and section treatments to use navy, electric blue, cyan, and soft blue.
- [ ] Add the logo asset and `CODE. BUILD. SOLVE.` brand cue in layout surfaces.
- [ ] Keep all navigation and admin links intact.
- [ ] Run `npm test`.

### Task 3: Public Pages And Admin

**Files:**
- Modify: `src/pages/Home.tsx`
- Modify: `src/pages/Services.tsx`
- Modify: `src/pages/Pricing.tsx`
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/Contact.tsx`
- Modify: `src/pages/CaseStudies.tsx`
- Modify: `src/pages/Blog.tsx`
- Modify: `src/pages/Admin.tsx`
- Modify: `src/pages/Legal.tsx`

- [ ] Update page headings and supporting copy to Arkode Labs.
- [ ] Rework hero and admin dashboard visuals so both feel like one brand system.
- [ ] Preserve form labels, localStorage content creation, edit, and delete flows.
- [ ] Run `npm test` and `npm run build`.
- [ ] Start the Vite dev server and verify `/` and `/admin` in the browser.
