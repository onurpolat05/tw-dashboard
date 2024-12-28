import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#8B5CF6', '#EC4899', '#10B981'];

const data2025 = [
  { name: 'R&D', value: 65.2 },
  { name: 'Marketing', value: 25.76 },
  { name: 'G&A', value: 8.59 },
];

const data2026 = [
  { name: 'R&D', value: 65.2 },
  { name: 'Marketing', value: 26.95 },
  { name: 'G&A', value: 8.43 },
];

const data2027 = [
  { name: 'R&D', value: 69.2 },
  { name: 'Marketing', value: 17.11 },
  { name: 'G&A', value: 13.68 },
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-[14px] font-medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SimplePieChart = ({ data, title }: { data: any[]; title: string }) => (
  <div className="flex flex-col items-center">
    <h3 className="mb-4 text-base font-medium">{title}</h3>
    <div className="h-[180px] w-[180px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const ExpenseDistributionPieCharts = () => {
  return (
    <Card className="p-4 h-full">
      <CardHeader className="px-0 pt-0 mb-6">
        <CardTitle className="text-lg md:text-xl">Expense Distribution by Year</CardTitle>
      </CardHeader>
      <div className="flex flex-col space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <SimplePieChart data={data2025} title="2025" />
          <SimplePieChart data={data2026} title="2026" />
        </div>
        <div className="flex justify-center">
          <SimplePieChart data={data2027} title="2027" />
        </div>
        
        {/* Shared Legend */}
        <div className="flex gap-8 justify-center items-center pt-4">
          {data2025.map((entry, index) => (
            <div key={entry.name} className="flex gap-2 items-center">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-sm text-gray-600">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseDistributionPieCharts; 