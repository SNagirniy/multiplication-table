import PageWrapper from 'components/PageWrapper/PageWrapper';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import s from './home_page.module.css';
const HomePage = ({ vocab }) => {
  const { hero_title, start_btn, learn_btn } = vocab;
  const navigate = useNavigate();
  const handleNav = pathName => {
    navigate(`/${pathName}`);
  };
  return (
    <PageWrapper>
      <div className={s.container}>
        <div className={s.hero_container_box}>
          <h1 className={s.hero_title}>{hero_title}</h1>
        </div>
        <div className={s.container_box}>
          <Button cbFunc={() => handleNav('game')} name={start_btn} />
          <Button cbFunc={() => handleNav('learn')} name={learn_btn} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
