import { lazy } from 'react';

import { NewLeave } from './shared/NewLeave';
import { ViewLeave } from './shared/ViewLeave';
import { ViewDepartmentHeadLeave } from './shared/ViewDepartmentHeadLeave';
import { EditDepartmentHeadLeave } from './shared/EditDepartmentHeadLeave';
import { ViewHrLeave } from './shared/ViewHrLeave';
import { EditHrLeave } from './shared/EditHrLeave';

export const leaveRequestRoutes = [
  {
    path: '/requests/business-trip/new',
    element: <NewLeave />,
  },
  {
    path: '/requests/business-trip/view/:id',
    element: <ViewLeave />,
  },
  {
    path: '/requests/business-trip/view/department-head/',
    element: <ViewDepartmentHeadLeave />,
  },
  {
    path: '/requests/business-trip/edit/department-head',
    element: <EditDepartmentHeadLeave />,
  },
  {
    path: '/requests/business-trip/view/hr',
    element: <ViewHrLeave />,
  },
  {
    path: '/requests/business-trip/edit/hr',
    element: <EditHrLeave />,
  },
];
