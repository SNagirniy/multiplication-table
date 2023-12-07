import CounterSceleton from 'components/CounterSceleton/CounterSceleton';
import sprite from '../../images/sprite.svg';

const GameCounter = ({ counter, gameAmount }) => {
  return (
    <CounterSceleton
      counter={`${counter} / ${gameAmount}`}
      icon={sprite + '#icon-interrogation'}
    />
  );
};

export default GameCounter;
