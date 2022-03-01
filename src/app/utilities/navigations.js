import { ReactComponent as HomeIcon } from '../assets/nav.home-icon.svg';
import { ReactComponent as CoworkersIcon } from '../assets/nav.colleagues-icon.svg';
import { ReactComponent as AnnouncementIcon } from '../assets/nav.notice-icon.svg';
import { ReactComponent as RequestsIcon } from '../assets/nav.requests-icon.svg';
import { ReactComponent as SettingsIcon } from '../assets/nav.settings-icon.svg';
import { nanoid } from '@reduxjs/toolkit';

export const navigations = [
  {
    id: nanoid(),
    icon: <HomeIcon />,
    title: 'Ana səhifə',
    items: [],
    path: '/homepage',
  },
  {
    id: nanoid(),
    icon: <CoworkersIcon />,
    title: 'Əməkdaşlar',
    items: [],
    path: '/coworkers',
  },
  {
    id: nanoid(),
    icon: <RequestsIcon />,
    title: 'Sorğular',
    path: '/requests',
    items: [
      {
        id: nanoid(),
        title: 'Day off',
        path: '/requests/day-off',
      },
      {
        id: nanoid(),
        title: 'Ezamiyyət',
        path: '/requests/business-trip',
      },
      {
        id: nanoid(),
        title: 'Məzuniyyət',
        path: '/requests/leave',
      },
      {
        id: nanoid(),
        title: 'Qonaq',
        path: '/requests/guest',
      },
      {
        id: nanoid(),
        title: 'IT təchizat',
        path: '/requests/it-supply',
      },
      {
        id: nanoid(),
        title: 'Satınalma',
        path: '/requests/purchase',
      },
    ],
  },
  {
    id: nanoid(),
    icon: <AnnouncementIcon />,
    title: 'Elanlar',
    path: '/announcements',
    items: [
      {
        id: nanoid(),
        title: 'Elan',
        path: '/announcements',
      },
    ],
  },
  {
    id: nanoid(),
    icon: <SettingsIcon />,
    title: 'Parametrlər',
    path: '/settings',
    items: [
      {
        id: nanoid(),
        title: 'İstifadəçilər',
        path: '/settings/users',
      },
      {
        id: nanoid(),
        title: 'İstifadəçi rolları',
        path: '/settings/roles',
      },
    ],
  },
];
