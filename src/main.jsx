import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Statistics from "./Components/Statistics";
import AppliedJobs from "./Components/AppliedJobs";
import Blogs from "./Components/Blogs";
import JobDetail from "./Components/JobDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "jobs/:jobId",
        element: <JobDetail></JobDetail>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied_jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/feturedJobs.json"),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
