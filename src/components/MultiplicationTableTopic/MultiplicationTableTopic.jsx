import s from './multiplication_table_topic.module.css';

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
          className={i === currentNum ? s.item_checked : s.item}
          key={i}
        >
          {i}
        </li>
      ))}
    </ul>
  );
};

export default MultiplicationTableTopic;
