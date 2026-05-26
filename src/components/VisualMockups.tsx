import { BarChart3, CheckCircle2, Code2, LayoutDashboard, LineChart, MonitorCog } from 'lucide-react';

type ProductMockupProps = {
  variant?: 'website' | 'dashboard' | 'process' | 'maintenance';
  title: string;
  eyebrow?: string;
};

const variantContent = {
  website: {
    icon: Code2,
    bars: ['w-10/12', 'w-7/12', 'w-9/12'],
    cards: ['Brand story', 'Services', 'CTA flow'],
  },
  dashboard: {
    icon: LayoutDashboard,
    bars: ['w-8/12', 'w-11/12', 'w-6/12'],
    cards: ['Leads', 'Tasks', 'Reports'],
  },
  process: {
    icon: MonitorCog,
    bars: ['w-9/12', 'w-8/12', 'w-10/12'],
    cards: ['Scope', 'Design', 'Build'],
  },
  maintenance: {
    icon: LineChart,
    bars: ['w-11/12', 'w-7/12', 'w-9/12'],
    cards: ['Monitor', 'Fix', 'Improve'],
  },
};

export function ProductMockup({ variant = 'dashboard', title, eyebrow = 'Preview' }: ProductMockupProps) {
  const content = variantContent[variant];
  const Icon = content.icon;

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white shadow-panel">
      <div className="flex items-center justify-between border-b border-line bg-navy px-4 py-3 text-white">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">{eyebrow}</span>
      </div>

      <div className="grid gap-5 p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-paper text-accent">
            <Icon aria-hidden="true" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy">{title}</h3>
            <div className="mt-3 space-y-2">
              {content.bars.map((width) => (
                <span key={width} className={`block h-2 rounded-full bg-line ${width}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {content.cards.map((card) => (
            <div key={card} className="rounded-md border border-line bg-paper p-3">
              <CheckCircle2 aria-hidden="true" className="text-accent" size={16} />
              <p className="mt-2 text-xs font-semibold text-navy">{card}</p>
            </div>
          ))}
        </div>

        <div className="rounded-md border border-line p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Delivery health</p>
            <BarChart3 aria-hidden="true" className="text-accent" size={18} />
          </div>
          <div className="mt-4 grid grid-cols-6 items-end gap-2">
            {[34, 58, 44, 72, 64, 88].map((height) => (
              <span
                key={height}
                className="rounded-t-md bg-gradient-to-t from-accent to-cyan"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
