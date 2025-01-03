import React from "react";
import { Card } from "@/components/ui/card";
import {
  Users,
  BarChart3,
  Globe2,
  Factory,
  ShoppingBag,
  UserPlus,
} from "lucide-react";
import SDGCard from "@/components/social-impact/SDGCard";
import SDGImpactChart from "../social-impact/SDGImpactChart";
import Image from "next/image";

const SocialImpactTab = () => {
  const sdgData = [
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      description:
        "TradeWizz empowers local producers and artisans by providing access to global markets.",
      icon: Users,
      metrics: [
        "Number of local artisans onboarded",
        "Revenue generated for ethical suppliers",
      ],
      globalImpact:
        "Small and medium-sized enterprises represent about 90% of businesses and more than 50% of employment worldwide.",
      color: "blue",
    },
    {
      number: 9,
      title: "Industry, Innovation, and Infrastructure",
      description:
        "TradeWizz leverages AI to create a more efficient and inclusive e-commerce infrastructure.",
      icon: Factory,
      metrics: [
        "Number of SMEs using the platform",
        "Reduction in operational costs for users",
      ],
      globalImpact:
        "Manufacturing value added as a proportion of GDP increased from 14.9% in 2000 to 16.4% in 2021.",
      color: "orange",
    },
    {
      number: 12,
      title: "Responsible Consumption and Production",
      description:
        "TradeWizz promotes responsible consumption by connecting consumers with ethically sourced products.",
      icon: ShoppingBag,
      metrics: [
        "Volume of ethically sourced products sold",
        "Reduction in carbon emissions through local sourcing",
      ],
      globalImpact:
        "Should the global population reach 9.6 billion by 2050, the equivalent of almost three planets could be required to provide the natural resources needed to sustain current lifestyles.",
      color: "amber",
    },
    {
      number: 17,
      title: "Partnerships for the Goals",
      description:
        "TradeWizz fosters partnerships to create a collaborative e-commerce ecosystem.",
      icon: UserPlus,
      metrics: [
        "Number of strategic partnerships",
        "Number of NGOs supported through platform features",
      ],
      globalImpact:
        "As of 2022, over 65% of companies worldwide reported engaging in partnerships to advance the Sustainable Development Goals.",
      color: "green",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="p-2 bg-blue-50 rounded-lg mb-4">
            <Globe2 className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Driving Positive Change
          </h1>
          <p className="text-gray-600 max-w-2xl">
            We're committed to making a positive difference in our communities
            through sustainable practices and social initiatives, aligned with
            the UN's Sustainable Development Goals.
          </p>
        </div>
      </Card>

      {/* SDG Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-blue-50 rounded-lg">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Our Contribution to SDGs
          </h2>
        </div>

        <div className="relative">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {sdgData.map((sdg, index) => (
              <div key={index}>
                <SDGCard {...sdg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <SDGImpactChart />
    </div>
  );
};

export default SocialImpactTab;
