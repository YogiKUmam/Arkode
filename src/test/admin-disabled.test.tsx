import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import App from '../App';
import { LanguageProvider } from '../content/LanguageContext';
import { navItems } from '../content/site';

function renderRoute(route: string) {
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    </LanguageProvider>,
  );
}

describe('Disabled admin area', () => {
  it('keeps admin out of public navigation', () => {
    expect(navItems.some((item) => item.href === '/admin')).toBe(false);
  });

  it('redirects /admin to the home page while the CMS is disabled', () => {
    renderRoute('/admin');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /software house for websites, web apps, and digital systems built to scale/i,
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/admin content dashboard/i)).not.toBeInTheDocument();
  });
});
