export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Tournament',
      url:'/tournament',
      icon:'icon-shield'
    },
    {
      name: 'Data Master',
      icon: 'icon-pie-chart',
      children: [
        {
          name: 'Club',
          url: '/data-master/club',
          icon: 'icon-shield'
        },
        {
          name: 'Bow',
          url: '/data-master/bow',
          icon: 'icon-shield'
        },
        {
          name: 'Arrow',
          url: '/data-master/arrow',
          icon: 'icon-shield'
        },
        {
          name: 'Event Organizer',
          url: '/data-master/event_organizer',
          icon: 'icon-shield'
        }
      ]
    },
    {
      name: 'User',
      url: '/user',
      icon: 'icon-user'      
    },
    {
      name: 'Role',
      url: '/role',
      icon: 'icon-user'      
    },
  ]
};