import { useEffect, type ComponentType } from 'react';
import { useLocation } from '@/lib/router';
import { BookingProvider } from '@/components/enquiry/BookingContext';
import { PageLayout } from '@/components/layout/PageLayout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

const pages: Record<string, ComponentType> = {
  '/': HomePage,
  '/about': AboutPage,
  '/services': ServicesPage,
  '/contact': ContactPage,
};

function App() {
  const { pathname, hash } = useLocation();
  const Page = pages[pathname] ?? NotFoundPage;

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  return (
    <BookingProvider>
      <PageLayout>
        <div key={pathname} className="animate-page-in">
          <Page />
        </div>
      </PageLayout>
    </BookingProvider>
  );
}

export default App;
