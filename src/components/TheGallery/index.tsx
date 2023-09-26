import { useState } from 'react';
import {
  title,
  subtitle,
  galleryList,
  activeScreenShot,
  inActiveScreenShot,
} from './index.config';

import plusIcon from '../../assets/icons/plus.svg';
import styles from './index.module.css';

const TheGallery = () => {
  const [pictures, setPictures] = useState(galleryList);

  const handleOnMouseOverAction = (idx: number) => {
    const newPictures = [...pictures];
    newPictures[idx].isActive = true;
    setPictures(newPictures);
  };

  const handleOnMouseOutAction = (idx: number) => {
    const newPictures = [...pictures];
    newPictures[idx].isActive = false;
    setPictures(newPictures);
  };

  return (
    <article className={styles.theGallery}>
      <div className="wrapper">
        <div className="block-title-container">
          <h2 className={`block-title`}>{title}</h2>
          <h3 className={`block-subtitle`}>{subtitle}</h3>
        </div>
        <ul className={`list-type-reset ${styles.galleryList}`}>
          {galleryList.map((galleryItem, idx) => (
            <li key={idx}>
              <figure>
                <img
                  onMouseOver={() => handleOnMouseOverAction(idx)}
                  onMouseOut={() => handleOnMouseOutAction(idx)}
                  className={styles.img}
                  src={
                    galleryItem.isActive ? activeScreenShot : inActiveScreenShot
                  }
                  alt={galleryItem.title}
                />
                {galleryItem.isActive && (
                  <img className={styles.plus} src={plusIcon} alt="plus" />
                )}
                <figcaption className={styles.caption}>
                  {galleryItem.title}
                </figcaption>
              </figure>
              <p>{galleryItem.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default TheGallery;
