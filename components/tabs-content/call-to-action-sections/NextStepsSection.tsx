import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NextStepsSection = () => {
  const stats = [
    { label: 'Investment Stage', value: 'Pre-Seed' },
    { label: 'Minimum Investment', value: '$50K' },
    { label: 'Target Close', value: 'Q2 2024' },
    { label: 'Available Equity', value: '15%' },
  ];

  return (
    <Card className="p-6 bg-[#F8F8F8]">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[#20152E]">
              Next Steps: Let's Discuss How TradeWizz Can Transform Your Portfolio
            </h2>
            <p className="text-lg text-[#20152E]">
              Taking the First Step Towards a Promising Partnership
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-gray-600">
            We believe TradeWizz represents a compelling investment opportunity in the rapidly growing e-commerce SaaS market. We invite you to explore this opportunity further and discuss how TradeWizz can become a valuable addition to your portfolio.
          </p>
        </div>

        {/* Invitation and Action Section */}
        <div className="p-8 bg-white rounded-lg border border-gray-100 shadow-sm">
          <div className="mx-auto space-y-6 max-w-2xl">
            <p className="text-center text-gray-600">
              We are confident that TradeWizz has the potential to deliver exceptional returns. We are eager to share more detailed information, answer your questions, and discuss how we can work together to shape the future of e-commerce.
            </p>

            <div className="space-y-2 text-center">
              <p className="text-[#20152E] font-medium">
                Schedule a meeting with our team to discuss the investment opportunity and learn more about our vision for TradeWizz.
              </p>
              <Button 
                className="px-8 py-3 bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-white font-semibold rounded-lg transition-colors"
              >
                Schedule a Meeting
              </Button>
            </div>

            <div className="pt-4 text-center border-t">
              <p className="text-sm text-gray-600">
                Alternatively, download our detailed investor deck here:{' '}
                <a href="#" className="text-[#4ADE80] hover:underline font-medium">
                  Download Investor Deck
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Action Stats */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-[#4ADE80]">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default NextStepsSection; 