import React from 'react';
import TwoSimplePieChart from './TwoSimplePieChart';

// Using consistent colors from design system for each business model
const BUSINESS_MODEL_COLORS = {
  'Drop (PL, Manual)': '#9333EA',    // Purple
  'Arbitrage(Retail, Online)': '#D946EF', // Fuchsia
  'PL': '#4F46E5',                   // Indigo
  'Wholesale': '#8B5CF6',            // Violet
};

interface DataItem {
  name: string;
  value: number;
}

const CustomerSegmentationCharts = () => {
  // Data from CSV converted to proper format for each year
  const year2025Data = [
    { name: 'Drop (PL, Manual)', value: 0.0375 * 100 },
    { name: 'Arbitrage(Retail, Online)', value: 0.875 * 100 },
    { name: 'PL', value: 0.0875 * 100 },
    { name: 'Wholesale', value: 0 },
  ];

  const year2026Data = [
    { name: 'Drop (PL, Manual)', value: 0.2073 * 100 },
    { name: 'Arbitrage(Retail, Online)', value: 0.3029 * 100 },
    { name: 'PL', value: 0.4081 * 100 },
    { name: 'Wholesale', value: 0.0909 * 100 },
  ];

  const year2027Data = [
    { name: 'Drop (PL, Manual)', value: 0.25 * 100 },
    { name: 'Arbitrage(Retail, Online)', value: 0.3333 * 100 },
    { name: 'PL', value: 0.25 * 100 },
    { name: 'Wholesale', value: 0.1667 * 100 },
  ];

  const colors = Object.values(BUSINESS_MODEL_COLORS);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TwoSimplePieChart
          data={year2025Data}
          colors={colors}
          title="2025"
        />
        <TwoSimplePieChart
          data={year2026Data}
          colors={colors}
          title="2026"
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2">
          <TwoSimplePieChart
            data={year2027Data}
            colors={colors}
            title="2027"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {Object.entries(BUSINESS_MODEL_COLORS).map(([name, color]) => (
            <div key={name} className="flex gap-2 items-center">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: color }}
              />
              <span className="text-xs text-gray-600">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSegmentationCharts; 