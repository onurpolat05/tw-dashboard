import React from "react";
import {
  Search,
  Package2,
  Link,
  Globe2,
  BarChart3,
  Megaphone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PainPointSectionProps, PainPoint } from "@/types/pain-points";
import PainPointCard from "./PainPointCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const painPoints: PainPoint[] = [
  {
    id: "market-access",
    title: "Limited Market Access for Local Producers",
    subtitle: "Difficulty Reaching World-Wide Customers",
    description:
      "Local producers, including small manufacturers and retailers, often lack the resources and knowledge to sell effectively on online marketplaces, hindering their reach and growth.",
    icon: Search,
  },
  {
    id: "ethical-sourcing",
    title: "Struggling to Source Ethically and Competitively",
    subtitle: "Balancing Ethics with Profitability",
    description:
      "Online sellers struggle to verify ethical sourcing and sustainability while maintaining competitive pricing, creating a difficult balance between values and business needs.",
    icon: Package2,
  },
  {
    id: "sustainable-suppliers",
    title: "Difficulty Finding Sustainable Suppliers",
    subtitle: "Lack of Reliable and Ethical Option",
    description:
      "Retailers face challenges in identifying and sourcing from reliable suppliers who adhere to ethical and sustainable practices, limiting their ability to offer responsible goods..",
    icon: Link,
  },
  {
    id: "ai-agents",
    title: "Absence of AI-Powered Solutions",
    subtitle: "Inefficiency and Lack of Automation",
    description:
      "The e-commerce landscape lacks AI-driven tools to automate key processes like product research, pricing, inventory management, marketing, and logistics, leading to inefficiencies.",
    icon: Globe2,
  },
  {
    id: "ngo-resources",
    title: "Limited Resources for NGOs",
    subtitle: "Inability to Scale Impact Effectively",
    description:
      "NGOs often have limited resources, including funding, personnel, and technology, hindering their ability to effectively support the communities and producers they serve.",
    icon: BarChart3,
  },
  {
    id: "artisan-support",
    title: "Insufficient Support for Local Artisans",
    subtitle: "Struggling to Thrive in the Digital Economy",
    description:
      "Local artisans often lack the digital literacy, resources, and platform access needed to effectively market and sell their unique handcrafted goods online, limiting their income.",
    icon: Megaphone,
  },
];

const PainPointsSection: React.FC<PainPointSectionProps> = ({
  className,
  showSources = false,
}) => {
  return (
    <Card className={cn("p-6", className)}>
      <CardHeader className="px-0 pt-0">
        <div className="space-y-3">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Roadblocks Preventing E-commerce From Thriving
          </CardTitle>
          <p className="text-lg text-gray-600">
            Existing solutions fail to address key challenges, limiting
            e-commerce growth.
          </p>
        </div>
      </CardHeader>

      <CardContent className="px-0 pt-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {painPoints.map((painPoint) => (
            <PainPointCard key={painPoint.id} {...painPoint} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PainPointsSection;
