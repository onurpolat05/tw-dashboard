import React from 'react';
import { Card } from '@/components/ui/card';
import HeaderSection from './overview-sections/HeaderSection';
import ValuationSection from './overview-sections/ValuationSection';
import FundingStageSection from './overview-sections/FundingStageSection';
import BriefDescriptionSection from './overview-sections/BriefDescriptionSection';
import KeyInvestmentHighlightsSection from './overview-sections/KeyInvestmentHighlightsSection';
import FundingAskSection from './overview-sections/FundingAskSection';
import UseOfFundsSection from './overview-sections/UseOfFundsSection';

const OverviewTab = () => {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <HeaderSection />
        <ValuationSection />
        <FundingStageSection />
        <BriefDescriptionSection />
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Executive Summary</h2>
          <p className="text-gray-600">
            TradeWizz is an AI-powered e-commerce management platform designed for Amazon sellers,
            with plans to expand to other platforms.
          </p>
        </div>
        <KeyInvestmentHighlightsSection />
        <FundingAskSection />
        <UseOfFundsSection />
      </div>
    </Card>
  );
};

export default OverviewTab; 