import React, { useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
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

interface DataItem {
  name: string;
  value: number;
}

// Using consistent colors from design system for each business model
const BUSINESS_MODEL_COLORS = {
  'Drop (PL, Manual)': '#9333EA',    // Purple
  'Arbitrage(Retail, Online)': '#D946EF', // Fuchsia
  'PL': '#4F46E5',                   // Indigo
  'Wholesale': '#8B5CF6',            // Violet
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return percent * 100 > 5 ? (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor="middle"
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null;
};

interface PieChartProps {
  data: DataItem[];
  title: string;
  onExport: () => void;
}

const CustomPieChart = ({ data, title, onExport }: PieChartProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={onExport}
          className="flex gap-2 items-center"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">SVG</span>
        </Button>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={BUSINESS_MODEL_COLORS[entry.name as keyof typeof BUSINESS_MODEL_COLORS]} 
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => `${(value * 100).toFixed(1)}%`}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #E0E0E0',
                borderRadius: '4px',
                fontSize: '12px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: BUSINESS_MODEL_COLORS[item.name as keyof typeof BUSINESS_MODEL_COLORS] }}
              />
              <span className="text-xs text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CustomerSegmentationCharts = () => {
  const chart2025Ref = useRef<HTMLDivElement>(null);
  const chart2026Ref = useRef<HTMLDivElement>(null);
  const chart2027Ref = useRef<HTMLDivElement>(null);

  const handleExport2025 = () => {
    if (chart2025Ref.current) {
      exportToSVG(chart2025Ref.current, 'customer-segmentation-2025');
    }
  };

  const handleExport2026 = () => {
    if (chart2026Ref.current) {
      exportToSVG(chart2026Ref.current, 'customer-segmentation-2026');
    }
  };

  const handleExport2027 = () => {
    if (chart2027Ref.current) {
      exportToSVG(chart2027Ref.current, 'customer-segmentation-2027');
    }
  };

  // Data from CSV converted to proper format for each year
  const year2025Data = [
    { name: 'Drop (PL, Manual)', value: 0.0375 },
    { name: 'Arbitrage(Retail, Online)', value: 0.875 },
    { name: 'PL', value: 0.0875 },
    { name: 'Wholesale', value: 0 },
  ];

  const year2026Data = [
    { name: 'Drop (PL, Manual)', value: 0.2073 },
    { name: 'Arbitrage(Retail, Online)', value: 0.3029 },
    { name: 'PL', value: 0.4081 },
    { name: 'Wholesale', value: 0.0909 },
  ];

  const year2027Data = [
    { name: 'Drop (PL, Manual)', value: 0.25 },
    { name: 'Arbitrage(Retail, Online)', value: 0.3333 },
    { name: 'PL', value: 0.25 },
    { name: 'Wholesale', value: 0.1667 },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div ref={chart2025Ref}>
        <CustomPieChart
          data={year2025Data}
          title="2025"
          onExport={handleExport2025}
        />
      </div>
      <div ref={chart2026Ref}>
        <CustomPieChart
          data={year2026Data}
          title="2026"
          onExport={handleExport2026}
        />
      </div>
      <div ref={chart2027Ref}>
        <CustomPieChart
          data={year2027Data}
          title="2027"
          onExport={handleExport2027}
        />
      </div>
    </div>
  );
};

export default CustomerSegmentationCharts; 