import { Routes, Route, Navigate } from 'react-router-dom';

import GamePage from 'pages/GamePage/GamePage';
import LearnPage from 'pages/LearnPage/LearnPage';
import HomePage from 'pages/HomePage/HomePage';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="game" element={<GamePage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
