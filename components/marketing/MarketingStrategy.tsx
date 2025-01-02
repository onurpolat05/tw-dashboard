import React from "react";
import { Card } from "@/components/ui/card";
import { LineChart, Target, BookOpen, Layers } from "lucide-react";
import ConversionFunnel from "./ConversionFunnel";
import CampaignMetrics from "./CampaignMetrics";

const MarketingStrategy = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900">
        Marketing Strategy
      </h2>

      <div className="overflow-x-auto pb-2 w-full">
        <div className="min-w-[768px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ConversionFunnel />
            <CampaignMetrics />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Executive Summary */}
        <Card className="p-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Executive Summary
            </h2>
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-purple-200 group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                  <Target className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-700">
                    Targeted, Multi-Channel Approach
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    TradeWizz will employ a targeted marketing approach,
                    focusing on SMEs, e-commerce startups, independent
                    retailers, marketplace and social media sellers,
                    dropshippers, manufacturers, NGOs, local artisans, D2C
                    brands, and subscription box services. We will use SEO,
                    content, social media, email, and partnerships.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-purple-200 group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                  <BookOpen className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-700">
                    Content-Driven Value Proposition
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    We will create and distribute high-value content, including
                    blog posts, articles, white papers, case studies, and
                    webinars. This content will educate and engage our target
                    audience, positioning TradeWizz as a thought leader in
                    ethical e-commerce.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-purple-200 group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                  <Layers className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-700">
                    Phased Implementation and Scaling
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    The marketing strategy will be rolled out in phases.
                    Initially, a marketing agency will manage campaigns (Q1-Q3
                    2025). In Q4 2025, marketing operations will transition to
                    an in-house team. From 2026, we will scale successful
                    strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Performance Evaluation */}
        <Card className="p-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-purple-50 rounded-lg">
              <LineChart className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Performance Evaluation
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Track overall visitor numbers and source channels",
              "Monitor qualified leads generated from all channels",
              "Analyze conversion rates at each funnel stage",
              "Measure and optimize acquisition cost",
              "Assess long-term customer value",
              "Track reach, likes, shares, and comments",
              "Evaluate content effectiveness in generating leads",
              "Measure leads and conversions from collaborations",
              "Calculate ROI for marketing campaigns",
              "Monitor and minimize customer attrition",
            ].map((metric, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-purple-200 group"
              >
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-purple-500 rounded-full group-hover:bg-purple-600" />
                <p className="text-sm text-gray-600 group-hover:text-gray-700">
                  {metric}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MarketingStrategy;
