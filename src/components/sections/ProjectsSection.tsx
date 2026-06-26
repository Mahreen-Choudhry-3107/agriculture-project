import { ArrowRight, Wheat, Droplets, Sun, Leaf } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const projects = [
  {
    icon: Sun,
    title: 'Oilseed Enhancement Program',
    description: 'Enhancing oilseed production through improved varieties and farming techniques.',
    status: 'Ongoing',
    color: 'bg-yellow-500',
  },
  {
    icon: Leaf,
    title: 'Rice Productivity Enhancement',
    description: 'Improving rice yield through modern cultivation practices and research.',
    status: 'Ongoing',
    color: 'bg-green-500',
  },
  {
    icon: Wheat,
    title: 'Wheat Productivity Enhancement',
    description: 'Boosting wheat production for national food security.',
    status: 'Ongoing',
    color: 'bg-amber-500',
  },
  {
    icon: Droplets,
    title: 'Improvement of Watercourses (Phase-II)',
    description: 'Lining and improvement of watercourses for efficient water delivery.',
    status: 'Ongoing',
    color: 'bg-blue-500',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <AnimateOnScroll key={project.title} animation="fadeUp" delay={i * 100}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 card-hover h-full">
                  <div className={`${project.color} h-1.5`} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${project.color}/10 rounded-lg flex items-center justify-center`}>
                        <Icon size={24} className={`${project.color.replace('bg-', 'text-')}`} />
                      </div>
                      <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll animation="fadeUp" delay={300}>
          <div className="text-center mt-8">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 bg-agri-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-agri-green-dark transition text-sm"
            >
              View All Projects <ArrowRight size={16} />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
