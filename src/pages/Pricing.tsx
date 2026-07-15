import { CheckCircle2 } from 'lucide-react';

import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { useContent } from '../content/site';

export function Pricing() {
  const { pageCopy, pricingModels } = useContent();
  const copy = pageCopy.pricingPage;

  return (
    <>
      <Seo
        title={copy.seoTitle}
        description={copy.seoDescription}
      />

      <section className="py-16 sm:py-24">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{copy.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {copy.intro}
          </p>
        </div>
      </section>

      <Section eyebrow={copy.modelsEyebrow} title={copy.modelsTitle} className="bg-white">
        <div className="grid gap-5 md:grid-cols-2">
          {pricingModels.map((model) => (
            <article key={model.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-ink">{model.title}</h3>
              <p className="mt-3 text-lg font-semibold text-accent">{model.price}</p>
              <p className="mt-4 leading-7 text-slate-600">{model.fit}</p>
              <ul className="mt-6 space-y-3">
                {model.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-accent" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={copy.factorsEyebrow}
        title={copy.factorsTitle}
        intro={copy.factorsIntro}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {copy.factors.map(
            (factor) => (
              <article key={factor} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">{factor}</h3>
              </article>
            ),
          )}
        </div>
      </Section>

      <CTA />
    </>
  );
}
