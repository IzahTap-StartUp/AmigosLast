import React from "react";
import { Link } from "react-router-dom";
import RectangleImage from "../../assets/images/aboutPageImages/Rectangle1.png";
import iconbusiness from "../../assets/images/aboutPageImages/iconbusiness64.png";
const PrimaryAboutComponent = () => {
  return (
    <React.Fragment>
      <div >
        <div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-[100%] max-w-[500px] h-[250px]  lg:h-[500px]">
              <img
                className="rounded-[10px]"
                src={RectangleImage}
                alt="people.img"
                title="students"
              />
            </div>
            <div className="flex flex-col items-start pl-[0px]  lg:pl-[90px]">
              <h6 className="text-[#1eb67f] font-semibold text-[20px] py-[10px] lg:py-[20px]">
                OUR VISSION
              </h6>
              <h3 className="font-semibold text-[24px]   leading-9  py-[5px] lg:py-[40px] lg:text-[32px]">
                Empowering any brand to create a stand-alone or integrated
                community system.
              </h3>
              <p className="font-semibold text-[16px] leading-6 pt-[10px] lg:pt-[30px]">
                So that brands can invite potential customers to become part of
                something bigger and to have an impact together
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row pt-[50px]">
            <div className="flex flex-col items-start lg:pr-[90px] ">
              <h6 className="text-[#1eb67f] font-semibold text-[20px] py-[10px] lg:py-[20px]">
                OUR VISSION
              </h6>
              <h3 className="font-semibold text-[24px]   leading-9  py-[5px] lg:py-[40px] lg:text-[32px]">
                Empowering any brand to create a stand-alone or integrated
                community system.
              </h3>
              <p className="font-semibold text-[16px] leading-6 pt-[10px] lg:pt-[30px]">
                So that brands can invite potential customers to become part of
                something bigger and to have an impact together
              </p>
            </div>
            <div className="w-[100%] max-w-[500px] h-[250px]  lg:h-[500px]">
              <img
                className="rounded-[10px]"
                src={RectangleImage}
                alt="people.img"
                title="students"
              />
            </div>
          </div>
        </div>

       
      </div>
    </React.Fragment>
  );
};

export default PrimaryAboutComponent;
