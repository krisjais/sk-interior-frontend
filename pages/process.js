import SEO from '../components/SEO';

const STEPS = [
  {
    number: '01',
    phase: 'Discovery & Consultation',
    duration: 'Week 1 – 2',
    title: 'Understanding your world',
    description:
      'Every project begins with a conversation. We visit your site, study the light and orientation, and spend time understanding how you live or work. We discuss aspirations, practical requirements, timelines, and budget frameworks.',
    deliverables: [
      'Detailed project brief & lifestyle questionnaire',
      'Site dimension & architectural audit',
      'Budget and timeline framework',
      'Initial material board & mood orientation',
    ],
  },
  {
    number: '02',
    phase: 'Concept & Spatial Layout',
    duration: 'Week 3 – 5',
    title: 'Defining the spatial structure',
    description:
      'We test multiple spatial configurations to unlock the full potential of your floorplate. Once a layout direction is selected, we develop 3D architectural visualisations and preliminary material swatches.',
    deliverables: [
      '2D floor plans & furniture layouts (multiple options)',
      'High-fidelity 3D spatial renders',
      'Key elevation studies',
      'Primary material & finish direction',
    ],
  },
  {
    number: '03',
    phase: 'Detailed Design & Specification',
    duration: 'Week 6 – 10',
    title: 'Translating vision to drawings',
    description:
      'This is where design becomes actionable. We produce comprehensive technical drawings for every custom joinery piece, electrical point, plumbing layout, and ceiling detail — leaving nothing to chance on site.',
    deliverables: [
      'Full technical working drawing set (GFC)',
      'Custom joinery & millwork shop drawings',
      'Electrical, lighting & HVAC layout plans',
      'Complete Bill of Quantities (BOQ) with fixed pricing',
    ],
  },
  {
    number: '04',
    phase: 'Procurement & Site Execution',
    duration: 'Month 3 – 7',
    title: 'Craftsmanship in motion',
    description:
      'Our project team takes over site supervision. We work with trusted craftspeople, stone suppliers, and specialist contractors while managing procurement timelines to ensure seamless execution.',
    deliverables: [
      'On-site project management & daily supervision',
      'Material sample approvals & mockups',
      'Procurement & logistics tracking',
      'Quality assurance & milestone sign-offs',
    ],
  },
  {
    number: '05',
    phase: 'Styling & Handover',
    duration: 'Final Month',
    title: 'The final layer',
    description:
      'Once construction completes, we deep-clean the space and install curtains, art, lighting fixtures, and decorative objects. We conduct a thorough snagging review before presenting you with the keys to your new space.',
    deliverables: [
      'Full white-glove deep clean',
      'Art curation, styling & accessory placement',
      'Comprehensive snagging inspection & resolution',
      'Handover pack (warranties, care manuals, maintenance contacts)',
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <SEO
        title="Design Process"
        description="Discover how SK Interior turns ideas into refined spaces through a structured, 5-phase design and execution process."
        canonical="/process"
      />

      <main>
        {/* ── Hero ── */}
        <section
          className="relative min-h-[50vh] flex flex-col justify-end"
          style={{ background: 'var(--color-bg)', paddingTop: '120px' }}
        >
          <div className="container-wide section-padding-sm">
            <span className="section-label mb-8 block">Methodology</span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h1 className="display-xl text-[#F3F1ED] max-w-[800px]">
                A disciplined process.<br />
                <span className="text-italic-serif text-[#B59A62]">Predictable excellence.</span>
              </h1>
              <p
                className="max-w-md text-[14.5px] leading-relaxed text-[#F3F1ED]/50 font-light"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Great interior design is equal parts artistic intuition and rigorous project management. Here is how we guide every project from concept to keys.
              </p>
            </div>
          </div>
        </section>

        {/* ── Timeline / Steps ── */}
        <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
          <div className="container-wide">
            <div className="space-y-16">
              {STEPS.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-[1.5fr_3fr_3fr] gap-8 lg:gap-12 pt-12"
                  style={{ borderTop: '1px solid var(--color-line)' }}
                >
                  {/* Step Number & Duration */}
                  <div>
                    <span className="step-number block">{step.number}</span>
                    <span className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#B59A62] block mt-2">
                      {step.phase}
                    </span>
                    <span className="text-xs text-[#151515]/40 font-light block mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                      {step.duration}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3
                      className="text-[1.8rem] lg:text-[2.2rem] font-light mb-4"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[14.5px] leading-relaxed font-light"
                      style={{ color: 'var(--color-ink-soft)', fontFamily: 'var(--font-body)' }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div>
                    <h4
                      className="text-[9px] tracking-[0.26em] uppercase font-semibold text-[#B59A62] mb-4"
                    >
                      Key Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {step.deliverables.map((deliv) => (
                        <li
                          key={deliv}
                          className="flex items-start gap-3 text-[13.5px] font-light"
                          style={{ color: 'var(--color-ink-soft)', fontFamily: 'var(--font-body)' }}
                        >
                          <span
                            className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: 'var(--color-gold)' }}
                          />
                          {deliv}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
          <div className="container-narrow">
            <span className="section-label mb-8 block">Clarity & Expectations</span>
            <h2 className="display-md text-[#F3F1ED] mb-12">Frequently Asked Questions</h2>

            <div className="space-y-8">
              {[
                {
                  q: 'What is the typical timeline for a complete residential project?',
                  a: 'A typical 3,000 sq ft apartment project takes 5 to 7 months from initial layout approval to final handover. Design phase takes 6–8 weeks, while procurement and site execution take 3–5 months.',
                },
                {
                  q: 'Do you take on projects outside Mumbai?',
                  a: 'Yes. While our studio is based in Pali Hill, Mumbai, we regularly design residences and villas in Alibaug, Goa, Lonavala, and major metro cities across India.',
                },
                {
                  q: 'How are fees structured?',
                  a: 'We work on a fixed design fee based on square footage and project complexity, combined with transparent procurement management. All costs are itemised in advance with no hidden margins.',
                },
                {
                  q: 'Can I choose my own contractor?',
                  a: 'Yes. While we have trusted contracting partners with whom we have worked for years, we are happy to work alongside your chosen builder or contractor provided they adhere to technical drawing specifications.',
                },
              ].map((faq, i) => (
                <div key={i} className="pb-8 border-b border-white/10">
                  <h3 className="text-[1.2rem] font-light text-[#F3F1ED] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    {faq.q}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#F3F1ED]/50 font-light" style={{ fontFamily: 'var(--font-body)' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding text-center" style={{ background: 'var(--color-surface)' }}>
          <div className="container-narrow">
            <h2 className="display-lg text-[#151515]">
              Ready to start<br />
              <span className="text-italic-serif text-[#B59A62]">Phase 01?</span>
            </h2>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-[10px] tracking-[0.24em] uppercase font-semibold transition-all hover:-translate-y-px"
                style={{ background: 'var(--color-gold)', color: '#111111' }}
              >
                Book Discovery Call
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
