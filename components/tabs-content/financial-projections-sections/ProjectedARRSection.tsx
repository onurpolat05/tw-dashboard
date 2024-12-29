import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingDown, Scale, TrendingUp } from 'lucide-react';

const ProjectedARRSection = () => {
  const scenarios = [
    {
      icon: TrendingDown,
      title: 'Worst Case',
      value: '$365.04K',
      description: 'This scenario assumes the highest churn rates (as outlined in the ACR projections) and lower-than-expected adoption of the 3PL and Twizz Shop features.',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-500',
      valueColor: 'text-red-500',
    },
    {
      icon: Scale,
      title: 'Optimal Case',
      value: '$1,231.43K',
      description: 'This scenario reflects a moderate churn rate and a reasonable adoption rate for the 3PL and Twizz Shop features, based on internal projections.',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-500',
      valueColor: 'text-yellow-500',
    },
    {
      icon: TrendingUp,
      title: 'Best Case',
      value: '$2,159.55K',
      description: 'This scenario assumes the lowest churn rates, strong customer acquisition, and high adoption rates for the 3PL and Twizz Shop features.',
      iconBg: 'bg-[#4ADE80]/10',
      iconColor: 'text-[#4ADE80]',
      valueColor: 'text-[#4ADE80]',
    },
  ];

  const growthAssumptions = [
    {
      label: 'Customer Growth Rate',
      values: [
        { value: '27%', color: 'text-red-500' },
        { value: '42%', color: 'text-yellow-500' },
        { value: '65%', color: 'text-[#4ADE80]' },
      ],
    },
    {
      label: 'Feature Adoption Rate',
      values: [
        { value: '45%', color: 'text-red-500' },
        { value: '65%', color: 'text-yellow-500' },
        { value: '85%', color: 'text-[#4ADE80]' },
      ],
    },
    {
      label: 'Revenue per Customer',
      values: [
        { value: '$215', color: 'text-red-500' },
        { value: '$325', color: 'text-yellow-500' },
        { value: '$445', color: 'text-[#4ADE80]' },
      ],
    },
  ];

  const retentionMetrics = [
    {
      label: 'Customer Retention Rate',
      values: [
        { value: '75%', color: 'text-red-500' },
        { value: '85%', color: 'text-yellow-500' },
        { value: '92%', color: 'text-[#4ADE80]' },
      ],
    },
    {
      label: 'Net Revenue Retention',
      values: [
        { value: '95%', color: 'text-red-500' },
        { value: '115%', color: 'text-yellow-500' },
        { value: '135%', color: 'text-[#4ADE80]' },
      ],
    },
    {
      label: 'Expansion Revenue',
      values: [
        { value: '15%', color: 'text-red-500' },
        { value: '27%', color: 'text-yellow-500' },
        { value: '45%', color: 'text-[#4ADE80]' },
      ],
    },
  ];

  const timelineEvents = [
    {
      title: 'Early Growth (2024-2025)',
      description: 'Focus on customer acquisition and product refinement',
    },
    {
      title: 'Expansion Phase (2025-2026)',
      description: 'Market expansion and feature adoption acceleration',
    },
    {
      title: 'Maturity (2027)',
      description: 'Stable growth and optimized unit economics',
    },
  ];

  return (
    <Card className="p-4 md:p-6 bg-[#F8F8F8]">
      <div className="space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-[#20152E]">
              Projected ARR (2027): Scenario Analysis
            </h2>
            <p className="text-base md:text-lg text-[#20152E]">
              Forecasting Annual Recurring Revenue Based on Different Scenarios
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-sm text-gray-600 md:text-base">
            Projected Annual Recurring Revenue (ARR) for 2027 is presented under three different scenarios.
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 ${scenario.iconBg} rounded-lg`}>
                      <scenario.icon className={`w-8 h-8 ${scenario.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#20152E]">{scenario.title}</h3>
                  </div>
                </div>
                <div className="py-4 text-center">
                  <p className={`text-3xl font-bold ${scenario.valueColor}`}>{scenario.value}</p>
                </div>
                <p className="text-sm text-gray-600">{scenario.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Assumptions */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
          {/* Growth Assumptions */}
          <div className="p-6 bg-white rounded-lg border border-gray-100">
            <h4 className="text-lg font-semibold text-[#20152E] mb-4">Growth Assumptions</h4>
            <div className="space-y-4">
              {growthAssumptions.map((assumption, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{assumption.label}</span>
                  <div className="flex space-x-4">
                    {assumption.values.map((value, idx) => (
                      <span key={idx} className={`text-sm font-medium ${value.color}`}>
                        {value.value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Retention Metrics */}
          <div className="p-6 bg-white rounded-lg border border-gray-100">
            <h4 className="text-lg font-semibold text-[#20152E] mb-4">Retention Metrics</h4>
            <div className="space-y-4">
              {retentionMetrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{metric.label}</span>
                  <div className="flex space-x-4">
                    {metric.values.map((value, idx) => (
                      <span key={idx} className={`text-sm font-medium ${value.color}`}>
                        {value.value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth Timeline */}
        <div className="p-6 bg-white rounded-lg border border-gray-100">
          <h4 className="text-lg font-semibold text-[#20152E] mb-4">Growth Timeline</h4>
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

export default ProjectedARRSection; 