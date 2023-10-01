import useScreenSize from '../../../../hooks/useScreenSize';

import appleIcon from '../../../../assets/icons/apple.svg';
import androidIcon from '../../../../assets/icons/android.svg';
import picture from '../../../../assets/pictures/banner-pic.png';
import pictureVertical from '../../../../assets/pictures/banner-pic-vertical.jpg';

import styles from './index.module.css';

const CarouselItem = ({ title, idx }: { title?: string; idx?: number }) => {
  const { width } = useScreenSize();
  return (
    <div className={styles.carouselItem}>
      <img src={width <= 425 ? pictureVertical : picture} alt="" />
      <div className={styles.container}>
        {title && idx ? (
          <>
            <h1>
              {title} <span>{idx.toString()}</span>
            </h1>
          </>
        ) : (
          <>
            <h1>
              Simple, Beautiful <span>and Amazing</span>
            </h1>
          </>
        )}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc
          vitae tellus luctus ullamcorper. Nam porttitor ullamcorper felis at
          convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam
          pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.
        </p>
        <div className={styles.btnContainer}>
          <button type="button">download</button>
          <button type="button">learn more</button>
        </div>
        <div className={styles.linkContainer}>
          <span>Available on:</span>
          <div>
            <img src={appleIcon} alt="apple" />
          </div>
          <div>
            <img src={androidIcon} alt="android" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
