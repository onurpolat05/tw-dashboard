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
    
    // Set transparent background
    clonedSvg.style.backgroundColor = 'transparent';
    clonedSvg.setAttribute('style', 'background-color: transparent');

    // Get the legend element
    const legendElement = element.querySelector('.recharts-default-legend');
    if (legendElement) {
      // Create a new group element for the legend
      const legendGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      legendGroup.setAttribute('class', 'recharts-legend-wrapper');
      
      // Get the SVG dimensions
      const chartWidth = parseFloat(clonedSvg.getAttribute('width') || '0');
      const chartHeight = parseFloat(clonedSvg.getAttribute('height') || '0');
      
      // Calculate total legend width with extra spacing for the first item
      const spacings = [250, 200, 200]; // Extra space for "Newly Acquired Customers"
      const totalLegendWidth = spacings.reduce((a, b) => a + b, 0); // Sum of all spacings
      
      // Calculate starting x position to center the legend
      const startX = (chartWidth - totalLegendWidth) / 2;
      
      // Convert the legend HTML to SVG elements
      const legendItems = legendElement.querySelectorAll('.recharts-legend-item');
      let xOffset = startX;
      
      const colors = ['#9333EA', '#D946EF', '#4F46E5']; // Colors for each item
      const names = ['Newly Acquired Customers', 'Churned Customers', 'Total Customers'];
      const types = ['rect', 'rect', 'line']; // Type of symbol for each item
      
      legendItems.forEach((item: Element, index: number) => {
        // Create group for each legend item
        const itemGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        itemGroup.setAttribute('transform', `translate(${xOffset}, ${chartHeight - 40})`);
        
        if (types[index] === 'rect') {
          // Add rectangle for bar items
          const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          rect.setAttribute('x', '0');
          rect.setAttribute('y', '0');
          rect.setAttribute('width', '20');
          rect.setAttribute('height', '10');
          rect.setAttribute('fill', colors[index]);
          rect.setAttribute('fill-opacity', '0.8');
          itemGroup.appendChild(rect);
        } else {
          // Add line for line items
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', '0');
          line.setAttribute('y1', '5');
          line.setAttribute('x2', '20');
          line.setAttribute('y2', '5');
          line.setAttribute('stroke', colors[index]);
          line.setAttribute('stroke-width', '2');
          itemGroup.appendChild(line);
        }
        
        // Add text
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', '30');
        text.setAttribute('y', '10');
        text.setAttribute('fill', '#666');
        text.textContent = names[index];
        itemGroup.appendChild(text);
        
        legendGroup.appendChild(itemGroup);
        xOffset += spacings[index]; // Use different spacing for each item
      });
      
      clonedSvg.appendChild(legendGroup);
    }
    
    // Get SVG string
    const svgString = new XMLSerializer().serializeToString(clonedSvg);
    
    // Create blob and download
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
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
              bottom: 45,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
            <XAxis 
              dataKey="quarter" 
              tick={{ fill: '#4B5563', fontSize: 14 }}
            />
            <YAxis 
              yAxisId="left"
              tick={{ fill: '#4B5563', fontSize: 14 }}
              label={{ 
                value: 'Customers',
                angle: -90,
                position: 'insideLeft',
                style: { fill: '#4B5563', fontSize: 14 }
              }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              tick={{ fill: '#4B5563', fontSize: 14 }}
              label={{ 
                value: 'Total Customers',
                angle: 90,
                position: 'insideRight',
                style: { fill: '#4B5563', fontSize: 14 }
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