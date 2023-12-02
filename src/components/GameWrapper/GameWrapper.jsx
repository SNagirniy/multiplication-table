import { useState } from 'react';
import MainTask from 'components/Main_task/MainTask';
import MultiplicationLevelInput from 'components/MultiplicationLevelInput/MultiplicationLevelInput';
import GameAmountInput from 'components/GameAmountInput/GameAmountInput';

const langObj = {
  eng: { task: 'Number of tasks', start_btn: 'Start game' },
  ua: { task: 'Кількість завдань', start_btn: 'Почати гру' },
};

const GameWrapper = () => {
  const [gameActive, setGameActive] = useState(false);
  const [multipLevel, setMultipLevel] = useState('');
  const [gameAmount, setGameAmount] = useState(5);
  const [lang, setLang] = useState('eng');

  const toggleGame = () => {
    setGameActive(!gameActive);
  };

  const handleChangeMultipLevel = value => {
    setMultipLevel(value);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      {!gameActive && (
        <>
          <GameAmountInput
            gameAmount={gameAmount}
            setGameAmount={setGameAmount}
            text={langObj[lang].task}
          />
          <MultiplicationLevelInput
            levelValue={multipLevel}
            changeMultipLevel={handleChangeMultipLevel}
          />
          <button type="button" onClick={toggleGame}>
            {langObj[lang].start_btn}
          </button>
        </>
      )}
      {gameActive && (
        <MainTask
          multipLevel={multipLevel}
          toggleGame={toggleGame}
          gameAmount={gameAmount}
        />
      )}
    </div>
  );
};

export default GameWrapper;
