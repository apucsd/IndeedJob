import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SingleFeaturedJob = ({ singleFeaturedData }) => {
  //   console.log(singleFeaturedData);

  const {
    id,
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
  } = singleFeaturedData;
  return (
    <div className="border p-4 ">
      <img className="h-20 w-20 rounded " src={logo} alt="" />
      <h1 className="text-xl font-semibold my-4">{job_title}</h1>
      <p className="text-gray-600">{company_name}</p>
      <div className="flex gap-4 my-3">
        <h3 className="border p-1 text-violet-600 border-violet-700 rounded">
          {remote_or_onsite}
        </h3>
        <h3 className="border p-1 text-violet-600 border-violet-700 rounded">
          {full_or_part_time}
        </h3>
      </div>

      <div className="flex gap-4 my-4">
        <div className="flex">
          <span>
            {" "}
            <MapPinIcon className="h-6 w-6 text-gray-500" />
          </span>

          <p className="text-gray-600">{location}</p>
        </div>
        <div className="flex">
          <span>
            {" "}
            <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
          </span>
          <p className="text-gray-600">{salary}</p>
        </div>
      </div>
      <Link to={`jobs/${id}`}>
        {" "}
        <button className="btn btn-primary">view details</button>
      </Link>
    </div>
  );
};

export default SingleFeaturedJob;
