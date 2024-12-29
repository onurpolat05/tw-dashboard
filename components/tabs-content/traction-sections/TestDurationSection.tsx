import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, Users, Megaphone, Target } from 'lucide-react';

const TestDurationSection = () => {
  const dataPoints = [
    {
      icon: Calendar,
      title: 'Test Period',
      description: 'February 27, 2023 - February 26, 2024 (One Year)',
    },
    {
      icon: Target,
      title: 'Market Focus',
      description: 'Limited release targeting specific e-commerce sellers',
    },
    {
      icon: Users,
      title: 'User Base',
      description: '41 paying users acquired for metric analysis',
    },
    {
      icon: Megaphone,
      title: 'Marketing Campaign',
      description: '6-month marketing campaign, $300 budget, 82 days runtime',
    },
  ];

  return (
    <Card className="p-6 bg-[#F8F8F8]">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-[#20152E]">
            IV. Traction & Validation (MVP Test Results)
          </h2>
          <p className="text-lg text-[#20152E]">
            Test Duration: One Year of Focused Market Validation
          </p>
          <p className="text-gray-600">
            TradeWizz's initial market validation was conducted through a comprehensive one-year Minimum Viable Product (MVP) test, providing valuable data and insights into product-market fit and customer behavior.
          </p>
        </div>

        {/* Test Duration Data Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataPoints.map((point, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <point.icon className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">{point.title}</h3>
                  <p className="text-sm text-gray-600">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default TestDurationSection; 