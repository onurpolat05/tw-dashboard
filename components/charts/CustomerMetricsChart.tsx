import React, { useRef } from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
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
  { quarter: 'Q1-25', acquired: 219, churned: -99, total: 120 },
  { quarter: 'Q2-25', acquired: 765, churned: -443, total: 443 },
  { quarter: 'Q3-25', acquired: 1275, churned: -940, total: 778 },
  { quarter: 'Q4-25', acquired: 2322, churned: -1695, total: 1405 },
  { quarter: 'Q1-26', acquired: 1952, churned: -1007, total: 2349 },
  { quarter: 'Q2-26', acquired: 1952, churned: -1290, total: 3011 },
  { quarter: 'Q3-26', acquired: 2732, churned: -1723, total: 4020 },
  { quarter: 'Q4-26', acquired: 3415, churned: -2231, total: 5205 },
  { quarter: 'Q1-27', acquired: 2732, churned: -1667, total: 6270 },
  { quarter: 'Q2-27', acquired: 4098, churned: -2177, total: 8191 },
  { quarter: 'Q3-27', acquired: 4098, churned: -2581, total: 9709 },
  { quarter: 'Q4-27', acquired: 4098, churned: -2899, total: 10908 },
];

const CustomerMetricsChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportSVG = () => {
    if (chartRef.current) {
      exportToSVG(chartRef.current, 'customer-metrics-chart');
    }
  };

  return (
    <>
      <div className="flex justify-end mb-4">
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
      <div ref={chartRef} className="h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
            <XAxis 
              dataKey="quarter" 
              tick={{ fill: '#4B5563', fontSize: 12 }}
            />
            <YAxis 
              yAxisId="left"
              tick={{ fill: '#4B5563', fontSize: 12 }}
              label={{ 
                value: 'Customers',
                angle: -90,
                position: 'insideLeft',
                style: { fill: '#4B5563', fontSize: 12 }
              }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              tick={{ fill: '#4B5563', fontSize: 12 }}
              label={{ 
                value: 'Total Customers',
                angle: 90,
                position: 'insideRight',
                style: { fill: '#4B5563', fontSize: 12 }
              }}
            />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="acquired"
              name="Newly Acquired Customers"
              fill="#9333EA"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="churned"
              name="Churned Customers"
              fill="#D946EF"
              radius={[4, 4, 0, 0]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="total"
              name="Total Customers"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ fill: '#4F46E5', r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Each visualization shows:</p>
        <ul className="mt-2 ml-6 space-y-1 list-disc">
          <li>Purple bars (upward): Newly acquired customers</li>
          <li>Fuchsia bars (downward): Churned customers</li>
          <li>Indigo line: Total customer count</li>
        </ul>
      </div>
    </>
  );
};

export default CustomerMetricsChart; 