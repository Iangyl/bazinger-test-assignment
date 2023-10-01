import styles from './index.module.css';
import playIcon from '../../assets/icons/play.svg';
import { useModal } from '../ModalProvider/ModalProvider';
import useScreenSize from '../../hooks/useScreenSize';
import { useMemo } from 'react';

const TheTechInAction = () => {
  const { openModal } = useModal();
  const { width } = useScreenSize();

  const screen = useMemo(() => width <= 425 ? 'mobile' : 'notmobile', [width]);
  return (
    <section className={`${styles.theTechInAction} ${styles[screen]}`}>
      <div className={`wrapper ${styles.container}`}>
        <button
          type="button"
          className={styles.button}
          onClick={() => openModal()}
        >
          {playIcon ? <img src={playIcon} alt="" /> : 'Play'}
        </button>
        <h1>
          Watch the best Technology in <span>Action</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
          nunc vitae tellus luctus ullamcorper. Nam porttitor ullamcorper felis
          at convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam
          pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.
        </p>
      </div>
    </section>
  );
};

export default TheTechInAction;
