# KosanQ Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add KosanQ as a bilingual Arkode Labs case study with live demo URL and supporting preview image.

**Architecture:** Follow the existing static portfolio pattern in `src/content/site.ts`: add one Indonesian item to `caseStudies` and one English item to `englishCaseStudies`. Store the supporting visual in `public/case-studies/kosanq.png` and point `imageUrl` at it.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, Vitest.

---

### Task 1: Capture Preview Image

**Files:**
- Create: `public/case-studies/kosanq.png`

- [x] Use a browser screenshot of `https://apps-kosanq.vercel.app/` if reachable.
- [x] Save the result as `public/case-studies/kosanq.png`.
- [x] If screenshot capture is unavailable, create a simple dashboard-style PNG that fits existing case study cards.

### Task 2: Add Bilingual Case Study Content

**Files:**
- Modify: `src/content/site.ts`

- [x] Add KosanQ to Indonesian `caseStudies` with slug `kosanq`, live demo `https://apps-kosanq.vercel.app/`, image `/case-studies/kosanq.png`, dashboard visual type, and a concise property-management description.
- [x] Add matching English content to `englishCaseStudies`.
- [x] Keep `repoUrl` omitted because no repository URL was provided.

### Task 3: Verification

**Files:**
- Test: `src/test/App.test.tsx`

- [x] Run `npm test`; expected: all tests pass.
- [x] Run `npm run build`; expected: TypeScript and Vite production build pass.
- [x] Check `git status --short` before committing.
