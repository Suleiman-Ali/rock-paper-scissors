import { MouseEventHandler } from 'react';
import Logo from '../imgs/image-rules.svg';
import Button from './Button';
import styles from '../styles/Rules.module.scss';

interface RulesProps {
  closeRulesWindow: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  btnText: string;
}

function Rules({ closeRulesWindow, btnText }: RulesProps): JSX.Element {
  return (
    <div className={styles.rules} onClick={closeRulesWindow}>
      <img src={Logo} alt="" />
      <Button text={btnText} clickHandler={closeRulesWindow} />
    </div>
  );
}

export default Rules;
