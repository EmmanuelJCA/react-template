import { useRoutes } from 'react-router-dom';

import { AuthRoutes, ErrorRoutes, MainRoutes } from './routes';

// ----------------------------------------------------------------------

const Router = () => {
  const routes = useRoutes([
    AuthRoutes,
    MainRoutes,
    ErrorRoutes,
  ]);

  return routes;
}

export default Router;
