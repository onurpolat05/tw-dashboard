import React from "react";
import { Card } from "@/components/ui/card";
import {
  Download,
  Share2,
  BarChart,
  FileText,
  Twitter,
  Linkedin,
} from "lucide-react";

const features = [
  {
    title: "Downloadable Reports",
    description: "Access detailed impact reports in various formats",
    icon: FileText,
    action: "Download Report",
  },
  {
    title: "Social Sharing",
    description: "Share your impact metrics on social media",
    icon: Share2,
    action: "Share Impact",
  },
  {
    title: "Custom Dashboards",
    description: "Create personalized impact tracking dashboards",
    icon: BarChart,
    action: "Customize",
  },
];

const TrackingSection = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Download className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Track and Share Your Impact
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-blue-100 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <button className="px-4 py-2 text-sm text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                    {feature.action}
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Social Sharing Buttons */}
      <Card className="p-6 bg-gradient-to-br from-gray-50 to-white mt-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Share Our Mission
          </h3>
          <div className="flex gap-4">
            <button className="p-3 bg-[#1DA1F2]/10 rounded-lg hover:bg-[#1DA1F2]/20 transition-colors group">
              <Twitter className="w-6 h-6 text-[#1DA1F2] group-hover:scale-110 transition-transform" />
            </button>
            <button className="p-3 bg-[#0A66C2]/10 rounded-lg hover:bg-[#0A66C2]/20 transition-colors group">
              <Linkedin className="w-6 h-6 text-[#0A66C2] group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default TrackingSection;
