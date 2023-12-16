import { useState, useEffect } from 'react';
import useLocalStorage from './useLocaleStortage';

const Vocabulary = {
  en: {
    hero_title: 'play and learn multiplication with fun',
    start_btn: 'start game',
    learn_btn: 'start learn',
    journal: 'journal',
    numberValue: 'number of tasks',
    multiplier_value: 'multiplication by',
    result_good: 'perfect',
    result_middle: 'good job',
    result_bad: 'let`s try again',
    card_correct: 'correct',
    card_wrong: 'wrong',
  },

  ua: {
    hero_title: 'грай та весело вивчай множення',
    start_btn: 'почати гру',
    learn_btn: 'навчання',
    journal: 'щоденник',
    numberValue: 'кількість завдань',
    multiplier_value: 'множення на',
    result_good: 'відмінно',
    result_middle: 'гарна робота',
    result_bad: 'спробуй ще',
    card_correct: 'вірно',
    card_wrong: 'не вірно',
  },

  pl: {
    hero_title: 'grać i uczyć się mnożenia podczas zabawy',
    start_btn: 'rozpocznij grę',
    learn_btn: 'nauczanie',
    journal: 'dziennik',
    numberValue: 'liczba zadań',
    multiplier_value: 'pomnóż przez',
    result_good: 'doskonale',
    result_middle: 'dobra robota',
    result_bad: 'spróbuj ponownie',
    card_correct: 'poprawny',
    card_wrong: 'fałsz',
  },
};

const useLanguage = () => {
  const [state, setState] = useLocalStorage('language', 'en');
  const defaultLang = state ? state : 'en';
  const [lang, setLang] = useState(defaultLang);
  const [currentVocab, setCurrentVocab] = useState({});

  useEffect(() => {
    setCurrentVocab(Vocabulary[lang]);
    setState(lang);
  }, [lang, setState]);

  return [lang, currentVocab, setLang];
};

export default useLanguage;
