import React from "react";
import { Card } from "@/components/ui/card";
import { LineChart, Users, Leaf, Target } from "lucide-react";

const metrics = [
  {
    title: "Communities Served",
    value: "50+",
    description:
      "Local communities positively impacted through our initiatives",
    icon: Users,
    color: "blue",
  },
  {
    title: "Sustainability Score",
    value: "95%",
    description: "Reduction in environmental impact through green practices",
    icon: Leaf,
    color: "green",
  },
  {
    title: "Social Programs",
    value: "25",
    description: "Active community development programs",
    icon: Target,
    color: "purple",
  },
];

const ImpactMetrics = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-50 rounded-lg">
          <LineChart className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Key Impact Metrics
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card
              key={index}
              className={`p-6 bg-gradient-to-br from-${metric.color}-50 to-white hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 bg-${metric.color}-100 rounded-xl group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 text-${metric.color}-600`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {metric.title}
                  </h3>
                  <p
                    className={`text-3xl font-bold text-${metric.color}-600 my-2`}
                  >
                    {metric.value}
                  </p>
                  <p className="text-gray-600">{metric.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ImpactMetrics;
