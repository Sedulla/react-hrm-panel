import { NavContextProvider } from '../contexts/NavContextProvider';
// import { LoginPage } from '../pages/Login/LoginPage';

// import { PrivateRoute } from '../components/PrivateRoute';

// import { Navigation } from '../components/Navigation/Navigation';
// import { TopNav } from '../components/Navigation/TopNav';

// import { ViewAnnouncement } from '../pages/Announcement/ViewAnnouncement';
// import { AddNewAnnouncement } from '../pages/Announcement/AddNewAnnouncement';

// import { HomePage } from './views/homepage/HomePage';

// import { AnnouncementPage } from '../pages/Announcement/AnnouncementPage';
// import { RequestsPage } from '../pages/Requests/RequestsPage';

// const AnnouncementPage = lazy(() =>
//   import('../pages/Announcement/Announcement')
// );

// const NotFound = lazy(() => import('./pages/not-found'));

// import AuthGuard from './auth/AuthGuard';

import { announcementsRoutes } from '../views/announcements/AnnouncementsRoutes';
import { settingsRoutes } from '../views/settings/SettingsRoutes';
import { requestsRoutes } from '../views/requests/RequestsRoutes';
import { AppLayout } from '../components/AppLayout';

import { HomePage } from '../views/homepage/HomePage';
import { ProfileSettingsPage } from '../views/settings/ProfileSettingsPage';
import { Route } from 'react-router-dom';
import { RequestsPage } from '../views/requests/RequestsPage';

export const AllPages = () => {
  const all_routes = [
    {
      path: '/homepage',
      element: (
        // <AuthGuard>
        <NavContextProvider>
          <AppLayout>
            <RequestsPage/>
          </AppLayout>
        </NavContextProvider>
        // </AuthGuard>
      ),
      // children: [...announcementsRoutes, ...settingsRoutes, ...requestsRoutes],
    },
    // ...sessionRoutes,
    {
      path: '*',
      element: <div>Not Found</div>,
    },
  ];

  return all_routes;
};

// const routes = (isAuthenticated) => [
//   {
//     path: '',
//     element: isAuthenticated ? (
//       <Layout />
//     ) : (
//       <NavContextProvider>
//         <Layout>
//           <AnnouncementPage to="/announcements" />
//         </Layout>
//       </NavContextProvider>
//     ),
//     children: [
//       { path: '/homepage', element: <HomePage /> },
//       { path: '/announcementsw', element: <AnnouncementPage /> },

//       {
//         path: '/announcementse',
//         element: (
//           <NavContextProvider>
//             <Layout>
//               <Route path="/announcementse" element={<AnnouncementPage />}>
//                 <Route
//                   path="/announcements/:id"
//                   element={<ViewAnnouncement />}
//                 />
//               </Route>

//               <Route path="/announcementsa" element={<AnnouncementPage />}>
//                 <Route
//                   path="/announcements/add"
//                   element={<AddNewAnnouncement />}
//                 />
//               </Route>
//             </Layout>
//           </NavContextProvider>
//         ),
//       },

//       {
//         path: '/settings',
//         element: (
//           <NavContextProvider>
//             <Layout>
//               <Route path="/settings" element={<ProfileSettingsPage />}>
//                 <Route path="settings/:id" element={<ProfileSettingsPage />} />
//               </Route>
//             </Layout>
//           </NavContextProvider>
//         ),
//       },

//       { path: '/', element: <Navigate to="/app/dashboard" /> },
//       // {
//       //   path: '*',
//       //   element: <p>There's nothing here!</p>,
//       // },
//       //   {
//       //     path: 'member',
//       //     element: <Outlet />,
//       //     children: [
//       //       { path: '/', element: <MemberGrid /> },
//       //       { path: '/add', element: <AddMember /> },
//       //     ],
//       //   },
//     ],
//   },

//   // {
//   //   path: '/',
//   //   element: !isAuthenticated ? (
//   //     <Navigation />
//   //   ) : (
//   //     <Navigate to="/app/dashboard" />
//   //   ),
//   //   children: [
//   //     { path: 'login', element: <LoginPage /> },
//   //     { path: '/', element: <Navigate to="/login" /> },
//   //   ],
//   // },
// ];

// export default routes;
