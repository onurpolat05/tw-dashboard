import React from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

type ColorName = "navy" | "purple" | "turquoise" | "yellow";

interface SDGCardProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  metrics: string[];
  globalImpact: string;
  color: ColorName;
}

const SDGCard: React.FC<SDGCardProps> = ({
  number,
  title,
  description,
  metrics,
  globalImpact,
  color,
}) => {
  const colorMap: Record<
    ColorName,
    {
      bg: string;
      text: string;
      textLight: string;
      border: string;
    }
  > = {
    navy: {
      bg: "rgba(25, 37, 91, 0.08)",
      text: "rgb(115, 103, 239)",
      textLight: "rgba(115, 103, 239, 0.85)",
      border: "rgb(115, 103, 239)",
    },
    purple: {
      bg: "rgba(115, 103, 239, 0.08)",
      text: "rgb(23, 175, 149)",
      textLight: "rgba(23, 175, 149, 0.85)",
      border: "rgb(23, 175, 149)",
    },
    turquoise: {
      bg: "rgba(23, 175, 149, 0.08)",
      text: "rgb(252, 191, 0)",
      textLight: "rgba(252, 191, 0, 0.85)",
      border: "rgb(252, 191, 0)",
    },
    yellow: {
      bg: "rgba(252, 191, 0, 0.08)",
      text: "rgb(25, 37, 91)",
      textLight: "rgba(25, 37, 91, 0.85)",
      border: "rgb(25, 37, 91)",
    },
  };

  const currentColor = colorMap[color];

  return (
    <div className="relative h-full group">
      <Card
        className="h-full overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
        style={{ backgroundColor: currentColor.bg }}
      >
        {/* SDG Icon Header Section */}
        <div className="relative h-48 p-6 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-40 h-40 transition-transform duration-500 group-hover:-translate-y-2">
              <Image
                src={`/sdg-icons/sdg-${number}.png`}
                alt={`SDG ${number}`}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          {/* Hover Overlay Gradient */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(45deg, ${currentColor.border}15, ${currentColor.border}05)`,
            }}
          />
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6 relative">
          {/* Content Background Hover Effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(to bottom, ${currentColor.border}05, ${currentColor.border}15)`,
            }}
          />

          <div className="relative">
            <h3
              className="text-xl font-semibold mb-3 transition-colors duration-300"
              style={{ color: currentColor.text }}
            >
              {title}
            </h3>
            <p
              className="transition-colors duration-300"
              style={{ color: currentColor.textLight }}
            >
              {description}
            </p>
          </div>

          <div className="space-y-4 relative">
            <div
              className="h-px w-full transition-all duration-300 group-hover:w-3/4"
              style={{
                background: `linear-gradient(to right, ${currentColor.border}, transparent)`,
              }}
            />

            <div>
              <h4
                className="text-sm font-medium uppercase tracking-wider mb-3 transition-colors duration-300"
                style={{ color: currentColor.text }}
              >
                TradeWizz Impact
              </h4>
              <ul className="space-y-2">
                {metrics.map((metric, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm transition-colors duration-300"
                    style={{ color: currentColor.textLight }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: currentColor.text }}
                    />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="text-sm font-medium uppercase tracking-wider mb-3 transition-colors duration-300"
                style={{ color: currentColor.text }}
              >
                Global Impact
              </h4>
              <p
                className="text-sm italic transition-colors duration-300"
                style={{ color: currentColor.textLight }}
              >
                "{globalImpact}"
              </p>
              <p
                className="text-xs mt-2 transition-colors duration-300"
                style={{ color: currentColor.textLight }}
              >
                Source: United Nations
              </p>
            </div>
          </div>
        </div>

        {/* Border Hover Effect */}
        <div
          className="absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{
            borderColor: currentColor.border,
            transform: "scale(1.02)",
          }}
        />
      </Card>
    </div>
  );
};

export default SDGCard;
