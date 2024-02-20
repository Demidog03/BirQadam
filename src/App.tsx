import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './global.css'
import CompanySettingsPage from './pages/CompanySettingsPage';

/*import { useNavigate, useRoutes } from 'react-router-dom';
import { router } from '@/routes.tsx';
import { useEffectOnce, useUpdateEffect } from 'usehooks-ts';
import { Token } from '@/modules/auth/model/auth.types.ts';
import { useDispatch } from 'react-redux';
import { authorize, tokenSelector } from '@/modules/auth/model/auth.slice.ts';
import { useSelector } from '@/store';
import { fetchProfile } from '@/modules/profile/model/profile.slice.ts';*/

function App() {
  /*const content = useRoutes(router)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const tokens = useSelector(tokenSelector)

  useEffectOnce(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const tokenObject: {token: Token} | null = JSON.parse(token)
      if(tokenObject?.token.accessToken && tokenObject.token.refreshToken) {
        dispatch(authorize({
          refreshToken: tokenObject.token.refreshToken,
          accessToken: tokenObject.token.accessToken
        }))
      }
    }
    else {
      navigate('/login')
    }
  })
  
  useUpdateEffect(() => {
    if(tokens?.accessToken) {
      dispatch(fetchProfile())
    }
  }, [tokens])*/
  
  return (
    <>
      <CompanySettingsPage />
      
    </>
  )
}

export default App
