import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Filter } from "lucide-react";

interface PurchaseFunnelData {
  stage: string;
  count: number;
  color: string;
  description: string;
}

const mockPurchaseFunnelData: PurchaseFunnelData[] = [
  {
    stage: "Awareness",
    count: 100000,
    color: "#9333EA",
    description: "Website Visitors & Social Media Reach",
  },
  {
    stage: "Interest",
    count: 25000,
    color: "#A855F7",
    description: "Leads & Webinar Registrations",
  },
  {
    stage: "Decision",
    count: 7500,
    color: "#B575F7",
    description: "Trial Sign-ups & Demo Requests",
  },
  {
    stage: "Adoption",
    count: 2250,
    color: "#C495F7",
    description: "Paying Customers",
  },
  {
    stage: "Advocacy",
    count: 450,
    color: "#D4B5F7",
    description: "Referrals & Reviews",
  },
];

const ConversionFunnel = () => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <Card className="flex flex-col p-4 h-full md:p-6">
      <CardHeader className="flex-none px-0 pt-0">
        <div className="flex flex-col gap-2 justify-between mb-4 md:flex-row md:items-center md:gap-0 md:mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-2 bg-purple-50 rounded-lg">
                <Filter className="w-5 h-5 text-purple-600" />
              </div>
              <CardTitle className="text-lg md:text-xl">
                Customer Conversion Funnel
              </CardTitle>
            </div>
            <p className="text-sm text-gray-600">
              Marketing funnel stages and conversion rates
            </p>
          </div>
          <span className="text-xs font-medium text-purple-600 md:text-sm">
            Target Conversion: 0.5% - 2%
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 justify-center p-0">
        <div className="py-8 space-y-6 md:space-y-8">
          {mockPurchaseFunnelData.map((item, index) => {
            const scaleWidth = 1 - index * 0.15;
            const heightPx = 64;

            return (
              <div
                key={item.stage}
                className="relative mx-auto group"
                style={{
                  width: `${scaleWidth * 100}%`,
                  height: `${heightPx}px`,
                  marginTop: index === 0 ? "0" : "-1px",
                  maxWidth: "900px",
                }}
              >
                <div
                  className="flex absolute inset-0 justify-between items-center px-6 transition-all duration-300 md:px-8 hover:opacity-90"
                  style={{
                    backgroundColor: item.color,
                    clipPath: "polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)",
                    height: "100%",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="space-y-1">
                    <span className="block text-base font-semibold text-white md:text-lg lg:text-xl">
                      {item.stage}
                    </span>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                  <span className="text-lg font-bold text-white md:text-xl lg:text-2xl">
                    {formatNumber(item.count)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Calculated Metrics */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div className="text-center">
              <p className="mb-2 text-base text-gray-600 md:text-lg">
                Conversion Rate
              </p>
              <p className="text-2xl font-bold text-purple-600 md:text-3xl">
                1.17%
              </p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-base text-gray-600 md:text-lg">
                Cost per Customer
              </p>
              <p className="text-2xl font-bold text-purple-600 md:text-3xl">
                $5.03
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversionFunnel;
