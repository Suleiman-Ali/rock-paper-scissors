import { MouseEventHandler } from 'react';
import Logo from '../imgs/image-rules.svg';
import Button from './Button';

interface RulesProps {
  className: string;
  clickHandler: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

function Rules({ className, clickHandler }: RulesProps): JSX.Element {
  return (
    <div className={className} onClick={clickHandler}>
      <img src={Logo} alt="" />
      <Button text="❌" clickHandler={clickHandler} />
    </div>
  );
}

export default Rules;
