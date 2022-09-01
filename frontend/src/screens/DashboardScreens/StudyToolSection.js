import React from "react";
import SideBar from "../../components/UserDashboard/SideBar";
import StudyToolSectionComponent from "../../components/UserDashboard/StudyTools/StudyToolSectionComponent";

const StudyToolSection = () => {
  return (
    <React.Fragment>
      <div className="dashboard">
        <SideBar />
        <StudyToolSectionComponent />
      </div>
    </React.Fragment>
  );
};

export default StudyToolSection;
