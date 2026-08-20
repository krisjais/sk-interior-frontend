import Link from 'next/link';

export default function ProjectCard({ project, aspect = 'ratio-4-3', featured = false }) {
  if (!project) return null;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group project-card-editorial block ${featured ? 'lg:col-span-2' : ''}`}
    >
      <div className={`card-img img-cover ${aspect} mb-5 rounded-lg relative overflow-hidden`}>
        <img
          src={project.coverImage || project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="card-overlay flex items-end p-6 lg:p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[#F3F1ED] text-[10px] tracking-[0.24em] uppercase font-semibold flex items-center gap-2">
            View Case Study
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap text-xs">
            <span className="text-[9px] tracking-[0.26em] uppercase font-semibold text-[#B59A62]">
              {project.category}
            </span>
            {project.location && (
              <>
                <span className="text-[#151515]/30">•</span>
                <span
                  className="text-xs text-[#151515]/50 font-light"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {project.location}
                </span>
              </>
            )}
            {project.year && (
              <>
                <span className="text-[#151515]/30">•</span>
                <span className="text-xs text-[#151515]/50 font-light" style={{ fontFamily: 'var(--font-body)' }}>
                  {project.year}
                </span>
              </>
            )}
          </div>
          <h3
            className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2.2rem] font-light leading-snug group-hover:text-[#B59A62] transition-colors"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}
          >
            {project.title}
          </h3>
          {project.intro && (
            <p className="mt-2 text-xs sm:text-sm text-[#6F6B65] font-light line-clamp-2 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              {project.intro}
            </p>
          )}
        </div>
        {project.number && (
          <span
            className="text-[1.1rem] sm:text-[1.3rem] font-light text-[#151515]/30 group-hover:text-[#B59A62] transition-colors flex-shrink-0"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.number}
          </span>
        )}
      </div>
    </Link>
  );
}
