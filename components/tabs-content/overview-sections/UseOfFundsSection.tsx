import React from 'react';
import { Wallet, Code2, Users2, Megaphone } from 'lucide-react';

const UseOfFundsSection = () => {
  const fundAllocation = [
    {
      icon: Code2,
      title: 'Product Development',
      percentage: '40%',
      amount: '$200,000',
      description: 'Primary focus areas:',
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
      percentage: '30%',
      amount: '$150,000',
      description: 'Key hires in:',
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
      percentage: '30%',
      amount: '$150,000',
      description: 'Strategic initiatives:',
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
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
              <Wallet className="w-8 h-8 text-[#4ADE80]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#20152E]">Use of Funds: Strategic Allocation for Accelerated Growth</h2>
              <p className="text-lg font-medium text-[#20152E]">Investing in Product Development, Team Expansion, and Market Penetration</p>
            </div>
          </div>
          <p className="text-[#20152E] leading-relaxed mt-4 max-w-3xl mx-auto">
            The $500K pre-seed funding will be strategically allocated to fuel TradeWizz's growth and achieve key milestones across three critical areas: product development, team expansion, and market penetration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fundAllocation.map((allocation, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                      <allocation.icon className="w-8 h-8 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#20152E]">{allocation.title}</h3>
                  </div>
                  <span className="text-2xl font-bold text-[#4ADE80]">{allocation.percentage}</span>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600">{allocation.description}</p>
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    {allocation.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">Allocation: {allocation.amount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseOfFundsSection; 