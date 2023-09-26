import { links } from './index.config';
import Logo from '../../Logo';
import styles from './index.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={`wrapper ${styles.navContainer}`}>
      <Logo />
      <ul className={`list-type-reset ${styles.navbar}`}>
        {links.map((item, idx) => (
          <li key={idx} className={styles.navbarItem}>
            <a className={styles.navbarItemLink} href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </header>
);

export default Header;
