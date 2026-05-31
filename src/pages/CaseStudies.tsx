import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { ProductMockup } from '../components/VisualMockups';
import { ManagedCaseStudy, useManagedContent } from '../content/adminContent';
import { caseStudies, site } from '../content/site';

export function CaseStudies() {
  const managedContent = useManagedContent();
  const visibleCaseStudies = [
    ...caseStudies,
    ...managedContent.caseStudies.filter((item) => item.status === 'Published'),
  ];
  const [featuredCase, ...otherCases] = visibleCaseStudies;
  const featuredVisual = featuredCase
    ? (('visual' in featuredCase ? featuredCase.visual : 'website') as ManagedCaseStudy['visual'])
    : 'website';

  return (
    <>
      <Seo
        title={`Case Studies | ${site.name}`}
        description="Contoh project dan engagement Arkode Labs untuk website bisnis, dashboard, dan sistem web."
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[560px] tech-grid-bg opacity-60" aria-hidden="true" />
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Case studies</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              Case studies yang menunjukkan cara kami menyusun masalah, scope, dan hasil.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Kami menampilkan contoh engagement dengan konteks yang jujur: jenis project, teknologi
              yang relevan, estimasi timeline, dan hasil yang ingin dicapai.
            </p>
          </div>
          {featuredCase && (
            <div className="glass-panel rounded-lg p-5">
              <ProductMockup
                variant={featuredVisual}
                title={featuredCase.title}
                eyebrow="Featured showcase"
              />
            </div>
          )}
        </div>
      </section>

      <Section eyebrow="Project examples" title="Bukti awal yang ringkas dan mudah dievaluasi." className="bg-white">
        {featuredCase && (
          <article className="mb-6 grid gap-6 rounded-lg border border-line bg-white p-6 shadow-panel lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <ProductMockup
              variant={featuredVisual}
              title={featuredCase.title}
              eyebrow={featuredCase.label}
            />
            <div>
              <span className="rounded-md bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Featured / {featuredCase.label}
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-navy">{featuredCase.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{featuredCase.summary}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md bg-paper p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Timeline</p>
                  <p className="mt-2 font-semibold text-navy">{featuredCase.timeline}</p>
                </div>
                <div className="rounded-md bg-paper p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Result</p>
                  <p className="mt-2 font-semibold text-accent">{featuredCase.result}</p>
                </div>
              </div>
              {'demoUrl' in featuredCase && featuredCase.demoUrl && (
                <Link
                  to={featuredCase.demoUrl}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy"
                >
                  Live Demo
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              )}
            </div>
          </article>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          {otherCases.map((item) => {
            const visualVariant = ('visual' in item
              ? item.visual
              : 'website') as ManagedCaseStudy['visual'];
            const demoUrl = 'demoUrl' in item ? item.demoUrl : undefined;

            return (
            <article key={item.title} className="rounded-lg border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-panel">
              <ProductMockup
                variant={visualVariant}
                title={visualVariant === 'dashboard' ? 'Dashboard preview' : 'Website preview'}
                eyebrow={item.label}
              />
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {item.label}
                </span>
                <span className="text-sm text-slate-500">Timeline: {item.timeline}</span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2" aria-label={`${item.title} technology stack`}>
                {item.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-line bg-white px-3 py-1 text-xs font-semibold text-accent"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-md bg-paper p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Result
                </p>
                <p className="mt-2 font-medium leading-7 text-accent">{item.result}</p>
              </div>

              {demoUrl && (
                <Link
                  to={demoUrl}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy"
                >
                  Live Demo
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              )}
            </article>
          );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Next project"
        title="Punya masalah serupa yang perlu dibuat lebih terstruktur?"
        intro="Kami bisa membantu memetakan scope awal sebelum masuk ke desain dan development."
      >
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white transition hover:bg-navy"
        >
          Mulai konsultasi
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </Section>

      <CTA />
    </>
  );
}
