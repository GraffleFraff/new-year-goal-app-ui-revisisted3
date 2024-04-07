import React from "react";
import { Card, Container } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            About
          </li>
        </ol>
      </nav>
      <Card>
        <Card.Header>
          <Card.Title>
            <h2 style={{ textAlign: "center" }}>About</h2>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Container>
            <h6>
              Goal Planner is an innovative, paperless planning solution
              tailored to meet all your goal-setting requirements for the 2024
              calendar year. This application facilitates seamless weekly goal
              planning, enabling you to meticulously set, track, and achieve
              your objectives with unparalleled ease. <br />
              <br />
              To get started, use the links in the sidebar to either craft your
              high level vision for the year or start tracking your weekly
              goals.
            </h6>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomePage;
