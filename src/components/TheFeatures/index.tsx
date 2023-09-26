import { title, subtitle, featuresList } from './index.config';
import styles from './index.module.css';

const TheFeatures = () => (
  <article className={styles.theFeatures}>
    <div className="wrapper">
      <div className="block-title-container">
        <h2 className={`block-title`}>{title}</h2>
        <h3 className={`block-subtitle`}>{subtitle}</h3>
      </div>
      <ul className={`list-type-reset ${styles.featuresList}`}>
        {featuresList.map((featureItem, idx) => (
          <li key={idx}>
            <div className={styles.featureIconBorder}>
              <img src={featureItem.icon} alt={featureItem.title} />
            </div>
            <h4>{featureItem.title}</h4>
            <p>{featureItem.text}</p>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default TheFeatures;
