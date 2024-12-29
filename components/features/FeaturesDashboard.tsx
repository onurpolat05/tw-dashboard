import React from "react";
import { Card } from "@/components/ui/card";
import {
  Search,
  Package,
  DollarSign,
  Truck,
  Network,
  Store,
  Globe,
  LineChart,
  Wand,
  TrainTrack,
  Waves,
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  description,
  icon: Icon,
}) => (
  <Card className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-100 transition-all duration-200 hover:shadow-md">
    <div className="space-y-4">
      <div className="p-2 bg-violet-100 rounded-lg w-fit">
        <Icon className="w-6 h-6 text-violet-600" />
      </div>
      <div className="space-y-2">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm font-medium text-violet-600">{subtitle}</p>
        </div>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  </Card>
);

const features = [
  {
    title: "AI-Powered Sourcing Agent",
    subtitle: "Connect with Ethical Suppliers",
    description:
      "Intelligently matches you with verified producers based on your needs and ethical standards, streamlining the sourcing process.",
    icon: Search,
  },
  {
    title: "Intelligent Pricing Agent",
    subtitle: "Optimize Pricing Dynamically",
    description:
      "Dynamically adjusts prices based on market demand, competitor pricing, and ethical considerations, maximizing profitability.",
    icon: DollarSign,
  },
  {
    title: "Smart Inventory Agent",
    subtitle: "Automate Inventory Management",
    description:
      "Provides real-time inventory tracking, predicts demand, and automates restocking to prevent stockouts and overstocking.",
    icon: Package,
  },
  {
    title: "AI-Driven Marketing Agent",
    subtitle: "Create Targeted Campaigns",
    description:
      "Empowers you with AI-driven insights to create, manage, and optimize targeted marketing campaigns across multiple channels.",
    icon: Wand,
  },
  {
    title: "Integrated Logistics Agent",
    subtitle: "Streamline Fulfillment and Shipping",
    description:
      "Integrates with leading 3PL providers to offer streamlined fulfillment, optimized routing, and real-time tracking.",
    icon: Truck,
  },
  {
    title: "Impact Tracking & Reporting",
    subtitle: "Measure and Communicate Your Impact",
    description:
      "Tracks and reports social and environmental impact metrics, enabling transparent communication of your brand's commitment.",
    icon: Globe,
  },
  {
    title: "Global Market Reach",
    subtitle: "Expand Your Business Worldwide",
    description:
      "Connects you with a global network of partners, suppliers, and customers, enabling seamless expansion into new markets.",
    icon: TrainTrack,
  },
  {
    title: "Streamlined Onboarding & Support",
    subtitle: "Dedicated Assistance for All Users",
    description:
      "Provides comprehensive onboarding materials, dedicated support, and training programs to ensure effective platform utilization.",
    icon: Waves,
  },
];

const FeaturesDashboard: React.FC = () => {
  return (
    <Card className="p-8">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            TradeWizz: Your All-in-One Solution for E-commerce Growth
          </h2>
          <p className="text-lg text-gray-600">
            A complete e-commerce solution, streamlining operations and
            expanding your market reach.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default FeaturesDashboard;
