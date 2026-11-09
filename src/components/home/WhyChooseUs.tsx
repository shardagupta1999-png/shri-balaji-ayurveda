import { Leaf, HeartHandshake, Stethoscope, Users } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const reasons = [
  {
    icon: Users,
    title: 'Friendly & Supportive Team',
    text: 'A welcoming environment where visitors feel comfortable and supported.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalised Attention',
    text: 'Understanding individual wellness needs before suggesting an appropriate approach.',
  },
  {
    icon: Leaf,
    title: 'Traditional Wellness Approach',
    text: 'An appreciation for traditional Indian wellness practices.',
  },
  {
    icon: Stethoscope,
    title: 'Specialised Practitioner Coordination',
    text: 'The centre has received positive feedback for arranging external acupuncture practitioners when required.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-brand-ivory py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Why Choose Us" title="Care That Puts You First" />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 100}>
              <div className="group h-full rounded-3xl border border-brand-forest/10 bg-white/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-card">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-beige text-brand-forest transition-colors duration-500 group-hover:bg-brand-forest group-hover:text-brand-ivory">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl">{title}</h3>
                <p className="mt-3 text-[0.95rem] leading-[1.6] text-brand-charcoal/80">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
