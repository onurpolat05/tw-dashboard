import React from 'react';
import { Card } from '@/components/ui/card';
import { DollarSign, Truck, ShoppingBag } from 'lucide-react';

const RevenueDistributionSection = () => {
  const currentDistribution = [
    {
      icon: DollarSign,
      title: 'SaaS Subscriptions',
      value: '65%',
      amount: '$45K/month',
      description: 'Core subscription revenue from the platform',
      iconBg: 'bg-[#4ADE80]/10',
      iconColor: 'text-[#4ADE80]',
    },
    {
      icon: Truck,
      title: '3PL Services',
      value: '25%',
      amount: '$17K/month',
      description: 'Revenue from logistics and fulfillment',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500',
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      value: '10%',
      amount: '$7K/month',
      description: 'Commission from Twizz Shop transactions',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-500',
    },
  ];

  const projectedDistribution = [
    {
      icon: DollarSign,
      title: 'SaaS Subscriptions',
      value: '50%',
      amount: '$350K/month',
      description: 'Expanded subscription base with premium tiers',
      iconBg: 'bg-[#4ADE80]/10',
      iconColor: 'text-[#4ADE80]',
    },
    {
      icon: Truck,
      title: '3PL Services',
      value: '30%',
      amount: '$210K/month',
      description: 'Scaled logistics network and operations',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500',
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      value: '20%',
      amount: '$140K/month',
      description: 'Increased marketplace adoption and GMV',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-500',
    },
  ];

  const growthMetrics = [
    {
      label: 'Total Monthly Revenue',
      current: '$69K',
      projected: '$700K',
      growth: '915%',
    },
    {
      label: 'Average Revenue Per User',
      current: '$460',
      projected: '$583',
      growth: '27%',
    },
    {
      label: 'Gross Margin',
      current: '79%',
      projected: '75%',
      growth: '-4%',
    },
  ];

  return (
    <Card className="p-4 md:p-6 bg-[#F8F8F8]">
      <div className="space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-[#20152E]">
              Revenue Distribution Analysis
            </h2>
            <p className="text-base md:text-lg text-[#20152E]">
              Current vs. Projected Revenue Mix (2027)
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-sm text-gray-600 md:text-base">
            Comparison of current and projected revenue distribution across our three main revenue streams.
          </p>
        </div>

        {/* Distribution Comparison */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Current Distribution */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#20152E]">Current Distribution</h3>
            <div className="space-y-4">
              {currentDistribution.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 ${item.iconBg} rounded-lg`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium text-[#20152E]">{item.title}</h4>
                        <span className={`text-lg font-bold ${item.iconColor}`}>{item.value}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-gray-500">{item.description}</p>
                        <span className="text-sm font-medium text-gray-600">{item.amount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projected Distribution */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#20152E]">Projected Distribution (2027)</h3>
            <div className="space-y-4">
              {projectedDistribution.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 ${item.iconBg} rounded-lg`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium text-[#20152E]">{item.title}</h4>
                        <span className={`text-lg font-bold ${item.iconColor}`}>{item.value}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-gray-500">{item.description}</p>
                        <span className="text-sm font-medium text-gray-600">{item.amount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth Metrics */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {growthMetrics.map((metric, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-600">{metric.label}</h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Current</p>
                    <p className="text-lg font-bold text-[#20152E]">{metric.current}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">2027</p>
                    <p className="text-lg font-bold text-[#20152E]">{metric.projected}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Growth</p>
                    <p className={`text-lg font-bold ${parseFloat(metric.growth) >= 0 ? 'text-[#4ADE80]' : 'text-red-500'}`}>
                      {metric.growth}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default RevenueDistributionSection; 