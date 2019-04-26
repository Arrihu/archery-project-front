import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard'))
const Club = React.lazy(() => import('./app/Club/Club'))
const Bow = React.lazy(() => import('./app/Bow/Bow'))
const Arrow = React.lazy(() => import('./app/Arrow/Arrow'))
const EventOrganizer = React.lazy(() => import('./app/EventOrganizer/EventOrganizer'))
const User = React.lazy(() => import('./app/User/User'))
const Role = React.lazy(() => import('./app/Role/Role'))
const Tournament = React.lazy(() => import('./app/Tournament/Tournament'))
const Target = React.lazy(() => import('./app/Target/Target'))
const Archer = React.lazy(() => import('./app/Archer/Archer'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/tournament', name: 'Tournament', component: Tournament },
  { path: '/user', name: 'User', component: User },
  { path: '/role', name: 'Role', component: Role },
  { path: '/data-master/club', name: 'Club', component: Club },
  { path: '/data-master/bow', name: 'Bow', component: Bow },
  { path: '/data-master/arrow', name: 'Arrow', component: Arrow },
  { path: '/data-master/target', name: 'Target', component: Target },
  { path: '/data-master/event_organizer', name: 'Event Organizer', component: EventOrganizer },
  { path: '/data-master/archer', name: 'Archer', component: Archer },
];

export default routes;