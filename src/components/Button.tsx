import { MouseEventHandler } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ text, className, clickHandler }: ButtonProps): JSX.Element {
  return (
    <button className={className} onClick={clickHandler}>
      {text}
    </button>
  );
}

export default Button;
