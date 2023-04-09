import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const Statistics = () => {
  const assignments = useLoaderData();
  //   console.log(assignments);
  return (
    <div className="w-[80%] h-[300px] mx-auto">
      <ResponsiveContainer>
        <AreaChart
          data={assignments}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="assignmentNumber" />
          <YAxis dataKey="mark" />
          <Area dataKey="mark" stroke="#8884d8" fill="#8884d8" />
          <Tooltip dataKey="mark" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
