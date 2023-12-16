import s from './card.module.css';
import { v4 as uuidv4 } from 'uuid';
import useCartoonDigits from 'customHooks/useCartoonDigits';

const Card = ({ num }) => {
  const digits = useCartoonDigits(num);
  return (
    <div className={s.card_thumb}>
      {digits.map(({ digit, alt }) => {
        return <img key={uuidv4()} src={digit} alt={alt} />;
      })}
    </div>
  );
};

export default Card;
