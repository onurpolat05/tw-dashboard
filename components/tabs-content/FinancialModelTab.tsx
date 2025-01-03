import React from "react";
import MrrCustomerGrowthChart from "@/components/charts/MrrCustomerGrowthChart";
import MetricsOverviewCard from "@/components/metrics/MetricsOverviewCard";
import OverviewBottomLeftCard from "@/components/metrics/OverviewBottomLeftCard";
import OverviewBottomRightCard from "@/components/metrics/OverviewBottomRightCard";
import RevenueDistributionCard from "@/components/metrics/RevenueDistributionCard";
import RevenueComposedChart from "@/components/charts/RevenueComposedChart";
import RevenueMetricCards from "@/components/metrics/RevenueMetricCards";
import ExpenseCategoriesChart from "@/components/charts/ExpenseCategoriesChart";
import RevenueGrowthChart from "@/components/charts/RevenueGrowthChart";
import BurnRateComposedChart from "@/components/charts/BurnRateComposedChart";
import ExpenseDistributionPieCharts from "@/components/charts/ExpenseDistributionPieCharts";
import CustomerMetricsChart from "@/components/charts/CustomerMetricsChart";
import CustomerBehaviorChart from "@/components/charts/CustomerBehaviorChart";
import CustomerSegmentationCharts from "@/components/charts/CustomerSegmentationCharts";
import { Card } from "@/components/ui/card";
import RDSalesChart from "@/components/charts/RDSalesChart";

const FinancialModelTab = () => {
  return (
    <div className="space-y-8">
      {/* Financial Overview Section */}
      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Financial Overview</h2>
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Side - Metrics Cards */}
          <MetricsOverviewCard />

          {/* Right Side - MRR and Customer Growth Chart */}
          <MrrCustomerGrowthChart />
        </div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
          {/* Bottom Left Component */}
          <OverviewBottomLeftCard />

          {/* Bottom Right Component */}
          <OverviewBottomRightCard />
        </div>
      </Card>

      {/* Customer Analysis Section */}
      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Customer Analysis</h2>

        <Card className="p-4 mb-6">
          <h3 className="mb-4 text-lg font-semibold">Customer Metrics Analysis (LTV ~ACR)</h3>
          <CustomerBehaviorChart />
        </Card>

        {/* Customer Metrics and Business Model Distribution in same row */}
        <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
        <CustomerMetricsChart />

          <Card className="p-4">
            <h3 className="mb-4 text-lg font-semibold">Customer Segmentation</h3>
            <CustomerSegmentationCharts />
          </Card>
        </div>
      </Card>

      {/* Revenue Analysis Section */}
      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Revenue Analysis</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Left Card */}
          <RevenueDistributionCard />

          {/* Right Card */}
          <Card className="p-4">
            <h3 className="mb-4 text-lg font-semibold">Revenue Growth Chart</h3>
            <div className="mt-4 md:mt-6">
              <RevenueComposedChart />
            </div>
            <RevenueMetricCards />
          </Card>

          <Card className="p-4">
            <h3 className="mb-4 text-lg font-semibold">Revenue Growth</h3>
            <div className="h-[550px]">
              <RevenueGrowthChart />
            </div>
          </Card>
        </div>
      </Card>

      {/* Expense Analysis Section */}
      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Expense Analysis</h2>
        {/* Burn Rate and Distribution Analysis Section */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 md:gap-4 lg:gap-6">
          {/* Left Card - 3/5 width - Burn Rate Chart */}
          <div className="md:col-span-2 lg:col-span-3">
               <BurnRateComposedChart />
           </div>

          {/* Right Card - 2/5 width - Expense Distribution */}
          <div className="md:col-span-1 lg:col-span-2">
            <Card className="p-4">
              <ExpenseCategoriesChart />
            </Card>
          </div>
        </div>

        {/* Expense Charts Section */}
        <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
          {/* Expense Categories Chart */}
          <ExpenseDistributionPieCharts />

          <Card className="p-4">
            <h3 className="mb-4 text-lg font-semibold">R&D as of Sales </h3>
            <div className="h-[550px]">
              <RDSalesChart />
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default FinancialModelTab;
