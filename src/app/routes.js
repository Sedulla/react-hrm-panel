import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

import { NavContextProvider } from '../utilities/providers/NavContextProvider';
// import { LoginPage } from '../pages/Login/LoginPage';

// import { PrivateRoute } from '../components/PrivateRoute';
import { Layout } from '../components/Layout';

<<<<<<< HEAD
import { Navigation } from '../components/Navigation/Navigation';
import { TopNav } from '../components/Navigation/TopNav';
=======
// import { Navigation } from '../components/Navigation/Navigation';
// import { TopNav } from '../components/Navigation/TopNav';
>>>>>>> requests

import { ViewAnnouncement } from '../pages/Announcement/ViewAnnouncement';
import { AddNewAnnouncement } from '../pages/Announcement/AddNewAnnouncement';

import { HomePage } from '../pages/HomePage';

import { AnnouncementPage } from '../pages/Announcement/AnnouncementPage';
// import { RequestsPage } from '../pages/Requests/RequestsPage';

// const AnnouncementPage = lazy(() =>
//   import('../pages/Announcement/Announcement')
// );
const ProfileSettingsPage = lazy(() =>
  import('../pages/Settings/ProfileSettings')
);

// const NotFound = lazy(() => import('./pages/not-found'));

const routes = (isAuthenticated) => [
  {
    path: '',
    element: isAuthenticated ? (
      <Layout />
    ) : (
      <NavContextProvider>
        <Layout>
          <AnnouncementPage to="/announcements" />
        </Layout>
      </NavContextProvider>
    ),
    children: [
      { path: '/homepage', element: <HomePage /> },
      { path: '/announcementsw', element: <AnnouncementPage /> },

      {
        path: '/announcementse',
        element: (
<<<<<<< HEAD
          <>
            <Route
              path="/announcements"
              element={
                <NavContextProvider>
                  <Layout>
                    <AnnouncementPage />
                  </Layout>
                </NavContextProvider>
              }
            >
              <Route path="/announcements/:id" element={<ViewAnnouncement />} />
            </Route>

            <Route path="/announcements" element={<AnnouncementPage />}>
              <Route
                path="/announcements/add"
                element={<AddNewAnnouncement />}
              />
            </Route>
          </>
=======
          <NavContextProvider>
            <Layout>
              <Route path="/announcementse" element={<AnnouncementPage />}>
                <Route
                  path="/announcements/:id"
                  element={<ViewAnnouncement />}
                />
              </Route>

              <Route path="/announcementsa" element={<AnnouncementPage />}>
                <Route
                  path="/announcements/add"
                  element={<AddNewAnnouncement />}
                />
              </Route>
            </Layout>
          </NavContextProvider>
>>>>>>> requests
        ),
      },

      {
        path: '/settings',
        element: (
          <NavContextProvider>
            <Layout>
              <Route path="/settings" element={<ProfileSettingsPage />}>
                <Route path="settings/:id" element={<ProfileSettingsPage />} />
              </Route>
            </Layout>
          </NavContextProvider>
        ),
      },

      { path: '/', element: <Navigate to="/app/dashboard" /> },
      // {
      //   path: '*',
      //   element: <p>There's nothing here!</p>,
      // },
      //   {
      //     path: 'member',
      //     element: <Outlet />,
      //     children: [
      //       { path: '/', element: <MemberGrid /> },
      //       { path: '/add', element: <AddMember /> },
      //     ],
      //   },
    ],
  },

  // {
  //   path: '/',
  //   element: !isAuthenticated ? (
  //     <Navigation />
  //   ) : (
  //     <Navigate to="/app/dashboard" />
  //   ),
  //   children: [
  //     { path: 'login', element: <LoginPage /> },
  //     { path: '/', element: <Navigate to="/login" /> },
  //   ],
  // },
];

export default routes;
