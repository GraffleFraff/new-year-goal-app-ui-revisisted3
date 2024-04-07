import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmModal = ({ show, onClose, onConfirm, message }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header style={{ backgroundColor: "#e9ecef" }} closeButton>
        <Modal.Title>Confirm Action</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer style={{ borderTop: "none" }}>
        <Button variant="primary" onClick={onConfirm}>
          Yes
        </Button>
        <Button variant="outline-secondary" onClick={onClose}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
