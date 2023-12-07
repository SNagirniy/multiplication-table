import GamePage from 'pages/GamePage/GamePage';
import LearnPage from 'pages/LearnPage/LearnPage';
import Layout from './Layout/Layout';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <Layout>
      <Header />
      <LearnPage />
      <Footer />
    </Layout>
  );
};
