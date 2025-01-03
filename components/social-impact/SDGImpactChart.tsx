import React from "react";
import { Card } from "@/components/ui/card";
import {
  PieChart,
  Globe,
  GraduationCap,
  TrendingUp,
  DollarSign,
  Leaf,
  Bot,
  ShieldCheck,
  Gauge,
} from "lucide-react";

const impactStats = [
  {
    category: "Economic Impact",
    stats: [
      {
        title: "Projected SOM",
        value: "$27.25M",
        description: "Sustainable business model for impact",
        icon: DollarSign,
        color: "blue",
      },
      {
        title: "Producer Income Growth",
        value: "2x",
        description: "Help producers double their income",
        icon: TrendingUp,
        color: "indigo",
      },
    ],
  },
  {
    category: "Environmental Impact",
    stats: [
      {
        title: "CO₂ Reduction",
        value: "25%",
        description: "Target reduction in logistics emissions",
        icon: Leaf,
        color: "green",
      },
      {
        title: "Sustainable Product Listings",
        value: "30%",
        description: "Target for sustainable products on platform",
        icon: ShieldCheck,
        color: "emerald",
      },
    ],
  },
  {
    category: "Social Impact",
    stats: [
      {
        title: "Producer Training Programs",
        value: "100+",
        description: "E-commerce and digital literacy training",
        icon: GraduationCap,
        color: "purple",
      },
      {
        title: "Traditional Product Sales",
        value: "25%",
        description: "Target increase in traditional product sales",
        icon: Globe,
        color: "violet",
      },
    ],
  },
  {
    category: "Innovation Impact",
    stats: [
      {
        title: "AI Vertical Agents",
        value: "6",
        description: "AI agents for e-commerce automation",
        icon: Bot,
        color: "amber",
      },
      {
        title: "Agent Utilization",
        value: "90%",
        description: "Goal for AI agent utilization rate by users",
        icon: Gauge,
        color: "amber",
      },
    ],
  },
];

const SDGImpactChart = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <PieChart className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Global Impact Goals
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {impactStats.map((section, idx) => (
          <Card
            key={idx}
            className="p-6 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              {section.category}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {section.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 bg-gradient-to-br from-${stat.color}-50/50 to-white rounded-xl border border-${stat.color}-100 hover:shadow-md transition-all duration-300 group`}
                  >
                    <div
                      className={`p-2 bg-${stat.color}-100 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-5 h-5 text-${stat.color}-600`} />
                    </div>
                    <div className="space-y-1">
                      <p
                        className={`text-2xl font-bold text-${stat.color}-600`}
                      >
                        {stat.value}
                      </p>
                      <h4 className="text-sm font-medium text-gray-900">
                        {stat.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SDGImpactChart;
