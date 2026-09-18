import Link from 'next/link';
import SectionReveal from './SectionReveal';

const PRICING_CARDS = [
  {
    bhk: '1 BHK',
    startingPrice: '₹4.30',
    priceUnit: 'Lakh',
    description: 'Smart & Functional Interiors',
    category: 'Essential Spatial Design',
    image: 'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: '1 BHK Modern Compact Interior with Sleek Kitchen and Living by SK Interior',
    highlights: [
      'Compact living & dining optimisation',
      'Modular kitchen & sleek cabinetry',
      'Custom bedroom wardrobe & lighting',
    ],
    isProminent: false,
    delay: 100,
  },
  {
    bhk: '2 BHK',
    startingPrice: '₹7',
    priceUnit: 'Lakh',
    description: 'Elegant & Comfortable Interiors',
    category: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1200&q=80',
    imageAlt: '2 BHK Elegant Living Room with Architectural Lighting & Veneer Panelling by SK Interior',
    highlights: [
      'Living, dining & 2 bedroom curation',
      'Premium veneer joinery & wall panelling',
      'Architectural false ceiling & cove lights',
    ],
    isProminent: true,
    delay: 200,
  },
  {
    bhk: '3 BHK',
    startingPrice: '₹12',
    priceUnit: 'Lakh',
    description: 'Premium & Luxury Interiors',
    category: 'Full Residence Curation',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: '3 BHK Luxury Living Residence with Wood Feature Wall and Marble Accents by SK Interior',
    highlights: [
      'Expansive living & full 3 bedroom suite',
      'Italian marble & artisan metalwork',
      'Walk-in dressing & ambient automation',
    ],
    isProminent: false,
    delay: 300,
  },
];

// Reusing studio WhatsApp configuration from contact.js (Phone: +91 98707 60240)
const STUDIO_WHATSAPP_URL =
  'https://wa.me/919870760240?text=Hi%20SK%20Interior%2C%20I%27d%20like%20to%20get%20an%20approximate%20interior%20design%20quote%20for%20my%20home.';

export default function CostGuideSection() {
  return (
    <section
      id="cost-guide"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
      aria-label="Interior Design Cost Guide"
    >
      {/* Subtle ambient warm glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full pointer-events-none opacity-10 blur-[130px]"
        style={{ background: 'var(--color-gold)' }}
      />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16 lg:mb-20">
          <SectionReveal>
            <span className="section-label mb-4 inline-flex">
              Investment Guide
            </span>
            <h2
              className="display-lg uppercase text-[#F3F1ED]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Interior Design<br />
              <span className="text-italic-serif text-[#B59A62]">Cost Guide.</span>
            </h2>
            <p
              className="mt-6 text-[15px] sm:text-[16.5px] leading-relaxed text-[#F3F1ED]/65 font-light"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get an approximate idea of your interior investment based on your home size.
            </p>
          </SectionReveal>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_CARDS.map((card) => {
            const isProminent = card.isProminent;

            return (
              <SectionReveal
                key={card.bhk}
                delay={card.delay}
                className="h-full flex flex-col"
              >
                <div
                  className={`h-full flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-500 relative group ${
                    isProminent
                      ? 'bg-[#131313] border border-[#B59A62]/60 shadow-luxe hover:border-[#B59A62] hover:-translate-y-1.5'
                      : 'bg-[#131313] border border-white/10 shadow-card hover:border-[#B59A62]/40 hover:-translate-y-1'
                  }`}
                >
                  {/* Top Image Section with Gradient & Badges */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden flex-shrink-0">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Dark gradient overlay blending into card content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-black/50" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="inline-flex items-center backdrop-blur-md bg-black/60 px-3 py-1 rounded-full text-[9px] tracking-[0.22em] uppercase font-semibold text-[#B59A62] border border-[#B59A62]/30 shadow-sm">
                        {card.category}
                      </span>
                      {isProminent && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[8.5px] tracking-[0.2em] uppercase font-bold bg-[#B59A62] text-[#111111] shadow-lg">
                          Recommended
                        </span>
                      )}
                    </div>

                    {/* BHK Title at base of image */}
                    <div className="absolute bottom-3 left-6 sm:left-8">
                      <h3
                        className="text-[2.2rem] sm:text-[2.6rem] font-light text-[#F3F1ED] leading-none drop-shadow-md"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {card.bhk}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Price Block */}
                      <div className="mb-4">
                        <span
                          className="text-[10px] tracking-[0.22em] uppercase font-medium text-[#F3F1ED]/40 block mb-1.5"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          Starting from
                        </span>
                        <div
                          className="text-[2.2rem] sm:text-[2.6rem] font-light text-[#F3F1ED] leading-none tracking-tight flex items-baseline gap-2"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          <span>{card.startingPrice}</span>
                          <span className="text-xl sm:text-2xl font-light text-[#B59A62]">
                            {card.priceUnit}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className="text-[14px] leading-relaxed text-[#F3F1ED]/70 font-light mb-6"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {card.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2.5 mb-8 text-xs text-[#F3F1ED]/70 border-t border-white/10 pt-5">
                        {card.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B59A62] flex-shrink-0" />
                            <span className="font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 border-t border-white/10 mt-auto">
                      <Link
                        href="/contact"
                        className={`inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-full text-[10px] tracking-[0.24em] uppercase font-semibold transition-all duration-300 ${
                          isProminent
                            ? 'hover:brightness-110 shadow-md hover:-translate-y-0.5'
                            : 'border border-white/20 text-[#F3F1ED] hover:border-[#B59A62] hover:text-[#B59A62]'
                        }`}
                        style={
                          isProminent
                            ? { background: 'var(--color-gold)', color: '#111111' }
                            : undefined
                        }
                        aria-label={`Get Personalized Quote for ${card.bhk}`}
                      >
                        <span>Get Personalized Quote</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Disclaimer & WhatsApp Direct Inquiries */}
        <SectionReveal delay={350}>
          <div className="mt-12 lg:mt-14 text-center max-w-2xl mx-auto space-y-4">
            <p
              className="text-[12px] sm:text-[12.5px] leading-relaxed text-[#F3F1ED]/45 font-light"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Prices are indicative and may vary depending on design, materials, finishes, and project requirements.
            </p>

            {/* Instant WhatsApp Inquiry Link */}
            <div className="pt-2 flex items-center justify-center">
              <a
                href={STUDIO_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[10.5px] tracking-[0.18em] uppercase font-semibold text-[#B59A62] hover:text-[#D4BB8A] transition-colors"
                aria-label="Direct WhatsApp quote enquiry"
              >
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Instant WhatsApp Inquiry</span>
                <span className="text-xs">→</span>
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
