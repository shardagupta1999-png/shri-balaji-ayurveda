import { Reveal } from '@/components/ui/Reveal';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { useDocumentMeta } from '@/lib/useDocumentMeta';
import { pageSeo } from '@/lib/seo';

const HERO_IMAGE =
  'https://images.pexels.com/photos/4871295/pexels-photo-4871295.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1100';
const EDITORIAL_IMAGE =
  'https://images.pexels.com/photos/6226040/pexels-photo-6226040.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800';

const commitments = [
  {
    title: 'Individual attention',
    text: 'Every visit starts with listening. We take time to understand your concerns, routine and goals before suggesting an approach.',
  },
  {
    title: 'A supportive environment',
    text: 'Our team aims to make every visitor feel welcome, respected and at ease, from the first call to the last appointment.',
  },
  {
    title: 'Commitment to comfort',
    text: 'We keep our treatment spaces calm and comfortable, so your attention can stay on your well-being.',
  },
];

const approachPillars = [
  {
    number: '01',
    title: 'Understanding individual needs',
    text: 'Everyone\'s body and daily life are different. We begin with conversation and listening, so any suggestion is shaped around you.',
  },
  {
    number: '02',
    title: 'Appropriate professional guidance',
    text: 'Where your needs call for it, we coordinate with appropriately qualified practitioners, including external acupuncture specialists, and explain clearly who you are seeing and why.',
  },
  {
    number: '03',
    title: 'Responsible wellness practices',
    text: 'We share traditional practices with care, stay honest about what they can and cannot do, and encourage you to seek medical advice for any health concern.',
  },
];

export function AboutPage() {
  useDocumentMeta(pageSeo.about);

  return (
    <>
      <section className="container-page grid items-center gap-14 pb-20 pt-16 lg:grid-cols-2 lg:gap-20 lg:pt-24">
        <Reveal>
          <p className="eyebrow">About Shri Balaji Ayurveda</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Rooted in Tradition. Focused on Your Well-being.
          </h1>
          <div className="mt-8 space-y-5 text-base leading-[1.7] text-brand-charcoal/85 sm:text-lg">
            <p>
              Shri Balaji Ayurveda is an Ayurveda, acupressure and holistic therapy centre built on a simple idea: wellness
              begins with understanding the person in front of you.
            </p>
            <p>
              We draw on traditional Indian wellness practices and combine them with a calm, professional environment, so
              that every visit feels personal and unhurried.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <img
            src={HERO_IMAGE}
            alt="Herbal ingredients being ground in a stone mortar and pestle"
            width={1100}
            height={1000}
            className="h-[480px] w-full rounded-t-[999px] rounded-b-[2rem] object-cover shadow-card"
          />
        </Reveal>
      </section>

      <section className="bg-brand-beige py-20 lg:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <img
              src={EDITORIAL_IMAGE}
              alt="Fresh green tea leaves in a natural setting"
              width={800}
              height={1000}
              loading="lazy"
              className="h-[520px] w-full rounded-[2rem] object-cover shadow-card"
            />
          </Reveal>

          <div className="space-y-10 lg:col-span-3">
            {commitments.map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <div className="border-l border-brand-gold pl-6">
                  <h2 className="text-2xl sm:text-3xl">{item.title}</h2>
                  <p className="mt-3 text-base leading-[1.7] text-brand-charcoal/85">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-ivory py-20 lg:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Our Approach to Wellness</h2>
            <p className="mt-6 text-base leading-[1.7] text-brand-charcoal/85 sm:text-lg">
              Our approach rests on three commitments that guide every conversation and every treatment we offer.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {approachPillars.map((pillar, index) => (
              <Reveal key={pillar.number} delay={index * 120}>
                <div className="h-full rounded-3xl border border-brand-forest/10 bg-white/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                  <p className="font-display text-3xl text-brand-gold">{pillar.number}</p>
                  <h3 className="mt-5 text-xl">{pillar.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.7] text-brand-charcoal/80">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
