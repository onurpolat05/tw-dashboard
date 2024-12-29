import React from 'react';
import { Card } from '@/components/ui/card';
import { DollarSign, Users, ShoppingBag, Truck } from 'lucide-react';

const RevenueModelSection = () => {
  const revenueStreams = [
    {
      icon: DollarSign,
      title: 'Subscription Revenue',
      description: 'Monthly recurring revenue from SaaS subscriptions',
      metrics: [
        { label: 'Current MRR', value: '$45K' },
        { label: 'Target MRR (2027)', value: '$350K' },
        { label: 'CAGR', value: '45%' },
      ],
      iconBg: 'bg-[#4ADE80]/10',
      iconColor: 'text-[#4ADE80]',
    },
    {
      icon: Users,
      title: 'Customer Growth',
      description: 'Projected customer acquisition and retention',
      metrics: [
        { label: 'Current Customers', value: '150' },
        { label: 'Target (2027)', value: '1,200' },
        { label: 'Growth Rate', value: '35%' },
      ],
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-500',
    },
    {
      icon: ShoppingBag,
      title: 'Twizz Shop Revenue',
      description: 'Revenue from marketplace transactions',
      metrics: [
        { label: 'Current GMV', value: '$25K' },
        { label: 'Target GMV (2027)', value: '$200K' },
        { label: 'Take Rate', value: '8%' },
      ],
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-500',
    },
    {
      icon: Truck,
      title: '3PL Services',
      description: 'Revenue from logistics and fulfillment services',
      metrics: [
        { label: 'Current Revenue', value: '$15K' },
        { label: 'Target (2027)', value: '$150K' },
        { label: 'Margin', value: '25%' },
      ],
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500',
    },
  ];

  const keyHighlights = [
    {
      label: 'Total Revenue Target (2027)',
      value: '$700K/month',
      description: 'Combined revenue from all streams',
    },
    {
      label: 'Gross Margin',
      value: '75%',
      description: 'Blended margin across all revenue streams',
    },
    {
      label: 'Revenue Mix (2027)',
      value: '50/30/20',
      description: 'SaaS/3PL/Marketplace split',
    },
  ];

  return (
    <Card className="p-4 md:p-6 bg-[#F8F8F8]">
      <div className="space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-[#20152E]">
              Revenue Model & Growth Strategy
            </h2>
            <p className="text-base md:text-lg text-[#20152E]">
              Three-Pronged Approach to Revenue Generation
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-sm text-gray-600 md:text-base">
            Our revenue model combines SaaS subscriptions, marketplace transactions, and logistics services to create multiple revenue streams and enhance customer value.
          </p>
        </div>

        {/* Revenue Streams Grid */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {revenueStreams.map((stream, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 ${stream.iconBg} rounded-lg`}>
                    <stream.icon className={`w-8 h-8 ${stream.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#20152E]">{stream.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{stream.description}</p>
                <div className="space-y-2">
                  {stream.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{metric.label}</span>
                      <span className="text-sm font-medium text-[#20152E]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3">
          {keyHighlights.map((highlight, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">{highlight.label}</h4>
                <p className="text-2xl font-bold text-[#20152E]">{highlight.value}</p>
                <p className="text-sm text-gray-500">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default RevenueModelSection; 