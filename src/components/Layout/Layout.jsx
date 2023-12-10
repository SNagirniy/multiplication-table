import s from './layout.module.css';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
