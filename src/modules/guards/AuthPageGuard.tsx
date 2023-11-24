import { type FC, type PropsWithChildren, useState } from 'react'
import { useLocation, Navigate } from 'react-router'
import { useSelector } from '../store'
import AuthPage from '@/pages/AuthPage.tsx';


export const AuthPageGuard: FC<PropsWithChildren> = ({ children }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector)
  const location = useLocation()
  const [requestedLocation, setRequestedLocation] = useState<string | null>(null)

  if (!isAuthenticated) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname)
    }
    return <AuthPage/>
  }

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} />
  }

  return <>{children}</>
}