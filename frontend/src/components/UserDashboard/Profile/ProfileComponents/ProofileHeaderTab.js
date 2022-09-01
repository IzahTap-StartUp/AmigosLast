import React, { useState } from "react";
import "../../../../assets/css/components/profileheadertab.css";
import ProfileAccount from "./ProfileAccount";
import ProfileInfo from "./ProfileInfo";
import ProfileSecurity from "./ProfileSecurity";
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="w-[100%]  flex">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Account
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
     Info
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Security
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <ProfileAccount />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <ProfileInfo />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <ProfileSecurity />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
