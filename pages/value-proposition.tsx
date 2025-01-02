import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import OverviewTab from '@/components/tabs-content/OverviewTab';
import ProblemSolutionTab from '@/components/tabs-content/ProblemSolutionTab';
import TeamTab from '@/components/tabs-content/TeamTab';
import CallToActionTab from '@/components/tabs-content/CallToActionTab';
import MarketingAndHRStrategyTab from '@/components/tabs-content/MarketingAndHRStrategyTab';
import SocialImpactTab from '@/components/tabs-content/SocialImpactTab';

const ValuePropositionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-8">
        <div className="mx-auto space-y-8 max-w-7xl">
          {/* Header */}
          <div className="flex flex-col gap-4 justify-between items-start sm:flex-row sm:items-center sm:gap-0">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold text-gray-900">
                TradeWizz Value Proposition
              </h1>
              <p className="text-lg text-gray-600">
                Our unique value proposition and core offerings
              </p>
            </div>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="overview" className="space-y-6">
            <div className="relative">
              <div className="overflow-x-auto pb-2 sm:overflow-x-visible">
                <TabsList className="inline-flex min-w-full bg-white border shadow-sm sm:w-auto">
                  <TabsTrigger value="overview" className="whitespace-nowrap">Overview</TabsTrigger>
                  <TabsTrigger value="problem-solution" className="whitespace-nowrap">Problem & Solution</TabsTrigger>
                  <TabsTrigger value="marketing-hr" className="whitespace-nowrap">Marketing & HR Strategy</TabsTrigger>
                  <TabsTrigger value="social-impact" className="whitespace-nowrap">Social Impact</TabsTrigger>
                  <TabsTrigger value="team" className="whitespace-nowrap">Team</TabsTrigger>
                  <TabsTrigger value="call-to-action" className="whitespace-nowrap">Call to Action</TabsTrigger>
                  
                </TabsList>
              </div>
              {/* Scroll indicators */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none sm:hidden" />
              <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none sm:hidden" />
            </div>

            {/* Tab Contents */}
            <TabsContent value="overview">
              <OverviewTab />
            </TabsContent>

            <TabsContent value="problem-solution">
              <ProblemSolutionTab />
            </TabsContent>

            <TabsContent value="marketing-hr">
              <MarketingAndHRStrategyTab />
            </TabsContent>

            <TabsContent value="social-impact">
              <SocialImpactTab />
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

export default ValuePropositionPage; 