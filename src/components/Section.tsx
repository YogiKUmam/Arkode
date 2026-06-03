import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, intro, children, className = '' }: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`.trim()}>
      <div className="container-shell">
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-navy sm:text-4xl">{title}</h2>
            )}
            {intro && <p className="mt-4 text-lg leading-8 text-slate-600">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
