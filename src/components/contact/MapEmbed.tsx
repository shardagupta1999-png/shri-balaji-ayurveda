import { ExternalLink, MapPin } from 'lucide-react';
import { business } from '@/config/business';

export function MapEmbed() {
  if (!business.googleMapsEmbedUrl) {
    return (
      <div className="flex h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-brand-forest/30 bg-brand-beige/60 px-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-ivory text-brand-forest shadow-soft">
          <MapPin className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <p className="mt-5 font-display text-xl text-brand-forest">Map coming soon</p>
        <p className="mt-2 max-w-sm text-sm leading-[1.6] text-brand-charcoal/80">
          Our location map will appear here once the centre's address is confirmed.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <iframe
        src={business.googleMapsEmbedUrl}
        title={`Map showing the location of ${business.name}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full rounded-3xl border-0 shadow-card sm:h-[420px]"
      />
      {business.googleMapsUrl && (
        <a
          href={business.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-forest transition-colors hover:text-brand-sage"
        >
          Open in Google Maps
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
