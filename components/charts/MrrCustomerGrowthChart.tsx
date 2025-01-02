import React, { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

// Utility function to export chart as SVG
const exportToSVG = (element: HTMLDivElement, fileName: string) => {
  try {
    const svgElement = element.querySelector('.recharts-wrapper svg');
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
      
      // Calculate total legend width (2 items * 150px spacing)
      const totalLegendWidth = 300; // 2 items with 150px spacing
      
      // Calculate starting x position to center the legend
      const startX = (chartWidth - totalLegendWidth) / 2;
      
      // Convert the legend HTML to SVG elements
      const legendItems = legendElement.querySelectorAll('.recharts-legend-item');
      let xOffset = startX;
      
      legendItems.forEach((item: Element, index: number) => {
        // Create group for each legend item
        const itemGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        itemGroup.setAttribute('transform', `translate(${xOffset}, ${chartHeight - 30})`);
        
        // Add legend symbol (rect or line based on the series type)
        if (index === 0) { // Line for MRR
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', '0');
          line.setAttribute('y1', '5');
          line.setAttribute('x2', '20');
          line.setAttribute('y2', '5');
          line.setAttribute('stroke', '#8B5CF6');
          line.setAttribute('stroke-width', '2');
          itemGroup.appendChild(line);
        } else { // Rectangle for Customer Count
          const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          rect.setAttribute('x', '0');
          rect.setAttribute('y', '0');
          rect.setAttribute('width', '20');
          rect.setAttribute('height', '10');
          rect.setAttribute('fill', '#D946EF');
          rect.setAttribute('fill-opacity', '0.8');
          itemGroup.appendChild(rect);
        }
        
        // Add text
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', '30');
        text.setAttribute('y', '10');
        text.setAttribute('fill', '#666');
        text.textContent = index === 0 ? 'MRR Customer' : 'Total Customers';
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

// Parse the CSV data and convert MRR to thousands
const data = [
  { period: '25-Q1', mrr: 3.67, customer_count: 120 },
  { period: '25-Q2', mrr: 15.39, customer_count: 443 },
  { period: '25-Q3', mrr: 31.18, customer_count: 778 },
  { period: '25-Q4', mrr: 108.16, customer_count: 1405 },
  { period: '26-Q1', mrr: 218.24, customer_count: 2349 },
  { period: '26-Q2', mrr: 279.67, customer_count: 3011 },
  { period: '26-Q3', mrr: 373.43, customer_count: 4020 },
  { period: '26-Q4', mrr: 483.47, customer_count: 5205 },
  { period: '27-Q1', mrr: 626.08, customer_count: 6270 },
  { period: '27-Q2', mrr: 817.89, customer_count: 8191 },
  { period: '27-Q3', mrr: 969.42, customer_count: 9709 },
  { period: '27-Q4', mrr: 1089.13, customer_count: 10908 }
];

const MrrCustomerGrowthChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportSVG = () => {
    if (chartRef.current) {
      exportToSVG(chartRef.current, 'mrr-customer-growth-chart');
    }
  };

  return (
    <Card className="p-4 md:p-6">
      <CardHeader className="px-0 pt-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg md:text-xl lg:text-2xl">MRR and Customer Growth</CardTitle>
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
                angle={-45}
                textAnchor="end"
                height={60}
                tick={{ fontSize: 14, fill: '#666' }}
                tickMargin={20}
                axisLine={{ stroke: '#E0E0E0' }}
              />
              <YAxis
                yAxisId="left"
                tick={{ fontSize: 14, fill: '#666' }}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                axisLine={{ stroke: '#E0E0E0' }}
                label={{
                  value: 'MRR ($ thousands)',
                  angle: -90,
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fill: '#666', fontSize: 10 }
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 14, fill: '#666' }}
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
                  name === 'mrr' ? `$${Number(value).toLocaleString()}K` : value.toLocaleString(),
                  name === 'mrr' ? 'MRR Customer' : 'Total Customers'
                ]}
                labelFormatter={(label) => `Period: ${label}`}
                contentStyle={{
                  fontSize: 14,
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              <Legend
                formatter={(value) => (value === 'mrr' ? 'MRR Customer' : 'Total Customers')}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="mrr"
                name="mrr"
                stroke="#8B5CF6"
                strokeWidth={2}
                dot={{ fill: '#8B5CF6', r: 3 }}
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

export default MrrCustomerGrowthChart; 