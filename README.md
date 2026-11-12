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

### Supabase Configuration

Set `VITE_SUPABASE_URL` to the project's HTTP or HTTPS URL and `VITE_SUPABASE_ANON_KEY` to its anon/publishable key. For local development, put these values in `.env.local`. In Vercel, add both names under **Project Settings → Environment Variables** for each environment you deploy, then rebuild and redeploy.

These `VITE_` variables are included in browser code, so only use the client-safe anon/publishable key. Never add a service-role/secret key to this frontend app or to any `VITE_` variable. If a server-side function is added later, keep its service-role key in a server-only environment variable and never send it to the browser.

Before accepting enquiries, apply `supabase/migrations/20261109060902_create_enquiries_table.sql` to the project from **Supabase Dashboard → SQL Editor**. This creates the `public.enquiries` table and its insert-only row-level security policy. If the table already existed before that migration, also apply `supabase/migrations/20261112200000_add_enquiry_source.sql`; it adds the missing `source` field and reloads the API schema cache. A `PGRST205` error means the table is not available in the API schema cache; `PGRST204` means a submitted field is missing from that schema. Confirm migrations ran against the same project as `VITE_SUPABASE_URL`.

To check the setup, restart `npm run dev`, open the site, and submit a test enquiry. A successful submission appears in the Supabase dashboard under **Table Editor → enquiries**. The app intentionally has no read access to that table, so confirm submissions in the dashboard rather than exposing a service-role key for a read test.

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
