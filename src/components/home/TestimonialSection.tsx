import { Quote, Star, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { business } from '@/config/business';
import { buttonStyles } from '@/components/ui/Button';

const { featuredReview } = business;

export function TestimonialSection() {
  return (
    <section id="testimonials" className="bg-brand-beige py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="What Our Visitors Say" />
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-16 max-w-3xl">
          <figure className="relative rounded-[2rem] bg-brand-ivory p-8 shadow-card sm:p-12">
            <Quote className="absolute right-8 top-8 h-12 w-12 text-brand-gold/30" strokeWidth={1.25} aria-hidden="true" />

            <div className="flex gap-1" role="img" aria-label={`Rated ${featuredReview.rating} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${index < featuredReview.rating ? 'fill-brand-gold text-brand-gold' : 'text-brand-forest/20'}`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <blockquote className="mt-6">
              <p className="text-lg leading-[1.7] text-brand-charcoal sm:text-xl">&ldquo;{featuredReview.text}&rdquo;</p>
            </blockquote>

            <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-brand-forest/10 pt-6">
              <span className="font-display text-lg text-brand-forest">{featuredReview.author}</span>
              <span className="text-sm text-brand-charcoal/70">Google review</span>
            </figcaption>
          </figure>

          {business.googleReviewsUrl && (
            <div className="mt-10 text-center">
              <a
                href={business.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles('secondary')}
              >
                Read More Google Reviews
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
