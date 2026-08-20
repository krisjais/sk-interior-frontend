import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/process', label: 'Process' },
  { href: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll position for navbar style change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => setMenuOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  // Determine colours based on scroll state
  const textColor = scrolled ? 'text-[#151515]' : 'text-[#F3F1ED]';
  const mutedColor = scrolled ? 'text-[#151515]/60' : 'text-[#F3F1ED]/70';

  return (
    <>
      {/* ── Desktop / Main Navbar ── */}
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled ? 'glass-light shadow-sm' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="section-shell">
          <div className="flex items-center justify-between h-[72px] lg:h-[88px] px-4 sm:px-0">

            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col items-start group"
              aria-label="SK Interior — Home"
            >
              <span
                className={`text-[1.35rem] lg:text-[1.6rem] font-light tracking-[0.10em] uppercase transition-colors duration-300 ${textColor}`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SK Interior
              </span>
              <span className={`text-[8px] tracking-[0.36em] uppercase mt-[-3px] transition-colors duration-300 ${mutedColor}`}>
                Design Studio · Mumbai
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-9">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link text-[9.5px] tracking-[0.26em] uppercase font-semibold transition-colors duration-300 ${
                    isActive(href)
                      ? scrolled ? 'text-[#B59A62]' : 'text-[#B59A62]'
                      : scrolled ? 'text-[#151515]/65' : 'text-[#F3F1ED]/75'
                  } ${isActive(href) ? 'active' : ''}`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* CTA — Desktop */}
              <Link
                href="/contact"
                className={`hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-full border text-[9.5px] tracking-[0.24em] uppercase font-semibold transition-all duration-300 hover:-translate-y-px ${
                  scrolled
                    ? 'border-[#151515]/20 text-[#151515] hover:bg-[#151515] hover:text-[#F3F1ED] hover:border-[#151515]'
                    : 'border-[#F3F1ED]/30 text-[#F3F1ED] hover:border-[#B59A62] hover:text-[#B59A62]'
                }`}
              >
                Start a Project
              </Link>

              {/* Hamburger — Mobile/Tablet */}
              <button
                type="button"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                onClick={() => setMenuOpen((v) => !v)}
                className={`flex flex-col items-end justify-center gap-[5px] w-10 h-10 lg:hidden transition-colors duration-300 ${textColor}`}
              >
                <span
                  className={`block h-px bg-current transition-all duration-350 ${
                    menuOpen ? 'w-5 translate-y-[9px] rotate-45' : 'w-5'
                  }`}
                />
                <span
                  className={`block h-px bg-current transition-all duration-350 ${
                    menuOpen ? 'w-5 opacity-0' : 'w-3.5'
                  }`}
                />
                <span
                  className={`block h-px bg-current transition-all duration-350 ${
                    menuOpen ? 'w-5 -translate-y-[9px] -rotate-45' : 'w-5'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Menu ── */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-[9998] flex flex-col transition-all duration-700 ${
          menuOpen ? 'open' : ''
        }`}
        style={{
          background: 'var(--color-bg)',
          clipPath: menuOpen
            ? 'circle(150% at calc(100% - 40px) 44px)'
            : 'circle(0% at calc(100% - 40px) 44px)',
          transition: 'clip-path 0.7s cubic-bezier(0.65, 0, 0.35, 1)',
        }}
      >
        {/* Close button */}
        <div className="flex justify-end p-6 pt-7">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-[#F3F1ED]/60 hover:text-[#B59A62] transition-colors"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 flex flex-col justify-center px-8 pb-12 gap-1">
          {NAV_LINKS.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block py-4 border-b border-white/5 transition-colors duration-300 ${
                isActive(href) ? 'text-[#B59A62]' : 'text-[#F3F1ED]/80 hover:text-[#F3F1ED]'
              }`}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 7vw, 3.2rem)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                fontWeight: 400,
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms, color 0.2s ease`,
              }}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex items-center gap-3 text-[#B59A62] text-[10px] tracking-[0.28em] uppercase font-semibold"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 0.5s ease ${NAV_LINKS.length * 60 + 80}ms, transform 0.5s ease ${NAV_LINKS.length * 60 + 80}ms`,
            }}
          >
            <span className="block w-6 h-px bg-current" />
            Start a Project
          </Link>
        </div>

        {/* Footer in mobile menu */}
        <div className="px-8 pb-10 text-[#F3F1ED]/20 text-[10px] tracking-[0.2em] uppercase">
          <p>hello@skinterior.in · 98707 60240</p>
        </div>
      </div>
    </>
  );
}
