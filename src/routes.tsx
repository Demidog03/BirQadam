import { type RouteObject } from 'react-router-dom';
import {
  CompanySettingsPage,
  CreateCompanyPage,
  EmployeesPage,
  HomePage,
  LoginPage,
  RegisterPage,
  TeamsPage,
} from '@/lazyPages.tsx';
import MainLayout from '@/shared/lib/layouts/MainLayout.tsx';
import RedirectPage from '@/pages/RedirectPage.tsx';
import { AuthPageGuard } from '@/modules/guards/AuthPageGuard.tsx';
import { UserPageGuard } from '@/modules/guards/UserPageGuard.tsx';
import ProfilePage from '@/pages/ProfilePage.tsx';

export const router: RouteObject[] = [
  {
    path: '/home',
    element: (
      <AuthPageGuard>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </AuthPageGuard>
    ),
  },
  {
    path: '/',
    element: <RedirectPage path='/home' />,
  },
  {
    path: '/login',
    element: (
      <UserPageGuard>
        <LoginPage />
      </UserPageGuard>
    ),
  },
  {
    path: '/register',
    element: (
      <UserPageGuard>
        <RegisterPage />
      </UserPageGuard>
    ),
  },
  {
    path: '/createCompany',
    element: (
      <AuthPageGuard>
        <CreateCompanyPage />
      </AuthPageGuard>
    ),
  },
  {
    path: '/company',
    element: (
      <AuthPageGuard>
        <MainLayout>
          <CompanySettingsPage />
        </MainLayout>
      </AuthPageGuard>
    ),
  },
  {
    path: '/profile',
    element: (
      <AuthPageGuard>
        <MainLayout>
          <ProfilePage />
        </MainLayout>
      </AuthPageGuard>
    ),
  },
  {
    path: '/employees',
    element: (
      <AuthPageGuard>
        <MainLayout>
          <EmployeesPage/>
        </MainLayout>
      </AuthPageGuard>
    )
  },
  {
    path: '/teams',
    element: (
      <AuthPageGuard>
        <MainLayout>
          <TeamsPage/>
        </MainLayout>
      </AuthPageGuard>
    ),
  },
  {
    path: '/courses',
    element: (
      <AuthPageGuard>
        <MainLayout>
          <h1>Courses</h1>
        </MainLayout>
      </AuthPageGuard>
    ),
  },
  {
    path: '/updateCompany',
    element: (
      <AuthPageGuard>
        <CompanySettingsPage/>
      </AuthPageGuard>
    ),
  },
]
