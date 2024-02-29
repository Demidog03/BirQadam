import { type FC, type PropsWithChildren, useState } from 'react'
import { useLocation, Navigate } from 'react-router'
import { profileSelector } from '@/modules/profile/model/profile.slice.ts';
import { useSelector } from '@/store';
import { CreateCompanyPage, LoginPage } from '@/lazyPages.tsx';
import { companySelector } from '@/modules/company/model/company.slice.ts';

export const AuthPageGuard: FC<PropsWithChildren> = ({ children }) => {
  const profile = useSelector(profileSelector)
  const company = useSelector(companySelector)
  const location = useLocation()
  const [requestedLocation, setRequestedLocation] = useState<string | null>(null)

  if (!profile) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname)
    }
    return <LoginPage/>
  }
  if (!company) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname)
    }
    return <CreateCompanyPage/>
  }

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} />
  }

  return <>{children}</>
}