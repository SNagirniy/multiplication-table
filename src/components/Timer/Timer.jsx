import { useEffect } from 'react';
import CounterSceleton from 'components/CounterSceleton/CounterSceleton';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';

const Timer = ({ isTimerActive, toggleTimer, setIsOutOfTime }) => {
  const [s, setS] = useState(10);

  useEffect(() => {
    if (s > 0 && isTimerActive) {
      const v = setTimeout(setS, 1000, s - 1);
      return () => clearTimeout(v);
    } else {
      s <= 0 && setIsOutOfTime(true);
      toggleTimer(false);
      setS(10);
    }
  }, [s, isTimerActive]);

  return <CounterSceleton counter={s} icon={sprite + '#icon-clock'} />;
};
export default Timer;
