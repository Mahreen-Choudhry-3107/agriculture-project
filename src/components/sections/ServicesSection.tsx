import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const services = [
  {
    title: 'Agricultural Research',
    description: 'Conducting cutting-edge research in crop improvement, soil health, and agricultural innovation to enhance productivity and sustainability for Punjab farming communities.',
    href: '/services#research',
  },
  {
    title: 'Farm Mechanization',
    description: 'Providing access to modern farming equipment, machinery subsidies, and technical support to boost farm efficiency and reduce manual labor for smallholder farmers.',
    href: '/services#mechanization',
  },
  {
    title: 'On Farm Water Management',
    description: 'Implementing efficient irrigation systems, water conservation techniques, and drainage solutions to optimize water usage and improve crop yields across the province.',
    href: '/services#water',
  },
  {
    title: 'Extension & Adaptive Research',
    description: 'Transferring latest agricultural technologies to farmers through training programs, field demonstrations, and advisory services for practical on-farm applications.',
    href: '/services#extension',
  },
  {
    title: 'Pest Warning & Control',
    description: 'Operating pest surveillance networks, issuing timely warnings, and ensuring quality control of pesticides to protect crops from disease and insect damage.',
    href: '/services#pest',
  },
  {
    title: 'Agricultural Information',
    description: 'Disseminating agricultural knowledge through print, electronic, and social media channels including publications, documentaries, and farmer awareness campaigns.',
    href: '/services#info',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll animation="fadeUp">
          <div className="text-center mb-12">
            <p className="text-agri-green font-semibold text-sm uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive agricultural services for the farmers of Punjab
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
              <AnimateOnScroll key={service.title} animation="fadeUp" delay={i * 100}>
                <Link
                  href={service.href}
                  className={`group block rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border h-full ${
                    i % 2 === 0
                      ? 'bg-agri-green text-white border-agri-green'
                      : 'bg-white text-gray-800 border-gray-100'
                  }`}
                >
                  <h3 className={`text-base font-semibold mb-1.5 transition-colors ${
                    i % 2 === 0 ? 'text-white group-hover:text-green-100' : 'text-gray-800 group-hover:text-agri-green'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    i % 2 === 0 ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    {service.description}
                  </p>
                  <span className={`inline-flex items-center gap-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    i % 2 === 0 ? 'text-white' : 'text-agri-green'
                  }`}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
        </div>

        <AnimateOnScroll animation="fadeUp" delay={300}>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-agri-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-agri-green-dark transition text-sm"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
