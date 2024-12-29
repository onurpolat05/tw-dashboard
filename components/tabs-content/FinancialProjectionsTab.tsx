import React from 'react';
import RevenueModelSection from './financial-projections-sections/RevenueModelSection';
import ProjectedARRSection from './financial-projections-sections/ProjectedARRSection';
import ProjectedCashFlowSection from './financial-projections-sections/ProjectedCashFlowSection';

const FinancialProjectionsTab = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <RevenueModelSection />
      <ProjectedARRSection />
      <ProjectedCashFlowSection />
    </div>
  );
};

export default FinancialProjectionsTab; 