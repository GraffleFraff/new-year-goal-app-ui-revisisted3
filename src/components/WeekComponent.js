import React, { useState } from "react";
import EditGoalModal from "./EditGoalModal";
import GoalComponent from "./GoalComponent";
import WeeklyJournalModal from "./WeeklyJournalModal";
import { Button, Card } from "react-bootstrap";
import PercentComponent from "./PercentComponent";
import ConfirmModal from "./ConfirmModal";

const WeekComponent = ({ goals, setGoals }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handleGoalSubmit = (submittedGoal) => {
    if (editingGoal) {
      // Update an existing goal
      setGoals(
        goals.map((goal) =>
          goal.id === submittedGoal.id ? submittedGoal : goal
        )
      );
    } else {
      // Add a new goal
      setGoals([...goals, { ...submittedGoal, id: Date.now() }]);
    }
    setIsModalVisible(false);
    setEditingGoal(null); // Reset after submission
  };

  const updateGoalStatus = (id, newStatus) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === id ? { ...goal, status: newStatus } : goal
    );
    setGoals(updatedGoals);
  };

  // edit goal updates
  const handleEditGoal = (goal) => {
    setEditingGoal(goal);
    setIsModalVisible(true);
  };

  const handleCloseEditingModal = () => {
    setIsModalVisible(false);
    setEditingGoal(null); // Reset edited goal to null when closing the modal
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
    setShowConfirmModal(false);
  };

  const handleConfirmDelete = () => {
    setShowConfirmModal(true);
  };

  // Weekly Journal needs some refactoring
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = () => {
    console.log("Submit journal entries");
    setShowModal(false);
  };
  const handleJournalClick = () => {
    setShowModal(true);
  };

  return (
    <Card>
      <Card.Header>
        <h5 className="d-flex justify-content-between align-items-center">
          List of Goals
          <div>
            <Button
              onClick={() => setIsModalVisible(true)}
              style={{ marginLeft: "10px" }}
            >
              Add Goal
            </Button>
            <Button
              onClick={handleJournalClick}
              variant="secondary"
              style={{ marginLeft: "10px" }}
            >
              Journal
            </Button>
          </div>
        </h5>
      </Card.Header>
      <Card.Body>
        {goals.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            You currently don't have any goals for this week.
            <br /> Get started by adding a new goal.
          </p>
        ) : (
          goals.map((goal) => (
            <GoalComponent
              key={goal.id}
              goal={goal}
              updateStatus={updateGoalStatus}
              onEdit={() => handleEditGoal(goal)}
              onDelete={() => handleConfirmDelete()}
            />
          ))
        )}
      </Card.Body>

      <Card.Footer>
        <PercentComponent goals={goals} />
      </Card.Footer>
      {isModalVisible && (
        <EditGoalModal
          show={isModalVisible}
          onHide={handleCloseEditingModal}
          onSubmit={handleGoalSubmit}
          editingGoal={editingGoal}
        />
      )}
      {goals.map((goal) => (
        <ConfirmModal
          show={showConfirmModal}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={() => handleDeleteGoal(goal.id)}
          message="Are you sure you want to delete this item?"
        />
      ))}

      <WeeklyJournalModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
      />
    </Card>
  );
};

export default WeekComponent;
