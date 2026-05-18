import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { posts, site } from '../content/site';

export function Blog() {
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
          {posts.map((post) => (
            <article key={post.slug} className="flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">{post.title}</h2>
              <p className="mt-4 flex-1 leading-7 text-slate-600">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-teal-800"
              >
                Read preview
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
