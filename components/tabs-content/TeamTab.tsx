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
                Key Team Members: Experienced Leadership Driving Growth
              </h2>
              <p className="text-lg text-[#20152E]">
                Highlighting the Expertise and Commitment of the TradeWizz Team
              </p>
            </div>
            <p className="mx-auto max-w-3xl text-gray-600">
              The TradeWizz team comprises experienced professionals with a
              diverse range of skills in e-commerce, technology, and business
              development. This section introduces the core team members driving
              the company's vision and execution.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Team Member 1 */}
            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-[150px] h-[150px]">
                  <Image
                    src="/tw-profile-photo-Onur.jpg"
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
                  <p className="text-[#4ADE80] font-medium">Co-Founder</p>
                  <p className="text-sm text-gray-600">
                    A seasoned software engineer and technology leader with
                    expertise in AI, machine learning, and cloud computing. Onur
                    is responsible for the development and implementation of the
                    TradeWizz platform. 15 years of experience in software
                    development, specializing in creating scalable and efficient
                    systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-[150px] h-[150px]">
                  <Image
                    src="/tw-profile-photo-Kadir.png"
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
                  <p className="text-[#4ADE80] font-medium">Co-Founder</p>
                  <p className="text-sm text-gray-600">
                    A seasoned software engineer and technology leader with
                    expertise in AI, machine learning, and cloud computing. Kadir
                    is responsible for the development and implementation of the
                    TradeWizz platform. 15 years of experience in software
                    development, specializing in creating scalable and efficient
                    systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-[150px] h-[150px]">
                  <Image
                    src="/tw-profile-photo-Burak.png"
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
                  <p className="text-[#4ADE80] font-medium">Co-Founder</p>
                  <p className="text-sm text-gray-600">
                    A seasoned software engineer and technology leader with
                    expertise in AI, machine learning, and cloud computing. Burak
                    is responsible for the development and implementation of the
                    TradeWizz platform. 15 years of experience in software
                    development, specializing in creating scalable and efficient
                    systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-[150px] h-[150px]">
                  <Image
                    src="/tw-profile-photo-Ramazan.png"
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
                  <p className="text-[#4ADE80] font-medium">Co-Founder</p>
                  <p className="text-sm text-gray-600">
                    A seasoned software engineer and technology leader with
                    expertise in AI, machine learning, and cloud computing. Ramazan
                    is responsible for the development and implementation of the
                    TradeWizz platform. 15 years of experience in software
                    development, specializing in creating scalable and efficient
                    systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Combined Experience</p>
                <p className="text-2xl font-bold text-[#4ADE80]">31+ Years</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Industry Expertise</p>
                <p className="text-2xl font-bold text-[#4ADE80]">E-commerce</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Team Growth</p>
                <p className="text-2xl font-bold text-[#4ADE80]">300%</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Projects Completed</p>
                <p className="text-2xl font-bold text-[#4ADE80]">50+</p>
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
                Expertise: A Powerful Blend of E-commerce, AI, and SaaS
                Experience
              </h2>
              <p className="text-lg text-[#20152E]">
                Leveraging Deep Industry Knowledge to Drive TradeWizz's Success
              </p>
            </div>
            <p className="mx-auto max-w-3xl text-gray-600">
              The TradeWizz team possesses a unique combination of expertise in
              e-commerce, artificial intelligence, and SaaS development,
              perfectly positioning the company to capitalize on the growing
              market opportunity and deliver exceptional value to its customers.
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
                    E-commerce Mastery
                  </h3>
                  <p className="text-sm text-gray-600">
                    Extensive experience in online retail, marketplace
                    management, and digital marketing, with a proven track
                    record of building and scaling successful e-commerce
                    businesses. Ilhan has managed a $10 million turnover on
                    Amazon, demonstrating expertise in scaling e-commerce
                    operations.
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
                    AI and Technology Leadership
                  </h3>
                  <p className="text-sm text-gray-600">
                    Deep technical expertise in artificial intelligence, machine
                    learning, and cloud computing, enabling the development of
                    cutting-edge solutions for e-commerce optimization. Ozan has
                    15 years of experience in software development, specializing
                    in creating scalable and efficient systems.
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
                    SaaS Development and Growth
                  </h3>
                  <p className="text-sm text-gray-600">
                    Proven ability to build, launch, and scale SaaS products,
                    with a focus on user experience, customer success, and
                    recurring revenue models.
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
                    Marketing and Brand Building
                  </h3>
                  <p className="text-sm text-gray-600">
                    Strong expertise in digital marketing, brand development,
                    and customer acquisition, with a focus on driving growth and
                    building brand awareness in the e-commerce space. Aydin has
                    6 years of experience in digital marketing, with a focus on
                    customer acquisition and brand development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">E-commerce Revenue</p>
                <p className="text-2xl font-bold text-[#4ADE80]">$10M+</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Tech Experience</p>
                <p className="text-2xl font-bold text-[#4ADE80]">15 Years</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Marketing ROI</p>
                <p className="text-2xl font-bold text-[#4ADE80]">473%</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Projects Delivered</p>
                <p className="text-2xl font-bold text-[#4ADE80]">50+</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TeamTab;
