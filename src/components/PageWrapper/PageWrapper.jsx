import s from './page_wrapper.module.css';

const PageWrapper = ({ children }) => {
  return <main className={s.container}>{children}</main>;
};

export default PageWrapper;
