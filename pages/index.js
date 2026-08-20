import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import SEO from '../components/SEO';
import SectionReveal from '../components/SectionReveal';
import ProjectCard from '../components/ProjectCard';
import { API, BACKEND } from '../lib/api';
import { PROJECTS } from '../data/projects';

const DEFAULT_SLIDES = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80',
    alt: 'Pali Hill Residence — SK Interior',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
    alt: 'Altitude Penthouse — SK Interior',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80',
    alt: 'Merit Office Campus — SK Interior',
  },
];

const DEFAULT_TESTIMONIALS = [
  {
    name: 'Vikram & Radhika Mehta',
    loc: 'Pali Hill, Mumbai',
    text: 'SK Interior transformed our 3,200 sq ft apartment into a sanctuary of calm. Simran’s eye for material relationships and restraint created a space that feels deeply personal, quiet, and effortlessly luxurious.',
    project: 'The Pali Residence',
  },
  {
    name: 'Siddharth Singhania',
    loc: 'Worli, Mumbai',
    text: 'The altitude penthouse demanded a design that respected the sea view without feeling like a glass showroom. The dark walnut joinery and smoked oak flooring ground the space masterfully.',
    project: 'Altitude Penthouse',
  },
  {
    name: 'Tarun & Meera Grover',
    loc: 'Alibaug',
    text: 'Living in our Alibaug villa feels like floating between the interior and the landscape. The marine-grade teak and Kota stone age beautifully under coastal light.',
    project: 'The Sea Villa',
  },
];

const PRINCIPLES = [
  {
    number: '01',
    title: 'Context',
    description:
      'Every space responds to its architectural shell, surrounding light, and geographical setting. We design from the outside in.',
  },
  {
    number: '02',
    title: 'Materiality',
    description:
      'Authentic stones, solid timbers, and hand-applied plasters that gain character over time rather than wearing out.',
  },
  {
    number: '03',
    title: 'Function',
    description:
      'Uncompromised practical layouts engineered around daily rituals, circulation paths, and intuitive storage.',
  },
  {
    number: '04',
    title: 'Emotion',
    description:
      'Spaces designed to evoke feeling — creating atmosphere through light control, acoustic softness, and tactile warmth.',
  },
];

const SERVICE_CATEGORIES = [
  {
    number: '01',
    title: 'RESIDENTIAL',
    subtitle: 'Private Residences, Pent-houses & Coastal Villas',
    description:
      'End-to-end spatial planning, material curation, custom joinery, and interior architecture for high-end homes designed around how you live.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    link: '/services',
  },
  {
    number: '02',
    title: 'COMMERCIAL',
    subtitle: 'Headquarters, Executive Suites & Creative Workplaces',
    description:
      'Brand-aligned office environments and executive suites that foster focus, collaboration, and quiet prestige.',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    link: '/services',
  },
  {
    number: '03',
    title: 'HOSPITALITY',
    subtitle: 'Boutique Hotels, Fine Dining & Lifestyle Spaces',
    description:
      'Atmospheric hospitality design where lighting, acoustics, and tactile surfaces combine to create unforgettable guest experiences.',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    link: '/services',
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Brief & Site Audit',
    desc: 'Understanding your lifestyle, spatial requirements, site conditions, and budget parameters.',
  },
  {
    number: '02',
    title: 'Define',
    subtitle: 'Spatial Layouts & 3D',
    desc: 'Testing floorplate options and establishing 3D visualisations with material direction.',
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Technical Drawings',
    desc: 'Detailed GFC sets, joinery specifications, electrical plans, and fixed BOQs.',
  },
  {
    number: '04',
    title: 'Develop',
    subtitle: 'Execution & Crafts',
    desc: 'On-site construction supervision, artisan metal/stone work, and procurement tracking.',
  },
  {
    number: '05',
    title: 'Deliver',
    subtitle: 'Styling & Handover',
    desc: 'White-glove deep cleaning, art curation, final snagging, and key presentation.',
  },
];

export default function HomePage() {
  const [heroSlides, setHeroSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonials, setTestimonials] = useState(DEFAULT_TESTIMONIALS);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  // Fetch Hero and Testimonials from API with safety fallback
  useEffect(() => {
    axios
      .get(`${API}/hero`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const formatted = res.data.map((s) => ({
            imageUrl: s.imageUrl.startsWith('/uploads')
              ? `${BACKEND}${s.imageUrl}`
              : s.imageUrl,
            alt: s.alt || 'SK Interior',
          }));
          setHeroSlides(formatted);
        }
      })
      .catch(() => {});

    axios
      .get(`${API}/testimonials`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setTestimonials(res.data);
        }
      })
      .catch(() => {});
  }, []);

  const slides = heroSlides.length ? heroSlides : DEFAULT_SLIDES;

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <SEO
        title="Luxury Interior Design Studio, Mumbai"
        description="SK Interior is a premium interior design and architecture studio in Pali Hill, Mumbai. Specialising in residential, commercial, and hospitality interiors."
        canonical="/"
      />

      <main className="overflow-x-hidden">
        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — CINEMATIC FULLSCREEN HERO
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative h-screen min-h-[700px] max-h-[1100px] flex items-end bg-[#0A0A0A] text-[#F3F1ED] overflow-hidden">
          {/* Background Slideshow with Smooth Crossfade */}
          <div className="absolute inset-0 z-0">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: index === currentSlide ? 1 : 0 }}
              >
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  className="w-full h-full object-cover scale-105 transition-transform duration-10000 ease-out"
                  style={{
                    transform: index === currentSlide ? 'scale(1.0)' : 'scale(1.08)',
                  }}
                />
              </div>
            ))}
            {/* Dark Editorial Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/40" />
          </div>

          {/* Hero Content Layer */}
          <div className="container-wide relative z-10 pb-16 lg:pb-24 pt-36 sm:pt-40 lg:pt-44 w-full">
            <div className="max-w-4xl">
              <span className="section-label text-[#B59A62] mb-6 block">
                Pali Hill · Mumbai
              </span>

              {/* Large Editorial Headline */}
              <h1
                className="display-xl uppercase text-[#F3F1ED] mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SPACES<br />
                <span className="text-italic-serif font-normal text-[#B59A62]">
                  WITH
                </span><br />
                CHARACTER.
              </h1>

              {/* Supporting positioning copy */}
              <p
                className="max-w-xl text-[15px] sm:text-[17px] leading-relaxed text-[#F3F1ED]/70 font-light mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                SK Interior creates considered residential, commercial, and hospitality spaces shaped around the way people live and experience them.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[10.5px] tracking-[0.24em] uppercase font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'var(--color-gold)', color: '#111111' }}
                >
                  <span>Explore Selected Work</span>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-[#F3F1ED] text-[10.5px] tracking-[0.24em] uppercase font-semibold hover:border-[#B59A62] hover:text-[#B59A62] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Start a Project</span>
                </Link>
              </div>
            </div>

            {/* Bottom Row: Slide counter & refined scroll indicator */}
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-[#F3F1ED]/40 font-light">
              <div className="flex items-center gap-3">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-0.5 transition-all duration-500 ${
                      idx === currentSlide ? 'w-10 bg-[#B59A62]' : 'w-4 bg-white/20'
                    }`}
                  />
                ))}
                <span className="ml-2 font-mono text-[11px] tracking-widest text-[#B59A62]">
                  0{currentSlide + 1} / 0{slides.length}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-3 text-[10px] tracking-[0.24em] uppercase text-[#F3F1ED]/40">
                <span>Scroll to discover</span>
                <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
                  <div className="w-1 h-1.5 bg-[#B59A62] rounded-full animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — MANIFESTO / BRAND STATEMENT
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding relative" style={{ background: 'var(--color-surface)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-12 lg:gap-24 items-center">
              
              {/* Asymmetric Left Column: Manifesto Headline */}
              <SectionReveal direction="up">
                <span className="section-label mb-6 block">Studio Manifesto</span>
                <h2
                  className="display-lg text-[#151515] uppercase"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  WE DON&rsquo;T JUST{' '}
                  <span className="text-italic-serif text-[#B59A62] font-normal">
                    DESIGN ROOMS.
                  </span>{' '}
                  <span className="hidden sm:inline"><br /></span>
                  WE SHAPE THE WAY A SPACE MAKES YOU FEEL.
                </h2>
                
                <div className="mt-10 max-w-xl space-y-4 text-[15.5px] leading-relaxed text-[#6F6B65] font-light" style={{ fontFamily: 'var(--font-body)' }}>
                  <p>
                    Every architectural space possesses an inherent energy. Our role is not to impose heavy trends, but to listen to the light, proportion, and texture — sculpting environments that feel quiet, grounded, and enduring.
                  </p>
                </div>

                <div className="mt-10">
                  <Link href="/about" className="arrow-btn text-[#151515]">
                    Discover Studio Philosophy
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </SectionReveal>

              {/* Asymmetric Right Column: Strong Architectural Image */}
              <SectionReveal direction="right" delay={150}>
                <div className="relative">
                  <div className="img-cover ratio-3-4 rounded-xl shadow-luxe">
                    <img
                      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                      alt="SK Interior architectural statement"
                    />
                  </div>
                  {/* Subtle decorative badge */}
                  <div className="absolute -bottom-6 -left-6 bg-[#111111] text-[#F3F1ED] p-6 rounded-lg hidden sm:block shadow-strong">
                    <p className="text-[9px] tracking-[0.26em] uppercase text-[#B59A62] font-semibold mb-1">
                      Pali Hill Studio
                    </p>
                    <p className="text-xs font-light text-[#F3F1ED]/70" style={{ fontFamily: 'var(--font-body)' }}>
                      Est. 2015 · Mumbai
                    </p>
                  </div>
                </div>
              </SectionReveal>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — SELECTED WORK (MAJOR EDITORIAL PORTFOLIO)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
          <div className="container-wide">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
              <SectionReveal>
                <span className="section-label mb-3 block">Portfolio Highlights</span>
                <h2 className="display-lg text-[#F3F1ED]">
                  Selected<br />
                  <span className="text-italic-serif text-[#B59A62]">Works.</span>
                </h2>
              </SectionReveal>

              <SectionReveal delay={100}>
                <Link
                  href="/projects"
                  className="arrow-btn text-[#B59A62] text-[11px] tracking-[0.24em]"
                >
                  VIEW ALL PROJECTS
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </SectionReveal>
            </div>

            {/* 3 Major Editorial Project Features */}
            <div className="space-y-20">
              {PROJECTS.slice(0, 3).map((project, idx) => (
                <SectionReveal key={project.slug} delay={idx * 100}>
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Image Column - Alternating width layout */}
                      <div className={`lg:col-span-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="img-cover ratio-16-9 rounded-xl">
                          <img src={project.coverImage} alt={project.title} />
                        </div>
                      </div>

                      {/* Info Column */}
                      <div className={`lg:col-span-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <span
                            className="text-[#B59A62] text-xl font-light"
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            {project.number}
                          </span>
                          <span className="text-white/20">•</span>
                          <span className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#B59A62]">
                            {project.category}
                          </span>
                        </div>

                        <h3
                          className="text-[2.2rem] sm:text-[2.8rem] font-light text-[#F3F1ED] group-hover:text-[#B59A62] transition-colors duration-300 leading-tight mb-4"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {project.title}
                        </h3>

                        <p
                          className="text-xs tracking-wider uppercase text-[#F3F1ED]/40 font-light mb-6"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {project.location} · {project.year}
                        </p>

                        <p
                          className="text-sm leading-relaxed text-[#F3F1ED]/60 font-light line-clamp-3 mb-8"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {project.intro}
                        </p>

                        <span className="arrow-btn text-[#F3F1ED] group-hover:text-[#B59A62] transition-colors">
                          Explore Case Study
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>

                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 — DESIGN PHILOSOPHY (SPLIT EDITORIAL)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Large Architectural Image */}
              <div className="lg:col-span-5">
                <SectionReveal direction="left">
                  <div className="img-cover ratio-3-4 rounded-xl shadow-luxe">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                      alt="SK Interior Design Approach"
                    />
                  </div>
                </SectionReveal>
              </div>

              {/* Right Column: Principles */}
              <div className="lg:col-span-7">
                <SectionReveal direction="right">
                  <span className="section-label mb-4 block">Our Approach</span>
                  <h2 className="display-md text-[#151515] mb-12">
                    DESIGNED FOR<br />
                    <span className="text-italic-serif text-[#B59A62]">THE WAY YOU LIVE.</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                    {PRINCIPLES.map((p) => (
                      <div key={p.number} className="pt-6 border-t border-black/10">
                        <span
                          className="text-[#B59A62] text-xs font-semibold tracking-widest block mb-2"
                        >
                          {p.number} — {p.title}
                        </span>
                        <p
                          className="text-[14px] leading-relaxed text-[#6F6B65] font-light"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {p.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </SectionReveal>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5 — SERVICES EXPERIENCE (INTERACTIVE 3-CATEGORY ACCORDION)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
          <div className="container-wide">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
              <SectionReveal>
                <span className="section-label mb-3 block">Expertise</span>
                <h2 className="display-lg text-[#F3F1ED]">
                  Design<br />
                  <span className="text-italic-serif text-[#B59A62]">Disciplines.</span>
                </h2>
              </SectionReveal>

              <SectionReveal delay={100}>
                <Link
                  href="/services"
                  className="arrow-btn text-[#B59A62] text-[11px] tracking-[0.24em]"
                >
                  EXPLORE ALL SERVICES
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </SectionReveal>
            </div>

            {/* Interactive 3-Category Accordion & Image View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Category List Column */}
              <div className="lg:col-span-7 space-y-4">
                {SERVICE_CATEGORIES.map((srv, idx) => {
                  const isActive = activeService === idx;
                  return (
                    <div
                      key={srv.number}
                      onMouseEnter={() => setActiveService(idx)}
                      onClick={() => setActiveService(idx)}
                      className={`p-8 rounded-xl cursor-pointer transition-all duration-500 border ${
                        isActive
                          ? 'bg-white/5 border-[#B59A62]/40'
                          : 'bg-transparent border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <span
                            className={`text-2xl font-light transition-colors ${
                              isActive ? 'text-[#B59A62]' : 'text-white/20'
                            }`}
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            {srv.number}
                          </span>
                          <div>
                            <h3
                              className={`text-2xl sm:text-3xl font-light transition-colors ${
                                isActive ? 'text-[#F3F1ED]' : 'text-[#F3F1ED]/60'
                              }`}
                              style={{ fontFamily: 'var(--font-display)' }}
                            >
                              {srv.title}
                            </h3>
                            <p className="text-xs text-[#B59A62] font-light mt-1">
                              {srv.subtitle}
                            </p>
                          </div>
                        </div>

                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          className={`transition-transform duration-300 ${
                            isActive ? 'text-[#B59A62] translate-x-1' : 'text-white/20'
                          }`}
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      {/* Expandable description on active */}
                      {isActive && (
                        <div className="mt-6 pt-6 border-t border-white/10 text-sm leading-relaxed text-[#F3F1ED]/70 font-light" style={{ fontFamily: 'var(--font-body)' }}>
                          <p>{srv.description}</p>
                          <Link
                            href={srv.link}
                            className="inline-flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase font-semibold text-[#B59A62] mt-4 hover:underline"
                          >
                            View Scope & Pricing
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Image Display Column */}
              <div className="lg:col-span-5">
                <div className="img-cover ratio-4-3 rounded-xl shadow-strong">
                  <img
                    src={SERVICE_CATEGORIES[activeService].image}
                    alt={SERVICE_CATEGORIES[activeService].title}
                    className="transition-all duration-700 ease-out"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6 — PROCESS (5-STEP VISUAL JOURNEY)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
          <div className="container-wide">
            <SectionReveal>
              <span className="section-label mb-4 block">Methodology</span>
              <h2 className="display-lg text-[#151515] mb-16">
                From Concept<br />
                <span className="text-italic-serif text-[#B59A62]">to Keys.</span>
              </h2>
            </SectionReveal>

            {/* Horizontal Line (Desktop) / Vertical Line (Mobile) Connecting Steps */}
            <div className="relative">
              <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-px bg-black/15 z-0" />
              <div className="lg:hidden absolute top-4 bottom-4 left-[27px] w-px bg-black/15 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-8 relative z-10">
                {PROCESS_STEPS.map((step, idx) => (
                  <SectionReveal key={step.number} delay={idx * 80}>
                    <div className="bg-[#F3F1ED] pl-14 lg:pl-0 lg:bg-transparent pr-4">
                      {/* Step Indicator Dot */}
                      <div className="w-14 h-14 rounded-full bg-[#111111] text-[#B59A62] flex items-center justify-center font-mono text-sm mb-5 shadow-sm -ml-14 lg:ml-0">
                        {step.number}
                      </div>

                      <h3
                        className="text-xl font-light text-[#151515] mb-1"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#B59A62] mb-2">
                        {step.subtitle}
                      </p>
                      <p
                        className="text-xs leading-relaxed text-[#6F6B65] font-light"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="/process" className="arrow-btn text-[#151515]">
                Learn Complete Methodology
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 7 — FEATURED TESTIMONIAL (EDITORIAL SINGLE FEATURE)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
          <div className="container-narrow">
            <SectionReveal>
              <span className="section-label mb-8 block justify-center">Client Voice</span>

              <div className="text-center relative">
                {/* Large Quotation Mark */}
                <span
                  className="block text-[#B59A62]/20 leading-none select-none -mb-12"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '10rem' }}
                >
                  &ldquo;
                </span>

                {/* Main Quote Statement */}
                <p
                  className="display-md font-light text-[#F3F1ED] leading-snug mb-10"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {testimonials[activeTestimonial].text}
                </p>

                {/* Client Metadata */}
                <div>
                  <h4 className="text-base text-[#F3F1ED] font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-xs text-[#B59A62] font-light mt-1">
                    {testimonials[activeTestimonial].loc} {testimonials[activeTestimonial].project ? `· ${testimonials[activeTestimonial].project}` : ''}
                  </p>
                </div>

                {/* Switcher Controls */}
                {testimonials.length > 1 && (
                  <div className="flex items-center justify-center gap-3 mt-10">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`View testimonial ${i + 1}`}
                        onClick={() => setActiveTestimonial(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeTestimonial ? 'w-8 bg-[#B59A62]' : 'w-2 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 8 — FINAL PROJECT CTA (DRAMATIC EDITORIAL)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative py-28 lg:py-40 bg-[#0A0A0A] text-[#F3F1ED] overflow-hidden">
          {/* Background image with heavy dark gradient */}
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
              alt="SK Interior architectural background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />

          <div className="container-narrow relative z-10 text-center">
            <SectionReveal>
              <span className="section-label mb-8 block justify-center">Start a Conversation</span>

              <h2
                className="display-lg uppercase text-[#F3F1ED] mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                LET&rsquo;S CREATE<br />
                <span className="text-italic-serif text-[#B59A62] font-normal">
                  SOMETHING
                </span><br />
                EXTRAORDINARY.
              </h2>

              <p
                className="max-w-lg mx-auto text-[15px] leading-relaxed text-[#F3F1ED]/60 font-light mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                We accept a limited number of residential, commercial, and hospitality projects each year to ensure uncompromising quality.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-9 py-4 rounded-full text-[10.5px] tracking-[0.26em] uppercase font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'var(--color-gold)', color: '#111111' }}
                >
                  START A PROJECT
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-9 py-4 rounded-full border border-white/20 text-[#F3F1ED] text-[10.5px] tracking-[0.26em] uppercase font-semibold hover:border-[#B59A62] hover:text-[#B59A62] transition-all duration-300 hover:-translate-y-0.5"
                >
                  BOOK A CONSULTATION
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>
    </>
  );
}
