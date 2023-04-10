import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const params = useParams();
  const id = params.jobId;
  const [specificJob, setSpecificJob] = useState({});
  useEffect(() => {
    const loadData = async () => {
      const loadeddata = await fetch("/public/feturedJobs.json");
      const data = await loadeddata.json();
      const result = data.find((specificJob) => specificJob.id == id);
      setSpecificJob(result);
    };
    loadData();
  }, []);

  const {
    company_name,
    contact_info,
    education_qualification,
    experience,
    full_or_part_time,
    job_description,
    job_responsibility,
    job_title,
    location,
    logo,
    remote_or_onsite,
    salary,
  } = specificJob;

  return (
    <div className="grid md:grid-cols-3 gap-8 md:mx-12 my-12">
      <div className="col-span-2">
        <p>
          <span className="font-semibold">Job Description: </span>
          <span className="text-gray-600"> {job_description}</span>
        </p>
        <p className="my-3">
          <span className="font-semibold ">Job Responsibility: </span>
          <span className="text-gray-600"> {job_responsibility}</span>
        </p>

        <p className="my-3">
          <span className="font-semibold ">Education Requirements: </span>
          <br />
          <span className="text-gray-600"> {education_qualification}</span>
        </p>

        <p className="my-3">
          <span className="font-semibold ">Experiences: </span>
          <br />
          <span className="text-gray-600"> {experience}</span>
        </p>
      </div>
      <div className="px-8 py-6 rounded bg-slate-100">
        <h1 className="font-semibold py-2">Job Details</h1>
        <hr />
        <p className="text-gray-600 my-6">
          <span className="font-semibold">Salary: </span>
          {salary}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Job Title: </span>
          {job_title}
        </p>

        <h1 className="font-semibold py-2 my-4">Contact Information</h1>
        <hr />
        <p className="text-gray-600">
          <span className="font-semibold">Phone: </span>
          {contact_info?.phone}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Email: </span>
          {contact_info?.email}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Address: </span>
          {location}
        </p>

        <div>
          <div className="btn btn-secondary my-6 w-full">Apply Now</div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
