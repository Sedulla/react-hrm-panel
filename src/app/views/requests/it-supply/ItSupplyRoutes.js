import { lazy } from 'react';

import { NewItSupply } from './shared/NewItSupply';
import { ViewItSupply } from './shared/ViewItSupply';
import { ViewDepartmentHeadItSupply } from './shared/ViewDepartmentHeadItSupply';
import { EditDepartmentHeadItSupply } from './shared/EditDepartmentHeadItSupply';
import { ViewITItSupply } from './shared/ViewITItSupply';
import { EditITItSupply } from './shared/EditITItSupply';

export const itSupplyRequestRoutes = [
  {
    path: '/requests/business-trip/new',
    element: <NewItSupply />,
  },
  {
    path: '/requests/business-trip/view/:id',
    element: <ViewItSupply />,
  },
  {
    path: '/requests/business-trip/view/department-head/',
    element: <ViewDepartmentHeadItSupply />,
  },
  {
    path: '/requests/business-trip/edit/department-head',
    element: <EditDepartmentHeadItSupply />,
  },
  {
    path: '/requests/business-trip/view/hr',
    element: <ViewITItSupply />,
  },
  {
    path: '/requests/business-trip/edit/hr',
    element: <EditITItSupply />,
  },
];
