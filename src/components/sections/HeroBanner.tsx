'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const slides = [
  {
    title: 'Welcome to Agriculture Department',
    subtitle: 'Government of the Punjab',
    description:
      'Sustaining food security and supporting the national economy through cost-effective, knowledge-based agriculture.',
    image: '/images/hero-1.jpeg',
  },
  {
    title: 'Farm Mechanization Services',
    subtitle: 'Modernizing Punjab Agriculture',
    description:
      'Providing subsidized farm machinery and modern tools to enhance agricultural productivity.',
    image: '/images/hero-2.jpeg',
  },
  {
    title: 'On Farm Water Management',
    subtitle: 'Efficient Water Usage',
    description:
      'Improving water use efficiency through watercourse improvement and modern irrigation techniques.',
    image: '/images/hero-3.jpeg',
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative h-[500px] md:h-[550px] overflow-hidden">
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
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center">
            <div className={`text-white max-w-2xl transition-all duration-700 ${i === current ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <p className="text-agri-yellow font-semibold text-sm uppercase tracking-widest mb-3">
                {slide.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex gap-4">
                <a
                  href="/services"
                  className="bg-agri-yellow text-agri-green-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition text-sm"
                >
                  Our Services
                </a>
                <a
                  href="/about"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-agri-green transition text-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
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

      {/* Dots */}
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
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? 'bg-agri-yellow scale-110' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
