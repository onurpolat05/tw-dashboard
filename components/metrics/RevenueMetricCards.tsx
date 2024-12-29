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
    <div className="mt-4 md:mt-6 space-y-4 md:space-y-8">
      {/* Total Card - Top */}
      <div className="flex justify-center">
        <Card className="overflow-hidden relative p-4 md:p-6 w-full md:w-2/3 bg-gradient-to-br from-orange-50 to-white border-orange-100">
          <div className="relative z-10">
            <div className="flex gap-2 justify-center items-center mb-2">
              <div className="flex justify-center items-center w-6 h-6 md:w-8 md:h-8 bg-orange-100 rounded-lg">
                <DollarSign className="w-4 h-4 md:w-5 md:h-5" style={{ color: '#ff7300' }} />
              </div>
              <p className="text-xs md:text-sm font-medium" style={{ color: '#ff7300' }}>Total Revenue</p>
            </div>
            <p className="text-2xl md:text-3xl font-bold tracking-tight text-center" style={{ color: '#ff7300' }}>
              {formatCurrency(5015728.86)}
            </p>
          </div>
        </Card>
      </div>

      {/* Three Cards Below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {/* Subscription Card */}
        <Card className="overflow-hidden relative p-3 md:p-4 bg-gradient-to-br from-violet-50 to-white border-violet-100">
          <div className="relative z-10">
            <div className="flex gap-2 items-center mb-2">
              <div className="flex justify-center items-center w-6 h-6 md:w-8 md:h-8 bg-violet-100 rounded-lg">
                <DollarSign className="w-4 h-4 md:w-5 md:h-5" style={{ color: '#8B5CF6' }} />
              </div>
              <p className="text-xs md:text-sm font-medium" style={{ color: '#8B5CF6' }}>Subscription</p>
            </div>
            <p className="text-base md:text-lg font-bold tracking-tight" style={{ color: '#8B5CF6' }}>
              {formatCurrency(1519320.58)}
            </p>
          </div>
        </Card>

        {/* Warehouse Card */}
        <Card className="overflow-hidden relative p-3 md:p-4 bg-gradient-to-br from-pink-50 to-white border-pink-100">
          <div className="relative z-10">
            <div className="flex gap-2 items-center mb-2">
              <div className="flex justify-center items-center w-6 h-6 md:w-8 md:h-8 bg-pink-100 rounded-lg">
                <DollarSign className="w-4 h-4 md:w-5 md:h-5" style={{ color: '#EC4899' }} />
              </div>
              <p className="text-xs md:text-sm font-medium" style={{ color: '#EC4899' }}>Warehouse</p>
            </div>
            <p className="text-base md:text-lg font-bold tracking-tight" style={{ color: '#EC4899' }}>
              {formatCurrency(2208658.39)}
            </p>
          </div>
        </Card>

        {/* TW Shop Card */}
        <Card className="overflow-hidden relative p-3 md:p-4 bg-gradient-to-br from-emerald-50 to-white border-emerald-100 sm:col-span-2 lg:col-span-1">
          <div className="relative z-10">
            <div className="flex gap-2 items-center mb-2">
              <div className="flex justify-center items-center w-6 h-6 md:w-8 md:h-8 bg-emerald-100 rounded-lg">
                <DollarSign className="w-4 h-4 md:w-5 md:h-5" style={{ color: '#10B981' }} />
              </div>
              <p className="text-xs md:text-sm font-medium" style={{ color: '#10B981' }}>TW Shop</p>
            </div>
            <p className="text-base md:text-lg font-bold tracking-tight" style={{ color: '#10B981' }}>
              {formatCurrency(1287749.89)}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RevenueMetricCards; 