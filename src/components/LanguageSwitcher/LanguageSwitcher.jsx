import s from './language_switcher.module.css';
import { useState } from 'react';

const langList = [
  { lang_title: 'en' },
  { lang_title: 'ua' },
  { lang_title: 'pl' },
];

const LanguageSwitcher = ({ currentLang, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const currentLangList = langList.filter(i => i.lang_title !== currentLang);

  const handleChangeLang = e => {
    const { textContent } = e.currentTarget;
    setLanguage(textContent);
    toggleDropdown();
  };
  return (
    <div onClick={toggleDropdown} className={s.container}>
      <div className={`${s.lang} ${s[currentLang]}`}>{currentLang}</div>
      {isOpen && (
        <ul className={s.dropdown}>
          {currentLangList.map(({ lang_title }) => (
            <li
              key={lang_title}
              className={`${s.dropdown_item} ${s[lang_title]}`}
              onClick={handleChangeLang}
            >
              {lang_title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
