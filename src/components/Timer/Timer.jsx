import { useEffect } from 'react';
import CounterSceleton from 'components/CounterSceleton/CounterSceleton';
import sprite from '../../images/sprite.svg';

const Timer = ({ isTimerActive, toggleTimer, seconds, setSeconds }) => {
  useEffect(() => {
    if (seconds > 0 && isTimerActive) {
      const v = setTimeout(setSeconds, 1000, seconds - 1);
      return () => clearTimeout(v);
    } else {
      toggleTimer(false);
    }
  }, [seconds, isTimerActive]);

  return <CounterSceleton counter={seconds} icon={sprite + '#icon-clock'} />;
};
export default Timer;
