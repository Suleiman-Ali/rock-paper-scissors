import { GameObj } from '../common/types';
import Hand from './Hand';
import styles from '../styles/Hands.module.scss';
interface HandsProps {
  handObjects: GameObj[];
  handClickHandler: (userChoose: GameObj | null) => void;
}

function Hands({ handObjects, handClickHandler }: HandsProps): JSX.Element {
  const hands = handObjects.map(
    (hand): JSX.Element => (
      <Hand
        key={hand.name}
        handObj={hand}
        className={styles.hands__hand}
        handClickHandler={handClickHandler}
      />
    )
  );

  return <div className={styles.hands}>{hands}</div>;
}

export default Hands;
