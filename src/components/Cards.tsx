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
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{summary}</p>
      <p className="mt-5 rounded-md bg-teal-50 p-4 font-medium leading-7 text-teal-950">{outcome}</p>
      <ul className="mt-5 space-y-3">
        {deliverables.map((deliverable) => (
          <li key={deliverable} className="flex gap-3 text-sm leading-6 text-slate-700">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-teal-700" size={18} />
            <span>{deliverable}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function SimpleCard({ title, text }: SimpleCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}
