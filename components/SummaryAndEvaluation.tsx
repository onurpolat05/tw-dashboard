import React from 'react';
import { Card } from '@/components/ui/card';
import { AlertTriangle, CheckCircle2, Rocket, DollarSign, TrendingUp, Globe, CheckCircle } from 'lucide-react';

const SummaryReport: React.FC = () => (
  <Card className="p-6 bg-gradient-to-br from-purple-50 to-white">
    <h3 className="mb-4 text-lg font-semibold text-gray-900">Executive Summary</h3>
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 font-semibold text-gray-900 text-md">TradeWizz: Pre-Seed Potential</h4>
        <p className="text-sm text-gray-600">
          TradeWizz's MVP test phase demonstrates compelling evidence of platform potential, with a CAC of $7.32 and LTV:CAC ratio of 4.73x. 
          Despite a 27.97% high churn rate primarily from Amazon account bans, we achieved a 34.62% trial-to-paid conversion rate.
        </p>
      </div>
      <div>
        <h4 className="mb-2 font-semibold text-gray-900 text-md">Key Performance Indicators</h4>
        <p className="text-sm text-gray-600">
          With an ARR of $2,155.61 from 41 customers, the test phase validated core assumptions while highlighting areas for improvement. 
          The focus remains on platform diversification and scaling user acquisition strategies.
        </p>
      </div>
      <div>
        <h4 className="mb-2 font-semibold text-gray-900 text-md">Strategic Direction</h4>
        <p className="text-sm text-gray-600">
          Moving towards pre-seed funding, TradeWizz is actively developing strategies to diversify beyond Amazon, 
          addressing platform dependency and aiming for broader market appeal through expansion to Etsy, Shopify, and eBay.
        </p>
      </div>
    </div>
  </Card>
);

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  metric: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, content, metric }) => (
  <Card className="p-6 bg-gradient-to-br from-purple-50 to-white">
    <div className="flex gap-4 items-start">
      <div className="p-2 text-purple-600 bg-purple-100 rounded-lg">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="mb-1 font-semibold text-gray-900 text-md">{title}</h4>
        <p className="mb-2 text-2xl font-semibold text-purple-600">{metric}</p>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  </Card>
);

const EvaluationCards: React.FC = () => (
  <div className="grid gap-6 md:grid-cols-2">
    <MetricCard
      icon={<AlertTriangle className="w-5 h-5" />}
      title="Understanding Churn: The Amazon Factor"
      content="Churn was largely due to Amazon account bans, not product dissatisfaction. Key takeaway: We're diversifying beyond Amazon to mitigate this platform dependency."
      metric="27.97% High Churn"
    />
    <MetricCard
      icon={<CheckCircle2 className="w-5 h-5" />}
      title="Strong Trial Conversion"
      content="Trial-to-paid conversion rate demonstrates strong product-market fit within the Amazon arbitrage segment. This validates our core value proposition."
      metric="34.62% Conversion"
    />
    <MetricCard
      icon={<Rocket className="w-5 h-5" />}
      title="Pre-Seed Focus: Scaling for Success"
      content="MVP test validated key assumptions. Pre-seed funding will fuel platform enhancement, team expansion, and marketing."
      metric="Ready for Growth"
    />
    <MetricCard
      icon={<DollarSign className="w-5 h-5" />}
      title="Highly Efficient Customer Acquisition"
      content="Low CAC validates our initial marketing strategies. This demonstrates a strong potential for cost-effective scaling."
      metric="$7.32 CAC"
    />
    <MetricCard
      icon={<TrendingUp className="w-5 h-5" />}
      title="Positive LTV:CAC Ratio"
      content="Despite MVP limitations, our LTV:CAC ratio indicates each acquired customer generates significantly more value than acquisition cost."
      metric="4.73x LTV:CAC"
    />
    <MetricCard
      icon={<Globe className="w-5 h-5" />}
      title="Key Learning: Platform Diversification"
      content="Developing for Etsy, Shopify, and eBay to enhance stability, broaden market appeal, and reduce reliance on a single platform."
      metric="Multi-Platform Strategy"
    />
  </div>
);

const PerformanceEvaluation: React.FC = () => (
  <Card className="p-6 h-full bg-gradient-to-br from-purple-50 to-white">
    <h3 className="mb-4 text-lg font-semibold text-gray-900">Performance Evaluation</h3>
    <div className="space-y-4">
      <div className="flex gap-3 items-center">
        <div className="p-1.5 text-green-600 bg-green-100 rounded-lg">
          <CheckCircle className="w-4 h-4" />
        </div>
        <p className="text-sm text-gray-600">Efficient customer acquisition with remarkably low CAC of $7.32</p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="p-1.5 text-green-600 bg-green-100 rounded-lg">
          <CheckCircle className="w-4 h-4" />
        </div>
        <p className="text-sm text-gray-600">Promising LTV:CAC ratio of 4.73x indicates positive return on investment</p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="p-1.5 text-yellow-600 bg-yellow-100 rounded-lg">
          <AlertTriangle className="w-4 h-4" />
        </div>
        <p className="text-sm text-gray-600">High churn rate of 27.97% needs attention, primarily due to platform dependency</p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="p-1.5 text-green-600 bg-green-100 rounded-lg">
          <CheckCircle className="w-4 h-4" />
        </div>
        <p className="text-sm text-gray-600">Strong trial-to-paid conversion rate of 34.62% validates product-market fit</p>
      </div>
    </div>
  </Card>
);

const SummaryAndEvaluation: React.FC = () => {

  const strategicFocus = {
    shortTerm: ['Platform diversification', 'Feature optimization', 'Churn reduction'],
    midTerm: ['Market expansion', 'Product scaling', 'Team growth'],
    longTerm: ['Market leadership', 'Global expansion', 'Platform ecosystem'],
  };
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <SummaryReport />
        <PerformanceEvaluation />
      </div>
              {/* Strategic Implications */}
              <div className="p-6 bg-white rounded-lg border border-gray-100">
          <h4 className="text-lg font-semibold text-[#20152E] mb-4">Strategic Implications</h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-[#20152E]">Short-term Focus</h5>
              <ul className="space-y-2">
                {strategicFocus.shortTerm.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-[#20152E]">Mid-term Goals</h5>
              <ul className="space-y-2">
                {strategicFocus.midTerm.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-[#20152E]">Long-term Vision</h5>
              <ul className="space-y-2">
                {strategicFocus.longTerm.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      <EvaluationCards />
    </div>
  );
};

export default SummaryAndEvaluation; 