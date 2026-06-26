import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'About Us | Agriculture Department Punjab',
};

const heroSlides = [
  { title: 'About Us', subtitle: 'Agriculture Department', image: '/images/hero-1.jpeg' },
  { title: 'Our Vision', subtitle: 'Agriculture Department', image: '/images/hero-2.jpeg' },
  { title: 'Our Mission', subtitle: 'Agriculture Department', image: '/images/hero-3.jpeg' },
];

const milestones = [
  'Sustain food security and support the national economy',
  'Make agriculture cost-effective and knowledge-based',
  'Emphasis on farmer welfare and yield potential maintenance',
  'Provide raw materials to major industries',
  'Meet the challenges of food security',
];

const departments = [
  'Crop Reporting Service',
  'Economics & Marketing',
  'Floriculture',
  'Planning & Evaluation Cell',
  'Agricultural Information',
  'Soil Survey of Punjab',
  'Pest Warning & Quality Control',
  'On Farm Water Management',
];

export default function AboutPage() {
  return (
    <>
      <PageHero slides={heroSlides} />

      {/* Overview Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Agriculture: The Mainstay of Pakistan&apos;s Economy
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Agriculture accounts for 23% of the GDP and together with agro-based products
                  fetches 80% of the country&apos;s total export earnings. More than 42.3% of the
                  labor force is engaged in this sector.
                </p>
                <p>
                  The most populated province of Punjab provides the largest share in national
                  agricultural production. Agriculture offers 19% of the GDP and gives employment
                  to 48% of the population.
                </p>
                <p>
                  It contributes in provision of raw materials to major industries; textile, leather,
                  rice processing, edible oil, sugar and various food processing industries.
                  Pakistan&apos;s total export has a three fourth share of agriculture and 60% of this
                  share comes from Punjab.
                </p>
                <p>
                  Over years, Punjab has tried to meet the challenges of food security.
                </p>
              </div>
            </div>

            <div>
              {/* Mission */}
              <div id="vision" className="bg-green-50 rounded-xl p-6 mb-8 border border-green-100">
                <h3 className="text-xl font-bold text-agri-green mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To sustain food security and support the national economy, making agriculture
                  cost effective and knowledge based, with emphasis on farmer&apos;s welfare and
                  maintenance of the yield potentials.
                </p>
              </div>

              {/* Key Facts */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Milestones</h3>
                <ul className="space-y-3">
                  {milestones.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-agri-green mt-0.5 shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section id="core-team" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <img
                src="/images/team-dp.jpeg"
                alt="Secretary Agriculture"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Secretary Agriculture</h3>
              <p className="text-sm text-gray-500">Agriculture Department, Punjab</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <img
                src="/images/team-dp.jpeg"
                alt="Director Agriculture"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Director Agriculture</h3>
              <p className="text-sm text-gray-500">Field Operations</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <img
                src="/images/team-dp.jpeg"
                alt="Research Director"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">Research Director</h3>
              <p className="text-sm text-gray-500">Agricultural Research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Attached Departments List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Attached Departments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept) => (
              <div
                key={dept}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-agri-green hover:shadow-sm transition"
              >
                <p className="text-sm font-medium text-gray-700">{dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
