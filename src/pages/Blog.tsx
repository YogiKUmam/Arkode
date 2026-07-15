import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { useManagedContent } from '../content/adminContent';
import { useContent } from '../content/site';

export function Blog() {
  const { pageCopy, posts } = useContent();
  const copy = pageCopy.blogPage;
  const managedContent = useManagedContent();
  const visiblePosts = [
    ...posts,
    ...managedContent.posts.filter((post) => post.status === 'Published'),
  ];

  return (
    <>
      <Seo
        title={copy.seoTitle}
        description={copy.seoDescription}
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[460px] tech-grid-bg opacity-55" aria-hidden="true" />
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{copy.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {copy.intro}
          </p>
        </div>
      </section>

      <Section eyebrow={copy.latestEyebrow} title={copy.latestTitle} className="bg-white">
        <div className="grid gap-5 md:grid-cols-3">
          {visiblePosts.map((post, index) => (
            <article key={post.slug} className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-panel">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Insight {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-xl font-semibold text-navy">{post.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">{post.excerpt}</p>
              <p className="mt-6 text-sm font-semibold text-accent transition group-hover:text-navy">{copy.preview}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
