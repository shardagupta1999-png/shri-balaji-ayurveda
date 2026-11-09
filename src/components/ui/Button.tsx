import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'light';
type ButtonSize = 'md' | 'sm';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-forest text-brand-ivory shadow-soft hover:bg-brand-sage',
  secondary:
    'border border-brand-forest/30 bg-transparent text-brand-forest hover:border-brand-forest hover:bg-brand-forest hover:text-brand-ivory',
  light: 'bg-brand-ivory text-brand-forest shadow-soft hover:bg-brand-gold-light',
};

const sizeStyles: Record<ButtonSize, string> = {
  md: 'px-7 py-3.5 text-sm',
  sm: 'px-5 py-2.5 text-sm',
};

export function buttonStyles(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', className = '') {
  return [baseStyles, variantStyles[variant], sizeStyles[size], className].filter(Boolean).join(' ');
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ variant, size, className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles(variant, size, className)} {...props} />;
}
