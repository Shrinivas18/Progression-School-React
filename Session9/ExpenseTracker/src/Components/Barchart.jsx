import React from "react";
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
  Cell,
} from "recharts";
import barchart from "../assets/bar-chart.png";

const COLORS = ["#005F99", "#007A65", "#B38600", "#CC5C00", "#6A1B9A"];

function Barchart() {
  const expenses = useSelector((state) => state.expenses) || [];

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

  return (
    <div className="p-2 mt-5">
      {groupedData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <ReBarChart
            data={groupedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount">
              {groupedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
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
