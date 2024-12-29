import React from 'react';
import { DollarSign, Code2, Users2, Megaphone } from 'lucide-react';

const FundingAskSection = () => {
  const allocationItems = [
    {
      icon: Code2,
      title: 'Product Development',
      description: 'Enhance AI capabilities, expand platform features, and improve user experience',
      percentage: '40%',
      amount: '$200,000',
      items: [
        'AI algorithm enhancement',
        'Platform feature expansion',
        'User experience improvements',
        'Infrastructure scalability',
      ],
    },
    {
      icon: Users2,
      title: 'Team Expansion',
      description: 'Grow engineering, product, and customer success teams',
      percentage: '30%',
      amount: '$150,000',
      items: [
        'Engineering team',
        'Product development',
        'Customer success',
        'Sales and marketing',
      ],
    },
    {
      icon: Megaphone,
      title: 'Marketing & Sales',
      description: 'Scale customer acquisition and build brand awareness',
      percentage: '30%',
      amount: '$150,000',
      items: [
        'Digital marketing campaigns',
        'Sales team development',
        'Brand awareness building',
        'Market expansion activities',
      ],
    },
  ];

  return (
    <div className="p-5 bg-[#F8F8F8] rounded-lg">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
              <DollarSign className="w-8 h-8 text-[#4ADE80]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#20152E]">Funding Ask: $500K Seed Round</h2>
              <p className="text-lg font-medium text-[#20152E]">Fueling Growth and Platform Expansion</p>
            </div>
          </div>
          <p className="text-[#20152E] leading-relaxed mt-4">
            TradeWizz is seeking $500,000 in pre-seed funding to accelerate its growth trajectory and expand its platform capabilities. This investment will be strategically allocated across key business areas to maximize impact and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allocationItems.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
              <div className="flex flex-col space-y-3">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg w-fit">
                  <item.icon className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-[#4ADE80]">{item.percentage}</span>
                    <span className="text-gray-600 ml-2">({item.amount})</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                        <span className="text-sm text-gray-600">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundingAskSection; 