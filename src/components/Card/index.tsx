import styles from './index.module.scss';

interface Props {
  title: string;
  description: string;
}

export default function Card({ title, description }: Props) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.description}>{description}</p>
    </div>
  );
}
