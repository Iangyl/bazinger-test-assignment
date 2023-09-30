import { useState, useCallback, createContext, useContext } from 'react';
import ModalContainer from './ModalContainer';

const ModalContext = createContext<{
  openModal: () => void;
  closeModal: () => void;
} | null>(null);

const ModalProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <ModalContainer isOpen={isOpen} onClose={closeModal} />
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext)!;

export default ModalProvider;
