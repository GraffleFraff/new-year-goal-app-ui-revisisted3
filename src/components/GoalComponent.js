import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const GoalComponent = ({ goal, updateStatus, onEdit, onDelete }) => {
  const dropdownStyle = {
    backgroundColor:
      goal.status === "in progress"
        ? "yellow"
        : goal.status === "completed"
        ? "green"
        : "white",
    color: goal.status === "completed" ? "white" : "black", // Optional: change text color for better contrast
  };

  const handleStatusChange = (newStatus) => {
    updateStatus(goal.id, newStatus);
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>Goal Name: {goal.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Frequency: {goal.frequency}
            </Card.Subtitle>
            <Button onClick={onEdit} variant="secondary">
              Edit Goal
            </Button>
            <Button
              variant="danger"
              onClick={onDelete}
              style={{ marginLeft: "10px" }}
            >
              Delete Goal
            </Button>
          </div>
          <Form.Group controlId="statusSelect" className="align-self-start">
            <Form.Select
              value={goal.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              style={dropdownStyle}
            >
              <option value="not started">Not Started</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GoalComponent;
