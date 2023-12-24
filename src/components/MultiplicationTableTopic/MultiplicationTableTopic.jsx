import s from './multiplication_table_topic.module.css';
import { v4 as uuidv4 } from 'uuid';
const MultiplicationTableTopic = ({ setCurrNum, currentNum, numberArray }) => {
  const handleChange = e => {
    const value = e.currentTarget.textContent;
    setCurrNum(Number(value));
  };
  return (
    <ul className={s.list}>
      {numberArray.map(i => (
        <li className={s.item} key={uuidv4()}>
          <p
            className={`${s.item_val} ${i === currentNum ? s.checked : ''}`}
            onClick={handleChange}
          >
            {i}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MultiplicationTableTopic;
