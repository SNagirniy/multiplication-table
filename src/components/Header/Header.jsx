import s from './header.module.css';
import x from '../../images/x.png';
import sprite from '../../images/sprite.svg';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';

const Header = ({ currentLang, setLanguage, vocab, toggleModal }) => {
  const { journal } = vocab;
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo_thumb}>
          <img className={s.logo_image} src={x} alt="logo" />
        </div>
        <div className={s.box}>
          <LanguageSwitcher
            currentLang={currentLang}
            setLanguage={setLanguage}
          />
          <div onClick={toggleModal} className={s.diarybook_thumb}>
            <svg className={s.diarybook_icon}>
              <use href={sprite + '#icon-diarybook'}></use>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
