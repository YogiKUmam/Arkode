import { ArrowLeft, ArrowRight, CheckCircle2, Mail, Phone, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { useLanguage } from '../content/LanguageContext';
import { useContent } from '../content/site';

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

const contactCopy = {
  en: {
    seoDescription:
      'Contact Arkode Labs through a discovery form for websites, web apps, dashboards, UI/UX, or maintenance projects.',
    eyebrow: 'Discovery form',
    title: 'Tell us what digital solution you want to make cleaner.',
    intro:
      'Answer a few short questions so your initial brief is organized before it goes to WhatsApp. We will respond with a scope check and recommended next steps.',
    responseSignal: 'Response signal',
    responseTime: '1 business day',
    responseText: 'For initial replies, scope checks, and recommended next steps.',
    sectionEyebrow: 'Start a conversation',
    sectionTitle: 'Build your project brief in 4 steps.',
    steps: ['Project', 'Scope', 'Contact', 'Brief'],
    projectTitle: 'What do you want to build?',
    projectText: 'Choose the project type and main goal.',
    projectType: 'Project type',
    projectPlaceholder: 'Choose project type',
    goal: 'Main goal',
    goalPlaceholder: 'Choose goal',
    scopeTitle: 'How fast and how large is the scope?',
    scopeText: 'This helps us recommend priorities.',
    timeline: 'Timeline',
    timelinePlaceholder: 'Choose timeline',
    budget: 'Budget / scope',
    budgetPlaceholder: 'Choose scope range',
    estimatorLink: 'Not sure yet? Open the project estimator',
    contactTitle: 'How can we contact you?',
    contactText: 'Add your main contact so we can respond with the right context.',
    name: 'Name',
    namePlaceholder: 'Your name',
    company: 'Company',
    companyPlaceholder: 'Company name',
    emailOrWhatsapp: 'Email or WhatsApp',
    contactPlaceholder: 'email@domain.com or WhatsApp number',
    briefTitle: 'Add a short note.',
    briefText: 'Tell us the current situation, references, or main problem you want to solve.',
    message: 'Message',
    messagePlaceholder:
      'Example: we need a 5-page company profile website, want to look more credible, and need a clear WhatsApp CTA.',
    back: 'Back',
    next: 'Next',
    send: 'Send brief via WhatsApp',
    briefPreview: 'Brief preview',
    briefPreviewText: 'This summary will go to WhatsApp so the first discussion is cleaner.',
    beforeEyebrow: 'Before contact',
    beforeTitle: 'Not sure which project category fits your needs?',
    estimatorCta: 'Open project estimator',
    whatsappGreeting: 'Hi Arkode Labs, I would like to discuss a project.',
    summaryLabels: {
      name: 'Name',
      company: 'Company',
      contact: 'Contact',
      projectType: 'Project type',
      goal: 'Main goal',
      timeline: 'Timeline',
      budget: 'Budget/scope',
      note: 'Note',
    },
    projectTypes: [
      'Company profile website',
      'Landing page campaign',
      'Custom web app',
      'Dashboard / internal system',
      'Maintenance / retainer',
      'Not sure yet',
    ],
    goals: [
      'Improve brand credibility',
      'Generate leads/inquiries',
      'Streamline internal processes',
      'Build an MVP or digital product',
      'Maintain and grow an existing website',
    ],
    timelines: ['1-2 weeks', '3-5 weeks', '6-8 weeks', 'Still flexible'],
    budgets: ['Not defined yet', 'Starter', 'Professional', 'Custom project', 'Monthly retainer'],
  },
  id: {
    seoDescription:
      'Hubungi Arkode Labs melalui discovery form untuk diskusi website, web app, dashboard, UI/UX, atau maintenance project.',
    eyebrow: 'Discovery form',
    title: 'Ceritakan kebutuhan digital yang ingin Anda rapikan.',
    intro:
      'Jawab beberapa pertanyaan singkat agar brief awal Anda langsung rapi saat masuk ke WhatsApp. Kami akan membalas dengan scope check dan rekomendasi langkah berikutnya.',
    responseSignal: 'Response signal',
    responseTime: '1 hari kerja',
    responseText: 'Untuk reply awal, scope check, dan rekomendasi langkah berikutnya.',
    sectionEyebrow: 'Start a conversation',
    sectionTitle: 'Susun brief project dalam 4 langkah.',
    steps: ['Project', 'Scope', 'Contact', 'Brief'],
    projectTitle: 'Apa yang ingin dibuat?',
    projectText: 'Pilih tipe project dan tujuan utamanya.',
    projectType: 'Jenis project',
    projectPlaceholder: 'Pilih jenis project',
    goal: 'Tujuan utama',
    goalPlaceholder: 'Pilih tujuan',
    scopeTitle: 'Seberapa cepat dan sebesar apa scope-nya?',
    scopeText: 'Informasi ini membantu kami memberi rekomendasi prioritas.',
    timeline: 'Timeline',
    timelinePlaceholder: 'Pilih timeline',
    budget: 'Budget / scope',
    budgetPlaceholder: 'Pilih gambaran scope',
    estimatorLink: 'Belum yakin? Buka project estimator',
    contactTitle: 'Bagaimana kami bisa menghubungi Anda?',
    contactText: 'Isi kontak utama agar kami bisa membalas dengan konteks yang tepat.',
    name: 'Nama',
    namePlaceholder: 'Nama Anda',
    company: 'Perusahaan',
    companyPlaceholder: 'Nama perusahaan',
    emailOrWhatsapp: 'Email atau WhatsApp',
    contactPlaceholder: 'email@domain.com atau nomor WA',
    briefTitle: 'Tambahkan catatan singkat.',
    briefText: 'Ceritakan kondisi saat ini, referensi, atau kendala utama yang ingin diselesaikan.',
    message: 'Pesan',
    messagePlaceholder:
      'Contoh: kami butuh website profil 5 halaman, ingin terlihat lebih kredibel, dan perlu CTA WhatsApp yang jelas.',
    back: 'Kembali',
    next: 'Lanjut',
    send: 'Kirim brief via WhatsApp',
    briefPreview: 'Brief preview',
    briefPreviewText: 'Ringkasan ini akan dibawa ke WhatsApp agar diskusi pertama lebih rapi.',
    beforeEyebrow: 'Before contact',
    beforeTitle: 'Belum yakin scope project Anda masuk kategori apa?',
    estimatorCta: 'Buka project estimator',
    whatsappGreeting: 'Halo Arkode Labs, saya ingin konsultasi project.',
    summaryLabels: {
      name: 'Nama',
      company: 'Perusahaan',
      contact: 'Kontak',
      projectType: 'Jenis project',
      goal: 'Tujuan utama',
      timeline: 'Timeline',
      budget: 'Budget/scope',
      note: 'Catatan',
    },
    projectTypes,
    goals,
    timelines,
    budgets,
  },
};

export function Contact() {
  const { language } = useLanguage();
  const { site } = useContent();
  const copy = contactCopy[language];
  const projectTypes = copy.projectTypes;
  const goals = copy.goals;
  const timelines = copy.timelines;
  const budgets = copy.budgets;
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
    `${copy.summaryLabels.name}: ${discovery.name || '-'}`,
    `${copy.summaryLabels.company}: ${discovery.company || '-'}`,
    `${copy.summaryLabels.contact}: ${discovery.contact || '-'}`,
    `${copy.summaryLabels.projectType}: ${discovery.projectType || '-'}`,
    `${copy.summaryLabels.goal}: ${discovery.goal || '-'}`,
    `${copy.summaryLabels.timeline}: ${discovery.timeline || '-'}`,
    `${copy.summaryLabels.budget}: ${discovery.budget || '-'}`,
    '',
    `${copy.summaryLabels.note}: ${discovery.message || '-'}`,
  ];

  const whatsappUrl = `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
    [copy.whatsappGreeting, '', ...summaryLines].join('\n'),
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
        description={copy.seoDescription}
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[460px] tech-grid-bg opacity-55" aria-hidden="true" />
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{copy.eyebrow}</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {copy.intro}
            </p>
          </div>
          <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{copy.responseSignal}</p>
            <p className="mt-3 text-3xl font-semibold text-navy">{copy.responseTime}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{copy.responseText}</p>
          </div>
        </div>
      </section>

      <Section eyebrow={copy.sectionEyebrow} title={copy.sectionTitle} className="bg-white">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr] lg:items-start">
          <div className="rounded-lg border border-line bg-white p-6 shadow-panel sm:p-8">
            <div className="mb-8 grid gap-3 sm:grid-cols-4" aria-label="Discovery progress">
              {copy.steps.map((label, index) => (
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
                <h2 className="text-2xl font-semibold text-navy">{copy.projectTitle}</h2>
                <p className="mt-3 leading-7 text-slate-600">{copy.projectText}</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    {copy.projectType}
                    <select
                      required
                      value={discovery.projectType}
                      onChange={(event) => updateField('projectType', event.target.value)}
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                    >
                      <option value="">{copy.projectPlaceholder}</option>
                      {projectTypes.map((projectType) => (
                        <option key={projectType} value={projectType}>
                          {projectType}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    {copy.goal}
                    <select
                      required
                      value={discovery.goal}
                      onChange={(event) => updateField('goal', event.target.value)}
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                    >
                      <option value="">{copy.goalPlaceholder}</option>
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
                <h2 className="text-2xl font-semibold text-navy">{copy.scopeTitle}</h2>
                <p className="mt-3 leading-7 text-slate-600">{copy.scopeText}</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    {copy.timeline}
                    <select
                      required
                      value={discovery.timeline}
                      onChange={(event) => updateField('timeline', event.target.value)}
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                    >
                      <option value="">{copy.timelinePlaceholder}</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    {copy.budget}
                    <select
                      required
                      value={discovery.budget}
                      onChange={(event) => updateField('budget', event.target.value)}
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                    >
                      <option value="">{copy.budgetPlaceholder}</option>
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
                  {copy.estimatorLink}
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl font-semibold text-navy">{copy.contactTitle}</h2>
                <p className="mt-3 leading-7 text-slate-600">{copy.contactText}</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    {copy.name}
                    <input
                      required
                      value={discovery.name}
                      onChange={(event) => updateField('name', event.target.value)}
                      autoComplete="name"
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                      placeholder={copy.namePlaceholder}
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    {copy.company}
                    <input
                      value={discovery.company}
                      onChange={(event) => updateField('company', event.target.value)}
                      autoComplete="organization"
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                      placeholder={copy.companyPlaceholder}
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-ink md:col-span-2">
                    {copy.emailOrWhatsapp}
                    <input
                      required
                      value={discovery.contact}
                      onChange={(event) => updateField('contact', event.target.value)}
                      autoComplete="email"
                      className="rounded-md border border-line bg-white px-4 py-3 font-normal focus:border-accent"
                      placeholder={copy.contactPlaceholder}
                    />
                  </label>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-semibold text-navy">{copy.briefTitle}</h2>
                <p className="mt-3 leading-7 text-slate-600">{copy.briefText}</p>
                <label className="mt-6 grid gap-2 text-sm font-semibold text-ink">
                  {copy.message}
                  <textarea
                    required
                    rows={7}
                    value={discovery.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    className="resize-y rounded-md border border-line bg-white px-4 py-3 font-normal leading-6 focus:border-accent"
                    placeholder={copy.messagePlaceholder}
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
                {copy.back}
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!stepIsValid}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {copy.next}
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
                  {copy.send}
                  <Send aria-hidden="true" size={16} />
                </a>
              )}
            </div>
          </div>

          <aside className="rounded-lg border border-line bg-navy p-6 text-white shadow-panel">
            <h2 className="text-2xl font-semibold text-white">{copy.briefPreview}</h2>
            <p className="mt-3 leading-7 text-slate-300">
              {copy.briefPreviewText}
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

      <Section eyebrow={copy.beforeEyebrow} title={copy.beforeTitle}>
        <Link
          to="/estimator"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white transition hover:bg-navy"
        >
          {copy.estimatorCta}
          <CheckCircle2 aria-hidden="true" size={18} />
        </Link>
      </Section>
    </>
  );
}
