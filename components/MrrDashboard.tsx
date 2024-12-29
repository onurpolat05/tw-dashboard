import React from 'react';
import KpiMetrics from './KpiMetrics';
import MrrCharts from './MrrCharts';
import CustomerMetrics from './CustomerMetrics';
import LTVAnalysis from './LTVAnalysis';
import CohortAnalysis from './CohortAnalysis';
import PurchaseFunnel from './PurchaseFunnel';
import SummaryAndEvaluation from './SummaryAndEvaluation';
import TestDurationSection from './tabs-content/traction-sections/TestDurationSection';

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <div className="mx-auto space-y-8 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">TradeWizz Investor Dashboard</h1>
          <span className="text-sm text-gray-500">Last updated: Dec 20, 2024</span>
        </div>

        {/* Test Duration Section */}
        <TestDurationSection />

        {/* KPI Metrics */}
        <KpiMetrics />

        {/* Summary and Evaluation */}
        <SummaryAndEvaluation />
        {/* MRR Charts Side by Side */}
        <MrrCharts />



        {/* Customer Metrics Section */}
        <CustomerMetrics />



        {/* LTV Analysis Section */}
        <LTVAnalysis />

        {/* Cohort Analysis Section */}
        <CohortAnalysis />

        {/* Purchase Funnel and Instagram Campaign Performance */}
        <PurchaseFunnel />


      </div>
    </div>
  );
};

export default Dashboard;