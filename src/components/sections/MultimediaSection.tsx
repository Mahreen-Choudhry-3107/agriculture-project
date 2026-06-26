import { ArrowRight, Film, FileText, MessageCircle, Newspaper } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const mediaItems = [
  {
    icon: Film,
    title: 'Zari Documentaries',
    description: 'Agricultural documentaries for farmer awareness and education.',
    href: '/documentaries',
    color: 'bg-agri-green',
  },
  {
    icon: MessageCircle,
    title: 'Advisory Messages',
    description: 'Expert advisory messages for crop management and farming.',
    href: '/advisory-messages',
    color: 'bg-gray-800',
  },
  {
    icon: Newspaper,
    title: 'Press Releases',
    description: 'Latest press releases and news from the Agriculture Department.',
    href: '/press-releases',
    color: 'bg-agri-green',
  },
  {
    icon: FileText,
    title: 'Publications',
    description: 'Research publications, reports, and agricultural periodicals.',
    href: '/publication',
    color: 'bg-gray-800',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll key={item.title} animation="scaleUp" delay={i * 100}>
                <Link
                  href={item.href}
                  className="group block relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 card-hover h-full"
                >
                  <div className={`${item.color} h-2`} />
                  <div className="p-6">
                    <div className={`w-14 h-14 ${item.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                      <Icon size={28} className={`${item.color.replace('bg-', 'text-')}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-agri-green transition">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-agri-green mt-4 group-hover:gap-2 transition-all">
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
