import React from 'react';
import s from './result.module.css';

import Card from 'components/Card/Card';

const Result = ({ gameResult, gameAmmount }) => {
  const { correctAnswer, wrongAnswer } = gameResult;
  const cardSize = () => {
    const scaleVal = result => {
      return Math.round((result / gameAmmount) * 10) / 10;
    };
    const correctScaleValue = scaleVal(correctAnswer);
    const wrongScaleValue = scaleVal(wrongAnswer);

    if (correctScaleValue === wrongScaleValue) {
      return {
        correct: { transform: `scale(1)` },
        wrong: { transform: `scale(1)` },
      };
    }
    return {
      correct: { transform: `scale(${0.4 + correctScaleValue})` },
      wrong: { transform: `scale(${0.4 + wrongScaleValue})` },
      score: correctScaleValue,
    };
  };

  const { correct, wrong, score } = cardSize();

  const title = score => {
    if (score >= 0.8) return 'Good job!!!';
    if (score < 0.6) return "Let's try again";
    return 'Not bad!';
  };

  return (
    <div className={s.container}>
      <p className={s.card_title}>{title(score)}</p>
      <div className={s.card_box}>
        <div style={correct}>
          <Card>
            <p className={s.card_result}>Correct</p>
            <p className={s.card_value}>{correctAnswer}</p>
          </Card>
        </div>

        <div style={wrong}>
          <Card>
            <p className={s.card_result}>Wrong</p>
            <p className={s.card_value}>{wrongAnswer}</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Result;
