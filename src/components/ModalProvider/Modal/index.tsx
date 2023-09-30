import { useModal } from '../ModalProvider';
import styles from './index.module.css';

const Modal = ({ onClose }: { onClose: () => void }) => {
  const { closeModal } = useModal();
  return (
    <div className={styles.modal}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xqyUdNxWazA?si=sngaSfT6txMwx4kO"
        title="Introducing iPhone 15 Pro | Apple"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <button aria-label="Close iframe" onClick={() => closeModal()}></button>
    </div>
  );
};

export default Modal;
