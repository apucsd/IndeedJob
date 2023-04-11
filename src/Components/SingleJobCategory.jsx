import React from "react";

const SingleJobCategory = ({ singleCategory }) => {
  const { title, logo_img_url, available_jobs_quantity } = singleCategory;

  return (
    <div className="bg-slate-100 p-8 h-[100%]">
      <img className="w-8 h-8 rounded" src={logo_img_url} alt="" />
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-gray-600">{available_jobs_quantity}+ Job Available</p>
    </div>
  );
};

export default SingleJobCategory;
