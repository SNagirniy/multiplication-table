import s from "./card.module.css"

const Card = ({ children }) => {
  return <div className={s.card_thumb}>
    <div className={s.card}>{children}</div></div>;
};

export default Card;
