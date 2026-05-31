import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import { navItems, site } from '../content/site';

const mobileMenuId = 'site-mobile-menu';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'rounded-md px-3 py-2 text-sm font-semibold transition',
      isActive ? 'bg-paper text-accent' : 'text-slate-700 hover:bg-paper hover:text-navy',
    ].join(' ');

  return (
    <div className="min-h-screen text-slate-950">
      <header className="sticky top-0 z-50 border-b border-line bg-white/88 backdrop-blur-xl">
        <div className="container-shell flex h-16 items-center justify-between gap-6">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
            aria-label={`${site.name} home`}
          >
            <img src="/arkode-labs-logo.png" alt="" className="h-10 w-10 rounded-md object-cover" />
            <span className="min-w-0">
              <span className="block truncate text-base font-bold text-navy">{site.name}</span>
              <span className="hidden truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:block">
                Code. Build. Solve.
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-navy"
            >
              Konsultasi
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-navy transition hover:bg-paper md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>

        <div
          id={mobileMenuId}
          className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-line bg-white md:hidden`}
        >
          <nav className="container-shell flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={navLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:bg-navy"
              onClick={() => setIsMenuOpen(false)}
            >
              Konsultasi
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-line bg-white">
        <div className="container-shell grid gap-8 py-12 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <img src={site.logo} alt="" className="h-10 w-10 rounded-md object-cover" />
              <div>
                <p className="text-base font-bold text-navy">{site.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Code. Build. Solve.</p>
              </div>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{site.tagline}</p>
            <div className="mt-4 flex flex-col gap-1 text-sm text-slate-600 sm:flex-row sm:gap-4">
              <a className="hover:text-accent" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="hover:text-accent" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                {site.phone}
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-600" aria-label="Footer navigation">
            <Link className="hover:text-accent" to="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-accent" to="/terms">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
