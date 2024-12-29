import React from 'react';
import { ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, ScatterChart, Scatter, Cell } from 'recharts';

interface IRRSensitivityProps {
  data: Array<{ x: number; y: number; value: number }>;
  title: string;
  maxValue: number;
}

const IRRSensitivityHeatmap: React.FC<IRRSensitivityProps> = ({ data, title, maxValue }) => {
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
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
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