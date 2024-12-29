import React from 'react';
import { Card } from '@/components/ui/card';

const ROIMetricCards = () => {
  return (
    <div className="space-y-4 w-full">
      {/* Best Case Card */}
      <Card className="p-6 bg-gradient-to-br from-violet-50 to-white border-violet-100">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-violet-600">Best Case Return</h3>
          <div className="flex items-baseline space-x-2">
            <p className="text-3xl font-bold text-violet-900">39.49x</p>
            <p className="text-sm text-violet-600">return on investment</p>
          </div>
          <p className="text-sm text-violet-600">Highest potential return scenario</p>
        </div>
      </Card>

      {/* Optimal Case Card */}
      <Card className="p-6 bg-gradient-to-br from-emerald-50 to-white border-emerald-100">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-emerald-600">Optimal Case Return</h3>
          <div className="flex items-baseline space-x-2">
            <p className="text-3xl font-bold text-emerald-900">27.95x</p>
            <p className="text-sm text-emerald-600">return on investment</p>
          </div>
          <p className="text-sm text-emerald-600">Expected optimal scenario</p>
        </div>
      </Card>

      {/* Worst Case Card */}
      <Card className="p-6 bg-gradient-to-br from-red-50 to-white border-red-100">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-red-600">Worst Case Return</h3>
          <div className="flex items-baseline space-x-2">
            <p className="text-3xl font-bold text-red-900">16.28x</p>
            <p className="text-sm text-red-600">return on investment</p>
          </div>
          <p className="text-sm text-red-600">Minimum expected return</p>
        </div>
      </Card>
    </div>
  );
};

export default ROIMetricCards; 