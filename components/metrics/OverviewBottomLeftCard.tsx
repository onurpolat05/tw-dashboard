import React from 'react';
import { Card } from "@/components/ui/card";
import MetricCard from './MetricCard';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ltvData = {
  title: 'LTV',
  yearlyData: [
    { year: '2025', value: '217.85' },
    { year: '2026', value: '3,715.60' },
    { year: '2027', value: '5,705.71' },
  ],
  average: '3,213.06',
  colorScheme: 'indigo' as const,
  valuePrefix: '$',
};

const cacData = {
  title: 'CAC Average',
  yearlyData: [
    { year: '2025', value: '10.98' },
    { year: '2026', value: '10.52' },
    { year: '2027', value: '4.12' },
  ],
  average: '8.54',
  colorScheme: 'purple' as const,
  valuePrefix: '$',
};

// Convert string values to numbers for the charts
const ltvChartData = ltvData.yearlyData.map(item => ({
  year: item.year,
  value: parseFloat(item.value.replace(',', ''))
}));

const cacChartData = cacData.yearlyData.map(item => ({
  year: item.year,
  value: parseFloat(item.value)
}));

interface ChartCardProps {
  title: string;
  data: Array<{ year: string; value: number }>;
  color: string;
  metricName: string;
}

const CustomTooltip = ({ active, payload, label, metricName }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white rounded-lg border border-gray-200 shadow-sm">
        <p className="text-sm text-gray-600">{`Year: ${label}`}</p>
        <p className="text-sm font-semibold" style={{ color: payload[0].stroke }}>{`${metricName}: $${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const ChartCard = ({ title, data, color, metricName }: ChartCardProps) => (
  <Card className="p-4">
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-gray-600">{title}</h4>
      <div className="h-[120px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis 
              dataKey="year"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <YAxis 
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: '#E5E7EB' }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip content={(props) => <CustomTooltip {...props} metricName={metricName} />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={color}
              strokeWidth={2}
              dot={{ fill: color, r: 4 }}
              activeDot={{ r: 6, fill: color }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </Card>
);

const OverviewBottomLeftCard = () => {
  return (
    <div className="rounded-lg border shadow-sm bg-card text-card-foreground">
      <div className="p-6 space-y-6">
        <h3 className="text-lg font-semibold">Analytics Overview</h3>
        
        {/* Top Row */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <MetricCard {...ltvData} />
          <ChartCard 
            title="LTV Trend" 
            data={ltvChartData} 
            color="#4F46E5"
            metricName="LTV"
          />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <MetricCard {...cacData} />
          <ChartCard 
            title="CAC Trend" 
            data={cacChartData} 
            color="#9333EA"
            metricName="CAC"
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewBottomLeftCard; 