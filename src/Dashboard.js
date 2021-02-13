import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-header">
      <ul className="dashboard-list-header">
        <li className="dashboard-list">Home Page</li>
        <li className="dashboard-list">Dashboard</li>
        <li className="dashboard-list">Charts</li>
        <li className="dashboard-list">Tables</li>
        <li className="dashboard-list">Posts</li>
        <li className="dashboard-list">Link</li>
        <li className="dashboard-list">About Us</li>
        <li className="dashboard-list">Contact Us</li>
      </ul>
    </div>
  );
}
