import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const SingleAppliedJobCart = ({ job }) => {
  // console.log(job);

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
  } = job;
  return (
    <div className="md:w-[70%] mx-auto border my-2 grid grid-cols-4 justify-between items-center">
      <div className=" md:col-span-3 col-span-4 flex gap-2">
        <div className="p-3">
          <img className="h-36 w-36" src={logo} alt="" />
        </div>

        <div className="">
          <h1 className="text-xl font-semibold my-4">{job_title}</h1>
          <p className="text-gray-600">{company_name}</p>
          <div className="flex gap-4 my-3">
            <div className="border cursor-pointer p-1 text-violet-600 border-violet-700 rounded">
              {remote_or_onsite}
            </div>
            <div className="border cursor-pointer  p-1 text-violet-600 border-violet-700 rounded">
              {full_or_part_time}
            </div>
          </div>
          <div className="md:flex gap-4 my-4 text-sm">
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
        </div>
      </div>

      <div className="">
        <Link to={`/jobs/${id}`}>
          {" "}
          <button className="btn btn-secondary">view details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleAppliedJobCart;
