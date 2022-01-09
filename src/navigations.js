import { ReactComponent as HomeIcon } from './assets/nav.home-icon.svg';
import { ReactComponent as ColleaguesIcon } from './assets/nav.colleagues-icon.svg';
import { ReactComponent as NoticeIcon } from './assets/nav.notice-icon.svg';
import { ReactComponent as RequestsIcon } from './assets/nav.requests-icon.svg';
import { ReactComponent as SettingsIcon } from './assets/nav.settings-icon.svg';
import { v4 as uuidv4 } from 'uuid';

export const navigations = [
  {
    id: uuidv4(),
    icon: <HomeIcon />,
    title: 'Ana səhifə',
    items: [],
    path: '/',
  },
  {
    id: uuidv4(),
    icon: <ColleaguesIcon />,
    title: 'Əməkdaşlar',
    items: [],
    path: '/',
  },
  {
    id: uuidv4(),
    icon: <NoticeIcon />,
    title: 'Sorğular',
    items: [
      {
        id: uuidv4(),
        title: 'Day off',
      },
      {
        id: uuidv4(),
        title: 'Ezamiyyət',
      },
      {
        id: uuidv4(),
        title: 'Məzuniyyət',
      },
      {
        id: uuidv4(),
        title: 'Qonaq',
      },
      {
        id: uuidv4(),
        title: 'IT təchizat',
      },
      {
        id: uuidv4(),
        title: 'Satınalma',
      },
    ],
    path: '/',
  },
  {
    id: uuidv4(),
    icon: <RequestsIcon />,
    title: 'Elanlar',
    items: [
      {
        id: uuidv4(),
        title: 'Elan',
      },
    ],
    path: '/',
  },
  {
    id: uuidv4(),
    icon: <SettingsIcon />,
    title: 'Parametrlər',
    items: [
      {
        id: uuidv4(),
        title: 'İstifadəçilər',
      },
      {
        id: uuidv4(),
        title: 'İstifadəçi rolları',
      },
    ],
    path: '/',
  },
];
