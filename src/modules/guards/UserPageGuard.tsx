import { type FC, type PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from '@/store';
import { profileSelector } from '@/modules/profile/model/profile.slice.ts';

export const UserPageGuard: FC<PropsWithChildren> = ({ children }) => {
  const profile = useSelector(profileSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (profile) {
      navigate('/');
    }
  }, [navigate, profile]);

  if (!profile) {
    return <>{children}</>;
  }
};
