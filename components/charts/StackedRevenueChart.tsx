import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    year: '2025',
    Subscription: 79590.49,
    Warehouse: 61943.58,
    'TW Shop': 16857.92,
  },
  {
    year: '2026',
    Subscription: 422823.82,
    Warehouse: 608201.21,
    'TW Shop': 323790.57,
  },
  {
    year: '2027',
    Subscription: 1016906.28,
    Warehouse: 1538513.60,
    'TW Shop': 947101.39,
  },
];

const COLORS = {
  Subscription: '#8B5CF6',
  Warehouse: '#EC4899',
  'TW Shop': '#10B981',
};

const StackedRevenueChart = () => {
  return (
    <Card className="p-4">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-lg md:text-xl">Revenue Sources Trend</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 60, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#E0E0E0" />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 12, fill: '#666' }}
                axisLine={{ stroke: '#E0E0E0' }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: '#666' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                axisLine={{ stroke: '#E0E0E0' }}
              />
              <Tooltip
                formatter={(value: any) => [`$${Number(value).toLocaleString()}`, '']}
                contentStyle={{
                  fontSize: 12,
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              <Area
                type="monotone"
                dataKey="Subscription"
                stackId="1"
                stroke={COLORS.Subscription}
                fill={COLORS.Subscription}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="Warehouse"
                stackId="1"
                stroke={COLORS.Warehouse}
                fill={COLORS.Warehouse}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="TW Shop"
                stackId="1"
                stroke={COLORS['TW Shop']}
                fill={COLORS['TW Shop']}
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex gap-5 justify-center mt-4">
          {Object.entries(COLORS).map(([name, color]) => (
            <div key={name} className="flex gap-2 items-center">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-sm text-gray-600">{name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StackedRevenueChart; 