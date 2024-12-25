import React from 'react';
import { Users, UserPlus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { InsightCardProps } from '@/types/types';

const InsightCard: React.FC<InsightCardProps> = ({ title, description, icon: Icon, category }) => (
  <Card className="p-4 md:p-6">
    <div className="flex items-start space-x-3 md:space-x-4">
      <div className="p-1.5 md:p-2 bg-purple-100 rounded-lg">
        <Icon className="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
      </div>
      <div>
        <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
          <h3 className="text-base md:text-lg font-semibold text-gray-900">{title}</h3>
          <span className="px-2 py-0.5 md:py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full w-fit">
            {category}
          </span>
        </div>
        <p className="mt-1 text-xs md:text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </Card>
);

const KeyInsights: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="min-w-[768px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
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
      </div>
    </div>
  );
};

export default KeyInsights; 