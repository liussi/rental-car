import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ModalCloseButton, ModalContent, ModalOverlay } from './modal.styled';
import ModalCard from 'components/ModalCard/modalCard';

const Modal = ({ isOpen, onClose, children, catalogData }) => {
  
    useEffect(() => {
    const handleEscKeyPress = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
    if (!isOpen) return null;
 
      return ReactDOM.createPortal(  
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContent>
            <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
            <ModalCard catalogData={ catalogData} />
            {children}
          </ModalContent>
        </ModalOverlay>,
          document.body
  )
      

};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  catalogData: PropTypes.shape({
    make: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
