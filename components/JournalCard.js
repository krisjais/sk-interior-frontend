import Link from 'next/link';

export default function JournalCard({ article }) {
  if (!article) return null;

  return (
    <Link
      href={`/journal/${article.slug}`}
      className="journal-card group block"
    >
      <div className="journal-img img-cover ratio-16-9 mb-6 rounded-lg">
        <img src={article.coverImage} alt={article.title} loading="lazy" />
      </div>

      <div className="flex items-center gap-3 mb-3 text-xs">
        <span className="text-[9px] tracking-[0.24em] uppercase font-semibold text-[#B59A62]">
          {article.category}
        </span>
        <span className="text-[#151515]/30">•</span>
        <span
          className="text-[#151515]/50 font-light"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {article.date}
        </span>
        {article.readTime && (
          <>
            <span className="text-[#151515]/30">•</span>
            <span
              className="text-[#151515]/50 font-light"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {article.readTime}
            </span>
          </>
        )}
      </div>

      <h3
        className="text-[1.7rem] lg:text-[2rem] font-light leading-snug group-hover:text-[#B59A62] transition-colors mb-3"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}
      >
        {article.title}
      </h3>

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
  );
}
