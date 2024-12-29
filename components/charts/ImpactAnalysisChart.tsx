import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    scenario: 'Best Case',
    Market_Size_Impact: 6.7,
    Revenue_Growth_Impact: 3.4,
    Operating_Costs_Impact: 1.9,
  },
  {
    scenario: 'Optimal Case',
    Market_Size_Impact: 6.5,
    Revenue_Growth_Impact: 3.7,
    Operating_Costs_Impact: 2.2,
  },
  {
    scenario: 'Worst Case',
    Market_Size_Impact: 6.6,
    Revenue_Growth_Impact: 4.1,
    Operating_Costs_Impact: 2.7,
  },
];

const ImpactAnalysisChart = () => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p className="mb-2 text-sm font-medium text-gray-900">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p
              key={index}
              className="text-sm"
              style={{ color: entry.color }}
            >
              {entry.name.replace(/_/g, ' ')}: {entry.value.toFixed(1)}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const CustomLegend = (props: any) => {
    const { payload } = props;
    return (
      <div className="flex gap-6 justify-end mb-4">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex gap-2 items-center">
            <div
              className="w-3 h-3"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">
              {entry.value.replace(/_/g, ' ')}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
          <XAxis
            dataKey="scenario"
            tick={{ fill: '#4B5563', fontSize: 12 }}
            tickLine={{ stroke: '#E0E0E0' }}
          />
          <YAxis
            tick={{ fill: '#4B5563', fontSize: 12 }}
            tickLine={{ stroke: '#E0E0E0' }}
            tickFormatter={(value) => `${value}%`}
            domain={[0, 7]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
          <Bar
            dataKey="Market_Size_Impact"
            name="Market Size Impact"
            fill="#4F46E5"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="Revenue_Growth_Impact"
            name="Revenue Growth Impact"
            fill="#10B981"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="Operating_Costs_Impact"
            name="Operating Costs Impact"
            fill="#6EE7B7"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ImpactAnalysisChart; 