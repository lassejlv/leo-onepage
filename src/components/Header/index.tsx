import styles from './index.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <h1>
          <span className={styles.logo}>Leo</span>-<span>Lov</span>
        </h1>
      </h1>
    </header>
  );
}
