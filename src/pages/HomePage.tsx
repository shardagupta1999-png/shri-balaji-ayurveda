import { useDocumentMeta } from '@/lib/useDocumentMeta';
import { pageSeo } from '@/lib/seo';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { CtaBanner } from '@/components/ui/CtaBanner';

export function HomePage() {
  useDocumentMeta(pageSeo.home);

  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialSection />
      <CtaBanner />
    </>
  );
}
