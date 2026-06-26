import { ArrowRight, Beaker, Tractor, Droplets, Bug, Sprout, BookOpen } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const services = [
  {
    icon: Beaker,
    title: 'Agricultural Research',
    description: 'Research initiatives for crop improvement and agricultural innovation.',
    href: '/services#research',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Tractor,
    title: 'Farm Mechanization',
    description: 'Modern farming equipment and machinery for enhanced productivity.',
    href: '/services#mechanization',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Droplets,
    title: 'On Farm Water Management',
    description: 'Efficient water usage programs and irrigation management.',
    href: '/services#water',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Sprout,
    title: 'Extension & Adaptive Research',
    description: 'Technology transfer and farmer training programs.',
    href: '/services#extension',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Bug,
    title: 'Pest Warning & Control',
    description: 'Pest monitoring and quality control of pesticides.',
    href: '/services#pest',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: BookOpen,
    title: 'Agricultural Information',
    description: 'Print, electronic and social media agricultural communications.',
    href: '/services#info',
    color: 'bg-purple-50 text-purple-600',
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
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateOnScroll key={service.title} animation="fadeUp" delay={i * 100}>
                <Link
                  href={service.href}
                  className="block bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover group h-full"
                >
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-agri-green transition">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-agri-green group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimateOnScroll>
            );
          })}
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
