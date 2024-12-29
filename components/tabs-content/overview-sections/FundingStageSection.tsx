import React from 'react';
import { Sprout } from 'lucide-react';

const FundingStageSection = () => {
  return (
    <div className="p-5 bg-[#F8F8F8] rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3 flex items-start space-x-3">
          <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
            <Sprout className="w-8 h-8 text-[#4ADE80]" />
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-[#20152E]">Funding Stage</h2>
            <div className="text-2xl font-bold text-[#4ADE80]">Pre-Seed</div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <p className="text-[#20152E] leading-relaxed">
            TradeWizz is currently in the pre-seed funding stage, seeking investment to further develop its platform, scale its operations, and accelerate market penetration.
          </p>
        </div>

        <div className="lg:col-span-3">
          <ul className="space-y-3 list-disc list-inside text-[#20152E]">
            <li className="leading-relaxed">
              This funding will be strategically allocated to key growth areas, including team expansion, product development, and marketing initiatives.
            </li>
            <li className="leading-relaxed">
              The pre-seed round aims to secure the necessary resources to achieve significant milestones and position TradeWizz for subsequent seed-stage funding.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FundingStageSection; 