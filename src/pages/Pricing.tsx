import { CheckCircle2 } from 'lucide-react';

import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { pricingModels, site } from '../content/site';

export function Pricing() {
  return (
    <>
      <Seo
        title={`Pricing | ${site.name}`}
        description="Model harga NusaCode Studio untuk website bisnis, custom system, dan maintenance retainer."
      />

      <section className="py-16 sm:py-24">
        <div className="container-shell max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Pricing dimulai dari scope yang jelas, bukan paket yang dipaksakan.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Setiap bisnis punya kebutuhan, konten, dan risiko teknis yang berbeda. Model berikut
            membantu menentukan arah estimasi sebelum proposal final.
          </p>
        </div>
      </section>

      <Section eyebrow="Pricing models" title="Pilih titik awal yang paling dekat dengan kebutuhan Anda." className="bg-white">
        <div className="grid gap-5 md:grid-cols-2">
          {pricingModels.map((model) => (
            <article key={model.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-ink">{model.title}</h3>
              <p className="mt-3 text-lg font-semibold text-accent">{model.price}</p>
              <p className="mt-4 leading-7 text-slate-600">{model.fit}</p>
              <ul className="mt-6 space-y-3">
                {model.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-teal-700" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What affects estimate"
        title="Estimasi final biasanya dipengaruhi kompleksitas konten, integrasi, dan alur pengguna."
        intro="Kami akan membantu memisahkan kebutuhan wajib, nice-to-have, dan fase berikutnya agar budget lebih mudah dikontrol."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {['Jumlah halaman dan variasi konten', 'Kebutuhan backend atau integrasi', 'QA, migrasi, dan support launch'].map(
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
