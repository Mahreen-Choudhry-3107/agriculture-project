import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const projects = [
  {
    title: 'Oilseed Enhancement Program',
    description: 'Enhancing oilseed production through improved varieties and farming techniques across Punjab.',
  },
  {
    title: 'Rice Productivity Enhancement',
    description: 'Improving rice yield through modern cultivation practices and research initiatives.',
  },
  {
    title: 'Wheat Productivity Enhancement',
    description: 'Boosting wheat production for national food security and farmer prosperity.',
  },
  {
    title: 'Improvement of Watercourses (Phase-II)',
    description: 'Lining and improvement of watercourses for efficient water delivery to farms.',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll animation="fadeUp">
          <div className="text-center mb-12">
            <p className="text-agri-green font-semibold text-sm uppercase tracking-widest mb-2">
              Development Programs
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Ongoing Projects</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Key development projects for agricultural growth in Punjab
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => (
              <AnimateOnScroll key={project.title} animation="fadeUp" delay={i * 100}>
                <Link
                  href="/projects"
                  className={`group block rounded-2xl p-6 h-full flex flex-col justify-between min-h-[200px] transition-all duration-300 hover:shadow-md ${
                    i % 2 === 0
                      ? 'bg-white border border-gray-100'
                      : 'bg-gray-900 text-white'
                  }`}
                >
                  <div>
                    <h3 className={`text-base font-semibold mb-2 ${
                      i % 2 === 0 ? 'text-gray-800 group-hover:text-agri-green' : 'text-white'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      i % 2 === 0 ? 'text-gray-500' : 'text-gray-300'
                    }`}>
                      {project.description}
                    </p>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-sm font-medium mt-4 group-hover:gap-2.5 transition-all ${
                    i % 2 === 0 ? 'text-agri-green' : 'text-white'
                  }`}>
                    Ongoing <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
        </div>

        <AnimateOnScroll animation="fadeUp" delay={300}>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-agri-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-agri-green-dark transition text-sm"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
