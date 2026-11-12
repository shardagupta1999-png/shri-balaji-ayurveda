import { supabase } from '@/lib/supabase';
import { serviceTitles } from '@/data/services';

export type EnquirySource = 'booking' | 'contact';

export interface EnquiryValues {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

export const emptyEnquiryValues: EnquiryValues = {
  name: '',
  phone: '',
  email: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

export const serviceOptions = [...serviceTitles, 'General enquiry'];

export const timeOptions = [
  'Morning',
  'Afternoon',
  'Evening',
  'Flexible / any time',
];

const NAME_PATTERN = /^[\p{L}][\p{L}\s.'-]*$/u;
const PHONE_PATTERN = /^\+?[0-9][0-9\s-]*$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function todayIsoDate() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

export function validateEnquiry(values: EnquiryValues, source: EnquirySource): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const name = values.name.trim();
  const phoneDigits = values.phone.replace(/\D/g, '');
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  } else if (name.length > 80 || !NAME_PATTERN.test(name)) {
    errors.name = 'Please use letters only for your name.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter your mobile number.';
  } else if (!PHONE_PATTERN.test(values.phone.trim()) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = 'Please enter a valid mobile number with 7 to 15 digits.';
  }

  if (source === 'contact' && email && (email.length > 120 || !EMAIL_PATTERN.test(email))) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.service || !serviceOptions.includes(values.service)) {
    errors.service = 'Please choose a service.';
  }

  if (source === 'booking') {
    if (!values.preferredDate) {
      errors.preferredDate = 'Please choose a preferred date.';
    } else if (values.preferredDate < todayIsoDate()) {
      errors.preferredDate = 'Please choose today or a future date.';
    }

    if (!values.preferredTime || !timeOptions.includes(values.preferredTime)) {
      errors.preferredTime = 'Please choose a preferred time.';
    }
  } else if (values.preferredDate && values.preferredDate < todayIsoDate()) {
    errors.preferredDate = 'Please choose today or a future date.';
  }

  if (message.length > 1000) {
    errors.message = 'Please keep your message under 1000 characters.';
  }

  return errors;
}

export async function submitEnquiry(source: EnquirySource, values: EnquiryValues) {
  if (!supabase) {
    throw new Error('Enquiry submissions are unavailable until valid VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY values are configured.');
  }

  const { error } = await supabase.from('enquiries').insert({
    source,
    name: values.name.trim(),
    phone: values.phone.trim(),
    email: values.email.trim() || null,
    service: values.service,
    preferred_date: values.preferredDate || null,
    preferred_time: values.preferredTime || null,
    message: values.message.trim() || null,
  });

  if (error) {
    throw new Error('We could not send your enquiry right now. Please try again or contact us directly.');
  }
}
