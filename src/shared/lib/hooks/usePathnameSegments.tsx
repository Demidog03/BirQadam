import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const usePathnameSegments = (): string[] => {
  const { pathname } = useLocation();
  return useMemo(() => pathname.split('/').slice(1), [pathname]);
};

export default usePathnameSegments;