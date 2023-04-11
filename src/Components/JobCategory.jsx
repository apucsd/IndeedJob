import React, { useEffect, useState } from "react";
import SingleJobCategory from "./SingleJobCategory";

const JobCategory = () => {
  const [jobCategory, setJobCategory] = useState([]);
  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setJobCategory(data));
  }, []);

  //   console.log(jobCategory);
  return (
    <div className="md:mx-12">
      <div className="text-center">
        <h1 className="text-3xl font-semibold my-4">Job Category List</h1>
        <p className="text-gray-600">
          There are many different job categories that people can choose from
          depending on their interests, skills, and qualifications.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-4 my-4 gap-4 justify-center items-center">
        {jobCategory.map((singleCategory) => (
          <SingleJobCategory
            key={singleCategory.id}
            singleCategory={singleCategory}
          ></SingleJobCategory>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
