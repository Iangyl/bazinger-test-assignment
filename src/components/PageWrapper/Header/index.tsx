import { useState } from 'react'; // Import useState
import { links } from './index.config';
import Logo from '../../Logo';
import styles from './index.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.navContainer}`}>
        <Logo />
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.close : ''}`}
          onClick={toggleMenu}
        >
          <span className={styles.burgerIcon}></span>
          <span className={styles.burgerIcon}></span>
          <span className={styles.burgerIcon}></span>
        </button>
        <ul
          className={`list-type-reset ${styles.navbar} ${
            isMenuOpen ? styles.openMenu : ''
          }`}
        >
          {links.map((item, idx) => (
            <li key={idx} className={styles.navbarItem}>
              <a className={styles.navbarItemLink} href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
