import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Line,
  Legend,
  Bar,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  CartesianGrid,
  ComposedChart,
} from "recharts";

const Statistics = () => {
  const assignments = useLoaderData();
  //   console.log(assignments);
  return (
    <div className="w-[80%] h-[300px] mx-auto">
      <ResponsiveContainer>
        <ComposedChart width={730} height={250} data={assignments}>
          <XAxis dataKey="assignmentNumber" />
          <YAxis dataKey="" />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />

          <Line type="monotone" dataKey="mark" stroke="#C200B3" />
        </ComposedChart>
      </ResponsiveContainer>
      <h2 className="text-center my-4 text-4xl font-semibold text-[#C200B3]">
        Assignments marks From A1 to A8
      </h2>
    </div>
  );
};

export default Statistics;
