import { lazy } from 'react';

import { NewLeave } from './shared/NewLeave';
import { ViewLeave } from './shared/ViewLeave';
import { ViewDepartmentHeadLeave } from './shared/ViewDepartmentHeadLeave';
import { EditDepartmentHeadLeave } from './shared/EditDepartmentHeadLeave';
import { ViewHrLeave } from './shared/ViewHrLeave';
import { EditHrLeave } from './shared/EditHrLeave';

export const leaveRequestRoutes = [
  {
    path: '/requests/leave/new',
    element: <NewLeave />,
  },
  {
    path: '/requests/leave/view/:id',
    element: <ViewLeave />,
  },
  {
    path: '/requests/leave/view/department-head/',
    element: <ViewDepartmentHeadLeave />,
  },
  {
    path: '/requests/leave/edit/department-head',
    element: <EditDepartmentHeadLeave />,
  },
  {
    path: '/requests/leave/view/hr',
    element: <ViewHrLeave />,
  },
  {
    path: '/requests/leave/edit/hr',
    element: <EditHrLeave />,
  },
];
