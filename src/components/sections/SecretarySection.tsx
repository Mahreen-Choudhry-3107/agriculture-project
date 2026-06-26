import { Quote } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function SecretarySection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll animation="fadeUp">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <img
                  src="/images/team-dp.jpeg"
                  alt="Secretary Agriculture"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <Quote size={20} className="text-agri-yellow" />
                  <p className="text-agri-green font-semibold text-sm uppercase tracking-wider">
                    Message from
                  </p>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  Mian Sharafat Ali
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Agriculture Department, Farmers Welfare Punjab
                </p>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  Agriculture is the backbone of Punjab&apos;s economy. Our department is committed to
                  empowering farmers with modern technologies, efficient water management, and
                  comprehensive extension services. Together, we aim to achieve food security
                  and sustainable agricultural growth for a prosperous Punjab.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
