import HeroBanner from '@/components/sections/HeroBanner';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import MultimediaSection from '@/components/sections/MultimediaSection';
import DepartmentsSection from '@/components/sections/DepartmentsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import KissanCornerSection from '@/components/sections/KissanCornerSection';
import SecretarySection from '@/components/sections/SecretarySection';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <StatsSection />
      <ServicesSection />
      <MultimediaSection />
      <DepartmentsSection />
      <ProjectsSection />
      <KissanCornerSection />
      <SecretarySection />
    </>
  );
}
