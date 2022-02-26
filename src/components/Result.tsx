import Button from './Button';
import Wrapper from './Wrapper';

interface ResultProps {
  winner: string;
  btnText: string;
  blockCls?: string;
  textCls?: string;
  btnCls?: string;
  playAgianHandler: VoidFunction;
}

// prettier-ignore
function Result({ winner, btnText, blockCls, textCls, btnCls, playAgianHandler }: ResultProps): JSX.Element {
  return (
    <Wrapper className={blockCls}>
      <p className={textCls}>{winner}</p>
      <Button className={btnCls} text={btnText} clickHandler={playAgianHandler}  />
    </Wrapper>
  );
}

export default Result;
