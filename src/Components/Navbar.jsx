import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="grid md:grid-cols-3  items-center p-3 text-center ">
      <div className="navbar bg-base-100 text-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Indeed <span className="text-2xl text-violet-500">Jobs</span>
        </Link>
      </div>
      <div className="flex items-center text-lg justify-between ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Statistics
        </NavLink>
        <NavLink
          to="applied_jobs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Applied_Jobs
        </NavLink>
        <NavLink
          to="blogs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Blogs
        </NavLink>
      </div>
      <div className="md:text-end my-4 ">
        <button className="btn btn-secondary">Start Applying</button>
      </div>
    </div>
  );
};

export default Navbar;
