import React, { useRef } from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
  Area,
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
      
      // Calculate total legend width (3 items * 150px spacing)
      const totalLegendWidth = 450; // 3 items with 150px spacing
      
      // Calculate starting x position to center the legend
      const startX = (chartWidth - totalLegendWidth) / 2;
      
      // Convert the legend HTML to SVG elements
      const legendItems = legendElement.querySelectorAll('.recharts-legend-item');
      let xOffset = startX;
      
      const colors = ['#8B5CF6', '#EF4444', '#10B981']; // Best Case, Worst Case, Optimal Case colors
      const names = ['Best Case', 'Worst Case', 'Optimal Case'];
      
      legendItems.forEach((item: Element, index: number) => {
        // Create group for each legend item
        const itemGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        itemGroup.setAttribute('transform', `translate(${xOffset}, ${chartHeight - 30})`);
        
        // Add line for all cases
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', '0');
        line.setAttribute('y1', '5');
        line.setAttribute('x2', '20');
        line.setAttribute('y2', '5');
        line.setAttribute('stroke', colors[index]);
        line.setAttribute('stroke-width', '2');
        itemGroup.appendChild(line);
        
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

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: any[];
  label?: string;
}

// Best Case ROI Data
const bestCaseROIData = [
  { quarter: '2025-Q1', value: -20.713355192666665 },
  { quarter: '2025-Q2', value: -41.60043351933333 },
  { quarter: '2025-Q3', value: -54.424003645999996 },
  { quarter: '2025-Q4', value: 4.314289020666658 },
  { quarter: '2026-Q1', value: 168.83290288733332 },
  { quarter: '2026-Q2', value: 375.622495154 },
  { quarter: '2026-Q3', value: 668.8003425539999 },
  { quarter: '2026-Q4', value: 1080.9050192206666 },
  { quarter: '2027-Q1', value: 1515.4225611539998 },
  { quarter: '2027-Q2', value: 2144.8538827539996 },
  { quarter: '2027-Q3', value: 2961.8300414873333 },
  { quarter: '2027-Q4', value: 3949.932236887333 }
];

// Worst Case ROI Data
const worstCaseROIData = [
  { quarter: '2025-Q1', value: -21.779672132666665 },
  { quarter: '2025-Q2', value: -49.353788706 },
  { quarter: '2025-Q3', value: -82.33189435266667 },
  { quarter: '2025-Q4', value: -99.93851241933334 },
  { quarter: '2026-Q1', value: -44.89268515266666 },
  { quarter: '2026-Q2', value: 28.892126180666672 },
  { quarter: '2026-Q3', value: 155.66908971400002 },
  { quarter: '2026-Q4', value: 357.26551424733333 },
  { quarter: '2027-Q1', value: 511.14698084733334 },
  { quarter: '2027-Q2', value: 787.812410514 },
  { quarter: '2027-Q3', value: 1168.0399578473332 },
  { quarter: '2027-Q4', value: 1628.0720425806667 }
];

// Optimal Case ROI Data
const optimalCaseROIData = [
  { quarter: '2025-Q1', value: -21.113224045333332 },
  { quarter: '2025-Q2', value: -44.507941712 },
  { quarter: '2025-Q3', value: -65.656211292 },
  { quarter: '2025-Q4', value: -41.822856691999995 },
  { quarter: '2026-Q1', value: 71.42823617466668 },
  { quarter: '2026-Q2', value: 215.166954708 },
  { quarter: '2026-Q3', value: 429.2155969746667 },
  { quarter: '2026-Q4', value: 741.1971482413334 },
  { quarter: '2027-Q1', value: 1037.3416470413333 },
  { quarter: '2027-Q2', value: 1488.8298899746667 },
  { quarter: '2027-Q3', value: 2081.6348153746667 },
  { quarter: '2027-Q4', value: 2794.4783574413336 }
];

// Combined data for the chart with values divided by 10
const chartData = bestCaseROIData.map((item, index) => ({
  quarter: item.quarter,
  bestCase: +(item.value / 10).toFixed(2),
  worstCase: +(worstCaseROIData[index].value / 10).toFixed(2),
  optimalCase: +(optimalCaseROIData[index].value / 10).toFixed(2),
}));

const ROIProjectionsChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportSVG = () => {
    if (chartRef.current) {
      exportToSVG(chartRef.current, 'roi-projections-chart');
    }
  };

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      // Remove duplicates by using a Set with the dataKey
      const uniquePayload = Array.from(
        new Map(payload.map(item => [item.dataKey, item])).values()
      );
      
      return (
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p className="mb-2 text-sm font-medium text-gray-900">{label}</p>
          {uniquePayload.map((entry: any, index: number) => (
            <p
              key={index}
              className="text-sm"
              style={{ color: entry.color }}
            >
              {entry.name}: {(entry.value * 10).toFixed(2)}%
            </p>
          ))}
        </div>
      );
    }
    return null;
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
      <div ref={chartRef} className="h-[500px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
            <XAxis
              dataKey="quarter"
              tick={{ fill: '#4B5563', fontSize: 14 }}
              tickLine={{ stroke: '#E0E0E0' }}
            />
            <YAxis
              tick={{ fill: '#4B5563', fontSize: 14 }}
              tickLine={{ stroke: '#E0E0E0' }}
              tickFormatter={(value) => `${value * 10}%`}
              domain={['dataMin', 'dataMax']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            
            {/* Best Case */}
            <Area
              type="monotone"
              dataKey="bestCase"
              name="Best Case"
              fill="#8B5CF6"
              stroke="#8B5CF6"
              fillOpacity={0.2}
              strokeWidth={0}
              legendType="none"
            />
            <Line
              type="monotone"
              dataKey="bestCase"
              name="Best Case"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{ fill: '#8B5CF6', r: 4 }}
              activeDot={{ r: 6 }}
            />

            {/* Worst Case */}
            <Area
              type="monotone"
              dataKey="worstCase"
              name="Worst Case"
              fill="#EF4444"
              stroke="#EF4444"
              fillOpacity={0.2}
              strokeWidth={0}
              legendType="none"
            />
            <Line
              type="monotone"
              dataKey="worstCase"
              name="Worst Case"
              stroke="#EF4444"
              strokeWidth={2}
              dot={{ fill: '#EF4444', r: 4 }}
              activeDot={{ r: 6 }}
            />

            {/* Optimal Case */}
            <Area
              type="monotone"
              dataKey="optimalCase"
              name="Optimal Case"
              fill="#10B981"
              stroke="#10B981"
              fillOpacity={0.2}
              strokeWidth={0}
              legendType="none"
            />
            <Line
              type="monotone"
              dataKey="optimalCase"
              name="Optimal Case"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ fill: '#10B981', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ROIProjectionsChart; 