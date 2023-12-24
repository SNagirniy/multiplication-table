import s from './layout.module.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
import DiaryBook from 'components/DiaryBook/DiaryBook';

const Layout = ({ currentLang, setLanguage, vocab }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div className={s.layout}>
      <Header
        currentLang={currentLang}
        setLanguage={setLanguage}
        vocab={vocab}
        toggleModal={toggleModal}
      />
      <Outlet />
      <Footer />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <DiaryBook vocab={vocab} />
        </Modal>
      )}
    </div>
  );
};

export default Layout;
