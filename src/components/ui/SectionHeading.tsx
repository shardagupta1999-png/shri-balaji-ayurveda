import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'center' | 'left';
  as?: 'h1' | 'h2';
}

export function SectionHeading({ eyebrow, title, description, align = 'center', as: Heading = 'h2' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="eyebrow flex items-center gap-3 data-[align=center]:justify-center" data-align={align}>
          <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
          {eyebrow}
          <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
        </p>
      )}
      <Heading className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]">{title}</Heading>
      {description && <p className="mt-5 text-base leading-[1.5] text-brand-charcoal/80 sm:text-lg">{description}</p>}
    </div>
  );
}
