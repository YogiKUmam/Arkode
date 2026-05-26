import { ArrowLeft, BarChart3, CheckCircle2, Globe2, LineChart, Users } from 'lucide-react';
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
    sections: ['Hero positioning', 'Service clarity', 'Proof and testimonials', 'Contact conversion'],
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
    sections: ['Lead pipeline', 'Task tracking', 'Role-based access', 'Operational reporting'],
  },
};

export function CaseStudyDemo() {
  const { slug } = useParams();
  const demo = slug ? demoContent[slug as keyof typeof demoContent] : undefined;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

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

            <ProductMockup variant={demo.variant} title={caseStudy.title} eyebrow="Live demo preview" />
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
                <article key={section} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                  <Icon aria-hidden="true" className="text-accent" size={22} />
                  <h3 className="mt-4 text-xl font-semibold text-navy">{section}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Area ini memberi gambaran bagaimana solusi bisa disusun sebelum masuk produksi penuh.
                  </p>
                </article>
              );
            })}
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
