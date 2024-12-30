import React, { useRef } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
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
  { quarter: 'Q1', bestCase: -150000, optimalCase: -150000, worstCase: -150000 },
  { quarter: 'Q2', bestCase: -31070.03279, optimalCase: -31669.83607, worstCase: -32669.5082 },
  { quarter: 'Q3', bestCase: -31330.61749, optimalCase: -35092.0765, worstCase: -41361.17486 },
  { quarter: 'Q4', bestCase: -19235.35519, optimalCase: -31722.40437, worstCase: -49467.15847 },
  { quarter: 'Q5', bestCase: 88107.439, optimalCase: 35750.0319, worstCase: -26409.9271 },
  { quarter: 'Q6', bestCase: 246777.9208, optimalCase: 169876.6393, worstCase: 82568.7409 },
  { quarter: 'Q7', bestCase: 310184.3884, optimalCase: 215608.0778, worstCase: 110677.217 },
  { quarter: 'Q8', bestCase: 439766.7711, optimalCase: 321072.9634, worstCase: 190165.4453 },
  { quarter: 'Q9', bestCase: 618157.015, optimalCase: 467972.3269, worstCase: 302394.6368 },
  { quarter: 'Q10', bestCase: 651776.3129, optimalCase: 444216.7482, worstCase: 230822.1999 },
  { quarter: 'Q11', bestCase: 944146.9824, optimalCase: 677232.3644, worstCase: 414998.1445 },
  { quarter: 'Q12', bestCase: 1225464.238, optimalCase: 889207.3881, worstCase: 570341.321 },
  { quarter: 'Q13', bestCase: 1482153.293, optimalCase: 1069265.313, worstCase: 690048.1271 },
];

const formatCurrency = (value: number) => {
  const absValue = Math.abs(value);
  if (absValue >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else if (absValue >= 1000) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  return value.toString();
};

const CumulativeCashFlowChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportSVG = () => {
    if (chartRef.current) {
      exportToSVG(chartRef.current, 'cumulative-cash-flow-chart');
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p className="mb-2 text-sm font-medium text-gray-900">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p
              key={index}
              className="text-sm"
              style={{ color: entry.color }}
            >
              {entry.name}: ${formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const CustomLegend = (props: any) => {
    const { payload } = props;
    return (
      <div className="flex gap-6 justify-center">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex gap-2 items-center">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
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
      <div ref={chartRef} className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
            <XAxis
              dataKey="quarter"
              tick={{ fill: '#4B5563', fontSize: 12 }}
              tickLine={{ stroke: '#E0E0E0' }}
            />
            <YAxis
              tick={{ fill: '#4B5563', fontSize: 12 }}
              tickLine={{ stroke: '#E0E0E0' }}
              tickFormatter={formatCurrency}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
            <ReferenceLine y={0} stroke="#E0E0E0" strokeWidth={2} />
            
            <Line
              type="monotone"
              dataKey="bestCase"
              name="Best Case"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ fill: '#4F46E5', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="optimalCase"
              name="Optimal Case"
              stroke="#F59E0B"
              strokeWidth={2}
              dot={{ fill: '#F59E0B', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="worstCase"
              name="Worst Case"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ fill: '#10B981', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default CumulativeCashFlowChart; 