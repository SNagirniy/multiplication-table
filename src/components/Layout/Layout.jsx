import s from './layout.module.css';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = ({ currentLang, setLanguage, vocab }) => {
  return (
    <div className={s.layout}>
      <Header
        currentLang={currentLang}
        setLanguage={setLanguage}
        vocab={vocab}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
