import s from './header.module.css';
import x from '../../images/x.png';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo_thumb}>
          <img className={s.logo_image} src={x} alt="logo" />
        </div>
        <div className={s.box}>
          <p>eng</p>
          <p>Journal</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
