import s from './diary_book_entry.module.css';
import sprite from '../../images/sprite.svg';
const DiaryBookEntry = ({ date, correctAnswer, gameAmount }) => {
  const score = Math.round((correctAnswer / gameAmount) * 100);

  const isStarGold = val => {
    return score >= val ? s.gold : '';
  };

  return (
    <>
      <tr className={s.raw_title}>
        <td>{date}</td>
      </tr>
      <tr className={s.raw}>
        <td className={`${s.raw_cell} ${s.star_box}`}>
          <svg className={`${s.star} ${isStarGold(20)}`}>
            <use href={sprite + '#icon-star'}></use>
          </svg>
          <svg className={`${s.star} ${isStarGold(40)}`}>
            <use href={sprite + '#icon-star'}></use>
          </svg>
          <svg className={`${s.star} ${isStarGold(60)}`}>
            <use href={sprite + '#icon-star'}></use>
          </svg>
          <svg className={`${s.star} ${isStarGold(75)}`}>
            <use href={sprite + '#icon-star'}></use>
          </svg>
          <svg className={`${s.star} ${isStarGold(95)}`}>
            <use href={sprite + '#icon-star'}></use>
          </svg>
        </td>
        <td className={s.raw_cell}>{correctAnswer}</td>
        <td className={s.raw_cell}>of</td>
        <td className={s.raw_cell}>{gameAmount}</td>
      </tr>
    </>
  );
};

export default DiaryBookEntry;
