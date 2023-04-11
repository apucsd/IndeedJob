import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Line,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ComposedChart,
} from "recharts";

const Statistics = () => {
  //   console.log(assignments);
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const loadedData = await fetch("assignments.json");
      const data = await loadedData.json();
      setAssignments(data);
    };
    loadData();
  }, []);

  return (
    <div className="md:w-[80%] h-[300px] md:mx-auto  me-8">
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
        Assignments Marks From A1 to A8
      </h2>
    </div>
  );
};

export default Statistics;
