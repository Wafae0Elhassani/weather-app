import React from "react";
import Modal from "react-modal";
import "./Modal.css";

const LocationNotFoundModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Location Not Found"
      className="custom-modal"
      overlayClassName="custom-modal-overlay"
    >
      <div className="modal-content">
        <h2>Location Not Found</h2>
        <p>Please enter a valid location.</p>
        <button onClick={onRequestClose} className="modal-close-button">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default LocationNotFoundModal;
