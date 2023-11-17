import Loadable from '@/shared/lib/hoc/Loadable.tsx';
import { lazy } from 'react';

export const HomePage = Loadable(lazy(async () => await import('./shared/lib/layouts/MainLayout.tsx')))
