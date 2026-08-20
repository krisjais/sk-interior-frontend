import Link from 'next/link';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';

const MAIN_SERVICES = [
  {
    number: '01',
    title: 'RESIDENTIAL DESIGN',
    subtitle: 'Apartments · Villas · Private Residences',
    description:
      'We craft personal living environments that balance functional clarity with sensory warmth. From oceanfront apartments in Bandra to coastal villas in Alibaug, our residential practice is rooted in understanding how you move through your home.',
    deliverables: [
      'Space planning & layout optimisation',
      'Material curation & finish specification',
      'Custom furniture & millwork design',
      'Architectural lighting & acoustic plan',
      'Art curation & final white-glove styling',
    ],
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    category: 'Residential',
  },
  {
    number: '02',
    title: 'COMMERCIAL INTERIORS',
    subtitle: 'Workplaces · Executive Suites · Retail Showrooms',
    description:
      'Work environments that embody brand identity while supporting focus, collaboration, and quiet prestige. We move away from generic corporate monotony to create workplaces that feel as considered as fine homes.',
    deliverables: [
      'Brand-aligned spatial strategy & zoning',
      'Executive suites & boardrooms',
      'Acoustic treatment & lighting integration',
      'Custom reception & social pantry zones',
      'Turnkey site management & handover',
    ],
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    category: 'Commercial',
  },
  {
    number: '03',
    title: 'HOSPITALITY DESIGN',
    subtitle: 'Hotels · Fine Dining · Cafés · Lifestyle Venues',
    description:
      'Atmospheric spaces where guest experience is paramount. We engineer every touchpoint — from entry thresholds and seating arrangements to ambient lighting and tactile surfaces — creating memorable destinations.',
    deliverables: [
      'Concept direction & spatial narrative',
      'Seating, bar & circulation design',
      'Custom light fixtures & furniture',
      'Durable material specification',
      'Turnkey delivery & staging',
    ],
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    category: 'Hospitality',
  },
];

const CAPABILITIES = [
  { number: '01', title: 'Space Planning', desc: 'Optimising floorplates for circulation, natural light, and intuitive living patterns.' },
  { number: '02', title: 'Interior Architecture', desc: 'Defining structural volume, wall treatments, ceiling detail, and spatial flow.' },
  { number: '03', title: 'Concept Development', desc: 'Establishing mood, material direction, and design language through visual studies.' },
  { number: '04', title: 'Material & Finish Selection', desc: 'Specifying authentic stone, timber, metal, and plaster that age with grace.' },
  { number: '05', title: 'Custom Furniture', desc: 'Bespoke joinery, millwork, and furniture engineered exclusively for your space.' },
  { number: '06', title: 'Lighting Design', desc: 'Layered architectural and decorative lighting plans for mood and functionality.' },
  { number: '07', title: 'Art & Styling', desc: 'Curating artworks, textiles, and decorative accessories for the final layer.' },
  { number: '08', title: 'Turnkey Execution', desc: 'Full site management, procurement tracking, and white-glove handover.' },
];

const COMPACT_PROCESS = [
  { number: '01', title: 'Discover', desc: 'Brief, site audit & lifestyle consultation' },
  { number: '02', title: 'Define', desc: 'Spatial layouts, 3D renders & material boards' },
  { number: '03', title: 'Design', desc: 'Technical GFC drawings & itemised BOQs' },
  { number: '04', title: 'Deliver', desc: 'Site execution, styling & white-glove key handover' },
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services — What We Do"
        description="Explore interior design services by SK Interior — residential design, commercial workplaces, and hospitality environments in Mumbai."
        canonical="/services"
      />

      <main className="overflow-x-hidden">
        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — SERVICES HERO
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="relative min-h-[55vh] lg:min-h-[60vh] flex flex-col justify-end"
          style={{ background: 'var(--color-bg)', paddingTop: '130px' }}
        >
          <div className="container-wide section-padding-sm">
            <span className="section-label text-[#B59A62] mb-6 block">
              WHAT WE DO
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 lg:gap-16 items-end">
              <div>
                <h1
                  className="display-xl text-[#F3F1ED] uppercase"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  DESIGNING SPACES<br />
                  <span className="text-italic-serif text-[#B59A62]">
                    WITH PURPOSE.
                  </span>
                </h1>
              </div>

              <div>
                <p
                  className="text-[14.5px] sm:text-[16px] leading-relaxed text-[#F3F1ED]/60 font-light max-w-lg mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  SK Interior crafts residential, commercial, and hospitality environments shaped around context, light, and how people live and work within them.
                </p>
                <div className="hidden sm:flex items-center gap-3 text-[10px] tracking-[0.24em] uppercase text-[#F3F1ED]/40 mt-6">
                  <span>Scroll to explore expertise</span>
                  <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
                    <div className="w-1 h-1.5 bg-[#B59A62] rounded-full animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — INTRODUCTION
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
              <SectionReveal direction="up">
                <span className="section-label mb-6 block">OUR EXPERTISE</span>
                <h2
                  className="display-lg text-[#151515] uppercase mb-8"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  EVERY SPACE<br />
                  <span className="text-italic-serif text-[#B59A62]">
                    TELLS A DIFFERENT STORY.
                  </span>
                </h2>

                <div
                  className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#6F6B65] font-light max-w-xl"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <p>
                    No two projects in our studio share the same layout, material palette, or architectural vocabulary. We approach every assignment as a blank canvas — responding to site geometry, natural light orientation, and the unique rituals of our clients.
                  </p>
                  <p>
                    Whether creating a quiet sanctuary for a family or a dynamic workplace for a growing enterprise, our methodology remains disciplined, transparent, and uncompromising in quality.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal direction="right" delay={150}>
                <div className="img-cover ratio-4-3 sm:ratio-3-4 rounded-xl shadow-luxe">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="SK Interior Expertise & Detail"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — MAIN SERVICES (3 MAJOR EDITORIAL SECTIONS)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
          <div className="container-wide">
            <div className="space-y-24 lg:space-y-32">
              {MAIN_SERVICES.map((service, idx) => (
                <SectionReveal key={service.number} delay={idx * 100}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    
                    {/* Image Column — Alternating on desktop, first on mobile */}
                    <div
                      className={`lg:col-span-6 ${
                        idx % 2 === 1 ? 'lg:order-2' : ''
                      }`}
                    >
                      <div className="img-cover ratio-4-3 sm:ratio-16-9 lg:ratio-4-3 rounded-xl shadow-strong">
                        <img src={service.image} alt={service.title} />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-6 ${
                        idx % 2 === 1 ? 'lg:order-1' : ''
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span
                          className="text-[#B59A62] text-2xl font-light"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {service.number}
                        </span>
                        <span className="text-white/20">•</span>
                        <span className="text-[10px] tracking-[0.26em] uppercase font-semibold text-[#B59A62]">
                          {service.category}
                        </span>
                      </div>

                      <h2
                        className="text-[2.2rem] sm:text-[3rem] font-light text-[#F3F1ED] leading-tight mb-3"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {service.title}
                      </h2>

                      <p className="text-xs text-[#B59A62] font-light mb-6">
                        {service.subtitle}
                      </p>

                      <p
                        className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#F3F1ED]/70 font-light mb-8"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {service.description}
                      </p>

                      {/* What We Provide List */}
                      <div className="mb-10 pt-6 border-t border-white/10">
                        <p className="text-[9.5px] tracking-[0.26em] uppercase font-semibold text-[#B59A62] mb-4">
                          WHAT WE PROVIDE
                        </p>
                        <ul className="space-y-2.5">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-[13.5px] text-[#F3F1ED]/80 font-light"
                              style={{ fontFamily: 'var(--font-body)' }}
                            >
                              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#B59A62] flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Service CTA */}
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 min-h-[44px] px-8 py-3.5 rounded-full border border-[#B59A62]/40 text-[#F3F1ED] text-[10px] tracking-[0.24em] uppercase font-semibold hover:bg-[#B59A62] hover:text-[#111111] hover:border-[#B59A62] transition-all"
                      >
                        <span>DISCUSS YOUR PROJECT</span>
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>

                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 — OUR DESIGN CAPABILITIES
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
          <div className="container-wide">
            <SectionReveal>
              <span className="section-label mb-4 block">SCOPE OF PRACTICE</span>
              <h2 className="display-lg text-[#151515] mb-16">
                Design<br />
                <span className="text-italic-serif text-[#B59A62]">Capabilities.</span>
              </h2>
            </SectionReveal>

            {/* Numbered Capabilities List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {CAPABILITIES.map((cap, idx) => (
                <SectionReveal key={cap.number} delay={idx * 60}>
                  <div className="pt-6 border-t border-black/15">
                    <span className="text-[#B59A62] font-mono text-sm font-semibold block mb-3">
                      {cap.number}
                    </span>
                    <h3
                      className="text-xl font-light text-[#151515] mb-2"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {cap.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed text-[#6F6B65] font-light"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {cap.desc}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5 — HOW WE WORK (COMPACT PROCESS PREVIEW)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
          <div className="container-wide">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
              <SectionReveal>
                <span className="section-label mb-3 block">STUDIO METHODOLOGY</span>
                <h2 className="display-lg text-[#F3F1ED]">
                  How We<br />
                  <span className="text-italic-serif text-[#B59A62]">Work.</span>
                </h2>
              </SectionReveal>

              <SectionReveal delay={100}>
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

            {/* Compact Process Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMPACT_PROCESS.map((p, i) => (
                <div key={p.number} className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#B59A62] font-mono text-xs font-semibold block mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-light text-[#F3F1ED] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#F3F1ED]/50 font-light leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6 — SERVICE CTA (DRAMATIC EDITORIAL)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative py-28 lg:py-36 bg-[#0A0A0A] text-[#F3F1ED] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
              alt="SK Interior background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]" />

          <div className="container-narrow relative z-10 text-center">
            <SectionReveal>
              <span className="section-label mb-6 block justify-center text-[#B59A62]">
                STARTING SOMETHING NEW?
              </span>

              <h2
                className="display-lg uppercase text-[#F3F1ED] mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                LET&rsquo;S DESIGN<br />
                <span className="text-italic-serif text-[#B59A62]">
                  YOUR NEXT SPACE.
                </span>
              </h2>

              <p
                className="max-w-lg mx-auto text-[15px] leading-relaxed text-[#F3F1ED]/60 font-light mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Reach out to our studio team to discuss your project requirements, space specifications, and timelines.
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
