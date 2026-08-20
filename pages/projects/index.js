import { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import ProjectCard from '../../components/ProjectCard';
import SectionReveal from '../../components/SectionReveal';
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/projects';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Selected Portfolio"
        description="Explore the architecture and interior design portfolio of SK Interior — residential, commercial, and hospitality projects in Mumbai."
        canonical="/projects"
      />

      <main className="overflow-x-hidden">
        {/* ── Hero Section ── */}
        <section
          className="relative min-h-[45vh] lg:min-h-[50vh] flex flex-col justify-end"
          style={{ background: 'var(--color-bg)', paddingTop: '130px' }}
        >
          <div className="container-wide section-padding-sm">
            <span className="section-label text-[#B59A62] mb-6 block">
              SELECTED PORTFOLIO
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h1
                className="display-xl text-[#F3F1ED] max-w-[800px] uppercase"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SPACES WITH<br />
                <span className="text-italic-serif text-[#B59A62]">
                  A POINT OF VIEW.
                </span>
              </h1>
              <p
                className="max-w-md text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#F3F1ED]/55 font-light"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                A curated selection of residential residences, commercial workplaces, and hospitality environments designed with restraint and built to endure.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-12 pt-8 border-t border-white/10">
              {PROJECT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`min-h-[44px] px-6 py-2.5 rounded-full text-[10px] sm:text-[10.5px] tracking-[0.22em] uppercase font-semibold transition-all duration-300 ${
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

        {/* ── Project Grid Section ── */}
        <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
          <div className="container-wide">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl font-light text-[#151515]/60">No projects found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                {filteredProjects.map((project, idx) => (
                  <SectionReveal key={project.slug} delay={idx * 80}>
                    <ProjectCard
                      project={project}
                      aspect={idx % 3 === 0 ? 'ratio-16-9' : 'ratio-4-3'}
                    />
                  </SectionReveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Final Project Enquiry CTA ── */}
        <section className="section-padding text-center" style={{ background: 'var(--color-bg)' }}>
          <div className="container-narrow">
            <span className="section-label justify-center mb-8 block text-[#B59A62]">Start Your Journey</span>
            <h2 className="display-lg text-[#F3F1ED]">
              Have a project<br />
              <span className="text-italic-serif text-[#B59A62]">in mind?</span>
            </h2>
            <p className="mt-8 text-[15px] leading-relaxed text-[#F3F1ED]/45 font-light max-w-lg mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Let&rsquo;s discuss how we can transform your space into a sanctuary of refined elegance.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] px-8 py-4 rounded-full text-[10.5px] tracking-[0.24em] uppercase font-semibold transition-all hover:-translate-y-px"
                style={{ background: 'var(--color-gold)', color: '#111111' }}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
