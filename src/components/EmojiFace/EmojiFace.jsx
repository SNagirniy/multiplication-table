import s from './emoji.module.css';
import emoji_thinck from '../../images/emoji-thinck.png';
import emoji_no from '../../images/emoji-no.png';
import emoji_yes from '../../images/emoji-yes.png';

const EmojiFace = ({ isAnswerCorrect, isAnswerSelected }) => {
  const emojiURL = () => {
    if (isAnswerSelected && isAnswerCorrect) {
      return emoji_yes;
    } else if (isAnswerSelected && !isAnswerCorrect) {
      return emoji_no;
    } else {
      return emoji_thinck;
    }
  };
  return (
    <div className={s.thumb}>
      <img className={s.image} src={emojiURL()} alt="emoji" />
    </div>
  );
};

export default EmojiFace;
