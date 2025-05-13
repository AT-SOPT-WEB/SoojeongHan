import type { RouteObject } from 'react-router-dom';

import LoginPage from '@pages/LoginPage/LoginPage';
import SigninPage from '@pages/SigninPage/SigninPage';
import MySearchPage from '@pages/MySearchPage/MySearchPage';
import MyInfoPage from '@pages/MyInfoPage/MyInfoPage';
import Layout from '@routes/Layout';

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
    element: <Layout />,
    children: [
      {
        path: routePath.MYSEARCH,
        element: <MySearchPage />,
      },
      {
        path: routePath.MYINFO,
        element: <MyInfoPage />,
      },
    ],
  },
];

export default pageRoutes;
