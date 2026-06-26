'use client';

import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const services = [
  {
    id: 'research',
    title: 'Agricultural Research',
    description:
      'The Ayub Agricultural Research Institute (AARI) leads agricultural research in Punjab, focusing on crop improvement, plant protection, and soil science.',
    image: '/images/agriculture-researcg.png',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 'mechanization',
    title: 'Farm Mechanization',
    description:
      'Providing subsidized farm machinery including tractors, ploughs, harvesters, and other equipment to enhance agricultural productivity.',
    image: '/images/Farm-Mechanization.png',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'water',
    title: 'On Farm Water Management',
    description:
      'Improving water use efficiency through watercourse lining, laser land leveling, and modern irrigation techniques.',
    image: '/images/On-Farm-Water-Management.png',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'extension',
    title: 'Extension & Adaptive Research',
    description:
      'Technology transfer, farmer training, plant clinics, biological control labs, and subsidy on seed and fertilizer.',
    image: '/images/Extension-Adaptive-Research.png',
  },
  {
    id: 'pest',
    title: 'Pest Warning & Quality Control',
    description:
      'Pest monitoring systems, pest surveillance, and quality control of pesticides to protect crops.',
    image: '/images/Pest-Warning-Quality-Control.png',
  },
  {
    id: 'marketing',
    title: 'Economics & Marketing',
    description:
      'Agricultural market information, price monitoring, and economic analysis for farmers.',
    image: '/images/Economics-Marketing.png',
  },
  {
    id: 'crs',
    title: 'Crop Reporting Service',
    description:
      'Collection, analysis and dissemination of agricultural statistics and crop reporting data.',
    image: '/images/agriculture-researcg.png',
  },
  {
    id: 'floriculture',
    title: 'Floriculture',
    description:
      'Training and research in floriculture, nursery development, and ornamental plant production.',
    image: '/images/Extension-Adaptive-Research.png',
  },
  {
    id: 'soil',
    title: 'Soil Survey',
    description:
      'Comprehensive soil mapping, soil health assessment, and soil testing services across Punjab.',
    image: '/images/On-Farm-Water-Management.png',
  },
  {
    id: 'info',
    title: 'Agricultural Information',
    description:
      'Print media, electronic media, and social media communications for agricultural awareness.',
    image: '/images/Economics-Marketing.png',
  },
];

export default function ServicesPage() {
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
            What We Do
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <a href="/" className="hover:text-white transition">Home</a>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {services.map((service, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <AnimateOnScroll
                key={service.id}
                animation={isReversed ? 'fadeRight' : 'fadeLeft'}
                delay={100}
              >
                <div
                  id={service.id}
                  className={`flex flex-col ${
                    isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                  } bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 group`}
                >
                  {/* Image */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`}
                    />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full">
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <div className={`w-12 h-1 bg-gradient-to-r ${service.color} rounded-full mb-4`} />
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-agri-green transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <a
                      href={`#${service.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-agri-green group-hover:gap-3 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>
    </>
  );
}
