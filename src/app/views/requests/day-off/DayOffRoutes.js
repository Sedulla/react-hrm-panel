import { lazy } from 'react';

import { DayOffPage } from './DayOffPage';
import { NewDayOff } from './shared/NewDayOff';
import { DayOffView } from './shared/DayOffView';
import { DayOffDepartmentHeadView } from './shared/DayOffDepartmentHeadView';
import { DayOffDepartmentHeadEdit } from './shared/DayOffDepartmentHeadEdit';
import { DayOffHrView } from './shared/DayOffHrView';
import { DayOffHrEdit } from './shared/DayOffHrEdit';

export const dayOffRequestRoutes = [
  {
    path: '/requests/day-off',
    element: <DayOffPage />,
  },
  {
    path: '/requests/day-off/new',
    element: <NewDayOff />,
  },
  {
    path: '/requests/day-off/view/:id',
    element: <DayOffView />,
  },
  {
    path: '/requests/day-off/view/department-head/',
    element: <DayOffDepartmentHeadView />,
  },
  {
    path: '/requests/day-off/edit/department-head',
    element: <DayOffDepartmentHeadEdit />,
  },
  {
    path: '/requests/day-off/view/hr',
    element: <DayOffHrView />,
  },
  {
    path: '/requests/day-off/edit/hr',
    element: <DayOffHrEdit />,
  },
];
