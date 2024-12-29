import React from 'react';
import InvestmentOpportunitySection from './call-to-action-sections/InvestmentOpportunitySection';
import NextStepsSection from './call-to-action-sections/NextStepsSection';

const CallToActionTab = () => {
  return (
    <div className="space-y-6">
      <InvestmentOpportunitySection />
      <NextStepsSection />
    </div>
  );
};

export default CallToActionTab;
