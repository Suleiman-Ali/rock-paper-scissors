import { GameObj, HandClickHandlerFunction } from '../common/types';
import Hand from './Hand';
import Wrapper from './Wrapper';
import styles from '../styles/Hands.module.scss';

interface HandsProps {
  handObjects: GameObj[];
  handClickHandler: HandClickHandlerFunction;
}

function Hands({ handObjects, handClickHandler }: HandsProps): JSX.Element {
  const hands = handObjects.map(
    (hand): JSX.Element => (
      <Hand
        key={hand.name}
        handObj={hand}
        className={styles.hands__hand}
        clickHandler={() => handClickHandler(hand)}
      />
    )
  );

  return <Wrapper className={styles.hands}>{hands}</Wrapper>;
}

export default Hands;
