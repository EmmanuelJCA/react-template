import { useRoutes } from 'react-router-dom';

import { AuthRoutes } from './routes';

// ----------------------------------------------------------------------

const Router = () => {
  const routes = useRoutes([
    AuthRoutes,
  ]);

  return routes;
};

export default Router;
