import React, { useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
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

interface DataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  { name: 'R&D Expenses', value: 44.6 },
  { name: 'Core Team Payroll', value: 16.5 },
  { name: 'Marketing Expenses', value: 13.4 },
  { name: 'Software Dev Payroll', value: 13.1 },
  { name: 'Other Payroll', value: 12.4 },
];

const COLORS = ['#4338CA', '#8B5CF6', '#EC4899', '#9333EA', '#6366F1'];

const CustomLegend: React.FC<any> = ({ payload }) => {
  // İlk üç öğe için ilk satır
  const firstRow = payload.slice(0, 3);
  // Son iki öğe için ikinci satır
  const secondRow = payload.slice(3);

  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      {/* İlk satır */}
      <div className="flex gap-12 justify-center">
        {firstRow.map((entry: any, index: number) => (
          <div key={`legend-1-${index}`} className="flex gap-2 items-center">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">
              {entry.payload.name} ({entry.payload.value}%)
            </span>
          </div>
        ))}
      </div>
      {/* İkinci satır */}
      <div className="flex gap-12 justify-center">
        {secondRow.map((entry: any, index: number) => (
          <div key={`legend-2-${index}`} className="flex gap-2 items-center">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">
              {entry.payload.name} ({entry.payload.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExpenseCategoriesChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportSVG = () => {
    if (chartRef.current) {
      exportToSVG(chartRef.current, 'expense-categories-chart');
    }
  };

  return (
    <div className="h-[550px] w-full p-4">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900">Top 5 Expense Categories (Average)</h3>
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
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              outerRadius={120}
              innerRadius={70}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  stroke="white"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name) => [`${value}%`, name]}
              contentStyle={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
            />
            <Legend 
              content={CustomLegend}
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseCategoriesChart; 