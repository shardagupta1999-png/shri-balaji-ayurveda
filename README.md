# Shri Balaji Ayurveda Website

A premium, mobile-responsive website for Shri Balaji Ayurveda, an Ayurveda, acupressure and holistic therapy centre. It presents the centre's services, shares genuine visitor feedback, and lets visitors send appointment enquiries and contact requests.

## Pages

- **Home** (`/`): hero, introduction, services preview, "Why Choose Us", testimonial, and appointment call-to-action.
- **About Us** (`/about`): the centre's approach to traditional wellness, individual attention, and visitor comfort.
- **Our Services** (`/services`): detailed service listings with what to expect, an enquiry button for each, and the service disclaimer.
- **Contact Us** (`/contact`): business contact details, the enquiry form, and a map section.
- **Page not found**: shown for any unknown address.

Navigation, the floating WhatsApp button, and the footer appear on every page. The "Book an Appointment" button opens a booking form in a popup from anywhere on the site.

## Updating Business Details

All business information is kept in one file:

`src/config/business.ts`

Edit the values there to change:

- Phone number, WhatsApp number (digits with country code only), and email address
- Address and opening hours
- Google Maps embed link and place link
- Google reviews link
- Social media links
- Website address (`siteUrl`)

Leave a value empty until it is verified. The site then shows "To be confirmed" and hides the related link, so no broken links appear. The WhatsApp button appears only once a WhatsApp number is set.

### Services

Service names, descriptions, images, and "what to expect" lists are in `src/data/services.ts`. Each service shows a "Subject to confirmation" label until you set `availabilityConfirmed` to `true`.

### Google Review

The featured review is stored in the `featuredReview` section of `src/config/business.ts`. Only verified reviews should be placed there.

## Appointment and Contact Enquiries

- Both the booking popup and the contact form save submissions to a table called `enquiries` in the Supabase database.
- Each enquiry records whether it came from the booking popup or the contact page, along with the visitor's details and preferred date and time.
- Visitors can submit but cannot read any enquiries. Read submissions from the Supabase dashboard.
- Spam protection: a hidden field that catches automated form fills, a minimum time before submission, and database-level length and format checks.
- Form validation checks name, mobile number, email (optional on the contact form), service, date and time (required for bookings), and message length.

Submitted enquiries are requests only. The site states that the centre will contact the visitor to confirm availability.

## SEO

- Page titles, meta descriptions, Open Graph tags, and canonical links are set per page.
- `LocalBusiness` structured data is added to the homepage. It includes only details that have been filled in.
- `public/sitemap.xml` and `public/robots.txt` are provided.

Before publishing, replace the placeholder domain (`your-domain.example`) in these three places:

- `src/config/business.ts` (`siteUrl`)
- `public/sitemap.xml`
- `public/robots.txt`

## Development

Built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons.

Common commands:

- `npm run build`: create a production build in the `dist` folder
- `npm run typecheck`: check TypeScript types
- `npm run lint`: run the code linter

Fonts are loaded from Google Fonts (Playfair Display for headings, Inter for body text). Photographs are sourced from Pexels.

## Medical Disclaimer

The website states that its information is general and does not replace professional medical advice, diagnosis, or treatment. Visitors are encouraged to consult a qualified healthcare professional about medical concerns. The site makes no claims about cures, guaranteed results, qualifications, or certifications, and these should not be added without verification.
