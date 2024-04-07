import React from "react";

const PercentComponent = ({ goals }) => {
  const totalGoals = goals.length;
  const completedGoals = goals.filter(
    (goal) => goal.status === "completed"
  ).length;
  const completionPercentage =
    totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0;

  // Determine background color based on completion percentage
  const backgroundColor =
    completionPercentage === 100
      ? "green"
      : completionPercentage > 0
      ? "yellow"
      : "white";
  const color = completionPercentage === 100 ? "white" : "black"; // Change text color for better contrast on green background

  const style = {
    backgroundColor,
    color,
    padding: "5px",
    margin: "5px 0",
    borderRadius: "5px",
  };

  return (
    <div>
      <h6>
        Overall Completion:{" "}
        <span style={style}>{completionPercentage.toFixed(0)}%</span>
      </h6>
    </div>
  );
};

export default PercentComponent;
