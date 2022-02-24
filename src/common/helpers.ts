import data, { PAPER, ROCK, SCISSORS, USER, COMPUTER, DRAW } from './data';
import { GameObjOrNull, GameObj } from './types';

export const renderIf = (
  condition: boolean,
  Component: JSX.Element
): JSX.Element | null => (condition ? Component : null);

export const getComputerChoise = (): GameObj =>
  data[Math.floor(Math.random() * 3)];

export const equals = (el1: any, el2: any): boolean => el1 === el2;

export const whoWon = (
  userChoise: GameObjOrNull,
  computerChoise: GameObjOrNull
): string => {
  if (!userChoise || !computerChoise) return '';

  if (equals(userChoise.name, computerChoise.name)) return DRAW;

  if (equals(userChoise.name, ROCK) && equals(computerChoise.name, SCISSORS))
    return USER;

  if (equals(userChoise.name, SCISSORS) && equals(computerChoise.name, PAPER))
    return USER;

  if (equals(userChoise.name, PAPER) && equals(computerChoise.name, ROCK))
    return USER;

  return COMPUTER;
};

export const getWonLastText = (winner: string): string => {
  if (equals(winner, USER)) return 'YOU WIN';
  if (equals(winner, COMPUTER)) return 'YOU LOSE';
  return DRAW;
};
