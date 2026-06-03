import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import App from '../App';
import { navItems } from '../content/site';

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
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
        name: /software house untuk website, web app, dan sistem digital yang siap berkembang/i,
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/admin content dashboard/i)).not.toBeInTheDocument();
  });
});
