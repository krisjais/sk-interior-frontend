import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

const SERVICES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
        <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M4 18v2" />
        <path d="M20 18v2" />
        <path d="M12 4v9" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    title: 'Living Room Design',
    desc: 'Curated living spaces that blend comfort with sophistication.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20" />
        <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
        <path d="M4 8h16a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2Z" />
        <path d="M9 3h6" />
        <path d="M12 3v5" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    title: 'Modular Kitchen',
    desc: 'Functional and stunning kitchens designed for modern living.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12" />
        <path d="M2 10h20" />
        <path d="M2 14h20" />
        <path d="M6 6v4" />
        <path d="M18 6v4" />
        <path d="M12 10v4" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    title: 'Bedroom Design',
    desc: 'Serene bedroom retreats crafted for ultimate relaxation.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    title: 'Office Interiors',
    desc: 'Productive and inspiring workspaces for growing businesses.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
    title: 'Residential Design',
    desc: 'Complete home transformations from concept to completion.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.37 2.63 14 7H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1.25c1.52 0 2.75 1.23 2.75 2.75V20a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
        <path d="M9 8c-1.5 0-3 .5-4 1.5M9 13c-1.5 0-3 .5-4 1.5" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
    title: 'Renovation',
    desc: 'Breathe new life into existing spaces with expert renovation.'
  },
];

const FAQS = [
  { q: 'How long does a typical interior design project take?', a: 'Timelines vary by project scope. A 2BHK apartment typically takes 45–60 days. Larger villas or commercial projects may take 90–120 days. We provide a detailed timeline during the consultation.' },
  { q: 'Do you provide 3D visualizations before starting?', a: 'Yes! Every project includes detailed mood boards, floor plans, and photorealistic 3D renders so you can visualize your space before any work begins.' },
  { q: 'What areas do you serve?', a: 'We primarily serve Mumbai and surrounding areas (Thane, Navi Mumbai, Pune). For premium projects, we take up pan-India assignments.' },
  { q: 'What is your pricing structure?', a: 'We offer transparent, all-inclusive pricing with no hidden costs. Pricing depends on the scope, materials, and finishes. We provide detailed quotations after the initial consultation.' },
  { q: 'Do you offer post-completion support?', a: 'Absolutely. We provide a warranty on workmanship and offer continued support post-handover for any touch-ups or concerns.' },
];

const DEFAULT_TESTIMONIALS = [
  { name: 'Priya Sharma', loc: 'Bandra, Mumbai', rating: 5, text: 'SK Interior transformed our 3BHK into a breathtaking home. The attention to detail and quality of work is unmatched. Highly recommend!' },
  { name: 'Rahul Mehta', loc: 'Juhu, Mumbai', rating: 5, text: 'Professional team, timely delivery, and the end result exceeded our expectations. Our modular kitchen is the highlight of our home now.' },
  { name: 'Anita Desai', loc: 'Powai, Mumbai', rating: 5, text: 'From concept to completion, SK Interior made the entire process seamless. Our office looks absolutely stunning.' },
  { name: 'Vikram Nair', loc: 'Pali Hill, Mumbai', rating: 5, text: 'Outstanding craftsmanship and impeccable taste. They understood our vision perfectly and delivered a luxury villa interior.' },
];

const ABOUT_ICONS = {
  gem: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  ),
  clock: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  palette: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.35443 19.5126 5.51816 20.2504 5.25973 20.8966C5.0183 21.4995 5.38573 22 6.03456 22H12Z" />
      <circle cx="7.5" cy="10.5" r="1" />
      <circle cx="11.5" cy="7.5" r="1" />
      <circle cx="16.5" cy="9.5" r="1" />
      <circle cx="15.5" cy="14.5" r="1" />
    </svg>
  ),
  heart: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
};

function BeforeAfterCard({ item }) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef(null);

  const move = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 0), 100);
    setPos(pct);
  };

  const beforeSrc = item.beforeImage?.startsWith('/uploads') ? `${BACKEND}${item.beforeImage}` : item.beforeImage;
  const afterSrc = item.afterImage?.startsWith('/uploads') ? `${BACKEND}${item.afterImage}` : item.afterImage;

  return (
    <div>
      <div
        ref={containerRef}
        onMouseDown={() => { dragging.current = true; }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onMouseMove={(e) => { if (dragging.current) move(e.clientX); }}
        onTouchStart={() => { dragging.current = true; }}
        onTouchEnd={() => { dragging.current = false; }}
        onTouchMove={(e) => { if (dragging.current) move(e.touches[0].clientX); }}
        style={{ position:'relative', height:'420px', borderRadius:'16px', overflow:'hidden', cursor:'ew-resize', userSelect:'none' }}
      >
        {/* After image (base) */}
        <img src={afterSrc} alt="After" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
        {/* Before image (clipped) */}
        <div style={{ position:'absolute', inset:0, clipPath:`inset(0 ${100 - pos}% 0 0)` }}>
          <img src={beforeSrc} alt="Before" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        </div>
        {/* Slider line */}
        <div style={{ position:'absolute', top:0, bottom:0, left:`${pos}%`, width:'3px', background:'#C8A96A', transform:'translateX(-50%)', zIndex:3 }}>
          {/* Handle */}
          <div style={{
            position:'absolute', top:'50%', left:'50%',
            transform:'translate(-50%,-50%)',
            width:'44px', height:'44px', borderRadius:'50%',
            background:'#C8A96A', display:'flex', alignItems:'center', justifyContent:'center',
            color:'#121212', fontWeight:700, fontSize:'13px', letterSpacing:'1px', whiteSpace:'nowrap',
            boxShadow:'0 4px 16px rgba(0,0,0,0.3)',
          }}>⟨ ⟩</div>
        </div>
        {/* Labels */}
        <span style={{ position:'absolute', bottom:'12px', left:'12px', background:'rgba(0,0,0,0.6)', color:'#fff', fontSize:'10px', padding:'3px 10px', borderRadius:'999px', zIndex:4 }}>Before</span>
        <span style={{ position:'absolute', bottom:'12px', right:'12px', background:'#C8A96A', color:'#121212', fontSize:'10px', padding:'3px 10px', borderRadius:'999px', zIndex:4 }}>After</span>
      </div>
      <p style={{ textAlign:'center', fontSize:'14px', color:'rgba(18,18,18,0.6)', marginTop:'16px' }}>
        {item.title}{item.location ? ` — ${item.location}` : ''}
      </p>
    </div>
  );
}

function PortfolioCard({ item, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const src = item.imageUrl.startsWith('/uploads')
    ? `${BACKEND}${item.imageUrl}`
    : item.imageUrl;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen && onOpen({ src, title: item.title, category: item.category })}
      style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', height: '288px', cursor: 'zoom-in' }}
    >
      <img
        src={src}
        alt={item.title}
        loading="lazy"
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.23,1,0.32,1)',
        }}
      />
      {/* Hover overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%',
          background: 'rgba(200,169,106,0.9)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: hovered ? 'scale(1)' : 'scale(0.7)',
          transition: 'transform 0.3s cubic-bezier(0.23,1,0.32,1)',
        }}>
          <svg width="20" height="20" fill="none" stroke="#121212" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {/* Bottom gradient info */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
        padding: '24px',
        transform: hovered ? 'translateY(0)' : 'translateY(8px)',
        opacity: hovered ? 1 : 0,
        transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
      }}>
        <h3 style={{ color: '#fff', fontWeight: 500, fontSize: '15px', margin: 0 }}>{item.title}</h3>
        {item.category && (
          <p style={{ color: '#C8A96A', fontSize: '10px', marginTop: '4px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            {item.category}
          </p>
        )}
      </div>
    </div>
  );
}

function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!image) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
        animation: 'fadeIn 0.25s ease',
      }}
    >
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}} @keyframes scaleIn{from{opacity:0;transform:scale(0.92)}to{opacity:1;transform:scale(1)}}`}</style>
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '20px', right: '20px',
          width: '44px', height: '44px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(8px)', transition: 'background 0.2s',
          zIndex: 100000,
        }}
        onMouseEnter={e => e.currentTarget.style.background='rgba(200,169,106,0.8)'}
        onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.1)'}
        aria-label="Close image"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
        </svg>
      </button>
      {/* Image container */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: 'min(90vw, 1100px)', maxHeight: '88vh',
          borderRadius: '16px', overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
          animation: 'scaleIn 0.3s cubic-bezier(0.23,1,0.32,1)',
          display: 'flex', flexDirection: 'column',
          background: '#111',
        }}
      >
        <img
          src={image.src}
          alt={image.title}
          style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }}
        />
        {(image.title || image.category) && (
          <div style={{
            padding: '16px 24px', background: '#111',
            display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            {image.title && (
              <span style={{ color: '#fff', fontWeight: 500, fontSize: '15px' }}>{image.title}</span>
            )}
            {image.category && (
              <span style={{
                color: '#C8A96A', fontSize: '10px', letterSpacing: '0.2em',
                textTransform: 'uppercase', padding: '3px 10px',
                border: '1px solid rgba(200,169,106,0.4)', borderRadius: '999px',
              }}>{image.category}</span>
            )}
          </div>
        )}
      </div>
      {/* ESC hint */}
      <p style={{
        position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.3)', fontSize: '11px', letterSpacing: '0.15em',
        textTransform: 'uppercase', whiteSpace: 'nowrap',
      }}>Press ESC to close</p>
    </div>
  );
}

export default function Home() {
  const [heroSlides, setHeroSlides] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [beforeAfter, setBeforeAfter] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [filter, setFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [loaderHidden, setLoaderHidden] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const loaderRef = useRef(null);
  const baRefs = useRef([]);

  const DEFAULT_SLIDES = [
    { _id: 's1', imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80', alt: 'Luxury Living Room' },
    { _id: 's2', imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=80', alt: 'Luxury Kitchen' },
    { _id: 's3', imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1920&q=80', alt: 'Luxury Bedroom' },
    { _id: 's4', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80', alt: 'Luxury Villa' },
  ];

  const DEFAULT_PORTFOLIO = [
    { _id: 'p1', title: 'Modern Living Room', category: 'living', imageUrl: 'https://picsum.photos/seed/port1/600/500' },
    { _id: 'p2', title: 'Modular Kitchen', category: 'kitchen', imageUrl: 'https://picsum.photos/seed/port2/600/500' },
    { _id: 'p3', title: 'Master Bedroom', category: 'bedroom', imageUrl: 'https://picsum.photos/seed/port3/600/500' },
    { _id: 'p4', title: 'Luxury Villa', category: 'other', imageUrl: 'https://picsum.photos/seed/port4/600/500' },
    { _id: 'p5', title: 'Office Interior', category: 'office', imageUrl: 'https://picsum.photos/seed/port5/600/500' },
    { _id: 'p6', title: 'Bathroom Design', category: 'bathroom', imageUrl: 'https://picsum.photos/seed/port6/600/500' },
  ];

  const DEFAULT_BA = [
    { _id: 'ba1', title: 'Living Room', location: 'Juhu, Mumbai', beforeImage: 'https://picsum.photos/seed/beforeliv/800/600', afterImage: 'https://picsum.photos/seed/afterliv/800/600' },
    { _id: 'ba2', title: 'Kitchen Renovation', location: 'Bandra, Mumbai', beforeImage: 'https://picsum.photos/seed/beforekit/800/600', afterImage: 'https://picsum.photos/seed/afterkit/800/600' },
  ];

  useEffect(() => {
    // Loader animation
    const loaderEl = document.getElementById('loader');
    const logoEl = document.querySelector('.loader-logo');
    const lineEl = document.querySelector('.loader-line');
    const textEl = document.querySelector('.loader-text');
    if (logoEl) { logoEl.style.transition = 'all 0.8s ease'; logoEl.style.opacity = '1'; logoEl.style.transform = 'translateY(0)'; }
    setTimeout(() => { if (lineEl) { lineEl.style.transition = 'width 1s ease'; lineEl.style.width = '200px'; } }, 300);
    setTimeout(() => { if (textEl) { textEl.style.transition = 'opacity 0.5s ease'; textEl.style.opacity = '1'; } }, 600);
    setTimeout(() => { if (loaderEl) { loaderEl.classList.add('hidden'); setLoaderHidden(true); } }, 2000);

    // Fetch data
    axios.get(`${API}/hero`).then(r => setHeroSlides(r.data.length ? r.data : DEFAULT_SLIDES)).catch(() => setHeroSlides(DEFAULT_SLIDES));
    axios.get(`${API}/gallery`).then(r => setGallery(r.data)).catch(() => setGallery([]));
    axios.get(`${API}/before-after`).then(r => setBeforeAfter(r.data)).catch(() => setBeforeAfter([]));
    axios.get(`${API}/testimonials`).then(r => setTestimonials(r.data.length ? r.data : DEFAULT_TESTIMONIALS)).catch(() => setTestimonials(DEFAULT_TESTIMONIALS));
    axios.post(`${API}/visits/increment`).catch(() => {});

    // Nav scroll
    const handleScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Scroll progress
    const updateProgress = () => {
      const prog = document.getElementById('scroll-progress');
      if (prog) { const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100; prog.style.width = pct + '%'; }
    };
    window.addEventListener('scroll', updateProgress);

    // Counter animation
    const counters = document.querySelectorAll('[data-target]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.dataset.target;
          let count = 0;
          const inc = target / 60;
          const update = () => { count = Math.min(count + inc, target); entry.target.textContent = Math.round(count); if (count < target) requestAnimationFrame(update); };
          update();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));

    // Reveal animations
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => revealObs.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  // Hero slideshow
  useEffect(() => {
    if (!heroSlides.length) return;
    const interval = setInterval(() => setCurrentSlide(p => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(interval);
  }, [heroSlides]);

  // Before/after drag
  useEffect(() => {
    const containers = document.querySelectorAll('.ba-container');
    containers.forEach(container => {
      const slider = container.querySelector('.ba-slider');
      const before = container.querySelector('.ba-before');
      if (!slider || !before) return;
      let dragging = false;
      const move = (x) => {
        const rect = container.getBoundingClientRect();
        const pct = Math.min(Math.max(((x - rect.left) / rect.width) * 100, 0), 100);
        slider.style.left = pct + '%';
        before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      };
      slider.addEventListener('mousedown', () => { dragging = true; });
      window.addEventListener('mouseup', () => { dragging = false; });
      container.addEventListener('mousemove', (e) => { if (dragging) move(e.clientX); });
      slider.addEventListener('touchstart', () => { dragging = true; });
      window.addEventListener('touchend', () => { dragging = false; });
      container.addEventListener('touchmove', (e) => { if (dragging) move(e.touches[0].clientX); });
    });
  }, [beforeAfter]);

  const filteredGallery = filter === 'all' ? gallery : gallery.filter(g => g.category === filter);

  const handleBooking = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    try {
      await axios.post(`${API}/bookings`, data);
      setBookingSuccess(true);
    } catch { alert('Something went wrong, please try again.'); }
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    setNewsletterSent(true);
  };

  const slides = heroSlides.length ? heroSlides : DEFAULT_SLIDES;

  return (
    <>
      <Head>
        <title>SK Interior — Luxury Interior Design Studio, Mumbai</title>
      </Head>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      {/* Loader */}
      <div id="loader">
        <div className="loader-logo">SK Interior</div>
        <div className="loader-line"></div>
        <div className="loader-text">Crafting Luxury Interiors</div>
      </div>

      {/* Scroll Progress */}
      <div id="scroll-progress"></div>

      {/* Nav */}
      <nav id="navbar" className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${navScrolled ? 'glass-light' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <a href="#hero" className="flex flex-col items-start group">
              <span className={`font-playfair text-xl lg:text-2xl font-semibold tracking-wide group-hover:text-[#C8A96A] transition-colors duration-300 ${navScrolled ? 'text-[#121212]' : 'text-white'}`} style={{fontFamily:"'Playfair Display',serif"}}>SK Interior</span>
              <span className={`text-[9px] tracking-[0.3em] uppercase mt-[-2px] transition-colors duration-300 ${navScrolled ? 'text-[#121212]/50' : 'text-white/50'}`}>Luxury Interiors</span>
            </a>
            <div className="hidden lg:flex items-center gap-10">
              {['hero','about','services','portfolio','testimonials','contact'].map(s => (
                <a key={s} href={`#${s}`} className={`nav-link text-[13px] tracking-widest uppercase hover:text-[#C8A96A] transition-colors duration-300 ${navScrolled ? 'text-[#121212]/80' : 'text-white/80'}`}>
                  {s === 'hero' ? 'Home' : s.charAt(0).toUpperCase() + s.slice(1)}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setSearchOpen(true)} className={`w-10 h-10 flex items-center justify-center hover:text-[#C8A96A] transition-colors ${navScrolled ? 'text-[#121212]/70' : 'text-white/70'}`} aria-label="Search">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </button>
              <a href="#booking" className="hidden lg:inline-flex magnetic-btn border border-[#C8A96A] text-[#C8A96A] text-[11px] tracking-[0.3em] uppercase px-7 py-3 rounded-full"><span>Book Consultation</span></a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5" aria-label="Menu">
                <span className={`w-6 h-[1.5px] transition-all duration-300 ${navScrolled ? 'bg-[#121212]' : 'bg-white'}`}></span>
                <span className={`w-6 h-[1.5px] transition-all duration-300 ${navScrolled ? 'bg-[#121212]' : 'bg-white'}`}></span>
                <span className={`w-4 h-[1.5px] transition-all duration-300 ml-auto ${navScrolled ? 'bg-[#121212]' : 'bg-white'}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`fixed inset-0 z-[9998] bg-[#121212] flex flex-col items-center justify-center ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="flex flex-col items-center gap-8">
          {['hero','about','services','portfolio','testimonials','contact'].map(s => (
            <a key={s} href={`#${s}`} onClick={() => setMobileMenuOpen(false)} style={{fontFamily:"'Playfair Display',serif"}} className="text-3xl text-white hover:text-[#C8A96A] transition-colors">
              {s === 'hero' ? 'Home' : s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
          <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="magnetic-btn border border-[#C8A96A] text-[#C8A96A] text-xs tracking-[0.3em] uppercase px-8 py-4 rounded-full mt-4"><span>Book Consultation</span></a>
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[99995] bg-[#121212]/95 backdrop-blur-xl flex items-start justify-center pt-32">
          <div className="w-full max-w-2xl px-6">
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <svg className="w-6 h-6 text-[#C8A96A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input type="text" placeholder="Search services, projects..." className="flex-1 bg-transparent text-white text-2xl font-light outline-none placeholder:text-white/30" autoFocus />
              <button onClick={() => setSearchOpen(false)} className="text-white/50 hover:text-[#C8A96A] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <p className="mt-6 text-white/30 text-sm">Press ESC to close</p>
          </div>
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#121212]">
        <div className="absolute inset-0">
          {slides.map((slide, i) => (
            <div key={slide._id} className={`hero-slide ${i === currentSlide ? 'active' : ''}`}>
              <img src={slide.imageUrl} alt={slide.alt || ''} loading={i === 0 ? 'eager' : 'lazy'} style={{filter:'brightness(0.75)'}} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-[#121212]/95"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">
          <p className="text-[#C8A96A] text-xs lg:text-sm tracking-[0.3em] uppercase font-semibold">Pali Hill, Mumbai — Since 2015</p>
          <h1 style={{fontFamily:"'Playfair Display',serif"}} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] tracking-tight drop-shadow-xl mt-4">
            Designing Spaces<br /><span className="italic text-[#C8A96A] font-normal">That Inspire</span>
          </h1>
          <p className="text-white/90 text-sm lg:text-base font-normal leading-relaxed drop-shadow mt-6 lg:mt-8 max-w-xl">
            Transforming homes and commercial spaces into breathtaking masterpieces with impeccable craftsmanship and timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <a href="#booking" className="magnetic-btn bg-[#C8A96A] text-[#121212] text-[11px] tracking-[0.3em] uppercase px-10 py-4 rounded-full font-bold shadow-xl"><span>Book Consultation</span></a>
            <a href="#portfolio" className="magnetic-btn border border-white/40 text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 rounded-full font-semibold"><span>View Portfolio</span></a>
          </div>
        </div>
        <div className="absolute bottom-8 right-6 lg:right-12 z-10 flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <span className="text-[#C8A96A] text-xs font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <div className="w-6 h-[1px] bg-white/30"></div>
          <span className="text-white/60 text-xs font-medium">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-[#121212] py-5 overflow-hidden border-t border-white/5">
        <div className="marquee-track">
          {[0, 1].map(i => (
            <span key={i} className="flex items-center gap-8 px-4 text-white/20 text-[11px] tracking-[0.3em] uppercase whitespace-nowrap">
              {['Interior Design','Modular Kitchen','Living Room','Bedroom Design','Office Interiors','False Ceiling','Lighting Design','Furniture Design','Renovation','Turnkey Projects','Luxury Villas'].map((t, j) => (
                <span key={j}>{t}<span className="text-[#C8A96A]/40 ml-8">✦</span></span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-36 bg-white relative grain">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal-left relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img src="https://picsum.photos/seed/skabout/800/1000" alt="SK Interior Studio" className="w-full h-[500px] lg:h-[650px] object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-[#C8A96A] text-[#121212] p-6 lg:p-8 rounded-2xl float shadow-2xl">
                <div style={{fontFamily:"'Playfair Display',serif"}} className="text-4xl lg:text-5xl font-bold">9+</div>
                <div className="text-xs tracking-widest uppercase mt-1 opacity-80">Years of<br/>Excellence</div>
              </div>
            </div>
            <div className="reveal-right">
              <span className="text-[#C8A96A] text-[11px] tracking-[0.3em] uppercase font-medium">Our Story</span>
              <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-3xl lg:text-5xl font-medium leading-[1.15] mt-4">
                Crafting Timeless<br /><span className="italic text-[#C8A96A]">Interior Experiences</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#C8A96A] mt-6"></div>
              <p className="text-[#121212]/60 text-[15px] leading-relaxed mt-6 font-light">Founded in the heart of Pali Hill, Mumbai, SK Interior has been transforming spaces into extraordinary living experiences since 2015.</p>
              <p className="text-[#121212]/60 text-[15px] leading-relaxed mt-4 font-light">From luxurious residential interiors to sophisticated commercial spaces, every project is a testament to our commitment to excellence and dedication to client satisfaction.</p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                {[['gem','Premium Quality','Finest materials & finishes'],['clock','On-Time Delivery','Strict timeline adherence'],['palette','Custom Design','Tailored to your vision'],['heart','Client First','4.9★ rated by 36+ clients']].map(([icon, title, sub]) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C8A96A]/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#C8A96A]">
                      {ABOUT_ICONS[icon]}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{title}</h4>
                      <p className="text-xs text-[#121212]/50 mt-1">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#booking" className="inline-flex magnetic-btn border-2 border-[#121212] text-[#121212] text-[11px] tracking-[0.3em] uppercase px-10 py-4 rounded-full mt-10"><span>Learn More</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[['350','Projects Completed'],['36','Google Reviews'],['9','Years Experience'],['50','Expert Team Members']].map(([n, label]) => (
              <div key={label} className="text-center reveal">
                <div style={{fontFamily:"'Playfair Display',serif"}} className="text-4xl lg:text-5xl text-[#C8A96A] font-medium counter-num" data-target={n}>0</div>
                <div className="text-white/40 text-[11px] tracking-[0.3em] uppercase mt-3">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-36 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="text-[#C8A96A] text-[11px] tracking-[0.3em] uppercase font-medium">What We Do</span>
            <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-3xl lg:text-5xl font-medium leading-[1.15] mt-4">Our <span className="italic text-[#C8A96A]">Services</span></h2>
            <p className="text-[#121212]/60 text-[15px] leading-relaxed mt-4 font-light">Comprehensive interior design solutions tailored to transform your vision into reality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
                <div className="relative overflow-hidden h-56">
                  <img src={s.image} alt={s.title} className="service-img w-full h-full object-cover" loading="lazy" />
                  <div className="service-overlay absolute inset-0 bg-[#C8A96A]/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-[#121212] text-[11px] tracking-[0.3em] uppercase font-bold">Explore</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#C8A96A]/10 flex items-center justify-center text-[#C8A96A] mb-5">
                    {s.icon}
                  </div>
                  <h3 className="font-medium text-lg">{s.title}</h3>
                  <p className="text-[#121212]/50 text-sm mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      {gallery.length > 0 && (
      <section id="portfolio" className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="text-[#C8A96A] text-[11px] tracking-[0.3em] uppercase font-medium">Our Work</span>
              <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-3xl lg:text-5xl font-medium leading-[1.15] mt-4">Featured <span className="italic text-[#C8A96A]">Projects</span></h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['all', ...[...new Set(gallery.map(g => g.category))]].map(f => (
                <button key={f} onClick={() => setFilter(f)}
                  style={{
                    fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '8px 20px', borderRadius: '999px', border: '1px solid',
                    cursor: 'pointer', transition: 'all 0.2s',
                    background: filter === f ? '#121212' : 'transparent',
                    color: filter === f ? '#fff' : 'rgba(18,18,18,0.6)',
                    borderColor: filter === f ? '#121212' : 'rgba(18,18,18,0.15)',
                  }}>
                  {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'20px', marginTop:'48px'}}>
            {filteredGallery.map(item => (
              <PortfolioCard key={item._id} item={item} onOpen={setSelectedImage} />
            ))}
          </div>
        </div>
      </section>
      )}

      {/* BEFORE / AFTER */}
      {beforeAfter.length > 0 && (
      <section style={{padding:'96px 0', background:'#F5F5F5'}}>
        <div style={{maxWidth:'1400px', margin:'0 auto', padding:'0 24px'}}>
          <div style={{textAlign:'center', maxWidth:'640px', margin:'0 auto'}}>
            <span style={{color:'#C8A96A', fontSize:'11px', letterSpacing:'0.3em', textTransform:'uppercase', fontWeight:500}}>Transformations</span>
            <h2 style={{fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,4vw,3rem)', fontWeight:500, lineHeight:1.15, marginTop:'16px'}}>
              Before & <span style={{fontStyle:'italic', color:'#C8A96A'}}>After</span>
            </h2>
            <p style={{color:'rgba(18,18,18,0.6)', fontSize:'15px', lineHeight:1.7, marginTop:'16px', fontWeight:300}}>Drag the slider to see the dramatic transformations.</p>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))', gap:'32px', marginTop:'64px'}}>
            {beforeAfter.map(item => (
              <BeforeAfterCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </section>
      )}

      {/* PROCESS */}
      <section className="py-24 lg:py-36 bg-[#121212] relative overflow-hidden grain">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="text-[#C8A96A] text-[11px] tracking-[0.3em] uppercase font-medium">How We Work</span>
            <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-3xl lg:text-5xl font-medium leading-[1.15] mt-4 text-white">Our <span className="italic text-[#C8A96A]">Process</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {[['01','Consultation','In-depth consultation to understand your lifestyle, preferences, budget, and vision.'],
              ['02','Design & 3D','Detailed mood boards, floor plans, and photorealistic 3D renders for your approval.'],
              ['03','Material Selection','Handpicked premium materials, fabrics, and finishes curated to match your vision.'],
              ['04','Execution & Handover','Expert craftsmen bring the design to life, followed by a grand handover.']
            ].map(([step, title, desc]) => (
              <div key={step} className="reveal text-center lg:text-left">
                <span className="text-[#C8A96A] text-[11px] tracking-[0.3em] uppercase font-medium">Step {step}</span>
                <h3 style={{fontFamily:"'Playfair Display',serif"}} className="text-2xl text-white mt-2">{title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed mt-3">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 lg:py-36 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="text-[#C8A96A] text-[11px] tracking-[0.3em] uppercase font-medium">Testimonials</span>
            <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-3xl lg:text-5xl font-medium leading-[1.15] mt-4">What Our Clients <span className="italic text-[#C8A96A]">Say</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {testimonials.map((t, idx) => (
              <div key={t._id || idx} className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md transition-all">
                <div className="flex text-[#C8A96A] text-sm mb-4">{'★'.repeat(t.rating)}</div>
                <p className="text-[#121212]/70 text-sm leading-relaxed">"{t.text}"</p>
                <div className="mt-4 pt-4 border-t border-black/5">
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-[#121212]/40 text-xs mt-0.5">{t.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center reveal">
            <span className="text-[#C8A96A] text-[11px] tracking-[0.3em] uppercase font-medium">FAQs</span>
            <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-3xl lg:text-5xl font-medium leading-[1.15] mt-4">Common <span className="italic text-[#C8A96A]">Questions</span></h2>
          </div>
          <div className="mt-14 space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item border border-black/10 rounded-xl overflow-hidden ${openFaq === i ? 'open' : ''}`}>
                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  <span className="faq-icon text-xl text-[#C8A96A] flex-shrink-0">+</span>
                </button>
                <div className="faq-answer px-5 pb-5">
                  <p className="text-[#121212]/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 lg:py-36 bg-[#121212] relative overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8A96A]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C8A96A]/3 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="reveal-left">
              <span className="text-[#C8A96A] text-[11px] tracking-[0.3em] uppercase font-medium">Get Started</span>
              <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-3xl lg:text-5xl font-medium leading-[1.15] mt-4 text-white">Book Your Free<br/><span className="italic text-[#C8A96A]">Consultation</span></h2>
              <div className="w-16 h-[1px] bg-[#C8A96A] mt-6"></div>
              <p className="text-white/40 text-[15px] leading-relaxed mt-6 font-light">Share your requirements and our design expert will get back to you within 24 hours.</p>
              <div className="space-y-5 mt-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C8A96A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#C8A96A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div><p className="text-white/80 text-sm">25-B, New Kantwadi Rd, Pali Hill</p><p className="text-white/40 text-xs mt-0.5">Mumbai, Maharashtra 400050</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C8A96A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#C8A96A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div><p className="text-white/80 text-sm">091674 01020</p><p className="text-white/40 text-xs mt-0.5">Mon–Sat, 10am – 7pm</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C8A96A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#C8A96A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div><p className="text-white/80 text-sm">hello@skinterior.in</p><p className="text-white/40 text-xs mt-0.5">We reply within 24 hours</p></div>
                </div>
              </div>
            </div>
            <div className="reveal-right">
              {!bookingSuccess ? (
                <form onSubmit={handleBooking} className="bg-[#2A2A2A] rounded-2xl p-8 lg:p-10 border border-white/5 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label className="text-white/40 text-[11px] tracking-widest uppercase block mb-2">Full Name *</label><input type="text" name="name" required className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm outline-none focus:border-[#C8A96A] transition-colors placeholder:text-white/20" placeholder="Your name" /></div>
                    <div><label className="text-white/40 text-[11px] tracking-widest uppercase block mb-2">Email *</label><input type="email" name="email" required className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm outline-none focus:border-[#C8A96A] transition-colors placeholder:text-white/20" placeholder="your@email.com" /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label className="text-white/40 text-[11px] tracking-widest uppercase block mb-2">Phone *</label><input type="tel" name="phone" required className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm outline-none focus:border-[#C8A96A] transition-colors placeholder:text-white/20" placeholder="+91 XXXXX XXXXX" /></div>
                    <div><label className="text-white/40 text-[11px] tracking-widest uppercase block mb-2">City</label><input type="text" name="city" defaultValue="Mumbai" className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm outline-none focus:border-[#C8A96A] transition-colors" /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/40 text-[11px] tracking-widest uppercase block mb-2">Property Type</label>
                      <select name="property" className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm outline-none focus:border-[#C8A96A] transition-colors appearance-none cursor-pointer">
                        <option value="">Select type</option>
                        {['1 BHK','2 BHK','3 BHK','4 BHK+','Villa / Bungalow','Commercial Space','Office'].map(o => <option key={o} value={o.toLowerCase().replace(/ /g,'-')}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/40 text-[11px] tracking-widest uppercase block mb-2">Budget Range</label>
                      <select name="budget" className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm outline-none focus:border-[#C8A96A] transition-colors appearance-none cursor-pointer">
                        <option value="">Select budget</option>
                        {['₹5 – 10 Lakhs','₹10 – 20 Lakhs','₹20 – 50 Lakhs','₹50 Lakhs+'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div><label className="text-white/40 text-[11px] tracking-widest uppercase block mb-2">Message</label><textarea name="message" rows={4} className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm outline-none focus:border-[#C8A96A] transition-colors placeholder:text-white/20 resize-none" placeholder="Describe your requirements..." /></div>
                  <button type="submit" className="w-full magnetic-btn bg-[#C8A96A] text-[#121212] text-[11px] tracking-[0.3em] uppercase py-4 rounded-full font-medium"><span>Submit Consultation Request</span></button>
                </form>
              ) : (
                <div className="bg-[#2A2A2A] rounded-2xl p-12 border border-white/5 text-center">
                  <div className="w-16 h-16 bg-[#C8A96A]/10 text-[#C8A96A] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{fontFamily:"'Playfair Display',serif"}} className="text-2xl text-white mt-6">Thank You!</h3>
                  <p className="text-white/40 text-sm mt-3 font-light">Your consultation request has been received. Our design expert will contact you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 lg:py-32 bg-[#F5F5F5] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
          <span className="text-[#C8A96A] text-[11px] tracking-[0.3em] uppercase font-medium">Ready to Transform?</span>
          <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-3xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] mt-6">Let's Create Something<br/><span className="italic text-[#C8A96A]">Extraordinary Together</span></h2>
          <p className="text-[#121212]/60 text-[15px] leading-relaxed mt-6 font-light max-w-xl mx-auto">Your dream space is just a conversation away. Reach out today and let our experts guide you.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a href="tel:9870760240" className="magnetic-btn bg-[#121212] text-white text-[11px] tracking-[0.3em] uppercase px-10 py-4 rounded-full font-medium"><span>Call 98707 60240</span></a>
            <a href="https://wa.me/919870760240?text=Hi%20SK%20Interior%2C%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="magnetic-btn border-2 border-[#121212] text-[#121212] text-[11px] tracking-[0.3em] uppercase px-10 py-4 rounded-full font-medium"><span>WhatsApp Us</span></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#121212] pt-20 pb-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/5">
            <div>
              <span style={{fontFamily:"'Playfair Display',serif"}} className="text-2xl font-semibold text-white">SK Interior</span>
              <p className="text-white/30 text-sm font-light leading-relaxed mt-5">Premium interior design studio in Pali Hill, Mumbai. Transforming spaces with elegance since 2015.</p>
              <div className="flex items-center gap-1 mt-5"><span className="text-[#C8A96A] text-sm">★★★★★</span><span className="text-white/40 text-xs ml-2">4.9 on Google</span></div>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.3em] uppercase text-[#C8A96A] font-medium mb-6">Services</h4>
              <ul className="space-y-3">
                {['Interior Design','Modular Kitchen','Living Room Design','Bedroom Design','Office Interiors','Renovation'].map(s => (
                  <li key={s}><a href="#services" className="text-white/40 text-sm hover:text-[#C8A96A] transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.3em] uppercase text-[#C8A96A] font-medium mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[['#about','About Us'],['#portfolio','Portfolio'],['#testimonials','Reviews'],['#booking','Book Consultation'],['#contact','Contact']].map(([href, label]) => (
                  <li key={label}><a href={href} className="text-white/40 text-sm hover:text-[#C8A96A] transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.3em] uppercase text-[#C8A96A] font-medium mb-6">Contact</h4>
              <div className="space-y-4 text-white/40 text-sm">
                <p>25-B, New Kantwadi Rd, Pali Hill, Mumbai 400050</p>
                <p><a href="tel:9870760240" className="hover:text-[#C8A96A] transition-colors">98707 60240</a></p>
                <p><a href="mailto:hello@skinterior.in" className="hover:text-[#C8A96A] transition-colors">hello@skinterior.in</a></p>
                <p>Mon–Sat: 10am – 7pm</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
            <p className="text-white/20 text-xs">© 2024 SK Interior. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/20 text-xs hover:text-[#C8A96A] transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/20 text-xs hover:text-[#C8A96A] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
