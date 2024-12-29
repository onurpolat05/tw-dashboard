import React from 'react';
import { Card } from '@/components/ui/card';

const SummaryReport: React.FC = () => (
  <Card className="p-6">
    <h3 className="mb-4 text-lg font-semibold">Executive Summary</h3>
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 font-semibold text-gray-900 text-md">Financial Performance</h4>
        <p className="text-sm text-gray-600">
          TradeWizz demonstrates strong financial health with MRR reaching $72,000 (+10.2% MoM) and ARR of $864,000. 
          Our controlled growth strategy has maintained efficient capital utilization with a decreasing burn rate of $33,000/month.
        </p>
      </div>
      <div>
        <h4 className="mb-2 font-semibold text-gray-900 text-md">Growth & Efficiency</h4>
        <p className="text-sm text-gray-600">
          Customer acquisition efficiency has improved significantly, with CAC decreasing by 16.67% while maintaining a healthy LTV:CAC ratio of 12.5. 
          Trial to paid conversion rate stands at 25%, indicating strong product-market fit.
        </p>
      </div>
      <div>
        <h4 className="mb-2 font-semibold text-gray-900 text-md">Strategic Outlook</h4>
        <p className="text-sm text-gray-600">
          With a robust NRR of 115% and low churn rate of 2.4%, TradeWizz is well-positioned for scaling. Instagram marketing channel shows promising ROI of 285%, 
          suggesting readiness for expanded marketing initiatives.
        </p>
      </div>
    </div>
  </Card>
);

const EvaluationCard: React.FC = () => (
  <Card className="p-6">
    <h3 className="mb-4 text-lg font-semibold">Performance Evaluation</h3>
    <div className="space-y-4">
      <div className="flex gap-2 items-center">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <p className="text-sm text-gray-600">Strong unit economics with improving efficiency metrics</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <p className="text-sm text-gray-600">Successful validation of marketing channels with positive ROI</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <p className="text-sm text-gray-600">Cash runway requires attention for upcoming scaling plans</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <p className="text-sm text-gray-600">Customer retention and expansion metrics exceed industry standards</p>
      </div>
    </div>
  </Card>
);

const SummaryAndEvaluation: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <SummaryReport />
      <EvaluationCard />
    </div>
  );
};

export default SummaryAndEvaluation; 