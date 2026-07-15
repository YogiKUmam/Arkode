import { ArrowLeft, ArrowRight, CheckCircle2, Mail, Phone, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { site } from '../content/site';

const projectTypes = [
  'Company profile website',
  'Landing page campaign',
  'Custom web app',
  'Dashboard / internal system',
  'Maintenance / retainer',
  'Belum yakin',
];

const goals = [
  'Meningkatkan kredibilitas brand',
  'Menghasilkan leads/inquiry',
  'Merampingkan proses internal',
  'Membuat MVP atau produk digital',
  'Merawat dan mengembangkan website berjalan',
];

const timelines = ['1-2 minggu', '3-5 minggu', '6-8 minggu', 'Masih fleksibel'];
const budgets = ['Belum ditentukan', 'Starter', 'Professional', 'Custom project', 'Retainer bulanan'];

type DiscoveryState = {
  name: string;
  company: string;
  contact: string;
  projectType: string;
  goal: string;
  timeline: string;
  budget: string;
  message: string;
};

const initialDiscovery: DiscoveryState = {
  name: '',
  company: '',
  contact: '',
  projectType: '',
  goal: '',
  timeline: '',
  budget: '',
  message: '',
};

export function Contact() {
  const [step, setStep] = useState(0);
  const [discovery, setDiscovery] = useState<DiscoveryState>(initialDiscovery);

  function updateField<Field extends keyof DiscoveryState>(field: Field, value: DiscoveryState[Field]) {
    setDiscovery((current) => ({ ...current, [field]: value }));
  }

  const stepIsValid = useMemo(() => {
    if (step === 0) return discovery.projectType && discovery.goal;
    if (step === 1) return discovery.timeline && discovery.budget;
    if (step === 2) return discovery.name && discovery.contact;
    return discovery.message;
  }, [discovery, step]);

  const summaryLines = [
    `Nama: ${discovery.name || '-'}`,
    `Perusahaan: ${discovery.company || '-'}`,
    `Kontak: ${discovery.contact || '-'}`,
    `Jenis project: ${discovery.projectType || '-'}`,
    `Tujuan utama: ${discovery.goal || '-'}`,
    `Timeline: ${discovery.timeline || '-'}`,
    `Budget/scope: ${discovery.budget || '-'}`,
    '',
    `Catatan: ${discovery.message || '-'}`,
  ];

  const whatsappUrl = `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
    ['Halo Arkode Labs, saya ingin konsultasi project.', '', ...summaryLines].join('\n'),
  )}`;

  function nextStep() {
    if (stepIsValid) setStep((current) => Math.min(current + 1, 3));
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 0));
  }

  return (
    <>
      <Seo
        title={`Contact | ${site.name}`}
        description="Hubungi Arkode Labs melalui discovery form untuk diskusi website, web app, dashboard, UI/UX, atau maintenance project."
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[460px] tech-grid-bg opacity-55" aria-hidden="true" />
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Discovery form</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-5xl">
              Ceritakan kebutuhan digital yang ingin Anda rapikan.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Jawab beberapa pertanyaan singkat agar brief awal Anda langsung rapi saat masuk ke WhatsApp.
              Kami akan membalas dengan scope check dan rekomendasi langkah berikutnya.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Response signal</p>
            <p className="mt-3 text-3xl font-semibold text-navy">1 hari kerja</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Untuk reply awal, scope check, dan rekomendasi langkah berikutnya.</p>
          </div>
        </div>
      </section>

      <Section eyebrow="Start a conversation" title="Susun brief project dalam 4 langkah." className="bg-white">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr] lg:items-start">
          <div className="rounded-lg border border-line bg-white p-6 shadow-panel sm:p-8">
            <div className="mb-8 grid gap-3 sm:grid-cols-4" aria-label="Discovery progress">
              {['Project', 'Scope', 'Contact', 'Brief'].map((label, index) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setStep(index)}
                  className={`rounded-md border px-3 py-3 text-left text-sm font-semibold transition ${
                    step === index
                      ? 'border-accent bg-paper text-navy'
                      : index < step
                        ? 'border-line bg-white text-accent'
                        : 'border-line bg-white text-slate-500'
                  }`}
                >
                  <span className="block text-xs uppercase tracking-[0.14em]">Step {index + 1}</span>
                  {label}
                </button>
              ))}
            </div>

            {step === 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-navy">Apa yang ingin dibuat?</h2>
                <p className="mt-3 leading-7 text-slate-600">Pilih tipe project dan tujuan utamanya.</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    Jenis project
                    <select
                      required
                      value={discovery.projectType}
                      onChange={(event) => updateField('projectType', event.target.value)}
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                    >
                      <option value="">Pilih jenis project</option>
                      {projectTypes.map((projectType) => (
                        <option key={projectType} value={projectType}>
                          {projectType}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    Tujuan utama
                    <select
                      required
                      value={discovery.goal}
                      onChange={(event) => updateField('goal', event.target.value)}
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                    >
                      <option value="">Pilih tujuan</option>
                      {goals.map((goal) => (
                        <option key={goal} value={goal}>
                          {goal}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="text-2xl font-semibold text-navy">Seberapa cepat dan sebesar apa scope-nya?</h2>
                <p className="mt-3 leading-7 text-slate-600">Informasi ini membantu kami memberi rekomendasi prioritas.</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    Timeline
                    <select
                      required
                      value={discovery.timeline}
                      onChange={(event) => updateField('timeline', event.target.value)}
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                    >
                      <option value="">Pilih timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    Budget / scope
                    <select
                      required
                      value={discovery.budget}
                      onChange={(event) => updateField('budget', event.target.value)}
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                    >
                      <option value="">Pilih gambaran scope</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <Link
                  to="/estimator"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-navy"
                >
                  Belum yakin? Buka project estimator
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl font-semibold text-navy">Bagaimana kami bisa menghubungi Anda?</h2>
                <p className="mt-3 leading-7 text-slate-600">Isi kontak utama agar kami bisa membalas dengan konteks yang tepat.</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    Nama
                    <input
                      required
                      value={discovery.name}
                      onChange={(event) => updateField('name', event.target.value)}
                      autoComplete="name"
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                      placeholder="Nama Anda"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    Perusahaan
                    <input
                      value={discovery.company}
                      onChange={(event) => updateField('company', event.target.value)}
                      autoComplete="organization"
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                      placeholder="Nama perusahaan"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-ink md:col-span-2">
                    Email atau WhatsApp
                    <input
                      required
                      value={discovery.contact}
                      onChange={(event) => updateField('contact', event.target.value)}
                      autoComplete="email"
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                      placeholder="email@domain.com atau nomor WA"
                    />
                  </label>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-semibold text-navy">Tambahkan catatan singkat.</h2>
                <p className="mt-3 leading-7 text-slate-600">Ceritakan kondisi saat ini, referensi, atau kendala utama yang ingin diselesaikan.</p>
                <label className="mt-6 grid gap-2 text-sm font-semibold text-ink">
                  Pesan
                  <textarea
                    required
                    rows={7}
                    value={discovery.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    className="resize-y rounded-md border border-line bg-white px-4 py-3 font-normal leading-6 focus:border-accent"
                    placeholder="Contoh: kami butuh website profil 5 halaman, ingin terlihat lebih kredibel, dan perlu CTA WhatsApp yang jelas."
                  />
                </label>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={previousStep}
                disabled={step === 0}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-semibold text-navy transition hover:border-accent disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft aria-hidden="true" size={16} />
                Kembali
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!stepIsValid}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Lanjut
                  <ArrowRight aria-hidden="true" size={16} />
                </button>
              ) : (
                <a
                  href={whatsappUrl}
                  className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition ${
                    stepIsValid
                      ? 'bg-accent text-white hover:bg-navy'
                      : 'pointer-events-none bg-slate-300 text-white'
                  }`}
                >
                  Kirim brief via WhatsApp
                  <Send aria-hidden="true" size={16} />
                </a>
              )}
            </div>
          </div>

          <aside className="rounded-lg border border-line bg-navy p-6 text-white shadow-panel">
            <h2 className="text-2xl font-semibold text-white">Brief preview</h2>
            <p className="mt-3 leading-7 text-slate-300">
              Ringkasan ini akan dibawa ke WhatsApp agar diskusi pertama lebih rapi.
            </p>
            <dl className="mt-6 grid gap-3">
              {summaryLines.filter(Boolean).map((line) => (
                <div key={line} className="rounded-md border border-white/10 bg-white/10 p-3 text-sm leading-6 text-slate-200">
                  {line || '-'}
                </div>
              ))}
            </dl>
            <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-cyan">
                  <Mail aria-hidden="true" size={16} />
                  Email
                </h3>
                <a className="mt-2 block text-slate-200 hover:text-cyan" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-cyan">
                  <Phone aria-hidden="true" size={16} />
                  Phone
                </h3>
                <a className="mt-2 block text-slate-200 hover:text-cyan" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                  {site.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section eyebrow="Before contact" title="Belum yakin scope project Anda masuk kategori apa?">
        <Link
          to="/estimator"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white transition hover:bg-navy"
        >
          Buka project estimator
          <CheckCircle2 aria-hidden="true" size={18} />
        </Link>
      </Section>
    </>
  );
}
