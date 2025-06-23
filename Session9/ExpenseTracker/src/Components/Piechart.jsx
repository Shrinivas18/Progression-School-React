import React from "react";
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

const COLORS = ["#005F99", "#007A65", "#B38600", "#CC5C00", "#6A1B9A"];

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

  return (
    <div className="p-2 mt-5">
      {hasData ? (
        <ResponsiveContainer width="100%" height={300}>
          <RePieChart>
            <Pie
              data={groupedData}
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="80%"
              fill="#8884d8"
              paddingAngle={1.5}
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
