import { useRoutes } from 'react-router-dom';
import { router } from '@/routes.tsx';
import './global.css'

function App() {
  const content = useRoutes(router)
  return (
    <>
      { content }
    </>
  )
}

export default App
