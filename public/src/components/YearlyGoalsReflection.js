import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";

const YearlyGoalsReflection = () => {
  const [reflection, setReflection] = useState("");
  const [vision, setVision] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    console.log("Reflection:", reflection);
    console.log("Vision for 2024:", vision);
    // Here, you might want to do something with the reflection and vision data, like saving it to a server
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Text>
            Take a moment to write a reflection on the year 2023. What went
            well? What do you wish had gone better?
          </Form.Text>
          <Form.Control
            as="textarea"
            rows={3}
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="Write your reflection on the year 2023"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Text>
            After reflecting on the year 2023, craft your high-level vision for
            the year 2024. How would you like to grow? What would you like to
            improve?
          </Form.Text>
          <Form.Control
            as="textarea"
            rows={3}
            value={vision}
            onChange={(e) => setVision(e.target.value)}
            placeholder="Write your high-level vision for 2024"
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default YearlyGoalsReflection;
