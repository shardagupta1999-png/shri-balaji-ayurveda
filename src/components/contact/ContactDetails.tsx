import { Clock, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { business, telephoneLink, whatsappLink } from '@/config/business';

const PENDING = 'To be confirmed';

interface DetailRowProps {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}

function DetailRow({ icon: Icon, label, children }: DetailRowProps) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-beige text-brand-forest">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-sage">{label}</p>
        <div className="mt-1 text-[0.95rem] leading-[1.6] text-brand-charcoal">{children}</div>
      </div>
    </li>
  );
}

const linkClass = 'font-medium text-brand-forest underline-offset-4 transition-colors hover:text-brand-sage hover:underline';

export function ContactDetails() {
  const phoneHref = telephoneLink();
  const whatsappHref = whatsappLink();

  return (
    <ul className="space-y-7">
      <DetailRow icon={Phone} label="Phone">
        {phoneHref ? <a href={phoneHref} className={linkClass}>{business.phone}</a> : PENDING}
      </DetailRow>
      <DetailRow icon={MessageCircle} label="WhatsApp">
        {whatsappHref ? (
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Start a chat on WhatsApp
          </a>
        ) : (
          PENDING
        )}
      </DetailRow>
      <DetailRow icon={Mail} label="Email">
        {business.email ? <a href={`mailto:${business.email}`} className={linkClass}>{business.email}</a> : PENDING}
      </DetailRow>
      <DetailRow icon={MapPin} label="Address">
        {business.address || PENDING}
      </DetailRow>
      <DetailRow icon={Clock} label="Opening hours">
        {business.openingHours || PENDING}
      </DetailRow>
    </ul>
  );
}
