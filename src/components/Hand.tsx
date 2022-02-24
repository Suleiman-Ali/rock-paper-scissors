import { MouseEventHandler } from 'react';
import { GameObjOrNull } from '../common/types';

interface HandProps {
  handObj: GameObjOrNull;
  className?: string;
  clickHandler?: MouseEventHandler<HTMLDivElement>;
}

function Hand({ handObj, className, clickHandler }: HandProps): JSX.Element {
  return (
    <div className={className} onClick={clickHandler}>
      {handObj?.img}
    </div>
  );
}

export default Hand;
