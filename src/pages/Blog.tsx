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

      <section className="py-16 sm:py-24">
        <div className="container-shell max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
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
          {visiblePosts.map((post) => (
            <article key={post.slug} className="flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-ink">{post.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">{post.excerpt}</p>
              <p className="mt-6 text-sm font-semibold text-accent">Artikel preview</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
