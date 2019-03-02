import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Club = React.lazy(() => import('./components/club/Club'))
const Bow = React.lazy(() => import('./components/bow/Bow'))
const EventOrganizer = React.lazy(() => import('./components/event_organizer/EventOrganizer'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/club', name: 'Club', component: Club },
  { path: '/bow', name: 'Bow', component: Bow },
  { path: '/event_organizer', name: 'Event Organizer', component: EventOrganizer }
];

export default routes;