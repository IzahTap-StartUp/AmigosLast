import React from "react";
import personImage from "../../assets/images/teamPageImages/personImage.png";
const Team = () => {
  return (
    <React.Fragment>
      <div className="wrapper medium pt-[50px]">
        <div className="">
          <div className="flex flex-col justify-between items-start w-[100%]">
            <h6 className="text-[#6fcf97] font-bold text-[16px] lg:text-[20px]">The team</h6>
            <h3 className="font-bold pt-[10px]  text-[28px] lg:text-[40px]">
              Meet our team of experts in <br />
              marketing and automation.
            </h3>
            <p className="text-[16px] lg:text-[20px] font-bold text-[#9c9fa4]">
              To be the company our customers want us to be,{" "}
              <span>
                it takes an ecletic group 
                passionate operator. Get to know people leading the way at
                Untitled.
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="w-[100%] flex flex-wrap justify-center lg:justify-between pt-[20px] lg:pt-[50px]">
          <div className="mt-[15px]">
            <div className="w-[350px] h-[350px] bg-[#ebf9f7] my-[10px]">
              <img src={personImage} alt="" />
            </div>
            <h3 className="mt-[10px]">Vugar Hasanov - Founder</h3>
          </div>
          <div className="mt-[15px]">
            <div className="w-[350px] h-[350px] bg-[#ebf9f7] my-[10px]">
              <img src={personImage} alt="" />
            </div>
            <h4 className="mt-[10px]">Vugar Hasanov - Founder</h4>
          </div>
          <div className="mt-[15px]">
            <div className="w-[350px] h-[350px] bg-[#ebf9f7] my-[10px]">
              <img src={personImage} alt="" />
            </div>
            <h3 className="mt-[10px]">Vugar Hasanov - Founder</h3>
          </div>
          <div className="mt-[15px]">
            <div className="w-[350px] h-[350px] bg-[#ebf9f7] my-[10px]">
              <img src={personImage} alt="" />
            </div>
            <h4 className="mt-[10px]">Vugar Hasanov - Founder</h4>
          </div>
          <div className="mt-[15px]">
            <div className="w-[350px] h-[350px] bg-[#ebf9f7] my-[10px]">
              <img src={personImage} alt="" />
            </div>
            <h3 className="mt-[10px]">Vugar Hasanov - Founder</h3>
          </div>
          <div className="mt-[15px]">
            <div className="w-[350px] h-[350px] bg-[#ebf9f7] my-[10px]">
              <img src={personImage} alt="" />
            </div>
            <h4 className="mt-[10px]">Vugar Hasanov - Founder</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Team;
