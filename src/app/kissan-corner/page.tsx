'use client';

import {
  BarChart3,
  Download,
  Film,
  FileText,
  GraduationCap,
  Newspaper,
  ExternalLink,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const resources = [
  {
    icon: BarChart3,
    title: 'Crops Production Plans',
    description: 'Season-wise crop production planning guides for major crops of Punjab.',
    href: '#',
    color: 'bg-emerald-500',
  },
  {
    icon: ExternalLink,
    title: 'Meri Zameen',
    description: 'Online land records and information system for Punjab.',
    href: '#',
    color: 'bg-blue-500',
  },
  {
    icon: GraduationCap,
    title: 'Research Institutes',
    description: 'Agricultural research institute information and services.',
    href: '#',
    color: 'bg-purple-500',
  },
  {
    icon: Download,
    title: 'Download Forms',
    description: 'Downloadable agricultural forms, applications, and documents.',
    href: '#',
    color: 'bg-orange-500',
  },
  {
    icon: Film,
    title: 'Zari Documentaries',
    description: 'Agricultural documentaries for farmer awareness and education.',
    href: '#',
    color: 'bg-red-500',
  },
  {
    icon: Newspaper,
    title: 'TVCs',
    description: 'Television commercials promoting agricultural practices.',
    href: '#',
    color: 'bg-cyan-500',
  },
  {
    icon: FileText,
    title: 'Publications',
    description: 'Research papers, reports, and agricultural publications.',
    href: '#',
    color: 'bg-indigo-500',
  },
  {
    icon: BookOpen,
    title: 'Ziratnama',
    description: 'Agricultural newsletter and seasonal advisory for farmers.',
    href: '#',
    color: 'bg-amber-500',
  },
  {
    icon: ExternalLink,
    title: 'Agriculture Marketing Information Service',
    description: 'Real-time market prices and agricultural commodity data.',
    href: '#',
    color: 'bg-teal-500',
  },
  {
    icon: ExternalLink,
    title: 'Procurement Management Information System',
    description: 'Government procurement transparency and tracking.',
    href: '#',
    color: 'bg-rose-500',
  },
];

export default function KissanCornerPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-1.jpeg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <p className="text-agri-yellow font-semibold text-sm uppercase tracking-widest mb-2">
            For Farmers
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Kissan Corner</h1>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <a href="/" className="hover:text-white transition">Home</a>
            <span>/</span>
            <span className="text-white">Kissan Corner</span>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-4">
            {resources.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll
                  key={item.title}
                  animation={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                  delay={i * 60}
                >
                  <a
                    href={item.href}
                    className="group flex items-center gap-5 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 relative overflow-hidden"
                  >
                    {/* Colored Left Bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${item.color} rounded-l-2xl`} />

                    {/* Number Badge */}
                    <div className={`w-12 h-12 ${item.color}/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon size={22} className={`${item.color.replace('bg-', 'text-')} group-hover:scale-110 transition-transform duration-300`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-agri-green transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 truncate">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight
                      size={20}
                      className="text-gray-300 group-hover:text-agri-green group-hover:translate-x-1 transition-all duration-300 shrink-0"
                    />
                  </a>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
