import React from 'react';
import { DollarSign, Users, Target, Activity, TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { MetricCardProps } from '@/types/types';

const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, change, icon: Icon }) => {
  const isPositive = trend === 'up';
  return (
    <Card className="p-4 space-y-2 transition-shadow duration-200 md:p-6 hover:shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 md:p-2 bg-purple-100 rounded-lg">
            <Icon className="w-4 h-4 text-purple-600 md:w-5 md:h-5" />
          </div>
          <span className="text-xs font-medium text-gray-500 md:text-sm line-clamp-1">{title}</span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900 md:text-2xl">{value}</h3>
        <div className="flex items-center space-x-1">
          {isPositive ? (
            <TrendingUp className="w-3 h-3 text-green-500 md:w-4 md:h-4" />
          ) : (
            <TrendingDown className="w-3 h-3 text-red-500 md:w-4 md:h-4" />
          )}
          <span className={`text-xs md:text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
        </div>
      </div>
    </Card>
  );
};

const KpiMetrics: React.FC = () => {
  return (
    <div className="overflow-x-auto pb-2 w-full">
      <div className="min-w-[768px]">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
          <MetricCard
            title="ARR"
            value="$864,000"
            trend="up"
            change="+11.11% vs prev month"
            icon={DollarSign}
          />
          <MetricCard
            title="Customer Churn Rate"
            value="2.4%"
            trend="down"
            change="-0.5% vs prev month"
            icon={Users}
          />
          <MetricCard
            title="LTV"
            value="$12,500"
            trend="up"
            change="+15% vs prev month"
            icon={Target}
          />
          <MetricCard
            title="CAC"
            value="$1,000"
            trend="down"
            change="-16.67% vs prev month"
            icon={Activity}
          />
          <MetricCard
            title="LTV:CAC Ratio"
            value="12.5"
            trend="up"
            change="+25% vs prev month"
            icon={Target}
          />
          <MetricCard
            title="NRR"
            value="115%"
            trend="up"
            change="+5% vs prev month"
            icon={TrendingUp}
          />
        </div>
      </div>
    </div>
  );
};

export default KpiMetrics; 