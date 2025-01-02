import React, { useRef } from 'react';
import {
  ComposedChart,
  Area,
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
import { Card } from '../ui/card';

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

const data = [
  { quarter: 'Q1 2025', acr: 15, ltv: 55.44 },
  { quarter: 'Q2 2025', acr: 15, ltv: 347.65 },
  { quarter: 'Q3 2025', acr: 15, ltv: 160.36 },
  { quarter: 'Q4 2025', acr: 15, ltv: 307.96 },
  { quarter: 'Q1 2026', acr: 10, ltv: 3715.60 },
  { quarter: 'Q2 2026', acr: 10, ltv: 3715.60 },
  { quarter: 'Q3 2026', acr: 10, ltv: 3715.60 },
  { quarter: 'Q4 2026', acr: 10, ltv: 3715.60 },
  { quarter: 'Q1 2027', acr: 7, ltv: 5705.71 },
  { quarter: 'Q2 2027', acr: 7, ltv: 5705.71 },
  { quarter: 'Q3 2027', acr: 7, ltv: 5705.71 },
  { quarter: 'Q4 2027', acr: 7, ltv: 5705.71 },
];

const CustomerBehaviorChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportSVG = () => {
    if (chartRef.current) {
      exportToSVG(chartRef.current, 'customer-behavior-chart');
    }
  };

  return (
    <Card className="p-6">
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
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
            <XAxis 
              dataKey="quarter" 
              tick={{ fill: '#4B5563', fontSize: 12 }}
              tickLine={{ stroke: '#E0E0E0' }}
            />
            <YAxis 
              yAxisId="left"
              tick={{ fill: '#4B5563', fontSize: 12 }}
              tickLine={{ stroke: '#E0E0E0' }}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right"
              tick={{ fill: '#4B5563', fontSize: 12 }}
              tickLine={{ stroke: '#E0E0E0' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #E0E0E0',
                borderRadius: '6px'
              }}
              formatter={(value, name) => {
                if (name === 'ACR') return `${value}%`;
                if (name === 'LTV') return `$${value}`;
                return value;
              }}
            />
            <Legend />
            <Line 
              type="monotone"
              dataKey="acr" 
              name="ACR" 
              yAxisId="left"
              stroke="#4F46E5"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#4F46E5', r: 4 }}
            />
            <Area
              type="monotone"
              dataKey="ltv"
              name="LTV"
              yAxisId="right"
              fill="#D946EF"
              fillOpacity={0.2}
              stroke="#D946EF"
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default CustomerBehaviorChart; 