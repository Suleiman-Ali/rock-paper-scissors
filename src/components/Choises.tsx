import { GameObj } from '../common/types';
import Hand from './Hand';
import Result from './Result';
import styles from '../styles/Choises.module.scss';

interface ChoisesProps {
  userChoise: GameObj | null;
  computerChoise: GameObj | null;
  winner: string;
  btnText: string;
  userPickText: string;
  housePickText: string;
  playAgianHandler: () => void;
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
    <div className={styles.choises}>
      <div className={styles.handsBox}>
        <div className={styles.handBox}>
          <Hand handObj={computerChoise} className={styles.handBox__hand} />
          <p className={styles.handBox__text}>{housePickText}</p>
        </div>

        <div className={styles.handBox}>
          <Hand handObj={userChoise} className={styles.handBox__hand} />
          <p className={styles.handBox__text}>{userPickText}</p>
        </div>
      </div>

      <Result
        winner={winner}
        btnText={btnText}
        blockCls={styles.result}
        textCls={styles.result__text}
        btnCls={styles.result__btn}
        playAgianHandler={playAgianHandler}
      />
    </div>
  );
}

export default Choises;
