import s from './button.module.css';
const Button = ({ cbFunc, name }) => {
  return (
    <button className={s.button} type="button" onClick={cbFunc}>
      {name}
    </button>
  );
};

export default Button;
