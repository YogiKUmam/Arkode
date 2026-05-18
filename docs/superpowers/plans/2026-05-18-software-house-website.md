# Software House Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, responsive, SEO-conscious software house website with services, case studies, pricing, blog, contact, privacy, and terms pages.

**Architecture:** Use a React + Vite single-page frontend with route-based pages, local structured content data, reusable UI components, and static deployment readiness. Keep business content separate from layout components so it can later migrate to a CMS.

**Tech Stack:** React, Vite, TypeScript, Tailwind CSS, React Router, lucide-react, Vitest, Testing Library, Playwright-style browser verification.

---

## File Structure

- Create `package.json`: project scripts and dependencies.
- Create `index.html`: Vite HTML entry and base metadata.
- Create `vite.config.ts`: React/Vitest configuration.
- Create `tsconfig.json`, `tsconfig.node.json`: TypeScript configuration.
- Create `tailwind.config.ts`, `postcss.config.js`: Tailwind setup.
- Create `src/main.tsx`: React entrypoint.
- Create `src/App.tsx`: route layout and page mapping.
- Create `src/styles.css`: Tailwind layers, tokens, global styles, focus states.
- Create `src/content/site.ts`: structured content for navigation, services, cases, pricing, blog, FAQ, team, contact, legal.
- Create `src/components/Layout.tsx`: site shell, navigation, footer, mobile menu.
- Create `src/components/Seo.tsx`: document title and meta description management.
- Create `src/components/Section.tsx`: shared section wrapper.
- Create `src/components/CTA.tsx`: reusable CTA band.
- Create `src/components/Cards.tsx`: reusable service, case, pricing, blog, and FAQ cards.
- Create `src/pages/Home.tsx`: full home page experience.
- Create `src/pages/Services.tsx`: detailed services page.
- Create `src/pages/CaseStudies.tsx`: transparent portfolio/concept project page.
- Create `src/pages/About.tsx`: company story and team page.
- Create `src/pages/Pricing.tsx`: engagement model page.
- Create `src/pages/Blog.tsx`: insights index and article preview page.
- Create `src/pages/Contact.tsx`: accessible contact form and fallback channels.
- Create `src/pages/Legal.tsx`: privacy and terms pages.
- Create `src/test/App.test.tsx`: route smoke tests and key content checks.
- Create `src/test/accessibility.test.tsx`: form label and navigation checks.

## Task 1: Scaffold React + Vite App

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`

- [ ] **Step 1: Create project package file**

Create `package.json`:

```json
{
  "name": "software-house-website",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "tsc -b && vite build",
    "preview": "vite preview --host 127.0.0.1",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@vitejs/plugin-react": "^5.0.0",
    "lucide-react": "^0.468.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@testing-library/user-event": "^14.5.2",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "autoprefixer": "^10.4.20",
    "jsdom": "^25.0.1",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "typescript": "^5.6.3",
    "vite": "^6.0.1",
    "vitest": "^2.1.5"
  }
}
```

- [ ] **Step 2: Create Vite HTML entry**

Create `index.html`:

```html
<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Software house untuk website company profile, custom web app, dan maintenance yang membantu bisnis terlihat kredibel dan siap tumbuh."
    />
    <title>Software House Profesional untuk Website dan Sistem Web</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Create TypeScript and Vite config**

Create `tsconfig.json`:

```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.node.json" }],
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

Create `tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

Create `vite.config.ts`:

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
});
```

- [ ] **Step 4: Install dependencies**

Run:

```bash
npm install
```

Expected: dependencies install successfully and `package-lock.json` is created.

- [ ] **Step 5: Commit scaffold**

Run:

```bash
git add package.json package-lock.json index.html vite.config.ts tsconfig.json tsconfig.node.json
git commit -m "chore: scaffold software house website"
```

Expected: commit succeeds.

## Task 2: Configure Tailwind, Entry Point, and Global Styles

**Files:**
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `src/main.tsx`
- Create: `src/styles.css`
- Create: `src/test/setup.ts`

- [ ] **Step 1: Create Tailwind configuration**

Create `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        paper: '#f8fafc',
        line: '#d8dee9',
        accent: '#0f766e',
        signal: '#b45309',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 18px 50px rgba(17, 24, 39, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
```

Create `postcss.config.js`:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 2: Create global styles**

Create `src/styles.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color: #111827;
  background: #f8fafc;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    linear-gradient(180deg, rgba(15, 118, 110, 0.08), rgba(248, 250, 252, 0) 420px),
    #f8fafc;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

:focus-visible {
  outline: 3px solid #0f766e;
  outline-offset: 3px;
}

.container-shell {
  width: min(1120px, calc(100% - 32px));
  margin-inline: auto;
}
```

- [ ] **Step 3: Create test setup**

Create `src/test/setup.ts`:

```ts
import '@testing-library/jest-dom/vitest';
```

- [ ] **Step 4: Create React entry point**

Create `src/main.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
```

- [ ] **Step 5: Run build to confirm missing App is the only expected blocker**

Run:

```bash
npm run build
```

Expected: FAIL with an error that `./App` cannot be resolved.

- [ ] **Step 6: Commit styling foundation**

Run:

```bash
git add tailwind.config.ts postcss.config.js src/main.tsx src/styles.css src/test/setup.ts
git commit -m "chore: add frontend styling foundation"
```

Expected: commit succeeds.

## Task 3: Add Structured Site Content

**Files:**
- Create: `src/content/site.ts`

- [ ] **Step 1: Create content data**

Create `src/content/site.ts`:

```ts
export const site = {
  name: 'NusaCode Studio',
  email: 'hello@nusacode.studio',
  phone: '+62 812-0000-0000',
  whatsapp: 'https://wa.me/6281200000000?text=Halo%20NusaCode%20Studio%2C%20saya%20ingin%20diskusi%20project.',
  tagline: 'Website dan sistem web yang membuat bisnis lebih kredibel, rapi, dan siap tumbuh.',
};

export const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const services = [
  {
    title: 'Company Profile Website',
    summary: 'Website bisnis yang menjelaskan nilai, layanan, bukti, dan CTA dengan jelas.',
    outcome: 'Brand terlihat kredibel dan calon klien lebih mudah memahami penawaran Anda.',
    deliverables: ['Sitemap', 'Copy structure', 'Responsive UI', 'SEO basics', 'Launch support'],
  },
  {
    title: 'Custom Web App',
    summary: 'Dashboard, portal, admin tool, booking flow, atau sistem internal sesuai proses bisnis.',
    outcome: 'Operasional lebih rapi dan pekerjaan manual bisa dipindahkan ke workflow digital.',
    deliverables: ['Discovery', 'Scope', 'UI flow', 'Frontend/backend build', 'QA', 'Deployment'],
  },
  {
    title: 'Maintenance / Retainer',
    summary: 'Dukungan bulanan untuk update, perbaikan, monitoring, dan peningkatan setelah launch.',
    outcome: 'Aset digital tetap sehat, relevan, dan tidak berhenti berkembang setelah online.',
    deliverables: ['Bug fixes', 'Small improvements', 'Content updates', 'Technical advisory'],
  },
];

export const problems = [
  'Website lama tidak lagi mencerminkan kualitas bisnis yang sebenarnya.',
  'Calon klien harus bertanya berulang kali karena informasi layanan belum jelas.',
  'Proses operasional masih tersebar di spreadsheet, chat, dan pekerjaan manual.',
  'Tim membutuhkan partner teknis yang bisa menjelaskan scope, risiko, dan prioritas dengan jernih.',
];

export const processSteps = [
  { title: 'Discovery', text: 'Kami memahami tujuan bisnis, target pengguna, batasan, dan prioritas.' },
  { title: 'Scope', text: 'Kebutuhan diterjemahkan menjadi ruang lingkup yang realistis dan bisa dieksekusi.' },
  { title: 'Design', text: 'Struktur halaman, flow, dan interface dirancang sebelum masuk build.' },
  { title: 'Build', text: 'Produk dibangun dengan komponen yang rapi, responsive, dan mudah dirawat.' },
  { title: 'QA', text: 'Kami cek fungsi, tampilan mobile, aksesibilitas dasar, dan performa.' },
  { title: 'Launch', text: 'Website atau sistem dipublikasikan dengan checklist teknis yang jelas.' },
  { title: 'Support', text: 'Setelah launch, kami bantu perbaikan, update, dan iterasi berikutnya.' },
];

export const caseStudies = [
  {
    title: 'Business Website Relaunch',
    label: 'Concept Project',
    summary: 'Rancang ulang website profil bisnis agar positioning, layanan, dan CTA lebih jelas.',
    stack: ['React', 'Tailwind', 'SEO basics'],
    timeline: '3 minggu',
    result: 'Struktur penawaran lebih mudah dipahami dan siap digunakan untuk kampanye lead generation.',
  },
  {
    title: 'Internal Operations Dashboard',
    label: 'Sample Engagement',
    summary: 'Prototype dashboard untuk memindahkan tracking pekerjaan dari spreadsheet ke sistem internal.',
    stack: ['React', 'Node-ready API', 'Role-based flow'],
    timeline: '5 minggu',
    result: 'Tim mendapat gambaran workflow digital yang lebih terukur sebelum pembangunan penuh.',
  },
];

export const pricingModels = [
  {
    title: 'Starter Website',
    price: 'Mulai dari discovery ringan',
    fit: 'Untuk company profile sederhana yang perlu cepat terlihat profesional.',
    includes: ['3-5 halaman utama', 'Responsive design', 'SEO dasar', 'Contact CTA'],
  },
  {
    title: 'Business Website',
    price: 'Estimasi setelah scope',
    fit: 'Untuk brand yang butuh halaman layanan, portfolio, blog awal, dan copy yang lebih kuat.',
    includes: ['Sitemap lengkap', 'Landing sections', 'Blog/insights setup', 'Launch checklist'],
  },
  {
    title: 'Custom System',
    price: 'Custom quote',
    fit: 'Untuk dashboard, portal, booking, inventory, atau workflow internal.',
    includes: ['Discovery workshop', 'UI flow', 'Frontend/backend build', 'QA dan deployment'],
  },
  {
    title: 'Monthly Retainer',
    price: 'Bulanan',
    fit: 'Untuk maintenance, update konten, perbaikan bug, dan improvement kecil.',
    includes: ['Support queue', 'Small improvements', 'Monitoring ringan', 'Monthly summary'],
  },
];

export const posts = [
  {
    title: 'Checklist Website Company Profile yang Siap Mendatangkan Leads',
    slug: 'checklist-website-company-profile',
    excerpt: 'Elemen penting agar website bisnis tidak hanya terlihat bagus, tetapi juga membantu proses penjualan.',
  },
  {
    title: 'Kapan Bisnis Perlu Custom Web App, Bukan Spreadsheet Lagi',
    slug: 'kapan-perlu-custom-web-app',
    excerpt: 'Tanda-tanda proses operasional sudah cukup penting untuk dipindahkan ke sistem web yang lebih terstruktur.',
  },
  {
    title: 'Cara Audit Website Bisnis dari Sisi Kredibilitas dan Konversi',
    slug: 'audit-website-bisnis',
    excerpt: 'Kerangka sederhana untuk menilai apakah website sudah menjelaskan nilai, bukti, dan langkah berikutnya.',
  },
];

export const faqs = [
  { question: 'Berapa lama membuat website company profile?', answer: 'Umumnya 2-5 minggu, tergantung jumlah halaman, kesiapan konten, dan kompleksitas desain.' },
  { question: 'Apakah bisa mulai tanpa konten lengkap?', answer: 'Bisa. Kami dapat membantu menyusun struktur copy awal dari informasi bisnis yang tersedia.' },
  { question: 'Apakah source code menjadi milik klien?', answer: 'Ya, kepemilikan source code dan aset final mengikuti proposal atau perjanjian project.' },
  { question: 'Apakah menyediakan maintenance?', answer: 'Ya. Maintenance bisa mencakup update konten, perbaikan bug, improvement kecil, dan advisory teknis.' },
];
```

- [ ] **Step 2: Type-check content**

Run:

```bash
npm run build
```

Expected: still FAIL because `src/App.tsx` does not exist, not because of `src/content/site.ts`.

- [ ] **Step 3: Commit content model**

Run:

```bash
git add src/content/site.ts
git commit -m "feat: add software house site content model"
```

Expected: commit succeeds.

## Task 4: Build Layout, SEO, and Shared Components

**Files:**
- Create: `src/App.tsx`
- Create: `src/components/Layout.tsx`
- Create: `src/components/Seo.tsx`
- Create: `src/components/Section.tsx`
- Create: `src/components/CTA.tsx`
- Create: `src/components/Cards.tsx`

- [ ] **Step 1: Create SEO component**

Create `src/components/Seo.tsx`:

```tsx
import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
};

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.append(meta);
    }
    meta.content = description;
  }, [title, description]);

  return null;
}
```

- [ ] **Step 2: Create section and CTA components**

Create `src/components/Section.tsx`:

```tsx
import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, intro, children, className = '' }: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="container-shell">
        {(eyebrow || title || intro) && (
          <div className="mb-9 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>}
            {intro && <p className="mt-4 text-lg leading-8 text-slate-600">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
```

Create `src/components/CTA.tsx`:

```tsx
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../content/site';

export function CTA() {
  return (
    <section className="bg-ink py-16 text-white">
      <div className="container-shell grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">Mulai dari percakapan yang jelas</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Punya project website atau sistem web?</h2>
          <p className="mt-4 max-w-2xl text-slate-300">Ceritakan kebutuhan Anda. Kami bantu petakan scope, prioritas, timeline, dan langkah pertama yang realistis.</p>
        </div>
        <Link className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-ink hover:bg-teal-50" to="/contact">
          Jadwalkan Konsultasi <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <p className="md:col-span-2 text-sm text-slate-400">Email: {site.email} · Respons biasanya dalam 1 hari kerja.</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create card components**

Create `src/components/Cards.tsx`:

```tsx
import { CheckCircle2 } from 'lucide-react';

export function ServiceCard({ title, summary, outcome, deliverables }: { title: string; summary: string; outcome: string; deliverables: string[] }) {
  return (
    <article className="rounded-lg border border-line bg-white p-6 shadow-panel">
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-slate-600">{summary}</p>
      <p className="mt-4 font-medium text-accent">{outcome}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {deliverables.map((item) => (
          <li className="flex gap-2" key={item}>
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function SimpleCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-lg border border-line bg-white p-6">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}
```

- [ ] **Step 4: Create layout component**

Create `src/components/Layout.tsx`:

```tsx
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { navItems, site } from '../content/site';

export function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="container-shell flex h-16 items-center justify-between gap-4">
          <Link className="font-semibold text-ink" to="/" onClick={() => setOpen(false)}>
            {site.name}
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink className={({ isActive }) => (isActive ? 'text-accent' : 'hover:text-accent')} key={item.href} to={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800 md:inline-flex" to="/contact">
            Minta Estimasi
          </Link>
          <button className="rounded-md p-2 md:hidden" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
            <span className="sr-only">Toggle navigation</span>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        {open && (
          <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
            <nav className="container-shell grid gap-2 py-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink className="rounded-md px-3 py-2 font-medium text-slate-700 hover:bg-white" key={item.href} to={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-line bg-white py-10">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          <div>
            <p className="font-semibold text-ink">{site.name}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{site.tagline}</p>
          </div>
          <div className="text-sm text-slate-600">
            <p>Email: {site.email}</p>
            <p>WhatsApp: {site.phone}</p>
          </div>
          <div className="flex gap-4 text-sm font-medium text-slate-700 md:justify-end">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
```

- [ ] **Step 5: Create route shell with temporary pages**

Create `src/App.tsx`:

```tsx
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

function ScaffoldPage({ title }: { title: string }) {
  return (
    <div className="container-shell py-20">
      <h1 className="text-4xl font-semibold text-ink">{title}</h1>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ScaffoldPage title="Home" />} />
        <Route path="/services" element={<ScaffoldPage title="Services" />} />
        <Route path="/case-studies" element={<ScaffoldPage title="Case Studies" />} />
        <Route path="/about" element={<ScaffoldPage title="About" />} />
        <Route path="/pricing" element={<ScaffoldPage title="Pricing" />} />
        <Route path="/blog" element={<ScaffoldPage title="Blog" />} />
        <Route path="/contact" element={<ScaffoldPage title="Contact" />} />
        <Route path="/privacy" element={<ScaffoldPage title="Privacy Policy" />} />
        <Route path="/terms" element={<ScaffoldPage title="Terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
```

- [ ] **Step 6: Run build**

Run:

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 7: Commit shared app shell**

Run:

```bash
git add src/App.tsx src/components/Seo.tsx src/components/Section.tsx src/components/CTA.tsx src/components/Cards.tsx src/components/Layout.tsx
git commit -m "feat: add website app shell"
```

Expected: commit succeeds.

## Task 5: Implement Home Page

**Files:**
- Create: `src/pages/Home.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create Home page**

Create `src/pages/Home.tsx`:

```tsx
import { ArrowRight, Code2, Layers3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTA } from '../components/CTA';
import { ServiceCard, SimpleCard } from '../components/Cards';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { caseStudies, faqs, problems, processSteps, services, site } from '../content/site';

export function Home() {
  return (
    <>
      <Seo title="NusaCode Studio | Software House Website dan Sistem Web" description="Software house untuk company profile website, custom web app, dan maintenance yang membantu bisnis terlihat kredibel dan siap tumbuh." />
      <section className="py-16 sm:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Software house untuk bisnis yang siap rapi</p>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Kami membangun website dan sistem web yang membuat bisnis terlihat kredibel.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Dari company profile website sampai web app internal, kami merancang, membangun, dan mengoptimalkan aset digital yang siap dipakai untuk tumbuh.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white hover:bg-teal-800" to="/contact">
                Jadwalkan Konsultasi <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="inline-flex items-center justify-center rounded-md border border-line bg-white px-5 py-3 font-semibold text-ink hover:border-accent" to="/services">
                Lihat Layanan
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-white p-6 shadow-panel">
            <div className="grid gap-4">
              {[
                { icon: Code2, title: 'Frontend modern', text: 'React-ready, responsive, cepat, dan mudah dikembangkan.' },
                { icon: Layers3, title: 'Scope jelas', text: 'Discovery, prioritas, timeline, dan deliverable dibuat transparan.' },
                { icon: ShieldCheck, title: 'Launch rapi', text: 'SEO dasar, aksesibilitas, QA mobile, dan support setelah online.' },
              ].map((item) => (
                <div className="flex gap-4 rounded-md bg-paper p-4" key={item.title}>
                  <item.icon className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <h2 className="font-semibold text-ink">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Section eyebrow="Masalah yang kami selesaikan" title="Website dan sistem yang bekerja untuk bisnis, bukan hanya terlihat online.">
        <div className="grid gap-4 md:grid-cols-2">
          {problems.map((problem) => <SimpleCard key={problem} title={problem} text="Kami bantu menerjemahkan masalah ini menjadi struktur halaman, flow, dan sistem yang bisa digunakan." />)}
        </div>
      </Section>
      <Section eyebrow="Layanan utama" title="Tiga cara kami membantu bisnis Anda tumbuh." intro="Mulai dari profil bisnis yang kredibel sampai sistem web yang merapikan operasional.">
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </Section>
      <Section eyebrow="Case studies" title="Bukti awal yang jujur dan mudah dipahami.">
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((item) => (
            <article className="rounded-lg border border-line bg-white p-6" key={item.title}>
              <p className="text-sm font-semibold text-signal">{item.label}</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.summary}</p>
              <p className="mt-4 text-sm text-slate-500">Timeline: {item.timeline}</p>
              <p className="mt-2 font-medium text-accent">{item.result}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Proses" title="Dari ide sampai launch dengan ritme yang jelas.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => <SimpleCard key={step.title} title={`${index + 1}. ${step.title}`} text={step.text} />)}
        </div>
      </Section>
      <Section eyebrow="FAQ" title="Pertanyaan yang sering muncul sebelum mulai project.">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => <SimpleCard key={faq.question} title={faq.question} text={faq.answer} />)}
        </div>
      </Section>
      <CTA />
    </>
  );
}
```

- [ ] **Step 2: Wire Home route**

Modify `src/App.tsx`:

```tsx
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

function ScaffoldPage({ title }: { title: string }) {
  return (
    <div className="container-shell py-20">
      <h1 className="text-4xl font-semibold text-ink">{title}</h1>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<ScaffoldPage title="Services" />} />
        <Route path="/case-studies" element={<ScaffoldPage title="Case Studies" />} />
        <Route path="/about" element={<ScaffoldPage title="About" />} />
        <Route path="/pricing" element={<ScaffoldPage title="Pricing" />} />
        <Route path="/blog" element={<ScaffoldPage title="Blog" />} />
        <Route path="/contact" element={<ScaffoldPage title="Contact" />} />
        <Route path="/privacy" element={<ScaffoldPage title="Privacy Policy" />} />
        <Route path="/terms" element={<ScaffoldPage title="Terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
```

- [ ] **Step 3: Run build**

Run:

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 4: Commit Home page**

Run:

```bash
git add src/App.tsx src/pages/Home.tsx
git commit -m "feat: build software house home page"
```

Expected: commit succeeds.

## Task 6: Implement Core Pages

**Files:**
- Create: `src/pages/Services.tsx`
- Create: `src/pages/CaseStudies.tsx`
- Create: `src/pages/About.tsx`
- Create: `src/pages/Pricing.tsx`
- Create: `src/pages/Blog.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create Services page**

Create `src/pages/Services.tsx` with:

```tsx
import { CTA } from '../components/CTA';
import { ServiceCard } from '../components/Cards';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { services } from '../content/site';

export function Services() {
  return (
    <>
      <Seo title="Services | NusaCode Studio" description="Layanan company profile website, custom web app, dan maintenance untuk bisnis yang butuh aset digital kredibel." />
      <Section eyebrow="Services" title="Layanan yang jelas dari scope sampai support." intro="Setiap layanan dirancang agar calon klien memahami outcome, deliverable, dan langkah berikutnya.">
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </Section>
      <CTA />
    </>
  );
}
```

- [ ] **Step 2: Create Case Studies page**

Create `src/pages/CaseStudies.tsx` with:

```tsx
import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { caseStudies } from '../content/site';

export function CaseStudies() {
  return (
    <>
      <Seo title="Case Studies | NusaCode Studio" description="Portfolio dan concept project yang menunjukkan cara NusaCode Studio memecahkan masalah bisnis dengan website dan sistem web." />
      <Section eyebrow="Case Studies" title="Portfolio awal yang transparan." intro="Saat project nyata belum bisa ditampilkan, concept project diberi label jelas agar bukti tetap jujur.">
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((item) => (
            <article className="rounded-lg border border-line bg-white p-6 shadow-panel" key={item.title}>
              <p className="text-sm font-semibold text-signal">{item.label}</p>
              <h1 className="mt-3 text-2xl font-semibold text-ink">{item.title}</h1>
              <p className="mt-3 leading-7 text-slate-600">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => <span className="rounded-md bg-paper px-3 py-1 text-sm text-slate-700" key={tech}>{tech}</span>)}
              </div>
              <p className="mt-5 text-sm text-slate-500">Timeline: {item.timeline}</p>
              <p className="mt-2 font-medium text-accent">{item.result}</p>
            </article>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
```

- [ ] **Step 3: Create About page**

Create `src/pages/About.tsx` with:

```tsx
import { CTA } from '../components/CTA';
import { SimpleCard } from '../components/Cards';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';

const values = [
  { title: 'Scope sebelum build', text: 'Kami merapikan tujuan, prioritas, dan batasan sebelum membuat interface atau menulis kode.' },
  { title: 'Desain yang praktis', text: 'Setiap section harus membantu calon klien memahami bisnis, bukan hanya menghias halaman.' },
  { title: 'Engineering yang mudah dirawat', text: 'Struktur dibuat agar website dan sistem bisa dikembangkan setelah launch.' },
  { title: 'Komunikasi transparan', text: 'Risiko, timeline, dan keputusan teknis dijelaskan dengan bahasa yang bisa dipahami.' },
];

export function About() {
  return (
    <>
      <Seo title="About | NusaCode Studio" description="Kenali NusaCode Studio, software house yang fokus pada website kredibel, custom web app, dan support setelah launch." />
      <Section eyebrow="About" title="Partner teknis untuk bisnis yang ingin bergerak lebih rapi." intro="Kami membantu menerjemahkan kebutuhan bisnis menjadi website dan sistem web yang jelas, realistis, dan bisa digunakan.">
        <div className="grid gap-5 md:grid-cols-2">
          {values.map((value) => <SimpleCard key={value.title} {...value} />)}
        </div>
      </Section>
      <Section title="Profil founder" intro="Andi adalah founder dan product strategist. Fokus utamanya adalah menerjemahkan kebutuhan bisnis menjadi scope yang realistis, prioritas yang jelas, dan delivery yang rapi dari discovery sampai launch.">
        <div className="rounded-lg border border-line bg-white p-6 shadow-panel">
          <p className="leading-8 text-slate-600">Tim dapat berkembang mengikuti kebutuhan project: design, frontend, backend, QA, dan growth support. Prinsipnya tetap sama: mulai dari masalah bisnis, lalu bangun solusi yang bisa dipakai.</p>
        </div>
      </Section>
      <CTA />
    </>
  );
}
```

- [ ] **Step 4: Create Pricing page**

Create `src/pages/Pricing.tsx` with:

```tsx
import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { pricingModels } from '../content/site';

export function Pricing() {
  return (
    <>
      <Seo title="Pricing dan Engagement | NusaCode Studio" description="Model engagement untuk website, custom system, dan maintenance bulanan sesuai kebutuhan bisnis." />
      <Section eyebrow="Pricing" title="Model kerja yang membantu Anda memilih langkah awal." intro="Harga final mengikuti scope, tetapi pilihan berikut membantu menyaring kebutuhan sejak awal.">
        <div className="grid gap-5 md:grid-cols-2">
          {pricingModels.map((model) => (
            <article className="rounded-lg border border-line bg-white p-6 shadow-panel" key={model.title}>
              <h1 className="text-2xl font-semibold text-ink">{model.title}</h1>
              <p className="mt-2 font-semibold text-accent">{model.price}</p>
              <p className="mt-4 leading-7 text-slate-600">{model.fit}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {model.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
```

- [ ] **Step 5: Create Blog page**

Create `src/pages/Blog.tsx` with:

```tsx
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { posts } from '../content/site';

export function Blog() {
  return (
    <>
      <Seo title="Blog dan Insights | NusaCode Studio" description="Insight praktis tentang website company profile, custom web app, SEO dasar, dan kredibilitas digital bisnis." />
      <Section eyebrow="Blog" title="Insight praktis untuk mengambil keputusan digital." intro="Artikel awal dirancang untuk membantu pemilik bisnis memahami website, sistem internal, dan cara memulai project.">
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article className="rounded-lg border border-line bg-white p-6 shadow-panel" key={post.slug}>
              <h1 className="text-xl font-semibold text-ink">{post.title}</h1>
              <p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p>
              <p className="mt-5 text-sm font-semibold text-accent">Artikel preview</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
```

- [ ] **Step 6: Wire core routes**

Modify `src/App.tsx`:

```tsx
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { CaseStudies } from './pages/CaseStudies';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Services } from './pages/Services';

function ScaffoldPage({ title }: { title: string }) {
  return (
    <div className="container-shell py-20">
      <h1 className="text-4xl font-semibold text-ink">{title}</h1>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ScaffoldPage title="Contact" />} />
        <Route path="/privacy" element={<ScaffoldPage title="Privacy Policy" />} />
        <Route path="/terms" element={<ScaffoldPage title="Terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
```

- [ ] **Step 7: Run build**

Run:

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 8: Commit core pages**

Run:

```bash
git add src/App.tsx src/pages/Services.tsx src/pages/CaseStudies.tsx src/pages/About.tsx src/pages/Pricing.tsx src/pages/Blog.tsx
git commit -m "feat: add core website pages"
```

Expected: commit succeeds.

## Task 7: Implement Contact and Legal Pages

**Files:**
- Create: `src/pages/Contact.tsx`
- Create: `src/pages/Legal.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create Contact page**

Create `src/pages/Contact.tsx`:

```tsx
import { Send } from 'lucide-react';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { site } from '../content/site';

export function Contact() {
  return (
    <>
      <Seo title="Contact | NusaCode Studio" description="Hubungi NusaCode Studio untuk konsultasi website, custom web app, atau maintenance project digital bisnis Anda." />
      <Section eyebrow="Contact" title="Ceritakan kebutuhan project Anda." intro="Isi detail awal agar diskusi pertama lebih fokus. Anda juga bisa langsung menghubungi kami via WhatsApp atau email.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <form className="rounded-lg border border-line bg-white p-6 shadow-panel" action={site.whatsapp} method="get">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="font-medium text-ink">Nama</span>
                <input className="rounded-md border border-line px-4 py-3" name="name" required />
              </label>
              <label className="grid gap-2">
                <span className="font-medium text-ink">Perusahaan</span>
                <input className="rounded-md border border-line px-4 py-3" name="company" />
              </label>
              <label className="grid gap-2">
                <span className="font-medium text-ink">Email atau WhatsApp</span>
                <input className="rounded-md border border-line px-4 py-3" name="contact" required />
              </label>
              <label className="grid gap-2">
                <span className="font-medium text-ink">Jenis project</span>
                <select className="rounded-md border border-line px-4 py-3" name="projectType" required>
                  <option>Company profile website</option>
                  <option>Custom web app</option>
                  <option>Maintenance / retainer</option>
                  <option>Belum yakin</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="font-medium text-ink">Pesan</span>
                <textarea className="min-h-32 rounded-md border border-line px-4 py-3" name="message" required />
              </label>
              <p className="text-sm leading-6 text-slate-500">Data ini digunakan untuk merespons kebutuhan project Anda. Kami tidak menjual data kontak.</p>
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white hover:bg-teal-800" type="submit">
                Kirim Inquiry <Send size={18} aria-hidden="true" />
              </button>
            </div>
          </form>
          <aside className="rounded-lg border border-line bg-ink p-6 text-white">
            <h2 className="text-2xl font-semibold">Kontak langsung</h2>
            <p className="mt-4 text-slate-300">Respons biasanya dalam 1 hari kerja. Untuk diskusi awal, siapkan konteks bisnis, target launch, dan contoh referensi jika ada.</p>
            <div className="mt-6 space-y-3 text-sm">
              <p>Email: {site.email}</p>
              <p>WhatsApp: {site.phone}</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Create Legal pages**

Create `src/pages/Legal.tsx`:

```tsx
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';

export function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy | NusaCode Studio" description="Kebijakan privasi NusaCode Studio untuk data kontak dan inquiry project." />
      <Section eyebrow="Privacy" title="Privacy Policy">
        <div className="max-w-3xl space-y-5 leading-8 text-slate-600">
          <p>Kami mengumpulkan data kontak yang Anda kirim melalui form, email, atau WhatsApp untuk merespons inquiry dan menyiapkan diskusi project.</p>
          <p>Data dapat mencakup nama, perusahaan, kontak, jenis project, dan pesan. Data ini tidak dijual kepada pihak lain.</p>
          <p>Jika Anda ingin memperbarui atau menghapus data kontak, hubungi kami melalui email yang tercantum di website.</p>
        </div>
      </Section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <Seo title="Terms | NusaCode Studio" description="Ketentuan penggunaan website NusaCode Studio dan informasi awal terkait kerja project." />
      <Section eyebrow="Terms" title="Terms">
        <div className="max-w-3xl space-y-5 leading-8 text-slate-600">
          <p>Informasi di website ini bersifat umum dan digunakan sebagai referensi awal sebelum project dimulai.</p>
          <p>Setiap pekerjaan project membutuhkan proposal, scope, timeline, dan kesepakatan tertulis terpisah.</p>
          <p>Kepemilikan source code, aset, pembayaran, dan support mengikuti dokumen project yang disepakati bersama klien.</p>
        </div>
      </Section>
    </>
  );
}
```

- [ ] **Step 3: Wire Contact and Legal routes**

Modify `src/App.tsx`:

```tsx
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { CaseStudies } from './pages/CaseStudies';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Privacy, Terms } from './pages/Legal';
import { Pricing } from './pages/Pricing';
import { Services } from './pages/Services';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
```

- [ ] **Step 4: Run build**

Run:

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 5: Commit contact and legal pages**

Run:

```bash
git add src/App.tsx src/pages/Contact.tsx src/pages/Legal.tsx
git commit -m "feat: add contact and legal pages"
```

Expected: commit succeeds.

## Task 8: Add Tests

**Files:**
- Create: `src/test/App.test.tsx`
- Create: `src/test/accessibility.test.tsx`

- [ ] **Step 1: Create route smoke tests**

Create `src/test/App.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from '../App';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App routes', () => {
  it('renders the home page', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { name: /kami membangun website/i })).toBeInTheDocument();
  });

  it('renders the services page', () => {
    renderAt('/services');
    expect(screen.getByRole('heading', { name: /layanan yang jelas/i })).toBeInTheDocument();
  });

  it('renders the contact page', () => {
    renderAt('/contact');
    expect(screen.getByLabelText(/nama/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /kirim inquiry/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Create accessibility tests**

Create `src/test/accessibility.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('Accessibility basics', () => {
  it('provides primary navigation', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
  });

  it('labels required contact fields', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByLabelText(/nama/i)).toBeRequired();
    expect(screen.getByLabelText(/email atau whatsapp/i)).toBeRequired();
    expect(screen.getByLabelText(/pesan/i)).toBeRequired();
  });
});
```

- [ ] **Step 3: Run tests**

Run:

```bash
npm test
```

Expected: PASS.

- [ ] **Step 4: Run build**

Run:

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 5: Commit tests**

Run:

```bash
git add src/test/App.test.tsx src/test/accessibility.test.tsx
git commit -m "test: add website route and accessibility checks"
```

Expected: commit succeeds.

## Task 9: Browser Verification and Polish

**Files:**
- Modify as needed: `src/**/*.tsx`
- Modify as needed: `src/styles.css`

- [ ] **Step 1: Start local dev server**

Run:

```bash
npm run dev
```

Expected: Vite serves the site on `http://127.0.0.1:5173/` or the next available port.

- [ ] **Step 2: Verify desktop layout**

Open `http://127.0.0.1:5173/`.

Check:

- Header is visible and navigation works.
- Hero text does not overlap the panel.
- CTA buttons fit within their containers.
- Service cards align cleanly.
- Footer links are visible.

- [ ] **Step 3: Verify mobile layout**

Use a mobile viewport around 390px wide.

Check:

- Mobile menu opens and closes.
- Hero heading wraps cleanly.
- Cards stack without overflow.
- Contact form fields remain readable.
- No section has horizontal scrolling.

- [ ] **Step 4: Fix visual issues**

If text overflows in cards, reduce card heading size from `text-2xl` to `text-xl` in the affected page.

If CTA buttons overflow on narrow screens, ensure the button container uses:

```tsx
className="flex flex-col gap-3 sm:flex-row"
```

If mobile menu stays open after route changes, confirm each mobile `NavLink` calls:

```tsx
onClick={() => setOpen(false)}
```

- [ ] **Step 5: Final verification commands**

Run:

```bash
npm test
npm run build
```

Expected: both PASS.

- [ ] **Step 6: Commit polish**

Run:

```bash
git add src
git commit -m "fix: polish responsive website experience"
```

Expected: commit succeeds if there were changes. If there were no changes, skip this commit and note that browser verification required no code changes.

## Self-Review Checklist

- Spec coverage: The plan covers custom frontend, sitemap, home, services, case studies, about, pricing, blog, contact, legal, SEO metadata, accessibility basics, structured content, testing, and browser verification.
- Scope control: CMS, auth, payments, client portal, and backend storage remain out of scope for version 1.
- Completion scan: The plan contains no unfinished requirements or generic deferred steps.
- Type consistency: Shared content properties used by components match the data defined in `src/content/site.ts`.
