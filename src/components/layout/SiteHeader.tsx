import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, normalizePath, useLocation } from '@/lib/router';
import { navigationLinks } from '@/config/business';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/enquiry/BookingContext';

function isCurrentPage(to: string, pathname: string) {
  if (to.includes('#')) return false;
  return normalizePath(pathname) === to;
}

export function SiteHeader() {
  const { pathname, hash } = useLocation();
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const headerSurface =
    isScrolled || isMenuOpen
      ? 'bg-brand-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(35,75,56,0.08)]'
      : 'bg-transparent';

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${headerSurface}`}>
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="shrink-0 rounded-xl" aria-label="Shri Balaji Ayurveda, go to home page">
          <BrandLogo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {navigationLinks.map((link) => {
            const current = isCurrentPage(link.to, pathname);
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={current ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-brand-gold after:transition-transform after:duration-300 hover:text-brand-forest hover:after:scale-x-100 ${
                  current ? 'text-brand-forest after:scale-x-100' : 'text-brand-charcoal after:scale-x-0'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button size="sm" className="hidden xl:inline-flex" onClick={() => openBooking()}>
            Book an Appointment
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-forest transition-colors hover:bg-brand-beige xl:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-out xl:hidden ${
          isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 pb-6 pt-2">
            {navigationLinks.map((link) => {
              const current = isCurrentPage(link.to, pathname);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={current ? 'page' : undefined}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-brand-beige hover:text-brand-forest ${
                    current ? 'bg-brand-beige text-brand-forest' : 'text-brand-charcoal'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button className="mt-4 w-full" onClick={() => openBooking()}>
              Book an Appointment
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
