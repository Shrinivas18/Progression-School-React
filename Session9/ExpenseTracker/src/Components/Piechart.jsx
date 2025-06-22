import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import donutchart from "../assets/donut-chart.png";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

function Piechart() {
  const expenses = useSelector((state) => state.expenses) || [];

  // 🔁 Group expenses by category
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

  const hasData = groupedData.length > 0;

  useEffect(() => {
    console.log("Grouped Expenses::::", groupedData);
  }, [groupedData]);

  return (
    <div className="p-2 mt-5">
      {hasData ? (
        <ResponsiveContainer width="100%" height={300}>
          <RePieChart>
            <Pie
              data={groupedData}
              cx="50%"
              cy="50%"
              innerRadius="50%"
              outerRadius="80%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="amount"
              nameKey="category"
              label
            >
              {groupedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </RePieChart>
        </ResponsiveContainer>
      ) : (
        <img
          className="w-32 mx-auto opacity-60"
          src={donutchart}
          alt="Donut Chart"
          title="No Expense Present"
        />
      )}
    </div>
  );
}

export default Piechart;
