import { Edit3, FileText, Layers3, LockKeyhole, LogOut, Plus, Trash2 } from 'lucide-react';
import { FormEvent, useEffect, useMemo, useState } from 'react';

import { Seo } from '../components/Seo';
import {
  ManagedCaseStudy,
  ManagedPost,
  createContentId,
  deleteManagedCaseStudy,
  deleteManagedPost,
  saveManagedCaseStudy,
  saveManagedPost,
  useManagedContent,
} from '../content/adminContent';
import { site } from '../content/site';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

type CaseStudyForm = {
  title: string;
  slug: string;
  label: string;
  summary: string;
  stack: string;
  timeline: string;
  result: string;
  visual: ManagedCaseStudy['visual'];
  status: ManagedCaseStudy['status'];
  demoUrl: string;
};

type BlogForm = {
  title: string;
  slug: string;
  excerpt: string;
  status: ManagedPost['status'];
};

const emptyCaseStudyForm: CaseStudyForm = {
  title: '',
  slug: '',
  label: 'Client Project',
  summary: '',
  stack: '',
  timeline: '',
  result: '',
  visual: 'website',
  status: 'Published',
  demoUrl: '',
};

const emptyBlogForm: BlogForm = {
  title: '',
  slug: '',
  excerpt: '',
  status: 'Published',
};

const adminSessionKey = 'arkode-labs-admin-session';
const adminPasscode = import.meta.env.VITE_ADMIN_PASSCODE || 'arkode-admin';

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function StatCard({ title, value, text }: { title: string; value: string; text: string }) {
  return (
    <article className="rounded-lg border border-line bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-navy">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}

export function Admin() {
  const content = useManagedContent();
  const [caseForm, setCaseForm] = useState<CaseStudyForm>(emptyCaseStudyForm);
  const [blogForm, setBlogForm] = useState<BlogForm>(emptyBlogForm);
  const [editingCaseId, setEditingCaseId] = useState<string | null>(null);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [passcode, setPasscode] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [authError, setAuthError] = useState('');
  const [saveError, setSaveError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(() => {
    if (import.meta.env.MODE === 'test') {
      return true;
    }

    return !isSupabaseConfigured && typeof window !== 'undefined' && window.sessionStorage.getItem(adminSessionKey) === 'true';
  });

  const publishedPosts = useMemo(
    () => content.posts.filter((post) => post.status === 'Published').length,
    [content.posts],
  );

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase || import.meta.env.MODE === 'test') {
      return;
    }

    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (isMounted) {
        setIsAuthorized(Boolean(data.session));
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthorized(Boolean(session));
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  function updateCaseForm(field: keyof CaseStudyForm, value: string) {
    setCaseForm((current) => ({ ...current, [field]: value }));
  }

  function updateBlogForm(field: keyof BlogForm, value: string) {
    setBlogForm((current) => ({ ...current, [field]: value }));
  }

  async function unlockAdmin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSupabaseConfigured && supabase) {
      const { error } = await supabase.auth.signInWithPassword({
        email: adminEmail,
        password: passcode,
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      setIsAuthorized(true);
      setAuthError('');
      setPasscode('');
      return;
    }

    if (passcode === adminPasscode) {
      window.sessionStorage.setItem(adminSessionKey, 'true');
      setIsAuthorized(true);
      setAuthError('');
      setPasscode('');
      return;
    }

    setAuthError('Passcode admin belum sesuai.');
  }

  async function lockAdmin() {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut();
    } else {
      window.sessionStorage.removeItem(adminSessionKey);
    }

    setIsAuthorized(false);
  }

  async function saveCaseStudy(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const caseStudy: ManagedCaseStudy = {
      id: editingCaseId ?? createContentId('case'),
      slug: slugify(caseForm.slug || caseForm.title),
      title: caseForm.title.trim(),
      label: caseForm.label.trim() || 'Client Project',
      summary: caseForm.summary.trim(),
      stack: caseForm.stack
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
      timeline: caseForm.timeline.trim(),
      result: caseForm.result.trim(),
      visual: caseForm.visual,
      status: caseForm.status,
      demoUrl: caseForm.demoUrl.trim() || undefined,
    };

    try {
      setIsSaving(true);
      setSaveError('');
      await saveManagedCaseStudy(caseStudy);
      await content.refresh();
      setCaseForm(emptyCaseStudyForm);
      setEditingCaseId(null);
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Gagal menyimpan case study.');
    } finally {
      setIsSaving(false);
    }
  }

  async function saveBlogPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const post: ManagedPost = {
      id: editingPostId ?? createContentId('post'),
      title: blogForm.title.trim(),
      slug: slugify(blogForm.slug || blogForm.title),
      excerpt: blogForm.excerpt.trim(),
      status: blogForm.status,
    };

    try {
      setIsSaving(true);
      setSaveError('');
      await saveManagedPost(post);
      await content.refresh();
      setBlogForm(emptyBlogForm);
      setEditingPostId(null);
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Gagal menyimpan blog post.');
    } finally {
      setIsSaving(false);
    }
  }

  function editCaseStudy(item: ManagedCaseStudy) {
    setEditingCaseId(item.id);
    setCaseForm({
      title: item.title,
      slug: item.slug,
      label: item.label,
      summary: item.summary,
      stack: item.stack.join(', '),
      timeline: item.timeline,
      result: item.result,
      visual: item.visual,
      status: item.status,
      demoUrl: item.demoUrl ?? '',
    });
  }

  function editPost(item: ManagedPost) {
    setEditingPostId(item.id);
    setBlogForm({
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      status: item.status,
    });
  }

  async function deleteCaseStudy(id: string) {
    try {
      setSaveError('');
      await deleteManagedCaseStudy(id);
      await content.refresh();
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Gagal menghapus case study.');
    }
  }

  async function deletePost(id: string) {
    try {
      setSaveError('');
      await deleteManagedPost(id);
      await content.refresh();
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Gagal menghapus blog post.');
    }
  }

  if (!isAuthorized) {
    return (
      <>
        <Seo
          title={`Admin Login | ${site.name}`}
          description="Login admin Arkode Labs untuk mengelola case study dan blog."
        />

        <section className="py-16 sm:py-24">
          <div className="container-shell max-w-xl">
            <form onSubmit={unlockAdmin} className="rounded-lg border border-line bg-white p-6 shadow-panel sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-paper text-accent">
                  <LockKeyhole aria-hidden="true" size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    Admin area
                  </p>
                  <h1 className="text-3xl font-semibold text-navy">Masuk ke content studio</h1>
                </div>
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                {isSupabaseConfigured
                  ? 'Admin ini memakai Supabase Auth. Gunakan akun admin yang sudah dibuat di Supabase.'
                  : 'Admin ini memakai passcode ringan untuk prototipe lokal. Isi env Supabase untuk auth produksi.'}
              </p>

              {isSupabaseConfigured && (
                <label className="mt-6 grid gap-2 text-sm font-semibold text-ink">
                  Admin email
                  <input
                    required
                    type="email"
                    value={adminEmail}
                    onChange={(event) => setAdminEmail(event.target.value)}
                    className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent"
                  />
                </label>
              )}

              <label className="mt-6 grid gap-2 text-sm font-semibold text-ink">
                {isSupabaseConfigured ? 'Admin password' : 'Admin passcode'}
                <input
                  required
                  type="password"
                  value={passcode}
                  onChange={(event) => setPasscode(event.target.value)}
                  className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent"
                />
              </label>

              {authError && <p className="mt-3 text-sm font-semibold text-red-700">{authError}</p>}

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy"
              >
                <LockKeyhole aria-hidden="true" size={18} />
                Buka dashboard
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Seo
        title={`Admin Dashboard | ${site.name}`}
        description="Dashboard lokal untuk mengelola case study dan blog Arkode Labs."
      />

      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <div className="rounded-lg border border-line bg-white p-6 shadow-panel sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Arkode Labs content studio
                </p>
                <h1 className="mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
                  Admin content dashboard
                </h1>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Tambah dan edit case study serta blog dari browser. Data tersimpan di localStorage
                  perangkat ini dan langsung dipakai untuk preview halaman publik.
                </p>
              </div>
              <img src={site.logo} alt={`${site.name} logo`} className="h-28 w-28 rounded-lg object-cover" />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-accent hover:text-accent"
              >
                Lihat halaman publik
              </a>
              <a
                href="/blog"
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy"
              >
                Preview blog
              </a>
              <button
                type="button"
                onClick={lockAdmin}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-accent hover:text-accent"
              >
                <LogOut aria-hidden="true" size={16} />
                Lock admin
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Custom case studies" value={String(content.caseStudies.length)} text="Konten portfolio yang kamu tambahkan sendiri." />
            <StatCard title="Blog posts" value={String(content.posts.length)} text="Draft dan published post dari dashboard." />
            <StatCard title="Published posts" value={String(publishedPosts)} text="Artikel yang tampil di halaman Blog publik." />
            <StatCard title="Storage" value={content.source} text={isSupabaseConfigured ? 'Tersambung ke Supabase.' : 'Local fallback sampai env Supabase diisi.'} />
          </div>
          {content.error && <p className="mt-4 text-sm font-semibold text-red-700">{content.error}</p>}
          {saveError && <p className="mt-4 text-sm font-semibold text-red-700">{saveError}</p>}
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container-shell grid gap-8 xl:grid-cols-2">
          <form onSubmit={saveCaseStudy} className="rounded-lg border border-line bg-white p-6 shadow-panel">
            <div className="flex items-center gap-3">
              <Layers3 className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-navy">Case study manager</h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Case study title
                <input required value={caseForm.title} onChange={(event) => updateCaseForm('title', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Case study slug
                <input value={caseForm.slug} onChange={(event) => updateCaseForm('slug', event.target.value)} placeholder="otomatis dari judul jika kosong" className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Case study label
                <input required value={caseForm.label} onChange={(event) => updateCaseForm('label', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
                Case study summary
                <textarea required rows={3} value={caseForm.summary} onChange={(event) => updateCaseForm('summary', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Case study stack
                <input required value={caseForm.stack} onChange={(event) => updateCaseForm('stack', event.target.value)} placeholder="React, Tailwind, Supabase" className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Case study timeline
                <input required value={caseForm.timeline} onChange={(event) => updateCaseForm('timeline', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Visual type
                <select value={caseForm.visual} onChange={(event) => updateCaseForm('visual', event.target.value as ManagedCaseStudy['visual'])} className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent">
                  <option value="website">Website</option>
                  <option value="dashboard">Dashboard</option>
                  <option value="process">Process</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Publish status
                <select value={caseForm.status} onChange={(event) => updateCaseForm('status', event.target.value as ManagedCaseStudy['status'])} className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent">
                  <option>Published</option>
                  <option>Draft</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
                Case study result
                <textarea required rows={3} value={caseForm.result} onChange={(event) => updateCaseForm('result', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
                Live demo URL
                <input value={caseForm.demoUrl} onChange={(event) => updateCaseForm('demoUrl', event.target.value)} placeholder="/case-studies/nama-project/demo atau https://..." className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent" />
              </label>
            </div>
            <button disabled={isSaving} type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60">
              <Plus size={18} aria-hidden="true" />
              {editingCaseId ? 'Update case study' : 'Save case study'}
            </button>
          </form>

          <form onSubmit={saveBlogPost} className="rounded-lg border border-line bg-white p-6 shadow-panel">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-navy">Blog manager</h2>
            </div>
            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Blog title
                <input required value={blogForm.title} onChange={(event) => updateBlogForm('title', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Blog slug
                <input value={blogForm.slug} onChange={(event) => updateBlogForm('slug', event.target.value)} placeholder="otomatis dari judul jika kosong" className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Blog excerpt
                <textarea required rows={4} value={blogForm.excerpt} onChange={(event) => updateBlogForm('excerpt', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Blog status
                <select value={blogForm.status} onChange={(event) => updateBlogForm('status', event.target.value as ManagedPost['status'])} className="rounded-md border border-line px-4 py-3 font-normal focus:border-accent">
                  <option>Published</option>
                  <option>Draft</option>
                </select>
              </label>
            </div>
            <button disabled={isSaving} type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60">
              <Plus size={18} aria-hidden="true" />
              {editingPostId ? 'Update blog post' : 'Save blog post'}
            </button>
          </form>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-shell grid gap-8 xl:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-navy">Saved case studies</h2>
            <div className="mt-5 grid gap-4">
              {content.isLoading && <p className="text-slate-600">Memuat case study...</p>}
              {!content.isLoading && content.caseStudies.length === 0 && <p className="text-slate-600">Belum ada case study tambahan.</p>}
              {content.caseStudies.map((item) => (
                <article key={item.id} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{item.status} / {item.label}</p>
                  <h3 className="mt-3 text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.summary}</p>
                  <p className="mt-2 text-sm text-slate-500">Slug: {item.slug} / Visual: {item.visual}</p>
                  {item.demoUrl && (
                    <a className="mt-2 inline-flex text-sm font-semibold text-accent hover:text-navy" href={item.demoUrl}>
                      Preview live demo
                    </a>
                  )}
                  <div className="mt-4 flex gap-2">
                    <button type="button" onClick={() => editCaseStudy(item)} className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-navy hover:border-accent">
                      <Edit3 size={16} aria-hidden="true" /> Edit
                    </button>
                    <button type="button" onClick={() => void deleteCaseStudy(item.id)} className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-slate-600 hover:border-red-300 hover:text-red-700">
                      <Trash2 size={16} aria-hidden="true" /> Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy">Saved blog posts</h2>
            <div className="mt-5 grid gap-4">
              {content.isLoading && <p className="text-slate-600">Memuat blog...</p>}
              {!content.isLoading && content.posts.length === 0 && <p className="text-slate-600">Belum ada blog tambahan.</p>}
              {content.posts.map((item) => (
                <article key={item.id} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{item.status}</p>
                  <h3 className="mt-3 text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                  <div className="mt-4 flex gap-2">
                    <button type="button" onClick={() => editPost(item)} className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-navy hover:border-accent">
                      <Edit3 size={16} aria-hidden="true" /> Edit
                    </button>
                    <button type="button" onClick={() => void deletePost(item.id)} className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-slate-600 hover:border-red-300 hover:text-red-700">
                      <Trash2 size={16} aria-hidden="true" /> Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
