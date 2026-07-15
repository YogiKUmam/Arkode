import { ArrowRight, Calculator, CheckCircle2, Clock, Layers3, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { site } from '../content/site';

const projectOptions = [
  { label: 'Company profile website', base: 18, fit: 'Untuk profil bisnis, layanan, portfolio, dan CTA yang rapi.' },
  { label: 'Landing page campaign', base: 14, fit: 'Untuk campaign promosi, validasi offer, atau lead capture.' },
  { label: 'Custom web app / portal', base: 42, fit: 'Untuk workflow, portal, booking, member area, atau MVP produk.' },
  { label: 'Dashboard / internal system', base: 48, fit: 'Untuk tracking data, role internal, laporan, dan proses operasional.' },
  { label: 'Maintenance & growth', base: 12, fit: 'Untuk support bulanan, update konten, bug fix, dan improvement kecil.' },
];

const featureOptions = [
  { label: 'Copywriting structure', points: 4 },
  { label: 'Blog / insights setup', points: 5 },
  { label: 'CMS-ready content model', points: 8 },
  { label: 'Form / WhatsApp lead flow', points: 4 },
  { label: 'Auth / role access', points: 12 },
  { label: 'Dashboard analytics', points: 10 },
  { label: 'Payment / booking flow', points: 12 },
  { label: 'Maintenance retainer', points: 6 },
];

const timelineOptions = [
  { label: 'Santai, 6+ minggu', multiplier: 1, note: 'Ritme aman untuk discovery dan iterasi.' },
  { label: 'Normal, 3-5 minggu', multiplier: 1.12, note: 'Cocok untuk mayoritas website dan MVP awal.' },
  { label: 'Cepat, 1-2 minggu', multiplier: 1.28, note: 'Butuh prioritas scope yang ketat.' },
];

function formatRange(score: number) {
  if (score < 24) return 'Starter scope';
  if (score < 48) return 'Professional scope';
  if (score < 74) return 'Product build scope';
  return 'Custom system scope';
}

function formatTimeline(score: number) {
  if (score < 24) return '2-3 minggu';
  if (score < 48) return '3-5 minggu';
  if (score < 74) return '5-8 minggu';
  return '8+ minggu';
}

export function Estimator() {
  const [projectType, setProjectType] = useState(projectOptions[0].label);
  const [pageCount, setPageCount] = useState(5);
  const [timeline, setTimeline] = useState(timelineOptions[1].label);
  const [features, setFeatures] = useState<string[]>(['Form / WhatsApp lead flow']);

  const selectedProject = projectOptions.find((option) => option.label === projectType) ?? projectOptions[0];
  const selectedTimeline = timelineOptions.find((option) => option.label === timeline) ?? timelineOptions[1];

  const estimate = useMemo(() => {
    const featureScore = features.reduce((total, feature) => {
      const option = featureOptions.find((item) => item.label === feature);
      return total + (option?.points ?? 0);
    }, 0);
    const pageScore = Math.max(pageCount - 1, 0) * 2;
    const score = Math.round((selectedProject.base + pageScore + featureScore) * selectedTimeline.multiplier);

    return {
      score,
      scope: formatRange(score),
      timeline: formatTimeline(score),
    };
  }, [features, pageCount, selectedProject.base, selectedTimeline.multiplier]);

  function toggleFeature(feature: string) {
    setFeatures((current) =>
      current.includes(feature) ? current.filter((item) => item !== feature) : [...current, feature],
    );
  }

  const whatsappMessage = encodeURIComponent(
    [
      'Halo Arkode Labs, saya ingin diskusi berdasarkan estimator project.',
      '',
      `Jenis project: ${projectType}`,
      `Jumlah halaman/modul: ${pageCount}`,
      `Timeline: ${timeline}`,
      `Fitur prioritas: ${features.length > 0 ? features.join(', ') : '-'}`,
      `Rekomendasi scope: ${estimate.scope}`,
      `Estimasi timeline: ${estimate.timeline}`,
    ].join('\n'),
  );

  return (
    <>
      <Seo
        title={`Project Estimator | ${site.name}`}
        description="Estimasi awal scope website, web app, dashboard, dan maintenance sebelum konsultasi dengan Arkode Labs."
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] tech-grid-bg opacity-60" aria-hidden="true" />
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_0.55fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Project estimator</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-5xl">
              Hitung gambaran scope sebelum mulai konsultasi.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Estimator ini membantu Anda memetakan jenis project, jumlah halaman atau modul, fitur prioritas,
              dan timeline awal. Hasilnya bukan harga final, tetapi brief awal yang lebih siap didiskusikan.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
            <Calculator aria-hidden="true" className="text-accent" size={28} />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">Output</p>
            <p className="mt-2 text-2xl font-semibold text-navy">Scope + timeline awal</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Bisa langsung dikirim ke WhatsApp sebagai brief.</p>
          </div>
        </div>
      </section>

      <Section eyebrow="Estimator" title="Pilih kebutuhan project Anda." className="bg-white">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr] lg:items-start">
          <div className="rounded-lg border border-line bg-white p-6 shadow-panel sm:p-8">
            <div className="grid gap-6">
              <fieldset>
                <legend className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Jenis project</legend>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {projectOptions.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setProjectType(option.label)}
                      className={`rounded-md border p-4 text-left transition ${
                        projectType === option.label
                          ? 'border-accent bg-paper text-navy shadow-sm'
                          : 'border-line bg-white text-slate-700 hover:border-accent'
                      }`}
                    >
                      <span className="font-semibold">{option.label}</span>
                      <span className="mt-2 block text-sm leading-6 text-slate-600">{option.fit}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="grid gap-3 text-sm font-semibold text-navy">
                Jumlah halaman atau modul utama
                <input
                  type="range"
                  min="1"
                  max="18"
                  value={pageCount}
                  onChange={(event) => setPageCount(Number(event.target.value))}
                  className="w-full accent-[#2563eb]"
                />
                <span className="text-3xl font-semibold text-accent">{pageCount}</span>
              </label>

              <fieldset>
                <legend className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Fitur prioritas</legend>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {featureOptions.map((feature) => {
                    const selected = features.includes(feature.label);

                    return (
                      <button
                        key={feature.label}
                        type="button"
                        onClick={() => toggleFeature(feature.label)}
                        className={`flex items-center gap-3 rounded-md border p-3 text-left text-sm font-semibold transition ${
                          selected
                            ? 'border-accent bg-paper text-navy'
                            : 'border-line bg-white text-slate-700 hover:border-accent'
                        }`}
                      >
                        <CheckCircle2 aria-hidden="true" className={selected ? 'text-accent' : 'text-slate-300'} size={18} />
                        {feature.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Timeline</legend>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {timelineOptions.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setTimeline(option.label)}
                      className={`rounded-md border p-4 text-left transition ${
                        timeline === option.label
                          ? 'border-accent bg-paper text-navy shadow-sm'
                          : 'border-line bg-white text-slate-700 hover:border-accent'
                      }`}
                    >
                      <span className="font-semibold">{option.label}</span>
                      <span className="mt-2 block text-sm leading-6 text-slate-600">{option.note}</span>
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          <aside className="sticky top-24 rounded-lg border border-line bg-navy p-6 text-white shadow-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan">Rekomendasi awal</p>
            <h2 className="mt-3 text-3xl font-semibold">{estimate.scope}</h2>
            <div className="mt-6 grid gap-3">
              <div className="rounded-md border border-white/10 bg-white/10 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-cyan">
                  <Clock aria-hidden="true" size={17} />
                  Estimasi timeline
                </p>
                <p className="mt-2 text-2xl font-semibold">{estimate.timeline}</p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/10 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-cyan">
                  <Layers3 aria-hidden="true" size={17} />
                  Kompleksitas
                </p>
                <p className="mt-2 text-2xl font-semibold">{estimate.score}/100</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              Hasil ini membantu memulai diskusi. Estimasi final tetap mengikuti discovery, detail scope, aset, dan prioritas launch.
            </p>
            <div className="mt-6 grid gap-3">
              <a
                href={`https://wa.me/${site.phone.replace(/\D/g, '')}?text=${whatsappMessage}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-paper"
              >
                Kirim estimasi ke WhatsApp
                <Send aria-hidden="true" size={17} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan hover:text-cyan"
              >
                Isi discovery form
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
