# Bilingual Language Toggle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an English-default language toggle that switches the public Arkode Labs website between English and Indonesian.

**Architecture:** Add a small React language context that stores `en` or `id` in localStorage. Move public website copy into a localized content module and update active public pages to read from `useContent()` and `useLanguage()`.

**Tech Stack:** React 18, TypeScript, React Router, Tailwind CSS, Vite, Vitest.

---

### Task 1: Language State

**Files:**
- Create: `src/content/LanguageContext.tsx`
- Modify: `src/main.tsx`

- [x] Add `LanguageProvider`, `useLanguage`, and `LanguageToggle`.
- [x] Default to English when localStorage has no value.
- [x] Persist user selection in localStorage.
- [x] Wrap `<App />` with `<LanguageProvider>`.

### Task 2: Localized Content

**Files:**
- Replace: `src/content/site.ts`

- [x] Convert existing Indonesian content into `localizedContent.id`.
- [x] Add English equivalents as `localizedContent.en`.
- [x] Export `useContent()` for React components.
- [x] Keep compatibility exports for tests or non-react utilities where needed.

### Task 3: Public Layout And Components

**Files:**
- Modify: `src/components/Layout.tsx`
- Modify: `src/components/CTA.tsx`

- [x] Use localized `site` and `navItems`.
- [x] Add EN/ID toggle in desktop and mobile nav.
- [x] Translate CTA and footer helper text.

### Task 4: Public Pages

**Files:**
- Modify: `src/pages/Home.tsx`
- Modify: `src/pages/Services.tsx`
- Modify: `src/pages/CaseStudies.tsx`
- Modify: `src/pages/Pricing.tsx`
- Modify: `src/pages/Blog.tsx`
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/Contact.tsx`
- Modify: `src/pages/Estimator.tsx`
- Modify: `src/pages/Legal.tsx`
- Modify: `src/pages/CaseStudyDemo.tsx`

- [x] Replace imported static content with `useContent()`.
- [x] Replace hardcoded public UI copy with localized page dictionaries.
- [x] Preserve existing routes, styling, and disabled admin behavior.

### Task 5: Verification

**Files:**
- Modify: `src/test/App.test.tsx` if English defaults change text expectations.

- [x] Run `npm test`.
- [x] Run `npm run build`.
- [x] Verify production route after deployment.
