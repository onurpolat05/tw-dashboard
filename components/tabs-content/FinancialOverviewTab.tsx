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
import BurnRateComposedChart from '@/components/charts/BurnRateComposedChart';
import FinancialMetricsChart from '@/components/charts/FinancialMetricsChart';
import ExpenseDistributionPieCharts from '@/components/charts/ExpenseDistributionPieCharts';
import { Card } from '@/components/ui/card';

const FinancialOverviewTab = () => {
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
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 md:gap-4 lg:gap-6">
        {/* Left Card - 3/5 width */}
        <div className="md:col-span-2 lg:col-span-3">
          <RevenueDistributionCard />
        </div>

        {/* Right Card - 2/5 width */}
        <Card className="p-4 md:col-span-1 lg:col-span-2 md:p-6">
          <h3 className="mb-4 text-base font-semibold md:text-lg">Revenue Distribution & Growth</h3>
          <RevenueMetricCards />
          <div className="mt-4 md:mt-6">
            <RevenueComposedChart />
          </div>
        </Card>
      </div>

      {/* Expense Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Expense Categories Chart */}
        <Card className="p-4 md:p-6">
          <ExpenseCategoriesChart />
        </Card>

        {/* Quarterly Expenses Chart */}
        <Card className="p-4 md:p-6">
          <QuarterlyExpensesChart />
        </Card>
      </div>

      {/* Burn Rate and Distribution Analysis Section */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 md:gap-4 lg:gap-6">
        {/* Left Card - 3/5 width - Burn Rate Chart */}
        <div className="md:col-span-2 lg:col-span-3">
          <BurnRateComposedChart />
        </div>

        {/* Right Card - 2/5 width - Expense Distribution */}
        <div className="md:col-span-1 lg:col-span-2">
          <ExpenseDistributionPieCharts />
        </div>
      </div>

      {/* Financial Metrics Section */}
      <div className="w-full">
        <FinancialMetricsChart />
      </div>
    </div>
  );
};

export default FinancialOverviewTab; 