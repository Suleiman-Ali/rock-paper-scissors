import Wrapper from './Wrapper';

interface ScoreProps {
  text: string;
  score: number;
  blockCls?: string;
  textCls?: string;
  scoreCls?: string;
}

function Score({
  text,
  score,
  blockCls,
  textCls,
  scoreCls,
}: ScoreProps): JSX.Element {
  return (
    <Wrapper className={blockCls}>
      <p className={textCls}>{text}</p>
      <p className={scoreCls}>{score}</p>
    </Wrapper>
  );
}

export default Score;
