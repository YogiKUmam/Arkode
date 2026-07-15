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

describe('Accessibility basics', () => {
  it('renders the primary navigation landmark', () => {
    renderRoute('/');

    expect(
      screen.getByRole('navigation', { name: /primary navigation/i }),
    ).toBeInTheDocument();
  });

  it('labels required discovery fields and marks them required', () => {
    renderRoute('/contact');

    expect(screen.getByLabelText(/project type/i)).toBeRequired();
    expect(screen.getByLabelText(/main goal/i)).toBeRequired();
  });
});
