import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const data = [
  { quarter: 'Q0', bestCase: -150000, optimalCase: -150000, worstCase: -150000 },
  { quarter: 'Q1', bestCase: -120000, optimalCase: -130000, worstCase: -140000 },
  { quarter: 'Q2', bestCase: -80000, optimalCase: -100000, worstCase: -120000 },
  { quarter: 'Q3', bestCase: -40000, optimalCase: -60000, worstCase: -90000 },
  { quarter: 'Q4', bestCase: -10000, optimalCase: -30000, worstCase: -50000 },
  { quarter: 'Q5', bestCase: 100000, optimalCase: 50000, worstCase: -20000 },
  { quarter: 'Q6', bestCase: 400000, optimalCase: 300000, worstCase: 100000 },
  { quarter: 'Q7', bestCase: 800000, optimalCase: 600000, worstCase: 300000 },
  { quarter: 'Q8', bestCase: 1400000, optimalCase: 1000000, worstCase: 600000 },
  { quarter: 'Q9', bestCase: 2100000, optimalCase: 1400000, worstCase: 1000000 },
  { quarter: 'Q10', bestCase: 3100000, optimalCase: 2000000, worstCase: 1500000 },
  { quarter: 'Q11', bestCase: 4300000, optimalCase: 3000000, worstCase: 1600000 },
  { quarter: 'Q12', bestCase: 5800000, optimalCase: 4000000, worstCase: 2300000 },
];

const formatCurrency = (value: number) => {
  const absValue = Math.abs(value);
  if (absValue >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else if (absValue >= 1000) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  return value.toString();
};

const CumulativeCashFlowChart = () => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 shadow-sm rounded-lg">
          <p className="text-sm font-medium text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p
              key={index}
              className="text-sm"
              style={{ color: entry.color }}
            >
              {entry.name}: ${formatCurrency(entry.value)}
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
      <div className="flex justify-end gap-6 mb-4">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
          <XAxis
            dataKey="quarter"
            tick={{ fill: '#4B5563', fontSize: 12 }}
            tickLine={{ stroke: '#E0E0E0' }}
          />
          <YAxis
            tick={{ fill: '#4B5563', fontSize: 12 }}
            tickLine={{ stroke: '#E0E0E0' }}
            tickFormatter={formatCurrency}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
          <ReferenceLine y={0} stroke="#E0E0E0" strokeWidth={2} />
          
          <Line
            type="monotone"
            dataKey="bestCase"
            name="Best Case"
            stroke="#4F46E5"
            strokeWidth={2}
            dot={{ fill: '#4F46E5', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="optimalCase"
            name="Optimal Case"
            stroke="#F59E0B"
            strokeWidth={2}
            dot={{ fill: '#F59E0B', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="worstCase"
            name="Worst Case"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ fill: '#10B981', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CumulativeCashFlowChart; 