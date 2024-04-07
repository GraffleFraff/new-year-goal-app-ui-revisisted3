import React from "react";
import { Link } from "react-router-dom";
import { eachWeekOfInterval, format } from "date-fns";
import { Card } from "react-bootstrap";

const YearViewComponent = () => {
  const yearStart = new Date("12/31/2023");
  const yearEnd = new Date("12/28/2024");

  const weeks = eachWeekOfInterval({
    start: yearStart,
    end: yearEnd,
  });

  const columns = [[], [], [], []]; // For 4 columns
  weeks.forEach((week, index) => {
    const columnIndex = Math.floor(index / 13); // Determine the column index
    columns[columnIndex].push(week);
  });

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            Year View
          </li>
        </ol>
      </nav>
      <Card>
        <Card.Header>
          <Card.Title>
            <h2 style={{ textAlign: "center" }}>Year View</h2>
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            Select the week you'd like to set your goals for.
          </Card.Text>
        </Card.Header>
        <Card.Body>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {columns.map((column, index) => (
              <div key={index}>
                {column.map((week, weekIndex) => (
                  <div key={weekIndex}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/week/${weekIndex + 1 + index * 13}`}
                    >
                      Week {weekIndex + 1 + index * 13}
                    </Link>
                    <div>
                      {format(week, "MM/dd/yyyy")} -{" "}
                      {format(
                        new Date(week.getTime() + 6 * 24 * 60 * 60 * 1000),
                        "MM/dd/yyyy"
                      )}
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default YearViewComponent;
