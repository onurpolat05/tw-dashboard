import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Sample data - replace with actual data
const data = [
  { quarter: '2025-Q1', revenue: 3665, remainingCash: 150000, netBurnRate: -32669 },
  { quarter: '2025-Q2', revenue: 15387, remainingCash: 120000, netBurnRate: -41361 },
  { quarter: '2025-Q3', revenue: 31181, remainingCash: 80000, netBurnRate: -49467 },
  { quarter: '2025-Q4', revenue: 108157, remainingCash: 20000, netBurnRate: -26409 },
  { quarter: '2026-Q1', revenue: 218244, remainingCash: 0, netBurnRate: 82568 },
  { quarter: '2026-Q2', revenue: 279670, remainingCash: 90000, netBurnRate: 110677 },
  { quarter: '2026-Q3', revenue: 373427, remainingCash: 180000, netBurnRate: 190165 },
  { quarter: '2026-Q4', revenue: 483472, remainingCash: 390000, netBurnRate: 302394 },
  { quarter: '2027-Q1', revenue: 626084, remainingCash: 680000, netBurnRate: 230822 },
  { quarter: '2027-Q2', revenue: 817891, remainingCash: 920000, netBurnRate: 414998 },
  { quarter: '2027-Q3', revenue: 969419, remainingCash: 1350000, netBurnRate: 570341 },
  { quarter: '2027-Q4', revenue: 1089125, remainingCash: 1900000, netBurnRate: 690048 },
];

const formatCurrency = (value: number) => {
  if (Math.abs(value) >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else if (Math.abs(value) >= 1000) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  return value.toString();
};

const RunwayAnalysisChart = () => {
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

  return (
    <div className="h-[500px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
          <XAxis
            dataKey="quarter"
            tick={{ fill: '#4B5563', fontSize: 12 }}
            tickLine={{ stroke: '#E0E0E0' }}
          />
          <YAxis
            yAxisId="left"
            tick={{ fill: '#4B5563', fontSize: 12 }}
            tickLine={{ stroke: '#E0E0E0' }}
            tickFormatter={formatCurrency}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: '#4B5563', fontSize: 12 }}
            tickLine={{ stroke: '#E0E0E0' }}
            tickFormatter={formatCurrency}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          
          {/* Revenue Line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="revenue"
            name="Revenue"
            stroke="#4F46E5"
            strokeWidth={2}
            dot={{ fill: '#4F46E5', r: 4 }}
            activeDot={{ r: 6 }}
          />

          {/* Remaining Cash Line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="remainingCash"
            name="Remaining Cash"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={{ fill: '#8B5CF6', r: 4 }}
            activeDot={{ r: 6 }}
          />

          {/* Net Burn Rate Bars */}
          <Bar
            yAxisId="right"
            dataKey="netBurnRate"
            name="Net Burn Rate"
            fill="#FF8787"
            radius={[4, 4, 0, 0]}
            opacity={0.8}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RunwayAnalysisChart; 