import Loadable from '@/shared/lib/hoc/Loadable.tsx';
import { lazy } from 'react';

export const HomePage = Loadable(lazy(async () => await import('./pages/Home.tsx')))
export const EmployeesPage = Loadable(lazy(async () => await import('./pages/EmployeesPage.tsx')))
