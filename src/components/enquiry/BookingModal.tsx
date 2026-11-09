import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { EnquiryForm } from '@/components/enquiry/EnquiryForm';

interface BookingModalProps {
  defaultService?: string;
  onClose: () => void;
}

export function BookingModal({ defaultService, onClose }: BookingModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    dialogRef.current?.querySelector<HTMLElement>('input, select, textarea')?.focus();

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close booking form"
        tabIndex={-1}
        onClick={onClose}
        className="animate-backdrop-in absolute inset-0 bg-brand-charcoal/50 backdrop-blur-[2px]"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="animate-modal-in relative max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-brand-ivory p-6 shadow-card sm:max-w-xl sm:rounded-3xl sm:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-forest transition-colors hover:bg-brand-beige"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <p className="eyebrow">Appointment enquiry</p>
        <h2 id="booking-title" className="mt-3 pr-10 text-3xl">
          Book an Appointment
        </h2>
        <p className="mt-3 text-sm leading-[1.6] text-brand-charcoal/80">
          Share your details and preferred time. Our team will contact you to confirm availability.
        </p>

        <div className="mt-8">
          <EnquiryForm variant="booking" defaultService={defaultService} />
        </div>
      </div>
    </div>
  );
}
