import { useEffect, useRef, useState } from 'react';

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0,0,0)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 32px, 0)';
      case 'left':
        return 'translate3d(-32px, 0, 0)';
      case 'right':
        return 'translate3d(32px, 0, 0)';
      default:
        return 'translate3d(0, 32px, 0)';
    }
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
