import React from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface SDGCardProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  metrics: string[];
  globalImpact: string;
  color: string;
}

const SDGCard: React.FC<SDGCardProps> = ({
  number,
  title,
  description,
  metrics,
  globalImpact,
  color,
}) => {
  return (
    <div className="relative h-full group">
      <Card
        className={`p-6 bg-gradient-to-br from-${color}-50 to-white overflow-hidden h-full flex flex-col transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:z-10`}
      >
        <div className="flex flex-col flex-1">
          {/* SDG Icon & Number */}
          <div className="flex items-start justify-between mb-4">
            <div className="relative w-16 h-16">
              <Image
                src={`/sdg-icons/sdg-${number}.png`}
                alt={`SDG ${number}`}
                fill
                className="object-contain"
              />
            </div>
            <span
              className={`text-3xl font-bold text-${color}-600 opacity-20 group-hover:opacity-100 transition-opacity`}
            >
              {number}
            </span>
          </div>

          {/* Content */}
          <div className="space-y-4 flex-1 flex flex-col">
            <div>
              <h3 className={`text-xl font-semibold text-${color}-900 mb-2`}>
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </div>

            <div className="space-y-3">
              <h4 className={`font-medium text-${color}-900`}>
                TradeWizz Impact:
              </h4>
              <ul className="space-y-2">
                {metrics.map((metric, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-${color}-400`}
                    />
                    {metric}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100 mt-auto">
              <h4 className={`font-medium text-${color}-900 mb-2`}>
                Global Impact:
              </h4>
              <p className="text-sm text-gray-600 italic">"{globalImpact}"</p>
              <p className="text-xs text-gray-500 mt-1">
                Source: United Nations
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div
          className={`absolute top-0 left-0 w-16 h-16 bg-${color}-100 rounded-br-full opacity-20 -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500`}
        />
        <div
          className={`absolute bottom-0 right-0 w-16 h-16 bg-${color}-100 rounded-tl-full opacity-20 translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500`}
        />
      </Card>
    </div>
  );
};

export default SDGCard;
