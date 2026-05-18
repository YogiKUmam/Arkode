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
        name: /kami membangun website dan sistem web yang membuat bisnis terlihat kredibel/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the services page', () => {
    renderRoute('/services');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /layanan software house untuk website bisnis dan sistem web yang bisa diandalkan/i,
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
