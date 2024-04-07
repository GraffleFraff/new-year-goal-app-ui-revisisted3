import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import WeekComponent from "./WeekComponent";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const ProgressComponent = () => {
  let { weekNumber } = useParams();
  weekNumber = parseInt(weekNumber, 10);
  const [currentWeek, setCurrentWeek] = useState(weekNumber);
  const [dateRange, setDateRange] = useState("");
  const [weeklyGoals, setWeeklyGoals] = useState({});
  const navigate = useNavigate(); // Get the navigate function;

  useEffect(() => {
    setDateRange(getDateRangeForWeek(weekNumber));
  }, [weekNumber]);

  function getDateRangeForWeek(weekNumber) {
    const startDate = new Date("12/31/2023");
    startDate.setDate(startDate.getDate() + (weekNumber - 1) * 7); // Adjust to the correct week
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6); // The end date of the week

    return `${
      startDate.getMonth() + 1
    }/${startDate.getDate()}/${startDate.getFullYear()} - ${
      endDate.getMonth() + 1
    }/${endDate.getDate()}/${endDate.getFullYear()}`;
  }

  const handleNextWeek = () => {
    const newWeek = currentWeek + 1;
    setCurrentWeek(newWeek);

    // Check if the next week's goals are already initialized
    if (!weeklyGoals[newWeek]) {
      setWeeklyGoals((prevGoals) => ({
        ...prevGoals,
        [newWeek]: prevGoals[currentWeek]
          ? prevGoals[currentWeek].map((goal) => ({
              ...goal,
              status: "not started",
            }))
          : [],
      }));
    }

    // Navigate to the new week
    navigate(`/week/${newWeek}`);
  };

  const handlePreviousWeek = () => {
    const newWeek = currentWeek - 1;
    if (newWeek > 0) {
      // Ensure the week number is positive
      setCurrentWeek(newWeek);

      // Optionally, handle weeklyGoals logic for previous week here

      // Navigate to the previous week
      navigate(`/week/${newWeek}`);
    }
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link class="nav-link active" to="/year-view">
              Year View
            </Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Week View
          </li>
        </ol>
      </nav>
      <Card className="mb-3">
        <Card.Header>
          {" "}
          <h2 style={{ textAlign: "center" }}>Week {currentWeek}</h2>
          <h3 style={{ textAlign: "center" }}>
            {currentWeek > 1 && (
              <Button onClick={handlePreviousWeek} variant="link">
                <ArrowLeft />
              </Button>
            )}
            {dateRange}{" "}
            <Button onClick={handleNextWeek} variant="link">
              <ArrowRight />
            </Button>
          </h3>
        </Card.Header>
        <Card.Body>
          <WeekComponent
            goals={weeklyGoals[currentWeek] || []}
            setGoals={(goals) =>
              setWeeklyGoals({ ...weeklyGoals, [currentWeek]: goals })
            }
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProgressComponent;
