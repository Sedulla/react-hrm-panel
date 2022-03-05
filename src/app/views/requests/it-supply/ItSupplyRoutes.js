import { lazy } from 'react';

import { NewItSupply } from './shared/AddtSupply';
import { ViewItSupply } from './shared/ViewItSupply';
import { ViewDepartmentHeadItSupply } from './shared/ViewDepartmentHeadItSupply';
import { EditDepartmentHeadItSupply } from './shared/EditDepartmentHeadItSupply';
import { ViewITItSupply } from './shared/ViewITItSupply';
import { EditITItSupply } from './shared/EditITItSupply';

export const itSupplyRequestRoutes = [
  {
    path: '/requests/it-supply/new',
    element: <NewItSupply />,
  },
  {
    path: '/requests/it-supply/view/:id',
    element: <ViewItSupply />,
  },
  {
    path: '/requests/it-supply/view/department-head/',
    element: <ViewDepartmentHeadItSupply />,
  },
  {
    path: '/requests/it-supply/edit/department-head',
    element: <EditDepartmentHeadItSupply />,
  },
  {
    path: '/requests/it-supply/view/hr',
    element: <ViewITItSupply />,
  },
  {
    path: '/requests/it-supply/edit/hr',
    element: <EditITItSupply />,
  },
];
