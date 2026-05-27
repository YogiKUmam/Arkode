import { ArrowLeft, BarChart3, CheckCircle2, Globe2, LineChart, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { ProductMockup } from '../components/VisualMockups';
import { Seo } from '../components/Seo';
import { caseStudies, site } from '../content/site';

const demoContent = {
  'business-website-relaunch': {
    label: 'Company Profile Website',
    title: 'Business Website Relaunch Demo',
    intro:
      'Demo ini memperlihatkan struktur company profile yang fokus pada positioning, layanan, bukti, dan CTA.',
    variant: 'website' as const,
    metrics: [
      { label: 'Pages', value: '7' },
      { label: 'CTA sections', value: '4' },
      { label: 'Launch sprint', value: '3w' },
    ],
    sections: [
      {
        title: 'Hero positioning',
        detail: 'Headline, subheadline, dan CTA disusun agar calon klien langsung memahami nilai bisnis.',
        signal: 'Clear offer',
      },
      {
        title: 'Service clarity',
        detail: 'Setiap layanan memiliki outcome, scope, dan deliverable yang mudah dibandingkan.',
        signal: 'Sales-ready',
      },
      {
        title: 'Proof and testimonials',
        detail: 'Bukti kerja, stack, dan testimoni dibuat dekat dengan CTA agar membangun trust.',
        signal: 'Trust layer',
      },
      {
        title: 'Contact conversion',
        detail: 'Form dan kontak cepat dibuat jelas dengan SLA respons dan privacy note.',
        signal: 'Lead flow',
      },
    ],
  },
  'operations-dashboard-prototype': {
    label: 'Dashboard System',
    title: 'Operations Dashboard Prototype Demo',
    intro:
      'Demo ini memperlihatkan dashboard internal untuk tracking pekerjaan, lead status, dan laporan operasional.',
    variant: 'dashboard' as const,
    metrics: [
      { label: 'Modules', value: '5' },
      { label: 'Roles', value: '3' },
      { label: 'Prototype', value: '5w' },
    ],
    sections: [
      {
        title: 'Lead pipeline',
        detail: 'Simulasi status lead dari inquiry, discovery, proposal, sampai closed.',
        signal: 'Pipeline view',
      },
      {
        title: 'Task tracking',
        detail: 'Tim bisa melihat prioritas, owner, deadline, dan status pekerjaan harian.',
        signal: 'Delivery control',
      },
      {
        title: 'Role-based access',
        detail: 'Akses dipisahkan untuk admin, sales, dan delivery agar workflow lebih aman.',
        signal: 'Access map',
      },
      {
        title: 'Operational reporting',
        detail: 'Ringkasan performa dan bottleneck ditampilkan untuk keputusan mingguan.',
        signal: 'Weekly insight',
      },
    ],
  },
  'campaign-landing-page-system': {
    label: 'Landing Page System',
    title: 'Campaign Landing Page Demo',
    intro:
      'Demo ini memperlihatkan alur landing page untuk campaign promosi dengan pesan, benefit, CTA, dan tracking.',
    variant: 'website' as const,
    metrics: [
      { label: 'Sections', value: '8' },
      { label: 'Lead forms', value: '2' },
      { label: 'Sprint', value: '2w' },
    ],
    sections: [
      {
        title: 'Offer block',
        detail: 'Value proposition, pain point, dan benefit utama diringkas dalam satu layar awal.',
        signal: 'Message fit',
      },
      {
        title: 'Audience segments',
        detail: 'Konten disesuaikan untuk beberapa tipe calon pelanggan tanpa membuat halaman terasa panjang.',
        signal: 'Persona-ready',
      },
      {
        title: 'Conversion path',
        detail: 'CTA primer dan sekunder diarahkan ke form, WhatsApp, atau jadwal konsultasi.',
        signal: 'Lead capture',
      },
      {
        title: 'Tracking setup',
        detail: 'Struktur event disiapkan agar performa campaign bisa dibaca setelah launch.',
        signal: 'Analytics',
      },
    ],
  },
  'education-portal-mvp': {
    label: 'Education Portal',
    title: 'Education Portal MVP Demo',
    intro:
      'Demo ini memperlihatkan portal pembelajaran sederhana untuk kelas, materi, member, dan progress tracking.',
    variant: 'dashboard' as const,
    metrics: [
      { label: 'Roles', value: '3' },
      { label: 'Modules', value: '6' },
      { label: 'Sprint', value: '6w' },
    ],
    sections: [
      {
        title: 'Course catalog',
        detail: 'Admin dapat mengelola kelas, modul, durasi, dan status publikasi materi.',
        signal: 'CMS flow',
      },
      {
        title: 'Member progress',
        detail: 'Progress peserta ditampilkan sebagai ringkasan agar mentor mudah melihat hambatan.',
        signal: 'Learning data',
      },
      {
        title: 'Role dashboard',
        detail: 'Pengalaman admin, mentor, dan member dipisahkan sesuai kebutuhan masing-masing.',
        signal: 'Role clarity',
      },
      {
        title: 'MVP validation',
        detail: 'Fitur awal difokuskan untuk menguji workflow sebelum investasi produk lebih besar.',
        signal: 'Lean scope',
      },
    ],
  },
  'maintenance-growth-retainer': {
    label: 'Maintenance Retainer',
    title: 'Maintenance Growth Retainer Demo',
    intro:
      'Demo ini memperlihatkan cara backlog, monitoring, update konten, dan improvement bulanan dikelola.',
    variant: 'maintenance' as const,
    metrics: [
      { label: 'SLA', value: '2d' },
      { label: 'Checks', value: '12' },
      { label: 'Cadence', value: 'Mo' },
    ],
    sections: [
      {
        title: 'Support queue',
        detail: 'Request masuk diberi prioritas, kategori, dan target penyelesaian.',
        signal: 'SLA view',
      },
      {
        title: 'Health checks',
        detail: 'Checklist performa, broken link, form, dan update konten dipantau berkala.',
        signal: 'Site care',
      },
      {
        title: 'Growth backlog',
        detail: 'Ide improvement kecil dikumpulkan dan dipilih berdasarkan impact.',
        signal: 'Iteration',
      },
      {
        title: 'Monthly report',
        detail: 'Ringkasan pekerjaan dan rekomendasi berikutnya disiapkan untuk owner bisnis.',
        signal: 'Owner update',
      },
    ],
  },
};

export function CaseStudyDemo() {
  const { slug } = useParams();
  const demo = slug ? demoContent[slug as keyof typeof demoContent] : undefined;
  const caseStudy = caseStudies.find((item) => item.slug === slug);
  const [activeSection, setActiveSection] = useState(0);
  const activeDemoSection = demo?.sections[activeSection] ?? demo?.sections[0];
  const previewRows = useMemo(() => {
    if (!demo) {
      return [];
    }

    return demo.sections.map((section, index) => ({
      ...section,
      status: index === activeSection ? 'Selected' : index % 2 === 0 ? 'Ready' : 'In review',
    }));
  }, [activeSection, demo]);

  if (!demo || !caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <>
      <Seo
        title={`${demo.title} | ${site.name}`}
        description={`Live demo preview untuk ${caseStudy.title}.`}
      />

      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-navy"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to case studies
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_0.75fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {demo.label}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
                {demo.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">{demo.intro}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {demo.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-line bg-white p-4 shadow-sm">
                    <p className="text-3xl font-semibold text-navy">{metric.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <ProductMockup variant={demo.variant} title={caseStudy.title} eyebrow="Live demo preview" />
              <div className="rounded-lg border border-line bg-white p-4 shadow-sm">
                <div className="flex flex-wrap gap-2" aria-label="Demo tabs">
                  {demo.sections.map((section, index) => (
                    <button
                      key={section.title}
                      type="button"
                      onClick={() => setActiveSection(index)}
                      className={`rounded-md px-3 py-2 text-xs font-semibold transition ${
                        index === activeSection
                          ? 'bg-accent text-white'
                          : 'border border-line bg-white text-navy hover:border-accent'
                      }`}
                    >
                      {section.signal}
                    </button>
                  ))}
                </div>
                {activeDemoSection && (
                  <div className="mt-4 rounded-md bg-paper p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                      {activeDemoSection.title}
                    </p>
                    <p className="mt-2 leading-7 text-slate-600">{activeDemoSection.detail}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.55fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Demo scope
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-navy">Apa yang ditampilkan di demo ini?</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {demo.sections.map((section, index) => {
              const icons = [Globe2, Users, BarChart3, LineChart];
              const Icon = icons[index % icons.length];

              return (
                <article key={section.title} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                  <Icon aria-hidden="true" className="text-accent" size={22} />
                  <h3 className="mt-4 text-xl font-semibold text-navy">{section.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {section.detail}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container-shell">
          <div className="rounded-lg border border-line bg-white p-6 shadow-panel">
            <div className="grid gap-6 lg:grid-cols-[0.45fr_1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Interactive preview
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-navy">Simulasi bagian yang bisa diklik.</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  Klik baris di kanan untuk melihat bagaimana scope demo bisa diprioritaskan sebelum build.
                </p>
              </div>
              <div className="grid gap-3">
                {previewRows.map((row, index) => (
                  <button
                    key={row.title}
                    type="button"
                    onClick={() => setActiveSection(index)}
                    className={`grid gap-2 rounded-md border p-4 text-left transition ${
                      index === activeSection
                        ? 'border-accent bg-paper'
                        : 'border-line bg-white hover:border-accent'
                    }`}
                  >
                    <span className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-semibold text-navy">{row.title}</span>
                      <span className="rounded-md bg-white px-2 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                        {row.status}
                      </span>
                    </span>
                    <span className="text-sm leading-6 text-slate-600">{row.detail}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-shell rounded-lg border border-line bg-navy p-6 text-white shadow-panel sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
                Ready to discuss
              </p>
              <h2 className="mt-3 text-3xl font-semibold">Ingin demo seperti ini untuk bisnis Anda?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Arkode Labs bisa membantu menerjemahkan kebutuhan menjadi scope, visual preview, dan delivery plan.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-navy transition hover:bg-paper"
            >
              Konsultasi proyek
              <CheckCircle2 aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
