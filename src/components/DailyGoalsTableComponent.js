import React from "react";
import { Table, Form } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";

const DailyGoalsTable = ({
  daysOfWeek,
  checkboxStates,
  weekIndex,
  handleCheckboxChange,
  handlePencilClick,
  calculateProgress,
  goalNames,
}) => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Day</th>
          <th>
            {goalNames.goal1.name} <br />
            {goalNames.goal1.frequency}x a week
            <PencilSquare
              onClick={() => handlePencilClick(weekIndex, "Goal 1")}
              style={{ cursor: "pointer", marginLeft: "5px" }}
            />
          </th>
          <th>
            {goalNames.goal2.name} <br />
            {goalNames.goal2.frequency}x a week
            <PencilSquare
              onClick={() => handlePencilClick(weekIndex, "Goal 2")}
              style={{ cursor: "pointer", marginLeft: "5px" }}
            />
          </th>
          <th>
            {goalNames.goal3.name} <br />
            {goalNames.goal1.frequency}x a week
            <PencilSquare
              onClick={() => handlePencilClick(weekIndex, "Goal 3")}
              style={{ cursor: "pointer", marginLeft: "5px" }}
            />
          </th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {daysOfWeek.map((day, dayIndex) => (
          <tr key={day}>
            <td>{day}</td>
            <td>
              <Form.Check
                type="checkbox"
                checked={checkboxStates[weekIndex][dayIndex].goal1}
                onChange={(e) =>
                  handleCheckboxChange(
                    weekIndex,
                    dayIndex,
                    "goal1",
                    e.target.checked
                  )
                }
              />
            </td>
            <td>
              <Form.Check
                type="checkbox"
                checked={checkboxStates[weekIndex][dayIndex].goal2}
                onChange={(e) =>
                  handleCheckboxChange(
                    weekIndex,
                    dayIndex,
                    "goal2",
                    e.target.checked
                  )
                }
              />
            </td>
            <td>
              <Form.Check
                type="checkbox"
                checked={checkboxStates[weekIndex][dayIndex].goal3}
                onChange={(e) =>
                  handleCheckboxChange(
                    weekIndex,
                    dayIndex,
                    "goal3",
                    e.target.checked
                  )
                }
              />
            </td>
            <td>
              <Form.Control type="text" placeholder="Notes" />
            </td>
          </tr>
        ))}
        <tr>
          <td>Progress</td>
          <td>{calculateProgress(weekIndex, "goal1")}%</td>
          <td>{calculateProgress(weekIndex, "goal2")}%</td>
          <td>{calculateProgress(weekIndex, "goal3")}%</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DailyGoalsTable;
