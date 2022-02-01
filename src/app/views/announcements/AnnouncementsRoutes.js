import React, { lazy } from 'react';

const AnnouncementPage = lazy(() => import('./AnnouncementPage'));

export const announcementsRoutes = [
  {
    path: '/announcements',
    element: <AnnouncementPage />,
  },
];
