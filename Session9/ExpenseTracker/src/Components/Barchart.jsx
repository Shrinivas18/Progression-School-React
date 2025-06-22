import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import barchart from "../assets/bar-chart.png";

function Barchart() {
  const expenses = useSelector((state) => state.expenses) || [];

  console.log("Barchart", expenses);
  const groupedData = expenses.reduce((acc, curr) => {
    const existing = acc.find((item) => item.category === curr.category);
    if (existing) {
      existing.amount += Number(curr.amount);
    } else {
      acc.push({
        category: curr.category,
        amount: Number(curr.amount),
      });
    }
    return acc;
  }, []);

  useEffect(() => {
    console.log("BarChart Grouped Expenses:", groupedData);
  }, [groupedData]);

  return (
    <div className="p-2 mt-5">
      {groupedData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <ReBarChart
            data={groupedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
          </ReBarChart>
        </ResponsiveContainer>
      ) : (
        <img
          className="w-32 mx-auto opacity-60"
          src={barchart}
          alt="Bar Chart"
          title="No Expense Present"
        />
      )}
    </div>
  );
}

export default Barchart;
