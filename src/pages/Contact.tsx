import { Mail, Phone, Send } from 'lucide-react';

import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { site } from '../content/site';

const projectTypes = [
  'Company profile website',
  'Custom web app',
  'Maintenance / retainer',
  'Belum yakin',
];

export function Contact() {
  return (
    <>
      <Seo
        title={`Contact | ${site.name}`}
        description="Hubungi NusaCode Studio untuk diskusi website bisnis, custom web app, atau maintenance project."
      />

      <section className="py-16 sm:py-24">
        <div className="container-shell max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Ceritakan kebutuhan digital yang ingin Anda rapikan.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Bagikan konteks singkat tentang bisnis, tujuan project, dan prioritas terdekat. Kami
            akan membalas dengan langkah awal yang realistis.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Start a conversation"
        title="Kirim brief singkat atau hubungi kami langsung."
        className="bg-white"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr] lg:items-start">
          <form
            action={site.whatsapp}
            method="get"
            target="_blank"
            className="rounded-lg border border-line bg-white p-6 shadow-panel sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-ink">
                  Nama
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink transition placeholder:text-slate-400 focus:border-teal-700"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-ink">
                  Perusahaan
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink transition placeholder:text-slate-400 focus:border-teal-700"
                  placeholder="Nama perusahaan"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-semibold text-ink">
                  Email atau WhatsApp
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink transition placeholder:text-slate-400 focus:border-teal-700"
                  placeholder="email@domain.com atau nomor WA"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-ink">
                  Jenis project
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink transition focus:border-teal-700"
                >
                  <option value="" disabled>
                    Pilih jenis project
                  </option>
                  {projectTypes.map((projectType) => (
                    <option key={projectType} value={projectType}>
                      {projectType}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block text-sm font-semibold text-ink">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="mt-2 w-full resize-y rounded-md border border-line bg-white px-4 py-3 text-sm leading-6 text-ink transition placeholder:text-slate-400 focus:border-teal-700"
                placeholder="Ceritakan tujuan, timeline, dan gambaran scope yang Anda bayangkan."
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Dengan mengirim form ini, Anda setuju kami menggunakan informasi yang diberikan hanya
              untuk membalas kebutuhan project dan komunikasi terkait.
            </p>

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Kirim pesan
              <Send aria-hidden="true" size={18} />
            </button>
          </form>

          <aside className="rounded-lg border border-line bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">Kontak langsung</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Lebih nyaman lewat email atau telepon? Hubungi kami lewat kanal berikut.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
                  <Mail aria-hidden="true" size={16} />
                  Email
                </h3>
                <a className="mt-2 block text-slate-700 hover:text-teal-800" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
                  <Phone aria-hidden="true" size={16} />
                  Phone
                </h3>
                <a className="mt-2 block text-slate-700 hover:text-teal-800" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                  {site.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
