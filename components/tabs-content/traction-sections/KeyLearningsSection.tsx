import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, DollarSign, AlertTriangle, Scale, Sparkles, Target } from 'lucide-react';

const KeyLearningsSection = () => {
  const learnings = [
    {
      icon: Users,
      title: 'Strong Initial Interest',
      description: 'Achieved 41 paying customers with a 19.51% trial-to-paid conversion rate, indicating strong value proposition resonance with target market.',
    },
    {
      icon: DollarSign,
      title: 'Efficient Customer Acquisition',
      description: 'Achieved remarkably low CAC of $7.32 through targeted marketing strategies and efficient channel optimization.',
    },
    {
      icon: AlertTriangle,
      title: 'External Factors Impact',
      description: 'Identified need for platform diversification due to impact of Amazon account bans on customer churn rate.',
    },
    {
      icon: Scale,
      title: 'LTV:CAC Validation',
      description: 'Achieved 4.73x LTV:CAC ratio, validating business model viability and establishing foundation for future growth.',
    },
    {
      icon: Sparkles,
      title: 'High Engagement Features',
      description: 'AI-driven product research, automated pricing, and multi-channel inventory sync emerged as most valued features.',
    },
    {
      icon: Target,
      title: 'Refined Target Audience',
      description: 'Gained deeper understanding of user needs and preferences, informing future product development priorities.',
    },
  ];

  const productImpact = [
    { label: 'Feature Usage Rate', value: '78%' },
    { label: 'User Satisfaction', value: '4.2/5.0' },
    { label: 'Feature Requests Implemented', value: '73%' },
  ];

  const marketImpact = [
    { label: 'Market Penetration', value: '0.02%' },
    { label: 'Brand Awareness', value: '12%' },
    { label: 'Competitor Analysis Score', value: '8.4/10' },
  ];

  const strategicFocus = {
    shortTerm: ['Platform diversification', 'Feature optimization', 'Churn reduction'],
    midTerm: ['Market expansion', 'Product scaling', 'Team growth'],
    longTerm: ['Market leadership', 'Global expansion', 'Platform ecosystem'],
  };

  return (
    <Card className="p-6 bg-[#F8F8F8]">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[#20152E]">
              Key Learnings: Actionable Insights from the MVP Test
            </h2>
            <p className="text-lg text-[#20152E]">
              Leveraging Data to Refine Product and Strategy for Future Growth
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-gray-600">
            The one-year MVP test phase provided valuable insights into user behavior, product-market fit, and the effectiveness of early marketing efforts. These learnings are crucial for shaping TradeWizz's future development and go-to-market strategy.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learnings.map((learning, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <learning.icon className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">{learning.title}</h3>
                  <p className="text-sm text-gray-600">{learning.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Impact */}
          <div className="p-6 bg-white rounded-lg border border-gray-100">
            <h4 className="text-lg font-semibold text-[#20152E] mb-4">Product Impact</h4>
            <div className="space-y-4">
              {productImpact.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{item.label}</span>
                  <span className="text-sm font-medium text-[#4ADE80]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Market Impact */}
          <div className="p-6 bg-white rounded-lg border border-gray-100">
            <h4 className="text-lg font-semibold text-[#20152E] mb-4">Market Impact</h4>
            <div className="space-y-4">
              {marketImpact.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{item.label}</span>
                  <span className="text-sm font-medium text-[#4ADE80]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Implications */}
        <div className="p-6 bg-white rounded-lg border border-gray-100">
          <h4 className="text-lg font-semibold text-[#20152E] mb-4">Strategic Implications</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-[#20152E]">Short-term Focus</h5>
              <ul className="space-y-2">
                {strategicFocus.shortTerm.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-[#20152E]">Mid-term Goals</h5>
              <ul className="space-y-2">
                {strategicFocus.midTerm.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-[#20152E]">Long-term Vision</h5>
              <ul className="space-y-2">
                {strategicFocus.longTerm.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default KeyLearningsSection; 