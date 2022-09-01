import React from "react";
import bookCover from "../../../../../assets/images/brandlogos/bookcover.jpg";
const QuestionLeftBar = () => {
  return (
    <div className="shadow w-[100%]     flex  flex-col ">
      <div className="p-[10px] flex flex-row  lg:items-center lg:flex-col">
        <div className="w-[110px] h-[160px] lg:w-[240px] lg:h-[300px]">
          <img src={bookCover} alt="explanationBookCover" />
        </div>
        <div className="pl-[15px] lg:pl-[0]">
          <h2 className="font-bold text-[20px] text-left lg:text-center pt-[10px]">
            Kimya Toplu
          </h2>
          <p className="block lg:hidden pt-[10px]">15th edition</p>
        </div>
      </div>
      <div className="bg-[#F0F1F2] p-[15px] h-[100%] hidden lg:block">
        <div className="w-[100%] flex items-center justify-between pt-[10px]">
          <div className="text-[#8A8786]">Book Edition</div>
          <div>15th Edition </div>
        </div>
        <div className="w-[100%] flex items-center justify-between pt-[10px]">
          <div className="text-[#8A8786]">Author</div>
          <div>Fraza Brigham</div>
        </div>
        <div className="w-[100%] flex items-center justify-between pt-[10px]">
          <div className="text-[#8A8786]">Edition</div>
          <div>18947575</div>
        </div>
        <div className="w-[100%] flex items-center justify-between pt-[10px]">
          <div className="text-[#8A8786]">Author</div>
          <div>Fraza Brigham</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionLeftBar;
