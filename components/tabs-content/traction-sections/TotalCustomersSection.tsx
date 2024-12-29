import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Trophy, Megaphone, Brain } from 'lucide-react';

const TotalCustomersSection = () => {
  const insights = [
    {
      icon: Trophy,
      title: 'Pre-seed Milestone',
      description: '41 paying customers represent a significant milestone for the pre-seed stage',
    },
    {
      icon: Megaphone,
      title: 'Marketing Success',
      description: 'Users acquired through 82-day marketing campaign with $300 budget',
    },
    {
      icon: Brain,
      title: 'User Insights',
      description: 'Early adoption provides valuable insights into user behavior and feature usage',
    },
  ];

  const metrics = [
    { label: 'Average Revenue Per User', value: '$265.70' },
    { label: 'Customer Acquisition Cost', value: '$7.32' },
    { label: 'Trial to Paid Conversion', value: '34.62%' },
    { label: 'Monthly Active Users', value: '37' },
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
              <Users className="w-10 h-10 text-[#4ADE80]" />
              <h2 className="text-4xl font-bold text-[#4ADE80]">41</h2>
            </div>
            <h3 className="text-2xl font-semibold text-[#20152E]">Total Customers</h3>
            <p className="text-lg text-[#20152E]">
              Early Adoption Demonstrated During MVP Test Phase
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-gray-600">
            During the one-year MVP test phase, TradeWizz successfully acquired 41 paying customers, demonstrating initial traction and validating early interest in the platform's core value proposition.
          </p>
        </div>

        {/* Customer Insights Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-4">
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

export default TotalCustomersSection; 