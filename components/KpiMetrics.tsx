import React from "react";
import {
  DollarSign,
  Users,
  Target,
  Activity,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { MetricCardProps } from "@/types/types";

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
}) => {
  return (
    <Card className="p-4 space-y-2 transition-shadow duration-200 md:p-6 hover:shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 md:p-2 bg-purple-100 rounded-lg">
            <Icon className="w-4 h-4 text-purple-600 md:w-5 md:h-5" />
          </div>
          <span className="text-xs font-medium text-gray-500 md:text-sm line-clamp-1">
            {title}
          </span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900 md:text-2xl">
          {value}
        </h3>
      </div>
    </Card>
  );
};

const KpiMetrics: React.FC = () => {
  return (
    <div className="overflow-x-auto pb-2 w-full">
      <div className="min-w-[768px]">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
          <MetricCard title="ARR" value="$2,155.61" icon={DollarSign} />
          <MetricCard title="Avarage Churn Rate" value="27.97%" icon={Users} />
          <MetricCard title="LTV" value="$22,59" icon={Target} />
          <MetricCard title="CAC" value="$7.32" icon={Activity} />
          <MetricCard title="LTV:CAC Ratio" value="4.73x" icon={Target} />
          <MetricCard title="NRR" value="72.4%" icon={TrendingUp} />
        </div>
      </div>
    </div>
  );
};

export default KpiMetrics;
