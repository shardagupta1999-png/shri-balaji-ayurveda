import { ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services, type Service } from '@/data/services';
import { business } from '@/config/business';

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-forest/10 bg-brand-ivory shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-ivory/95 text-brand-forest shadow-soft">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        {!service.availabilityConfirmed && (
          <span className="mb-4 inline-flex w-fit rounded-full bg-brand-beige px-3 py-1 text-xs font-medium text-brand-charcoal">
    
          </span>
        )}
        <h3 className="text-2xl">{service.title}</h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-[1.6] text-brand-charcoal/80">{service.summary}</p>
        <Link
          to={`/services#${service.id}`}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-forest transition-colors hover:text-brand-sage"
        >
          Learn More
          <span className="sr-only">about {service.title}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function ServicesPreview() {
  return (
    <section id="services" className="bg-brand-beige py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Explore Our Wellness Services"
            description="Every visit begins with understanding your needs. Each service is discussed in detail before you decide what suits you."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-[1.6] text-brand-charcoal/75">
            {business.serviceDisclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
