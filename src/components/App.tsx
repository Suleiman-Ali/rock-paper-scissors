import { useState } from 'react';
import { GameObj } from '../common/types';
import {
  getComputerChoise,
  getWonLastText,
  renderIf,
  whoWon,
} from '../common/helpers';
import data, {
  choisesBtnText,
  choisesLeftText,
  choisesRightText,
  scoreBtnText,
  scoreLeftText,
  scoreRightText,
} from '../common/data';
import Choises from './Choises';
import Hands from './Hands';
import Scores from './Scores';

function App(): JSX.Element {
  const [computerChoise, setComputerChoise] = useState<GameObj | null>(null);
  const [userChoise, setUserChoise] = useState<GameObj | null>(null);

  const [userScore, setUserScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);

  const [wating, setWating] = useState<boolean>(true);
  const [wonLast, setWonLast] = useState<string>('');

  const handClickHandler = (userChoose: GameObj | null): void => {
    const computerChoose = getComputerChoise();
    const won = whoWon(userChoose, computerChoose);

    setComputerChoise(computerChoose);
    setUserChoise(userChoose);

    if (won === 'USER') setUserScore((us) => us + 1);
    if (won === 'COMPUTER') setComputerScore((cs) => cs + 1);

    setWonLast(getWonLastText(won));

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
    <div className="app">
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
    </div>
  );
}

export default App;

// TODO REFACTOR
