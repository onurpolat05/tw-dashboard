import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { quarter: '25-Q1', revenueGrowth: null, costMargin: 991, ebitdaMargin: -891, rdSales: 663 },
  { quarter: '25-Q2', revenueGrowth: 320, costMargin: 369, ebitdaMargin: -269, rdSales: 217 },
  { quarter: '25-Q3', revenueGrowth: 103, costMargin: 259, ebitdaMargin: -159, rdSales: 165 },
  { quarter: '25-Q4', revenueGrowth: 247, costMargin: 124, ebitdaMargin: -24, rdSales: 76 },
  { quarter: '26-Q1', revenueGrowth: 102, costMargin: 62, ebitdaMargin: 38, rdSales: 34 },
  { quarter: '26-Q2', revenueGrowth: 28, costMargin: 60, ebitdaMargin: 40, rdSales: 38 },
  { quarter: '26-Q3', revenueGrowth: 34, costMargin: 49, ebitdaMargin: 51, rdSales: 31 },
  { quarter: '26-Q4', revenueGrowth: 29, costMargin: 37, ebitdaMargin: 63, rdSales: 23 },
  { quarter: '27-Q1', revenueGrowth: 29, costMargin: 63, ebitdaMargin: 37, rdSales: 42 },
  { quarter: '27-Q2', revenueGrowth: 31, costMargin: 49, ebitdaMargin: 51, rdSales: 32 },
  { quarter: '27-Q3', revenueGrowth: 19, costMargin: 41, ebitdaMargin: 59, rdSales: 27 },
  { quarter: '27-Q4', revenueGrowth: 12, costMargin: 37, ebitdaMargin: 63, rdSales: 24 },
];

const ChartCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card className="p-4">
    <CardHeader className="px-0 pt-0">
      <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      <div className="h-[300px]">
        {children}
      </div>
    </CardContent>
  </Card>
);

const commonChartProps = {
  margin: { top: 20, right: 30, left: 20, bottom: 20 },
  data,
};

const commonAxisProps = {
  tick: { fontSize: 12, fill: '#666' },
  axisLine: { stroke: '#E0E0E0' },
};

const commonXAxisProps = {
  ...commonAxisProps,
  dataKey: "quarter",
  interval: 0,
  angle: -45,
  textAnchor: "end",
  height: 60,
  tickMargin: 25,
};

const tooltipStyle = {
  contentStyle: {
    fontSize: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
};

const FinancialMetricsChart = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Revenue Growth Chart */}
      <ChartCard title="Revenue Growth %">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart {...commonChartProps}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
            <XAxis {...commonXAxisProps} />
            <YAxis {...commonAxisProps} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              formatter={(value: any) => [`${value}%`, 'Revenue Growth']}
              {...tooltipStyle}
            />
            <Area
              type="monotone"
              dataKey="revenueGrowth"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.2}
              strokeWidth={2}
              dot={{ fill: '#8B5CF6', r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Cost Margin Chart */}
      <ChartCard title="Cost Margin %">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart {...commonChartProps}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
            <XAxis {...commonXAxisProps} />
            <YAxis {...commonAxisProps} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              formatter={(value: any) => [`${value}%`, 'Cost Margin']}
              {...tooltipStyle}
            />
            <Line
              type="monotone"
              dataKey="costMargin"
              stroke="#D946EF"
              strokeWidth={2}
              dot={{ fill: '#D946EF', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* EBITDA Margin Chart */}
      <ChartCard title="EBITDA Margin %">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart {...commonChartProps}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
            <XAxis {...commonXAxisProps} />
            <YAxis {...commonAxisProps} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              formatter={(value: any) => [`${value}%`, 'EBITDA Margin']}
              {...tooltipStyle}
            />
            <Area
              type="monotone"
              dataKey="ebitdaMargin"
              stroke="#4F46E5"
              fill="#4F46E5"
              fillOpacity={0.2}
              strokeWidth={2}
              dot={{ fill: '#4F46E5', r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* R&D As of Sales Chart */}
      <ChartCard title="R&D As of Sales %">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart {...commonChartProps}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
            <XAxis {...commonXAxisProps} />
            <YAxis {...commonAxisProps} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              formatter={(value: any) => [`${value}%`, 'R&D Sales Ratio']}
              {...tooltipStyle}
            />
            <Area
              type="monotone"
              dataKey="rdSales"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              dot={{ fill: '#10B981', r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
};

export default FinancialMetricsChart; 