const MultiplicationLevelInput = ({ levelValue, changeMultipLevel }) => {
  const valueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

  const handleClick = e => {
    const { value } = e.currentTarget;
    changeMultipLevel(value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'raw',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h4>Select the value to multiply</h4>
      <select onChange={handleClick} name="level" value={levelValue}>
        {valueArray.map(i => {
          const val = i > 0 ? i : '';
          const title = i > 0 ? i : 'Random';
          return (
            <option key={i} value={val}>
              {title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MultiplicationLevelInput;
