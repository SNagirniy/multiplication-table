import s from './footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.text}>Developed by:</p>
      <a className={s.link} href="https://github.com/SNagirniy" target="blanc">
        S.Nagirnii
      </a>
    </footer>
  );
};

export default Footer;
