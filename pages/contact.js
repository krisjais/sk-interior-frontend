import { useState } from 'react';
import axios from 'axios';
import SEO from '../components/SEO';
import { API } from '../lib/api';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    property: 'Residential Apartment',
    budget: '₹25L – ₹50L',
    date: '',
    time: 'Morning (10am – 1pm)',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post(`${API}/bookings`, form);
      setSubmitted(true);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Failed to send enquiry. Please call us directly at 98707 60240.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with SK Interior. Visit our studio in Pali Hill, Mumbai or send us a message to discuss your interior design project."
        canonical="/contact"
      />

      <main>
        {/* ── Hero ── */}
        <section
          className="relative min-h-[45vh] flex flex-col justify-end"
          style={{ background: 'var(--color-bg)', paddingTop: '120px' }}
        >
          <div className="container-wide section-padding-sm">
            <span className="section-label mb-8 block">Get In Touch</span>
            <h1 className="display-xl text-[#F3F1ED]">
              Start a<br />
              <span className="text-italic-serif text-[#B59A62]">conversation.</span>
            </h1>
          </div>
        </section>

        {/* ── Contact Body ── */}
        <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24">

              {/* Studio Details Column */}
              <div>
                <span className="section-label mb-6 block">Our Studio</span>
                <h2 className="display-sm text-[#151515] mb-8">
                  Pali Hill Studio
                </h2>

                <div className="space-y-8 text-[14.5px] font-light" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-soft)' }}>
                  <div>
                    <p className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#B59A62] mb-2">Address</p>
                    <p className="leading-relaxed">
                      25-B, New Kantwadi Road,<br />
                      Pali Hill, Bandra West,<br />
                      Mumbai, Maharashtra 400050
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#B59A62] mb-2">Direct Phone</p>
                    <p>
                      <a href="tel:9870760240" className="hover:text-[#B59A62] transition-colors block">
                        +91 98707 60240
                      </a>
                      <a href="tel:9167401020" className="hover:text-[#B59A62] transition-colors block">
                        +91 91674 01020
                      </a>
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#B59A62] mb-2">Email Enquiries</p>
                    <a href="mailto:hello@skinterior.in" className="hover:text-[#B59A62] transition-colors">
                      hello@skinterior.in
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#B59A62] mb-2">Studio Hours</p>
                    <p>Monday – Saturday · 10:00 AM – 7:00 PM</p>
                    <p className="text-xs text-[#151515]/40 mt-1">Consultations by appointment only.</p>
                  </div>
                </div>

                {/* Direct WhatsApp CTA */}
                <div className="mt-12 pt-8 border-t border-black/10">
                  <a
                    href="https://wa.me/919870760240?text=Hi%20SK%20Interior%2C%20I%27m%20interested%20in%20discussing%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-black/20 text-[10px] tracking-[0.22em] uppercase font-semibold text-[#151515] hover:bg-[#151515] hover:text-[#F3F1ED] transition-all"
                  >
                    <span>Instant Consultation on WhatsApp</span>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Form Column */}
              <div>
                <span className="section-label mb-6 block">Project Enquiry</span>
                <h2 className="display-sm text-[#151515] mb-8">
                  Tell us about your space
                </h2>

                {submitted ? (
                  <div className="p-10 rounded-2xl bg-[#111111] text-[#F3F1ED] text-center my-6">
                    <span className="text-[#B59A62] text-4xl block mb-4">✓</span>
                    <h3 className="display-sm text-[#F3F1ED] mb-3">Enquiry Received</h3>
                    <p className="text-[14px] leading-relaxed text-[#F3F1ED]/60 font-light max-w-md mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
                      Thank you for reaching out. Our design team will review your project details and contact you within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="field-group">
                        <label className="field-label">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Ananya Sharma"
                          className="field-input"
                        />
                      </div>

                      <div className="field-group">
                        <label className="field-label">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="ananya@example.com"
                          className="field-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="field-group">
                        <label className="field-label">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="field-input"
                        />
                      </div>

                      <div className="field-group">
                        <label className="field-label">City / Location</label>
                        <input
                          type="text"
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          placeholder="e.g. Mumbai (Bandra)"
                          className="field-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="field-group">
                        <label className="field-label">Property Type</label>
                        <select
                          value={form.property}
                          onChange={(e) => setForm({ ...form, property: e.target.value })}
                          className="field-input cursor-pointer"
                        >
                          <option value="Residential Apartment">Residential Apartment</option>
                          <option value="Independent Villa / House">Independent Villa / House</option>
                          <option value="Commercial / Office Space">Commercial / Office Space</option>
                          <option value="Hospitality / Café / Restaurant">Hospitality / Café / Restaurant</option>
                          <option value="Turnkey Renovation">Turnkey Renovation</option>
                        </select>
                      </div>

                      <div className="field-group">
                        <label className="field-label">Estimated Budget</label>
                        <select
                          value={form.budget}
                          onChange={(e) => setForm({ ...form, budget: e.target.value })}
                          className="field-input cursor-pointer"
                        >
                          <option value="₹15L – ₹25L">₹15L – ₹25L</option>
                          <option value="₹25L – ₹50L">₹25L – ₹50L</option>
                          <option value="₹50L – ₹1 Cr">₹50L – ₹1 Cr</option>
                          <option value="₹1 Cr+">₹1 Cr+</option>
                        </select>
                      </div>
                    </div>

                    <div className="field-group">
                      <label className="field-label">Project Details & Requirements</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about the space size (sq ft), current condition, key requirements, and target start date..."
                        className="field-input resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-600 text-sm font-light">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full text-[10px] tracking-[0.26em] uppercase font-semibold transition-all hover:opacity-90 disabled:opacity-50"
                      style={{ background: 'var(--color-gold)', color: '#111111' }}
                    >
                      {loading ? 'Submitting Enquiry...' : 'Submit Project Enquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
