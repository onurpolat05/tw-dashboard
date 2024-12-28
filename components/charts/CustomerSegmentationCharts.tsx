import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface DataItem {
  name: string;
  value: number;
}

// Using consistent colors from design system for each business model
const BUSINESS_MODEL_COLORS = {
  'Drop (PL, Manual)': '#9333EA',    // Purple
  'Arbitrage(Retail, Online)': '#D946EF', // Fuchsia
  'PL': '#4F46E5',                   // Indigo
  'Wholesale': '#8B5CF6',            // Violet
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return percent * 100 > 5 ? (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor="middle"
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null;
};

interface PieChartProps {
  data: DataItem[];
  title: string;
}

const CustomPieChart: React.FC<PieChartProps> = ({ data, title }) => {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold text-center text-gray-900">{title}</h4>
      <div className="h-[200px] bg-gradient-to-br from-indigo-50 to-white rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry) => (
                <Cell 
                  key={`cell-${entry.name}`} 
                  fill={BUSINESS_MODEL_COLORS[entry.name as keyof typeof BUSINESS_MODEL_COLORS]}
                  className="transition-opacity hover:opacity-80"
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: any, name: string) => [`${(value * 100).toFixed(1)}%`, name]}
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #E0E0E0',
                borderRadius: '6px',
                fontSize: '12px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {data.map((item) => (
          <div key={item.name} className="flex gap-2 items-center">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: BUSINESS_MODEL_COLORS[item.name as keyof typeof BUSINESS_MODEL_COLORS] }}
            />
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomerSegmentationCharts = () => {
  // Data from CSV converted to proper format for each year
  const year2025Data = [
    { name: 'Drop (PL, Manual)', value: 0.0375 },
    { name: 'Arbitrage(Retail, Online)', value: 0.875 },
    { name: 'PL', value: 0.0875 },
    { name: 'Wholesale', value: 0 },
  ];

  const year2026Data = [
    { name: 'Drop (PL, Manual)', value: 0.2073 },
    { name: 'Arbitrage(Retail, Online)', value: 0.3029 },
    { name: 'PL', value: 0.4081 },
    { name: 'Wholesale', value: 0.0909 },
  ];

  const year2027Data = [
    { name: 'Drop (PL, Manual)', value: 0.25 },
    { name: 'Arbitrage(Retail, Online)', value: 0.3333 },
    { name: 'PL', value: 0.25 },
    { name: 'Wholesale', value: 0.1667 },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <CustomPieChart
        data={year2025Data}
        title="2025"
      />
      <CustomPieChart
        data={year2026Data}
        title="2026"
      />
      <CustomPieChart
        data={year2027Data}
        title="2027"
      />
    </div>
  );
};

export default CustomerSegmentationCharts; 