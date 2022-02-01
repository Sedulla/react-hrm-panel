import { Navigate } from 'react-router-dom';
import announcementsRoutes from '..app/views/announcements/AnnouncementsRoutes';
import settingsRoutes from '../app/views/settings/SettingsRoutes';
import requestsRoutes from '../app/views/requests/RequestsRoutes';

const navigateRoute = [
  {
    path: '/',
    exact: true,
    element: () => <Navigate to="/homepage" />,
  },
];

const errorRoute = [
  {
    path: '*',
    element: () => <Navigate to="/sessions/404" />,
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
