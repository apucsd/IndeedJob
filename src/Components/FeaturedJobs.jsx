import React, { useEffect, useState } from "react";
import SingleFeaturedJob from "./SingleFeaturedJob";

const FeaturedJobs = () => {
  const [featuredData, setFeaturedData] = useState([]);
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      const loadeddata = await fetch("feturedJobs.json");
      const data = await loadeddata.json();
      setFeaturedData(data);
    };
    loadData();
  }, []);
  //   console.log(featuredData);
  return (
    <div className="md:mx-12 my-8 ">
      <div className="text-center">
        <h1 className="text-3xl font-semibold my-4">Featured Jobs</h1>
        <p className="text-gray-600">
          Explore top job opportunities handpicked by our experts
        </p>
      </div>
      <div className="grid md:grid-cols-2 my-4 gap-2 justify-center items-center">
        {featuredData.slice(0, isShow ? 4 : 6).map((singleFeaturedData) => (
          <SingleFeaturedJob
            key={singleFeaturedData.id}
            singleFeaturedData={singleFeaturedData}
          ></SingleFeaturedJob>
        ))}
      </div>
      <div className="text-center my-4">
        {isShow ? (
          <button
            onClick={() => setIsShow(!isShow)}
            className="bg-gradient-to-r from-fuchsia-600 to-cyan-400 border-0 btn"
          >
            Show all
          </button>
        ) : (
          <button
            onClick={() => setIsShow(!isShow)}
            className="btn bg-gradient-to-r from-fuchsia-600 to-cyan-400 border-0"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJobs;
