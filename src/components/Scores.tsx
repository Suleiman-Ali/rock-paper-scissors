import Button from './Button';
import Score from './Score';
import styles from '../styles/Scores.module.scss';

interface ScoresProps {
  userScore: number;
  computerScore: number;
  scoreOneText: string;
  scoreTwoText: string;
  btnText: string;
  resetHandler: () => void;
}

function Scores({
  userScore,
  computerScore,
  scoreOneText,
  scoreTwoText,
  btnText,
  resetHandler,
}: ScoresProps): JSX.Element {
  return (
    <div className={styles.scores}>
      <Score
        text={scoreOneText}
        score={computerScore}
        blockCls={styles.scores__score}
        textCls={styles.scores__text}
        scoreCls={styles.scores__number}
      />
      <Button
        text={btnText}
        className={styles.scores__btn}
        clickHandler={() => resetHandler()}
      />
      <Score
        text={scoreTwoText}
        score={userScore}
        blockCls={styles.scores__score}
        textCls={styles.scores__text}
        scoreCls={styles.scores__number}
      />
    </div>
  );
}

export default Scores;
