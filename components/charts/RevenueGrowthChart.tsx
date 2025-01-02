import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { quarter: '25-Q1', revenueGrowth: null, rdSales: 663 },
  { quarter: '25-Q2', revenueGrowth: 320, rdSales: 217 },
  { quarter: '25-Q3', revenueGrowth: 103, rdSales: 165 },
  { quarter: '25-Q4', revenueGrowth: 247, rdSales: 76 },
  { quarter: '26-Q1', revenueGrowth: 102, rdSales: 34 },
  { quarter: '26-Q2', revenueGrowth: 28, rdSales: 38 },
  { quarter: '26-Q3', revenueGrowth: 34, rdSales: 31 },
  { quarter: '26-Q4', revenueGrowth: 29, rdSales: 23 },
  { quarter: '27-Q1', revenueGrowth: 29, rdSales: 42 },
  { quarter: '27-Q2', revenueGrowth: 31, rdSales: 32 },
  { quarter: '27-Q3', revenueGrowth: 19, rdSales: 27 },
  { quarter: '27-Q4', revenueGrowth: 12, rdSales: 24 },
];

const commonChartProps = {
  margin: { top: 20, right: 30, left: 20, bottom: 45 },
  data,
};

const commonAxisProps = {
  tick: { fontSize: 14, fill: '#666' },
  axisLine: { stroke: '#E0E0E0' },
};

const commonXAxisProps = {
  ...commonAxisProps,
  dataKey: "quarter",
  interval: 0,
  angle: -45,
  textAnchor: "end",
  height: 60,
  tickMargin: 25,
};

const tooltipStyle = {
  contentStyle: {
    fontSize: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
};

const RevenueGrowthChart = () => (
  <div className="h-full">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart {...commonChartProps}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
        <XAxis {...commonXAxisProps} />
        <YAxis {...commonAxisProps} tickFormatter={(value) => `${value}%`} />
        <Tooltip 
          formatter={(value: any) => [`${value}%`, 'Revenue Growth']}
          {...tooltipStyle}
        />
        <Legend />
        <Area
          type="monotone"
          dataKey="revenueGrowth"
          name="Revenue Growth"
          stroke="#8B5CF6"
          fill="#8B5CF6"
          fillOpacity={0.2}
          strokeWidth={2}
          dot={{ fill: '#8B5CF6', r: 4 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default RevenueGrowthChart; 