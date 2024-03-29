import { AuthGuard } from '../auth/AuthGuard';
import { NavContextProvider } from '../contexts/NavContextProvider';
import { AppLayout } from '../components/AppLayout';

import { homepageRoutes } from '../views/homepage/HomePageRoutes';
import { coworkersRoutes } from '../views/coworkers/CoworkersRoutes';
import { announcementsRoutes } from '../views/announcements/AnnouncementsRoutes';
import { settingsRoutes } from '../views/settings/SettingsRoutes';
import { requestsRoutes } from '../views/requests/RequestsRoutes';
import { sessionRoutes } from '../views/sessions/SessionRoutes';

import { NotFoundPage } from '../views/sessions/NotFoundPage';

export const AllPages = () => {
  const all_routes = [
    {
      path: '/',
      element: (
        // <AuthGuard>
        <NavContextProvider>
          <AppLayout />
        </NavContextProvider>
        // </AuthGuard>
      ),
      children: [
        ...homepageRoutes,
        ...coworkersRoutes,
        ...announcementsRoutes,
        ...settingsRoutes,
        ...requestsRoutes,
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
