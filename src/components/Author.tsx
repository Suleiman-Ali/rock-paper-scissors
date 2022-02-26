import styles from '../styles/Author.module.scss';
interface AuthorProps {
  name: string;
}

function Author({ name }: AuthorProps): JSX.Element {
  return (
    <p className={styles.author}>
      Designed and Coded by <span>&lt;{name} /&gt;</span>
    </p>
  );
}

export default Author;
