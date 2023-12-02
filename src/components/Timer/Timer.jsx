import { useEffect } from 'react';

const Timer = ({ isTimerActive, toggleTimer, seconds, setSeconds }) => {
  useEffect(() => {
    if (seconds > 0 && isTimerActive) {
      const v = setTimeout(setSeconds, 1000, seconds - 1);
      return () => clearTimeout(v);
    } else {
      toggleTimer(false);
    }
  }, [seconds, isTimerActive]);

  return (
    <div>
      <p> Time left: {seconds}</p>
    </div>
  );
};
export default Timer;
