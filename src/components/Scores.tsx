import Button from './Button';
import Score from './Score';
import Wrapper from './Wrapper';
import styles from '../styles/Scores.module.scss';

interface ScoresProps {
  userScore: number;
  computerScore: number;
  scoreOneText: string;
  scoreTwoText: string;
  btnText: string;
  resetHandler: VoidFunction;
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
    <Wrapper className={styles.scores}>
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
    </Wrapper>
  );
}

export default Scores;
