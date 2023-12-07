import { useState } from 'react';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import Game from '../../components/Game/Game';
import MultiplicationLevelInput from '../../components/MultiplicationLevelInput/MultiplicationLevelInput';
import GameAmountInput from '../../components/GameAmountInput/GameAmountInput';
import Button from '../../components/Button/Button';
import SettingsBox from 'components/SettingsBox/SettingsBox';

const langObj = {
  eng: { task: 'Number of tasks', start_btn: 'Start game' },
  ua: { task: 'Кількість завдань', start_btn: 'Почати гру' },
};

const GamePage = () => {
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
    <PageWrapper>
      {!gameActive && (
        <>
          <SettingsBox>
            <GameAmountInput
              gameAmount={gameAmount}
              setGameAmount={setGameAmount}
              text={langObj[lang].task}
            />
            <MultiplicationLevelInput
              levelValue={multipLevel}
              changeMultipLevel={handleChangeMultipLevel}
            />
          </SettingsBox>

          <Button cbFunc={toggleGame} name={langObj[lang].start_btn} />
        </>
      )}
      {gameActive && (
        <Game
          multipLevel={multipLevel}
          toggleGame={toggleGame}
          gameAmount={gameAmount}
        />
      )}
    </PageWrapper>
  );
};

export default GamePage;