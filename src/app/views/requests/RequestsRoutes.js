import React, { lazy } from 'react';

const RequestsPage = lazy(() => import('./RequestsPage'));

export const requestsRoutes = [
  {
    path: '/requests',
    element: <RequestsPage />,
  },
];

