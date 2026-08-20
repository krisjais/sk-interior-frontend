import Link from 'next/link';
import SEO from '../../components/SEO';
import { JOURNAL_ARTICLES, getArticleBySlug, getRelatedArticles } from '../../data/journal';

export default function ArticleDetailPage({ article, relatedArticles }) {
  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#111111] text-[#F3F1ED]">
        <div className="text-center">
          <h1 className="display-md">Article Not Found</h1>
          <Link href="/journal" className="arrow-btn text-[#B59A62] mt-6">
            Back to Journal
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/journal/${article.slug}`}
        ogImage={article.coverImage}
      />

      <main>
        {/* ── Article Header ── */}
        <section
          className="relative min-h-[50vh] flex flex-col justify-end"
          style={{ background: 'var(--color-bg)', paddingTop: '120px' }}
        >
          <div className="container-narrow section-padding-sm text-center">
            <div className="flex items-center justify-center gap-3 mb-6 text-xs">
              <Link href="/journal" className="text-[10px] tracking-[0.24em] uppercase text-[#F3F1ED]/50 hover:text-[#B59A62] transition-colors">
                Journal
              </Link>
              <span className="text-[#F3F1ED]/30">•</span>
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#B59A62] font-semibold">
                {article.category}
              </span>
            </div>

            <h1 className="display-lg text-[#F3F1ED] mb-6">{article.title}</h1>
            <p className="text-[1.2rem] font-light text-[#B59A62] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              {article.subtitle}
            </p>

            <div className="flex items-center justify-center gap-4 text-xs text-[#F3F1ED]/40 font-light" style={{ fontFamily: 'var(--font-body)' }}>
              <span>Published {article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </section>

        {/* ── Cover Image ── */}
        <div className="container-wide" style={{ background: 'var(--color-bg)' }}>
          <div className="img-cover ratio-16-9 rounded-xl">
            <img src={article.coverImage} alt={article.title} />
          </div>
        </div>

        {/* ── Article Body ── */}
        <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
          <div className="container-narrow">
            <div className="space-y-8 text-[16px] lg:text-[17px] leading-relaxed font-light" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-soft)' }}>
              {article.body.map((para, i) => (
                <p key={i} className={i === 0 ? 'text-[18px] lg:text-[20px] font-normal text-[#151515] leading-relaxed' : ''}>
                  {para}
                </p>
              ))}
            </div>

            {/* Author / Bio Footer */}
            <div className="mt-16 pt-10 border-t border-black/10 flex items-center justify-between">
              <div>
                <p className="text-[9px] tracking-[0.24em] uppercase font-semibold text-[#B59A62]">Written By</p>
                <p className="text-[1.1rem] font-light text-[#151515] mt-1" style={{ fontFamily: 'var(--font-display)' }}>
                  SK Interior Editorial Team
                </p>
              </div>

              <Link href="/journal" className="arrow-btn text-[#151515]">
                Back to All Essays
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Related Articles ── */}
        {relatedArticles && relatedArticles.length > 0 && (
          <section className="section-padding-sm" style={{ background: 'var(--color-bg)' }}>
            <div className="container-wide">
              <span className="section-label mb-8 block">Further Reading</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map((rel) => (
                  <Link key={rel.slug} href={`/journal/${rel.slug}`} className="group block">
                    <div className="img-cover ratio-16-9 rounded-lg mb-4">
                      <img src={rel.coverImage} alt={rel.title} />
                    </div>
                    <span className="text-[9px] tracking-[0.24em] uppercase font-semibold text-[#B59A62]">{rel.category}</span>
                    <h3 className="text-xl font-light text-[#F3F1ED] group-hover:text-[#B59A62] transition-colors mt-1" style={{ fontFamily: 'var(--font-display)' }}>
                      {rel.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = JOURNAL_ARTICLES.map((article) => ({
    params: { slug: article.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug);
  const relatedArticles = getRelatedArticles(params.slug, 2);

  return {
    props: {
      article,
      relatedArticles,
    },
  };
}
