import React from 'react';
import { Card } from '@/components/ui/card';
import CustomerMetricsChart from '@/components/charts/CustomerMetricsChart';
import CustomerBehaviorChart from '@/components/charts/CustomerBehaviorChart';
import CustomerSegmentationCharts from '@/components/charts/CustomerSegmentationCharts';
import FinancialMetricsChart from '@/components/charts/FinancialMetricsChart';

const CustomerBehaviorTab = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="mb-6 text-xl font-semibold">Customer Metrics - Optimal Scenario</h2>
        <CustomerMetricsChart />
      </Card>

      <Card className="p-6">
        <h2 className="mb-6 text-xl font-semibold">Customer Behavior Analysis</h2>
        <CustomerBehaviorChart />
      </Card>

      <Card className="p-6">
        <h2 className="mb-6 text-xl font-semibold">Business Model Distribution</h2>
        <CustomerSegmentationCharts />
      </Card>

      <FinancialMetricsChart />
    </div>
  );
};

export default CustomerBehaviorTab; 