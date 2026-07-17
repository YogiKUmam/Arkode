# Remove Source Code Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove all public source-code links from Arkode Labs case studies and stop including repository URLs in the frontend content bundle.

**Architecture:** Delete `repoUrl` fields from bilingual static case-study content, remove the Case Studies source-code button renderer, and update route tests so the expected UI only checks case-study content and live demos.

**Tech Stack:** React, TypeScript, Vite, Vitest.

---

### Task 1: Remove Repository URLs From Static Content

**Files:**
- Modify: `src/content/site.ts`

- [x] Remove every `repoUrl` property from `caseStudies`.
- [x] Remove every `repoUrl` property from `englishCaseStudies`.
- [x] Remove unused `sourceCode` labels from `pageCopy.common` in both languages.

### Task 2: Remove Source Code Button UI

**Files:**
- Modify: `src/pages/CaseStudies.tsx`

- [x] Remove `Github` import.
- [x] Delete `SourceCodeButton`.
- [x] Delete `repoUrl` reads and all `<SourceCodeButton />` rendering.
- [x] Keep `Live Demo` buttons unchanged.

### Task 3: Verification

**Files:**
- Modify: `src/test/App.test.tsx`

- [x] Replace Source Code count assertion with Live Demo count assertion.
- [x] Run `npm test`.
- [x] Run `npm run build`.
