import PageWrapper from 'components/PageWrapper/PageWrapper';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import s from './home_page.module.css';
const HomePage = () => {
  const navigate = useNavigate();
  const handleNav = pathName => {
    navigate(`/${pathName}`);
  };
  return (
    <PageWrapper>
      <div className={s.container}>
        <div className={s.hero_container_box}>
          <h1 className={s.hero_title}>
            Play game and study multiply for fun!
          </h1>
        </div>
        <div className={s.container_box}>
          <Button cbFunc={() => handleNav('game')} name={'Start Game'} />
          <Button cbFunc={() => handleNav('learn')} name={'Keep Learn'} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
