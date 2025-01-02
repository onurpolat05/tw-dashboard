import React from 'react';
import { Card } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

const formatToMillions = (value: number) => {
  const millions = value / 1000000;
  return `$${millions.toFixed(1)}M`;
};

const RevenueMetricCards = () => {
  return (
    <div className="mt-4 space-y-4 md:mt-6 md:space-y-6">
      {/* Total Card - Top */}
      <div className="flex justify-center">
        <Card className="overflow-hidden relative p-6 w-full bg-gradient-to-br from-orange-50 to-white border-orange-100 shadow-sm md:w-2/3">
          <div className="relative z-10">
            <div className="flex gap-3 justify-center items-center mb-3">
              <div className="flex justify-center items-center w-8 h-8 bg-orange-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm font-medium text-orange-600">Total Revenue</p>
            </div>
            <p className="text-3xl font-semibold tracking-tight text-center text-orange-600">
              {formatToMillions(5015728.86)}
            </p>
          </div>
        </Card>
      </div>

      {/* Three Cards Below */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Subscription Card */}
        <Card className="overflow-hidden relative p-4 bg-gradient-to-br from-violet-50 to-white border-violet-100 shadow-sm">
          <div className="relative z-10">
            <div className="flex gap-3 justify-center items-center mb-2">
              <div className="flex justify-center items-center w-8 h-8 bg-violet-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-violet-600" />
              </div>
              <p className="text-sm font-medium text-violet-600">Subscription</p>
            </div>
            <p className="text-xl font-semibold tracking-tight text-center text-violet-600">
              {formatToMillions(1519320.58)}
            </p>
          </div>
        </Card>

        {/* Warehouse Card */}
        <Card className="overflow-hidden relative p-4 bg-gradient-to-br from-pink-50 to-white border-pink-100 shadow-sm">
          <div className="relative z-10">
            <div className="flex gap-3 justify-center items-center mb-2">
              <div className="flex justify-center items-center w-8 h-8 bg-pink-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-pink-600" />
              </div>
              <p className="text-sm font-medium text-pink-600">Warehouse</p>
            </div>
            <p className="text-xl font-semibold tracking-tight text-center text-pink-600">
              {formatToMillions(2208658.39)}
            </p>
          </div>
        </Card>

        {/* TW Shop Card */}
        <Card className="overflow-hidden relative p-4 bg-gradient-to-br from-emerald-50 to-white border-emerald-100 shadow-sm sm:col-span-2 lg:col-span-1">
          <div className="relative z-10">
            <div className="flex gap-3 justify-center items-center mb-2">
              <div className="flex justify-center items-center w-8 h-8 bg-emerald-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-sm font-medium text-emerald-600">TW Shop</p>
            </div>
            <p className="text-xl font-semibold tracking-tight text-center text-emerald-600">
              {formatToMillions(1287749.89)}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RevenueMetricCards; 