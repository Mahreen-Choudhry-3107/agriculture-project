'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface Slide {
  title: string;
  subtitle?: string;
  image: string;
}

interface PageHeroProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export default function PageHero({ slides, autoPlayInterval = 5000 }: PageHeroProps) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length, autoPlayInterval]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative h-[300px] md:h-[350px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center justify-center">
            <div
              className={`text-center transition-all duration-700 ${
                i === current ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              {slide.subtitle && (
                <p className="text-agri-yellow font-semibold text-sm uppercase tracking-widest mb-3">
                  {slide.subtitle}
                </p>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {slide.title}
              </h1>
            </div>
          </div>
        </div>
      ))}

      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full backdrop-blur-sm transition"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === current ? 'bg-agri-yellow scale-110' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
