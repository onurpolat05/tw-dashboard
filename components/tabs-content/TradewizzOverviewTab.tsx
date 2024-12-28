import React from 'react';
import MrrCustomerGrowthChart from '@/components/charts/MrrCustomerGrowthChart';
import MetricsOverviewCard from '@/components/metrics/MetricsOverviewCard';
import OverviewBottomLeftCard from '@/components/metrics/OverviewBottomLeftCard';
import OverviewBottomRightCard from '@/components/metrics/OverviewBottomRightCard';
import RevenueDistributionCard from '@/components/metrics/RevenueDistributionCard';
import RevenueComposedChart from '@/components/charts/RevenueComposedChart';
import RevenueMetricCards from '@/components/metrics/RevenueMetricCards';
import ExpenseCategoriesChart from '@/components/charts/ExpenseCategoriesChart';
import QuarterlyExpensesChart from '@/components/charts/QuarterlyExpensesChart';
import { Card } from '@/components/ui/card';

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

      {/* New Section with 3:2 Ratio */}
      <div className="grid grid-cols-5 gap-3">
        {/* Left Card - 3/5 width */}
        <div className="col-span-3">
          <RevenueDistributionCard />
        </div>

        {/* Right Card - 2/5 width */}
        <Card className="col-span-2 p-6">
          <h3 className="mb-4 text-lg font-semibold">Revenue Distribution & Growth</h3>
          <RevenueMetricCards />
          <RevenueComposedChart />
        </Card>
      </div>

      {/* Expense Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Expense Categories Chart */}
        <Card className="p-6">
          <ExpenseCategoriesChart />
        </Card>

        {/* Quarterly Expenses Chart */}
        <Card className="p-6">
          <QuarterlyExpensesChart />
        </Card>
      </div>
    </div>
  );
};

export default TradewizzOverviewTab; 