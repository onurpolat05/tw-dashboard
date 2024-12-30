import React, { useRef } from 'react';
import { ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, ScatterChart, Scatter, Cell } from 'recharts';
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

interface IRRSensitivityProps {
  data: Array<{ x: number; y: number; value: number }>;
  title: string;
  maxValue: number;
  onExport: () => void;
}

const IRRSensitivityHeatmap: React.FC<IRRSensitivityProps> = ({ data, title, maxValue, onExport }) => {
  // Generate color based on value
  const getColor = (value: number) => {
    const normalizedValue = value / maxValue;
    const hue = 120 * normalizedValue; // 0 is red, 120 is green
    return `hsl(${hue}, 70%, 40%)`;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload[0]) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-lg">
          <p className="text-sm font-medium text-gray-900">IRR: {data.value.toFixed(1)}%</p>
          <p className="text-sm text-gray-600">Revenue Change: {data.x}%</p>
          <p className="text-sm text-gray-600">Cost Change: {data.y}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
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
          <ScatterChart
            margin={{ top: 20, right: 20, bottom: 20, left: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="x"
              name="Revenue Change"
              domain={[-30, 30]}
              tickCount={7}
              tick={{ fontSize: 12 }}
              label={{ value: 'Revenue Change (%)', position: 'bottom', offset: 5 }}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Cost Change"
              domain={[-30, 30]}
              tickCount={7}
              tick={{ fontSize: 12 }}
              label={{ value: 'Cost Change (%)', angle: -90, position: 'left', offset: 10 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Scatter
              data={data}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={getColor(entry.value)}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IRRSensitivityHeatmap; 