import type { LucideIcon } from 'lucide-react';
import { Flower2, Hand, HeartPulse, Leaf, Sprout, Stethoscope } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  summary: string;
  description: string;
  expectations: string[];
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  // Set to true once the owner has confirmed this service is offered. Until then the site shows a "subject to confirmation" note.
  availabilityConfirmed: boolean;
}

export const services: Service[] = [
  {
    id: 'ayurvedic-consultation',
    title: 'Ayurvedic Consultation',
    summary: 'A personal conversation about your concerns, daily routine and wellness goals.',
    description:
      'Begin with an unhurried discussion of your health history, lifestyle and what you hope to feel better about. Guidance is shared in the spirit of traditional Ayurvedic thinking and tailored to you.',
    expectations: [
      'A welcoming, unhurried conversation',
      'Questions about lifestyle, routine and diet',
      'Gentle guidance on next steps, including referral when needed',
    ],
    image: 'https://images.pexels.com/photos/5480036/pexels-photo-5480036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Herbal ingredients being prepared in a stone mortar and pestle',
    icon: Leaf,
    availabilityConfirmed: false,
  },
  {
    id: 'acupressure-therapy',
    title: 'Acupressure Therapy',
    summary: 'Pressure-based therapy on traditional points to support relaxation and comfort.',
    description:
      'Acupressure applies firm, gentle pressure to specific points on the body. Sessions are calm and comfortable, and your practitioner checks how you are feeling throughout.',
    expectations: [
      'A calm, comfortable treatment environment',
      'Pressure adjusted to your comfort level',
      'Advice on aftercare and follow-up visits',
    ],
    image: 'https://images.pexels.com/photos/11170468/pexels-photo-11170468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Hands using a massage tool for acupressure therapy',
    icon: Hand,
    availabilityConfirmed: false,
  },
  {
    id: 'acupuncture',
    title: 'Acupuncture',
    summary: 'Acupuncture by specialist practitioners, arranged by the centre when required.',
    description:
      'The centre arranges external acupuncture practitioners when required. Suitability is assessed by the practitioner before any treatment begins.',
    expectations: [
      'Coordination with specialist practitioners',
      'Professional assessment before treatment',
      'Clear information on what to expect',
    ],
    image: 'https://images.pexels.com/photos/8313243/pexels-photo-8313243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A close view of an acupuncture session',
    icon: Sprout,
    availabilityConfirmed: false,
  },
  {
    id: 'back-pain-support',
    title: 'Back Pain Wellness Support',
    summary: 'Supportive sessions for everyday back discomfort, with a personalised approach.',
    description:
      'Every visitor receives an individual discussion of their discomfort. Where suitable, hands-on sessions are combined with practical advice on posture and daily habits.',
    expectations: [
      'An individual discussion of your discomfort',
      'Hands-on sessions where suitable',
      'Practical guidance on posture and daily habits',
    ],
    image: 'https://images.pexels.com/photos/7235065/pexels-photo-7235065.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Hands gently massaging a person\'s back',
    icon: HeartPulse,
    availabilityConfirmed: false,
  },
  {
    id: 'foot-pain-support',
    title: 'Foot Pain Wellness Support',
    summary: 'Comfort-focused sessions for tired or uncomfortable feet and legs.',
    description:
      'Sessions are designed around how you feel. Your practitioner discusses your concerns first, then suggests a gentle approach and simple self-care steps you can follow at home.',
    expectations: [
      'A relaxed, spa-like treatment setting',
      'Discussion of your concerns before any session',
      'Simple self-care suggestions for home',
    ],
    image: 'https://images.pexels.com/photos/19695971/pexels-photo-19695971.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A relaxing foot massage in a spa setting',
    icon: Flower2,
    availabilityConfirmed: false,
  },
  {
    id: 'general-wellness-guidance',
    title: 'General Wellness Guidance',
    summary: 'Lifestyle, diet and routine guidance for overall well-being.',
    description:
      'For those who want a broader view of their well-being, we offer guidance on lifestyle, nutrition and daily routine, shared in a friendly and unhurried way.',
    expectations: [
      'A friendly, unhurried discussion',
      'Lifestyle and nutrition pointers',
      'Support in building a sustainable routine',
    ],
    image: 'https://images.pexels.com/photos/6978215/pexels-photo-6978215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Dried herbs, spices and rustic utensils on a dark surface',
    icon: Stethoscope,
    availabilityConfirmed: false,
  },
];

export const serviceTitles = services.map((service) => service.title);
