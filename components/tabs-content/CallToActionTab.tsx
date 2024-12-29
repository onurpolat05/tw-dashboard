import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Target,
  TrendingUp,
  Users,
  ArrowRight,
  Trophy,
  DollarSign,
} from "lucide-react";

const CallToActionTab = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-[#F8F8F8]">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#20152E]">
                Investment Opportunity: Partner with TradeWizz and Shape the
                Future of E-commerce
              </h2>
              <p className="text-lg text-[#20152E]">
                Seeking $500K in Pre-Seed Funding to Accelerate Growth and
                Expand Platform Capabilities
              </p>
            </div>
            <p className="mx-auto max-w-3xl text-gray-600">
              TradeWizz is seeking $500K in pre-seed funding to further develop
              its AI-powered platform, expand its team, and scale its customer
              acquisition efforts. This is an opportunity to invest in a
              high-growth e-commerce SaaS company with a unique value
              proposition and a strong potential for significant returns.
            </p>
          </div>

          {/* Key Investment Highlights */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Large and Growing Market */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Large and Growing Market
                  </h3>
                  <p className="text-sm text-gray-600">
                    Addressing a multi-billion dollar market with a solution
                    that meets the evolving needs of e-commerce sellers.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong Early Traction */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Trophy className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Strong Early Traction
                  </h3>
                  <p className="text-sm text-gray-600">
                    Demonstrated product-market fit with 41 paying customers and
                    a 19.51% trial-to-paid conversion rate in the MVP test
                    phase.
                  </p>
                </div>
              </div>
            </div>

            {/* Exceptional ROI Potential */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <DollarSign className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Exceptional ROI Potential
                  </h3>
                  <p className="text-sm text-gray-600">
                    Achieved a 4.73x LTV:CAC ratio during the MVP test,
                    indicating efficient customer acquisition and strong revenue
                    potential.
                  </p>
                </div>
              </div>
            </div>

            {/* Experienced and Dedicated Team */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Users className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Experienced and Dedicated Team
                  </h3>
                  <p className="text-sm text-gray-600">
                    Led by a team with deep expertise in e-commerce, AI, and
                    SaaS, committed to driving innovation and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 space-y-6 text-center">
            <div className="p-8 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#20152E]">
                  Join us in empowering e-commerce businesses worldwide
                </h3>
                <p className="text-gray-600">
                  Contact us to learn more about this exciting investment
                  opportunity
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Email:{" "}
                    <a
                      href="mailto:aydin.yildirim@tradewizz.com"
                      className="text-[#4ADE80] hover:underline"
                    >
                      aydin.yildirim@tradewizz.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">
                    Website:{" "}
                    <a
                      href="https://www.tradewizz.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4ADE80] hover:underline"
                    >
                      www.tradewizz.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Funding Goal</p>
                <p className="text-2xl font-bold text-[#4ADE80]">$500K</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">LTV:CAC Ratio</p>
                <p className="text-2xl font-bold text-[#4ADE80]">4.73x</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-[#4ADE80]">19.51%</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Paying Customers</p>
                <p className="text-2xl font-bold text-[#4ADE80]">41</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Next Steps Section */}
      <Card className="p-6 bg-[#F8F8F8]">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#20152E]">
                Next Steps: Let's Discuss How TradeWizz Can Transform Your
                Portfolio
              </h2>
              <p className="text-lg text-[#20152E]">
                Taking the First Step Towards a Promising Partnership
              </p>
            </div>
            <p className="mx-auto max-w-3xl text-gray-600">
              We believe TradeWizz represents a compelling investment
              opportunity in the rapidly growing e-commerce SaaS market. We
              invite you to explore this opportunity further and discuss how
              TradeWizz can become a valuable addition to your portfolio.
            </p>
          </div>

          {/* Invitation and Action Section */}
          <div className="p-8 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="mx-auto space-y-6 max-w-2xl">
              <p className="text-center text-gray-600">
                We are confident that TradeWizz has the potential to deliver
                exceptional returns. We are eager to share more detailed
                information, answer your questions, and discuss how we can work
                together to shape the future of e-commerce.
              </p>

              <div className="space-y-2 text-center">
                <p className="text-[#20152E] font-medium">
                  Schedule a meeting with our team to discuss the investment
                  opportunity and learn more about our vision for TradeWizz.
                </p>
                <button className="px-8 py-3 bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-white font-semibold rounded-lg transition-colors">
                  Schedule a Meeting
                </button>
              </div>

              <div className="pt-4 text-center border-t">
                <p className="text-sm text-gray-600">
                  Alternatively, download our detailed investor deck here:{" "}
                  <a
                    href="#"
                    className="text-[#4ADE80] hover:underline font-medium"
                  >
                    Download Investor Deck
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Action Stats */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Investment Stage</p>
                <p className="text-2xl font-bold text-[#4ADE80]">Pre-Seed</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Minimum Investment</p>
                <p className="text-2xl font-bold text-[#4ADE80]">$50K</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Target Close</p>
                <p className="text-2xl font-bold text-[#4ADE80]">Q2 2024</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Available Equity</p>
                <p className="text-2xl font-bold text-[#4ADE80]">15%</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CallToActionTab;
