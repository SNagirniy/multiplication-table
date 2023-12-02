import { useState, useEffect } from 'react';

import AnswerOptions from 'components/AnswerOptions/AnswerOptions';
import Timer from 'components/Timer/Timer';
import shuffle from 'helpers/helpers';

const initialDataValue = {
  x: 0,
  y: 0,
  product: 0,
  answer_options: [],
};

const MainTask = ({ multipLevel, toggleGame, gameAmount }) => {
  const [visibAnsw, setVisibAnsw] = useState(false);
  const [gameCounter, setGameCounter] = useState(1);
  const [data, setData] = useState(initialDataValue);
  const [rightAnsw, setRightAnsw] = useState(0);
  const [wrongAnsw, setWrongAnsw] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [timerActive, setTimerActive] = useState(false);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    gameCounter > gameAmount && toggleGame();
  }, [gameCounter]);

  useEffect(() => {
    if (seconds <= 0) {
      setGameCounter(prev => prev + 1);
      setWrongAnsw(prev => prev + 1);
    }
  }, [seconds]);

  useEffect(() => {
    setData(shuffle(multipLevel));
    setVisibAnsw(false);
    setSelectedAnswer(null);
    setSeconds(10);
    setTimerActive(true);
  }, [gameCounter, multipLevel]);

  const handleChange = e => {
    const { value } = e.currentTarget;
    setSelectedAnswer(Number(value));
    setTimerActive(false);

    const t1 = setTimeout(() => {
      if (Number(value) === data.product) {
        setVisibAnsw(true);
        setRightAnsw(prev => prev + 1);
      } else {
        setWrongAnsw(prev => prev + 1);
      }
    }, 250);

    const timer = setTimeout(() => {
      setGameCounter(prev => prev + 1);
    }, 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(timer);
    };
  };

  return (
    <div>
      <h3>Solve the problem</h3>
      <Timer
        isTimerActive={timerActive}
        toggleTimer={setTimerActive}
        seconds={seconds}
        setSeconds={setSeconds}
      />
      <p>Counter: {gameCounter}</p> <p>Right answer: {rightAnsw}</p>
      <p>Wrong answer: {wrongAnsw}</p>
      <p>
        {data.x}x{data.y}={visibAnsw && data.product}
      </p>
      <AnswerOptions
        answerOptArray={data.answer_options}
        currentValue={selectedAnswer}
        correctAnsw={data.product}
        handleChange={handleChange}
      />
    </div>
  );
};

export default MainTask;
