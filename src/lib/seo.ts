import { business } from '@/config/business';

const socialProfiles = business.socialLinks.filter((social) => social.url).map((social) => social.url);

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: business.name,
  description: business.description,
  url: business.siteUrl,
  ...(business.phone ? { telephone: business.phone } : {}),
  ...(business.email ? { email: business.email } : {}),
  ...(business.address ? { address: { '@type': 'PostalAddress', streetAddress: business.address } } : {}),
  ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
};

export const pageSeo = {
  home: {
    title: 'Shri Balaji Ayurveda | Ayurveda & Wellness Centre',
    description:
      'Discover Shri Balaji Ayurveda, a wellness centre focused on traditional wellness practices, personalised attention, and a comfortable visitor experience. Contact us for service enquiries.',
    path: '/',
    jsonLd: localBusinessJsonLd,
  },
  about: {
    title: 'About Us | Shri Balaji Ayurveda',
    description:
      'Learn about Shri Balaji Ayurveda, a traditional Ayurveda and acupressure wellness centre built on individual attention, a supportive team and visitor comfort.',
    path: '/about',
  },
  services: {
    title: 'Our Services | Ayurveda Consultation, Acupressure & Acupuncture | Shri Balaji Ayurveda',
    description:
      'Explore Ayurveda consultation, acupressure therapy, acupuncture coordination and general wellness guidance at Shri Balaji Ayurveda. Send an enquiry to learn more.',
    path: '/services',
  },
  contact: {
    title: 'Contact Us | Shri Balaji Ayurveda',
    description:
      'Contact Shri Balaji Ayurveda to enquire about services, request an appointment or find directions. Send an enquiry online or message us on WhatsApp.',
    path: '/contact',
  },
  notFound: {
    title: 'Page Not Found | Shri Balaji Ayurveda',
    description: 'The page you are looking for could not be found. Return to the Shri Balaji Ayurveda homepage.',
    path: '/',
  },
} as const;
