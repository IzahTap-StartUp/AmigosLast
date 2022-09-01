import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsJob } from "../../common/redux/actions/jobActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";

export default function JobDetail(props) {
  const dispatch = useDispatch();
  const jobId = props.match.params.id;
  const jobDetails = useSelector((state) => state.jobDetails);
  const { loading, error, job } = jobDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    dispatch(detailsJob(jobId));
  }, [dispatch, jobId]);

  console.log(job);
  return (
    <React.Fragment>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="wrapper pt-[50px]">
          <div className="h-[200px] rounded-[10px]  lg:h-[400px]">
            <img
            className="w-[100%] h-[100%] object-cover"
              src="https://images.pexels.com/photos/6913342/pexels-photo-6913342.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="jobcover"
            />
          </div>
          <div className="mt-[20px]  row">
            <div>
              <h2 className="text-[20px] m-0 font-bold">{job.title}</h2>
              <h4 className="font-bold text-[#828282]">{job.type}</h4>
            </div>
            <div className="bg-[#6fcf97] border-none rounded-[10px] w-[40px] h-[40px] text-[20px] cursor-pointer ">
              <button className="bg-[#6fcf97] rounded-[10px] w-[40px] h-[40px] text-[white] text-[20px] ccursor-pointer">
                <i className="fas fa-share-alt"></i>
              </button>
            </div>
          </div>
          <div className="pt-[15px] ">
            <article>
              <h3>Overview</h3>
              <p className="text-[#828282]">{job.description}</p>
            </article>
            <button className="w-[100%] bg-[#6fcf97] border-none h-[40px] text-[white] cursor-pointer mt-[15px]">
              Apply the Job
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
