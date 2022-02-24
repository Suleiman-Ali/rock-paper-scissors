import Button from './Button';

interface ResultProps {
  winner: string;
  btnText: string;
  blockCls?: string;
  textCls?: string;
  btnCls?: string;
  playAgianHandler: () => void;
}

// prettier-ignore
function Result({ winner, btnText, blockCls, textCls, btnCls, playAgianHandler }: ResultProps): JSX.Element {
  return (
    <div className={blockCls}>
      <p className={textCls}>{winner}</p>
      <Button className={btnCls} text={btnText} clickHandler={() => playAgianHandler()}  />
    </div>
  );
}

export default Result;
