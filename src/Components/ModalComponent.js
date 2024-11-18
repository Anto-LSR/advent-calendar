import React from "react";
import Modal from "react-modal";

function ModalComponent({ isOpen, onClose, day }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Surprise du jour {day.day}</h2>
      <p>Ton contenu spécial ici !</p>
      <button onClick={onClose}>Fermer</button>
    </Modal>
  );
}

export default ModalComponent;
