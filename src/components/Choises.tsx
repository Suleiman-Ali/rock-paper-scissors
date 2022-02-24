import { GameObjOrNull } from '../common/types';
import Result from './Result';
import Wrapper from './Wrapper';
import HandBox from './HandBox';
import styles from '../styles/Choises.module.scss';

interface ChoisesProps {
  userChoise: GameObjOrNull;
  computerChoise: GameObjOrNull;
  winner: string;
  btnText: string;
  userPickText: string;
  housePickText: string;
  playAgianHandler: VoidFunction;
}

function Choises({
  userChoise,
  computerChoise,
  winner,
  btnText,
  housePickText,
  userPickText,
  playAgianHandler,
}: ChoisesProps): JSX.Element {
  return (
    <Wrapper className={styles.choises}>
      <Wrapper className={styles.handsBox}>
        <HandBox
          className={styles.handBox}
          handObj={computerChoise}
          text={housePickText}
          handCls={styles.handBox__hand}
          textCls={styles.handBox__text}
        />

        <HandBox
          className={styles.handBox}
          handObj={userChoise}
          text={userPickText}
          handCls={styles.handBox__hand}
          textCls={styles.handBox__text}
        />
      </Wrapper>

      <Result
        winner={winner}
        btnText={btnText}
        blockCls={styles.result}
        textCls={styles.result__text}
        btnCls={styles.result__btn}
        playAgianHandler={playAgianHandler}
      />
    </Wrapper>
  );
}

export default Choises;
