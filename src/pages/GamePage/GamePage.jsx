import { useState } from 'react';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import Game from '../../components/Game/Game';
import MultiplicationLevelInput from '../../components/MultiplicationLevelInput/MultiplicationLevelInput';
import GameAmountInput from '../../components/GameAmountInput/GameAmountInput';
import Button from '../../components/Button/Button';
import SettingsBox from 'components/SettingsBox/SettingsBox';
import Modal from 'components/Modal/Modal';
import Result from 'components/Result/Result';
import BackButton from 'components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';

const langObj = {
  eng: { task: 'Number of tasks', start_btn: 'Start game' },
  ua: { task: 'Кількість завдань', start_btn: 'Почати гру' },
};

const GamePage = () => {
  const [gameActive, setGameActive] = useState(false);
  const [multipLevel, setMultipLevel] = useState('');
  const [gameAmount, setGameAmount] = useState(5);
  const [gameResult, setGameResult] = useState({
    correctAnswer: 0,
    wrongAnswer: 0,
  });
  const [lang, setLang] = useState('eng');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
          <BackButton clickFunc={() => navigate('/')} />
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
          {isModalOpen && (
            <Modal onClose={toggleModal}>
              <Result gameResult={gameResult} gameAmmount={gameAmount} />
            </Modal>
          )}
        </>
      )}
      {gameActive && (
        <>
          <BackButton clickFunc={toggleGame} />
          <Game
            multipLevel={multipLevel}
            toggleGame={toggleGame}
            gameAmount={gameAmount}
            toggleModal={toggleModal}
            setGameResult={setGameResult}
          />
        </>
      )}
    </PageWrapper>
  );
};

export default GamePage;
