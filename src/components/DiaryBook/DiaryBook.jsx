import sprite from '../../images/sprite.svg';
import s from './diary_book.module.css';
import useLocalStorage from 'customHooks/useLocaleStortage';

const DiaryBook = () => {
  const [state] = useLocalStorage('diarybook', []);

  const score = (gameVal, rightAnsVal) => {
    return Math.round((rightAnsVal / gameVal) * 100);
  };
  const isStarGold = (score, val) => {
    return score >= val ? s.gold : '';
  };

  return (
    <div className={s.container}>
      <h3 className={s.table_title}>Diarybook</h3>
      <table className={s.table}>
        <tbody>
          {state.map(({ date, correctAnswer, gameAmount }) => {
            const scoreVal = score(gameAmount, correctAnswer);
            return (
              <>
                <tr className={s.raw_title}>
                  <td>{date}</td>
                </tr>
                <tr className={s.raw}>
                  <td className={`${s.raw_cell} ${s.star_box}`}>
                    <svg className={`${s.star} ${isStarGold(scoreVal, 20)}`}>
                      <use href={sprite + '#icon-star'}></use>
                    </svg>
                    <svg className={`${s.star} ${isStarGold(scoreVal, 40)}`}>
                      <use href={sprite + '#icon-star'}></use>
                    </svg>
                    <svg className={`${s.star} ${isStarGold(scoreVal, 60)}`}>
                      <use href={sprite + '#icon-star'}></use>
                    </svg>
                    <svg className={`${s.star} ${isStarGold(scoreVal, 75)}`}>
                      <use href={sprite + '#icon-star'}></use>
                    </svg>
                    <svg className={`${s.star} ${isStarGold(scoreVal, 95)}`}>
                      <use href={sprite + '#icon-star'}></use>
                    </svg>
                  </td>
                  <td className={s.raw_cell}>{correctAnswer}</td>
                  <td className={s.raw_cell}>of</td>
                  <td className={s.raw_cell}>{gameAmount}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DiaryBook;
