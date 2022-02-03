import { LoginPage } from './login/LoginPage';
import { NotFoundPage } from './NotFoundPage';

export const sessionRoutes = [
  {
    path: '/session/login',
    element: <LoginPage />,
  },
  {
    path: '/session/404',
    element: <NotFoundPage />,
  },
];

