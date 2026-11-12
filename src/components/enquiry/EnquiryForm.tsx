import { useState, type FormEvent, type ReactNode } from 'react';
import { CheckCircle2, Loader2, MessageCircle } from 'lucide-react';
import { Button, buttonStyles } from '@/components/ui/Button';
import { whatsappLink } from '@/config/business';
import {
  emptyEnquiryValues,
  serviceOptions,
  submitEnquiry,
  timeOptions,
  todayIsoDate,
  validateEnquiry,
  type EnquiryErrors,
  type EnquirySource,
  type EnquiryValues,
} from '@/lib/enquiry';

const MIN_FILL_MS = 3000;

const inputClass = (hasError: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-brand-charcoal placeholder:text-brand-charcoal/50 outline-none transition-colors duration-200 focus:border-brand-sage focus:ring-4 focus:ring-brand-sage/15 ${
    hasError ? 'border-red-700' : 'border-brand-forest/20 hover:border-brand-forest/40'
  }`;

const selectClass = (hasError: boolean) =>
  `${inputClass(hasError)} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23234B38%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-11`;

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}

function Field({ id, label, error, className = '', children }: FieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-brand-charcoal">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-800">
          {error}
        </p>
      )}
    </div>
  );
}

interface EnquiryFormProps {
  variant: EnquirySource;
  defaultService?: string;
}

export function EnquiryForm({ variant, defaultService }: EnquiryFormProps) {
  const [values, setValues] = useState<EnquiryValues>(() => ({
    ...emptyEnquiryValues,
    service: defaultService && serviceOptions.includes(defaultService) ? defaultService : '',
  }));
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [honeypot, setHoneypot] = useState('');
  const [openedAt] = useState(() => Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const isBooking = variant === 'booking';
  const fieldId = (name: keyof EnquiryValues) => `${variant}-${name}`;

  const updateField = (field: keyof EnquiryValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    if (honeypot.trim() !== '') return;
    if (Date.now() - openedAt < MIN_FILL_MS) {
      setSubmitError('Please wait a moment before submitting.');
      return;
    }

    const nextErrors = validateEnquiry(values, variant);
    setErrors(nextErrors);
    setSubmitError(null);

    const firstInvalidField = Object.keys(nextErrors)[0] as keyof EnquiryValues | undefined;
    if (firstInvalidField) {
      document.getElementById(fieldId(firstInvalidField))?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      await submitEnquiry(variant, values);
      setSubmittedName(values.name.trim());
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setValues({ ...emptyEnquiryValues });
    setErrors({});
    setSubmitError(null);
    setSubmittedName(null);
  };

  if (submittedName !== null) {
    return <EnquirySuccess name={submittedName} isBooking={isBooking} onReset={handleReset} />;
  }

  const describedBy = (name: keyof EnquiryValues) => (errors[name] ? `${fieldId(name)}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={fieldId('name')} label="Full name" error={errors.name}>
          <input
            id={fieldId('name')}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(event) => updateField('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field id={fieldId('phone')} label={isBooking ? 'Mobile number' : 'Phone number'} error={errors.phone}>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            value={values.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy('phone')}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>

        {!isBooking && (
          <Field id={fieldId('email')} label="Email address (optional)" error={errors.email}>
            <input
              id={fieldId('email')}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={(event) => updateField('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy('email')}
              className={inputClass(Boolean(errors.email))}
            />
          </Field>
        )}

        <Field id={fieldId('service')} label="Service interested in" error={errors.service} className={isBooking ? 'sm:col-span-2' : ''}>
          <select
            id={fieldId('service')}
            name="service"
            value={values.service}
            onChange={(event) => updateField('service', event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={describedBy('service')}
            className={selectClass(Boolean(errors.service))}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={fieldId('preferredDate')}
          label={isBooking ? 'Preferred date' : 'Preferred appointment date (optional)'}
          error={errors.preferredDate}
        >
          <input
            id={fieldId('preferredDate')}
            name="preferredDate"
            type="date"
            min={todayIsoDate()}
            value={values.preferredDate}
            onChange={(event) => updateField('preferredDate', event.target.value)}
            aria-invalid={Boolean(errors.preferredDate)}
            aria-describedby={describedBy('preferredDate')}
            className={inputClass(Boolean(errors.preferredDate))}
          />
        </Field>

        {isBooking && (
          <Field id={fieldId('preferredTime')} label="Preferred time" error={errors.preferredTime}>
            <select
              id={fieldId('preferredTime')}
              name="preferredTime"
              value={values.preferredTime}
              onChange={(event) => updateField('preferredTime', event.target.value)}
              aria-invalid={Boolean(errors.preferredTime)}
              aria-describedby={describedBy('preferredTime')}
              className={selectClass(Boolean(errors.preferredTime))}
            >
              <option value="">Select a time</option>
              {timeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        )}

        <Field id={fieldId('message')} label="Message (optional)" error={errors.message} className="sm:col-span-2">
          <textarea
            id={fieldId('message')}
            name="message"
            rows={4}
            maxLength={1200}
            placeholder="Tell us a little about what you would like help with"
            value={values.message}
            onChange={(event) => updateField('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy('message')}
            className={`${inputClass(Boolean(errors.message))} resize-y`}
          />
        </Field>
      </div>

      {submitError && (
        <div role="alert" className="rounded-xl border border-red-700/30 bg-red-50 px-4 py-3 text-sm text-red-900">
          {submitError}
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-[1.6] text-brand-charcoal/70">
          Your details are used only to respond to your enquiry.
        </p>
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : isBooking ? (
            'Request Appointment'
          ) : (
            'Send Enquiry'
          )}
        </Button>
      </div>
    </form>
  );
}

function EnquirySuccess({ name, isBooking, onReset }: { name: string; isBooking: boolean; onReset: () => void }) {
  const whatsappHref = whatsappLink();

  return (
    <div role="status" aria-live="polite" className="py-4 text-center">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-beige text-brand-sage">
        <CheckCircle2 className="h-8 w-8" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-2xl">Thank you{name ? `, ${name}` : ''}</h3>
      <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-[1.6] text-brand-charcoal/80">
        Your {isBooking ? 'appointment request' : 'enquiry'} has been received. Our team will contact you to confirm
        availability. This is a request, not a confirmed appointment.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4">
        {whatsappHref && (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles('secondary')}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Message us on WhatsApp
          </a>
        )}
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-semibold text-brand-forest underline underline-offset-4 transition-colors hover:text-brand-sage"
        >
          Send another enquiry
        </button>
      </div>
    </div>
  );
}
