import React from "react";
import {Link} from 'react-router-dom';
import iconbusiness from "../../assets/images/aboutPageImages/iconbusiness64.png";
const AboutSecondaryComponent = () => {
  return (
    <div>
      <div className="pt-[100px]">
        <h2 className="text-center text-[24px]  lg:text-[24px] pb-[40px] leading-9 font-semibold">
          Learn more about <span>IzahTap</span>{" "}
        </h2>
        <div className="flex  flex-col justify-center items-center lg:flex-row lg:justify-between">
          <div className="text-center pt-[20px]">
            <div className="bg-[#EBF9F7] px-[80px] py-[80px]">
              <img src={iconbusiness} alt="" />
            </div>
            <p className="text-[24px] pt-[10px] font-bold">Meet the Team</p>
            <Link className="text-[#1eb67f] text-[16px] pt-[10px]">
              Learn More about us
            </Link>
          </div>
          <div className="text-center  pt-[20px]">
            <div className="bg-[#EBF9F7] px-[80px] py-[80px]">
              <img src={iconbusiness} alt="" />
            </div>
            <p className="text-[24px] pt-[10px] font-bold">Meet the Team</p>
            <Link className="text-[#1eb67f] text-[16px] pt-[10px]">
              Learn More about us
            </Link>
          </div>
          <div className="text-center  pt-[20px]">
            <div className="bg-[#EBF9F7] px-[80px] py-[80px]">
              <img src={iconbusiness} alt="" />
            </div>
            <p className="text-[24px] pt-[10px] font-bold">Meet the Team</p>
            <Link className="text-[#1eb67f] text-[16px] pt-[10px]">
              Learn More about us
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-[50px] px-[50px] py-[30px] bg-[#ebf9f7] rounded-[10px]">
        <div>
          <h3 className="text-[20px]  text-center font-semibold lg:text-[36px] lg:px-[30px]">
            Join top businesses empowering their community using IzahTap
            platform
          </h3>
        </div>
        <Link to="/books">
          <p className="px-[15px] py-[10px] bg-[#88D3AB] mt-[10px] lg:mt-[20px] text-white">
            Explore your IzahTap
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AboutSecondaryComponent;
