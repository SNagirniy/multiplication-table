import React from 'react';
import s from './result.module.css';

import Card from 'components/Card/Card';

const Result = ({ gameResult, gameAmmount, vocab }) => {
  const { correctAnswer, wrongAnswer } = gameResult;
  const { result_good, result_middle, result_bad, card_correct, card_wrong } =
    vocab;
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
    if (score >= 0.8) return result_good;
    if (score < 0.6) return result_bad;
    return result_middle;
  };

  return (
    <div className={s.container}>
      <p className={s.result_title}>{title(score)}</p>
      <div className={s.result_box}>
        <div>
          <p className={s.card_title}>{card_correct}</p>
          <div style={correct} className={s.correct_card}>
            <Card num={correctAnswer} />
          </div>
        </div>

        <div>
          <p className={s.card_title}>{card_wrong}</p>
          <div style={wrong} className={s.wrong_card}>
            <Card num={wrongAnswer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
