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

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-6">
            {/* First Row - User Focused Metrics */}
            <Card className="p-3 bg-gradient-to-br from-indigo-50 to-white border-indigo-100 md:p-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-indigo-600 md:text-sm">Total Unique Customers</p>
                <p className="text-xl font-semibold text-indigo-900 md:text-2xl">41</p>
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-medium text-emerald-600 md:text-sm">↑ Overall</span>
                  <span className="text-xs text-gray-500">lifetime</span>
                </div>
              </div>
            </Card>

            <Card className="p-3 bg-gradient-to-br from-violet-50 to-white border-violet-100 md:p-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-violet-600 md:text-sm">Trial Users</p>
                <p className="text-xl font-semibold text-violet-900 md:text-2xl">26</p>
                <p className="text-xs text-gray-500">total trial users</p>
              </div>
            </Card>

            <Card className="p-3 bg-gradient-to-br from-purple-50 to-white border-purple-100 md:p-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-purple-600 md:text-sm">Trial to Paid Conversion</p>
                <p className="text-xl font-semibold text-purple-900 md:text-2xl">34.62%</p>
                <p className="text-xs text-gray-500">conversion rate</p>
              </div>
            </Card>



            <Card className="p-3 bg-gradient-to-br from-teal-50 to-white border-teal-100 md:p-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-teal-600 md:text-sm">Revenue per Convert</p>
                <p className="text-xl font-semibold text-teal-900 md:text-2xl">${265.70}</p>
                <p className="text-xs text-gray-500">average</p>
              </div>
            </Card>


          </div>

      </div>
    </Card>
  );
};

export default TotalCustomersSection; 