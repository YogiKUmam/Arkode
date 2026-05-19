import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

import App from '../App';

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

describe('Admin content dashboard', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders managers for case studies and blog posts', () => {
    renderRoute('/admin');

    expect(
      screen.getByRole('heading', { level: 1, name: /admin content dashboard/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /case study manager/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /blog manager/i })).toBeInTheDocument();
  });

  it('saves new case studies and blog posts for public pages', async () => {
    const user = userEvent.setup();
    renderRoute('/admin');

    await user.type(screen.getByLabelText('Case study title'), 'CRM Dashboard Build');
    await user.type(screen.getByLabelText('Case study label'), 'Client Project');
    await user.type(screen.getByLabelText('Case study summary'), 'Dashboard untuk tracking leads dan status delivery.');
    await user.type(screen.getByLabelText('Case study stack'), 'React, Supabase, Tailwind');
    await user.type(screen.getByLabelText('Case study timeline'), '4 minggu');
    await user.type(screen.getByLabelText('Case study result'), 'Pipeline sales lebih mudah dipantau.');
    await user.click(screen.getByRole('button', { name: /save case study/i }));

    await user.type(screen.getByLabelText('Blog title'), 'Cara Menyiapkan Dashboard Admin');
    await user.type(screen.getByLabelText('Blog slug'), 'dashboard-admin');
    await user.type(screen.getByLabelText('Blog excerpt'), 'Panduan ringkas membuat dashboard konten lokal.');
    await user.click(screen.getByRole('button', { name: /save blog post/i }));

    cleanup();
    renderRoute('/case-studies');
    expect(screen.getByText('CRM Dashboard Build')).toBeInTheDocument();

    cleanup();
    renderRoute('/blog');
    expect(screen.getByText('Cara Menyiapkan Dashboard Admin')).toBeInTheDocument();
  });
});
