import { Reveal } from '@/components/ui/Reveal';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { services } from '@/data/services';
import { business } from '@/config/business';
import { useDocumentMeta } from '@/lib/useDocumentMeta';
import { pageSeo } from '@/lib/seo';

export function ServicesPage() {
  useDocumentMeta(pageSeo.services);

  return (
    <>
      <section className="container-page pb-12 pt-16 lg:pt-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Our Services</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">Our Wellness Services</h1>
          <p className="mt-6 text-base leading-[1.7] text-brand-charcoal/85 sm:text-lg">
            Each service is explained clearly before you decide anything. Read through the options below, and send us an
            enquiry when you are ready to talk with our team.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-brand-gold/40 bg-brand-beige/70 px-6 py-5 text-sm leading-[1.6] text-brand-charcoal">
            {business.serviceDisclaimer}
          </div>
        </Reveal>
      </section>

      <section className="container-page">
        {services.map((service, index) => (
          <ServiceDetail key={service.id} service={service} reverse={index % 2 === 1} />
        ))}
      </section>

      <div className="container-page pb-12">
        <Reveal>
          <p className="max-w-3xl border-t border-brand-forest/10 pt-10 text-xs leading-[1.7] text-brand-charcoal/70">
            {business.medicalDisclaimer}
          </p>
        </Reveal>
      </div>

      <CtaBanner />
    </>
  );
}
