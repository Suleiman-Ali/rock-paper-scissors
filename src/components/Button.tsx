import { MouseEventHandler } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  clickHandler?: MouseEventHandler<HTMLDivElement>;
}

function Button({ text, className, clickHandler }: ButtonProps): JSX.Element {
  return (
    <div className={className} onClick={clickHandler}>
      {text}
    </div>
  );
}

export default Button;
