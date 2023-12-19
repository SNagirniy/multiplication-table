import s from './diary_book.module.css';
import useLocalStorage from 'customHooks/useLocaleStortage';
import { v4 as uuidv4 } from 'uuid';
import DiaryBookEntry from 'components/DiaryBookEntry/DiaryBookEntry';

const DiaryBook = () => {
  const [state] = useLocalStorage('diarybook', []);

  return (
    <div className={s.container}>
      <h3 className={s.table_title}>Diarybook</h3>
      <table className={s.table}>
        <tbody>
          {state.map(({ date, correctAnswer, gameAmount }) => {
            return (
              <DiaryBookEntry
                key={uuidv4()}
                date={date}
                correctAnswer={correctAnswer}
                gameAmount={gameAmount}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DiaryBook;
