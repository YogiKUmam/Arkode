import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { site } from '../content/site';

export function CTA() {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <div className="container-shell grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
            Code. Build. Solve.
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Siap membangun software yang rapi dan siap berkembang?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Ceritakan kebutuhan Anda lewat halaman kontak atau email langsung ke {site.email}.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-navy transition hover:bg-paper"
        >
          Konsultasi proyek
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
        <p className="text-sm text-slate-400 sm:col-span-2">
          Email: {site.email} - Respons biasanya dalam 1 hari kerja.
        </p>
      </div>
    </section>
  );
}
