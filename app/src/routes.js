import React, {
  Suspense,
  Fragment,
  lazy
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import DefaultLayout from './layouts/default';

export const renderRoutes = (routes = []) => (
  <Suspense>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: lazy(() => import('./views/'))
      }
    ]
  }
];

export default routes;
