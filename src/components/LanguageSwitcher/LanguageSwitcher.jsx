import s from './language_switcher.module.css';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const langList = [
  { lang_title: 'en' },
  { lang_title: 'ua' },
  { lang_title: 'pl' },
];

const LanguageSwitcher = ({ currentLang, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const rootRef = useRef(null);

  const currentLangList = langList.filter(i => i.lang_title !== currentLang);

  const handleChangeLang = e => {
    const { textContent } = e.currentTarget;
    setLanguage(textContent);
    toggleDropdown();
  };

  useEffect(() => {
    const handleClick = event => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  return (
    <div onClick={toggleDropdown} className={s.container}>
      <div ref={rootRef} className={`${s.lang} ${s[currentLang]}`}>
        {currentLang}
      </div>
      {isOpen && (
        <ul className={s.dropdown}>
          {currentLangList.map(({ lang_title }) => (
            <li
              key={uuidv4()}
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
