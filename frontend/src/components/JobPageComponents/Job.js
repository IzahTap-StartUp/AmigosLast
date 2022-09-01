import React from "react";
import { Link } from "react-router-dom";
const Job = (props) => {
  const { job } = props;
  return (
    <React.Fragment>
      <div
        className="w-[330px] rounded-[10px] bg-[#fff] px-[15px] py-[20px] cursor-pointer my-[20px] mx-[5px] border-slate-500"
        key={job._id}
      >
        <div className="w-[40px] h-[40px] p-[20px] bg-[#eb5757] text-white rounded-[10px] flex items-center justify-center">
          <i class="fa-solid fa-briefcase"></i>
        </div>
        <div className="pt-[10px]">
          <h3>{job.title}</h3>
          <p className="pt-[10px]">{job.description.slice(0, 80)}...</p>
          <Link to={`/job/${job._id}`}>
            <button className="bg-[#6fcf97] text-white w-[140px] h-[40px] rounded-[10px] text-[16px] mt-[10px]">
              Apply now35
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Job;
