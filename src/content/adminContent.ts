import { useEffect, useState } from 'react';

export type ManagedCaseStudy = {
  id: string;
  title: string;
  label: string;
  summary: string;
  stack: string[];
  timeline: string;
  result: string;
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
      caseStudies: Array.isArray(parsed.caseStudies) ? parsed.caseStudies : [],
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

export function useManagedContent() {
  const [content, setContent] = useState(readManagedContent);

  useEffect(() => {
    function updateContent() {
      setContent(readManagedContent());
    }

    window.addEventListener('storage', updateContent);
    window.addEventListener(adminContentUpdatedEvent, updateContent);

    return () => {
      window.removeEventListener('storage', updateContent);
      window.removeEventListener(adminContentUpdatedEvent, updateContent);
    };
  }, []);

  return content;
}

export function createContentId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
