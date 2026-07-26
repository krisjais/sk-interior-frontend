import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="description" content="SK Interior is a premium interior design studio in Pali Hill, Mumbai. Specializing in residential, commercial interiors, modular kitchens, and luxury renovations." />
        <meta property="og:title" content="SK Interior — Luxury Interior Design Studio" />
        <meta property="og:description" content="Premium interior design services in Mumbai. 4.9★ rated. Transforming spaces since 2015." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://skinterior.in" />
        <script src="https://cdn.tailwindcss.com" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.tailwind = window.tailwind || {};
                window.tailwind.config = {
                  theme: {
                    extend: {
                      colors: {
                        gold: '#C8A96A',
                        'gold-light': '#D4BC8A',
                        'gold-dark': '#A88B4A',
                        charcoal: '#121212',
                        'charcoal-light': '#1A1A1A',
                        'charcoal-lighter': '#2A2A2A',
                        cream: '#F5F5F5',
                      },
                      fontFamily: {
                        playfair: ['Playfair Display', 'serif'],
                        poppins: ['Poppins', 'sans-serif'],
                      },
                      letterSpacing: { ultra: '0.3em' }
                    }
                  }
                };
              }
            `
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
