import React from "react";
import bookCover from "../../assets/images/brandlogos/bookcover.jpg";
import { Link } from "react-router-dom";
const Explanation = (props) => {
  const { explanation } = props;
  return (
    <div  className="w-[100%] lg:w-[50%]">
    <Link to={`/explanation/${explanation._id}`}>
    <div className="flex flex-row  shadow p-[20px] w-[100%] lg:w-[550px] mt-[15px] rounded-[10px] cursor-pointer">
        <div className="w-[110px] h-[160px]">
          <img src={bookCover} alt="bookCover" />
        </div>
        <div className="pl-[20px]">
          <article>
            <h2 className="text-[16px] font-bold">{explanation.title}</h2>
            <p className="text-[#A6A1A1] pt-[10px]">{explanation.category}</p>
            <p className="w-[50px] bg-[#EDEFFF] text-[#6fcf97] rounded-[10px] text-center  px-[10px] py-[10px] mt-[10px]">
              123
            </p>
          </article>
        </div>
      </div>
    </Link>
      
    </div>
  );
};

export default Explanation;
