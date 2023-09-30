import styles from './index.module.css';

const CarouselIndicator = ({
  onClick,
  key,
  isSelected,
}: {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  key: number;
  isSelected: boolean;
}) => {
  const status = isSelected ? 'active' : 'inactive';
  return (
    <div
      onClick={onClick}
      key={key}
      className={`${styles.dot} ${styles[status]}`}
    ></div>
  );
};

export default CarouselIndicator;
