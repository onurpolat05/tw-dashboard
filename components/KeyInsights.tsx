import React from 'react';
import { Users, UserPlus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { InsightCardProps } from '@/types/types';

const InsightCard: React.FC<InsightCardProps> = ({ title, description, icon: Icon, category }) => (
  <Card className="p-6">
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-purple-100 rounded-lg">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
            {category}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </Card>
);

const KeyInsights: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <InsightCard
        title="Strong Customer Retention"
        description="With a churn rate of only 2.4%, our retention strategy is proving effective. Customer satisfaction and product stickiness are key drivers."
        icon={Users}
        category="Customer Behavior"
      />
      <InsightCard
        title="Efficient Acquisition"
        description="CAC has decreased by 16.67%, while LTV continues to grow, indicating improved marketing efficiency and product market fit."
        icon={UserPlus}
        category="Growth"
      />
    </div>
  );
};

export default KeyInsights; 