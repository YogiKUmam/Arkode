import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { useManagedContent } from '../content/adminContent';
import { posts, site } from '../content/site';

export function Blog() {
  const managedContent = useManagedContent();
  const visiblePosts = [
    ...posts,
    ...managedContent.posts.filter((post) => post.status === 'Published'),
  ];

  return (
    <>
      <Seo
        title={`Blog | ${site.name}`}
        description="Insight praktis tentang website bisnis, custom web app, kredibilitas digital, dan konversi."
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[460px] tech-grid-bg opacity-55" aria-hidden="true" />
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Insights</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Insight praktis untuk membuat website dan sistem web lebih berguna.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Artikel singkat tentang struktur website, keputusan teknis, dan cara melihat aset
            digital dari sisi bisnis.
          </p>
        </div>
      </section>

      <Section eyebrow="Latest posts" title="Preview artikel yang bisa menjadi titik awal audit." className="bg-white">
        <div className="grid gap-5 md:grid-cols-3">
          {visiblePosts.map((post, index) => (
            <article key={post.slug} className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-panel">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Insight {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-xl font-semibold text-navy">{post.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">{post.excerpt}</p>
              <p className="mt-6 text-sm font-semibold text-accent transition group-hover:text-navy">Artikel preview</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
