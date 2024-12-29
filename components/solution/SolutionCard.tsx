import React from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SolutionCardProps } from "@/types/solution";

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  subtitle,
  description,
  icon: Icon,
  className
}) => {
  return (
    <Card className={cn(
      "p-5 bg-gradient-to-br from-green-50 to-white border-green-100 transition-all duration-200 hover:shadow-md",
      className
    )}>
      <div className="space-y-3">
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <div className="p-2 bg-green-50 rounded-lg">
              <Icon className="w-5 h-5 text-green-600 shrink-0" />
            </div>
            <h3 className="text-xl font-bold leading-tight text-gray-900">{title}</h3>
          </div>
          <p className="text-sm font-medium text-green-600 pl-[44px]">
            {subtitle}
          </p>
        </div>
        <p className="text-base leading-relaxed text-gray-600 pl-[44px]">{description}</p>
      </div>
    </Card>
  );
};

export default SolutionCard; 