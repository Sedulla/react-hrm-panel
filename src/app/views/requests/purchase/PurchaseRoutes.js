import { lazy } from 'react';

import { NewPurchase } from './shared/NewPurchase';
import { ViewPurchase } from './shared/ViewPurchase';
import { ViewDepartmentHeadPurchase } from './shared/ViewDepartmentHeadPurchase';
import { EditDepartmentHeadPurchase } from './shared/EditDepartmentHeadPurchase';
import { ViewPurchasePurchase } from './shared/ViewPurchasePurchase';
import { EditPurchasePurchase } from './shared/EditPurchasePurchase';

export const purchaseRequestRoutes = [
  {
    path: '/requests/business-trip/new',
    element: <NewPurchase />,
  },
  {
    path: '/requests/business-trip/view/:id',
    element: <ViewPurchase />,
  },
  {
    path: '/requests/business-trip/view/department-head/',
    element: <ViewDepartmentHeadPurchase />,
  },
  {
    path: '/requests/business-trip/edit/department-head',
    element: <EditDepartmentHeadPurchase />,
  },
  {
    path: '/requests/business-trip/view/hr',
    element: <ViewPurchasePurchase />,
  },
  {
    path: '/requests/business-trip/edit/hr',
    element: <EditPurchasePurchase />,
  },
];
