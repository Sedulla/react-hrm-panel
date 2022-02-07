import { NavContextProvider } from '../contexts/NavContextProvider';
import { AppLayout } from '../components/AppLayout';

import { announcementsRoutes } from '../views/announcements/AnnouncementsRoutes';
import { settingsRoutes } from '../views/settings/SettingsRoutes';
import { requestsRoutes } from '../views/requests/RequestsRoutes';
import { sessionRoutes } from '../views/sessions/SessionRoutes';

import { LoginPage } from '../views/sessions/login/LoginPage';

import { HomePage } from '../views/homepage/HomePage';
import { ProfileSettingsPage } from '../views/settings/ProfileSettingsPage';

// import { PrivateRoute } from '../components/PrivateRoute';
// const NotFound = lazy(() => import('./pages/not-found'));
import { AuthGuard } from '../auth/AuthGuard';
import { NotFoundPage } from '../views/sessions/NotFoundPage';

export const AllPages = () => {
  const all_routes = [
    {
      path: '/',
      element: (
        <AuthGuard>
          <NavContextProvider>
            <AppLayout />
          </NavContextProvider>
        </AuthGuard>
      ),
      children: [
        ...announcementsRoutes,
        ...settingsRoutes,
        ...requestsRoutes,
        {
          path: '/homepage',
          element: <HomePage />,
        },
      ],
    },
    ...sessionRoutes,
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ];

  return all_routes;
};
