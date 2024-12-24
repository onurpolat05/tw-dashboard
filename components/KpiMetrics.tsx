import React from 'react';
import { DollarSign, Users, Target, Activity, TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { MetricCardProps } from '@/types/types';

const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, change, icon: Icon }) => {
  const isPositive = trend === 'up';
  return (
    <Card className="p-6 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Icon className="w-5 h-5 text-purple-600" />
          </div>
          <span className="text-sm font-medium text-gray-500">{title}</span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
        <div className="flex items-center space-x-1">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-green-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
        </div>
      </div>
    </Card>
  );
};

const KpiMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-6">
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
  );
};

export default KpiMetrics; 