import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Modal';

import styles from './index.module.css';

const ModalContainer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#root');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div
          className={`${styles.container} ${
            isOpen ? styles.open : styles.close
          }`}
        >
          {isOpen && <Modal onClose={onClose} />}
        </div>,
        document.body
      )
    : null;
};

export default ModalContainer;
