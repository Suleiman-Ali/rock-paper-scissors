import data, { PAPER, ROCK, SCISSORS } from './data';
import { GameObj } from './types';

export const renderIf = (
  condition: boolean,
  Component: JSX.Element
): JSX.Element | null => (condition ? Component : null);

export const getComputerChoise = (): GameObj =>
  data[Math.floor(Math.random() * 3)];

export const equals = (el1: any, el2: any): boolean => el1 === el2;

export const whoWon = (
  userChoise: GameObj | null,
  computerChoise: GameObj | null
): string => {
  if (!userChoise || !computerChoise) return '';

  if (equals(userChoise.name, computerChoise.name)) return 'DRAW';

  if (equals(userChoise.name, ROCK) && equals(computerChoise.name, SCISSORS))
    return 'USER';

  if (equals(userChoise.name, SCISSORS) && equals(computerChoise.name, PAPER))
    return 'USER';

  if (equals(userChoise.name, PAPER) && equals(computerChoise.name, ROCK))
    return 'USER';

  return 'COMPUTER';
};

export const getWonLastText = (winner: string): string => {
  if (winner === 'USER') return 'YOU WIN';
  if (winner === 'COMPUTER') return 'YOU LOSE';
  return 'DRAW';
};
