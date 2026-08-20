import Link from 'next/link';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';

const PROCESS_STEPS = [
  {
    number: '01',
    phaseLabel: 'PHASE 01 — IMMERSION',
    title: 'DISCOVER',
    subtitle: 'We begin by listening.',
    description:
      'We understand how the space needs to work, what matters to the client, and what opportunities the project presents. Through site visits, lifestyle questionnaires, light studies, and spatial audits, we uncover the foundation of the project.',
    keyPoints: [
      'Client lifestyle & functional requirements audit',
      'Architectural site orientation & natural light analysis',
      'Initial spatial potential & constraint identification',
      'Budget & vision framework alignment',
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Architectural space discovery and spatial audit for interior project',
  },
  {
    number: '02',
    phaseLabel: 'PHASE 02 — STRATEGY',
    title: 'DEFINE',
    subtitle: 'We turn conversations into a clear direction.',
    description:
      'The project requirements are organized into a focused design brief and creative framework. We define layout options, aesthetic principles, material priorities, and the structural strategy needed to guide every subsequent decision.',
    keyPoints: [
      'Focused design brief & creative direction document',
      '2D spatial layout exploration & circulation planning',
      'Material orientation & tactile direction swatches',
      'Project scope, timeline & cost estimation strategy',
    ],
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Interior design material palette and spatial layout concept swatches',
  },
  {
    number: '03',
    phaseLabel: 'PHASE 03 — CREATION',
    title: 'DESIGN',
    subtitle: 'Ideas begin to take shape.',
    description:
      'Layouts, materials, finishes, and visual details come together into one considered design language. We create high-fidelity 3D visualisations, custom joinery concepts, lighting schemes, and bespoke furniture selections that make the future space tangible.',
    keyPoints: [
      'Photorealistic 3D architectural visualisations',
      'Refined material palette & stone selection',
      'Custom joinery & millwork concept sketches',
      'Architectural lighting & ceiling detail planning',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Luxury interior living room design visualization and materials',
  },
  {
    number: '04',
    phaseLabel: 'PHASE 04 — SPECIFICATION',
    title: 'DEVELOP',
    subtitle: 'The vision becomes precise.',
    description:
      'Every important detail is refined and coordinated to prepare the design for execution. We produce full Good-for-Construction (GFC) technical drawing sets, millwork shop drawings, electrical/HVAC schematics, and an itemised Bill of Quantities.',
    keyPoints: [
      'Comprehensive GFC technical working drawing set',
      'Millwork, joinery & custom furniture shop drawings',
      'Electrical, plumbing & HVAC coordination plans',
      'Itemised Bill of Quantities (BOQ) with fixed pricing',
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Technical interior architectural drawings and detailed joinery specifications',
  },
  {
    number: '05',
    phaseLabel: 'PHASE 05 — REALISATION',
    title: 'DELIVER',
    subtitle: 'The final layers come together.',
    description:
      'The space is refined, completed, and prepared for the people who will experience it every day. We manage site execution, supervise craftsmen, handle procurement, conduct white-glove styling, and execute a flawless handover.',
    keyPoints: [
      'Daily on-site supervision & quality control management',
      'Specialist craftsman & trade contractor alignment',
      'White-glove deep cleaning, art curation & final styling',
      'Thorough snagging inspection & comprehensive handover pack',
    ],
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Completed luxury interior handover with curated art and fine styling',
  },
];

const EXPECTATIONS = [
  {
    num: '01',
    title: 'Clear Communication',
    desc: 'Direct line to your lead designer, structured weekly progress updates, and complete transparency on budget and timeline status.',
  },
  {
    num: '02',
    title: 'Thoughtful Decisions',
    desc: 'Every material sample, layout iteration, and fixture selection is presented with architectural rationale and cost clarity.',
  },
  {
    num: '03',
    title: 'Regular Coordination',
    desc: 'Proactive alignment with civil contractors, electrical engineers, structural consultants, and custom fabricators on site.',
  },
  {
    num: '04',
    title: 'Attention to Detail',
    desc: 'Meticulous standards for joinery reveals, stone grain matching, tile alignments, and concealed lighting channels.',
  },
  {
    num: '05',
    title: 'A Considered Final Outcome',
    desc: 'A space that feels quiet, layered, and completely personal — delivered ready for seamless living on day one.',
  },
];

const TIMELINE_FACTORS = [
  {
    title: 'Project Scope & Scale',
    desc: 'Full-apartment renovations, villa builds, or single-room refinements have distinct phase durations.',
  },
  {
    title: 'Architectural Approvals',
    desc: 'Society permissions, structural clearances, and municipal sign-offs influence the starting execution date.',
  },
  {
    title: 'Custom Joinery & Imports',
    desc: 'Bespoke stone carving, imported timber veneers, and handcrafted lighting require lead times for perfection.',
  },
  {
    title: 'Site Access & Conditions',
    desc: 'Working hours, noise restrictions, and site logistical access guide contractor schedules.',
  },
];

export default function ProcessPage() {
  return (
    <>
      <SEO
        title="Our Design Process — How We Work"
        description="Explore the complete SK Interior client journey from initial discovery to final handover. A disciplined 5-step approach to luxury interior architecture."
        canonical="/process"
      />

      <main className="overflow-x-hidden">
        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — PROCESS HERO
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-[120px] pb-16 lg:pt-[140px] lg:pb-20"
          style={{ background: 'var(--color-bg)' }}
        >
          {/* Subtle Ambient Glow */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[120px]"
            style={{ background: 'radial-gradient(circle, #B59A62 0%, transparent 70%)' }}
          />

          <div className="container-wide relative z-10 my-auto">
            <SectionReveal>
              <span className="section-label mb-6 text-[#B59A62] block">
                HOW WE WORK
              </span>
            </SectionReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Hero Left: Heading & Intro Paragraph */}
              <div className="lg:col-span-7">
                <SectionReveal delay={100}>
                  <h1
                    className="text-[2.2rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.4rem] xl:text-[5rem] leading-[1.02] tracking-[-0.03em] font-light text-[#F3F1ED] uppercase mb-8"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    FROM FIRST<br />
                    <span className="text-italic-serif text-[#B59A62]">
                      CONVERSATION
                    </span><br />
                    TO FINAL DETAIL.
                  </h1>
                </SectionReveal>

                <SectionReveal delay={200}>
                  <p
                    className="text-[15px] sm:text-[16.5px] leading-relaxed text-[#F3F1ED]/65 font-light max-w-xl"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Every project follows a considered journey — moving seamlessly from understanding your lifestyle and spatial requirements to bringing the final interior together with clarity, precision, and enduring craftsmanship.
                  </p>
                </SectionReveal>

                <SectionReveal delay={300}>
                  <div className="mt-10 flex flex-wrap items-center gap-6">
                    <Link
                      href="#complete-process"
                      className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[10px] tracking-[0.24em] uppercase font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                      style={{ background: 'var(--color-gold)', color: '#111111' }}
                    >
                      <span>Explore 5-Step Journey</span>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    
                    <span className="text-[11px] tracking-[0.2em] uppercase text-[#F3F1ED]/40 font-mono">
                      Phase 01 – 05
                    </span>
                  </div>
                </SectionReveal>
              </div>

              {/* Hero Right: Cinematic Architectural Image Frame */}
              <div className="lg:col-span-5">
                <SectionReveal direction="left" delay={250}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full relative">
                      <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                        alt="SK Interior architectural editorial representation"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between border-t border-white/10 bg-[#111111]/60 backdrop-blur-md">
                      <div>
                        <span className="text-[9px] tracking-[0.26em] uppercase text-[#B59A62] block font-semibold mb-1">
                          STUDIO PHILOSOPHY
                        </span>
                        <p className="text-[13px] text-[#F3F1ED]/90 font-light italic" style={{ fontFamily: 'var(--font-display)' }}>
                          &ldquo;Discipline creates freedom in spatial architecture.&rdquo;
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-[#B59A62]/40 flex items-center justify-center text-[#B59A62]">
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path d="M12 4v16m-8-8h16" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>

          {/* Scroll Cue */}
          <div className="container-wide relative z-10 pt-10 flex justify-between items-center text-[#F3F1ED]/30 text-[10px] tracking-[0.24em] uppercase">
            <span>SK INTERIOR PRACTICE</span>
            <div className="flex items-center gap-3">
              <span>Scroll to begin</span>
              <div className="w-4 h-7 rounded-full border border-white/20 flex justify-center pt-1.5">
                <div className="w-1 h-1.5 rounded-full bg-[#B59A62] animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — PROCESS INTRODUCTION
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="py-20 lg:py-28"
          style={{ background: 'var(--color-surface)' }}
        >
          <div className="container-narrow text-center">
            <SectionReveal>
              <span className="section-label mb-6 justify-center block">
                THE JOURNEY
              </span>
            </SectionReveal>

            <SectionReveal delay={100}>
              <h2
                className="text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] leading-[1.08] tracking-[-0.025em] font-light uppercase text-[#151515] max-w-3xl mx-auto mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                EVERY GREAT SPACE<br />
                STARTS WITH<br />
                <span className="text-italic-serif text-[#B59A62]">
                  UNDERSTANDING.
                </span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={200}>
              <p
                className="text-[15px] sm:text-[16.5px] leading-relaxed text-[#151515]/70 font-light max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                We believe exceptional design is born from deep inquiry and meticulous planning. Before a single material is specified or a single wall is moved, we take the time to understand how you live, how light travels through your rooms, and what feelings you wish your home to evoke.
              </p>
            </SectionReveal>

            <SectionReveal delay={250}>
              <div className="mt-12 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#151515]/10 bg-white/50 text-[10px] tracking-[0.24em] uppercase text-[#6F6B65]">
                <span className="w-2 h-2 rounded-full bg-[#B59A62]" />
                Structured · Collaborative · Transparent
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — THE COMPLETE PROCESS (DESKTOP & MOBILE RESPONSIVE)
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="complete-process"
          className="py-24 lg:py-36 relative overflow-hidden"
          style={{ background: 'var(--color-bg)' }}
        >
          {/* Section Header */}
          <div className="container-wide mb-16 lg:mb-24">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="section-label text-[#B59A62] mb-4 block">
                  5-PHASE METHODOLOGY
                </span>
                <h2
                  className="text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem] font-light text-[#F3F1ED] uppercase leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  THE ARCHITECTURAL <span className="text-italic-serif text-[#B59A62]">ROADMAP</span>
                </h2>
              </div>
              <p className="text-[14px] text-[#F3F1ED]/50 max-w-md font-light">
                From conceptual discovery to final white-glove handover, explore each milestone of our interior design journey.
              </p>
            </div>
          </div>

          <div className="container-wide relative">
            {/* ── DESKTOP IMMERSIVE JOURNEY (lg and above) ── */}
            <div className="hidden lg:block relative">
              {/* Central/Side Vertical Connecting Guide Line */}
              <div
                className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px pointer-events-none opacity-20"
                style={{
                  background: 'linear-gradient(to bottom, transparent, #B59A62 10%, #B59A62 90%, transparent)',
                }}
              />

              <div className="space-y-32">
                {PROCESS_STEPS.map((step, idx) => {
                  const isEven = idx % 2 === 0;

                  return (
                    <div
                      key={step.number}
                      className="relative grid grid-cols-12 gap-12 items-center"
                    >
                      {/* Step Number Central Marker */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
                        <div className="w-14 h-14 rounded-full border border-[#B59A62] bg-[#111111] text-[#B59A62] flex items-center justify-center font-serif text-lg font-light shadow-xl">
                          {step.number}
                        </div>
                      </div>

                      {/* Left Column */}
                      <div className={`col-span-6 ${isEven ? 'order-1 pr-12' : 'order-2 pl-12'}`}>
                        <SectionReveal direction={isEven ? 'left' : 'right'}>
                          <div className="media-frame group rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <div className="aspect-[4/3] w-full relative">
                              <img
                                src={step.image}
                                alt={step.imageAlt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#111111]/80 backdrop-blur-md text-[9px] tracking-[0.24em] uppercase text-[#B59A62] border border-white/10 font-mono">
                                {step.phaseLabel}
                              </span>
                            </div>
                          </div>
                        </SectionReveal>
                      </div>

                      {/* Right Column */}
                      <div className={`col-span-6 ${isEven ? 'order-2 pl-12' : 'order-1 pr-12'}`}>
                        <SectionReveal direction={isEven ? 'right' : 'left'}>
                          <div className="space-y-6">
                            <div className="flex items-center gap-4">
                              <span
                                className="text-[4rem] xl:text-[5.5rem] font-light leading-none text-white/10 select-none"
                                style={{ fontFamily: 'var(--font-display)' }}
                              >
                                {step.number}
                              </span>
                              <div>
                                <span className="text-[10px] tracking-[0.28em] uppercase font-bold text-[#B59A62] block">
                                  {step.phaseLabel}
                                </span>
                                <h3
                                  className="text-[2.2rem] xl:text-[2.8rem] font-light text-[#F3F1ED] leading-none uppercase mt-1"
                                  style={{ fontFamily: 'var(--font-display)' }}
                                >
                                  {step.title}
                                </h3>
                              </div>
                            </div>

                            <p
                              className="text-[1.2rem] font-light italic text-[#B59A62]"
                              style={{ fontFamily: 'var(--font-display)' }}
                            >
                              &ldquo;{step.subtitle}&rdquo;
                            </p>

                            <p
                              className="text-[15px] leading-relaxed text-[#F3F1ED]/70 font-light"
                              style={{ fontFamily: 'var(--font-body)' }}
                            >
                              {step.description}
                            </p>

                            {/* Key Highlights list */}
                            <div className="pt-4 border-t border-white/10">
                              <span className="text-[9px] tracking-[0.26em] uppercase font-semibold text-[#F3F1ED]/40 block mb-3">
                                KEY DELIVERABLES & FOCUS
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {step.keyPoints.map((pt, pIdx) => (
                                  <div key={pIdx} className="flex items-start gap-2.5 text-[12.5px] text-[#F3F1ED]/80 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#B59A62] mt-2 flex-shrink-0" />
                                    <span>{pt}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </SectionReveal>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── MOBILE & TABLET COMPACT VERTICAL TIMELINE (< lg) ── */}
            <div className="lg:hidden relative pl-6 sm:pl-10">
              {/* Continuous Vertical Timeline Line */}
              <div
                className="absolute top-4 bottom-4 left-3 sm:left-5 w-px"
                style={{ background: 'linear-gradient(to bottom, #B59A62, rgba(181, 154, 98, 0.2))' }}
              />

              <div className="space-y-16">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.number} className="relative group">
                    {/* Step Number Dot / Badge */}
                    <div className="absolute -left-[30px] sm:-left-[38px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#B59A62] bg-[#111111] text-[#B59A62] flex items-center justify-center font-serif text-xs sm:text-sm font-semibold shadow-md">
                      {step.number}
                    </div>

                    <SectionReveal>
                      <div className="bg-[#1A1A1A]/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
                        <div>
                          <span className="text-[9px] tracking-[0.26em] uppercase font-bold text-[#B59A62] block mb-1">
                            {step.phaseLabel}
                          </span>
                          <h3
                            className="text-[1.8rem] sm:text-[2.2rem] font-light text-[#F3F1ED] leading-none uppercase"
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-[14px] font-light italic text-[#B59A62] mt-2"
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            &ldquo;{step.subtitle}&rdquo;
                          </p>
                        </div>

                        {/* Image Frame - Controlled height */}
                        <div className="relative rounded-xl overflow-hidden aspect-[16/9] w-full border border-white/10">
                          <img
                            src={step.image}
                            alt={step.imageAlt}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <p
                          className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#F3F1ED]/70 font-light"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {step.description}
                        </p>

                        {/* Key Points */}
                        <div className="pt-4 border-t border-white/10 space-y-2">
                          <span className="text-[9px] tracking-[0.24em] uppercase text-[#F3F1ED]/40 font-semibold block mb-2">
                            DELIVERABLES
                          </span>
                          {step.keyPoints.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-[#F3F1ED]/80 font-light">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#B59A62] mt-1.5 flex-shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </SectionReveal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 — WHAT TO EXPECT
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="py-24 lg:py-32"
          style={{ background: 'var(--color-surface)' }}
        >
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Heading & Intro */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <SectionReveal>
                  <span className="section-label mb-6 block">
                    ALONG THE WAY
                  </span>
                  <h2
                    className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] leading-[1.05] tracking-[-0.025em] font-light uppercase text-[#151515] mb-6"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    A COLLABORATIVE<br />
                    PROCESS, FROM START<br />
                    <span className="text-italic-serif text-[#B59A62]">
                      TO FINISH.
                    </span>
                  </h2>
                  <p
                    className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#151515]/70 font-light"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    We prioritize trust, total budget clarity, and open dialogue at every phase. When you partner with SK Interior, you can expect an experienced team dedicated to turning complex construction into a calm, rewarding experience.
                  </p>
                </SectionReveal>
              </div>

              {/* Right Column: Refined Expectation List System (Typography & Dividers) */}
              <div className="lg:col-span-7">
                <div className="divide-y divide-[#151515]/10 border-t border-b border-[#151515]/10">
                  {EXPECTATIONS.map((exp, idx) => (
                    <SectionReveal key={exp.num} delay={idx * 80}>
                      <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-baseline group hover:bg-white/40 transition-colors px-4 rounded-xl">
                        <div className="sm:col-span-2 flex items-center gap-3">
                          <span
                            className="text-[1.8rem] font-light text-[#B59A62]"
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            {exp.num}
                          </span>
                          <span className="w-4 h-px bg-[#B59A62]/40 hidden sm:block" />
                        </div>
                        
                        <div className="sm:col-span-4">
                          <h3
                            className="text-[1.3rem] sm:text-[1.4rem] font-light text-[#151515] uppercase"
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            {exp.title}
                          </h3>
                        </div>

                        <div className="sm:col-span-6">
                          <p
                            className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#151515]/70 font-light"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {exp.desc}
                          </p>
                        </div>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5 — PROJECT TIMELINE NOTE
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="py-20 lg:py-28"
          style={{ background: 'var(--color-bg-alt)' }}
        >
          <div className="container-narrow">
            <SectionReveal>
              <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
                {/* Decorative background accent */}
                <div
                  className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-[90px] pointer-events-none"
                  style={{ background: '#B59A62' }}
                />

                <div className="relative z-10 max-w-3xl">
                  <span className="section-label text-[#B59A62] mb-6 block">
                    TIMELINE TRANSPARENCY
                  </span>

                  <h3
                    className="text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] font-light text-[#F3F1ED] uppercase leading-tight mb-6"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    UNDERSTANDING PROJECT <span className="text-italic-serif text-[#B59A62]">TIMELINES</span>
                  </h3>

                  <p
                    className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#F3F1ED]/70 font-light mb-10"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Every interior architecture project is unique. Timelines are never arbitrary — they are shaped by key variables such as structural scope, municipal approvals, bespoke millwork manufacturing, and site accessibility. We provide an exact, itemised schedule during Phase 02 and track milestones rigorously.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
                    {TIMELINE_FACTORS.map((f, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B59A62]" />
                          <h4 className="text-[13px] font-semibold tracking-[0.1em] uppercase text-[#F3F1ED]">
                            {f.title}
                          </h4>
                        </div>
                        <p className="text-[12.5px] text-[#F3F1ED]/50 leading-relaxed font-light pl-3.5">
                          {f.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6 — FINAL CTA
            ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="py-24 lg:py-36 relative overflow-hidden"
          style={{ background: 'var(--color-bg)' }}
        >
          {/* Ambient Glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-t-full pointer-events-none opacity-15 blur-[100px]"
            style={{ background: '#B59A62' }}
          />

          <div className="container-narrow text-center relative z-10">
            <SectionReveal>
              <span className="section-label text-[#B59A62] mb-6 justify-center block">
                READY TO BEGIN?
              </span>
            </SectionReveal>

            <SectionReveal delay={100}>
              <h2
                className="text-[2.4rem] sm:text-[3.6rem] lg:text-[4.5rem] leading-[1.02] tracking-[-0.03em] font-light uppercase text-[#F3F1ED] mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                LET&apos;S TAKE<br />
                <span className="text-italic-serif text-[#B59A62]">
                  THE FIRST STEP.
                </span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={200}>
              <p
                className="text-[15px] sm:text-[16.5px] leading-relaxed text-[#F3F1ED]/65 font-light max-w-xl mx-auto mb-12"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Whether you are planning a complete residential renovation, a villa in Alibaug, or a commercial space in Mumbai, we welcome the opportunity to discuss your vision and spatial aspirations.
              </p>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-full text-[10px] tracking-[0.26em] uppercase font-bold transition-all duration-300 hover:-translate-y-1 shadow-xl"
                  style={{ background: 'var(--color-gold)', color: '#111111' }}
                >
                  START A CONVERSATION
                </Link>

                <Link
                  href="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-full border border-white/20 text-[#F3F1ED] text-[10px] tracking-[0.26em] uppercase font-bold transition-all duration-300 hover:border-[#B59A62] hover:text-[#B59A62] hover:-translate-y-1"
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
