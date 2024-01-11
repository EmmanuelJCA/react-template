import { Suspense, lazy } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

import MainLayout from '@/layouts/Main';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('@/pages/Home'));

const MainRoutes: RouteObject =  {
  path: '/',
  element: (
    <MainLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainLayout>
  ),
  children: [
    {
      index: true,
      element: <HomePage />,
    },
  ],
}

export default MainRoutes;
