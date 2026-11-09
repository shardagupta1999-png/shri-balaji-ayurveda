import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/enquiry/BookingContext';
import type { Service } from '@/data/services';

interface ServiceDetailProps {
  service: Service;
  reverse?: boolean;
}

export function ServiceDetail({ service, reverse = false }: ServiceDetailProps) {
  const { openBooking } = useBooking();
  const Icon = service.icon;

  return (
    <article id={service.id} className="grid items-center gap-10 border-t border-brand-forest/10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
      <div className={reverse ? 'lg:order-2' : ''}>
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card"
        />
      </div>

      <div className={reverse ? 'lg:order-1' : ''}>
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-beige text-brand-forest">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl">{service.title}</h2>
        <p className="mt-5 text-lg leading-[1.6] text-brand-charcoal">{service.summary}</p>
        <p className="mt-4 leading-[1.6] text-brand-charcoal/80">{service.description}</p>

        {!service.availabilityConfirmed && (
          <p className="mt-6 inline-flex rounded-full bg-brand-beige px-3 py-1 text-xs font-medium text-brand-charcoal">
          
          </p>
        )}

        <div className="mt-8 rounded-2xl bg-brand-beige/70 p-6">
          <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-brand-sage">What to expect</h3>
          <ul className="mt-4 space-y-3">
            {service.expectations.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem] text-brand-charcoal">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-sage" strokeWidth={1.75} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Button className="mt-8 w-full sm:w-auto" onClick={() => openBooking({ service: service.title })}>
          Enquire About This Service
        </Button>
      </div>
    </article>
  );
}
