import s from './back_button.module.css';
import sprite from '../../images/sprite.svg';

const BackButton = ({ clickFunc }) => {
  return (
    <button onClick={clickFunc} className={s.back_button}>
      <svg className={s.back_button_image}>
        <use href={sprite + '#icon-arrow-back'}></use>
      </svg>
    </button>
  );
};

export default BackButton;
