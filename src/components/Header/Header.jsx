import s from './header.module.css';
import x from '../../images/x.png';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';

const Header = ({ currentLang, setLanguage, vocab }) => {
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
          <p>{journal}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
