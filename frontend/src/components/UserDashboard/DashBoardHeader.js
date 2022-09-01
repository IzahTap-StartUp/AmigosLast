import React from "react";
import { useSelector, useDispatch } from "react-redux";
import dashboardheading from "../../assets/images/dashboardimages/dashboardheading.svg";
export const DashBoardHeader = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  console.log(userInfo);
  return (
    <React.Fragment>
      <div className="bg-[#6fcf97]  w-[80%] ml-[20px]  p-[5px] lg:p-[20px] text-[white]   rounded-[10px]">
        <div className="w-[100%] flex items-center justify-between">
          <div className="w-[250px] h-[150px] hidden lg:block">
            <img
              className="rounded-[50%]"
              src={dashboardheading}
              alt="myImage"
            />
          </div>
          <div className="pl-[0px] lg:pl-[50px]">
            <h2 className="text-[20px]">
              Hi, <span className="font-bold">{userInfo.name}, <br/></span>
              {userInfo.isAdmin ? "Admin" : "Student"} 
            </h2>
            <p className="pt-[10px]">
              This is your dashboard. You can see your profile, update your
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
