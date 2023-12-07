import s from './counter_sceleton.module.css';

const CounterSceleton = ({ counter, icon }) => {
  return (
    <div className={s.box}>
      <svg className={s.icon}>
        <use href={icon}></use>
      </svg>
      <p className={s.value}>{counter}</p>
    </div>
  );
};

export default CounterSceleton;
