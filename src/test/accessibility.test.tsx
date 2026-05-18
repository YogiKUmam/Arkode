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

describe('Accessibility basics', () => {
  it('renders the primary navigation landmark', () => {
    renderRoute('/');

    expect(
      screen.getByRole('navigation', { name: /primary navigation/i }),
    ).toBeInTheDocument();
  });

  it('labels required contact fields and marks them required', () => {
    renderRoute('/contact');

    expect(screen.getByLabelText(/nama/i)).toBeRequired();
    expect(screen.getByLabelText(/email atau whatsapp/i)).toBeRequired();
    expect(screen.getByLabelText(/jenis project/i)).toBeRequired();
    expect(screen.getByLabelText(/pesan/i)).toBeRequired();
  });
});
