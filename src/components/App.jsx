import { Routes, Route, Navigate } from 'react-router-dom';

import GamePage from 'pages/GamePage/GamePage';
import LearnPage from 'pages/LearnPage/LearnPage';
import HomePage from 'pages/HomePage/HomePage';
import Layout from './Layout/Layout';
import useLanguage from 'customHooks/useLanguage';

export const App = () => {
  const [lang, currentVocab, setLang] = useLanguage();

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              currentLang={lang}
              setLanguage={setLang}
              vocab={currentVocab}
            />
          }
        >
          <Route index element={<HomePage vocab={currentVocab} />} />
          <Route path="game" element={<GamePage vocab={currentVocab} />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
