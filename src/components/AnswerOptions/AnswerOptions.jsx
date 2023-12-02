const AnswerOptions = ({
  answerOptArray,
  currentValue,
  correctAnsw,
  handleChange,
}) => {
  return (
    <div role="radiogroup">
      {answerOptArray.map(item => {
        const isDisabled = currentValue ? true : false;
        return (
          <label key={`${item}`}>
            {item}
            <input
              name="answer"
              onClick={!currentValue ? handleChange : null}
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
