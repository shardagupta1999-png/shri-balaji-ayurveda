import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/enquiry/BookingContext';

export function CtaBanner() {
  const { openBooking } = useBooking();

  return (
    <section className="bg-brand-forest py-20 text-brand-ivory lg:py-24">
      <Reveal className="container-page text-center">
        <p className="eyebrow text-brand-gold-light">Begin Your Visit</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl text-brand-ivory sm:text-4xl lg:text-5xl">
          Take the First Step Towards Your Wellness Journey
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-[1.6] text-brand-ivory/85 sm:text-lg">
          Connect with our team to understand our services and schedule a visit.
        </p>
        <Button variant="light" onClick={() => openBooking()} className="mt-10 w-full sm:w-auto">
          Book Your Appointment
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </Reveal>
    </section>
  );
}
