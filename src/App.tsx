import { useNavigate, useRoutes } from 'react-router-dom';
import { router } from '@/routes.tsx';
import './global.css'
import { useEffectOnce } from 'usehooks-ts';

function App() {
  const content = useRoutes(router)
  const navigate = useNavigate()

  useEffectOnce(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {

    }
    else {
      navigate('/login')
    }
  })
  
  return (
    <>
      { content }
    </>
  )
}

export default App
