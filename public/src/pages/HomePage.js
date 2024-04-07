import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs } from "react-bootstrap";
import ProgressComponent from "../components/ProgressComponent";
import YearlyGoalsReflection from "../components/YearlyGoalsReflection"; // Adjust the path as

function HomePage() {
  return (
    <div className="container mt-5">
      <h1>2024 Goal Planner</h1>
      <Tabs
        defaultActiveKey="goals"
        id="goal-planner-tabs"
        className="mb-3"
        justify
      >
        <Tab eventKey="goals" title="High Level Vision">
          <YearlyGoalsReflection />
        </Tab>
        <Tab eventKey="progress" title="Weekly Goal Progress">
          <ProgressComponent />
        </Tab>
      </Tabs>
    </div>
  );
}

export default HomePage;
