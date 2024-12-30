import React, { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

const data = [
  { period: '2025', arr: 158391.99, customer_count: 4581 },
  { period: '2026', arr: 1354815.60, customer_count: 10050 },
  { period: '2027', arr: 3502521.27, customer_count: 15027 }
];

const OverviewBottomRightCard = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportSVG = () => {
    if (chartRef.current) {
      exportToSVG(chartRef.current, 'arr-overview-chart');
    }
  };

  return (
    <Card className="p-4 md:p-6">
      <CardHeader className="px-0 pt-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg md:text-xl lg:text-2xl">ARR Overview</CardTitle>
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
      <CardContent className="p-0">
        <div ref={chartRef} className="h-[300px] md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
              <XAxis
                dataKey="period"
                tick={{ fontSize: 10, fill: '#666' }}
                axisLine={{ stroke: '#E0E0E0' }}
              />
              <YAxis
                yAxisId="left"
                tick={{ fontSize: 10, fill: '#666' }}
                tickFormatter={(value) => `$${(value / 1000).toLocaleString()}K`}
                axisLine={{ stroke: '#E0E0E0' }}
                label={{
                  value: 'ARR ($)',
                  angle: -90,
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fill: '#666', fontSize: 10 }
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 10, fill: '#666' }}
                tickFormatter={(value) => value.toLocaleString()}
                axisLine={{ stroke: '#E0E0E0' }}
                label={{
                  value: 'Customers',
                  angle: 90,
                  position: 'insideRight',
                  style: { textAnchor: 'middle', fill: '#666', fontSize: 10 }
                }}
              />
              <Tooltip
                formatter={(value: any, name: string) => [
                  name === 'arr' ? `$${Number(value).toLocaleString()}` : value.toLocaleString(),
                  name === 'arr' ? 'ARR' : 'Total Customers'
                ]}
                labelFormatter={(label) => `Year: ${label}`}
                contentStyle={{
                  fontSize: 11,
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              <Legend
                formatter={(value) => (value === 'arr' ? 'ARR' : 'Total Customers')}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="arr"
                name="arr"
                stroke="#8B5CF6"
                strokeWidth={2}
                dot={{ fill: '#8B5CF6', r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Bar
                yAxisId="right"
                dataKey="customer_count"
                name="customer_count"
                fill="#D946EF"
                fillOpacity={0.8}
                radius={[4, 4, 0, 0]}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default OverviewBottomRightCard; 