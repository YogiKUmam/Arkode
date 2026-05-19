import { Edit3, FileText, Layers3, Plus, Trash2 } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';

import { Seo } from '../components/Seo';
import {
  ManagedCaseStudy,
  ManagedPost,
  createContentId,
  readManagedContent,
  useManagedContent,
  writeManagedContent,
} from '../content/adminContent';
import { site } from '../content/site';

type CaseStudyForm = {
  title: string;
  label: string;
  summary: string;
  stack: string;
  timeline: string;
  result: string;
};

type BlogForm = {
  title: string;
  slug: string;
  excerpt: string;
  status: ManagedPost['status'];
};

const emptyCaseStudyForm: CaseStudyForm = {
  title: '',
  label: 'Client Project',
  summary: '',
  stack: '',
  timeline: '',
  result: '',
};

const emptyBlogForm: BlogForm = {
  title: '',
  slug: '',
  excerpt: '',
  status: 'Published',
};

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
      <p className="mt-3 text-3xl font-semibold text-ink">{value}</p>
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

  const publishedPosts = useMemo(
    () => content.posts.filter((post) => post.status === 'Published').length,
    [content.posts],
  );

  function updateCaseForm(field: keyof CaseStudyForm, value: string) {
    setCaseForm((current) => ({ ...current, [field]: value }));
  }

  function updateBlogForm(field: keyof BlogForm, value: string) {
    setBlogForm((current) => ({ ...current, [field]: value }));
  }

  function saveCaseStudy(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const currentContent = readManagedContent();
    const caseStudy: ManagedCaseStudy = {
      id: editingCaseId ?? createContentId('case'),
      title: caseForm.title.trim(),
      label: caseForm.label.trim() || 'Client Project',
      summary: caseForm.summary.trim(),
      stack: caseForm.stack
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
      timeline: caseForm.timeline.trim(),
      result: caseForm.result.trim(),
    };

    const nextCaseStudies = editingCaseId
      ? currentContent.caseStudies.map((item) => (item.id === editingCaseId ? caseStudy : item))
      : [...currentContent.caseStudies, caseStudy];

    writeManagedContent({ ...currentContent, caseStudies: nextCaseStudies });
    setCaseForm(emptyCaseStudyForm);
    setEditingCaseId(null);
  }

  function saveBlogPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const currentContent = readManagedContent();
    const post: ManagedPost = {
      id: editingPostId ?? createContentId('post'),
      title: blogForm.title.trim(),
      slug: slugify(blogForm.slug || blogForm.title),
      excerpt: blogForm.excerpt.trim(),
      status: blogForm.status,
    };

    const nextPosts = editingPostId
      ? currentContent.posts.map((item) => (item.id === editingPostId ? post : item))
      : [...currentContent.posts, post];

    writeManagedContent({ ...currentContent, posts: nextPosts });
    setBlogForm(emptyBlogForm);
    setEditingPostId(null);
  }

  function editCaseStudy(item: ManagedCaseStudy) {
    setEditingCaseId(item.id);
    setCaseForm({
      title: item.title,
      label: item.label,
      summary: item.summary,
      stack: item.stack.join(', '),
      timeline: item.timeline,
      result: item.result,
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

  function deleteCaseStudy(id: string) {
    const currentContent = readManagedContent();
    writeManagedContent({
      ...currentContent,
      caseStudies: currentContent.caseStudies.filter((item) => item.id !== id),
    });
  }

  function deletePost(id: string) {
    const currentContent = readManagedContent();
    writeManagedContent({
      ...currentContent,
      posts: currentContent.posts.filter((item) => item.id !== id),
    });
  }

  return (
    <>
      <Seo
        title={`Admin Dashboard | ${site.name}`}
        description="Dashboard lokal untuk mengelola case study dan blog NusaCode Studio."
      />

      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                Local content studio
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Admin content dashboard
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Tambah dan edit case study serta blog dari browser. Data tersimpan di localStorage
                perangkat ini dan langsung dipakai untuk preview halaman publik.
              </p>
            </div>
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              Lihat halaman publik
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Custom case studies" value={String(content.caseStudies.length)} text="Konten portfolio yang kamu tambahkan sendiri." />
            <StatCard title="Blog posts" value={String(content.posts.length)} text="Draft dan published post dari dashboard." />
            <StatCard title="Published posts" value={String(publishedPosts)} text="Artikel yang tampil di halaman Blog publik." />
            <StatCard title="Storage" value="Local" text="Tersimpan di browser ini tanpa backend." />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container-shell grid gap-8 xl:grid-cols-2">
          <form onSubmit={saveCaseStudy} className="rounded-lg border border-line bg-white p-6 shadow-panel">
            <div className="flex items-center gap-3">
              <Layers3 className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-ink">Case study manager</h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Case study title
                <input required value={caseForm.title} onChange={(event) => updateCaseForm('title', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Case study label
                <input required value={caseForm.label} onChange={(event) => updateCaseForm('label', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
                Case study summary
                <textarea required rows={3} value={caseForm.summary} onChange={(event) => updateCaseForm('summary', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Case study stack
                <input required value={caseForm.stack} onChange={(event) => updateCaseForm('stack', event.target.value)} placeholder="React, Tailwind, Supabase" className="rounded-md border border-line px-4 py-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Case study timeline
                <input required value={caseForm.timeline} onChange={(event) => updateCaseForm('timeline', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
                Case study result
                <textarea required rows={3} value={caseForm.result} onChange={(event) => updateCaseForm('result', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal" />
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800">
              <Plus size={18} aria-hidden="true" />
              {editingCaseId ? 'Update case study' : 'Save case study'}
            </button>
          </form>

          <form onSubmit={saveBlogPost} className="rounded-lg border border-line bg-white p-6 shadow-panel">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-ink">Blog manager</h2>
            </div>
            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Blog title
                <input required value={blogForm.title} onChange={(event) => updateBlogForm('title', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Blog slug
                <input value={blogForm.slug} onChange={(event) => updateBlogForm('slug', event.target.value)} placeholder="otomatis dari judul jika kosong" className="rounded-md border border-line px-4 py-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Blog excerpt
                <textarea required rows={4} value={blogForm.excerpt} onChange={(event) => updateBlogForm('excerpt', event.target.value)} className="rounded-md border border-line px-4 py-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Blog status
                <select value={blogForm.status} onChange={(event) => updateBlogForm('status', event.target.value as ManagedPost['status'])} className="rounded-md border border-line px-4 py-3 font-normal">
                  <option>Published</option>
                  <option>Draft</option>
                </select>
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800">
              <Plus size={18} aria-hidden="true" />
              {editingPostId ? 'Update blog post' : 'Save blog post'}
            </button>
          </form>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-shell grid gap-8 xl:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-ink">Saved case studies</h2>
            <div className="mt-5 grid gap-4">
              {content.caseStudies.length === 0 && <p className="text-slate-600">Belum ada case study tambahan.</p>}
              {content.caseStudies.map((item) => (
                <article key={item.id} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">{item.label}</p>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.summary}</p>
                  <div className="mt-4 flex gap-2">
                    <button type="button" onClick={() => editCaseStudy(item)} className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink hover:border-accent">
                      <Edit3 size={16} aria-hidden="true" /> Edit
                    </button>
                    <button type="button" onClick={() => deleteCaseStudy(item.id)} className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-slate-600 hover:border-red-300 hover:text-red-700">
                      <Trash2 size={16} aria-hidden="true" /> Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-ink">Saved blog posts</h2>
            <div className="mt-5 grid gap-4">
              {content.posts.length === 0 && <p className="text-slate-600">Belum ada blog tambahan.</p>}
              {content.posts.map((item) => (
                <article key={item.id} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">{item.status}</p>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                  <div className="mt-4 flex gap-2">
                    <button type="button" onClick={() => editPost(item)} className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink hover:border-accent">
                      <Edit3 size={16} aria-hidden="true" /> Edit
                    </button>
                    <button type="button" onClick={() => deletePost(item.id)} className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-slate-600 hover:border-red-300 hover:text-red-700">
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
