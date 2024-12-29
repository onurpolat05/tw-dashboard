import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import OverviewTab from '@/components/tabs-content/OverviewTab';
import ProblemSolutionTab from '@/components/tabs-content/ProblemSolutionTab';
import MarketTab from '@/components/tabs-content/MarketTab';
import FinancialProjectionsTab from '@/components/tabs-content/FinancialProjectionsTab';
import TeamTab from '@/components/tabs-content/TeamTab';
import CallToActionTab from '@/components/tabs-content/CallToActionTab';
import TradewizzOverviewTab from '@/components/tabs-content/TradewizzOverviewTab';
import CustomerBehaviorTab from '../components/tabs-content/CustomerBehaviorTab';
import ValuationTab from '@/components/tabs-content/ValuationTab';

const FutureStatus = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-8">
        <div className="mx-auto space-y-8 max-w-7xl">
          {/* Header */}
          <div className="flex flex-col gap-4 justify-between items-start sm:flex-row sm:items-center sm:gap-0">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold text-gray-900">
                TradeWizz Pre-Seed Valuation
              </h1>
              <p className="text-lg text-gray-600">
                Comprehensive analysis and future projections
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-violet-600">Current Valuation</p>
              <p className="text-2xl font-bold text-gray-900">$1.91M - $4.43M</p>
            </div>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="tradewizz-overview" className="space-y-6">
            <div className="relative">
              <div className="overflow-x-auto pb-2 sm:overflow-x-visible">
                <TabsList className="inline-flex min-w-full bg-white border shadow-sm sm:w-auto">
                  <TabsTrigger value="tradewizz-overview" className="whitespace-nowrap">Tradewizz Overview</TabsTrigger>
                  <TabsTrigger value="overview" className="whitespace-nowrap">Overview</TabsTrigger>
                  <TabsTrigger value="problem-solution" className="whitespace-nowrap">Problem & Solution</TabsTrigger>
                  <TabsTrigger value="market" className="whitespace-nowrap">Market Opportunity</TabsTrigger>
                  <TabsTrigger value="financial" className="whitespace-nowrap">Financial Projections</TabsTrigger>
                  <TabsTrigger value="team" className="whitespace-nowrap">Team</TabsTrigger>
                  <TabsTrigger value="call-to-action" className="whitespace-nowrap">Call to Action</TabsTrigger>
                  <TabsTrigger value="customer-behavior" className="whitespace-nowrap">Customer Behavior</TabsTrigger>
                  <TabsTrigger value="valuation" className="whitespace-nowrap">Valuation</TabsTrigger>
                </TabsList>
              </div>
              {/* Scroll indicators */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none sm:hidden" />
              <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none sm:hidden" />
            </div>

            {/* Tab Contents */}
            <TabsContent value="tradewizz-overview">
              <TradewizzOverviewTab />
            </TabsContent>

            <TabsContent value="overview">
              <OverviewTab />
            </TabsContent>

            <TabsContent value="problem-solution">
              <ProblemSolutionTab />
            </TabsContent>

            <TabsContent value="market">
              <MarketTab />
            </TabsContent>

            <TabsContent value="financial">
              <FinancialProjectionsTab />
            </TabsContent>

            <TabsContent value="team">
              <TeamTab />
            </TabsContent>

            <TabsContent value="call-to-action">
              <CallToActionTab />
            </TabsContent>

            <TabsContent value="customer-behavior">
              <CustomerBehaviorTab />
            </TabsContent>

            <TabsContent value="valuation">
              <ValuationTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FutureStatus; 