import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import MetricCard from './MetricCard';
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
    
    // Remove any existing background color to keep it transparent
    clonedSvg.style.backgroundColor = 'transparent';
    
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

const customerData = [
  { year: '2025', count: 1405 },
  { year: '2026', count: 4020 },
  { year: '2027', count: 10908 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white rounded-lg border border-cyan-100 shadow-sm">
        <p className="text-sm font-medium text-cyan-900">{`Year: ${label}`}</p>
        <p className="text-sm font-bold text-cyan-700">{`Customers: ${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const metricsData = {
  acr: {
    title: 'ACR',
    yearlyData: [
      { year: '2025', value: '15%' },
      { year: '2026', value: '10%' },
      { year: '2027', value: '7%' },
    ],
    average: '10.67%',
    colorScheme: 'purple' as const,
  },
  nrr: {
    title: 'NRR',
    yearlyData: [
      { year: '2025', value: '3.23' },
      { year: '2026', value: '1.48' },
      { year: '2027', value: '1.23' },
    ],
    average: '1.87',
    colorScheme: 'fuchsia' as const,
    valueSuffix: 'x',
  },
  systemCost: {
    title: 'System Cost',
    yearlyData: [
      { year: '2025', value: '5' },
      { year: '2026', value: '5.12' },
      { year: '2027', value: '5.12' },
    ],
    average: '5.08',
    colorScheme: 'indigo' as const,
    valuePrefix: '$',
  },
};

const MetricsOverviewCard = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportSVG = () => {
    if (chartRef.current) {
      exportToSVG(chartRef.current, 'customer-count-chart');
    }
  };

  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="border-b">
        <CardTitle className="text-lg font-semibold">Metrics Overview</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-6">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <MetricCard {...metricsData.acr} />
            <MetricCard {...metricsData.nrr} />
            <MetricCard {...metricsData.systemCost} />
          </div>

          {/* Customer Count Chart */}
          <Card className="overflow-hidden bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 transition-all hover:shadow-md">
            <CardHeader className="p-3 border-b border-cyan-100/30">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold text-cyan-900">Customer Count Chart</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleExportSVG}
                  className="flex gap-2 items-center"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">SVG</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div ref={chartRef} className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={customerData} 
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                  >
                    <XAxis 
                      type="number"
                      fontSize={12}
                      tickLine={false}
                      axisLine={{ stroke: '#E5E7EB' }}
                      tickFormatter={(value) => value.toLocaleString()}
                    />
                    <YAxis 
                      type="category"
                      dataKey="year"
                      fontSize={12}
                      tickLine={false}
                      axisLine={{ stroke: '#E5E7EB' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="count" 
                      fill="#0891b2" 
                      radius={[0, 4, 4, 0]}
                      barSize={30}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsOverviewCard; 