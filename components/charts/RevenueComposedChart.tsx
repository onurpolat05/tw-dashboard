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

const data = [
  {
    year: '2025',
    subscriptionPercentage: 50.20,
    warehousePercentage: 39.20,
    shopPercentage: 10.60,
    total: 158391.99,
    Subscription: 79590.49,
    Warehouse: 61943.58,
    'TW Shop': 16857.92,
  },
  {
    year: '2026',
    subscriptionPercentage: 31.20,
    warehousePercentage: 44.90,
    shopPercentage: 23.90,
    total: 1354815.6,
    Subscription: 422823.82,
    Warehouse: 608201.21,
    'TW Shop': 323790.57,
  },
  {
    year: '2027',
    subscriptionPercentage: 29.00,
    warehousePercentage: 43.90,
    shopPercentage: 27.10,
    total: 3502521.27,
    Subscription: 1016906.28,
    Warehouse: 1538513.60,
    'TW Shop': 947101.39,
  },
];

const RevenueComposedChart = () => {
  return (
    <div className="h-[300px] md:h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 10,
            bottom: 20,
            left: 10,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="year" 
            scale="band"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis 
            yAxisId="left" 
            orientation="left"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#E5E7EB' }}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#E5E7EB' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '0.375rem',
              fontSize: '0.875rem'
            }}
          />
          <Legend 
            verticalAlign="top"
            height={36}
            iconSize={8}
            iconType="circle"
            wrapperStyle={{ fontSize: '0.875rem' }}
          />
          
          {/* Percentage Bars */}
          <Bar 
            yAxisId="left" 
            dataKey="subscriptionPercentage" 
            name="Subscription %" 
            fill="#8B5CF6"
            radius={[4, 4, 0, 0]}
            maxBarSize={48}
          />
          <Bar 
            yAxisId="left" 
            dataKey="warehousePercentage" 
            name="Warehouse %" 
            fill="#EC4899"
            radius={[4, 4, 0, 0]}
            maxBarSize={48}
          />
          <Bar 
            yAxisId="left" 
            dataKey="shopPercentage" 
            name="TW Shop %" 
            fill="#10B981"
            radius={[4, 4, 0, 0]}
            maxBarSize={48}
          />
          
          {/* Total Value Line */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="total"
            name="Total Revenue"
            stroke="#ff7300"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueComposedChart; 