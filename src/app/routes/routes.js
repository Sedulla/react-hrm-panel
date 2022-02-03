import { NavContextProvider } from '../contexts/NavContextProvider';
import { AppLayout } from '../components/AppLayout';

import { announcementsRoutes } from '../views/announcements/AnnouncementsRoutes';
import { settingsRoutes } from '../views/settings/SettingsRoutes';
import { requestsRoutes } from '../views/requests/RequestsRoutes';
import { sessionRoutes } from '../views/sessions/SessionRoutes';

import { LoginPage } from '../views/sessions/login/LoginPage';

import { HomePage } from '../views/homepage/HomePage';
import { ProfileSettingsPage } from '../views/settings/ProfileSettingsPage';
import { RequestsPage } from '../views/requests/RequestsPage';

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
          <AppLayout />
        </AuthGuard>
      ),
      children: [...announcementsRoutes, ...settingsRoutes, ...requestsRoutes],
    },
    ...sessionRoutes,
    {
      path: '*',
      element: <NotFoundPage />,
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
