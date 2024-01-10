import { Suspense } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

// ----------------------------------------------------------------------

const AuthRoutes: RouteObject =  {
  path: 'auth',
  element: (
    <Suspense>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: 'signin',
      element: <>SignIn Page</>,
    },
    {
      path: 'signup',
      element: <>SignUp Page</>,
    },
  ],
};

export default AuthRoutes;
