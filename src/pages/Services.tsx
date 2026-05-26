import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { ServiceCard, SimpleCard } from '../components/Cards';
import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { ProductMockup } from '../components/VisualMockups';
import { processSteps, services, site } from '../content/site';

export function Services() {
  return (
    <>
      <Seo
        title={`Services | ${site.name}`}
        description="Layanan Arkode Labs untuk website company profile, landing page, web application, dashboard, UI/UX, dan maintenance."
      />

      <section className="py-16 sm:py-24">
        <div className="container-shell max-w-4xl">
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
      </section>

      <Section
        eyebrow="Layanan utama"
        title="Pilih model kerja yang paling sesuai dengan tahap bisnis Anda."
        className="bg-white"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Cara kerja"
        title="Ritme project dibuat transparan dari awal."
        intro="Kami menjaga proses tetap praktis: mulai dari memahami masalah, menyepakati prioritas, lalu membangun dengan checkpoint yang jelas."
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <ProductMockup variant="maintenance" title="Monitoring, QA, dan improvement setelah launch tetap terlihat rapi." eyebrow="Support preview" />
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <SimpleCard key={step.title} title={`${index + 1}. ${step.title}`} text={step.text} />
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
