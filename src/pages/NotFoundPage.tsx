import { Link } from '@/lib/router';
import { buttonStyles } from '@/components/ui/Button';
import { useDocumentMeta } from '@/lib/useDocumentMeta';
import { pageSeo } from '@/lib/seo';

export function NotFoundPage() {
  useDocumentMeta(pageSeo.notFound);

  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">Page not found</h1>
      <p className="mt-5 max-w-md text-base leading-[1.6] text-brand-charcoal/80">
        The page you are looking for may have moved. Return to the homepage to continue exploring.
      </p>
      <Link to="/" className={buttonStyles('primary', 'md', 'mt-10')}>
        Back to Home
      </Link>
    </section>
  );
}
