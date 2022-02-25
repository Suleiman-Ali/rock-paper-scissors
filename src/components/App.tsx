import { useState } from 'react';
import { GameObjOrNull } from '../common/types';
import {
  equals,
  getComputerChoise,
  getWonLastText,
  renderIf,
  whoWon,
} from '../common/helpers';
import data, {
  choisesBtnText,
  choisesLeftText,
  choisesRightText,
  COMPUTER,
  scoreBtnText,
  scoreLeftText,
  scoreRightText,
  USER,
} from '../common/data';
import Choises from './Choises';
import Hands from './Hands';
import Scores from './Scores';
import Wrapper from './Wrapper';
import Author from './Author';

function App(): JSX.Element {
  const [computerChoise, setComputerChoise] = useState<GameObjOrNull>(null);
  const [userChoise, setUserChoise] = useState<GameObjOrNull>(null);
  const [userScore, setUserScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [wating, setWating] = useState<boolean>(true);
  const [wonLast, setWonLast] = useState<string>('');

  const handClickHandler = (userChoose: GameObjOrNull): void => {
    const computerChoose = getComputerChoise();
    const winner = whoWon(userChoose, computerChoose);

    setComputerChoise(computerChoose);
    setUserChoise(userChoose);

    if (equals(winner, USER)) setUserScore((userScore) => userScore + 1);
    if (equals(winner, COMPUTER))
      setComputerScore((computerScore) => computerScore + 1);

    setWonLast(getWonLastText(winner));

    setWating((wating) => !wating);
  };

  const playAgianHandler = (): void => {
    setComputerChoise(null);
    setUserChoise(null);
    setWonLast('');
    setWating((wating) => !wating);
  };

  const resetHandler = (): void => {
    setUserChoise(null);
    setComputerChoise(null);
    setUserScore(0);
    setComputerScore(0);
    setWonLast('');
    setWating(true);
  };

  return (
    <>
      <Wrapper className="app">
        <Scores
          userScore={userScore}
          computerScore={computerScore}
          scoreOneText={scoreLeftText}
          scoreTwoText={scoreRightText}
          btnText={scoreBtnText}
          resetHandler={resetHandler}
        />
        {renderIf(
          wating,
          <Hands handObjects={data} handClickHandler={handClickHandler} />
        )}
        {renderIf(
          !wating,
          <Choises
            winner={wonLast}
            userChoise={userChoise}
            computerChoise={computerChoise}
            btnText={choisesBtnText}
            housePickText={choisesLeftText}
            userPickText={choisesRightText}
            playAgianHandler={playAgianHandler}
          />
        )}
      </Wrapper>
      <Author name="Suleiman Ali" className="author" />
    </>
  );
}

export default App;

// TODO ADD RULES PAGE
// TODO REFACTOR Functionality
// TODO REFACTOR STYLEING
