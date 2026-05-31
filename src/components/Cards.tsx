import { CheckCircle2 } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  summary: string;
  outcome: string;
  deliverables: string[];
};

type SimpleCardProps = {
  title: string;
  text: string;
};

export function ServiceCard({ title, summary, outcome, deliverables }: ServiceCardProps) {
  return (
    <article className="group rounded-lg border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-panel">
      <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-cyan transition group-hover:w-20" />
      <h3 className="text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{summary}</p>
      <p className="mt-5 rounded-md bg-paper p-4 font-medium leading-7 text-navy">{outcome}</p>
      <ul className="mt-5 space-y-3">
        {deliverables.map((deliverable) => (
          <li key={deliverable} className="flex gap-3 text-sm leading-6 text-slate-700">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-accent" size={18} />
            <span>{deliverable}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function SimpleCard({ title, text }: SimpleCardProps) {
  return (
    <article className="rounded-lg border border-line bg-white p-6 shadow-sm transition hover:border-accent/50 hover:shadow-panel">
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}
