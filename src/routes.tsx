import { type RouteObject } from 'react-router-dom'
import { HomePage } from '@/lazyPages.tsx';
import MainLayout from '@/shared/lib/layouts/MainLayout.tsx';
import RedirectPage from '@/pages/RedirectPage.tsx';
import AuthPage from '@/pages/AuthPage.tsx';
import { AuthPageGuard } from '@/modules/guards/AuthPageGuard.tsx';
import { UserPageGuard } from '@/modules/guards/UserPageGuard.tsx';

export const router: RouteObject[] = [
  {
    path: '/home',
    element: (
      <AuthPageGuard>
        <MainLayout>
          <HomePage/>
        </MainLayout>
      </AuthPageGuard>
    ),
    children: [
      {
        path: 'do',
        element: (
          <AuthPageGuard>
            <MainLayout>
              <HomePage/>
            </MainLayout>
          </AuthPageGuard>
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
      <UserPageGuard>
        <AuthPage/>
      </UserPageGuard>
    )
  }
]
