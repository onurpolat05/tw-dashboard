import React, { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  ComposedChart,
  Line,
  Bar,
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
      
      // Calculate total legend width (5 items * 150px spacing)
      const totalLegendWidth = 750; // 5 items with 150px spacing
      
      // Calculate starting x position to center the legend
      const startX = (chartWidth - totalLegendWidth) / 2;
      
      // Convert the legend HTML to SVG elements
      const legendItems = legendElement.querySelectorAll('.recharts-legend-item');
      let xOffset = startX;
      
      const colors = ['#F472B6', '#60A5FA', '#34D399', '#D946EF', '#4F46E5']; // Colors for each item
      const names = ['Marketing', 'G&A', 'R&D', 'Cost Margin', 'EBITDA Margin'];
      const types = ['rect', 'rect', 'rect', 'line', 'line']; // Type of symbol for each item
      
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
        xOffset += 150; // Adjust spacing between legend items
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

// Combine burn rate and financial metrics data
const data = [
  {
    quarter: '25-Q1',
    marketing: 6000,
    gAndA: 4000,
    rAndD: 24300,
    totalBurn: 34300,
    costMargin: 991,
    ebitdaMargin: -891,
  },
  {
    quarter: '25-Q2',
    marketing: 11500,
    gAndA: 9000,
    rAndD: 33400,
    totalBurn: 53900,
    costMargin: 369,
    ebitdaMargin: -269,
  },
  {
    quarter: '25-Q3',
    marketing: 18500,
    gAndA: 6000,
    rAndD: 51400,
    totalBurn: 75900,
    costMargin: 259,
    ebitdaMargin: -159,
  },
  {
    quarter: '25-Q4',
    marketing: 39000,
    gAndA: 6000,
    rAndD: 82000,
    totalBurn: 127000,
    costMargin: 124,
    ebitdaMargin: -24,
  },
  {
    quarter: '26-Q1',
    marketing: 40000,
    gAndA: 13000,
    rAndD: 74500,
    totalBurn: 127500,
    costMargin: 62,
    ebitdaMargin: 38,
  },
  {
    quarter: '26-Q2',
    marketing: 40000,
    gAndA: 13000,
    rAndD: 106000,
    totalBurn: 159000,
    costMargin: 60,
    ebitdaMargin: 40,
  },
  {
    quarter: '26-Q3',
    marketing: 40000,
    gAndA: 13000,
    rAndD: 115000,
    totalBurn: 168000,
    costMargin: 49,
    ebitdaMargin: 51,
  },
  {
    quarter: '26-Q4',
    marketing: 40000,
    gAndA: 13000,
    rAndD: 109000,
    totalBurn: 162000,
    costMargin: 37,
    ebitdaMargin: 63,
  },
  {
    quarter: '27-Q1',
    marketing: 65000,
    gAndA: 52000,
    rAndD: 263000,
    totalBurn: 380000,
    costMargin: 63,
    ebitdaMargin: 37,
  },
  {
    quarter: '27-Q2',
    marketing: 65000,
    gAndA: 52000,
    rAndD: 263000,
    totalBurn: 380000,
    costMargin: 49,
    ebitdaMargin: 51,
  },
  {
    quarter: '27-Q3',
    marketing: 65000,
    gAndA: 52000,
    rAndD: 263000,
    totalBurn: 380000,
    costMargin: 41,
    ebitdaMargin: 59,
  },
  {
    quarter: '27-Q4',
    marketing: 65000,
    gAndA: 52000,
    rAndD: 263000,
    totalBurn: 380000,
    costMargin: 37,
    ebitdaMargin: 63,
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const BurnRateComposedChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportSVG = () => {
    if (chartRef.current) {
      exportToSVG(chartRef.current, 'burn-rate-analysis-chart');
    }
  };

  return (
    <Card className="p-4 h-full">
      <CardHeader className="px-0 pt-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg md:text-xl">Burn Rate Graph </CardTitle>
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
        <div ref={chartRef} className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 45 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
              <XAxis
                dataKey="quarter"
                tick={{ fontSize: 12, fill: '#666' }}
                axisLine={{ stroke: '#E0E0E0' }}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
                tickMargin={25}
              />
              <YAxis
                yAxisId="left"
                tick={{ fontSize: 14, fill: '#666' }}
                axisLine={{ stroke: '#E0E0E0' }}
                tickFormatter={formatCurrency}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 14, fill: '#666' }}
                axisLine={{ stroke: '#E0E0E0' }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  fontSize: 12,
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
                formatter={(value: any, name: string) => {
                  if (['costMargin', 'ebitdaMargin'].includes(name)) {
                    return [`${value}%`, name === 'costMargin' ? 'Cost Margin' : 'EBITDA Margin'];
                  }
                  return [formatCurrency(value), name === 'rAndD' ? 'R&D' : name === 'gAndA' ? 'G&A' : name];
                }}
              />
              <Legend />
              
              {/* Stacked Bars for Burn Rate Components */}
              <Bar
                yAxisId="left"
                dataKey="marketing"
                name="Marketing"
                stackId="expenses"
                fill="#F472B6"
                fillOpacity={0.8}
              />
              <Bar
                yAxisId="left"
                dataKey="gAndA"
                name="G&A"
                stackId="expenses"
                fill="#60A5FA"
                fillOpacity={0.8}
              />
              <Bar
                yAxisId="left"
                dataKey="rAndD"
                name="R&D"
                stackId="expenses"
                fill="#34D399"
                fillOpacity={0.8}
              />

              {/* Lines for Financial Metrics */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="costMargin"
                name="Cost Margin"
                stroke="#D946EF"
                strokeWidth={2}
                dot={{ fill: '#D946EF', r: 4 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="ebitdaMargin"
                name="EBITDA Margin"
                stroke="#4F46E5"
                strokeWidth={2}
                dot={{ fill: '#4F46E5', r: 4 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BurnRateComposedChart; 