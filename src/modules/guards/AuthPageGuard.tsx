import { type FC, type PropsWithChildren, useState } from 'react'
import { useLocation, Navigate } from 'react-router'
import { profileSelector } from '@/modules/profile/model/profile.slice.ts';
import { useSelector } from '@/store';
import { LoginPage } from '@/lazyPages.tsx';


export const AuthPageGuard: FC<PropsWithChildren> = ({ children }) => {
  const profile = useSelector(profileSelector)
  const location = useLocation()
  const [requestedLocation, setRequestedLocation] = useState<string | null>(null)

  if (!profile) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname)
    }
    return <LoginPage/>
  }
  if (profile.company === null) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname)
    }
    return <Navigate to="/createCompany" />
  }

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} />
  }

  return <>{children}</>
}