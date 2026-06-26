import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import CountUp from '@/components/ui/CountUp';

const stats = [
  { label: 'GDP Contribution', value: 23, suffix: '%', decimals: 0, desc: 'of National GDP' },
  { label: 'Labor Force', value: 42.3, suffix: '%', decimals: 1, desc: 'Workforce Engaged' },
  { label: 'Punjab Share', value: 60, suffix: '%', decimals: 0, desc: 'Agricultural Export' },
  { label: 'Employment', value: 48, suffix: '%', decimals: 0, desc: 'Punjab Population' },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} animation="scaleUp" delay={i * 100}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-agri-green mb-1">
                  <CountUp end={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
                <p className="text-sm font-semibold text-gray-700">{stat.label}</p>
                <p className="text-xs text-gray-400">{stat.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
