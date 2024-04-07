import React from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const EditGoalModal = ({
  show,
  editingGoal,
  newGoalName,
  setNewGoalName,
  selectedFrequency,
  setSelectedFrequency,
  goalNameError,
  handleClose,
  handleSubmit,
}) => {
  // useEffect(() => {
  //   setSelectedFrequency(
  //     editingGoal &&
  //       goalNames[editingGoal.weekIndex][editingGoal.goalKey].frequency
  //   );
  // }, [editingGoal, goalNames, setSelectedFrequency]);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit {editingGoal.goalKey}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Name of Goal</Form.Label>
          <Form.Control
            type="text"
            value={newGoalName}
            onChange={(e) => setNewGoalName(e.target.value)}
            placeholder="Enter new goal name"
          />
          <Form.Group className="mb-3">
            <Form.Label>Frequency (times per week)</Form.Label>
            <Form.Select
              value={selectedFrequency}
              onChange={(e) => setSelectedFrequency(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
        {goalNameError && (
          <Alert variant="danger">Goal name cannot be empty.</Alert>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => handleSubmit(selectedFrequency)}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditGoalModal;
