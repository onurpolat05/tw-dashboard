import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, ComposedChart } from 'recharts';

interface LTVMetricsData {
  month: string;
  ltv: number;
  cac: number;
  ltv_cac_ratio: number;
  yearly_avg_cac: number;
  ad_spend: number;
}

const LTVAnalysis: React.FC = () => {
  // Mock data
  const mockLTVData: LTVMetricsData[] = [
    { month: '23-11', ltv: 36.62, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 },
    { month: '23-12', ltv: 39.95, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 },
    { month: '24-01', ltv: 37.95, cac: 9.34, ltv_cac_ratio: 4.06, yearly_avg_cac: 6.33, ad_spend: 46.69 },
    { month: '24-02', ltv: 37.95, cac: 14.57, ltv_cac_ratio: 2.60, yearly_avg_cac: 6.33, ad_spend: 72.85 },
    { month: '24-03', ltv: 12.72, cac: 2.73, ltv_cac_ratio: 4.65, yearly_avg_cac: 6.33, ad_spend: 57.43 },
    { month: '24-04', ltv: 17.33, cac: 1.99, ltv_cac_ratio: 8.73, yearly_avg_cac: 6.33, ad_spend: 29.78 },
    { month: '24-05', ltv: 19.99, cac: 5.55, ltv_cac_ratio: 3.60, yearly_avg_cac: 6.33, ad_spend: 55.52 },
    { month: '24-06', ltv: 18.88, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 },
    { month: '24-07', ltv: 17.99, cac: 3.80, ltv_cac_ratio: 4.73, yearly_avg_cac: 6.33, ad_spend: 38.04 },
    { month: '24-08', ltv: 17.13, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 },
    { month: '24-09', ltv: 17.13, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 },
    { month: '24-10', ltv: 9.99, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 },
    { month: '24-11', ltv: 9.99, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 }
  ];

  // Calculate key metrics
  const averageLTV = mockLTVData.reduce((acc, curr) => acc + curr.ltv, 0) / mockLTVData.filter(d => d.ltv > 0).length;
  const averageCAC = mockLTVData.reduce((acc, curr) => acc + curr.cac, 0) / mockLTVData.filter(d => d.cac > 0).length;
  const averageRatio = mockLTVData.reduce((acc, curr) => acc + curr.ltv_cac_ratio, 0) / mockLTVData.filter(d => d.ltv_cac_ratio > 0).length;
  const maxRatio = Math.max(...mockLTVData.map(d => d.ltv_cac_ratio));
  
  const [filters, setFilters] = useState({
    ltv: true,
    cac: true,
    adSpend: true,
    ratio: true
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="mb-8 space-y-8">
      {/* Title Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">LTV & CAC Analysis</h2>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-violet-50 to-white border-violet-100">
          <div className="space-y-1">
            <p className="text-sm font-medium text-violet-600">Average LTV</p>
            <p className="text-2xl font-semibold text-violet-900">${averageLTV.toFixed(2)}</p>
            <p className="text-xs text-gray-500">per customer</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-fuchsia-50 to-white border-fuchsia-100">
          <div className="space-y-1">
            <p className="text-sm font-medium text-fuchsia-600">Average CAC</p>
            <p className="text-2xl font-semibold text-fuchsia-900">${averageCAC.toFixed(2)}</p>
            <p className="text-xs text-gray-500">per acquisition</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <div className="space-y-1">
            <p className="text-sm font-medium text-purple-600">Average LTV:CAC</p>
            <p className="text-2xl font-semibold text-purple-900">{averageRatio.toFixed(2)}x</p>
            <p className="text-xs text-gray-500">ratio</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
          <div className="space-y-1">
            <p className="text-sm font-medium text-indigo-600">Best LTV:CAC</p>
            <p className="text-2xl font-semibold text-indigo-900">{maxRatio.toFixed(2)}x</p>
            <p className="text-xs text-gray-500">peak ratio</p>
          </div>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* LTV Trends */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <div className="flex justify-between items-center">
              <CardTitle>LTV, CAC & Ad Spend Analysis</CardTitle>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleFilter('ltv')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    filters.ltv
                      ? 'bg-violet-100 text-violet-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  LTV
                </button>
                <button
                  onClick={() => toggleFilter('cac')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    filters.cac
                      ? 'bg-fuchsia-100 text-fuchsia-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  CAC
                </button>
                <button
                  onClick={() => toggleFilter('adSpend')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    filters.adSpend
                      ? 'bg-pink-100 text-pink-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Ad Spend
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={mockLTVData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                  <XAxis
                    dataKey="month"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    tick={{ fontSize: 12, fill: '#666' }}
                    tickMargin={20}
                    axisLine={{ stroke: '#E0E0E0' }}
                  />
                  <YAxis
                    yAxisId="left"
                    tick={{ fontSize: 12, fill: '#666' }}
                    axisLine={{ stroke: '#E0E0E0' }}
                    tickFormatter={(value) => `$${value}`}
                    label={{ 
                      value: 'Value ($)', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle', fill: '#666', fontSize: 12 }
                    }}
                  />
                  <Tooltip
                    cursor={{ strokeDasharray: '3 3' }}
                    contentStyle={{
                      fontSize: 12,
                      backgroundColor: 'rgba(255, 255, 255, 0.96)',
                      border: '1px solid #E0E0E0',
                      borderRadius: '4px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    formatter={(value: any, name: string) => [
                      `$${Number(value).toFixed(2)}`,
                      name === 'ltv' ? 'LTV' : name === 'cac' ? 'CAC' : 'Ad Spend'
                    ]}
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  {filters.ltv && (
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="ltv"
                      name="ltv"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      dot={{ fill: '#8B5CF6', r: 4 }}
                      activeDot={{ r: 6, stroke: '#8B5CF6', strokeWidth: 2 }}
                    />
                  )}
                  {filters.cac && (
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="cac"
                      name="cac"
                      stroke="#D946EF"
                      strokeWidth={2}
                      dot={{ fill: '#D946EF', r: 4 }}
                      activeDot={{ r: 6, stroke: '#D946EF', strokeWidth: 2 }}
                    />
                  )}
                  {filters.adSpend && (
                    <Bar
                      yAxisId="left"
                      dataKey="ad_spend"
                      name="ad_spend"
                      fill="#EC4899"
                      fillOpacity={0.2}
                      stroke="#EC4899"
                      strokeWidth={1}
                      radius={[4, 4, 0, 0]}
                    />
                  )}
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* CAC Analysis */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>CAC Efficiency & LTV:CAC Ratio</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={mockLTVData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                  <XAxis
                    dataKey="month"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    tick={{ fontSize: 12, fill: '#666' }}
                    tickMargin={20}
                    axisLine={{ stroke: '#E0E0E0' }}
                  />
                  <YAxis
                    yAxisId="left"
                    tick={{ fontSize: 12, fill: '#666' }}
                    axisLine={{ stroke: '#E0E0E0' }}
                    tickFormatter={(value) => `$${value}`}
                    label={{ 
                      value: 'CAC ($)', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle', fill: '#666', fontSize: 12 }
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tick={{ fontSize: 12, fill: '#666' }}
                    axisLine={{ stroke: '#E0E0E0' }}
                    tickFormatter={(value) => `${value}x`}
                    label={{ 
                      value: 'LTV:CAC Ratio', 
                      angle: 90, 
                      position: 'insideRight',
                      style: { textAnchor: 'middle', fill: '#666', fontSize: 12 }
                    }}
                  />
                  <Tooltip
                    cursor={{ strokeDasharray: '3 3' }}
                    contentStyle={{
                      fontSize: 12,
                      backgroundColor: 'rgba(255, 255, 255, 0.96)',
                      border: '1px solid #E0E0E0',
                      borderRadius: '4px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    formatter={(value: any, name: string) => [
                      name === 'cac' ? `$${Number(value).toFixed(2)}` : `${Number(value).toFixed(2)}x`,
                      name === 'cac' ? 'CAC' : 'LTV:CAC Ratio'
                    ]}
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  <Legend 
                    verticalAlign="top" 
                    height={36}
                    formatter={(value) => value === 'cac' ? 'CAC' : 'LTV:CAC Ratio'}
                  />
                  <Bar
                    yAxisId="left"
                    dataKey="cac"
                    fill="#D946EF"
                    fillOpacity={0.8}
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="ltv_cac_ratio"
                    stroke="#2E8B57"
                    strokeWidth={2}
                    dot={{ fill: '#2E8B57', r: 4 }}
                    activeDot={{ r: 6, stroke: '#2E8B57', strokeWidth: 2 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Card */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Key Findings</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-purple-900">LTV Trends</h4>
              <p className="text-sm text-gray-600">
                Started strong at ~$40 in late 2023, experienced a decrease to $12-17 range in early 2024,
                stabilized around $17-20 mid-year, and ended at ~$10 by late 2024.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-purple-900">CAC Efficiency</h4>
              <p className="text-sm text-gray-600">
                Most efficient month showed $1.99 CAC (March 2024), while the least efficient was $14.57 (February 2024).
                Overall trend shows improving efficiency with strategic marketing optimization.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-purple-900">LTV:CAC Performance</h4>
              <p className="text-sm text-gray-600">
                Maintained healthy ratios with best performing at 8.73x and averaging 4.73x,
                consistently above the healthy threshold of 3:1.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-purple-900">Growth Potential</h4>
              <p className="text-sm text-gray-600">
                Strong ratios indicate room for increased marketing investment,
                while declining LTV trend suggests need for customer value optimization.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LTVAnalysis; 