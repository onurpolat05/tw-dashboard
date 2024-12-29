import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Trophy, DollarSign, Users } from 'lucide-react';

const InvestmentOpportunitySection = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: 'Large and Growing Market',
      description: 'Addressing a multi-billion dollar market with a solution that meets the evolving needs of e-commerce sellers.',
    },
    {
      icon: Trophy,
      title: 'Strong Early Traction',
      description: 'Demonstrated product-market fit with 41 paying customers and a 19.51% trial-to-paid conversion rate in the MVP test phase.',
    },
    {
      icon: DollarSign,
      title: 'Exceptional ROI Potential',
      description: 'Achieved a 4.73x LTV:CAC ratio during the MVP test, indicating efficient customer acquisition and strong revenue potential.',
    },
    {
      icon: Users,
      title: 'Experienced and Dedicated Team',
      description: 'Led by a team with deep expertise in e-commerce, AI, and SaaS, committed to driving innovation and growth.',
    },
  ];

  const stats = [
    { label: 'Funding Goal', value: '$500K' },
    { label: 'LTV:CAC Ratio', value: '4.73x' },
    { label: 'Conversion Rate', value: '19.51%' },
    { label: 'Paying Customers', value: '41' },
  ];

  return (
    <Card className="p-6 bg-[#F8F8F8]">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[#20152E]">
              Investment Opportunity: Partner with TradeWizz and Shape the Future of E-commerce
            </h2>
            <p className="text-lg text-[#20152E]">
              Seeking $500K in Pre-Seed Funding to Accelerate Growth and Expand Platform Capabilities
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-gray-600">
            TradeWizz is seeking $500K in pre-seed funding to further develop its AI-powered platform, expand its team, and scale its customer acquisition efforts. This is an opportunity to invest in a high-growth e-commerce SaaS company with a unique value proposition and a strong potential for significant returns.
          </p>
        </div>

        {/* Key Investment Highlights */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {highlights.map((highlight, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <highlight.icon className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 space-y-6 text-center">
          <div className="p-8 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#20152E]">
                Join us in empowering e-commerce businesses worldwide
              </h3>
              <p className="text-gray-600">
                Contact us to learn more about this exciting investment opportunity
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Email:{' '}
                  <a href="mailto:infom@tradewizz.co" className="text-[#4ADE80] hover:underline">
                    info@tradewizz.co
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  Website:{' '}
                  <a
                    href="https://www.tradewizz.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4ADE80] hover:underline"
                  >
                    www.tradewizz.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6 lg:grid-cols-4">
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

export default InvestmentOpportunitySection; 