import { Outlet } from 'react-router-dom';
import Header from '@shared/components/Header/Header';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
