import React from 'react';
import MrrCustomerGrowthChart from '@/components/charts/MrrCustomerGrowthChart';
import MetricsOverviewCard from '@/components/metrics/MetricsOverviewCard';

const TradewizzOverviewTab = () => {
  return (
    <div className="space-y-8">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left Side - Metrics Cards */}
        <MetricsOverviewCard />

        {/* Right Side - MRR and Customer Growth Chart */}
        <MrrCustomerGrowthChart />
      </div>
    </div>
  );
};

export default TradewizzOverviewTab; 