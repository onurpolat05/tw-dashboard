import React from "react";
import { Card } from "@/components/ui/card";
import {
  Megaphone,
  Calendar,
  Video,
  Users,
  Building2,
  ShoppingBag,
  Globe,
  Boxes,
  HeartHandshake,
  Store,
  Package,
  BarChart3,
} from "lucide-react";

const campaignMetrics = [
  {
    title: "Small to Medium Enterprises",
    value: "400M",
    icon: Building2,
    description: "Number of Global SMEs",
    gradient: "from-violet-50 to-white",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "E-commerce Websites",
    value: "30.7M",
    icon: Store,
    description: "Worldwide e-commerce sites",
    gradient: "from-fuchsia-50 to-white",
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-600",
  },
  {
    title: "Online Retailers",
    value: "26.6M",
    icon: ShoppingBag,
    description: "Independent online stores",
    gradient: "from-purple-50 to-white",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Facebook Marketplace Sellers",
    value: "250M",
    icon: Globe,
    description: "Active marketplace sellers",
    gradient: "from-pink-50 to-white",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    title: "Social Media Users",
    value: "5.17B",
    icon: Users,
    description: "Users engaging in commerce",
    gradient: "from-blue-50 to-white",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Dropshipping Market",
    value: "$301B",
    icon: Package,
    description: "Expected market value",
    gradient: "from-indigo-50 to-white",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Global Online Shoppers",
    value: "2.71B",
    icon: Boxes,
    description: "%33 of the global population",
    gradient: "from-emerald-50 to-white",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "NGOs",
    value: "10K-30K",
    icon: HeartHandshake,
    description: "Organizations using e-commerce",
    gradient: "from-rose-50 to-white",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    title: "Local Artisans",
    value: "100K-150K",
    icon: Video,
    description: "Artisans selling globally",
    gradient: "from-amber-50 to-white",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "E-Commerce SaaS Market",
    value: "29.82B",
    icon: Store,
    description: "Market value in 2032",
    gradient: "from-cyan-50 to-white",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    title: "Subscription Services",
    value: "$37.5B",
    icon: Calendar,
    description: "Market value in billions",
    gradient: "from-teal-50 to-white",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

const CampaignMetrics = () => {
  const lastMetric = campaignMetrics[10];

  return (
    <div className="space-y-8 mt-5">
      {/* Title Section */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="p-2 bg-purple-50 rounded-lg">
            <BarChart3 className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">
            Key Market Stats
          </h2>
        </div>
        <p className="text-sm text-gray-600">
          Comprehensive market statistics and demographics
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {campaignMetrics.slice(0, 10).map((metric) => (
          <Card
            key={metric.title}
            className={`p-4 md:p-5 bg-gradient-to-br ${
              metric.gradient
            } hover:shadow-lg transition-all duration-300 ease-out hover:scale-[1.02] border border-${
              metric.iconColor.split("-")[1]
            }-100/50`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 ${metric.iconBg} rounded-xl`}>
                <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {metric.value}
                    </h3>
                    <p className="text-sm font-medium text-gray-700">
                      {metric.title}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Centered Last Card */}
      <div className="flex justify-center">
        <div className="w-full md:w-1/2">
          <Card
            className={`p-4 md:p-5 bg-gradient-to-br ${
              lastMetric.gradient
            } hover:shadow-lg transition-all duration-300 ease-out hover:scale-[1.02] border border-${
              lastMetric.iconColor.split("-")[1]
            }-100/50`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 ${lastMetric.iconBg} rounded-xl`}>
                <lastMetric.icon
                  className={`w-6 h-6 ${lastMetric.iconColor}`}
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {lastMetric.value}
                    </h3>
                    <p className="text-sm font-medium text-gray-700">
                      {lastMetric.title}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {lastMetric.description}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CampaignMetrics;
