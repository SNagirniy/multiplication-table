import s from './emoji.module.css';
import emoji_thinck from '../../images/emoji-thinck.png';
import emoji_no from '../../images/emoji-no.png';
import emoji_yes from '../../images/emoji-yes.png';
const EmojiFace = ({ isAnswerCorrect, isAnswerSelected }) => {
  return (
    <>
      {!isAnswerSelected && (
        <div className={s.thumb}>
          <img className={s.image} src={emoji_thinck} alt="thinkcing emoji" />
        </div>
      )}
      {isAnswerSelected && !isAnswerCorrect && (
        <div className={s.thumb}>
          <img className={s.image} src={emoji_no} alt="sad emoji" />
        </div>
      )}
      {isAnswerSelected && isAnswerCorrect && (
        <div className={s.thumb}>
          <img className={s.image} src={emoji_yes} alt="happy emoji" />
        </div>
      )}
    </>
  );
};

export default EmojiFace;
