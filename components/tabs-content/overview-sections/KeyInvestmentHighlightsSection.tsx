import React from 'react';
import { LineChart, CheckCircle, Users, DollarSign, BarChart2, UserPlus } from 'lucide-react';

const KeyInvestmentHighlightsSection = () => {
  const highlights = [
    {
      icon: LineChart,
      title: 'Large and Expanding Market',
      description: 'Multi-billion dollar market opportunity with evolution-focused solution',
    },
    {
      icon: CheckCircle,
      title: 'Proven Business Model',
      description: 'SaaS subscriptions, 3PL warehouse commissions, and Twizz Shop marketplace',
    },
    {
      icon: Users,
      title: 'Strong Early Traction',
      description: '41 paying customers with 19.51% trial-to-paid conversion',
    },
    {
      icon: DollarSign,
      title: 'Efficient Customer Acquisition',
      description: 'CAC: $7.32 during MVP with effective marketing strategies',
    },
    {
      icon: BarChart2,
      title: 'Positive Unit Economics',
      description: 'LTV:CAC ratio of 4.73x with strong ROI potential',
    },
    {
      icon: UserPlus,
      title: 'Experienced Team',
      description: 'E-commerce expertise with AI and SaaS background',
    },
  ];

  return (
    <div className="p-5 bg-gradient-to-br from-[#4ADE80]/10 to-white rounded-lg border border-[#4ADE80]/20">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-[#20152E]">Key Investment Highlights</h2>
          <p className="text-lg font-medium text-[#20152E]">Compelling Reasons to Invest in TradeWizz</p>
          <p className="text-[#20152E] leading-relaxed mt-4">
            TradeWizz presents a unique investment opportunity in the rapidly growing e-commerce SaaS market. The company's strong early traction, innovative platform, and experienced team position it for significant growth and market leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <highlight.icon className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyInvestmentHighlightsSection; 