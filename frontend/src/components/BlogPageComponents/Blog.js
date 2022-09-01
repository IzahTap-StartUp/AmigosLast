import React from "react";
import { Link } from "react-router-dom";
export default function Blog(props) {
  const { blog } = props;
  return (
    <React.Fragment>
      <div
        className="flex justify-between items-start  px-0 py-[10px] lg:flex-col lg:justify-start lg:py-[35px] lg:items-start"
        key={blog._id}
      >
        <div className=" w-[150px] h-[100px] lg:w-[350px]  lg:h-[250px]">
          <Link to={`/blog/${blog._id}`}>
            <img className="rounded-[5px]" src="https://images.pexels.com/photos/7562504/pexels-photo-7562504.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt={blog.title} />
          </Link>
        </div>
        <div className="pl-[10px] pt-[15px] lg:pl-0 lg:pt-[0px]">
          <div>
            <h3 className="text-[16px] pt-[10px] p-0 mt-0 lg:text-[20px] lg:my-[10px] font-bold">
              {blog.title}
            </h3>
          </div>
          <span className="text-white  px-[10px] py-0  bg-[#6fcf97] rounded-[10px] mt-[20px] text-[16px] lg:text-[16px]  text-center font-semibold lg:py-[10px] lg:px-[5px]">
            {blog.category}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
