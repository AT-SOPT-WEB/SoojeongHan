import type { RouteObject } from 'react-router-dom';

import LoginPage from '@pages/LoginPage/LoginPage';
import SigninPage from '@pages/SigninPage/SigninPage';
import MyPage from '@pages/MyPage/MyPage';
import routePath from '@/routes/routhPath';

const pageRoutes: RouteObject[] = [
  {
    path: routePath.LOGIN,
    element: <LoginPage />,
  },
  {
    path: routePath.SIGNIN,
    element: <SigninPage />,
  },
  {
    path: routePath.MY,
    element: <MyPage />,
  },
];

export default pageRoutes;
