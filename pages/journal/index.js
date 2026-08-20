import { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { JOURNAL_ARTICLES, JOURNAL_CATEGORIES } from '../../data/journal';

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles =
    activeCategory === 'All'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <>
      <SEO
        title="Journal"
        description="Essays, design thinking, and material stories from the team at SK Interior."
        canonical="/journal"
      />

      <main>
        {/* ── Hero ── */}
        <section
          className="relative min-h-[45vh] flex flex-col justify-end"
          style={{ background: 'var(--color-bg)', paddingTop: '120px' }}
        >
          <div className="container-wide section-padding-sm">
            <span className="section-label mb-8 block">Studio Journal</span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h1 className="display-xl text-[#F3F1ED] max-w-[800px]">
                Perspectives on<br />
                <span className="text-italic-serif text-[#B59A62]">design & space.</span>
              </h1>
              <p
                className="max-w-md text-[14.5px] leading-relaxed text-[#F3F1ED]/50 font-light"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                A collection of essays, material observations, and project narratives from our practice in Mumbai.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-3 mt-14 pt-8 border-t border-white/10">
              {JOURNAL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[10px] tracking-[0.22em] uppercase font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#B59A62] text-[#111111]'
                      : 'border border-white/15 text-[#F3F1ED]/60 hover:text-[#F3F1ED] hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Articles Grid ── */}
        <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
          <div className="container-wide">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl font-light text-[#151515]/60">No articles found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/journal/${article.slug}`}
                    className="journal-card group block"
                  >
                    <div className="journal-img img-cover ratio-16-9 mb-6 rounded-lg">
                      <img src={article.coverImage} alt={article.title} />
                    </div>

                    <div className="flex items-center gap-3 mb-3 text-xs">
                      <span className="text-[9px] tracking-[0.24em] uppercase font-semibold text-[#B59A62]">
                        {article.category}
                      </span>
                      <span className="text-[#151515]/30">•</span>
                      <span className="text-[#151515]/50 font-light" style={{ fontFamily: 'var(--font-body)' }}>
                        {article.date}
                      </span>
                      <span className="text-[#151515]/30">•</span>
                      <span className="text-[#151515]/50 font-light" style={{ fontFamily: 'var(--font-body)' }}>
                        {article.readTime}
                      </span>
                    </div>

                    <h2
                      className="text-[1.8rem] lg:text-[2.2rem] font-light leading-snug group-hover:text-[#B59A62] transition-colors mb-3"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}
                    >
                      {article.title}
                    </h2>

                    <p
                      className="text-[14px] leading-relaxed font-light line-clamp-3 mb-6"
                      style={{ color: 'var(--color-ink-soft)', fontFamily: 'var(--font-body)' }}
                    >
                      {article.excerpt}
                    </p>

                    <span className="arrow-btn text-[#151515]">
                      Read Essay
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
