import React from 'react';
import RevenueModelSection from './financial-projections-sections/RevenueModelSection';
import RevenueDistributionSection from './financial-projections-sections/RevenueDistributionSection';
import KeyMetricsSection from './financial-projections-sections/KeyMetricsSection';
import ProjectedEBITDASection from './financial-projections-sections/ProjectedEBITDASection';
import ProjectedARRSection from './financial-projections-sections/ProjectedARRSection';
import ProjectedCashFlowSection from './financial-projections-sections/ProjectedCashFlowSection';

const FinancialProjectionsTab = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <RevenueModelSection />
      <RevenueDistributionSection />
      <KeyMetricsSection />
      <ProjectedEBITDASection />
      <ProjectedARRSection />
      <ProjectedCashFlowSection />
    </div>
  );
};

export default FinancialProjectionsTab; 