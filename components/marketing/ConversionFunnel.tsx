import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Filter } from "lucide-react";

interface PurchaseFunnelData {
  stage: string;
  rate: string;
  color: string;
  description: string;
}

const mockPurchaseFunnelData: PurchaseFunnelData[] = [
  {
    stage: "Awareness",
    rate: "2-5%",
    color: "#9333EA",
    description: "Website Visitors & Social Media Reach",
  },
  {
    stage: "Interest",
    rate: "15-25%",
    color: "#A855F7",
    description: "Leads & Webinar Registrations",
  },
  {
    stage: "Decision",
    rate: "30-50%",
    color: "#B575F7",
    description: "Trial Sign-ups & Demo Requests",
  },
  {
    stage: "Adoption",
    rate: "30-50%",
    color: "#C495F7",
    description: "Paying Customers",
  },
  {
    stage: "Advocacy",
    rate: "20-30%",
    color: "#D4B5F7",
    description: "Referrals & Reviews",
  },
];

const ConversionFunnel = () => {
  return (
    <Card className="flex flex-col p-4 h-full md:p-6">
      <CardHeader className="flex-none px-0 pt-0">
        <div className="flex flex-col gap-2 justify-between mb-2 md:flex-row md:items-center md:gap-0 md:mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-2 bg-purple-50 rounded-lg">
                <Filter className="w-5 h-5 text-purple-600" />
              </div>
              <CardTitle className="text-lg md:text-xl font-semibold text-gray-900">
                Customer Conversion Funnel
              </CardTitle>
            </div>
            <p className="text-sm text-gray-600">
              Marketing funnel stages and conversion rates
            </p>
          </div>
          <span className="text-xs font-medium text-purple-600 md:text-sm">
            Target Conversion: 1.17%
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 justify-center p-0">
        <div className="relative -mt-8 mx-auto w-full max-w-4xl">
          {mockPurchaseFunnelData.map((item, index) => {
            const totalSteps = mockPurchaseFunnelData.length;
            const progress = index / (totalSteps - 1);
            const width = 100 - progress * 40;
            const marginLeft = `${progress * 20}%`;
            const marginRight = `${progress * 20}%`;

            return (
              <div
                key={item.stage}
                className="relative mx-auto"
                style={{
                  width: `${width}%`,
                  height: "84px",
                  marginLeft,
                  marginRight,
                  marginTop: index === 0 ? "0" : "-8px",
                  zIndex: totalSteps - index,
                }}
              >
                <div
                  className="absolute inset-0 flex justify-between items-center px-6 md:px-8 group transition-all duration-300 ease-out hover:scale-[1.02]"
                  style={{
                    backgroundColor: item.color,
                    borderRadius: "24px",
                    boxShadow: `0 ${8 + index * 4}px ${
                      16 + index * 6
                    }px rgba(0,0,0,0.1)`,
                  }}
                >
                  <div className="space-y-1.5 pl-3">
                    <span className="block text-base font-semibold text-white md:text-lg">
                      {item.stage}
                    </span>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                  <span className="text-lg font-bold text-white md:text-xl pr-3">
                    {item.rate}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Subtle gradient background */}
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(147, 51, 234, 0.08) 100%)",
              borderRadius: "32px",
            }}
          />
        </div>

        {/* Calculated Metrics */}
        <div className="pt-20 mt-20 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <div className="h-14 mb-2 flex items-center justify-center">
                <p className="text-base text-gray-600 md:text-lg">
                  Visitor to
                  <br />
                  Register
                </p>
              </div>
              <p className="text-2xl font-bold text-purple-600 md:text-3xl">
                2%-5%
              </p>
            </div>
            <div className="text-center">
              <div className="h-14 mb-2 flex items-center justify-center">
                <p className="text-base text-gray-600 md:text-lg">
                  Registration to
                  <br />
                  Customer
                </p>
              </div>
              <p className="text-2xl font-bold text-purple-600 md:text-3xl">
                2.9%
              </p>
            </div>
            <div className="text-center">
              <div className="h-14 mb-2 flex items-center justify-center">
                <p className="text-base text-gray-600 md:text-lg">
                  Cost per
                  <br />
                  Customer
                </p>
              </div>
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
