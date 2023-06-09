import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
};
