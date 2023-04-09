import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnim from "../assets/Not found.json";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <Link to="/">
        <button className="p-3 border rounded m-4 btn-outline">Go Home</button>
      </Link>
      <div className="">
        <Lottie className="h-[400px]" animationData={errorAnim} loop={true} />
      </div>
      <div>
        <h1 className="text-center text-2xl font-semibold text-violet-600">
          Status: {status}
        </h1>
        <h1 className="text-center font-semibold text-violet-600">
          Message: {error.message}
        </h1>
      </div>
    </div>
  );
};

export default Error;
