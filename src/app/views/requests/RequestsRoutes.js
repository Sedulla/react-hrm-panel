import { lazy } from 'react';
import { AddNewRequest } from './shared/AddNewRequest';
import { ViewRequest } from './shared/ViewRequest';
import { DepartmentHeadView } from './shared/DepartmentHeadView';
import { DepartmentHeadEdit } from './shared/DepartmentHeadEdit';
import { HrView } from './shared/HrView';
import { HrEdit } from './shared/HrEdit';

const RequestsPage = lazy(() => import('./RequestsPage'));

export const requestsRoutes = [
  {
    path: '/requests',
    element: <RequestsPage />,
  },
  {
    path: '/requests/new-request',
    element: <AddNewRequest />,
  },
  {
    path: '/requests/view-request',
    element: <ViewRequest />,
  },
  {
    path: '/requests/department-head-view',
    element: <DepartmentHeadView />,
  },
  {
    path: '/requests/department-head-edit',
    element: <DepartmentHeadEdit />,
  },
  {
    path: '/requests/hr-view',
    element: <HrView />,
  },
  {
    path: '/requests/hr-edit',
    element: <HrEdit />,
  },
];
