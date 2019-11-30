import React from "react";
import '../../Styles/Dashboard.css';
import Navbar from "./Navbar";
import AboutItems from "./AboutItems";
import ChartItems from "./ChartItems";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <Navbar />
        <AboutItems />
        <ChartItems />
    </div>
  )
};

export default Dashboard;
