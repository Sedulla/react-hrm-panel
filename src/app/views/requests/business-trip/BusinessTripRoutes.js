import { lazy } from 'react';

import { NewBusinessTrip } from './shared/AddBusinessTrip';
import { ViewBusinessTrip } from './shared/ViewBusinessTrip';
import { ViewDepartmentHeadBusinessTrip } from './shared/ViewDepartmentHeadBusinessTrip';
import { EditDepartmentHeadBusinessTrip } from './shared/EditDepartmentHeadBusinessTrip';
import { ViewHrBusinessTrip } from './shared/ViewHrBusinessTrip';
import { EditHrBusinessTrip } from './shared/EditHrBusinessTrip';

export const businessTripRequestRoutes = [
  {
    path: '/requests/business-trip/new',
    element: <NewBusinessTrip />,
  },
  {
    path: '/requests/business-trip/view/:id',
    element: <ViewBusinessTrip />,
  },
  {
    path: '/requests/business-trip/view/department-head/',
    element: <ViewDepartmentHeadBusinessTrip />,
  },
  {
    path: '/requests/business-trip/edit/department-head',
    element: <EditDepartmentHeadBusinessTrip />,
  },
  {
    path: '/requests/business-trip/view/hr',
    element: <ViewHrBusinessTrip />,
  },
  {
    path: '/requests/business-trip/edit/hr',
    element: <EditHrBusinessTrip />,
  },
];
