import { useState, MouseEvent } from 'react';
import { GameObjOrNull } from '../common/types';
import {
  equals,
  getComputerChoise,
  getWonLastText,
  renderIf,
  whoWon,
} from '../common/helpers';
import data, {
  AUTHOR_NAME,
  COMPUTER,
  QUESTION_MARK_TEXT,
  QUESTION_MARK_TITLE,
  USER,
  CHOISES_LEFT_TEXT,
  CHOISES_RIGHT_TEXT,
  CHOISES_BTN_TEXT,
  SCORE_LEFT_TEXT,
  SCOERE_BTN_TEXT,
  SCORE_RIGHT_TEXT,
  X_MARK,
} from '../common/data';
import Choises from './Choises';
import Hands from './Hands';
import Scores from './Scores';
import Wrapper from './Wrapper';
import Author from './Author';
import QuestionMark from './QuestionMark';
import Rules from './Rules';
import styles from '../styles/App.module.scss';

function App(): JSX.Element {
  const [computerChoise, setComputerChoise] = useState<GameObjOrNull>(null);
  const [userChoise, setUserChoise] = useState<GameObjOrNull>(null);
  const [userScore, setUserScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [wating, setWating] = useState<boolean>(true);
  const [wonLast, setWonLast] = useState<string>('');
  const [isRules, setIsRules] = useState<boolean>(false);

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

  const toggleRules = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    setIsRules((isRules) => !isRules);
  };

  return (
    <>
      {renderIf(
        isRules,
        <Rules closeRulesWindow={toggleRules} btnText={X_MARK} />
      )}

      <Wrapper className={styles.app}>
        <Scores
          userScore={userScore}
          computerScore={computerScore}
          scoreOneText={SCORE_LEFT_TEXT}
          scoreTwoText={SCORE_RIGHT_TEXT}
          btnText={SCOERE_BTN_TEXT}
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
            btnText={CHOISES_BTN_TEXT}
            housePickText={CHOISES_LEFT_TEXT}
            userPickText={CHOISES_RIGHT_TEXT}
            playAgianHandler={playAgianHandler}
          />
        )}
      </Wrapper>

      <Author name={AUTHOR_NAME} />

      <QuestionMark
        title={QUESTION_MARK_TITLE}
        text={QUESTION_MARK_TEXT}
        openRulesWindow={toggleRules}
      />
    </>
  );
}

export default App;
