import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { quarter: "Q1-25", acquired: 219, churned: -99, total: 120 },
  { quarter: "Q2-25", acquired: 765, churned: -443, total: 443 },
  { quarter: "Q3-25", acquired: 1275, churned: -940, total: 778 },
  { quarter: "Q4-25", acquired: 2322, churned: -1695, total: 1405 },
  { quarter: "Q1-26", acquired: 1952, churned: -1007, total: 2349 },
  { quarter: "Q2-26", acquired: 1952, churned: -1290, total: 3011 },
  { quarter: "Q3-26", acquired: 2732, churned: -1723, total: 4020 },
  { quarter: "Q4-26", acquired: 3415, churned: -2231, total: 5205 },
  { quarter: "Q1-27", acquired: 2732, churned: -1667, total: 6270 },
  { quarter: "Q2-27", acquired: 4098, churned: -2177, total: 8191 },
  { quarter: "Q3-27", acquired: 4098, churned: -2581, total: 9709 },
  { quarter: "Q4-27", acquired: 4098, churned: -2899, total: 10908 },
];

const CustomerMetricsChart = () => {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold">Customer Flow</h2>
      <div className="h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 45,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E0E0E0"
            />
            <XAxis dataKey="quarter" tick={{ fill: "#4B5563", fontSize: 14 }} />
            <YAxis
              yAxisId="left"
              tick={{ fill: "#4B5563", fontSize: 14 }}
              label={{
                value: "Customers",
                angle: -90,
                position: "insideLeft",
                style: { fill: "#4B5563", fontSize: 14 },
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fill: "#4B5563", fontSize: 14 }}
              label={{
                value: "Total Customers",
                angle: 90,
                position: "insideRight",
                style: { fill: "#4B5563", fontSize: 14 },
              }}
            />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="acquired"
              name="Newly Acquired Customers"
              fill="#9333EA"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="churned"
              name="Churned Customers"
              fill="#D946EF"
              radius={[4, 4, 0, 0]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="total"
              name="Total Customers"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ fill: "#4F46E5", r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default CustomerMetricsChart;
