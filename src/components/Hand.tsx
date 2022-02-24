import { GameObj } from '../common/types';

interface HandProps {
  handObj: GameObj | null;
  className?: string;
  handClickHandler?: (userChoose: GameObj | null) => void;
}

function Hand({
  handObj,
  className,
  handClickHandler,
}: HandProps): JSX.Element {
  return (
    <div
      className={className}
      onClick={() => (handClickHandler ? handClickHandler(handObj) : null)}
    >
      {handObj?.img}
    </div>
  );
}

export default Hand;
