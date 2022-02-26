import { MouseEventHandler } from 'react';
import Button from './Button';
import styles from '../styles/QuestionMark.module.scss';

interface QuestionMarkProps {
  openRulesWindow: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  text: string;
}

function QuestionMark({
  openRulesWindow,
  title,
  text,
}: QuestionMarkProps): JSX.Element {
  return (
    <Button
      title={title}
      text={text}
      className={styles.questionMark}
      clickHandler={openRulesWindow}
    />
  );
}

export default QuestionMark;
