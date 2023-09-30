import ArrowIcon from '../../../../assets/icons/Arrow';
import styles from './index.module.css';

const CarouselArrow = ({
  direction,
  onClick,
  active,
}: {
  direction: 'right' | 'left';
  onClick: () => void;
  active: 'active' | 'inactive';
}) => (
  <button
    className={`${styles.arrow} ${styles[active]}`}
    type="button"
    onClick={onClick}
    disabled={active === 'active' ? false : true}
  >
    {direction === 'right' ? (
      <ArrowIcon color={active === 'active' ? '#414042' : '#FFFFFF'} />
    ) : (
      <ArrowIcon color={active === 'active' ? '#414042' : '#FFFFFF'} style={{ transform: 'rotate(180deg)' }} />
    )}
  </button>
);

export default CarouselArrow;
