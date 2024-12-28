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
import { Solution, SolutionSectionProps } from "@/types/solution";
import SolutionCard from "./SolutionCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const solutions: Solution[] = [
  {
    id: "global-marketplace",
    title: "Global Marketplace Access",
    subtitle: "Solves: Limited Market Access for Local Producers",
    description:
      "TradeWizz offers a global online marketplace, connecting local producers to online seller for a worldwide audience, expanding their reach.",
    icon: Search,
    painPointId: "market-access",
  },
  {
    id: "ethical-sourcing-verification",
    title: "Ethical Sourcing Verification",
    subtitle: "Solves: Struggling to Source Ethically and Competitively",
    description:
      "TradeWizz's AI Agents streamline the process for online sellers, helping them to find ethical suppliers and optimize pricing for a competitive edge.",
    icon: Package2,
    painPointId: "ethical-sourcing",
  },
  {
    id: "sustainable-supplier-network",
    title: "Sustainable Supplier Network",
    subtitle: "Solves: Difficulty Finding Sustainable Suppliers",
    description:
      "TradeWizz aims to facilitate the creation of valuable, long-term partnerships between retailers and suppliers committed to sustainable practices.",
    icon: Link,
    painPointId: "sustainable-suppliers",
  },
  {
    id: "ai-powered-agents",
    title: "AI-Powered Automation",
    subtitle: "Solves: Absence of AI-Powered Solutions",
    description:
      "TradeWizz's AI Vertical Agent Hub automates key processes like research, pricing, inventory, marketing, and logistics, boosting efficiency.",
    icon: Globe2,
    painPointId: "ai-agents",
  },
  {
    id: "ngo-platform",
    title: "NGO Empowerment Platform",
    subtitle: "Solves: Limited Resources for NGOs",
    description:
      "TradeWizz provides NGOs a platform to connect with online sellers, boost their revenue with e-commerce, manage their network, and boost social impact effectively.",
    icon: BarChart3,
    painPointId: "ngo-resources",
  },
  {
    id: "artisan-digital-tools",
    title: "Artisan Digital Enablement",
    subtitle: "Solves: Insufficient Support for Local Artisans",
    description:
      "TradeWizz offers tools to help artisans build their online presence, market globally, and manage their businesses with cutting edge proccess management tools.",
    icon: Megaphone,
    painPointId: "artisan-support",
  },
];

const SolutionSection: React.FC<SolutionSectionProps> = ({ className }) => {
  return (
    <Card className={cn("p-6", className)}>
      <CardHeader className="px-0 pt-0">
        <div className="space-y-3">
          <CardTitle className="text-2xl font-bold text-gray-900">
            AI-Powered Solutions for a Thriving E-commerce Ecosystem
          </CardTitle>
          <p className="text-lg text-gray-600">
            TradeWizz uses AI to streamline e-commerce, boosting efficiency and
            growth.
          </p>
        </div>
      </CardHeader>

      <CardContent className="px-0 pt-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} {...solution} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionSection;
