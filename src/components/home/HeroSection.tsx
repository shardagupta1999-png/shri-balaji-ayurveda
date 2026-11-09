import { ArrowRight, HeartHandshake, Sparkles, Users } from 'lucide-react';
import { Link } from '@/lib/router';
import { Button, buttonStyles } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useBooking } from '@/components/enquiry/BookingContext';

const HERO_IMAGE =
  'https://images.pexels.com/photos/6560308/pexels-photo-6560308.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1200';

const trustIndicators = [
  { icon: HeartHandshake, label: 'Patient-Centred Care' },
  { icon: Users, label: 'Friendly & Supportive Staff' },
  { icon: Sparkles, label: 'Personalised Wellness' },
];

export function HeroSection() {
  const { openBooking } = useBooking();

  return (
    <section className="relative overflow-hidden bg-brand-beige">
      <div className="container-page grid items-center gap-14 py-16 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <Reveal>
          <p className="eyebrow">Ayurveda &middot; Acupressure &middot; Holistic Therapy</p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Wellness Through Ayurveda And Advance Therapy
          </h1>
          <p className="mt-6 max-w-xl text-base leading-[1.6] text-brand-charcoal/85 sm:text-lg">
            Experience a thoughtful approach to wellness with traditional healing practices, personalised care, and a
            team dedicated to making your wellness journey comfortable.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button onClick={() => openBooking()} className="w-full sm:w-auto">
              Book an Appointment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Link to="/services" className={buttonStyles('secondary', 'md', 'w-full sm:w-auto')}>
              Explore Our Services
            </Link>
          </div>

          <ul className="mt-12 grid gap-4 border-t border-brand-forest/15 pt-8 sm:grid-cols-3">
            {trustIndicators.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm font-medium text-brand-forest">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-ivory text-brand-sage shadow-soft">
                  <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-t-[999px] rounded-b-[2rem] border border-brand-gold/50 sm:block"
          />
          <img
            src={HERO_IMAGE}
            alt="A calm Ayurveda treatment room with soft natural light and warm, earthy tones"
            width={1200}
            height={1000}
            fetchPriority="high"
            className="relative h-[460px] w-full rounded-t-[999px] rounded-b-[2rem] object-cover shadow-card sm:h-[560px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
