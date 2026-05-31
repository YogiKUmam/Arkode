import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { ServiceCard, SimpleCard } from '../components/Cards';
import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { ProductMockup } from '../components/VisualMockups';
import { processSteps, services, site } from '../content/site';

export function Services() {
  const primaryService = services.find((service) => service.title === 'Web Application Development') ?? services[0];
  const serviceGroups = services.filter((service) => service.title !== primaryService.title);

  return (
    <>
      <Seo
        title={`Services | ${site.name}`}
        description="Layanan Arkode Labs untuk website company profile, landing page, web application, dashboard, UI/UX, dan maintenance."
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] tech-grid-bg opacity-60" aria-hidden="true" />
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Services</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              Layanan software house untuk website, web app, dashboard, dan sistem digital custom.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Kami membantu dari struktur, desain, build, launch, sampai support setelah online.
              Setiap layanan dimulai dari scope yang jelas agar keputusan teknis tetap nyambung
              dengan tujuan bisnis.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white transition hover:bg-navy"
              >
                Diskusi kebutuhan
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
          <div className="glass-panel rounded-lg p-5">
            <ProductMockup variant="process" title="Scope, UI, build, QA, dan support dibuat dalam satu alur delivery." eyebrow="Service system" />
          </div>
        </div>
      </section>

      <Section
        eyebrow="Layanan utama"
        title="Pilih model kerja yang paling sesuai dengan tahap bisnis Anda."
        className="bg-white"
      >
        <div className="grid gap-5 lg:grid-cols-[1.05fr_1fr]">
          <article className="rounded-lg bg-navy p-6 text-white shadow-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
              Primary engagement
            </p>
            <h2 className="mt-4 text-3xl font-semibold">{primaryService.title}</h2>
            <p className="mt-4 leading-8 text-slate-300">{primaryService.summary}</p>
            <div className="mt-6 rounded-md border border-white/10 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan">Outcome</p>
              <p className="mt-2 font-medium leading-7">{primaryService.outcome}</p>
            </div>
            <div className="mt-6">
              <ProductMockup variant="dashboard" title="Custom dashboard, portal, dan operational system." eyebrow="Build preview" />
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-navy transition hover:bg-paper"
            >
              Mulai dari discovery
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {serviceGroups.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Cara kerja"
        title="Ritme project dibuat transparan dari awal."
        intro="Kami menjaga proses tetap praktis: mulai dari memahami masalah, menyepakati prioritas, lalu membangun dengan checkpoint yang jelas."
      >
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
            <ProductMockup variant="maintenance" title="Monitoring, QA, dan improvement setelah launch tetap terlihat rapi." eyebrow="Support preview" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <SimpleCard key={step.title} title={`${String(index + 1).padStart(2, '0')} ${step.title}`} text={step.text} />
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
