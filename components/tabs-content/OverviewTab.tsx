import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Sprout, Sparkles, LineChart, CheckCircle, Users, DollarSign, BarChart2, UserPlus, Code2, Users2, Megaphone, Wallet } from 'lucide-react';

const OverviewTab = () => {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="relative w-[80px] h-[80px]">
            <Image
              src="/tw-logo.png"
              alt="TradeWizz Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-[#20152E]">TradeWizz</h1>
            <p className="text-gray-600">AI-powered e-commerce management platform</p>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-br from-[#4ADE80]/10 to-white border border-[#4ADE80]/20 rounded-lg">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#20152E]">Current Valuation</h2>
            <div className="text-2xl font-bold text-[#4ADE80]">$1.91M - $4.43M</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Worst Case</p>
                <p className="text-lg font-semibold text-[#20152E]">$1.91M</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Optimal Case</p>
                <p className="text-lg font-semibold text-[#20152E]">$3.18M</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Best Case</p>
                <p className="text-lg font-semibold text-[#20152E]">$4.43M</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 bg-[#F8F8F8] rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-3 flex items-start space-x-3">
              <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                <Sprout className="w-8 h-8 text-[#4ADE80]" />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-[#20152E]">Funding Stage</h2>
                <div className="text-2xl font-bold text-[#4ADE80]">Pre-Seed</div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <p className="text-[#20152E] leading-relaxed">
                TradeWizz is currently in the pre-seed funding stage, seeking investment to further develop its platform, scale its operations, and accelerate market penetration.
              </p>
            </div>

            <div className="lg:col-span-3">
              <ul className="space-y-3 list-disc list-inside text-[#20152E]">
                <li className="leading-relaxed">
                  This funding will be strategically allocated to key growth areas, including team expansion, product development, and marketing initiatives.
                </li>
                <li className="leading-relaxed">
                  The pre-seed round aims to secure the necessary resources to achieve significant milestones and position TradeWizz for subsequent seed-stage funding.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-5 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-[#20152E]">Brief Description</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-[#20152E] leading-relaxed">
                TradeWizz is an <span className="font-medium">AI-powered e-commerce management platform</span> designed to help online sellers optimize their operations, increase profitability, and scale their businesses. Our platform leverages advanced artificial intelligence to provide:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg border border-purple-100">
                  <h3 className="text-sm font-medium text-purple-600 mb-2">Smart Automation</h3>
                  <p className="text-sm text-gray-600">
                    Automated inventory management and pricing optimization for maximum efficiency
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-purple-100">
                  <h3 className="text-sm font-medium text-purple-600 mb-2">Market Intelligence</h3>
                  <p className="text-sm text-gray-600">
                    Real-time market analysis and competitor tracking for informed decision-making
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-purple-100">
                  <h3 className="text-sm font-medium text-purple-600 mb-2">Growth Analytics</h3>
                  <p className="text-sm text-gray-600">
                    Comprehensive performance metrics and growth forecasting tools
                  </p>
                </div>
              </div>
              
              <p className="text-[#20152E] leading-relaxed">
                Our platform currently focuses on Amazon sellers, with plans to expand to other major e-commerce platforms, providing a comprehensive solution for multi-channel online retail management.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Executive Summary</h2>
          <p className="text-gray-600">
            TradeWizz is an AI-powered e-commerce management platform designed for Amazon sellers,
            with plans to expand to other platforms.
          </p>
        </div>

        <div className="p-5 bg-gradient-to-br from-[#4ADE80]/10 to-white rounded-lg border border-[#4ADE80]/20">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-[#20152E]">Key Investment Highlights</h2>
              <p className="text-lg font-medium text-[#20152E]">Compelling Reasons to Invest in TradeWizz</p>
              <p className="text-[#20152E] leading-relaxed mt-4">
                TradeWizz presents a unique investment opportunity in the rapidly growing e-commerce SaaS market. The company's strong early traction, innovative platform, and experienced team position it for significant growth and market leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Large and Expanding Market */}
              <div className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                    <LineChart className="w-8 h-8 text-[#4ADE80]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#20152E]">Large and Expanding Market</h3>
                    <p className="text-gray-600">Multi-billion dollar market opportunity with evolution-focused solution</p>
                  </div>
                </div>
              </div>

              {/* Proven Business Model */}
              <div className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-[#4ADE80]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#20152E]">Proven Business Model</h3>
                    <p className="text-gray-600">SaaS subscriptions, 3PL warehouse commissions, and Twizz Shop marketplace</p>
                  </div>
                </div>
              </div>

              {/* Strong Early Traction */}
              <div className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                    <Users className="w-8 h-8 text-[#4ADE80]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#20152E]">Strong Early Traction</h3>
                    <p className="text-gray-600">41 paying customers with 19.51% trial-to-paid conversion</p>
                  </div>
                </div>
              </div>

              {/* Efficient Customer Acquisition */}
              <div className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                    <DollarSign className="w-8 h-8 text-[#4ADE80]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#20152E]">Efficient Customer Acquisition</h3>
                    <p className="text-gray-600">CAC: $7.32 during MVP with effective marketing strategies</p>
                  </div>
                </div>
              </div>

              {/* Positive Unit Economics */}
              <div className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                    <BarChart2 className="w-8 h-8 text-[#4ADE80]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#20152E]">Positive Unit Economics</h3>
                    <p className="text-gray-600">LTV:CAC ratio of 4.73x with strong ROI potential</p>
                  </div>
                </div>
              </div>

              {/* Experienced Team */}
              <div className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                    <UserPlus className="w-8 h-8 text-[#4ADE80]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#20152E]">Experienced Team</h3>
                    <p className="text-gray-600">E-commerce expertise with AI and SaaS background</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 bg-[#F8F8F8] rounded-lg">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <DollarSign className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#20152E]">Funding Ask: $500K Seed Round</h2>
                  <p className="text-lg font-medium text-[#20152E]">Fueling Growth and Platform Expansion</p>
                </div>
              </div>
              <p className="text-[#20152E] leading-relaxed mt-4">
                TradeWizz is seeking $500,000 in pre-seed funding to accelerate its growth trajectory and expand its platform capabilities. This investment will be strategically allocated across key business areas to maximize impact and drive sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product Development */}
              <div className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
                <div className="flex flex-col space-y-3">
                  <div className="p-2 bg-[#4ADE80]/10 rounded-lg w-fit">
                    <Code2 className="w-8 h-8 text-[#4ADE80]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#20152E]">Product Development</h3>
                    <p className="text-gray-600">Enhance AI capabilities, expand platform features, and improve user experience</p>
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-[#4ADE80]">40%</span>
                      <span className="text-gray-600 ml-2">($200,000)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Expansion */}
              <div className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
                <div className="flex flex-col space-y-3">
                  <div className="p-2 bg-[#4ADE80]/10 rounded-lg w-fit">
                    <Users2 className="w-8 h-8 text-[#4ADE80]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#20152E]">Team Expansion</h3>
                    <p className="text-gray-600">Grow engineering, product, and customer success teams</p>
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-[#4ADE80]">30%</span>
                      <span className="text-gray-600 ml-2">($150,000)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing and Sales */}
              <div className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
                <div className="flex flex-col space-y-3">
                  <div className="p-2 bg-[#4ADE80]/10 rounded-lg w-fit">
                    <Megaphone className="w-8 h-8 text-[#4ADE80]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#20152E]">Marketing and Sales</h3>
                    <p className="text-gray-600">Scale customer acquisition and build brand awareness</p>
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-[#4ADE80]">30%</span>
                      <span className="text-gray-600 ml-2">($150,000)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use of Funds Section */}
        <div className="p-5 bg-[#F8F8F8] rounded-lg">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-3">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Wallet className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#20152E]">Use of Funds: Strategic Allocation for Accelerated Growth</h2>
                  <p className="text-lg font-medium text-[#20152E]">Investing in Product Development, Team Expansion, and Market Penetration</p>
                </div>
              </div>
              <p className="text-[#20152E] leading-relaxed mt-4 max-w-3xl mx-auto">
                The $500K pre-seed funding will be strategically allocated to fuel TradeWizz's growth and achieve key milestones across three critical areas: product development, team expansion, and market penetration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product Development */}
              <div className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                        <Code2 className="w-8 h-8 text-[#4ADE80]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#20152E]">Product Development</h3>
                    </div>
                    <span className="text-2xl font-bold text-[#4ADE80]">40%</span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600">Primary focus areas:</p>
                    <ul className="space-y-2 list-disc list-inside text-gray-600">
                      <li>AI algorithm enhancement</li>
                      <li>Platform feature expansion</li>
                      <li>User experience improvements</li>
                      <li>Infrastructure scalability</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">Allocation: $200,000</p>
                  </div>
                </div>
              </div>

              {/* Team Expansion */}
              <div className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                        <Users2 className="w-8 h-8 text-[#4ADE80]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#20152E]">Team Expansion</h3>
                    </div>
                    <span className="text-2xl font-bold text-[#4ADE80]">30%</span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600">Key hires in:</p>
                    <ul className="space-y-2 list-disc list-inside text-gray-600">
                      <li>Engineering team</li>
                      <li>Product development</li>
                      <li>Customer success</li>
                      <li>Sales and marketing</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">Allocation: $150,000</p>
                  </div>
                </div>
              </div>

              {/* Marketing and Sales */}
              <div className="p-4 bg-white rounded-lg border border-[#4ADE80]/20 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                        <Megaphone className="w-8 h-8 text-[#4ADE80]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#20152E]">Marketing & Sales</h3>
                    </div>
                    <span className="text-2xl font-bold text-[#4ADE80]">30%</span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600">Strategic initiatives:</p>
                    <ul className="space-y-2 list-disc list-inside text-gray-600">
                      <li>Digital marketing campaigns</li>
                      <li>Sales team development</li>
                      <li>Brand awareness building</li>
                      <li>Market expansion activities</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">Allocation: $150,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OverviewTab; 