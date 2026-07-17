import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import App from '../App';
import { LanguageProvider } from '../content/LanguageContext';

function renderRoute(route: string) {
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    </LanguageProvider>,
  );
}

describe('App routes', () => {
  it('renders the home page', () => {
    renderRoute('/');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /software house for websites, web apps, and digital systems built to scale/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the services page', () => {
    renderRoute('/services');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /software house services for websites, web apps, dashboards, and custom digital systems/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the contact page', () => {
    renderRoute('/contact');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /tell us what digital solution you want to make cleaner/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the project estimator page', () => {
    renderRoute('/estimator');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /estimate your project scope before the first consultation/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/initial recommendation/i)).toBeInTheDocument();
  });

  it('renders live-demo case studies without source-code links', () => {
    renderRoute('/case-studies');

    expect(screen.getByRole('heading', { level: 2, name: /nusantara language academy/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /ai resume analyzer/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /eksport import bali/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /kosanq/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /live demo/i }).length).toBeGreaterThanOrEqual(6);
    expect(screen.queryByRole('link', { name: /source code/i })).not.toBeInTheDocument();
  });
});
