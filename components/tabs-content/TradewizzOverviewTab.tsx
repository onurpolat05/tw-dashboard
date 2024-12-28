import React from 'react';
import MrrCustomerGrowthChart from '@/components/charts/MrrCustomerGrowthChart';
import MetricsOverviewCard from '@/components/metrics/MetricsOverviewCard';
import OverviewBottomLeftCard from '@/components/metrics/OverviewBottomLeftCard';
import OverviewBottomRightCard from '@/components/metrics/OverviewBottomRightCard';

const TradewizzOverviewTab = () => {
  return (
    <div className="space-y-8">
      {/* Top Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left Side - Metrics Cards */}
        <MetricsOverviewCard />

        {/* Right Side - MRR and Customer Growth Chart */}
        <MrrCustomerGrowthChart />
      </div>

      {/* Bottom Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Bottom Left Component */}
        <OverviewBottomLeftCard />

        {/* Bottom Right Component */}
        <OverviewBottomRightCard />
      </div>
    </div>
  );
};

export default TradewizzOverviewTab; 