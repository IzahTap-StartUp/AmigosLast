import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const QuestionSectionHeader = () => {
  return (
    <div className="w-[100%] lg:w-[40%] flex justify-between items-center mt-[20px] lg:mt-[0px] lg:p-[10px] cursor-pointer ">
      <span className="hover:text-[#6fcf97]">Home</span>
      <span className="text-[#6fcf97]">
        {" "}
        <AiOutlineArrowRight />
      </span>
      <span className="hover:text-[#6fcf97]">Explanations</span>
      <span className="text-[#6fcf97]">
        {" "}
        <AiOutlineArrowRight />
      </span>
      <span className="hover:text-[#6fcf97]">Sections</span>
      <span className="text-[#6fcf97]">
        {" "}
        <AiOutlineArrowRight />
      </span>
      <span className="hover:text-[#6fcf97]">Questions</span>
    </div>
  );
};

export default QuestionSectionHeader;
