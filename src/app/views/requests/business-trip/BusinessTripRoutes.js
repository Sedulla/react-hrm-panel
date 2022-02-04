import { lazy } from 'react';
import { BusinessTripPage } from './BusinessTripPage';
import { NewBusinessTrip } from './shared/NewBusinessTrip';

export const businessTripRequestRoutes = [
  {
    path: '/requests/business-trip/new',
    element: <NewBusinessTrip />,
  },
];
