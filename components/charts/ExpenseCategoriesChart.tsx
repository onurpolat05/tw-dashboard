import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface DataItem {
  name: string;
  value: number;
}

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name: string;
  index: number;
}

const data: DataItem[] = [
  { name: 'R&D Expenses', value: 44.6 },
  { name: 'Core Team Payroll', value: 16.5 },
  { name: 'Marketing Expenses', value: 13.4 },
  { name: 'Software Dev Payroll', value: 13.1 },
  { name: 'Other Payroll', value: 12.4 },
];

const COLORS = ['#4338CA', '#8B5CF6', '#EC4899', '#9333EA', '#6366F1'];

const CustomLabel: React.FC<CustomLabelProps> = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 1.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const lineEnd = {
    x: cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN),
    y: cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN),
  };

  const textAnchor = x > cx ? 'start' : 'end';
  const xOffset = x > cx ? 5 : -5;

  return (
    <g>
      <path
        d={`M${lineEnd.x},${lineEnd.y}L${x},${y}`}
        stroke="#9CA3AF"
        strokeWidth={1}
        fill="none"
      />
      <text
        x={x + xOffset}
        y={y}
        fill="#6B7280"
        textAnchor={textAnchor}
        dominantBaseline="central"
        style={{ fontSize: '12px', fontWeight: '500' }}
      >
        {`${name} (${(percent * 100).toFixed(1)}%)`}
      </text>
    </g>
  );
};

const CustomLegend: React.FC<any> = ({ payload }) => {
  // İlk üç öğe için ilk satır
  const firstRow = payload.slice(0, 3);
  // Son iki öğe için ikinci satır
  const secondRow = payload.slice(3);

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* İlk satır */}
      <div className="flex gap-8 justify-center">
        {firstRow.map((entry: any, index: number) => (
          <div key={`legend-1-${index}`} className="flex gap-2 items-center">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">{entry.value}</span>
          </div>
        ))}
      </div>
      {/* İkinci satır */}
      <div className="flex gap-8 justify-center">
        {secondRow.map((entry: any, index: number) => (
          <div key={`legend-2-${index}`} className="flex gap-2 items-center">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExpenseCategoriesChart: React.FC = () => {
  return (
    <div className="h-[550px] w-full p-4">
      <h3 className="mb-8 text-2xl font-semibold text-gray-900">Top 5 Expense Categories (Average)</h3>
      <div className="h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={(props) => <CustomLabel {...props} index={props.index} />}
              outerRadius={140}
              innerRadius={80}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  stroke="white"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Percentage']}
              contentStyle={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
            />
            <Legend 
              content={CustomLegend}
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                paddingTop: '20px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseCategoriesChart; 