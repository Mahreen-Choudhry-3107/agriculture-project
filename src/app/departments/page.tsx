'use client';

import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const departments = [
  {
    id: 'crs',
    name: 'Crop Reporting Service',
    description: 'Agricultural statistics, crop reporting, and data collection for policy decisions.',
  },
  {
    id: 'marketing',
    name: 'Economics & Marketing',
    description: 'Agricultural economics, market information, and price monitoring services.',
  },
  {
    id: 'floriculture',
    name: 'Floriculture (Training & Research)',
    description: 'Research and training programs in floriculture and ornamental horticulture.',
  },
  {
    id: 'pecell',
    name: 'Planning & Evaluation Cell',
    description: 'Departmental planning, monitoring, and performance evaluation.',
  },
  {
    id: 'info',
    name: 'Agricultural Information',
    description: 'Print, electronic, and social media agricultural communications.',
  },
  {
    id: 'soil',
    name: 'Soil Survey of Punjab',
    description: 'Soil mapping, soil health assessment, and testing services.',
  },
  {
    id: 'pest',
    name: 'Pest Warning & Quality Control of Pesticides',
    description: 'Pest surveillance, monitoring, and pesticide quality control.',
  },
  {
    id: 'field',
    name: 'Agricultural Field',
    description: 'Field operations, farm development, and agricultural extension.',
  },
  {
    id: 'ofwm',
    name: 'On Farm Water Management',
    description: 'Water resource management, irrigation efficiency, and watercourse improvement.',
  },
  {
    id: 'aari',
    name: 'Ayub Agricultural Research Institute (AARI)',
    description: 'Premier agricultural research institute for crop improvement and innovation.',
  },
  {
    id: 'ext',
    name: 'Extension & Adaptive Research',
    description: 'Farmer training, technology transfer, and adaptive research programs.',
  },
  {
    id: 'raedc',
    name: 'Regional Agricultural Economic Development Centre',
    description: 'Regional economic development through agricultural initiatives.',
  },
];

export default function DepartmentsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/Attached-Departments.jpeg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <p className="text-agri-yellow font-semibold text-sm uppercase tracking-widest mb-2">
            Our Network
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Attached Departments</h1>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <a href="/" className="hover:text-white transition">Home</a>
            <span>/</span>
            <span className="text-white">Attached Departments</span>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {departments.map((dept, i) => {
              const isGreen = (Math.floor(i / 4) + i) % 2 !== 0;
              return (
                <AnimateOnScroll key={dept.id} animation="scaleUp" delay={i * 60}>
                  <div
                    id={dept.id}
                    className={`aspect-square rounded-2xl p-6 flex flex-col justify-center items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group backdrop-blur-md ${
                      isGreen
                        ? 'bg-agri-green/80 text-white border border-white/20 shadow-lg hover:bg-agri-green/90'
                        : 'bg-white/70 text-gray-800 border border-white/40 shadow-lg hover:bg-white/90 hover:border-agri-green/30'
                    }`}
                  >
                    <h3 className={`text-sm font-bold leading-tight mb-2 ${
                      isGreen ? 'text-white' : 'text-gray-800 group-hover:text-agri-green'
                    } transition-colors`}>
                      {dept.name}
                    </h3>
                    <p className={`text-xs leading-relaxed ${
                      isGreen ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {dept.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
