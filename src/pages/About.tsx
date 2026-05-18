import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SimpleCard } from '../components/Cards';
import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { site } from '../content/site';

const values = [
  {
    title: 'Clarity before build',
    text: 'Kami menyusun masalah, prioritas, dan risiko sebelum menulis terlalu banyak kode.',
  },
  {
    title: 'Useful over flashy',
    text: 'Interface harus membantu pengguna mengambil langkah berikutnya, bukan hanya terlihat ramai.',
  },
  {
    title: 'Maintainable by design',
    text: 'Komponen, struktur halaman, dan keputusan teknis dibuat agar mudah dirawat setelah launch.',
  },
  {
    title: 'Honest partnership',
    text: 'Kami menjelaskan trade-off, timeline, dan batasan dengan bahasa yang bisa dipahami tim bisnis.',
  },
];

export function About() {
  return (
    <>
      <Seo
        title={`About | ${site.name}`}
        description="Tentang NusaCode Studio, software house yang membantu bisnis membangun website dan sistem web yang kredibel, rapi, dan siap tumbuh."
      />

      <section className="py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Partner teknis untuk bisnis yang ingin bergerak lebih rapi di digital.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {site.name} membantu founder dan tim bisnis menerjemahkan kebutuhan website atau
              sistem internal menjadi produk web yang jelas, bisa digunakan, dan mudah dikembangkan.
            </p>
          </div>

          <aside className="rounded-lg border border-line bg-white p-6 shadow-panel">
            <h2 className="text-2xl font-semibold text-ink">Founder-led, team-ready.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Setiap project dipimpin dengan perhatian langsung pada scope, komunikasi, dan kualitas
              implementasi. Saat kebutuhan berkembang, kami membentuk tim kecil yang sesuai: design,
              frontend, backend, QA, dan deployment support.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white transition hover:bg-teal-800"
            >
              Kenali cara kerja kami
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </aside>
        </div>
      </section>

      <Section eyebrow="Values" title="Empat prinsip yang menjaga project tetap sehat." className="bg-white">
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
