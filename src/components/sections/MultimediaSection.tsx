import { ArrowRight, Film, FileText, MessageCircle, Newspaper } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const mediaItems = [
  {
    icon: Film,
    title: 'Zari Documentaries',
    description: 'Agricultural documentaries for farmer awareness and education.',
    href: '/documentaries',
  },
  {
    icon: MessageCircle,
    title: 'Advisory Messages',
    description: 'Expert advisory messages for crop management and farming.',
    href: '/advisory-messages',
  },
  {
    icon: Newspaper,
    title: 'Press Releases',
    description: 'Latest press releases and news from the Agriculture Department.',
    href: '/press-releases',
  },
  {
    icon: FileText,
    title: 'Publications',
    description: 'Research publications, reports, and agricultural periodicals.',
    href: '/publication',
  },
];

export default function MultimediaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll animation="fadeUp">
          <div className="text-center mb-12">
            <p className="text-agri-green font-semibold text-sm uppercase tracking-widest mb-2">
              Media Center
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Multimedia Corner</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Access our collection of documentaries, press releases, and agricultural publications
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mediaItems.map((item, i) => {
            const Icon = item.icon;
            const isGreen = i % 2 === 0;
            return (
              <AnimateOnScroll key={item.title} animation="scaleUp" delay={i * 100}>
                <Link
                  href={item.href}
                  className={`group block rounded-2xl overflow-hidden border hover:shadow-md transition-all duration-300 h-full ${
                    isGreen
                      ? 'bg-agri-green border-agri-green'
                      : 'bg-white border-gray-100'
                  }`}
                >
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isGreen ? 'bg-white/20' : 'bg-agri-green'
                    }`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className={`text-base font-semibold mb-1.5 transition-colors ${
                      isGreen ? 'text-white group-hover:text-green-100' : 'text-gray-800 group-hover:text-agri-green'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-3 ${
                      isGreen ? 'text-green-100' : 'text-gray-500'
                    }`}>
                      {item.description}
                    </p>
                    <span className={`inline-flex items-center gap-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isGreen ? 'text-white' : 'text-agri-green'
                    }`}>
                      View <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
