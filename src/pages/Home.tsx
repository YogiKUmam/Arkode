import { ArrowRight, Code2, Layers3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ServiceCard, SimpleCard } from '../components/Cards';
import { CTA } from '../components/CTA';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { caseStudies, faqs, problems, processSteps, services, site } from '../content/site';

const trustItems = [
  {
    icon: Code2,
    title: 'Frontend modern',
    text: 'React-ready, responsive, cepat, dan mudah dikembangkan.',
  },
  {
    icon: Layers3,
    title: 'Scope jelas',
    text: 'Discovery, prioritas, timeline, dan deliverable dibuat transparan.',
  },
  {
    icon: ShieldCheck,
    title: 'Launch rapi',
    text: 'SEO dasar, aksesibilitas, QA mobile, dan support setelah online.',
  },
];

export function Home() {
  return (
    <>
      <Seo
        title={`${site.name} | Software House Website dan Sistem Web`}
        description="Software house untuk company profile website, custom web app, dan maintenance yang membantu bisnis terlihat kredibel dan siap tumbuh."
      />

      <section className="py-16 sm:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Kami membangun website dan sistem web yang membuat bisnis terlihat kredibel.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Dari company profile website sampai web app internal, kami merancang, membangun, dan
              mengoptimalkan aset digital yang siap dipakai untuk tumbuh.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-semibold text-white transition hover:bg-teal-800"
              >
                Jadwalkan Konsultasi
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md border border-line bg-white px-5 py-3 font-semibold text-ink transition hover:border-accent hover:text-accent"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-white p-6 shadow-panel">
            <div className="grid gap-4">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="flex gap-4 rounded-md bg-paper p-4">
                    <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-accent" />
                    <div>
                      <h2 className="font-semibold text-ink">{item.title}</h2>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Masalah yang kami selesaikan"
        title="Website dan sistem yang bekerja untuk bisnis, bukan hanya terlihat online."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {problems.map((problem) => (
            <SimpleCard
              key={problem}
              title={problem}
              text="Kami bantu menerjemahkan masalah ini menjadi struktur halaman, flow, dan sistem yang bisa digunakan."
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Layanan utama"
        title="Tiga cara kami membantu bisnis Anda tumbuh."
        intro="Mulai dari profil bisnis yang kredibel sampai sistem web yang merapikan operasional."
        className="bg-white"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Case studies" title="Bukti awal yang jujur dan mudah dipahami.">
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((item) => (
            <article key={item.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-signal">{item.label}</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm text-slate-500">Timeline: {item.timeline}</p>
              <p className="mt-2 font-medium leading-7 text-accent">{item.result}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Proses"
        title="Dari ide sampai launch dengan ritme yang jelas."
        className="bg-white"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <SimpleCard key={step.title} title={`${index + 1}. ${step.title}`} text={step.text} />
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Pertanyaan yang sering muncul sebelum mulai project.">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <SimpleCard key={faq.question} title={faq.question} text={faq.answer} />
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
