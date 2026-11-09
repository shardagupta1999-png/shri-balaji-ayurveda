import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { BookingModal } from '@/components/enquiry/BookingModal';

interface BookingContextValue {
  openBooking: (options?: { service?: string }) => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [booking, setBooking] = useState<{ isOpen: boolean; service?: string }>({ isOpen: false });

  const openBooking = useCallback((options?: { service?: string }) => {
    setBooking({ isOpen: true, service: options?.service });
  }, []);

  const closeBooking = useCallback(() => {
    setBooking((current) => ({ ...current, isOpen: false }));
  }, []);

  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {booking.isOpen && <BookingModal defaultService={booking.service} onClose={closeBooking} />}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within BookingProvider');
  return context;
}
