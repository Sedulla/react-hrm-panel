import { lazy } from 'react';

import { NewLeave } from './share/NewLeave';
import { ViewLeave } from './share/ViewLeave';
import { ViewDepartmentHeadLeave } from './share/ViewDepartmentHeadLeave';
import { EditDepartmentHeadLeave } from './share/EditDepartmentHeadLeave';
import { ViewHrLeave } from './share/ViewHrLeave';
import { EditHrLeave } from './share/EditHrLeave';

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
