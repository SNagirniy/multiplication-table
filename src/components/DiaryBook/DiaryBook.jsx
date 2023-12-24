import s from './diary_book.module.css';
import useLocalStorage from 'customHooks/useLocaleStortage';
import { v4 as uuidv4 } from 'uuid';
import DiaryBookEntry from 'components/DiaryBookEntry/DiaryBookEntry';

const DiaryBook = ({ vocab }) => {
  const [state] = useLocalStorage('diarybook', []);

  return (
    <div className={s.container}>
      {state.length === 0 ? (
        <p className={s.table_title}>{vocab.empty_diary}</p>
      ) : (
        <>
          <h3 className={s.table_title}>{vocab.diarybook}</h3>
          <table className={s.table}>
            <tbody>
              {state.map(({ date, correctAnswer, gameAmount }) => {
                return (
                  <DiaryBookEntry
                    key={uuidv4()}
                    date={date}
                    correctAnswer={correctAnswer}
                    gameAmount={gameAmount}
                    vocab={vocab}
                  />
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default DiaryBook;
