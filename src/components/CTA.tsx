import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { site } from '../content/site';

export function CTA() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="container-shell flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
            Start a project
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Siap merapikan website atau sistem web bisnis Anda?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Ceritakan kebutuhan Anda lewat halaman kontak atau email langsung ke {site.email}.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-100"
        >
          Contact us
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </section>
  );
}
