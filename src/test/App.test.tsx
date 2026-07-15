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

  it('renders the project estimator page', () => {
    renderRoute('/estimator');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /hitung gambaran scope sebelum mulai konsultasi/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/rekomendasi awal/i)).toBeInTheDocument();
  });

  it('renders GitHub-backed case studies', () => {
    renderRoute('/case-studies');

    expect(screen.getByRole('heading', { level: 2, name: /nusantara language academy/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /ai resume analyzer/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /eksport import bali/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /source code/i }).length).toBeGreaterThanOrEqual(6);
  });
});
