import React, { lazy } from 'react';
import { Loadable } from '../../components/Loadable/Loadable';

import { ProfileSettingsPage } from './ProfileSettingsPage';

export const settingsRoutes = [
  {
    path: '/settings/profile',
    element: <ProfileSettingsPage />,
  },
];
