import { ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { ProductMockup, WebsitePreview } from '../components/VisualMockups';
import { ManagedCaseStudy, useManagedContent } from '../content/adminContent';
import { useContent } from '../content/site';

function LiveDemoButton({ demoUrl, label }: { demoUrl: string; label: string }) {
  const className =
    'inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy';

  if (/^https?:\/\//.test(demoUrl)) {
    return (
      <a href={demoUrl} target="_blank" rel="noreferrer" className={className}>
        {label}
        <ArrowRight aria-hidden="true" size={16} />
      </a>
    );
  }

  return (
    <Link to={demoUrl} className={className}>
      {label}
      <ArrowRight aria-hidden="true" size={16} />
    </Link>
  );
}

function SourceCodeButton({ repoUrl, label }: { repoUrl: string; label: string }) {
  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:border-accent hover:text-accent"
    >
      <Github aria-hidden="true" size={16} />
      {label}
    </a>
  );
}

export function CaseStudies() {
  const { caseStudies, pageCopy, site } = useContent();
  const copy = pageCopy.caseStudiesPage;
  const managedContent = useManagedContent();
  const visibleCaseStudies = [
    ...caseStudies,
    ...managedContent.caseStudies.filter((item) => item.status === 'Published'),
  ];
  const [featuredCase, ...otherCases] = visibleCaseStudies;
  const featuredVisual = featuredCase
    ? (('visual' in featuredCase ? featuredCase.visual : 'website') as ManagedCaseStudy['visual'])
    : 'website';
  const featuredImageUrl = featuredCase && 'imageUrl' in featuredCase ? featuredCase.imageUrl : undefined;
  const featuredOverview = featuredCase && 'overview' in featuredCase ? featuredCase.overview : undefined;
  const featuredDemoUrl = featuredCase && 'demoUrl' in featuredCase ? featuredCase.demoUrl : undefined;
  const featuredRepoUrl = featuredCase && 'repoUrl' in featuredCase ? featuredCase.repoUrl : undefined;

  return (
    <>
      <Seo
        title={copy.seoTitle}
        description={copy.seoDescription}
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[560px] tech-grid-bg opacity-60" aria-hidden="true" />
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{copy.eyebrow}</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {copy.intro}
            </p>
          </div>
          {featuredCase && (
            <div className="glass-panel rounded-lg p-5">
              {featuredImageUrl ? (
                <WebsitePreview
                  src={featuredImageUrl}
                  alt={`Tampilan website ${featuredCase.title}`}
                  eyebrow="Featured live preview"
                />
              ) : (
                <ProductMockup
                  variant={featuredVisual}
                  title={featuredCase.title}
                  eyebrow="Featured showcase"
                />
              )}
            </div>
          )}
        </div>
      </section>

      <Section eyebrow={copy.examplesEyebrow} title={copy.examplesTitle} className="bg-white">
        {featuredCase && (
          <article className="mb-6 grid gap-6 rounded-lg border border-line bg-white p-6 shadow-panel lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            {featuredImageUrl ? (
              <WebsitePreview
                src={featuredImageUrl}
                alt={`Screenshot halaman utama ${featuredCase.title}`}
                eyebrow={featuredCase.label}
              />
            ) : (
              <ProductMockup
                variant={featuredVisual}
                title={featuredCase.title}
                eyebrow={featuredCase.label}
              />
            )}
            <div>
              <span className="rounded-md bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                {pageCopy.common.featured} / {featuredCase.label}
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-navy">{featuredCase.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{featuredCase.summary}</p>
              {featuredOverview && (
                <div className="mt-5 rounded-md border border-line bg-paper p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {pageCopy.common.aboutWebsite}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{featuredOverview}</p>
                </div>
              )}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md bg-paper p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{pageCopy.common.timeline}</p>
                  <p className="mt-2 font-semibold text-navy">{featuredCase.timeline}</p>
                </div>
                <div className="rounded-md bg-paper p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{pageCopy.common.result}</p>
                  <p className="mt-2 font-semibold text-accent">{featuredCase.result}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {featuredDemoUrl && <LiveDemoButton demoUrl={featuredDemoUrl} label={pageCopy.common.liveDemo} />}
                {featuredRepoUrl && <SourceCodeButton repoUrl={featuredRepoUrl} label={pageCopy.common.sourceCode} />}
              </div>
            </div>
          </article>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          {otherCases.map((item) => {
            const visualVariant = ('visual' in item
              ? item.visual
              : 'website') as ManagedCaseStudy['visual'];
            const demoUrl = 'demoUrl' in item ? item.demoUrl : undefined;
            const repoUrl = 'repoUrl' in item ? item.repoUrl : undefined;
            const imageUrl = 'imageUrl' in item ? item.imageUrl : undefined;
            const overview = 'overview' in item ? item.overview : undefined;

            return (
            <article key={item.title} className="rounded-lg border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-panel">
              {imageUrl ? (
                <WebsitePreview
                  src={imageUrl}
                  alt={`Preview website ${item.title}`}
                  eyebrow={item.label}
                />
              ) : (
                <ProductMockup
                  variant={visualVariant}
                  title={visualVariant === 'dashboard' ? 'Dashboard preview' : 'Website preview'}
                  eyebrow={item.label}
                />
              )}
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {item.label}
                </span>
                <span className="text-sm text-slate-500">{pageCopy.common.timeline}: {item.timeline}</span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.summary}</p>
              {overview && (
                <p className="mt-4 rounded-md border border-line bg-paper p-4 text-sm leading-7 text-slate-700">
                  {overview}
                </p>
              )}

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
                  {pageCopy.common.result}
                </p>
                <p className="mt-2 font-medium leading-7 text-accent">{item.result}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {demoUrl && <LiveDemoButton demoUrl={demoUrl} label={pageCopy.common.liveDemo} />}
                {repoUrl && <SourceCodeButton repoUrl={repoUrl} label={pageCopy.common.sourceCode} />}
              </div>
            </article>
          );
          })}
        </div>
      </Section>

      <Section
        eyebrow={copy.nextEyebrow}
        title={copy.nextTitle}
        intro={copy.nextIntro}
      >
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white transition hover:bg-navy"
        >
          {copy.nextCta}
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </Section>

      <CTA />
    </>
  );
}
