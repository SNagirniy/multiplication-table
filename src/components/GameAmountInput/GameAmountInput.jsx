import s from './game_amount_input.module.css';

const GameAmountInput = ({ gameAmount, setGameAmount, text }) => {
  const inpChange = e => {
    const { value } = e.currentTarget;
    setGameAmount(value);
  };

  return (
    <div className={s.box}>
      <label className={s.label} htmlFor="123">
        {text}: {gameAmount}
      </label>
      <div className={s.range}>
        <input
          id="123"
          onChange={inpChange}
          value={gameAmount}
          min={5}
          max={30}
          step={1}
          type="range"
          className={s.input}
        />
      </div>
    </div>
  );
};

export default GameAmountInput;
