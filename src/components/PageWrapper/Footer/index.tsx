import styles from './index.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`wrapper ${styles.footerContainer}`}>
      <p>Copyright © 2013 | bazinger | All Rights Reserved</p>
      <p>Terms of Service | Privacy Policy</p>
    </div>
  </footer>
);

export default Footer;
