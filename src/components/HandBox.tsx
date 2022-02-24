import { GameObjOrNull } from '../common/types';
import Hand from './Hand';
import Wrapper from './Wrapper';

interface HandBoxProps {
  className: string;
  handObj: GameObjOrNull;
  text: string;
  handCls: string;
  textCls: string;
}

function HandBox({
  handObj,
  text,
  handCls,
  textCls,
  className,
}: HandBoxProps): JSX.Element {
  return (
    <Wrapper className={className}>
      <Hand handObj={handObj} className={handCls} />
      <p className={textCls}>{text}</p>
    </Wrapper>
  );
}

export default HandBox;
