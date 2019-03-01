import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Club = React.lazy(() => import('./components/Club/Club'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/club', name: 'Club', component: Club },
];

export default routes;
