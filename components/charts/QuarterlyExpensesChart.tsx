import React, { useRef } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface DataItem {
  quarter: string;
  amount: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<any>;
  label?: string;
}

const data: DataItem[] = [
  { quarter: 'Q1 2025', amount: 70000 },
  { quarter: 'Q2 2025', amount: 110000 },
  { quarter: 'Q3 2025', amount: 160000 },
  { quarter: 'Q4 2025', amount: 280000 },
  { quarter: 'Q1 2026', amount: 270000 },
  { quarter: 'Q2 2026', amount: 340000 },
  { quarter: 'Q3 2026', amount: 380000 },
  { quarter: 'Q4 2026', amount: 380000 },
  { quarter: 'Q1 2027', amount: 800000 },
  { quarter: 'Q2 2027', amount: 830000 },
  { quarter: 'Q3 2027', amount: 820000 },
  { quarter: 'Q4 2027', amount: 820000 },
];

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-lg">
        <p className="mb-1 text-sm font-medium text-gray-600">{label}</p>
        <p className="text-base font-semibold text-gray-900">
          {formatCurrency(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

const CustomYAxisTick: React.FC<any> = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={4}
        textAnchor="end"
        fill="#6B7280"
        fontSize={12}
        fontWeight={500}
      >
        {`$${payload.value / 1000}k`}
      </text>
    </g>
  );
};

const CustomXAxisTick: React.FC<any> = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#6B7280"
        fontSize={12}
        fontWeight={500}
      >
        {payload.value}
      </text>
    </g>
  );
};

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

const QuarterlyExpensesChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportSVG = () => {
    if (chartRef.current) {
      exportToSVG(chartRef.current, 'quarterly-expenses-chart');
    }
  };

  return (
    <div className="h-[550px] w-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900">Quarterly Expenses</h3>
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
      <div ref={chartRef} className="h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data}
            margin={{ top: 20, right: 30, left: 40, bottom: 40 }}
            barSize={32}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#E5E7EB"
              strokeOpacity={0.8}
            />
            <XAxis
              dataKey="quarter"
              tick={<CustomXAxisTick />}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={<CustomYAxisTick />}
              tickLine={false}
              axisLine={false}
              width={60}
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ 
                fill: 'rgba(79, 70, 229, 0.1)'
              }}
            />
            <Bar 
              dataKey="amount" 
              fill="#4F46E5"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default QuarterlyExpensesChart; 