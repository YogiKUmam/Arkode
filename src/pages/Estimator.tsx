import { ArrowRight, Calculator, CheckCircle2, Clock, Layers3, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { useLanguage } from '../content/LanguageContext';
import { useContent } from '../content/site';

const estimatorCopy = {
  en: {
    seoDescription:
      'Early scope estimator for websites, web apps, dashboards, and maintenance before consulting with Arkode Labs.',
    eyebrow: 'Project estimator',
    title: 'Estimate your project scope before the first consultation.',
    intro:
      'This estimator helps map the project type, page or module count, priority features, and early timeline. The result is not a final price, but a cleaner brief for discussion.',
    outputEyebrow: 'Output',
    outputTitle: 'Early scope + timeline',
    outputText: 'Ready to send to WhatsApp as an initial brief.',
    sectionEyebrow: 'Estimator',
    sectionTitle: 'Choose your project needs.',
    projectLegend: 'Project type',
    pageCount: 'Main pages or modules',
    featureLegend: 'Priority features',
    timelineLegend: 'Timeline',
    recommendation: 'Initial recommendation',
    timelineEstimate: 'Estimated timeline',
    complexity: 'Complexity',
    resultNote:
      'This result helps start the conversation. The final estimate still depends on discovery, detailed scope, assets, and launch priorities.',
    send: 'Send estimate to WhatsApp',
    contact: 'Fill discovery form',
    whatsappGreeting: 'Hi Arkode Labs, I would like to discuss a project based on the estimator.',
    messageLabels: {
      project: 'Project type',
      pages: 'Pages/modules',
      timeline: 'Timeline',
      features: 'Priority features',
      scope: 'Recommended scope',
      estimateTimeline: 'Estimated timeline',
    },
    ranges: ['Starter scope', 'Professional scope', 'Product build scope', 'Custom system scope'],
    timelines: ['2-3 weeks', '3-5 weeks', '5-8 weeks', '8+ weeks'],
    projectOptions: [
      { label: 'Company profile website', base: 18, fit: 'For business profiles, services, portfolios, and clean CTAs.' },
      { label: 'Landing page campaign', base: 14, fit: 'For promotions, offer validation, or lead capture.' },
      { label: 'Custom web app / portal', base: 42, fit: 'For workflows, portals, booking, member areas, or MVP products.' },
      { label: 'Dashboard / internal system', base: 48, fit: 'For data tracking, internal roles, reports, and operations.' },
      { label: 'Maintenance & growth', base: 12, fit: 'For monthly support, content updates, bug fixes, and small improvements.' },
    ],
    featureOptions: [
      { label: 'Copywriting structure', points: 4 },
      { label: 'Blog / insights setup', points: 5 },
      { label: 'CMS-ready content model', points: 8 },
      { label: 'Form / WhatsApp lead flow', points: 4 },
      { label: 'Auth / role access', points: 12 },
      { label: 'Dashboard analytics', points: 10 },
      { label: 'Payment / booking flow', points: 12 },
      { label: 'Maintenance retainer', points: 6 },
    ],
    timelineOptions: [
      { label: 'Relaxed, 6+ weeks', multiplier: 1, note: 'A safe rhythm for discovery and iteration.' },
      { label: 'Normal, 3-5 weeks', multiplier: 1.12, note: 'Works for most websites and early MVPs.' },
      { label: 'Fast, 1-2 weeks', multiplier: 1.28, note: 'Needs strict scope priorities.' },
    ],
  },
  id: {
    seoDescription:
      'Estimasi awal scope website, web app, dashboard, dan maintenance sebelum konsultasi dengan Arkode Labs.',
    eyebrow: 'Project estimator',
    title: 'Hitung gambaran scope sebelum mulai konsultasi.',
    intro:
      'Estimator ini membantu Anda memetakan jenis project, jumlah halaman atau modul, fitur prioritas, dan timeline awal. Hasilnya bukan harga final, tetapi brief awal yang lebih siap didiskusikan.',
    outputEyebrow: 'Output',
    outputTitle: 'Scope + timeline awal',
    outputText: 'Bisa langsung dikirim ke WhatsApp sebagai brief.',
    sectionEyebrow: 'Estimator',
    sectionTitle: 'Pilih kebutuhan project Anda.',
    projectLegend: 'Jenis project',
    pageCount: 'Jumlah halaman atau modul utama',
    featureLegend: 'Fitur prioritas',
    timelineLegend: 'Timeline',
    recommendation: 'Rekomendasi awal',
    timelineEstimate: 'Estimasi timeline',
    complexity: 'Kompleksitas',
    resultNote:
      'Hasil ini membantu memulai diskusi. Estimasi final tetap mengikuti discovery, detail scope, aset, dan prioritas launch.',
    send: 'Kirim estimasi ke WhatsApp',
    contact: 'Isi discovery form',
    whatsappGreeting: 'Halo Arkode Labs, saya ingin diskusi berdasarkan estimator project.',
    messageLabels: {
      project: 'Jenis project',
      pages: 'Jumlah halaman/modul',
      timeline: 'Timeline',
      features: 'Fitur prioritas',
      scope: 'Rekomendasi scope',
      estimateTimeline: 'Estimasi timeline',
    },
    ranges: ['Starter scope', 'Professional scope', 'Product build scope', 'Custom system scope'],
    timelines: ['2-3 minggu', '3-5 minggu', '5-8 minggu', '8+ minggu'],
    projectOptions: [
      { label: 'Company profile website', base: 18, fit: 'Untuk profil bisnis, layanan, portfolio, dan CTA yang rapi.' },
      { label: 'Landing page campaign', base: 14, fit: 'Untuk campaign promosi, validasi offer, atau lead capture.' },
      { label: 'Custom web app / portal', base: 42, fit: 'Untuk workflow, portal, booking, member area, atau MVP produk.' },
      { label: 'Dashboard / internal system', base: 48, fit: 'Untuk tracking data, role internal, laporan, dan proses operasional.' },
      { label: 'Maintenance & growth', base: 12, fit: 'Untuk support bulanan, update konten, bug fix, dan improvement kecil.' },
    ],
    featureOptions: [
      { label: 'Copywriting structure', points: 4 },
      { label: 'Blog / insights setup', points: 5 },
      { label: 'CMS-ready content model', points: 8 },
      { label: 'Form / WhatsApp lead flow', points: 4 },
      { label: 'Auth / role access', points: 12 },
      { label: 'Dashboard analytics', points: 10 },
      { label: 'Payment / booking flow', points: 12 },
      { label: 'Maintenance retainer', points: 6 },
    ],
    timelineOptions: [
      { label: 'Santai, 6+ minggu', multiplier: 1, note: 'Ritme aman untuk discovery dan iterasi.' },
      { label: 'Normal, 3-5 minggu', multiplier: 1.12, note: 'Cocok untuk mayoritas website dan MVP awal.' },
      { label: 'Cepat, 1-2 minggu', multiplier: 1.28, note: 'Butuh prioritas scope yang ketat.' },
    ],
  },
};

function formatRange(score: number, ranges: string[]) {
  if (score < 24) return ranges[0];
  if (score < 48) return ranges[1];
  if (score < 74) return ranges[2];
  return ranges[3];
}

function formatTimeline(score: number, timelines: string[]) {
  if (score < 24) return timelines[0];
  if (score < 48) return timelines[1];
  if (score < 74) return timelines[2];
  return timelines[3];
}

export function Estimator() {
  const { language } = useLanguage();
  const { site } = useContent();
  const copy = estimatorCopy[language];
  const [projectIndex, setProjectIndex] = useState(0);
  const [pageCount, setPageCount] = useState(5);
  const [timelineIndex, setTimelineIndex] = useState(1);
  const [featureIndexes, setFeatureIndexes] = useState<number[]>([3]);

  const selectedProject = copy.projectOptions[projectIndex] ?? copy.projectOptions[0];
  const selectedTimeline = copy.timelineOptions[timelineIndex] ?? copy.timelineOptions[1];

  const estimate = useMemo(() => {
    const featureScore = featureIndexes.reduce((total, featureIndex) => {
      const option = copy.featureOptions[featureIndex];
      return total + (option?.points ?? 0);
    }, 0);
    const pageScore = Math.max(pageCount - 1, 0) * 2;
    const score = Math.round((selectedProject.base + pageScore + featureScore) * selectedTimeline.multiplier);

    return {
      score,
      scope: formatRange(score, copy.ranges),
      timeline: formatTimeline(score, copy.timelines),
    };
  }, [copy.featureOptions, copy.ranges, copy.timelines, featureIndexes, pageCount, selectedProject.base, selectedTimeline.multiplier]);

  function toggleFeature(featureIndex: number) {
    setFeatureIndexes((current) =>
      current.includes(featureIndex) ? current.filter((item) => item !== featureIndex) : [...current, featureIndex],
    );
  }

  const selectedFeatures = featureIndexes.map((featureIndex) => copy.featureOptions[featureIndex]?.label).filter(Boolean);

  const whatsappMessage = encodeURIComponent(
    [
      copy.whatsappGreeting,
      '',
      `${copy.messageLabels.project}: ${selectedProject.label}`,
      `${copy.messageLabels.pages}: ${pageCount}`,
      `${copy.messageLabels.timeline}: ${selectedTimeline.label}`,
      `${copy.messageLabels.features}: ${selectedFeatures.length > 0 ? selectedFeatures.join(', ') : '-'}`,
      `${copy.messageLabels.scope}: ${estimate.scope}`,
      `${copy.messageLabels.estimateTimeline}: ${estimate.timeline}`,
    ].join('\n'),
  );

  return (
    <>
      <Seo
        title={`Project Estimator | ${site.name}`}
        description={copy.seoDescription}
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] tech-grid-bg opacity-60" aria-hidden="true" />
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_0.55fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{copy.eyebrow}</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {copy.intro}
            </p>
          </div>
          <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
            <Calculator aria-hidden="true" className="text-accent" size={28} />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">{copy.outputEyebrow}</p>
            <p className="mt-2 text-2xl font-semibold text-navy">{copy.outputTitle}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{copy.outputText}</p>
          </div>
        </div>
      </section>

      <Section eyebrow={copy.sectionEyebrow} title={copy.sectionTitle} className="bg-white">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr] lg:items-start">
          <div className="rounded-lg border border-line bg-white p-6 shadow-panel sm:p-8">
            <div className="grid gap-6">
              <fieldset>
                <legend className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{copy.projectLegend}</legend>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {copy.projectOptions.map((option, index) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setProjectIndex(index)}
                      className={`rounded-md border p-4 text-left transition ${
                        projectIndex === index
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
                {copy.pageCount}
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
                <legend className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{copy.featureLegend}</legend>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {copy.featureOptions.map((feature, index) => {
                    const selected = featureIndexes.includes(index);

                    return (
                      <button
                        key={feature.label}
                        type="button"
                        onClick={() => toggleFeature(index)}
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
                <legend className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{copy.timelineLegend}</legend>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {copy.timelineOptions.map((option, index) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setTimelineIndex(index)}
                      className={`rounded-md border p-4 text-left transition ${
                        timelineIndex === index
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
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan">{copy.recommendation}</p>
            <h2 className="mt-3 text-3xl font-semibold">{estimate.scope}</h2>
            <div className="mt-6 grid gap-3">
              <div className="rounded-md border border-white/10 bg-white/10 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-cyan">
                  <Clock aria-hidden="true" size={17} />
                  {copy.timelineEstimate}
                </p>
                <p className="mt-2 text-2xl font-semibold">{estimate.timeline}</p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/10 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-cyan">
                  <Layers3 aria-hidden="true" size={17} />
                  {copy.complexity}
                </p>
                <p className="mt-2 text-2xl font-semibold">{estimate.score}/100</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              {copy.resultNote}
            </p>
            <div className="mt-6 grid gap-3">
              <a
                href={`https://wa.me/${site.phone.replace(/\D/g, '')}?text=${whatsappMessage}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-paper"
              >
                {copy.send}
                <Send aria-hidden="true" size={17} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan hover:text-cyan"
              >
                {copy.contact}
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
