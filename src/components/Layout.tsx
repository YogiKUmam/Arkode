import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import { navItems, site } from '../content/site';

const mobileMenuId = 'site-mobile-menu';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'rounded-md px-3 py-2 text-sm font-medium transition',
      isActive ? 'bg-teal-50 text-teal-800' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950',
    ].join(' ');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-shell flex h-16 items-center justify-between gap-6">
          <Link
            to="/"
            className="flex min-w-0 flex-col"
            onClick={() => setIsMenuOpen(false)}
            aria-label={`${site.name} home`}
          >
            <span className="truncate text-base font-semibold text-slate-950">{site.name}</span>
            <span className="hidden truncate text-xs text-slate-500 sm:block">{site.tagline}</span>
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
              className="inline-flex items-center justify-center rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Start a project
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 md:hidden"
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
          className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-slate-200 bg-white md:hidden`}
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
              className="mt-2 inline-flex items-center justify-center rounded-md bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Start a project
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container-shell grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-start">
          <div>
            <p className="text-base font-semibold text-slate-950">{site.name}</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{site.tagline}</p>
            <div className="mt-4 flex flex-col gap-1 text-sm text-slate-600 sm:flex-row sm:gap-4">
              <a className="hover:text-teal-800" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="hover:text-teal-800" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                {site.phone}
              </a>
            </div>
          </div>

          <nav className="flex gap-4 text-sm font-medium text-slate-600" aria-label="Footer navigation">
            <Link className="hover:text-teal-800" to="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-teal-800" to="/terms">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
