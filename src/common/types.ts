export type GameObj = { name: string; img: string };
export type GameObjOrNull = GameObj | null;
export type VoidyFunction = () => void;
export type HandClickHandlerFunction = (userChoose: GameObjOrNull) => void;
