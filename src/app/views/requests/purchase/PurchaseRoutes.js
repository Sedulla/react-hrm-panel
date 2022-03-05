import { lazy } from 'react';

import { NewPurchase } from './shared/AddPurchase';
import { ViewPurchase } from './shared/ViewPurchase';
import { ViewDepartmentHeadPurchase } from './shared/ViewDepartmentHeadPurchase';
import { EditDepartmentHeadPurchase } from './shared/EditDepartmentHeadPurchase';
import { ViewPurchasePurchase } from './shared/ViewPurchasePurchase';
import { EditPurchasePurchase } from './shared/EditPurchasePurchase';

export const purchaseRequestRoutes = [
  {
    path: '/requests/purchase/new',
    element: <NewPurchase />,
  },
  {
    path: '/requests/purchase/view/:id',
    element: <ViewPurchase />,
  },
  {
    path: '/requests/purchase/view/department-head/',
    element: <ViewDepartmentHeadPurchase />,
  },
  {
    path: '/requests/purchase/edit/department-head',
    element: <EditDepartmentHeadPurchase />,
  },
  {
    path: '/requests/purchase/view/hr',
    element: <ViewPurchasePurchase />,
  },
  {
    path: '/requests/purchase/edit/hr',
    element: <EditPurchasePurchase />,
  },
];
