import React, { lazy } from 'react';

import { AnnouncementPage } from './AnnouncementPage';
import { AddAnnouncement } from './shared/AddAnnouncement';
import { ViewAnnouncement } from './shared/ViewAnnouncement';
import { EditAnnouncement } from './shared/EditAnnouncement';

export const announcementsRoutes = [
  {
    path: '/announcements',
    element: <AnnouncementPage />,
  },
  {
    path: '/announcements/add',
    element: <AddAnnouncement />,
  },
  {
    path: '/announcements/view/:id',
    element: <ViewAnnouncement />,
  },
  {
    path: '/announcements/edit/:id',
    element: <EditAnnouncement />,
  },
  {},
];
