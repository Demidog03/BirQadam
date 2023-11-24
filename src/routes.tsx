import { type RouteObject } from 'react-router-dom'
import { HomePage } from '@/lazyPages.tsx';
import MainLayout from '@/shared/lib/layouts/MainLayout.tsx';
import RedirectPage from '@/pages/RedirectPage.tsx';
import AuthPage from '@/pages/AuthPage.tsx';

export const router: RouteObject[] = [
  {
    path: '/home',
    element: (
      <MainLayout>
        <HomePage/>
      </MainLayout>
    ),
    children: [
      {
        path: 'do',
        element: (
          <MainLayout>
            <HomePage/>
          </MainLayout>
        ),
      }
    ]
  },
  {
    path: '/',
    element: (
      <RedirectPage path="/home"/>
    )
  },
  {
    path: '/login',
    element: (
      <AuthPage/>
    )
  }
]
