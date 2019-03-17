import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard'))
const Club = React.lazy(() => import('./components/club/Club'))
const Bow = React.lazy(() => import('./components/bow/Bow'))
const Arrow = React.lazy(() => import('./components/arrow/Arrow'))
const EventOrganizer = React.lazy(() => import('./components/event_organizer/EventOrganizer'))
const User = React.lazy(() => import('./components/user/User'))
const Role = React.lazy(() => import('./components/role/Role'))
const Tournament = React.lazy(() => import('./components/tournament/Tournament'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/tournament', name: 'Tournament', component: Tournament },
  { path: '/data-master/club', name: 'Club', component: Club },
  { path: '/data-master/bow', name: 'Bow', component: Bow },
  { path: '/data-master/arrow', name: 'Arrow', component: Arrow },
  { path: '/data-master/event_organizer', name: 'Event Organizer', component: EventOrganizer },
  { path: '/user', name: 'User', component: User },
  { path: '/role', name: 'Role', component: Role },
];

export default routes;