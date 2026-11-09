import { Link } from '@/lib/router';
import { business, navigationLinks, telephoneLink, whatsappLink } from '@/config/business';
import { services } from '@/data/services';
import { BrandLogo } from '@/components/ui/BrandLogo';

const pending = 'To be confirmed';

export function SiteFooter() {
  const year = new Date().getFullYear();
  const phoneHref = telephoneLink();
  const whatsappHref = whatsappLink();

  return (
    <footer className="bg-brand-forest text-brand-ivory/85">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-4">
          <BrandLogo tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-[1.6]">{business.description}</p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-light">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-brand-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-light">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link to={`/services#${service.id}`} className="transition-colors hover:text-brand-gold-light">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-light">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              {phoneHref ? (
                <a href={phoneHref} className="transition-colors hover:text-brand-gold-light">
                  {business.phone}
                </a>
              ) : (
                pending
              )}
            </li>
            <li>
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-gold-light"
                >
                  WhatsApp us
                </a>
              ) : (
                `WhatsApp: ${pending}`
              )}
            </li>
            <li>
              {business.email ? (
                <a href={`mailto:${business.email}`} className="transition-colors hover:text-brand-gold-light">
                  {business.email}
                </a>
              ) : (
                `Email: ${pending}`
              )}
            </li>
            <li>{business.address || `Address: ${pending}`}</li>
            <li>{business.openingHours || `Opening hours: ${pending}`}</li>
            {business.googleMapsUrl && (
              <li>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-gold-light transition-colors hover:text-brand-ivory"
                >
                  Find us on Google Maps
                </a>
              </li>
            )}
          </ul>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {business.socialLinks.map((social) =>
              social.url ? (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-gold-light"
                >
                  {social.label}
                </a>
              ) : (
                <span key={social.label} className="text-brand-ivory/70" title="Link to be added">
                  {social.label}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-brand-ivory/15">
        <div className="container-page flex flex-col gap-4 py-6 text-xs leading-[1.6] text-brand-ivory/70 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} {business.name}. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">{business.medicalDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
