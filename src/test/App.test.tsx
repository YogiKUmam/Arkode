import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import App from '../App';

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App routes', () => {
  it('renders the home page', () => {
    renderRoute('/');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /software house untuk website, web app, dan sistem digital yang siap berkembang/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the services page', () => {
    renderRoute('/services');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /layanan software house untuk website, web app, dashboard, dan sistem digital custom/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the contact page', () => {
    renderRoute('/contact');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /ceritakan kebutuhan digital yang ingin anda rapikan/i,
      }),
    ).toBeInTheDocument();
  });
});
