import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleAppliedJobCart from "./SingleAppliedJobCart";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    let resultJob = [];
    const getAppliedJobsFromDB = JSON.parse(localStorage.getItem("apply-job"));
    // console.log(getAppliedJobsFromDB);
    for (const title in getAppliedJobsFromDB) {
      const filterData = jobs.find((job) => job.job_title == title);

      resultJob.push(filterData);
    }
    setAppliedJobs(resultJob);
  }, []);

  return (
    <div>
      <div>
        {appliedJobs.map((job) => (
          <SingleAppliedJobCart key={job.id} job={job}></SingleAppliedJobCart>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
