import {
  BookOpen,
  Download,
  Film,
  BarChart3,
  FileText,
  GraduationCap,
  Newspaper,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const kissanLinks = [
  {
    icon: BarChart3,
    title: 'Crop Production Plans',
    description: 'Season-wise crop production planning guides.',
    href: '#',
    color: 'bg-emerald-500',
  },
  {
    icon: ExternalLink,
    title: 'Meri Zameen',
    description: 'Online land records and information system.',
    href: '#',
    color: 'bg-blue-500',
  },
  {
    icon: GraduationCap,
    title: 'Research Institutes',
    description: 'Agricultural research institute information.',
    href: '/research_inst',
    color: 'bg-purple-500',
  },
  {
    icon: Download,
    title: 'Download Forms',
    description: 'Downloadable agricultural forms and applications.',
    href: '/download_forms',
    color: 'bg-orange-500',
  },
  {
    icon: Film,
    title: 'Zari Documentaries',
    description: 'Agricultural documentaries and video content.',
    href: '/documentaries',
    color: 'bg-red-500',
  },
  {
    icon: Newspaper,
    title: 'TVCs',
    description: 'Television commercials for farmer awareness.',
    href: '/tvcs',
    color: 'bg-cyan-500',
  },
  {
    icon: FileText,
    title: 'Publications',
    description: 'Research papers and agricultural publications.',
    href: '/publication',
    color: 'bg-indigo-500',
  },
  {
    icon: BookOpen,
    title: 'Ziratnama',
    description: 'Agricultural newsletter and advisory.',
    href: '#',
    color: 'bg-amber-500',
  },
];

export default function KissanCornerSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll animation="fadeUp">
          <div className="text-center mb-12">
            <p className="text-agri-green font-semibold text-sm uppercase tracking-widest mb-2">
              Resources
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Kissan Corner</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Essential resources, tools, and information for the farmers of Punjab
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {kissanLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll
                key={item.title}
                animation={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                delay={i * 60}
              >
                <Link
                  href={item.href}
                  className="group flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/60 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 relative overflow-hidden"
                >
                  {/* Colored Left Bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${item.color} rounded-l-2xl`} />

                  {/* Icon */}
                  <div className={`w-14 h-14 ${item.color}/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon size={24} className={`${item.color.replace('bg-', 'text-')} group-hover:scale-110 transition-transform duration-300`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-800 mb-0.5 group-hover:text-agri-green transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    size={18}
                    className="text-gray-300 group-hover:text-agri-green group-hover:translate-x-1 transition-all duration-300 shrink-0"
                  />
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
