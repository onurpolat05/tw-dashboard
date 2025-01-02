import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import ValuationTab from '@/components/tabs-content/ValuationTab';
import MarketTab from '@/components/tabs-content/MarketTab';
import FinancialOverviewTab from '@/components/tabs-content/FinancialOverviewTab';
import MvpTestDashboard from '@/components/MvpTestDashboard';
import FinancialModelTab from '@/components/tabs-content/FinancialModelTab';

const FinancialProjectionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-8">
        <div className="mx-auto space-y-8 max-w-7xl">
          {/* Header */}
          <div className="flex flex-col gap-4 justify-between items-start sm:flex-row sm:items-center sm:gap-0">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold text-gray-900">
                Financial Projections & Analysis
              </h1>
              <p className="text-lg text-gray-600">
                Comprehensive financial metrics and performance analysis
              </p>
            </div>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="mvp-test" className="space-y-6">
            <div className="relative">
              <div className="overflow-x-auto pb-2 sm:overflow-x-visible">
                <TabsList className="inline-flex min-w-full bg-white border shadow-sm sm:w-auto">
                  <TabsTrigger value="financial-overview" className="whitespace-nowrap">Financial Overview</TabsTrigger>
                  <TabsTrigger value="mvp-test" className="whitespace-nowrap">MVP Test</TabsTrigger>
                  <TabsTrigger value="market" className="whitespace-nowrap">Market Analysis</TabsTrigger>
                  <TabsTrigger value="valuation" className="whitespace-nowrap">Valuation</TabsTrigger>
                  <TabsTrigger value="financial-model" className="whitespace-nowrap">Financial Model</TabsTrigger>
                </TabsList>
              </div>
              {/* Scroll indicators */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none sm:hidden" />
              <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none sm:hidden" />
            </div>

            {/* Tab Contents */}
            <TabsContent value="mvp-test">
              <div className="p-6 bg-white rounded-lg shadow">
                <MvpTestDashboard />
              </div>
            </TabsContent>

            <TabsContent value="financial-overview">
              <FinancialOverviewTab />
            </TabsContent>

            <TabsContent value="market">
              <MarketTab />
            </TabsContent>

            <TabsContent value="valuation">
              <ValuationTab />
            </TabsContent>

            <TabsContent value="financial-model">
              <FinancialModelTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FinancialProjectionsPage; 