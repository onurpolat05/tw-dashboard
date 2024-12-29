import React from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PainPointCardProps } from "@/types/pain-points";

const PainPointCard: React.FC<PainPointCardProps> = ({
  title,
  subtitle,
  description,
  icon: Icon,
  className
}) => {
  return (
    <Card className={cn(
      "p-5 bg-white border-gray-100 transition-all duration-200 hover:shadow-md",
      className
    )}>
      <div className="space-y-3">
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <div className="p-2 bg-violet-50 rounded-lg">
              <Icon className="w-5 h-5 text-violet-600 shrink-0" />
            </div>
            <h3 className="text-xl font-bold leading-tight text-gray-900">{title}</h3>
          </div>
          <p className="text-sm font-medium text-violet-600 pl-[44px]">
            {subtitle}
          </p>
        </div>
        <p className="text-base leading-relaxed text-gray-600 pl-[44px]">{description}</p>
      </div>
    </Card>
  );
};

export default PainPointCard; 