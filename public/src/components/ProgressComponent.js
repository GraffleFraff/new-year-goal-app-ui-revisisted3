import { Accordion, Card, Button } from "react-bootstrap";
import React, { useState } from "react";
import WeeklyJournalModal from "./WeeklyJournalModal";

import EditGoalModal from "./EditGoalModal";
import DailyGoalsTable from "./DailyGoalsTableComponent";

function ProgressComponent() {
  const weeksInYear = 52;
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [goalNames, setGoalNames] = useState(
    Array.from({ length: weeksInYear }, () => ({
      goal1: { name: "Goal 1", frequency: 7 },
      goal2: { name: "Goal 2", frequency: 7 },
      goal3: { name: "Goal 3", frequency: 7 },
    }))
  );

  const [showModal, setShowModal] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [activeKey, setActiveKey] = useState(null);
  const [checkboxStates, setCheckboxStates] = useState(
    Array.from({ length: weeksInYear }, () =>
      Array.from({ length: daysOfWeek.length }, () => ({
        goal1: false,
        goal2: false,
        goal3: false,
      }))
    )
  );
  const [selectedFrequency, setSelectedFrequency] = useState(7);
  const [goalNameError, setGoalNameError] = useState(false);

  const handleJournalClick = (week) => {
    setSelectedWeek(week);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    console.log("Submit journal entries");
    setShowModal(false);
  };

  const handlePencilClick = (weekIndex, goalKey) => {
    setEditingGoal({ weekIndex, goalKey });
    setNewGoalName("");
    setShowEditGoalModal(true);
  };

  const handleCheckboxChange = (weekIndex, dayIndex, goal, value) => {
    const updatedWeek = [...checkboxStates[weekIndex]];
    updatedWeek[dayIndex] = { ...updatedWeek[dayIndex], [goal]: value };
    const updatedStates = [...checkboxStates];
    updatedStates[weekIndex] = updatedWeek;
    setCheckboxStates(updatedStates);
  };

  const calculateProgress = (weekIndex, goalKey) => {
    const goalFrequency = goalNames[weekIndex][goalKey].frequency;
    const checkedCount = checkboxStates[weekIndex].filter(
      (day) => day[goalKey]
    ).length;
    if (checkedCount === 0) return 0;
    return Math.round((checkedCount / goalFrequency) * 100);
  };

  const [showEditGoalModal, setShowEditGoalModal] = useState(false);
  const [editingGoal, setEditingGoal] = useState({
    weekIndex: null,
    goalKey: "",
  });
  const [newGoalName, setNewGoalName] = useState("");

  const handleSubmitNewGoalName = () => {
    // Check if the new goal name is empty or consists only of whitespaces
    if (!newGoalName.trim()) {
      setGoalNameError(true); // Show error
      return; // Prevent further execution
    }
    setGoalNameError(false); // Reset error state on successful validation

    // Proceed with updating the goal name assuming the structure is as previously discussed
    const updatedGoalNames = [...goalNames];
    const goalKeyFormatted = editingGoal.goalKey.replace(" ", "").toLowerCase();
    updatedGoalNames[editingGoal.weekIndex] = {
      ...updatedGoalNames[editingGoal.weekIndex],
      [goalKeyFormatted]: {
        name: newGoalName,
        frequency: selectedFrequency,
      },
    };
    setGoalNames(updatedGoalNames);
    setShowEditGoalModal(false); // Close the modal upon successful submission
  };

  // console.log("Checkbox States:", checkboxStates);

  const renderDailyTable = (weekIndex) => (
    <DailyGoalsTable
      daysOfWeek={daysOfWeek}
      checkboxStates={checkboxStates}
      weekIndex={weekIndex}
      goalNames={goalNames[weekIndex]}
      handleCheckboxChange={handleCheckboxChange}
      handlePencilClick={handlePencilClick}
      calculateProgress={calculateProgress}
    />
  );

  const calculateOverallProgress = (weekIndex) => {
    const goals = ["goal1", "goal2", "goal3"]; // Adjust based on your goals
    const progressSum = goals.reduce((sum, goalKey) => {
      const progress = calculateProgress(weekIndex, goalKey);
      return sum + progress;
    }, 0);
    const averageProgress = progressSum / goals.length;
    return averageProgress.toFixed(2); // Rounds to 2 decimal places for display
  };

  return (
    <div>
      <Accordion activeKey={activeKey}>
        {Array.from({ length: weeksInYear }).map((_, i) => (
          <Card key={i}>
            <Accordion.Header
              as={Card.Header}
              eventKey={String(i)}
              onClick={() =>
                setActiveKey(activeKey === String(i) ? null : String(i))
              }
            >
              <div>
                Week {i + 1} -{" "}
                <span
                  style={{
                    backgroundColor:
                      calculateOverallProgress(i) < 50
                        ? "red"
                        : calculateOverallProgress(i) < 100
                        ? "yellow"
                        : "green",
                    padding: "0.25em 0.5em",
                    borderRadius: "0.25em",
                  }}
                >
                  {calculateOverallProgress(i)}%
                </span>
              </div>
            </Accordion.Header>
            <Accordion.Collapse eventKey={String(i)}>
              <Card.Body>
                {renderDailyTable(i)}
                <Button
                  className="btn btn-primary"
                  onClick={(e) => handleJournalClick(i + 1, e)}
                  variant="secondary"
                >
                  End of Week Journal
                </Button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      <WeeklyJournalModal
        show={showModal}
        selectedWeek={selectedWeek}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
      />
      <EditGoalModal
        show={showEditGoalModal}
        editingGoal={editingGoal}
        newGoalName={newGoalName}
        setNewGoalName={setNewGoalName}
        selectedFrequency={selectedFrequency}
        setSelectedFrequency={setSelectedFrequency}
        goalNameError={goalNameError}
        handleClose={() => setShowEditGoalModal(false)}
        handleSubmit={handleSubmitNewGoalName}
      />
    </div>
  );
}

export default ProgressComponent;
