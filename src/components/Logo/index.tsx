import signal from '../../assets/icons/signal.svg';
import styles from './index.module.css';

const Logo = () => (
  <div className={styles.logoContainer}>
    <img className={styles.signal} src={signal} alt='signal' />
    <h1 className={styles.name}>
      <span>ba</span>
      <span>zinger</span>
    </h1>
  </div>
);

export default Logo;
