import { type FC, type PropsWithChildren, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import AuthPage from '@/pages/AuthPage.tsx';
import { profileSelector } from '@/modules/profile/model/profile.slice.ts';
import { useSelector } from '@/store';

export const AuthPageGuard: FC<PropsWithChildren> = ({ children }) => {
  const profile = useSelector(profileSelector);
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  if (!profile) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }
    return <AuthPage />;
  }

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};
