import { Leaf } from 'lucide-react';

interface BrandLogoProps {
  tone?: 'dark' | 'light';
}

export function BrandLogo({ tone = 'dark' }: BrandLogoProps) {
  const nameColor = tone === 'dark' ? 'text-brand-forest' : 'text-brand-ivory';
  const subtitleColor = tone === 'dark' ? 'text-brand-sage' : 'text-brand-gold-light';

  return (
    <span className="flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-forest text-brand-gold-light shadow-soft">
        <Leaf className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className={`font-display text-lg leading-tight sm:text-xl ${nameColor}`}>
        Shri Balaji{' '}
        <span className={`block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.25em] ${subtitleColor}`}>
          Ayurveda
        </span>
      </span>
    </span>
  );
}
