import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, ComposedChart } from 'recharts';
import CustomerAcquisitionSection from './tabs-content/traction-sections/CustomerAcquisitionSection';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

// Utility function to export chart as SVG
const exportToSVG = (element: HTMLDivElement, fileName: string) => {
  try {
    const svgElement = element.querySelector('svg');
    if (!svgElement) {
      console.error('SVG element not found');
      return;
    }

    // Clone the SVG to avoid modifying the original
    const clonedSvg = svgElement.cloneNode(true) as SVGElement;
    
    // Add white background
    clonedSvg.style.backgroundColor = 'white';
    
    // Get SVG string
    const svgString = new XMLSerializer().serializeToString(clonedSvg);
    
    // Create blob and download
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error generating SVG:', error);
  }
};

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

  const [filters, setFilters] = useState({
    ltv: true,
    cac: true,
    adSpend: true,
    ratio: true
  });

  // Refs for chart containers
  const ltvChartRef = useRef<HTMLDivElement>(null);
  const cacChartRef = useRef<HTMLDivElement>(null);

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Export handlers
  const handleExportLTVChart = () => {
    if (ltvChartRef.current) {
      exportToSVG(ltvChartRef.current, 'ltv-cac-analysis-chart');
    }
  };

  const handleExportCACChart = () => {
    if (cacChartRef.current) {
      exportToSVG(cacChartRef.current, 'cac-efficiency-chart');
    }
  };

  return (
    <div className="overflow-x-auto pb-2 w-full">
      <div className="min-w-[768px]">
        <div className="space-y-4 md:space-y-8">
          {/* Title Section */}
          <div className="flex flex-col gap-2 justify-between md:flex-row md:items-center md:gap-0">
            <h2 className="text-lg font-semibold text-gray-900 md:text-xl lg:text-2xl">LTV & CAC Analysis</h2>
          </div>

          <CustomerAcquisitionSection />

          {/* Charts Grid */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap-8">
            {/* LTV Trends */}
            <Card className="p-4 md:p-6">
              <CardHeader className="px-0 pt-0">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg md:text-xl">LTV, CAC & Ad Spend Analysis</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleExportLTVChart}
                    className="flex gap-2 items-center"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">SVG</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div ref={ltvChartRef} className="h-[240px] md:h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={mockLTVData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                      <XAxis
                        dataKey="month"
                        angle={-45}
                        textAnchor="end"
                        height={60}
                        tick={{ fontSize: 10, fill: '#666' }}
                        tickMargin={20}
                        axisLine={{ stroke: '#E0E0E0' }}
                      />
                      <YAxis
                        yAxisId="left"
                        tick={{ fontSize: 10, fill: '#666' }}
                        axisLine={{ stroke: '#E0E0E0' }}
                        tickFormatter={(value) => `$${value}`}
                        label={{ 
                          value: 'Value ($)', 
                          angle: -90, 
                          position: 'insideLeft',
                          style: { textAnchor: 'middle', fill: '#666', fontSize: 10 }
                        }}
                      />
                      <Tooltip
                        cursor={{ strokeDasharray: '3 3' }}
                        contentStyle={{
                          fontSize: 11,
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
                          dot={{ fill: '#8B5CF6', r: 3 }}
                          activeDot={{ r: 5, stroke: '#8B5CF6', strokeWidth: 2 }}
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
                          dot={{ fill: '#D946EF', r: 3 }}
                          activeDot={{ r: 5, stroke: '#D946EF', strokeWidth: 2 }}
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
                <div className="flex gap-2 justify-center mt-4">
                  <button
                    onClick={() => toggleFilter('ltv')}
                    className={`px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium rounded-md transition-all ${
                      filters.ltv
                        ? 'bg-violet-100 text-violet-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    LTV
                  </button>
                  <button
                    onClick={() => toggleFilter('cac')}
                    className={`px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium rounded-md transition-all ${
                      filters.cac
                        ? 'bg-fuchsia-100 text-fuchsia-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    CAC
                  </button>
                  <button
                    onClick={() => toggleFilter('adSpend')}
                    className={`px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium rounded-md transition-all ${
                      filters.adSpend
                        ? 'bg-pink-100 text-pink-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Ad Spend
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* CAC Analysis */}
            <Card className="p-4 md:p-6">
              <CardHeader className="px-0 pt-0">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg md:text-xl">CAC Efficiency & LTV:CAC Ratio</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleExportCACChart}
                    className="flex gap-2 items-center"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">SVG</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div ref={cacChartRef} className="h-[240px] md:h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={mockLTVData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                      <XAxis
                        dataKey="month"
                        angle={-45}
                        textAnchor="end"
                        height={60}
                        tick={{ fontSize: 10, fill: '#666' }}
                        tickMargin={20}
                        axisLine={{ stroke: '#E0E0E0' }}
                      />
                      <YAxis
                        yAxisId="left"
                        tick={{ fontSize: 10, fill: '#666' }}
                        axisLine={{ stroke: '#E0E0E0' }}
                        tickFormatter={(value) => `$${value}`}
                        label={{ 
                          value: 'CAC ($)', 
                          angle: -90, 
                          position: 'insideLeft',
                          style: { textAnchor: 'middle', fill: '#666', fontSize: 10 }
                        }}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        tick={{ fontSize: 10, fill: '#666' }}
                        axisLine={{ stroke: '#E0E0E0' }}
                        tickFormatter={(value) => `${value}x`}
                        label={{ 
                          value: 'LTV:CAC Ratio', 
                          angle: 90, 
                          position: 'insideRight',
                          style: { textAnchor: 'middle', fill: '#666', fontSize: 10 }
                        }}
                      />
                      <Tooltip
                        cursor={{ strokeDasharray: '3 3' }}
                        contentStyle={{
                          fontSize: 11,
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
                        verticalAlign="bottom"
                        height={36}
                        wrapperStyle={{
                          paddingTop: "20px"
                        }}
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
                        dot={{ fill: '#2E8B57', r: 3 }}
                        activeDot={{ r: 5, stroke: '#2E8B57', strokeWidth: 2 }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Card */}
          <Card className="p-4 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 md:p-6">
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base font-semibold text-gray-900 md:text-lg">Key Findings</h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-medium text-purple-900 md:text-sm">LTV Trends</h4>
                  <p className="text-xs text-gray-600 md:text-sm">
                    Started strong at ~$40 in late 2023, experienced a decrease to $12-17 range in early 2024,
                    stabilized around $17-20 mid-year, and ended at ~$10 by late 2024.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium text-purple-900 md:text-sm">CAC Efficiency</h4>
                  <p className="text-xs text-gray-600 md:text-sm">
                    Most efficient month showed $1.99 CAC (March 2024), while the least efficient was $14.57 (February 2024).
                    Overall trend shows improving efficiency with strategic marketing optimization.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium text-purple-900 md:text-sm">LTV:CAC Performance</h4>
                  <p className="text-xs text-gray-600 md:text-sm">
                    Maintained healthy ratios with best performing at 8.73x and averaging 4.73x,
                    consistently above the healthy threshold of 3:1.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium text-purple-900 md:text-sm">Growth Potential</h4>
                  <p className="text-xs text-gray-600 md:text-sm">
                    Strong ratios indicate room for increased marketing investment,
                    while declining LTV trend suggests need for customer value optimization.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LTVAnalysis; 