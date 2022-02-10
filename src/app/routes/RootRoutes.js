import { Navigate } from 'react-router-dom';

import announcementsRoutes from '..app/views/announcements/AnnouncementsRoutes';
import settingsRoutes from '../app/views/settings/SettingsRoutes';
import requestsRoutes from '../app/views/requests/RequestsRoutes';

const navigateRoute = [
  {
    path: '/',
    element: () => <Navigate to="/settings" />,
  },
];

const errorRoute = [
  {
    element: () => <Navigate to="/session/404" />,
  },
];

const routes = [
  ...announcementsRoutes,
  ...settingsRoutes,
  ...requestsRoutes,
  ...navigateRoute,
  ...errorRoute,
];

export default routes;
