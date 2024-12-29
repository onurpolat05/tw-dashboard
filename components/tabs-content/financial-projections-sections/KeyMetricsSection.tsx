import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign, Percent, Clock, Target } from 'lucide-react';

const KeyMetricsSection = () => {
  const metrics = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth Rate',
      value: '45%',
      description: 'Year-over-year revenue growth',
      trend: '+18%',
      trendLabel: 'vs. Previous Year',
      iconBg: 'bg-[#4ADE80]/10',
      iconColor: 'text-[#4ADE80]',
      trendColor: 'text-[#4ADE80]',
    },
    {
      icon: Users,
      title: 'Customer Acquisition',
      value: '85',
      description: 'New customers per month',
      trend: '+35%',
      trendLabel: 'vs. Previous Quarter',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-500',
      trendColor: 'text-[#4ADE80]',
    },
    {
      icon: DollarSign,
      title: 'Average Revenue Per User',
      value: '$583',
      description: 'Monthly revenue per customer',
      trend: '+27%',
      trendLabel: 'vs. Previous Year',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-500',
      trendColor: 'text-[#4ADE80]',
    },
    {
      icon: Percent,
      title: 'Gross Margin',
      value: '75%',
      description: 'Blended across all revenue streams',
      trend: '-4%',
      trendLabel: 'vs. Previous Year',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500',
      trendColor: 'text-red-500',
    },
    {
      icon: Clock,
      title: 'Customer Lifetime',
      value: '4.2 years',
      description: 'Average customer retention period',
      trend: '+0.8',
      trendLabel: 'vs. Previous Year',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-500',
      trendColor: 'text-[#4ADE80]',
    },
    {
      icon: Target,
      title: 'Customer Acquisition Cost',
      value: '$450',
      description: 'Average cost to acquire a customer',
      trend: '-15%',
      trendLabel: 'vs. Previous Year',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-500',
      trendColor: 'text-[#4ADE80]',
    },
  ];

  const benchmarks = [
    {
      category: 'Growth Metrics',
      metrics: [
        { label: 'T2D3 Growth Path', value: 'On Track', status: 'positive' },
        { label: 'Rule of 40', value: '48', status: 'positive' },
        { label: 'Magic Number', value: '1.2', status: 'positive' },
      ],
    },
    {
      category: 'Efficiency Metrics',
      metrics: [
        { label: 'CAC Payback Period', value: '9 months', status: 'positive' },
        { label: 'LTV/CAC Ratio', value: '5.2x', status: 'positive' },
        { label: 'Net Dollar Retention', value: '115%', status: 'positive' },
      ],
    },
  ];

  return (
    <Card className="p-4 md:p-6 bg-[#F8F8F8]">
      <div className="space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-[#20152E]">
              Key Financial & Growth Metrics
            </h2>
            <p className="text-base md:text-lg text-[#20152E]">
              Performance Indicators and Industry Benchmarks
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-sm text-gray-600 md:text-base">
            Tracking our key performance metrics against industry standards and growth targets.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 ${metric.iconBg} rounded-lg`}>
                      <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
                    </div>
                    <h3 className="text-sm font-medium text-[#20152E]">{metric.title}</h3>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className={`text-sm font-medium ${metric.trendColor}`}>{metric.trend}</span>
                    <span className="text-xs text-gray-500">{metric.trendLabel}</span>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#20152E]">{metric.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{metric.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benchmarks */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
          {benchmarks.map((benchmark, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#20152E]">{benchmark.category}</h4>
                <div className="space-y-3">
                  {benchmark.metrics.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{item.label}</span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${
                          item.status === 'positive' ? 'text-[#4ADE80]' : 'text-red-500'
                        }`}>
                          {item.value}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${
                          item.status === 'positive' ? 'bg-[#4ADE80]' : 'bg-red-500'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default KeyMetricsSection; 