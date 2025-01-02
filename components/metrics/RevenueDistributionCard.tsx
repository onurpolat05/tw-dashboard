import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import TwoSimplePieChart from '@/components/charts/TwoSimplePieChart';
import StackedRevenueChart from '@/components/charts/StackedRevenueChart';

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
    <Card className="p-6">
      <CardHeader className="px-0 pt-0 pb-6">
        <CardTitle className="text-2xl font-semibold text-gray-900">Revenue Distribution</CardTitle>
      </CardHeader>
      <div className="space-y-1">
        {/* Pie Charts Section */}
        <div className="space-y-1">
          {/* Top row with 2025 and 2026 */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <TwoSimplePieChart data={data2025} colors={COLORS} title="2025" />
            <TwoSimplePieChart data={data2026} colors={COLORS} title="2026" />
          </div>

          {/* Bottom centered 2027 */}
          <div className="flex justify-center">
            <div className="w-full sm:w-1/2 lg:w-2/5">
              <TwoSimplePieChart data={data2027} colors={COLORS} title="2027" />
            </div>
          </div>

          {/* Single Legend for all charts */}
          <div className="flex flex-wrap gap-6 justify-center">
            {data2025.map((entry, index) => (
              <div key={`legend-${index}`} className="flex gap-2 items-center">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-sm font-medium text-gray-600">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Sources Trend Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Revenue Sources Trend</h3>
          <div className="h-[400px] w-full">
            <StackedRevenueChart />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RevenueDistributionCard; 