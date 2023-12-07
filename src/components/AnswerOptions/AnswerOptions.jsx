import s from './answer_options.module.css';

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
    } else {
      return s.card;
    }
  };
  return (
    <div className={s.container} role="radiogroup">
      {answerOptArray.map(item => {
        const isDisabled = answer ? true : false;

        return (
          <label className={styleClass(item)} key={`${item}`}>
            {item}
            <input
              className={s.card_input}
              name="answer"
              onClick={!answer ? handleChange : null}
              value={item}
              type="radio"
              disabled={isDisabled}
            />
          </label>
        );
      })}
    </div>
  );
};

export default AnswerOptions;
