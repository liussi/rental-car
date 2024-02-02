import React from 'react';
import PropTypes from 'prop-types';
import { ModalCloseButton, ModalContent, ModalOverlay } from './modal.styled';

const Modal = ({ isOpen, onClose, children, catalogData }) => {
  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>

            <div>
              <h2>
                {catalogData.make}, {catalogData.year}
              </h2>
              <p>Rental Price: {catalogData.rentalPrice}</p>
              <p>Address: {catalogData.address}</p>
              <p>Rental Company: {catalogData.rentalCompany}</p>
             <a href="tel:+380730000000">Rental car</a>

            </div>

            {children}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
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
    // Додайте решту ваших властивостей для детального відображення
  }).isRequired,
};

export default Modal;
