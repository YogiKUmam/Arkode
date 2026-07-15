import { ArrowRight, CheckCircle2, Code2, Layers3, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ServiceCard, SimpleCard } from '../components/Cards';
import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { ProductMockup, WebsitePreview } from '../components/VisualMockups';
import { ManagedCaseStudy } from '../content/adminContent';
import { useContent } from '../content/site';

const trustIcons = [Code2, Layers3, ShieldCheck];

export function Home() {
  const { caseStudies, faqs, pageCopy, problems, processSteps, services, site } = useContent();
  const copy = pageCopy.home;
  const featuredCase = caseStudies[0];
  const secondaryCases = caseStudies.slice(1, 3);
  const featuredService = services.find((service) => service.title === 'Web Application Development') ?? services[0];
  const supportingServices = services.filter((service) => service.title !== featuredService.title).slice(0, 4);
  const featuredVisual = featuredCase.visual as ManagedCaseStudy['visual'];
  const featuredImageUrl = 'imageUrl' in featuredCase ? featuredCase.imageUrl : undefined;
  const featuredOverview = 'overview' in featuredCase ? featuredCase.overview : undefined;

  return (
    <>
      <Seo
        title={copy.seoTitle}
        description={copy.seoDescription}
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] tech-grid-bg opacity-70" aria-hidden="true" />
        <div className="container-shell grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-line bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent shadow-sm">
              <Sparkles aria-hidden="true" size={15} />
              {site.category}
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              {site.heroHeadline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {site.heroSubheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white transition hover:bg-navy"
              >
                {pageCopy.common.projectConsultation}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md border border-line bg-white px-5 py-3 font-semibold text-navy transition hover:border-accent hover:text-accent"
              >
                {pageCopy.common.viewServices}
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {copy.proofItems.map((item) => (
                <div key={item.label} className="border-l-2 border-accent bg-white/70 px-4 py-3 shadow-sm">
                  <p className="text-2xl font-semibold text-navy">{item.value}</p>
                  <p className="mt-1 text-sm font-medium text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="glass-panel rounded-lg p-4 sm:p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img src={site.logo} alt={`${site.name} logo`} className="h-16 w-16 rounded-lg object-cover" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      Code. Build. Solve.
                    </p>
                    <p className="mt-2 text-2xl font-bold text-navy">{site.name}</p>
                  </div>
                </div>
                <span className="hidden rounded-md bg-navy px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan sm:inline-flex">
                  Build-ready
                </span>
              </div>
              <ProductMockup variant="dashboard" title={copy.systemPreviewTitle} eyebrow={copy.systemPreviewEyebrow} />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {copy.trustItems.map((item, index) => {
                const Icon = trustIcons[index] ?? Code2;

                return (
                  <article key={item.title} className="rounded-lg border border-line bg-white p-4 shadow-sm">
                    <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-accent" />
                    <h2 className="mt-3 font-semibold text-navy">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white/80 py-5">
        <div className="container-shell flex flex-wrap items-center gap-3">
          <p className="mr-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            {copy.capabilityLabel}
          </p>
          {copy.capabilityItems.map((item) => (
            <span key={item} className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-navy">
              {item}
            </span>
          ))}
        </div>
      </section>

      <Section
        eyebrow={copy.problemEyebrow}
        title={copy.problemTitle}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {problems.map((problem) => (
            <SimpleCard
              key={problem}
              title={problem}
              text={copy.problemCardText}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow={copy.serviceEyebrow}
        title={copy.serviceTitle}
        intro={copy.serviceIntro}
        className="bg-white"
      >
        <div className="grid gap-5 lg:grid-cols-[1.05fr_1fr]">
          <article className="rounded-lg bg-navy p-6 text-white shadow-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{copy.featuredService}</p>
            <h3 className="mt-4 text-3xl font-semibold">{featuredService.title}</h3>
            <p className="mt-4 leading-8 text-slate-300">{featuredService.summary}</p>
            <p className="mt-6 rounded-md border border-white/10 bg-white/10 p-4 font-medium leading-7">
              {featuredService.outcome}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {featuredService.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-3 text-sm leading-6 text-slate-200">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-cyan" size={18} />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </article>
          <div className="grid gap-5 sm:grid-cols-2">
            {supportingServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow={copy.caseEyebrow} title={copy.caseTitle}>
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          {featuredCase && (
            <article className="rounded-lg border border-line bg-white p-6 shadow-panel">
              {featuredImageUrl ? (
                <WebsitePreview
                  src={featuredImageUrl}
                  alt={`${featuredCase.title} preview`}
                  eyebrow={copy.featuredPreviewEyebrow}
                />
              ) : (
                <ProductMockup variant={featuredVisual} title={featuredCase.title} eyebrow="Featured case" />
              )}
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-accent">{featuredCase.label}</p>
              <h3 className="mt-3 text-3xl font-semibold text-navy">{featuredCase.title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{featuredCase.summary}</p>
              {featuredOverview && (
                <p className="mt-4 rounded-md border border-line bg-paper p-4 text-sm leading-7 text-slate-700">
                  {featuredOverview}
                </p>
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
            </article>
          )}
          <div className="grid gap-5">
            {secondaryCases.map((item) => (
              <article key={item.title} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{item.label}</p>
                <h3 className="mt-3 text-2xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((technology) => (
                    <span key={technology} className="rounded-md border border-line px-3 py-1 text-xs font-semibold text-accent">
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white transition hover:bg-navy"
            >
              {copy.allCases}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </Section>

      <Section
        eyebrow={copy.deliveryEyebrow}
        title={copy.deliveryTitle}
        className="bg-white"
      >
        <div className="grid gap-3 lg:grid-cols-7">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-line bg-white p-5 shadow-sm lg:min-h-56">
              <p className="text-3xl font-semibold text-accent">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-5 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={copy.visualEyebrow}
        title={copy.visualTitle}
        intro={copy.visualIntro}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <ProductMockup variant="website" title={copy.visualPreviewTitle} eyebrow={copy.visualPreviewEyebrow} />
          <ProductMockup variant="process" title={copy.processPreviewTitle} eyebrow={copy.processPreviewEyebrow} />
        </div>
      </Section>

      <Section eyebrow={copy.faqEyebrow} title={copy.faqTitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <SimpleCard key={faq.question} title={faq.question} text={faq.answer} />
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
