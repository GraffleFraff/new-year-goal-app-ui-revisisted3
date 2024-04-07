import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const WeeklyJournalModal = ({
  show,
  selectedWeek,
  handleClose,
  handleSubmit,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Week {selectedWeek} Journal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>What went well</Form.Label>
            <Form.Control type="text" placeholder="Enter your thoughts" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>What didn't go well</Form.Label>
            <Form.Control type="text" placeholder="Enter your thoughts" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Are the goals you are setting in line with your high-level vision?
            </Form.Label>
            <Form.Control type="text" placeholder="Enter your thoughts" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              What adjustments could you make heading into the next week to help
              you accomplish your goals
            </Form.Label>
            <Form.Control type="text" placeholder="Enter your thoughts" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WeeklyJournalModal;
