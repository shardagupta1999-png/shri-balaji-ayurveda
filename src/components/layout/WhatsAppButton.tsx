import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/config/business';

export function WhatsAppButton() {
  const href = whatsappLink();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shri Balaji Ayurveda on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-brand-forest py-3.5 pl-4 pr-4 text-brand-ivory shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-sage sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs md:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}
