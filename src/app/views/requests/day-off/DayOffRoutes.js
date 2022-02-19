import { lazy } from 'react';

import { DayOffPage } from './DayOffPage';
import { AddDayOff } from './shared/AddDayOff';
import { ViewDayOff } from './shared/ViewDayOff';
import { ViewDepartmentHeadDayOff } from './shared/ViewDepartmentHeadDayOff';
import { EditDepartmentHeadDayOff } from './shared/EditDepartmentHeadDayOff';
import { ViewHrDayOff } from './shared/ViewHrDayOff';
import { EditHrDayOff } from './shared/EditHrDayOff';

export const dayOffRequestRoutes = [
  {
    path: '/requests/day-off',
    element: <DayOffPage />,
  },
  {
    path: '/requests/day-off/add',
    element: <AddDayOff />,
  },
  {
    path: '/requests/day-off/view/:id',
    element: <ViewDayOff />,
  },
  {
    path: '/requests/day-off/view/department-head/',
    element: <ViewDepartmentHeadDayOff />,
  },
  {
    path: '/requests/day-off/edit/department-head',
    element: <EditDepartmentHeadDayOff />,
  },
  {
    path: '/requests/day-off/view/hr',
    element: <ViewHrDayOff />,
  },
  {
    path: '/requests/day-off/edit/hr',
    element: <EditHrDayOff />,
  },
];
