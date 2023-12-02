const GameAmountInput = ({ gameAmount, setGameAmount, text }) => {
  const inpChange = e => {
    const { value } = e.currentTarget;
    setGameAmount(value);
  };

  return (
    <div>
      <label htmlFor="123">
        {text}: {gameAmount}
        <input
          id="123"
          onChange={inpChange}
          value={gameAmount}
          min={5}
          max={30}
          step={1}
          type="range"
        />
      </label>
    </div>
  );
};

export default GameAmountInput;
