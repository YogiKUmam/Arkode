import { useEffect, useState } from 'react';

import { isSupabaseConfigured, supabase } from '../lib/supabase';

export type ManagedCaseStudy = {
  id: string;
  slug: string;
  title: string;
  label: string;
  summary: string;
  stack: string[];
  timeline: string;
  result: string;
  visual: 'website' | 'dashboard' | 'process' | 'maintenance';
  status: 'Draft' | 'Published';
  demoUrl?: string;
};

export type ManagedPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  status: 'Draft' | 'Published';
};

export type ManagedContent = {
  caseStudies: ManagedCaseStudy[];
  posts: ManagedPost[];
};

type StoredCaseStudy = Partial<ManagedCaseStudy> & Pick<ManagedCaseStudy, 'id' | 'title'>;

type CaseStudyRow = {
  id: string;
  slug: string;
  title: string;
  label: string;
  summary: string;
  stack: string[];
  timeline: string;
  result: string;
  visual: ManagedCaseStudy['visual'];
  status: ManagedCaseStudy['status'];
  demo_url: string | null;
};

type PostRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  status: ManagedPost['status'];
};

export const adminContentKey = 'arkode-labs-admin-content';
const adminContentUpdatedEvent = 'arkode-labs-admin-content-updated';

const emptyContent: ManagedContent = {
  caseStudies: [],
  posts: [],
};

function hasBrowserStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function readManagedContent(): ManagedContent {
  if (!hasBrowserStorage()) {
    return emptyContent;
  }

  const rawContent = window.localStorage.getItem(adminContentKey);
  if (!rawContent) {
    return emptyContent;
  }

  try {
    const parsed = JSON.parse(rawContent) as Partial<ManagedContent>;
    return {
      caseStudies: Array.isArray(parsed.caseStudies)
        ? (parsed.caseStudies as StoredCaseStudy[]).map((item) => ({
            ...item,
            slug: item.slug ?? item.id,
            visual: item.visual ?? 'website',
            status: item.status ?? 'Published',
          })) as ManagedCaseStudy[]
        : [],
      posts: Array.isArray(parsed.posts) ? parsed.posts : [],
    };
  } catch {
    return emptyContent;
  }
}

export function writeManagedContent(content: ManagedContent) {
  if (!hasBrowserStorage()) {
    return;
  }

  window.localStorage.setItem(adminContentKey, JSON.stringify(content));
  window.dispatchEvent(new Event(adminContentUpdatedEvent));
}

function fromCaseStudyRow(row: CaseStudyRow): ManagedCaseStudy {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    label: row.label,
    summary: row.summary,
    stack: row.stack,
    timeline: row.timeline,
    result: row.result,
    visual: row.visual,
    status: row.status,
    demoUrl: row.demo_url ?? undefined,
  };
}

function toCaseStudyRow(item: ManagedCaseStudy) {
  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    label: item.label,
    summary: item.summary,
    stack: item.stack,
    timeline: item.timeline,
    result: item.result,
    visual: item.visual,
    status: item.status,
    demo_url: item.demoUrl ?? null,
  };
}

function fromPostRow(row: PostRow): ManagedPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    status: row.status,
  };
}

function toPostRow(item: ManagedPost) {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    status: item.status,
  };
}

export async function fetchManagedContent(): Promise<ManagedContent> {
  if (!isSupabaseConfigured || !supabase) {
    return readManagedContent();
  }

  const [caseStudiesResult, postsResult] = await Promise.all([
    supabase.from('case_studies').select('*').order('created_at', { ascending: false }),
    supabase.from('posts').select('*').order('created_at', { ascending: false }),
  ]);

  if (caseStudiesResult.error) {
    throw caseStudiesResult.error;
  }

  if (postsResult.error) {
    throw postsResult.error;
  }

  return {
    caseStudies: ((caseStudiesResult.data ?? []) as CaseStudyRow[]).map(fromCaseStudyRow),
    posts: ((postsResult.data ?? []) as PostRow[]).map(fromPostRow),
  };
}

export async function saveManagedCaseStudy(item: ManagedCaseStudy) {
  if (!isSupabaseConfigured || !supabase) {
    const currentContent = readManagedContent();
    const exists = currentContent.caseStudies.some((caseStudy) => caseStudy.id === item.id);
    const nextCaseStudies = exists
      ? currentContent.caseStudies.map((caseStudy) => (caseStudy.id === item.id ? item : caseStudy))
      : [...currentContent.caseStudies, item];

    writeManagedContent({ ...currentContent, caseStudies: nextCaseStudies });
    return;
  }

  const { error } = await supabase.from('case_studies').upsert(toCaseStudyRow(item), { onConflict: 'id' });

  if (error) {
    throw error;
  }
}

export async function deleteManagedCaseStudy(id: string) {
  if (!isSupabaseConfigured || !supabase) {
    const currentContent = readManagedContent();
    writeManagedContent({
      ...currentContent,
      caseStudies: currentContent.caseStudies.filter((item) => item.id !== id),
    });
    return;
  }

  const { error } = await supabase.from('case_studies').delete().eq('id', id);

  if (error) {
    throw error;
  }
}

export async function saveManagedPost(item: ManagedPost) {
  if (!isSupabaseConfigured || !supabase) {
    const currentContent = readManagedContent();
    const exists = currentContent.posts.some((post) => post.id === item.id);
    const nextPosts = exists
      ? currentContent.posts.map((post) => (post.id === item.id ? item : post))
      : [...currentContent.posts, item];

    writeManagedContent({ ...currentContent, posts: nextPosts });
    return;
  }

  const { error } = await supabase.from('posts').upsert(toPostRow(item), { onConflict: 'id' });

  if (error) {
    throw error;
  }
}

export async function deleteManagedPost(id: string) {
  if (!isSupabaseConfigured || !supabase) {
    const currentContent = readManagedContent();
    writeManagedContent({
      ...currentContent,
      posts: currentContent.posts.filter((item) => item.id !== id),
    });
    return;
  }

  const { error } = await supabase.from('posts').delete().eq('id', id);

  if (error) {
    throw error;
  }
}

export function useManagedContent() {
  const [content, setContent] = useState(readManagedContent);
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured);
  const [error, setError] = useState<string | null>(null);

  async function refresh() {
    if (!isSupabaseConfigured) {
      setContent(readManagedContent());
      setIsLoading(false);
      setError(null);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setContent(await fetchManagedContent());
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Gagal memuat konten.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    function updateContent() {
      if (isSupabaseConfigured) {
        void refresh();
        return;
      }

      setContent(readManagedContent());
    }

    if (isSupabaseConfigured) {
      void refresh();
    }

    window.addEventListener('storage', updateContent);
    window.addEventListener(adminContentUpdatedEvent, updateContent);

    return () => {
      window.removeEventListener('storage', updateContent);
      window.removeEventListener(adminContentUpdatedEvent, updateContent);
    };
  }, []);

  return {
    ...content,
    isLoading,
    error,
    source: isSupabaseConfigured ? 'Supabase' : 'Local',
    refresh,
  };
}

export function createContentId(prefix: string) {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
