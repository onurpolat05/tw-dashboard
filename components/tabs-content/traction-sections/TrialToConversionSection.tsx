import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowUpRight, BarChart, Users, TrendingUp } from 'lucide-react';

const TrialToConversionSection = () => {
  const insights = [
    {
      icon: BarChart,
      title: 'Conversion Achievement',
      description: 'TradeWizz achieved a 19.51% trial-to-paid conversion rate during the one-year MVP test.',
    },
    {
      icon: Users,
      title: 'User Value',
      description: 'Nearly one in five users who tried the platform\'s free trial found sufficient value to become paying customers.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Indicator',
      description: 'The conversion rate, coupled with the low CAC, suggests a positive initial response to the product\'s core features.',
    },
  ];

  const metrics = [
    { label: 'Average Days to Convert', value: '97.88' },
    { label: 'Trial Users', value: '26' },
    { label: 'Converted Users', value: '8' },
    { label: 'Avg Trial Usage', value: '1.88' },
  ];

  const timelineEvents = [
    {
      title: 'Trial Start',
      description: 'User signs up for free trial',
    },
    {
      title: 'Feature Exploration',
      description: 'Average 1.88 features used during trial',
    },
    {
      title: 'Conversion Point',
      description: 'Average 97.88 days to conversion',
    },
  ];

  return (
    <Card className="p-6 bg-[#F8F8F8]">
      <div className="space-y-6">
        {/* Header Section with Main Metric */}
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex justify-center items-center space-x-3">
              <ArrowUpRight className="w-10 h-10 text-[#4ADE80]" />
              <h2 className="text-4xl font-bold text-[#4ADE80]">34.62%</h2>
            </div>
            <h3 className="text-2xl font-semibold text-[#20152E]">Trial to Paid Conversion</h3>
            <p className="text-lg text-[#20152E]">
              Validating User Interest and Product-Market Fit
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-gray-600">
            The trial-to-paid conversion rate measures the percentage of free trial users who converted into paying customers during the MVP test phase. This metric demonstrates the effectiveness of the product in meeting user needs and driving conversions.
          </p>
        </div>

        {/* Conversion Insights Grid */}
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

        {/* Conversion Timeline */}
        <div className="p-6 bg-white rounded-lg border border-gray-100">
          <h4 className="text-lg font-semibold text-[#20152E] mb-4">Conversion Timeline</h4>
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

export default TrialToConversionSection; 