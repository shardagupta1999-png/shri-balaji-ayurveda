// Central business configuration. Update these values to change details across the whole website.
// Leave a value as an empty string until it is verified; the site shows "to be confirmed" in its place
// and hides the related links (phone, WhatsApp, maps, reviews) until they are filled in.

export const business = {
  name: 'Shri Balaji Ayurveda',
  tagline: 'Ayurveda, Acupressure & Holistic Therapy Centre',
  description:
    'Shri Balaji Ayurveda is a wellness centre offering traditional Ayurveda, acupressure and holistic therapy guidance with personalised, patient-first care.',
  // Public address of the live website, used for canonical links, sitemap and social sharing.
  siteUrl: 'https://your-domain.example',
  // Phone number as it should be displayed, e.g. "+91 98765 43210"
  phone: '9069026274',
  // WhatsApp number with country code and digits only, e.g. "919876543210"
  whatsappNumber: '9069026274',
  email: '',
  address: 'Hari Enclave, Kirari, Delhi 110086',
  openingHours: '10am - 8pm',
  // Embed URL from Google Maps "Share > Embed a map"
  googleMapsEmbedUrl: '',
  // Link to the business on Google Maps
  googleMapsUrl: 'https://maps.app.goo.gl/Qk9EVwBx9HBuZRqT8',
  // Link to the verified Google Business Profile reviews
  googleReviewsUrl: '',
  socialLinks: [
    { label: 'Instagram', url: '' },
    { label: 'Facebook', url: '' },
    { label: 'YouTube', url: '' },
  ],
  whatsappMessage:
    'Hello Shri Balaji Ayurveda, I would like to enquire about your services and appointment availability.',
  medicalDisclaimer:
    'Information on this website is for general informational purposes and is not a substitute for professional medical advice, diagnosis, or treatment. Please consult an appropriately qualified healthcare professional regarding medical concerns.',
  serviceDisclaimer:
    'Services and treatment availability are subject to confirmation and professional assessment. Please contact the centre for details.',
  featuredReview: {
    author: 'Sharda Gupta',
    rating: 5,
    text: 'The staff at the therapy centre is very friendly. I have got my mother\'s back pain and foot pain treatment done and she got relief from it to a great extent. Also they appointed doctors from outside for acupuncture as needed.',
  },
};

export const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Why Choose Us', to: '/#why-choose-us' },
  { label: 'Testimonials', to: '/#testimonials' },
  { label: 'Contact Us', to: '/contact' },
];

export const whatsappLink = (message: string = business.whatsappMessage) =>
  business.whatsappNumber
    ? `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`
    : '';

export const telephoneLink = () =>
  business.phone ? `tel:${business.phone.replace(/[^+\d]/g, '')}` : '';
