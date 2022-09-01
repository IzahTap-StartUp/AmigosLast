import React, { useEffect } from "react";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listJobs } from "../../common/redux/actions/jobActions";
import Job from "../../components/JobPageComponents/Job";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.jobList);
  const { loading, error, jobs } = jobList;

  useEffect(() => {
    dispatch(listJobs());
  }, [dispatch]);

  return (
    <div className="pt-[50px]">
      <div className="wrapper">
        <div>
          <h2 className="text-[36px] lg:text-[36px]">Open Positions</h2>
          <p>We’re a 100% remote team spread all across the world Join us!</p>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="jobs">
            {jobs.map((job) => {
              return <Job key={job._id} job={job} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
