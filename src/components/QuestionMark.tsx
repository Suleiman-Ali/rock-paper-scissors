import { MouseEventHandler } from 'react';
import Button from './Button';

interface QuestionMarkProps {
  className: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
}

function QuestionMark({
  className,
  clickHandler,
}: QuestionMarkProps): JSX.Element {
  return (
    <Button
      title="Rules"
      text="❔"
      className={className}
      clickHandler={clickHandler}
    />
  );
}

export default QuestionMark;
