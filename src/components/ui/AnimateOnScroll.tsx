'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fadeIn' | 'scaleUp';
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animations: Record<string, string> = {
    fadeUp: 'translate-y-8 opacity-0',
    fadeLeft: '-translate-x-8 opacity-0',
    fadeRight: 'translate-x-8 opacity-0',
    fadeIn: 'opacity-0',
    scaleUp: 'scale-95 opacity-0',
  };

  const visibleClasses: Record<string, string> = {
    fadeUp: 'translate-y-0 opacity-100',
    fadeLeft: 'translate-x-0 opacity-100',
    fadeRight: 'translate-x-0 opacity-100',
    fadeIn: 'opacity-100',
    scaleUp: 'scale-100 opacity-100',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        visible ? visibleClasses[animation] : animations[animation]
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
