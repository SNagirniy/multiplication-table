import s from './multip_level_input.module.css';
import { v4 as uuidv4 } from 'uuid';

const MultiplicationLevelInput = ({ levelValue, changeMultipLevel, text }) => {
  const valueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

  const handleClick = e => {
    const { value } = e.currentTarget;
    changeMultipLevel(value);
  };

  return (
    <div className={s.box}>
      <p className={s.label}>{text}</p>
      <div className={s.custom_select}>
        <select
          className={s.select}
          onChange={handleClick}
          name="level"
          value={levelValue}
        >
          {valueArray.map(i => {
            const val = i > 0 ? i : '';
            const title = i > 0 ? i : 'Random';
            return (
              <option key={uuidv4()} value={val}>
                {title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default MultiplicationLevelInput;
