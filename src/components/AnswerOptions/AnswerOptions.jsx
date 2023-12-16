import s from './answer_options.module.css';
import Card from 'components/Card/Card';
const AnswerOptions = ({
  answerOptArray,
  correctAnsw,
  handleChange,
  answer,
}) => {
  const styleClass = item => {
    if (item === answer && answer === correctAnsw) {
      return s.card_correct;
    } else if (item === answer && answer !== correctAnsw) {
      return s.card_wrong;
    }
  };
  return (
    <div className={s.container} role="radiogroup">
      {answerOptArray.map(item => {
        const isDisabled = answer ? true : false;

        return (
          <label
            className={`${s.label} ${styleClass(item)}`}
            htmlFor={item}
            key={`${item}`}
          >
            <input
              className={s.card_input}
              name="answer"
              onClick={!answer ? handleChange : null}
              value={item}
              type="radio"
              disabled={isDisabled}
              id={item}
            />
            <Card num={item} />
          </label>
        );
      })}
    </div>
  );
};

export default AnswerOptions;
