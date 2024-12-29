import React from 'react';
import { Card } from '@/components/ui/card';
import { DollarSign, TrendingUp, Megaphone, Scale } from 'lucide-react';

const CustomerAcquisitionSection = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: 'Industry Performance',
      description: 'TradeWizz\'s CAC during the MVP test was $7.32, significantly lower than industry averages',
    },
    {
      icon: Megaphone,
      title: 'Marketing Efficiency',
      description: 'Limited marketing budget of $300 over 82-day campaign, resulting in 41 paying customers',
    },
    {
      icon: Scale,
      title: 'LTV:CAC Ratio',
      description: 'Low CAC coupled with strong LTV:CAC ratio demonstrates effectiveness of targeted marketing',
    },
  ];

  const metrics = [
    { label: 'Daily CAC', value: '$3.66' },
    { label: 'Marketing ROI', value: '473%' },
    { label: 'Campaign Duration', value: '82 days' },
    { label: 'Cost per Lead', value: '$1.43' },
  ];

  const timelineEvents = [
    {
      title: 'Campaign Launch',
      description: 'Initial budget allocation and channel setup',
    },
    {
      title: 'Mid-Campaign Optimization',
      description: 'Channel performance analysis and budget reallocation',
    },
    {
      title: 'Campaign Completion',
      description: 'Final results: 41 customers at $7.32 CAC',
    },
  ];

  return (
    <Card className="p-6 bg-[#F8F8F8]">
      <div className="space-y-6">
        {/* Header Section with Main Metric */}
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex justify-center items-center space-x-3">
              <DollarSign className="w-10 h-10 text-[#4ADE80]" />
              <h2 className="text-4xl font-bold text-[#4ADE80]">$7.32</h2>
            </div>
            <h3 className="text-2xl font-semibold text-[#20152E]">Customer Acquisition Cost (CAC)</h3>
            <p className="text-lg text-[#20152E]">
              Demonstrating Efficient Marketing Spend During the MVP Test
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-gray-600">
            Customer Acquisition Cost (CAC) represents the average cost incurred to acquire a single paying customer. During the MVP test phase, TradeWizz achieved a remarkably low CAC, indicating efficient marketing strategies and a strong initial product appeal.
          </p>
        </div>

        {/* CAC Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <insight.icon className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">{insight.title}</h3>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {metrics.map((metric, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-2xl font-bold text-[#4ADE80]">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Marketing Timeline */}
        <div className="p-6 bg-white rounded-lg border border-gray-100">
          <h4 className="text-lg font-semibold text-[#20152E] mb-4">Marketing Campaign Timeline</h4>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
            <div className="pl-8 space-y-6">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                  <h5 className="text-sm font-semibold text-[#20152E]">{event.title}</h5>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CustomerAcquisitionSection; 