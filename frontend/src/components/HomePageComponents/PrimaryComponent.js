import React from "react";
import { Link } from "react-router-dom";
import { ReactVideo } from "reactjs-media";
const PrimaryComponent = () => {
  return (
    <div className="pt-[30px] lg:pt-[100px] ">
      <div className="text-center">
        <h2 className="text-[30px] lg:text-[46px] font-bold">
          A New Different Way To <br /> Improve Your Skills
        </h2>
        <p className="text-[#dbd7d2]">
          <i>
            Lorem ipsum dolor sit amet, consectur adipiscing elit, Id metus.
          </i>
        </p>
        <div className="pt-[20px]">
          <Link to="/explanations">
            <button className="py-[15px] px-[25px] text-[#FFF] bg-[#6fcf97] rounded-[10px]  mr-[10px] lg:mr-[20px]">
              Explore Now Deyirem
            </button>
          </Link>
          <Link to="/about">
            <button className="py-[15px] px-[25px] bg-[white] rounded-[10px] ml-[10px] lg:ml-[20px] border-solid border-[2px] border-[black]">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="wrapper medium pt-[30px]">
        <div className="wrapper medium border-[#6fcf97] border-[2px] border-solid p-[10px] rounded-[10px] ">
          <ReactVideo
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            width="100%"
            // properties
            primaryColor="#6fcf97"
            controls={true}
            loop={true}
            muted={true}
            height="150px"
            poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
            showPlayButton={true}
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryComponent;
