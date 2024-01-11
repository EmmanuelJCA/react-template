import { useRoutes } from 'react-router-dom';

import { ErrorRoutes, MainRoutes } from './routes';

// ----------------------------------------------------------------------

const Router = () => {
  const routes = useRoutes([
    MainRoutes,
    ErrorRoutes,
  ]);

  return routes;
}

export default Router;
