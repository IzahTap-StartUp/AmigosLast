import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarSubtitles } from "../../common/helpers/utils.js";
const SideBar = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <React.Fragment>
      <div className="lg:w-[20%] lg:min-w-[250px]  bg-[#6fcf97] rounded-r-xl min-h-[100vh]">
        <div className="wrapper medium  text-[white]">
          <div className="p-[15px] lg:pt-[30px]">
            {sidebarSubtitles.map((item) => {
              return (
                <Link to={item.route}>
                  <div className="flex items-center pt-[20px]">
                    <span className="text-[20px]">{item.icon}</span>
                    <span className="hidden lg:block text-[20px] pl-[15px]">
                      {item.text}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <button className="toggleBtn" onClick={handleClick}></button>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
