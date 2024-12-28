import React from 'react';
import { Card } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const RevenueMetricCards = () => {
  return (
    <div className="mt-6 space-y-4">
      {/* Top Three Cards */}
      <div className="grid grid-cols-3 gap-3">
        {/* Subscription Card */}
        <Card className="overflow-hidden relative p-4 bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
          <div className="relative z-10">
            <div className="flex gap-2 items-center mb-2">
              <div className="flex justify-center items-center w-8 h-8 bg-indigo-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm font-medium text-indigo-600">Subscription</p>
            </div>
            <p className="text-lg font-bold tracking-tight text-indigo-900">
              {formatCurrency(1519320.58)}
            </p>
          </div>
        </Card>

        {/* Warehouse Card */}
        <Card className="overflow-hidden relative p-4 bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <div className="relative z-10">
            <div className="flex gap-2 items-center mb-2">
              <div className="flex justify-center items-center w-8 h-8 bg-purple-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm font-medium text-purple-600">Warehouse</p>
            </div>
            <p className="text-lg font-bold tracking-tight text-purple-900">
              {formatCurrency(2208658.39)}
            </p>
          </div>
        </Card>

        {/* TW Shop Card */}
        <Card className="overflow-hidden relative p-4 bg-gradient-to-br from-fuchsia-50 to-white border-fuchsia-100">
          <div className="relative z-10">
            <div className="flex gap-2 items-center mb-2">
              <div className="flex justify-center items-center w-8 h-8 bg-fuchsia-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-fuchsia-600" />
              </div>
              <p className="text-sm font-medium text-fuchsia-600">TW Shop</p>
            </div>
            <p className="text-lg font-bold tracking-tight text-fuchsia-900">
              {formatCurrency(1287749.89)}
            </p>
          </div>
        </Card>
      </div>

      {/* Total Card - Bottom Center */}
      <div className="flex justify-center">
        <Card className="overflow-hidden relative p-6 w-2/3 bg-gradient-to-br from-violet-50 to-white border-violet-100">
          <div className="relative z-10">
            <div className="flex gap-2 justify-center items-center mb-2">
              <div className="flex justify-center items-center w-8 h-8 bg-violet-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-violet-600" />
              </div>
              <p className="text-sm font-medium text-violet-600">Total Revenue</p>
            </div>
            <p className="text-3xl font-bold tracking-tight text-center text-violet-900">
              {formatCurrency(5015728.86)}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RevenueMetricCards; 