import React from "react";
import { Card } from "@/components/ui/card";
import {
  Store,
  Brain,
  Megaphone,
  Rocket,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calculator,
  Scale,
  Package,
  Users,
  Settings,
  Box,
} from "lucide-react";
import Image from "next/image";

const TeamTab = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-[#F8F8F8]">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#20152E]">
                The Core Team Driving Innovation
              </h2>
              <p className="text-lg text-[#20152E]">
                A Diverse Team of Experts in E-commerce, AI, and Tech
              </p>
            </div>
            <p className="mx-auto max-w-3xl text-gray-600">
              TradeWizz is powered by a dedicated team with deep expertise in
              e-commerce, AI, and software development. They are committed to
              building a revolutionary super app that transforms the e-commerce
              ecosystem.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Team Member 1 */}
            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-[150px] h-[150px]">
                  <Image
                    src="/profile-photos/onur-profile-photo.png"
                    alt="Onur POLAT"
                    width={150}
                    height={150}
                    className="rounded-full object-cover border-2 border-[#4ADE80]/20"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Onur POLAT
                  </h3>
                  <p className="text-[#4ADE80] font-medium">
                    Co-Founder & Tech Lead
                  </p>
                  <p className="text-sm text-gray-600">
                    Onur directs TradeWizz's technology roadmap, leveraging 5
                    years of software development experience. He prioritizes
                    features and integrations, ensuring a scalable and robust
                    platform for users.
                  </p>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-[150px] h-[150px]">
                  <Image
                    src="/profile-photos/kaze-profile-photo.png"
                    alt="Kadir ZEYREK"
                    width={150}
                    height={150}
                    className="rounded-full object-cover border-2 border-[#4ADE80]/20"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Kadir ZEYREK
                  </h3>
                  <p className="text-[#4ADE80] font-medium">
                    Co-Founder & Strategy Lead
                  </p>
                  <p className="text-sm text-gray-600">
                    A Google AI & Tech Academy scholar and certified Agile
                    Master with 7 years of business experience. Kadir expertly
                    manages TradeWizz's operations, driving efficiency. His 3
                    years in an international trade tech startup shaped his
                    expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-[150px] h-[150px]">
                  <Image
                    src="/profile-photos/burak-profile-photo.png"
                    alt="Burak Can POLAT"
                    width={150}
                    height={150}
                    className="rounded-full object-cover border-2 border-[#4ADE80]/20"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Burak Can POLAT
                  </h3>
                  <p className="text-[#4ADE80] font-medium">
                    Co-Founder & Product Visionary
                  </p>
                  <p className="text-sm text-gray-600">
                    Burak oversees TradeWizz's financial strategy and guides AI
                    implementation, leveraging his Master's degree in AI. He
                    ensures the platform's financial health and technological
                    advancement.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-[150px] h-[150px]">
                  <Image
                    src="/profile-photos/kaze-profile-photo.png"
                    alt="Ramazan SEYHAN"
                    width={150}
                    height={150}
                    className="rounded-full object-cover border-2 border-[#4ADE80]/20"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Ramazan SEYHAN
                  </h3>
                  <p className="text-[#4ADE80] font-medium">
                    Co-Founder & Engineering Lead
                  </p>
                  <p className="text-sm text-gray-600">
                    Ramazan, a 10-year software veteran, leads TradeWizz's
                    platform development. His experience from top Turkish
                    companies ensures a user-friendly, high-performance
                    e-commerce platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Team Growth</p>
                <p className="text-2xl font-bold text-[#4ADE80]">%400</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Avg. Experience</p>
                <p className="text-2xl font-bold text-[#4ADE80]">5+ Years</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Experience</p>
                <p className="text-2xl font-bold text-[#4ADE80]">
                  Tech & E-commerce
                </p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Vision</p>
                <p className="text-2xl font-bold text-[#4ADE80]">
                  Global Impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Expertise Section */}
      <Card className="p-6 bg-[#F8F8F8]">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#20152E]">
                TradeWizz: A Fusion of E-commerce, AI, and Tech Expertise
              </h2>
              <p className="text-lg text-[#20152E]">
                Leveraging Deep Industry Knowledge to Drive E-commerce
                Innovation
              </p>
            </div>
            <p className="mx-auto max-w-3xl text-gray-600">
              The TradeWizz team combines a unique blend of e-commerce, AI, and
              software development expertise. This multidisciplinary approach
              positions TradeWizz to revolutionize the e-commerce ecosystem.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {/* E-commerce Mastery */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Store className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    AI-Driven E-commerce Solutions
                  </h3>
                  <p className="text-sm text-gray-600">
                    Developing and implementing cutting-edge AI solutions to
                    automate, optimize, and personalize the e-commerce
                    experience for all stakeholders.
                  </p>
                </div>
              </div>
            </div>

            {/* AI and Technology Leadership */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Brain className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Partnership Building
                  </h3>
                  <p className="text-sm text-gray-600">
                    Proven ability to forge strong partnerships that enhance
                    platform capabilities, expand market reach, and create a
                    thriving ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* SaaS Development and Growth */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Rocket className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Scalable Platform Development
                  </h3>
                  <p className="text-sm text-gray-600">
                    Expertise in building robust, scalable, and user-friendly
                    SaaS platforms designed for rapid growth and seamless
                    integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Marketing and Brand Building */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Megaphone className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Social Impact & Empowerment
                  </h3>
                  <p className="text-sm text-gray-600">
                    Dedicated to empowering local producers and NGOs, fostering
                    fair trade practices, and creating more sustainable
                    e-commerce ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">E-commerce Experience</p>
                <p className="text-2xl font-bold text-[#4ADE80]">4+ Years</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Tech Experience Avg</p>
                <p className="text-2xl font-bold text-[#4ADE80]">5+ Years</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Total Reach</p>
                <p className="text-2xl font-bold text-[#4ADE80]">
                  179.368 Individuals
                </p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">MVP Tester</p>
                <p className="text-2xl font-bold text-[#4ADE80]">91 User</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TeamTab;
