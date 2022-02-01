import React, { lazy } from 'react';
import { Loadable } from '../../components/Loadable/Loadable';

const ProfileSettingsPage = Loadable(lazy(() => import('./ProfileSettingsPage')));
const AccountDetails = Loadable(
  lazy(() => import('./shared/AccountDetails/AccountDetails'))
);
const SecurityAndLogin = Loadable(
  lazy(() => import('./shared/SecurityAndLogin/SecurityAndLogin'))
);

export const settingsRoutes = [
  {
    path: '/settings',
    element: <ProfileSettingsPage />,
  },
  {
    path: '/settings/account',
    element: <AccountDetails />,
  },
  {
    path: '/settings/security',
    element: <SecurityAndLogin />,
  },
];
