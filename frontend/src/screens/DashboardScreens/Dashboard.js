import React from "react";
import SideBar from "../../components/UserDashboard/SideBar";
import DashboardActivity from "./DashboardActivity";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="dashboard">
        <SideBar />
        <DashboardActivity />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
