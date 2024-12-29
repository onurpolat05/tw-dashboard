import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DataItem {
  quarter: string;
  amount: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<any>;
  label?: string;
}

const data: DataItem[] = [
  { quarter: 'Q1 2025', amount: 70000 },
  { quarter: 'Q2 2025', amount: 110000 },
  { quarter: 'Q3 2025', amount: 160000 },
  { quarter: 'Q4 2025', amount: 280000 },
  { quarter: 'Q1 2026', amount: 270000 },
  { quarter: 'Q2 2026', amount: 340000 },
  { quarter: 'Q3 2026', amount: 380000 },
  { quarter: 'Q4 2026', amount: 380000 },
  { quarter: 'Q1 2027', amount: 800000 },
  { quarter: 'Q2 2027', amount: 830000 },
  { quarter: 'Q3 2027', amount: 820000 },
  { quarter: 'Q4 2027', amount: 820000 },
];

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-lg">
        <p className="mb-1 text-sm font-medium text-gray-600">{label}</p>
        <p className="text-base font-semibold text-gray-900">
          {formatCurrency(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

const CustomYAxisTick: React.FC<any> = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={4}
        textAnchor="end"
        fill="#6B7280"
        fontSize={12}
        fontWeight={500}
      >
        {`$${payload.value / 1000}k`}
      </text>
    </g>
  );
};

const CustomXAxisTick: React.FC<any> = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#6B7280"
        fontSize={12}
        fontWeight={500}
      >
        {payload.value}
      </text>
    </g>
  );
};

const QuarterlyExpensesChart: React.FC = () => {
  return (
    <div className="h-[550px] w-full p-4">
      <h3 className="mb-8 text-2xl font-semibold text-gray-900">Quarterly Expenses</h3>
      <div className="h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data}
            margin={{ top: 20, right: 30, left: 40, bottom: 40 }}
            barSize={32}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#E5E7EB"
              strokeOpacity={0.8}
            />
            <XAxis
              dataKey="quarter"
              tick={<CustomXAxisTick />}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={<CustomYAxisTick />}
              tickLine={false}
              axisLine={false}
              width={60}
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ 
                fill: 'rgba(79, 70, 229, 0.1)'
              }}
            />
            <Bar 
              dataKey="amount" 
              fill="#4F46E5"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default QuarterlyExpensesChart; 