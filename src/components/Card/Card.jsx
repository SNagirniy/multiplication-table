import s from './card.module.css';

const Card = ({ num }) => {
  return (
    <div className={s.card_thumb}>
      <p>{num}</p>
    </div>
  );
};

export default Card;
