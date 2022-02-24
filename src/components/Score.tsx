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
    <div className={blockCls}>
      <p className={textCls}>{text}</p>
      <p className={scoreCls}>{score}</p>
    </div>
  );
}

export default Score;
