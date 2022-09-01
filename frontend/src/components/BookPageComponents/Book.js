import React from "react";
import { Link } from "react-router-dom";
const Book = (props) => {
  const { book } = props;
  return (
    <div
      className="w-[160px] bg-[#EBF9F7] flex justify-center items-center flex-col  rounded-x-[15px] mt-[20px] lg:w-[300px] "
      key={book._id}
    >
      <div className="w-[160px] h-[240px] m-0 py-[0px] lg:py-[15px]  mt-[0] lg:w-[270px] lg:h-[350px]">
        <Link to={`/book/${book._id}`}>
          <img src="https://images.pexels.com/photos/7562504/pexels-photo-7562504.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="bookcover" className="rounded-x-[10px] lg:rounded-[10px]" />
        </Link>
      </div>
      <div className="text-center">
        <h3 className="text-[14px] pt-[10px] font-bold lg:text-[20px]">{book.title}</h3>
        <p className="text-[16px] pt-[10px] font-bold text-[#6fcf97]">{book.price}</p>
      </div>
    </div>
  );
};

export default Book;
