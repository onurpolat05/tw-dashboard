import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import OverviewTab from '@/components/tabs-content/OverviewTab';
import ProblemSolutionTab from '@/components/tabs-content/ProblemSolutionTab';
import MarketTab from '@/components/tabs-content/MarketTab';
import TractionTab from '@/components/tabs-content/TractionTab';
import FinancialProjectionsTab from '@/components/tabs-content/FinancialProjectionsTab';
import TeamTab from '@/components/tabs-content/TeamTab';
import CallToActionTab from '@/components/tabs-content/CallToActionTab';
import TradewizzOverviewTab from '@/components/tabs-content/TradewizzOverviewTab';

const FutureStatus = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <div className="mx-auto space-y-8 max-w-7xl">
          {/* Header */}
          <div className="flex justify-between items-center">
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
            <TabsList className="bg-white border shadow-sm">
              <TabsTrigger value="tradewizz-overview">Tradewizz Overview</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="problem-solution">Problem & Solution</TabsTrigger>
              <TabsTrigger value="market">Market Opportunity</TabsTrigger>
              <TabsTrigger value="traction">Traction & Validation</TabsTrigger>
              <TabsTrigger value="financial">Financial Projections</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="call-to-action">Call to Action</TabsTrigger>
            </TabsList>

            {/* Tradewizz Overview Tab */}
            <TabsContent value="tradewizz-overview">
              <TradewizzOverviewTab />
            </TabsContent>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <OverviewTab />
            </TabsContent>

            {/* Problem & Solution Tab */}
            <TabsContent value="problem-solution">
              <ProblemSolutionTab />
            </TabsContent>

            {/* Market Tab */}
            <TabsContent value="market">
              <MarketTab />
            </TabsContent>

            {/* Traction Tab */}
            <TabsContent value="traction">
              <TractionTab />
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
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FutureStatus; 