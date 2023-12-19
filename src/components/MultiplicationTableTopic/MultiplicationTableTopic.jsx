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
        <li
          onClick={handleChange}
          className={`${s.item} ${i === currentNum ? s.checked : ''}`}
          key={uuidv4()}
        >
          {i}
        </li>
      ))}
    </ul>
  );
};

export default MultiplicationTableTopic;
