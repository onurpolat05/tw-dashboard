import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ChartProps } from '@/types/types';

// Add mock data at the top of the file
const mockMonthlyData = [
  { month: 'Nov-23', mrr: 109.85, momGrowthRate: 0.00, cmgr: 19.99 },
  { month: 'Dec-23', mrr: 239.70, momGrowthRate: 118.21, cmgr: 19.99 },
  { month: 'Jan-24', mrr: 189.75, momGrowthRate: -20.84, cmgr: 19.99 },
  { month: 'Feb-24', mrr: 189.75, momGrowthRate: 0.00, cmgr: 11.06 },
  { month: 'Mar-24', mrr: 267.13, momGrowthRate: 40.78, cmgr: 11.06 },
  { month: 'Apr-24', mrr: 259.90, momGrowthRate: -2.71, cmgr: 11.06 },
  { month: 'May-24', mrr: 199.93, momGrowthRate: -23.07, cmgr: -3.45 },
  { month: 'Jun-24', mrr: 169.93, momGrowthRate: -15.21, cmgr: -3.45 },
  { month: 'Jul-24', mrr: 179.92, momGrowthRate: 5.88, cmgr: -3.45 },
  { month: 'Aug-24', mrr: 119.93, momGrowthRate: -33.34, cmgr: -30.67 },
  { month: 'Sep-24', mrr: 119.93, momGrowthRate: 0.00, cmgr: -30.67 },
  { month: 'Oct-24', mrr: 39.96, momGrowthRate: -66.68, cmgr: -30.67 },
  { month: 'Nov-24', mrr: 39.96, momGrowthRate: 0.00, cmgr: -30.67 }
];

const mockMonthlyDynamicsData = [
  { month: 'Nov-23', newMrr: 219.70, reactivation: 0.00, expansion: 0.00, churn: -79.90 },
  { month: 'Dec-23', newMrr: 339.60, reactivation: 0.00, expansion: 0.00, churn: 0.00 },
  { month: 'Jan-24', newMrr: 59.90, reactivation: 0.00, expansion: 0.00, churn: -239.70 },
  { month: 'Feb-24', newMrr: 59.90, reactivation: 99.90, expansion: 0.00, churn: -239.70 },
  { month: 'Mar-24', newMrr: 389.00, reactivation: 0.00, expansion: 0.00, churn: -79.88 },
  { month: 'Apr-24', newMrr: 49.95, reactivation: 9.99, expansion: 0.00, churn: -29.97 },
  { month: 'May-24', newMrr: 39.96, reactivation: 0.00, expansion: 0.00, churn: -209.85 },
  { month: 'Jun-24', newMrr: 19.98, reactivation: 9.99, expansion: 0.00, churn: -59.97 },
  { month: 'Jul-24', newMrr: 19.98, reactivation: 9.99, expansion: 0.00, churn: -29.97 },
  { month: 'Aug-24', newMrr: 0.00, reactivation: 0.00, expansion: 0.00, churn: -19.98 },
  { month: 'Sep-24', newMrr: 0.00, reactivation: 0.00, expansion: 0.00, churn: -69.98 },
  { month: 'Oct-24', newMrr: 0.00, reactivation: 0.00, expansion: 0.00, churn: -79.97 },
  { month: 'Nov-24', newMrr: 0.00, reactivation: 0.00, expansion: 0.00, churn: 0.00 }
];

const MRRAndGrowthChart: React.FC<ChartProps> = ({ data }) => {
  const [filters, setFilters] = useState({
    mrr: true,
    momGrowthRate: true,
    cmgr: false
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filterConfig = [
    { key: 'mrr', label: 'MRR', color: '#663399' },
    { key: 'momGrowthRate', label: 'MoM Growth Rate (%)', color: '#DC143C' },
    { key: 'cmgr', label: 'CMGR (%)', color: '#2E8B57' }
  ];

  const renderCustomLegend = () => (
    <div className="flex flex-wrap gap-2 justify-center mt-4">
      {filterConfig.map(({ key, label, color }) => (
        <button
          key={key}
          onClick={() => toggleFilter(key as keyof typeof filters)}
          className={`px-2 md:px-4 py-1 md:py-1.5 rounded-md text-xs md:text-sm font-medium transition-all ${
            filters[key as keyof typeof filters]
              ? 'text-white shadow-sm'
              : 'text-gray-600 bg-gray-100'
          }`}
          style={{
            backgroundColor: filters[key as keyof typeof filters] ? color : undefined,
            borderWidth: '1px',
            borderColor: color,
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <Card className="p-4 md:p-6">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-lg md:text-xl lg:text-2xl">MRR and Growth Metrics Over Time</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px] md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={data} 
              margin={{ 
                top: 20, 
                right: 10, 
                left: 0, 
                bottom: 20 
              }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#E0E0E0"
                vertical={false}
              />
              <XAxis 
                dataKey="month" 
                angle={-45} 
                textAnchor="end" 
                height={60}
                tick={{ fontSize: 10, fill: '#666' }}
                tickMargin={20}
                axisLine={{ stroke: '#E0E0E0' }}
                interval={'preserveStartEnd'}
              />
              <YAxis 
                yAxisId="left"
                tick={{ fontSize: 10, fill: '#666' }}
                tickFormatter={(value) => `$${value}`}
                axisLine={{ stroke: '#E0E0E0' }}
                width={60}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right"
                tick={{ fontSize: 10, fill: '#666' }}
                tickFormatter={(value) => `${value}%`}
                axisLine={{ stroke: '#E0E0E0' }}
                width={40}
              />
              <Tooltip 
                formatter={(value: number, name: string) => [
                  name === 'mrr' ? `$${value}` : `${value}%`,
                  name === 'mrr' ? 'MRR' : name === 'momGrowthRate' ? 'MoM Growth Rate' : 'CMGR'
                ]}
                labelStyle={{ fontSize: 11, fontWeight: 500 }}
                contentStyle={{ 
                  fontSize: 11,
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              {filters.mrr && (
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="mrr" 
                  name="MRR"
                  stroke="#663399" 
                  strokeWidth={2}
                  dot={{ fill: '#663399', r: 3 }}
                />
              )}
              {filters.momGrowthRate && (
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="momGrowthRate" 
                  name="MoM Growth Rate (%)"
                  stroke="#DC143C" 
                  strokeWidth={2}
                  dot={{ fill: '#DC143C', r: 3 }}
                />
              )}
              {filters.cmgr && (
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="cmgr" 
                  name="CMGR (%)"
                  stroke="#2E8B57" 
                  strokeWidth={2}
                  dot={{ fill: '#2E8B57', r: 3 }}
                  strokeDasharray="5 5"
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
        {renderCustomLegend()}
      </CardContent>
    </Card>
  );
};

const MRRDynamics: React.FC<ChartProps> = ({ data }) => {
  const [filters, setFilters] = useState({
    newMrr: true,
    reactivation: true,
    expansion: true,
    churn: true
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filterConfig = [
    { key: 'newMrr', label: 'New MRR', color: '#663399' },
    { key: 'reactivation', label: 'Reactivation', color: '#4B0082' },
    { key: 'expansion', label: 'Expansion', color: '#800080' },
    { key: 'churn', label: 'Churn', color: '#DC143C' }
  ];

  const renderCustomLegend = () => (
    <div className="flex flex-wrap gap-1 justify-center mt-4 md:gap-2">
      {filterConfig.map(({ key, label, color }) => (
        <button
          key={key}
          onClick={() => toggleFilter(key as keyof typeof filters)}
          className={`px-2 md:px-4 py-1 md:py-1.5 rounded-md text-xs md:text-sm font-medium transition-all ${
            filters[key as keyof typeof filters]
              ? 'text-white shadow-sm'
              : 'text-gray-600 bg-gray-100'
          }`}
          style={{
            backgroundColor: filters[key as keyof typeof filters] ? color : undefined,
            borderWidth: '1px',
            borderColor: color,
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <Card className="p-4 md:p-6">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-lg md:text-xl lg:text-2xl">MRR Dynamics</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px] md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={data}
              margin={{ 
                top: 20, 
                right: 10, 
                left: 0, 
                bottom: 20 
              }}
              barGap={0}
              barCategoryGap={8}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#E0E0E0" 
                vertical={false}
              />
              <XAxis 
                dataKey="month" 
                angle={-45} 
                textAnchor="end" 
                height={60}
                interval={'preserveStartEnd'}
                tick={{ fontSize: 10, fill: '#666' }}
                tickMargin={20}
                axisLine={{ stroke: '#E0E0E0' }}
              />
              <YAxis 
                label={{ 
                  value: 'Amount ($)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fill: '#666', fontSize: 10 }
                }}
                domain={[-300, 400]}
                tick={{ fontSize: 10, fill: '#666' }}
                tickFormatter={(value) => `$${value}`}
                axisLine={{ stroke: '#E0E0E0' }}
                width={60}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toFixed(2)}`, '']}
                labelStyle={{ fontSize: 11, fontWeight: 500 }}
                contentStyle={{ 
                  fontSize: 11,
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              {filterConfig.map(({ key, color }) => 
                filters[key as keyof typeof filters] && (
                  <Bar 
                    key={key}
                    dataKey={key}
                    name={key}
                    stackId="a"
                    fill={color}
                  />
                )
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
        {renderCustomLegend()}
      </CardContent>
    </Card>
  );
};

const MrrCharts: React.FC = () => {
  return (
    <div className="overflow-x-auto pb-2 w-full">
      <div className="min-w-[768px]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap-8">
          <MRRAndGrowthChart data={mockMonthlyData} />
          <MRRDynamics data={mockMonthlyDynamicsData} />
        </div>
      </div>
    </div>
  );
};

export default MrrCharts; 