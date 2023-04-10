import React from "react";
import Lottie from "lottie-react";
import jobHunt from "../assets/job-hunting.json";

const Header = () => {
  return (
    <div className="grid md:grid-cols-2 justify-center items-center p-4 bg-slate-50">
      <div className="p-4 mx-4">
        <h1 className="text-4xl font-semibold">
          Indeed<span className="text-violet-600">Jobs</span>:
          <br />
          <br />
          Connecting Job Seekers <br /> and <br /> Employers
        </h1>
        <p className="my-4 text-gray-600">
          Find Your Dream Job or Ideal Candidate Today with Our Powerful Search
          Tools and Extensive Database.
        </p>
        <button className="btn bg-gradient-to-r from-fuchsia-600 to-cyan-400 border-0">
          Get Started
        </button>
      </div>
      <div>
        <Lottie className="h-[100vh]" animationData={jobHunt} />
      </div>
    </div>
  );
};

export default Header;
