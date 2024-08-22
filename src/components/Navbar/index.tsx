import styles from './index.module.scss';

interface NavbarItem {
  label: string;
  path: string;
}

export default function Navbar() {
  const items: NavbarItem[] = [
    {
      label: 'Hjem',
      path: '#',
    },
    {
      label: 'Advokaterne',
      path: '#',
    },
    {
      label: 'Om Leo',
      path: '#',
    },
    {
      label: 'Kontakt',
      path: '#',
    },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarItems}>
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.path}>{item.label} |</a>
          </li>
        ))}
      </ul>

      <h1>
        <span className={styles.logo}>Leo</span>-<span>Lov</span>
      </h1>
    </nav>
  );
}
