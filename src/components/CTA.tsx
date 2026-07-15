import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useContent } from '../content/site';

export function CTA() {
  const { pageCopy, site } = useContent();
  const copy = pageCopy.cta;

  return (
    <section className="premium-band py-16 text-white sm:py-20">
      <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
            Code. Build. Solve.
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {copy.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            {copy.text}
          </p>
        </div>
        <div className="grid gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-navy transition hover:bg-paper"
          >
            {copy.primary}
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link
            to="/estimator"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan hover:text-cyan"
          >
            {copy.secondary}
          </Link>
        </div>
        <p className="text-sm text-slate-400 lg:col-span-2">
          Email: {site.email}. {pageCopy.common.responseLine}
        </p>
      </div>
    </section>
  );
}
