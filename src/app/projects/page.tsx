'use client';

import { CheckCircle, Clock } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const ongoingProjects = [
  {
    id: 'oilseed',
    title: 'Oilseed Enhancement Program',
    description:
      'National programme to enhance oilseed production through improved varieties, technology dissemination, and farming techniques to reduce edible oil import bill.',
    status: 'Ongoing',
    image: '/images/hero-1.jpeg',
  },
  {
    id: 'rice',
    title: 'Rice Productivity Enhancement',
    description:
      'Program aimed at improving rice yield through modern cultivation practices, improved seed varieties, and integrated pest management.',
    status: 'Ongoing',
    image: '/images/hero-2.jpeg',
  },
  {
    id: 'wheat',
    title: 'Wheat Productivity Enhancement',
    description:
      'National initiative to boost wheat production for food security through research, extension, and improved input supply.',
    status: 'Ongoing',
    image: '/images/hero-3.jpeg',
  },
  {
    id: 'watercourses',
    title: 'Improvement of Watercourses (Phase-II)',
    description:
      'Lining and improvement of watercourses for efficient water delivery from canal to farm gate, reducing water losses.',
    status: 'Ongoing',
    image: '/images/service-hero.png',
  },
];

const completedProjects = [
  {
    title: 'National Programme for Improvement of Watercourses',
    description: 'Phase-I completed with improvement of thousands of watercourses across Punjab.',
  },
  {
    title: 'Strengthening of Agricultural Statistics',
    description: 'Enhanced crop reporting and statistical data collection systems.',
  },
  {
    title: 'Punjab Agricultural Support Programme',
    description: 'Comprehensive farmer support through subsidies, training, and input supply.',
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/service-hero.png)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <p className="text-agri-yellow font-semibold text-sm uppercase tracking-widest mb-2">
            Development Programs
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <a href="/" className="hover:text-white transition">Home</a>
            <span>/</span>
            <span className="text-white">Projects</span>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll animation="fadeUp">
            <div className="flex items-center gap-3 mb-10">
              <Clock size={24} className="text-agri-green" />
              <h2 className="text-2xl font-bold text-gray-800">Ongoing Projects</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ongoingProjects.map((project, i) => (
              <AnimateOnScroll key={project.id} animation="scaleUp" delay={i * 100}>
                <div
                  id={project.id}
                  className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer"
                >
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Default Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Glassy Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="backdrop-blur-md bg-white/20 border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {project.status}
                    </span>
                  </div>

                  {/* Title Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    <h3 className="text-white font-bold text-sm leading-tight mb-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover Detail Overlay */}
                  <div className="absolute inset-0 bg-agri-green/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6 text-center z-30">
                    <span className="backdrop-blur-md bg-white/20 border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                      {project.status}
                    </span>
                    <h3 className="text-white font-bold text-base mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll animation="fadeUp">
            <div className="flex items-center gap-3 mb-10">
              <CheckCircle size={24} className="text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Completed Projects</h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-4">
            {completedProjects.map((project, i) => (
              <AnimateOnScroll key={project.title} animation="fadeUp" delay={i * 100}>
                <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/40 shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                      <CheckCircle size={20} className="text-green-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-agri-green transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500">{project.description}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
