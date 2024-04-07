import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProgressComponent from "./components/ProgressComponent";
import YearlyGoalsReflection from "./components/YearlyGoalsReflection";
import YearlyViewComponent from "./components/YearViewComponent";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
            paddingTop: "20px",
            paddingLeft: "25px",
            paddingRight: "100px",
          }}
        >
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route
              path="/high-level-vision"
              element={<YearlyGoalsReflection />}
            />
            <Route path="/year-view" element={<YearlyViewComponent />} />
            <Route path="/week/:weekNumber" element={<ProgressComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
