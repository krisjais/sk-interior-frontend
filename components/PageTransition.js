import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function PageTransition({ children }) {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        setTransitioning(true);
      }
    };
    const handleComplete = () => {
      setTimeout(() => {
        setTransitioning(false);
      }, 300);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <div
        className={`page-transition-overlay ${
          transitioning ? 'entering' : ''
        }`}
      />
      {children}
    </>
  );
}
