import { Reveal } from '@/components/ui/Reveal';
import { EnquiryForm } from '@/components/enquiry/EnquiryForm';
import { ContactDetails } from '@/components/contact/ContactDetails';
import { MapEmbed } from '@/components/contact/MapEmbed';
import { useDocumentMeta } from '@/lib/useDocumentMeta';
import { pageSeo } from '@/lib/seo';

export function ContactPage() {
  useDocumentMeta(pageSeo.contact);

  return (
    <>
      <section className="container-page pb-16 pt-16 lg:pt-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Get in Touch</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">Contact Us</h1>
          <p className="mt-6 text-base leading-[1.7] text-brand-charcoal/85 sm:text-lg">
            Send us an enquiry or reach out directly. Our team will respond to confirm availability.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-2">
            <ContactDetails />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-[2rem] border border-brand-forest/10 bg-white/80 p-6 shadow-card sm:p-10">
              <h2 className="text-2xl sm:text-3xl">Send an Enquiry</h2>
              <p className="mb-8 mt-3 text-sm leading-[1.6] text-brand-charcoal/75">
                Fields marked as optional can be left blank.
              </p>
              <EnquiryForm variant="contact" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-beige py-20">
        <div className="container-page">
          <Reveal className="mb-10 max-w-2xl">
            <p className="eyebrow">Find Us</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Our Location</h2>
          </Reveal>
          <Reveal delay={100}>
            <MapEmbed />
          </Reveal>
        </div>
      </section>
    </>
  );
}
