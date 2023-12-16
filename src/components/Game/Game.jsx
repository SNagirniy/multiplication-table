import { useState, useEffect } from 'react';
import s from './game.module.css';

import AnswerOptions from 'components/AnswerOptions/AnswerOptions';
import Card from 'components/Card/Card';
import Timer from 'components/Timer/Timer';
import GameCounter from 'components/GameCounter/GameCounter';
import EmojiFace from 'components/EmojiFace/EmojiFace';
import { shuffle } from 'helpers/helpers';
import sprite from '../../images/sprite.svg';

const initialDataValue = {
  x: 0,
  y: 0,
  product: 0,
  answer_options: [],
};

const Game = ({
  multipLevel,
  toggleGame,
  gameAmount,
  toggleModal,
  setGameResult,
  setLocalStorState,
}) => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [gameCounter, setGameCounter] = useState(1);
  const [data, setData] = useState(initialDataValue);
  const [rightAnsw, setRightAnsw] = useState(0);
  const [wrongAnsw, setWrongAnsw] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [timerActive, setTimerActive] = useState(false);
  const [isOutOfTime, setIsOutOfTime] = useState(false);

  useEffect(() => {
    if (gameCounter > gameAmount) {
      const results = {
        correctAnswer: rightAnsw,
        wrongAnswer: wrongAnsw,
      };
      const localStorState = {
        ...results,
        gameAmount,
        date: new Date().toLocaleDateString('ko-KR'),
      };

      return (
        setLocalStorState(prev => [...prev, localStorState]),
        setGameResult(results),
        toggleGame(),
        toggleModal()
      );
    }
  }, [gameCounter]);

  useEffect(() => {
    if (!selectedAnswer && isOutOfTime) {
      setGameCounter(prev => prev + 1);
      setWrongAnsw(prev => prev + 1);
    }
  }, [isOutOfTime, selectedAnswer]);

  useEffect(() => {
    setData(shuffle(multipLevel));
    setIsAnswerCorrect(false);
    setSelectedAnswer(null);
    setIsOutOfTime(false);
    setTimerActive(true);
  }, [gameCounter, multipLevel]);

  const handleChange = e => {
    const { value } = e.currentTarget;
    setSelectedAnswer(Number(value));
    setTimerActive(false);

    if (Number(value) === data.product) {
      setIsAnswerCorrect(true);
      setRightAnsw(prev => prev + 1);
    } else {
      setWrongAnsw(prev => prev + 1);
    }

    const timer = setTimeout(() => {
      setGameCounter(prev => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <>
      <EmojiFace
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswer}
      />
      <div className={s.game_progress}>
        <Timer
          isTimerActive={timerActive}
          toggleTimer={setTimerActive}
          setIsOutOfTime={setIsOutOfTime}
        />
        <GameCounter counter={gameCounter} gameAmount={gameAmount} />
      </div>

      <div className={s.task_box}>
        <Card num={data.x} />
        <div className={s.icon_multip_thumb}>
          <svg className={s.icon_multip}>
            <use href={sprite + '#icon-multiply'}></use>
          </svg>
        </div>
        <Card num={data.y} />
      </div>
      <AnswerOptions
        answerOptArray={data.answer_options}
        correctAnsw={data.product}
        handleChange={handleChange}
        answer={selectedAnswer}
      />
    </>
  );
};

export default Game;
