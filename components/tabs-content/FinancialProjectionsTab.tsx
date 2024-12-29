import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, DollarSign, TrendingDown, Calculator, Scale, Package, Store,Users,Settings,Box } from 'lucide-react';

const FinancialProjectionsTab = () => {
  return (
    <div className="space-y-6">
<Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-[#20152E]">
                        Revenue Model: Diversified Streams for Sustainable Growth
                      </h2>
                      <p className="text-lg text-[#20152E]">
                        A Three-Pronged Approach: Subscription, Warehouse, and Marketplace
                      </p>
                    </div>
                    <p className="mx-auto max-w-3xl text-gray-600">
                      TradeWizz employs a diversified revenue model, combining recurring subscription revenue with transaction-based commissions from its integrated warehouse services and marketplace platform. This multi-faceted approach ensures a robust and scalable revenue stream.
                    </p>
                  </div>

                  {/* Revenue Streams Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Stream Card 1: Subscription Packages */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Box className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Subscription Packages</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz offers tiered subscription packages tailored to different user needs and budgets, providing a predictable and recurring revenue stream.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Eko</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$9.99/month</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Simple</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$39.99/month</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Premium</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$59.99/month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stream Card 2: Warehouse Commission */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Package className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Warehouse Commission</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz earns a 10% commission on transactions processed through its integrated 3PL warehouse partners, generating revenue from users' logistics and fulfillment activities.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                              <span className="text-sm text-gray-600">Applied to single-item shipments</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                              <span className="text-sm text-gray-600">Applied to FBA package shipments</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stream Card 3: Twizz Shop Commission */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Store className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Twizz Shop Commission</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz earns a 5% commission on all sales conducted through its integrated marketplace, Twizz Shop, connecting sellers with suppliers, manufacturers, and local workshops.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                              <span className="text-sm text-gray-600">Applied to total transaction value</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Distribution */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Current Distribution */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Current Revenue Distribution</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Subscription Revenue</span>
                          <span className="text-sm font-medium text-[#4ADE80]">65%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Warehouse Commission</span>
                          <span className="text-sm font-medium text-[#4ADE80]">25%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Marketplace Commission</span>
                          <span className="text-sm font-medium text-[#4ADE80]">10%</span>
                        </div>
                      </div>
                    </div>

                    {/* Projected Distribution */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Projected Revenue Distribution (2025)</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Subscription Revenue</span>
                          <span className="text-sm font-medium text-[#4ADE80]">50%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Warehouse Commission</span>
                          <span className="text-sm font-medium text-[#4ADE80]">30%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Marketplace Commission</span>
                          <span className="text-sm font-medium text-[#4ADE80]">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Average Revenue Per User</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$265.70</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Monthly Recurring Revenue</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$10,893</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Revenue Growth Rate</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">27%</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Gross Margin</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">79%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Projected ARR (2027) Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-[#20152E]">
                        Projected ARR (2027): Scenario Analysis
                      </h2>
                      <p className="text-lg text-[#20152E]">
                        Forecasting Annual Recurring Revenue Based on Worst, Optimal, and Best Case Scenarios
                      </p>
                    </div>
                    <p className="mx-auto max-w-3xl text-gray-600">
                      Projected Annual Recurring Revenue (ARR) for 2027 is presented under three different scenarios: Worst Case, Optimal Case, and Best Case. These scenarios reflect varying levels of customer acquisition, retention, and adoption of the platform's revenue-generating features.
                    </p>
                  </div>

                  {/* Scenarios Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Worst Case Scenario */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-red-100 rounded-lg">
                              <TrendingDown className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#20152E]">Worst Case</h3>
                          </div>
                        </div>
                        <div className="py-4 text-center">
                          <p className="text-3xl font-bold text-red-500">$365.04K</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          This scenario assumes the highest churn rates (as outlined in the ACR projections) and lower-than-expected adoption of the 3PL and Twizz Shop features.
                        </p>
                      </div>
                    </div>

                    {/* Optimal Case Scenario */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                              <Scale className="w-8 h-8 text-yellow-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#20152E]">Optimal Case</h3>
                          </div>
                        </div>
                        <div className="py-4 text-center">
                          <p className="text-3xl font-bold text-yellow-500">$1,231.43K</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          This scenario reflects a moderate churn rate and a reasonable adoption rate for the 3PL and Twizz Shop features, based on internal projections.
                        </p>
                      </div>
                    </div>

                    {/* Best Case Scenario */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                              <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#20152E]">Best Case</h3>
                          </div>
                        </div>
                        <div className="py-4 text-center">
                          <p className="text-3xl font-bold text-[#4ADE80]">$2,159.55K</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          This scenario assumes the lowest churn rates, strong customer acquisition, and high adoption rates for the 3PL and Twizz Shop features.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Assumptions */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Growth Assumptions */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Growth Assumptions</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Customer Growth Rate</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">27%</span>
                            <span className="text-sm font-medium text-yellow-500">42%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">65%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Feature Adoption Rate</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">45%</span>
                            <span className="text-sm font-medium text-yellow-500">65%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">85%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Revenue per Customer</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">$215</span>
                            <span className="text-sm font-medium text-yellow-500">$325</span>
                            <span className="text-sm font-medium text-[#4ADE80]">$445</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Retention Metrics */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Retention Metrics</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Customer Retention Rate</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">75%</span>
                            <span className="text-sm font-medium text-yellow-500">85%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">92%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Net Revenue Retention</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">95%</span>
                            <span className="text-sm font-medium text-yellow-500">115%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">135%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Expansion Revenue</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">15%</span>
                            <span className="text-sm font-medium text-yellow-500">27%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">45%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Growth Timeline */}
                  <div className="p-6 bg-white rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Growth Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
                      <div className="pl-8 space-y-6">
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Early Growth (2024-2025)</h5>
                          <p className="text-sm text-gray-600">Focus on customer acquisition and product refinement</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]/60"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Expansion Phase (2025-2026)</h5>
                          <p className="text-sm text-gray-600">Market expansion and feature adoption acceleration</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Maturity (2027)</h5>
                          <p className="text-sm text-gray-600">Stable growth and optimized unit economics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Projected EBITDA (2027) Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-[#20152E]">
                        Projected EBITDA (2027): Scenario Analysis
                      </h2>
                      <p className="text-lg text-[#20152E]">
                        Evaluating Profitability Under Different Operational Scenarios
                      </p>
                    </div>
                    <p className="mx-auto max-w-3xl text-gray-600">
                      Earnings Before Interest, Taxes, Depreciation, and Amortization (EBITDA) is a key indicator of a company's operating performance. This section presents the projected EBITDA for 2027 under three different scenarios: Worst Case, Optimal Case, and Best Case, reflecting varying levels of revenue, churn, and operational efficiency.
                    </p>
                  </div>

                  {/* Scenarios Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Worst Case Scenario */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-red-100 rounded-lg">
                              <TrendingDown className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#20152E]">Worst Case</h3>
                          </div>
                        </div>
                        <div className="py-4 text-center">
                          <p className="text-3xl font-bold text-red-500">$385.09K</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          This scenario reflects the financial performance under the most conservative assumptions, including higher churn rates and lower customer acquisition, resulting in an EBITDA of $385.09K.
                        </p>
                      </div>
                    </div>

                    {/* Optimal Case Scenario */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                              <Scale className="w-8 h-8 text-yellow-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#20152E]">Optimal Case</h3>
                          </div>
                        </div>
                        <div className="py-4 text-center">
                          <p className="text-3xl font-bold text-yellow-500">$1,370.02K</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          This scenario represents a moderate outlook, with balanced assumptions regarding customer retention, acquisition, and operational efficiency, projecting an EBITDA of $1,370.02K.
                        </p>
                      </div>
                    </div>

                    {/* Best Case Scenario */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                              <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#20152E]">Best Case</h3>
                          </div>
                        </div>
                        <div className="py-4 text-center">
                          <p className="text-3xl font-bold text-[#4ADE80]">$1,921.1K</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          This scenario reflects the most optimistic outlook, with low churn rates, high customer acquisition, and strong adoption of all revenue streams, resulting in an EBITDA of $1,921.1K.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Revenue Metrics */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Revenue Metrics</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Revenue Growth Rate</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">27%</span>
                            <span className="text-sm font-medium text-yellow-500">42%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">65%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Gross Margin</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">75%</span>
                            <span className="text-sm font-medium text-yellow-500">82%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">88%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Operating Margin</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">35%</span>
                            <span className="text-sm font-medium text-yellow-500">45%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">55%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cost Structure */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Cost Structure</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Operating Expenses</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">45%</span>
                            <span className="text-sm font-medium text-yellow-500">35%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">25%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Marketing Spend</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">25%</span>
                            <span className="text-sm font-medium text-yellow-500">20%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">15%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">R&D Investment</span>
                          <div className="flex space-x-4">
                            <span className="text-sm font-medium text-red-500">15%</span>
                            <span className="text-sm font-medium text-yellow-500">20%</span>
                            <span className="text-sm font-medium text-[#4ADE80]">25%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Growth Timeline */}
                  <div className="p-6 bg-white rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Profitability Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
                      <div className="pl-8 space-y-6">
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Early Stage (2024-2025)</h5>
                          <p className="text-sm text-gray-600">Focus on market penetration and customer acquisition</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]/60"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Growth Phase (2025-2026)</h5>
                          <p className="text-sm text-gray-600">Scaling operations and optimizing unit economics</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Maturity (2027)</h5>
                          <p className="text-sm text-gray-600">Achieving operational efficiency and stable profitability</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Key Assumptions Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-[#20152E]">
                        Key Assumptions: Driving the Financial Projections
                      </h2>
                      <p className="text-lg text-[#20152E]">
                        Transparency in Assumptions for a Realistic Valuation
                      </p>
                    </div>
                    <p className="mx-auto max-w-3xl text-gray-600">
                      The financial projections presented in this dashboard are based on a set of key assumptions regarding customer acquisition, retention, revenue generation, and operational efficiency. This section outlines the main assumptions underpinning the Worst, Optimal, and Best Case scenarios.
                    </p>
                  </div>

                  {/* Assumptions Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Customer Acquisition */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Users className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Customer Acquisition</h3>
                          <p className="text-sm text-gray-600">
                            The model assumes a specific customer acquisition strategy for each scenario, with varying levels of marketing spend and acquisition efficiency. The initial customer acquisition cost (CAC) is based on the MVP test results, adjusted by the CAC Efficiency metric over time.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Initial CAC</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$7.32</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">CAC Efficiency</span>
                              <span className="text-sm font-medium text-[#4ADE80]">1.5x</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Churn Rates */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingDown className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Churn Rates</h3>
                          <p className="text-sm text-gray-600">
                            The projections incorporate different average monthly churn rates (ACR) for each scenario: Worst Case (15%), Optimal Case (10%), and Best Case (7% initially, decreasing in later years). These rates are applied to the customer base at the end of each quarter.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Worst Case ACR</span>
                              <span className="text-sm font-medium text-red-500">15%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Optimal Case ACR</span>
                              <span className="text-sm font-medium text-yellow-500">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Best Case ACR</span>
                              <span className="text-sm font-medium text-[#4ADE80]">7%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subscription Revenue */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <DollarSign className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Subscription Revenue</h3>
                          <p className="text-sm text-gray-600">
                            Revenue from subscription packages (Eko, Simple, Premium) is calculated based on the projected number of customers in each package, as determined by the Customer Membership Distribution metric. Prices for each package are assumed to remain constant.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Eko Package</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$9.99/mo</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Simple Package</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$39.99/mo</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Premium Package</span>
                              <span className="text-sm font-medium text-[#4ADE80]">$59.99/mo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Warehouse Commission */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Package className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Warehouse Commission Revenue</h3>
                          <p className="text-sm text-gray-600">
                            This revenue stream is based on the projected adoption of integrated 3PL services by different customer segments, as outlined in the Warehouse Usage Segmentation by Business Model section. A 10% commission on transactions processed through partner warehouses is applied.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Commission Rate</span>
                              <span className="text-sm font-medium text-[#4ADE80]">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Adoption Rate</span>
                              <span className="text-sm font-medium text-[#4ADE80]">45-85%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Twizz Shop Commission */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Store className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Twizz Shop Commission Revenue</h3>
                          <p className="text-sm text-gray-600">
                            This revenue stream is based on the projected adoption of the Twizz Shop marketplace by different customer segments, as outlined in the Shop Usage Percentage Segmentation by Business Model section. A 5% commission on all marketplace transactions is applied.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Commission Rate</span>
                              <span className="text-sm font-medium text-[#4ADE80]">5%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Adoption Rate</span>
                              <span className="text-sm font-medium text-[#4ADE80]">35-75%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Operational Costs */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Settings className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Operational Costs</h3>
                          <p className="text-sm text-gray-600">
                            The model incorporates projections for operational expenses (OPEX), including marketing, G&A, and R&D. These are based on internal estimates and industry benchmarks. The Customer Cost Efficiency metric is applied to project improvements in operational efficiency over time.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Marketing</span>
                              <span className="text-sm font-medium text-[#4ADE80]">25-35%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">G&A</span>
                              <span className="text-sm font-medium text-[#4ADE80]">15-20%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">R&D</span>
                              <span className="text-sm font-medium text-[#4ADE80]">20-25%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Discount Rate */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Calculator className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Discount Rate (WACC)</h3>
                          <p className="text-sm text-gray-600">
                            A Weighted Average Cost of Capital (WACC) of 50% is used to discount future cash flows, reflecting the high-risk nature of an early-stage startup.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">WACC</span>
                              <span className="text-sm font-medium text-[#4ADE80]">50%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">CAC Payback Period</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">2.1 months</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Gross Margin</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">79%</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Operating Margin</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">45%</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">R&D % of Revenue</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">20%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
    </div>
  );
};

export default FinancialProjectionsTab; 