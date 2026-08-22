import Link from 'next/link';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';

const DESIGN_PRINCIPLES = [
  {
    number: '01',
    title: 'CONTEXT',
    subtitle: 'Surrounding & Shell',
    body: 'Every space should belong to its surroundings. We study light, architectural proportion, and regional context before drawing a single line.',
  },
  {
    number: '02',
    title: 'FUNCTION',
    subtitle: 'Effortless Living',
    body: 'Beautiful spaces must work effortlessly. Layouts are engineered around daily rituals, intuitive circulation, and integrated storage.',
  },
  {
    number: '03',
    title: 'MATERIALITY',
    subtitle: 'Tactile Honesty',
    body: 'Materials should bring depth and character. We specify authentic timber, stone, and plasters that gain beauty as they age.',
  },
  {
    number: '04',
    title: 'LIGHT',
    subtitle: 'Architectural Shadow',
    body: 'Light shapes how a space is experienced. We layer natural day lighting with warm, dimmable architectural fixtures.',
  },
  {
    number: '05',
    title: 'EMOTION',
    subtitle: 'Atmosphere & Spirit',
    body: 'The strongest spaces leave a lasting feeling — creating a sense of quiet sanctuary that supports daily life.',
  },
];

const TEAM_MEMBERS = [
  {
    name: 'Simran Kapoor',
    role: 'Principal Designer & Founder',
    bio: 'Leads spatial design direction and material philosophy across all residential and hospitality commissions.',
  },
  {
    name: 'Rohit Shenoy',
    role: 'Head of Project Delivery',
    bio: 'Oversees site execution, technical drawings, and craftsman coordination across active sites in Mumbai.',
  },
  {
    name: 'Anika Mehta',
    role: 'Senior Interior Architect',
    bio: 'Specialises in custom joinery detail, stone specification, and lighting plans.',
  },
];

const STUDIO_FACTS = [
  { label: 'Based In', value: 'Santacruz, Mumbai' },
  { label: 'Practice Areas', value: 'Residential · Commercial · Hospitality' },
  { label: 'Design Approach', value: 'Bespoke Interior Architecture' },
  { label: 'Project Scope', value: 'Turnkey Delivery & Material Advisory' },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Studio — Our Philosophy & Approach"
        description="SK Interior is a luxury interior architecture practice in Santacruz, Mumbai. Learn about our studio story, design principles, and approach."
        canonical="/about"
      />

      <main className="overflow-x-hidden">
        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — STUDIO HERO
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="relative min-h-[55vh] lg:min-h-[60vh] flex flex-col justify-end"
          style={{ background: 'var(--color-bg)', paddingTop: '130px' }}
        >
          <div className="container-wide section-padding-sm">
            <span className="section-label text-[#B59A62] mb-6 block">
              THE STUDIO
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 lg:gap-16 items-end">
              <div>
                <h1
                  className="display-xl text-[#F3F1ED] uppercase"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  DESIGN WITH<br />
                  <span className="text-italic-serif text-[#B59A62]">
                    A POINT OF VIEW.
                  </span>
                </h1>
              </div>

              <div>
                <p
                  className="text-[14.5px] sm:text-[16px] leading-relaxed text-[#F3F1ED]/60 font-light max-w-lg"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  SK Interior was established in Santacruz, Mumbai as an interior architecture studio dedicated to spatial restraint, authentic materials, and long-term thinking.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Architectural Image */}
          <div className="img-cover w-full" style={{ height: 'clamp(360px, 50vw, 650px)' }}>
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
              alt="SK Interior Studio Project"
            />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — OUR STORY
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
              <SectionReveal direction="up">
                <span className="section-label mb-6 block">OUR STORY</span>
                <h2
                  className="display-lg text-[#151515] uppercase"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  BUILT AROUND<br />
                  <span className="text-italic-serif text-[#B59A62]">
                    HOW PEOPLE LIVE.
                  </span>
                </h2>
              </SectionReveal>

              <SectionReveal direction="right" delay={100}>
                <div className="space-y-6 text-[15px] sm:text-[16px] leading-relaxed text-[#6F6B65] font-light" style={{ fontFamily: 'var(--font-body)' }}>
                  <p className="text-[18px] sm:text-[21px] text-[#151515] font-normal leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                    &ldquo;The quietest rooms are often the most powerful. Our work is not about filling space with ornament, but carving out room for life to happen.&rdquo;
                  </p>
                  <div className="h-px bg-black/10 my-6" />
                  <p>
                    SK Interior began with a simple observation: many contemporary interiors are designed to impress in photographs, but fail to support the quiet rhythm of daily life. We set out to build a practice focused on sensory warmth, natural materials, and spatial longevity.
                  </p>
                  <p>
                    Over the years, our studio has completed residences, penthouses, headquarter offices, and hospitality venues across Mumbai, Alibaug, and Goa. Every commission is approached with the same discipline — testing floorplate efficiency, selecting authentic stones and timbers, and refining joinery details until nothing feels out of place.
                  </p>
                </div>
              </SectionReveal>
            </div>

            {/* Story Imagery Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <SectionReveal delay={100}>
                <div className="img-cover ratio-16-9 rounded-xl shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="SK Interior detail"
                  />
                </div>
              </SectionReveal>
              <SectionReveal delay={200}>
                <div className="img-cover ratio-16-9 rounded-xl shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
                    alt="SK Interior materials"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — STUDIO PHILOSOPHY
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding text-center" style={{ background: 'var(--color-bg)' }}>
          <div className="container-narrow">
            <SectionReveal>
              <span className="section-label justify-center mb-8 block text-[#B59A62]">
                PHILOSOPHY
              </span>

              <h2
                className="text-[2.2rem] sm:text-[3.2rem] lg:text-[4rem] font-light leading-tight text-[#F3F1ED] uppercase mb-10"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                GOOD DESIGN IS NOT<br />
                <span className="text-italic-serif text-[#B59A62]">
                  JUST WHAT YOU SEE.
                </span><br />
                IT&rsquo;S WHAT YOU FEEL.
              </h2>

              <p
                className="max-w-2xl mx-auto text-[15px] sm:text-[16.5px] leading-relaxed text-[#F3F1ED]/65 font-light"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                We evaluate every spatial decision across five dimensions: context, function, authentic materiality, light quality, and emotional atmosphere. When these elements align, a space becomes a true sanctuary.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 — DESIGN PRINCIPLES (EDITORIAL NUMBERED LIST)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
          <div className="container-wide">
            <SectionReveal>
              <span className="section-label mb-4 block">OUR FOUNDATIONS</span>
              <h2 className="display-lg text-[#151515] mb-16">
                Five Design<br />
                <span className="text-italic-serif text-[#B59A62]">Principles.</span>
              </h2>
            </SectionReveal>

            <div className="space-y-0">
              {DESIGN_PRINCIPLES.map((principle, idx) => (
                <SectionReveal key={principle.number} delay={idx * 80}>
                  <div
                    className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_3fr] gap-6 lg:gap-12 py-8 lg:py-12"
                    style={{ borderTop: '1px solid var(--color-line)' }}
                  >
                    <div>
                      <span className="step-number block">{principle.number}</span>
                    </div>

                    <div>
                      <h3
                        className="text-2xl font-light text-[#151515] mb-1"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {principle.title}
                      </h3>
                      <p className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#B59A62]">
                        {principle.subtitle}
                      </p>
                    </div>

                    <div>
                      <p
                        className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#6F6B65] font-light"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {principle.body}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5 — THE WAY WE WORK (STUDIO APPROACH PREVIEW)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              <div className="lg:col-span-5">
                <SectionReveal direction="left">
                  <span className="section-label mb-4 block text-[#B59A62]">OUR APPROACH</span>
                  <h2
                    className="display-lg text-[#F3F1ED] uppercase mb-8"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    LISTEN.<br />
                    <span className="text-italic-serif text-[#B59A62]">EXPLORE.</span><br />
                    CREATE.
                  </h2>
                  <p
                    className="text-[15px] leading-relaxed text-[#F3F1ED]/60 font-light mb-8"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Our process begins with active listening — understanding how you live, work, and interact with your environment before proposing layout alternatives.
                  </p>
                  <Link
                    href="/process"
                    className="arrow-btn text-[#B59A62] text-[11px] tracking-[0.24em] min-h-[44px] inline-flex items-center"
                  >
                    EXPLORE OUR PROCESS
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </SectionReveal>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-6">
                  {[
                    { title: 'Listen', step: '01', desc: 'Deep-dive lifestyle consultation, site audit, and spatial brief analysis.' },
                    { title: 'Explore', step: '02', desc: 'Developing 2D layouts, 3D visualisations, and physical material swatches.' },
                    { title: 'Create', step: '03', desc: 'Detailed GFC working drawings, custom joinery, site management, and handover.' },
                  ].map((item) => (
                    <div key={item.step} className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-6">
                      <span className="text-[#B59A62] font-mono text-sm font-semibold">{item.step}</span>
                      <div>
                        <h4 className="text-xl font-light text-[#F3F1ED] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#F3F1ED]/55 font-light leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6 — STUDIO PRACTICE & ROLES (CLEAN TYPOGRAPHIC EDITORIAL)
            SECTION 7 — STUDIO DETAILS
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
          <div className="container-wide">
            {/* Team Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10">
              <SectionReveal>
                <span className="section-label mb-3 block">STUDIO PRACTICE</span>
                <h2 className="display-lg text-[#151515]">
                  Behind the<br />
                  <span className="text-italic-serif text-[#B59A62]">Process.</span>
                </h2>
              </SectionReveal>
            </div>

            {/* Editorial Typographic Cards (No Headshots/People Images) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
              {TEAM_MEMBERS.map((member, idx) => (
                <SectionReveal key={member.name} delay={idx * 80}>
                  <div className="p-8 rounded-xl bg-white/60 border border-black/10 shadow-sm flex flex-col justify-between min-h-[220px]">
                    <div>
                      <span className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#B59A62] block mb-3">
                        0{idx + 1} — {member.role}
                      </span>
                      <h3
                        className="text-[1.5rem] font-light text-[#151515] mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-[13.5px] leading-relaxed text-[#6F6B65] font-light"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            {/* Section 7 — Verified Studio Details Bar */}
            <div className="pt-12 border-t border-black/15">
              <span className="section-label mb-8 block">STUDIO OVERVIEW</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[13px]">
                {STUDIO_FACTS.map((fact) => (
                  <div key={fact.label}>
                    <p className="text-[9.5px] tracking-[0.22em] uppercase font-semibold text-[#B59A62] mb-1">
                      {fact.label}
                    </p>
                    <p className="text-[#151515]/80 font-light" style={{ fontFamily: 'var(--font-body)' }}>
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 8 — FINAL CTA
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative py-28 lg:py-36 bg-[#0A0A0A] text-[#F3F1ED] overflow-hidden">
          <div className="container-narrow relative z-10 text-center">
            <SectionReveal>
              <span className="section-label mb-6 block justify-center text-[#B59A62]">
                HAVE A SPACE IN MIND?
              </span>

              <h2
                className="display-lg uppercase text-[#F3F1ED] mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                LET&rsquo;S CREATE<br />
                <span className="text-italic-serif text-[#B59A62]">
                  SOMETHING WITH CHARACTER.
                </span>
              </h2>

              <p
                className="max-w-lg mx-auto text-[15px] leading-relaxed text-[#F3F1ED]/60 font-light mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                We accept a limited number of commissions each year to ensure every space receives our full creative focus and site supervision.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center min-h-[44px] px-9 py-4 rounded-full text-[10.5px] tracking-[0.26em] uppercase font-semibold transition-all hover:-translate-y-px"
                  style={{ background: 'var(--color-gold)', color: '#111111' }}
                >
                  START A PROJECT
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center min-h-[44px] px-9 py-4 rounded-full border border-white/20 text-[#F3F1ED] text-[10.5px] tracking-[0.26em] uppercase font-semibold hover:border-[#B59A62] hover:text-[#B59A62] transition-all"
                >
                  VIEW SELECTED WORK
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>
    </>
  );
}
