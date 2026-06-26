import { ArrowRight, ExternalLink } from 'lucide-react';

const departments = [
  {
    name: 'Crop Reporting Service',
    description: 'Agricultural statistics and crop reporting.',
    href: '/departments#crs',
  },
  {
    name: 'Economics & Marketing',
    description: 'Agricultural economics and market information.',
    href: '/departments#marketing',
  },
  {
    name: 'Floriculture (Training & Research)',
    description: 'Floriculture training and research programs.',
    href: '/departments#floriculture',
  },
  {
    name: 'Planning & Evaluation Cell',
    description: 'Department planning and performance evaluation.',
    href: '/departments#pecell',
  },
  {
    name: 'Agricultural Information',
    description: 'Agricultural communications and media.',
    href: '/departments#info',
  },
  {
    name: 'Soil Survey of Punjab',
    description: 'Soil mapping and survey services.',
    href: '/departments#soil',
  },
  {
    name: 'Pest Warning & Quality Control',
    description: 'Pest monitoring and pesticide quality control.',
    href: '/departments#pest',
  },
  {
    name: 'Agricultural Field',
    description: 'Field operations and farm development.',
    href: '/departments#field',
  },
  {
    name: 'On Farm Water Management',
    description: 'Water resource management for agriculture.',
    href: '/departments#ofwm',
  },
  {
    name: 'Ayub Agricultural Research Institute',
    description: 'Agricultural research and development.',
    href: '/departments#aari',
  },
  {
    name: 'Extension & Adaptive Research',
    description: 'Extension services and adaptive research.',
    href: '/departments#ext',
  },
  {
    name: 'RAEDC',
    description: 'Regional Agricultural Economic Development Centre.',
    href: '/departments#raedc',
  },
];

export default function DepartmentsSection() {
  return (
    <section className="py-16 bg-agri-green">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-agri-yellow font-semibold text-sm uppercase tracking-widest mb-2">
            Our Network
          </p>
          <h2 className="text-3xl font-bold text-white mb-3">Attached Departments</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Various attached departments working together for agricultural development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {departments.map((dept) => (
            <a
              key={dept.name}
              href={dept.href}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition group"
            >
              <div className="flex items-start gap-3">
                <ExternalLink size={16} className="text-agri-yellow mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-white font-semibold text-sm group-hover:text-agri-yellow transition">
                    {dept.name}
                  </h3>
                  <p className="text-white/60 text-xs mt-1">{dept.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/departments"
            className="inline-flex items-center gap-2 bg-agri-yellow text-agri-green-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition text-sm"
          >
            View All Departments <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
