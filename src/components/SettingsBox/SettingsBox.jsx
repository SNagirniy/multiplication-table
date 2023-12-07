import s from './setting_box.module.css';

const SettingsBox = ({ children }) => {
  return <div className={s.box}>{children}</div>;
};

export default SettingsBox;
