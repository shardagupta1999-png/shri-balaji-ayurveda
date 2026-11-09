import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';

type Location = { pathname: string; hash: string };

const LOCATION_EVENT = 'app:locationchange';

function readLocation(): Location {
  return { pathname: normalizePath(window.location.pathname), hash: window.location.hash };
}

export function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/';
}

export function useLocation(): Location {
  const [location, setLocation] = useState<Location>(readLocation);

  useEffect(() => {
    const update = () => setLocation(readLocation());
    window.addEventListener('popstate', update);
    window.addEventListener(LOCATION_EVENT, update);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener(LOCATION_EVENT, update);
    };
  }, []);

  return location;
}

export function navigate(to: string) {
  const url = new URL(to, window.location.origin);
  const next = `${url.pathname}${url.hash}`;
  if (next !== `${window.location.pathname}${window.location.hash}`) {
    window.history.pushState({}, '', next);
    window.dispatchEvent(new Event(LOCATION_EVENT));
  }
}

interface LinkProps {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  'aria-current'?: 'page' | undefined;
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    onClick?.();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
