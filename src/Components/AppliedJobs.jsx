import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleAppliedJobCart from "./SingleAppliedJobCart";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [allAppliedJobs, setAllAppliedJobs] = useState([]);
  useEffect(() => {
    let resultJob = [];

    const getAppliedJobsFromDB = JSON.parse(localStorage.getItem("apply-job"));
    // console.log(getAppliedJobsFromDB);
    for (const title in getAppliedJobsFromDB) {
      const filterData = jobs.find((job) => job.job_title == title);

      resultJob.push(filterData);
    }
    setAppliedJobs(resultJob);
    setAllAppliedJobs(resultJob);
  }, []);

  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === "fulltime") {
      const filteredData = allAppliedJobs.filter(
        (job) => job.full_or_part_time === "Full-time"
      );
      setAppliedJobs(filteredData);
    }
    if (value === "parttime") {
      const filteredData = allAppliedJobs.filter(
        (job) => job.full_or_part_time === "Part-time"
      );
      setAppliedJobs(filteredData);
    }
    if (value === "remote") {
      const filteredData = allAppliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setAppliedJobs(filteredData);
    }
    if (value === "onsite") {
      const filteredData = allAppliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setAppliedJobs(filteredData);
    }
  };

  return (
    <div>
      <div className="text-end mx-12 flex justify-end items-center gap-2">
        <h2 className="font-semibold">Filter: </h2>
        <select onChange={handleFilter} className="p-2 rounded  bg-slate-100">
          <option value="fulltime">Full Time</option>
          <option value="parttime">Part Time</option>
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>
        </select>
      </div>
      <div className="">
        {appliedJobs.map((job) => (
          <SingleAppliedJobCart key={job.id} job={job}></SingleAppliedJobCart>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
