import React from "react";
import logo from "./images/logo4.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul
      class="nav flex-column"
      style={{ height: "1100px", backgroundColor: "#F3F3F3" }}
    >
      <img src={logo} alt="Logo" style={{ width: "250px", height: "auto" }} />
      <li class="nav-item">
        <Link class="nav-link active" to="/">
          About
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to="/high-level-vision">
          High Level Vision
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to="/year-view">
          Goal Tracker
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
