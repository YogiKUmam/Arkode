import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SimpleCard } from '../components/Cards';
import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { ProductMockup } from '../components/VisualMockups';
import { site } from '../content/site';

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

export function About() {
  return (
    <>
      <Seo
        title={`About | ${site.name}`}
        description="Tentang Arkode Labs, software house yang membantu bisnis membangun solusi digital yang rapi, andal, dan siap berkembang."
      />

      <section className="py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">About Arkode Labs</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              Architecture dan kode untuk solusi digital yang siap berkembang.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Nama Arkode merepresentasikan gabungan dari Architecture dan Kode. Kami tidak sekadar
              menulis kode, tetapi merancang struktur, alur, dan fondasi sistem yang tepat sejak awal.
            </p>
          </div>

          <aside className="rounded-lg border border-line bg-white p-6 shadow-panel">
            <h2 className="text-2xl font-semibold text-navy">Partner teknologi yang komunikatif.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Arkode Labs cocok untuk bisnis yang membutuhkan partner profesional untuk menerjemahkan
              ide menjadi website, web app, dashboard, dan sistem digital nyata.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white transition hover:bg-navy"
            >
              Kenali cara kerja kami
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </aside>
        </div>
      </section>

      <Section
        eyebrow="How we visualize work"
        title="Kami membuat proses teknis lebih mudah dibaca oleh tim bisnis."
      >
        <ProductMockup variant="process" title="Discovery, scope, design, build, QA, launch, dan support dalam ritme yang jelas." eyebrow="Delivery map" />
      </Section>

      <Section eyebrow="Values" title="Prinsip yang menjaga project tetap sehat." className="bg-white">
        <div className="grid gap-4 md:grid-cols-2">
          {values.map((value) => (
            <SimpleCard key={value.title} title={value.title} text={value.text} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Team model"
        title="Tim kecil, komunikasi dekat, hasil yang bisa dipakai."
        intro="Kami tidak menjual proses yang rumit. Kami menjaga kolaborasi tetap langsung, dokumentasi cukup, dan keputusan teknis bisa ditelusuri."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {['Strategy and scope', 'Product interface', 'Build and launch'].map((area) => (
            <article key={area} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-ink">{area}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Bagian ini disesuaikan dengan ukuran project agar tim tetap fokus pada output yang
                paling penting.
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
