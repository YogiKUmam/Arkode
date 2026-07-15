import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SimpleCard } from '../components/Cards';
import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { ProductMockup } from '../components/VisualMockups';
import { useLanguage } from '../content/LanguageContext';
import { useContent } from '../content/site';

const values = [
  {
    title: 'Clarity',
    text: 'Setiap proyek dimulai dari tujuan, scope, prioritas, dan ekspektasi hasil yang jelas.',
  },
  {
    title: 'Reliability',
    text: 'Solusi digital dibangun agar dapat diandalkan dari sisi fungsi, performa, dan penggunaan.',
  },
  {
    title: 'Scalability',
    text: 'Struktur produk disiapkan agar mudah dikembangkan saat bisnis bertumbuh.',
  },
  {
    title: 'Professional Delivery',
    text: 'Proses pengerjaan menggunakan tahapan, dokumentasi, testing, dan komunikasi yang rapi.',
  },
];

const englishValues = [
  {
    title: 'Clarity',
    text: 'Every project starts from clear goals, scope, priorities, and outcome expectations.',
  },
  {
    title: 'Reliability',
    text: 'Digital solutions are built to be dependable in function, performance, and day-to-day use.',
  },
  {
    title: 'Scalability',
    text: 'Product structure is prepared so it can evolve as the business grows.',
  },
  {
    title: 'Professional Delivery',
    text: 'Delivery uses clear stages, documentation, testing, and communication.',
  },
];

const aboutCopy = {
  en: {
    seoDescription:
      'About Arkode Labs, a software house that helps businesses build clean, reliable, and scalable digital solutions.',
    eyebrow: 'About Arkode Labs',
    title: 'Architecture and code for digital solutions built to scale.',
    intro:
      'The name Arkode represents the combination of Architecture and Code. We do not only write code; we design the right structure, flow, and system foundation from the beginning.',
    asideTitle: 'A communicative technology partner.',
    asideText:
      'Arkode Labs is built for businesses that need a professional partner to turn ideas into real websites, web apps, dashboards, and digital systems.',
    asideCta: 'Explore how we work',
    visualEyebrow: 'How we visualize work',
    visualTitle: 'We make technical processes easier for business teams to read.',
    valuesEyebrow: 'Values',
    valuesTitle: 'Principles that keep projects healthy.',
    teamEyebrow: 'Team model',
    teamTitle: 'Small team, close communication, usable outcomes.',
    teamIntro:
      'We do not sell complicated process. We keep collaboration direct, documentation sufficient, and technical decisions traceable.',
    areas: ['Strategy and scope', 'Product interface', 'Build and launch'],
    areaText:
      'This area is adjusted to the project size so the team stays focused on the most important output.',
  },
  id: {
    seoDescription:
      'Tentang Arkode Labs, software house yang membantu bisnis membangun solusi digital yang rapi, andal, dan siap berkembang.',
    eyebrow: 'About Arkode Labs',
    title: 'Architecture dan kode untuk solusi digital yang siap berkembang.',
    intro:
      'Nama Arkode merepresentasikan gabungan dari Architecture dan Kode. Kami tidak sekadar menulis kode, tetapi merancang struktur, alur, dan fondasi sistem yang tepat sejak awal.',
    asideTitle: 'Partner teknologi yang komunikatif.',
    asideText:
      'Arkode Labs cocok untuk bisnis yang membutuhkan partner profesional untuk menerjemahkan ide menjadi website, web app, dashboard, dan sistem digital nyata.',
    asideCta: 'Kenali cara kerja kami',
    visualEyebrow: 'How we visualize work',
    visualTitle: 'Kami membuat proses teknis lebih mudah dibaca oleh tim bisnis.',
    valuesEyebrow: 'Values',
    valuesTitle: 'Prinsip yang menjaga project tetap sehat.',
    teamEyebrow: 'Team model',
    teamTitle: 'Tim kecil, komunikasi dekat, hasil yang bisa dipakai.',
    teamIntro:
      'Kami tidak menjual proses yang rumit. Kami menjaga kolaborasi tetap langsung, dokumentasi cukup, dan keputusan teknis bisa ditelusuri.',
    areas: ['Strategy and scope', 'Product interface', 'Build and launch'],
    areaText:
      'Bagian ini disesuaikan dengan ukuran project agar tim tetap fokus pada output yang paling penting.',
  },
};

export function About() {
  const { language } = useLanguage();
  const { site } = useContent();
  const copy = aboutCopy[language];
  const displayedValues = language === 'en' ? englishValues : values;

  return (
    <>
      <Seo
        title={`About | ${site.name}`}
        description={copy.seoDescription}
      />

      <section className="py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{copy.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {copy.intro}
            </p>
          </div>

          <aside className="rounded-lg border border-line bg-white p-6 shadow-panel">
            <h2 className="text-2xl font-semibold text-navy">{copy.asideTitle}</h2>
            <p className="mt-4 leading-7 text-slate-600">
              {copy.asideText}
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white transition hover:bg-navy"
            >
              {copy.asideCta}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </aside>
        </div>
      </section>

      <Section
        eyebrow={copy.visualEyebrow}
        title={copy.visualTitle}
      >
        <ProductMockup variant="process" title="Discovery, scope, design, build, QA, launch, dan support dalam ritme yang jelas." eyebrow="Delivery map" />
      </Section>

      <Section eyebrow={copy.valuesEyebrow} title={copy.valuesTitle} className="bg-white">
        <div className="grid gap-4 md:grid-cols-2">
          {displayedValues.map((value) => (
            <SimpleCard key={value.title} title={value.title} text={value.text} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow={copy.teamEyebrow}
        title={copy.teamTitle}
        intro={copy.teamIntro}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {copy.areas.map((area) => (
            <article key={area} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-ink">{area}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {copy.areaText}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
