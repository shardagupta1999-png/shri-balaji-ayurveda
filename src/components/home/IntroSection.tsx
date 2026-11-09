import { ArrowRight, Check } from 'lucide-react';
import { Link } from '@/lib/router';
import { buttonStyles } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { business } from '@/config/business';

const INTRO_IMAGE =
  'https://images.pexels.com/photos/17380335/pexels-photo-17380335.jpeg?auto=compress&cs=tinysrgb&h=900&w=1100';

const brandValues = ['Patient-first approach', 'Traditional healing practices', 'Professional and comfortable environment'];

export function IntroSection() {
  return (
    <section id="about-intro" className="bg-brand-ivory py-20 lg:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img
            src={INTRO_IMAGE}
            alt="Turmeric, herbs and natural essential oils arranged on a wooden surface"
            width={1100}
            height={900}
            loading="lazy"
            className="h-[420px] w-full rounded-[2rem] object-cover shadow-card sm:h-[520px]"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Welcome to {business.name}</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Your Journey Towards Better Well-being Starts Here</h2>
          <p className="mt-6 text-base leading-[1.6] text-brand-charcoal/85 sm:text-lg">
            At Shri Balaji Ayurveda, we believe wellness begins with understanding individual needs. Our approach focuses
            on traditional wellness practices, attentive care, and a comfortable experience for every visitor.
          </p>

          <ul className="mt-8 space-y-3">
            {brandValues.map((value) => (
              <li key={value} className="flex items-center gap-3 text-[0.95rem] text-brand-charcoal">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-beige text-brand-sage">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                </span>
                {value}
              </li>
            ))}
          </ul>

          <Link to="/about" className={buttonStyles('secondary', 'md', 'mt-10')}>
            Know More About Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
