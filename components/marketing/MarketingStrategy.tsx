import React from 'react';
import { Card } from '@/components/ui/card';
import ConversionFunnel from './ConversionFunnel';
import CampaignMetrics from './CampaignMetrics';

const MarketingStrategy = () => {
  return (
    <div className="space-y-6">
      <h2 className="mb-6 text-3xl font-bold text-gray-900">Marketing Strategy</h2>
      
      <div className="overflow-x-auto pb-2 w-full">
        <div className="min-w-[768px]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap-8">
            <ConversionFunnel />
            <CampaignMetrics />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Executive Summary */}
        <Card className="p-6 h-full">
          <h2 className="text-2xl font-semibold text-gray-900">Executive Summary</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Targeted, Multi-Channel Approach</h3>
              <p className="mt-2 text-base text-gray-600">
                TradeWizz will employ a targeted marketing approach, focusing on SMEs, e-commerce startups, independent retailers, marketplace and social media sellers, dropshippers, manufacturers, NGOs, local artisans, D2C brands, and subscription box services. We will use SEO, content, social media, email, and partnerships.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Content-Driven Value Proposition</h3>
              <p className="mt-2 text-base text-gray-600">
                We will create and distribute high-value content, including blog posts, articles, white papers, case studies, and webinars. This content will educate and engage our target audience, positioning TradeWizz as a thought leader in ethical e-commerce.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Phased Implementation and Scaling</h3>
              <p className="mt-2 text-base text-gray-600">
                The marketing strategy will be rolled out in phases. Initially, a marketing agency will manage campaigns (Q1-Q3 2025). In Q4 2025, marketing operations will transition to an in-house team. From 2026, we will scale successful strategies.
              </p>
            </div>
          </div>
        </Card>

        {/* Performance Evaluation */}
        <Card className="p-6 h-full">
          <h2 className="text-2xl font-semibold text-gray-900">Performance Evaluation</h2>
          <div className="mt-6 space-y-4">
            <div className="flex gap-3 items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
              <p className="text-base text-gray-600">Track overall visitor numbers and source channels</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full" />
              <p className="text-base text-gray-600">Monitor qualified leads generated from all channels</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full" />
              <p className="text-base text-gray-600">Analyze conversion rates at each funnel stage</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-violet-500 rounded-full" />
              <p className="text-base text-gray-600">Measure and optimize acquisition cost</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-fuchsia-500 rounded-full" />
              <p className="text-base text-gray-600">Assess long-term customer value</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full" />
              <p className="text-base text-gray-600">Track reach, likes, shares, and comments</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-rose-500 rounded-full" />
              <p className="text-base text-gray-600">Evaluate content effectiveness in generating leads</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full" />
              <p className="text-base text-gray-600">Measure leads and conversions from collaborations</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full" />
              <p className="text-base text-gray-600">Calculate ROI for marketing campaigns</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full" />
              <p className="text-base text-gray-600">Monitor and minimize customer attrition</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MarketingStrategy; 