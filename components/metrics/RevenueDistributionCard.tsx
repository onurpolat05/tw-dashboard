import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import TwoSimplePieChart from '@/components/charts/TwoSimplePieChart';
import StackedRevenueChart from '@/components/charts/StackedRevenueChart';

// Updated colors to match the image
const COLORS = ['#8B5CF6', '#EC4899', '#10B981'];

const data2025 = [
  { name: 'Subscriptions', value: 50.20 },
  { name: 'Warehouse', value: 39.20 },
  { name: 'TW Shop', value: 10.60 },
];

const data2026 = [
  { name: 'Subscriptions', value: 31.20 },
  { name: 'Warehouse', value: 44.90 },
  { name: 'TW Shop', value: 23.90 },
];

const data2027 = [
  { name: 'Subscriptions', value: 29.00 },
  { name: 'Warehouse', value: 43.90 },
  { name: 'TW Shop', value: 27.10 },
];

const RevenueDistributionCard = () => {
  return (
    <Card className="p-3 md:p-4 lg:p-6">
      <CardHeader className="px-0 pt-0 pb-4 md:pb-6">
        <CardTitle className="text-xl md:text-2xl font-semibold text-gray-900">Revenue Distribution</CardTitle>
      </CardHeader>
      <div className="space-y-6 md:space-y-8">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="w-full h-[200px] md:h-[250px]">
              <TwoSimplePieChart data={data2025} colors={COLORS} title="2025" />
            </div>
            <div className="w-full h-[200px] md:h-[250px]">
              <TwoSimplePieChart data={data2026} colors={COLORS} title="2026" />
            </div>
            <div className="w-full h-[200px] md:h-[250px] sm:col-span-2 lg:col-span-1">
              <TwoSimplePieChart data={data2027} colors={COLORS} title="2027" />
            </div>
          </div>

          {/* Single Legend for all charts */}
          <div className="flex flex-wrap gap-3 md:gap-5 justify-center mt-4 md:mt-6">
            {data2025.map((entry, index) => (
              <div key={`legend-${index}`} className="flex gap-2 items-center">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-sm text-gray-600">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Sources Stacked Area Chart */}
        <div className="h-[300px] md:h-[400px] w-full">
          <StackedRevenueChart />
        </div>
      </div>
    </Card>
  );
};

export default RevenueDistributionCard; 