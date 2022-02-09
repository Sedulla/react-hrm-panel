import React, { lazy } from 'react';
import { Loadable } from '../../components/Loadable/Loadable';

import { ProfileSettingsPage } from './ProfileSettingsPage';
import { AccountDetails } from './shared/AccountDetails/AccountDetails';
import { SecurityAndLogin } from './shared/SecurityAndLogin/SecurityAndLogin';

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
