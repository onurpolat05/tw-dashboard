import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, Users, Megaphone, Trophy, ArrowUpRight, AlertTriangle, Sparkles, Target, Brain, BarChart,TrendingUp, DollarSign,Scale } from 'lucide-react';

const TractionTab = () => {
  return (
    <div className="space-y-6">
  {/* Test Duration Section */}
  <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-[#20152E]">
                      IV. Traction & Validation (MVP Test Results)
                    </h2>
                    <p className="text-lg text-[#20152E]">
                      Test Duration: One Year of Focused Market Validation
                    </p>
                    <p className="text-gray-600">
                      TradeWizz's initial market validation was conducted through a comprehensive one-year Minimum Viable Product (MVP) test, providing valuable data and insights into product-market fit and customer behavior.
                    </p>
                  </div>

                  {/* Test Duration Data Points */}
                  <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {/* Data Point 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Calendar className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Test Period</h3>
                          <p className="text-sm text-gray-600">
                            February 27, 2023 - February 26, 2024 (One Year)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Target className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Market Focus</h3>
                          <p className="text-sm text-gray-600">
                            Limited release targeting specific e-commerce sellers
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Users className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">User Base</h3>
                          <p className="text-sm text-gray-600">
                            41 paying users acquired for metric analysis
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Data Point 4 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Megaphone className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Marketing Campaign</h3>
                          <p className="text-sm text-gray-600">
                            6-month marketing campaign, $300 budget, 82 days runtime
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Total Customers Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section with Main Metric */}
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="flex justify-center items-center space-x-3">
                        <Users className="w-10 h-10 text-[#4ADE80]" />
                        <h2 className="text-4xl font-bold text-[#4ADE80]">41</h2>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#20152E]">Total Customers</h3>
                      <p className="text-lg text-[#20152E]">
                        Early Adoption Demonstrated During MVP Test Phase
                      </p>
                    </div>
                    <p className="mx-auto max-w-3xl text-gray-600">
                      During the one-year MVP test phase, TradeWizz successfully acquired 41 paying customers, demonstrating initial traction and validating early interest in the platform's core value proposition.
                    </p>
                  </div>

                  {/* Customer Insights Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Insight Card 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Trophy className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Pre-seed Milestone</h3>
                          <p className="text-sm text-gray-600">
                            41 paying customers represent a significant milestone for the pre-seed stage
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Megaphone className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Marketing Success</h3>
                          <p className="text-sm text-gray-600">
                            Users acquired through 82-day marketing campaign with $300 budget
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Brain className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">User Insights</h3>
                          <p className="text-sm text-gray-600">
                            Early adoption provides valuable insights into user behavior and feature usage
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-6 lg:grid-cols-4">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Average Revenue Per User</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$265.70</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Customer Acquisition Cost</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$7.32</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Trial to Paid Conversion</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">19.51%</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Monthly Active Users</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">37</p>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Timeline */}
                  <div className="p-6 bg-white rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Marketing Campaign Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
                      <div className="pl-8 space-y-6">
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Campaign Launch</h5>
                          <p className="text-sm text-gray-600">Initial budget allocation and channel setup</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]/60"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Mid-Campaign Optimization</h5>
                          <p className="text-sm text-gray-600">Channel performance analysis and budget reallocation</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Campaign Completion</h5>
                          <p className="text-sm text-gray-600">Final results: 41 customers at $7.32 CAC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Trial to Paid Conversion Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section with Main Metric */}
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="flex justify-center items-center space-x-3">
                        <ArrowUpRight className="w-10 h-10 text-[#4ADE80]" />
                        <h2 className="text-4xl font-bold text-[#4ADE80]">19.51%</h2>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#20152E]">Trial to Paid Conversion</h3>
                      <p className="text-lg text-[#20152E]">
                        Validating User Interest and Product-Market Fit
                      </p>
                    </div>
                    <p className="mx-auto max-w-3xl text-gray-600">
                      The trial-to-paid conversion rate measures the percentage of free trial users who converted into paying customers during the MVP test phase. This metric demonstrates the effectiveness of the product in meeting user needs and driving conversions.
                    </p>
                  </div>

                  {/* Conversion Insights Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Insight Card 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <BarChart className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Conversion Achievement</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz achieved a 19.51% trial-to-paid conversion rate during the one-year MVP test.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Users className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">User Value</h3>
                          <p className="text-sm text-gray-600">
                            Nearly one in five users who tried the platform's free trial found sufficient value to become paying customers.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Performance Indicator</h3>
                          <p className="text-sm text-gray-600">
                            The conversion rate, coupled with the low CAC, suggests a positive initial response to the product's core features.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-6 lg:grid-cols-4">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Average Days to Convert</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">97.88</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Trial Users</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">26</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Converted Users</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">8</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Avg Trial Usage</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">1.88</p>
                      </div>
                    </div>
                  </div>

                  {/* Conversion Timeline */}
                  <div className="p-6 bg-white rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Conversion Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
                      <div className="pl-8 space-y-6">
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Trial Start</h5>
                          <p className="text-sm text-gray-600">User signs up for free trial</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]/60"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Feature Exploration</h5>
                          <p className="text-sm text-gray-600">Average 1.88 features used during trial</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Conversion Point</h5>
                          <p className="text-sm text-gray-600">Average 97.88 days to conversion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Customer Acquisition Cost (CAC) Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section with Main Metric */}
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="flex justify-center items-center space-x-3">
                        <DollarSign className="w-10 h-10 text-[#4ADE80]" />
                        <h2 className="text-4xl font-bold text-[#4ADE80]">$7.32</h2>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#20152E]">Customer Acquisition Cost (CAC)</h3>
                      <p className="text-lg text-[#20152E]">
                        Demonstrating Efficient Marketing Spend During the MVP Test
                      </p>
                    </div>
                    <p className="mx-auto max-w-3xl text-gray-600">
                      Customer Acquisition Cost (CAC) represents the average cost incurred to acquire a single paying customer. During the MVP test phase, TradeWizz achieved a remarkably low CAC, indicating efficient marketing strategies and a strong initial product appeal.
                    </p>
                  </div>

                  {/* CAC Insights Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Insight Card 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Industry Performance</h3>
                          <p className="text-sm text-gray-600">
                            TradeWizz's CAC during the MVP test was $7.32, significantly lower than industry averages
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Megaphone className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Marketing Efficiency</h3>
                          <p className="text-sm text-gray-600">
                            Limited marketing budget of $300 over 82-day campaign, resulting in 41 paying customers
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Scale className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">LTV:CAC Ratio</h3>
                          <p className="text-sm text-gray-600">
                            Low CAC coupled with strong LTV:CAC ratio demonstrates effectiveness of targeted marketing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-6 lg:grid-cols-4">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Daily CAC</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$3.66</p>
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
                        <p className="text-sm text-gray-600">Campaign Duration</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">82 days</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Cost per Lead</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$1.43</p>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Timeline */}
                  <div className="p-6 bg-white rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Marketing Campaign Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
                      <div className="pl-8 space-y-6">
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Campaign Launch</h5>
                          <p className="text-sm text-gray-600">Initial budget allocation and channel setup</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]/60"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Mid-Campaign Optimization</h5>
                          <p className="text-sm text-gray-600">Channel performance analysis and budget reallocation</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Campaign Completion</h5>
                          <p className="text-sm text-gray-600">Final results: 41 customers at $7.32 CAC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Lifetime Value (LTV) Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section with Main Metric */}
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="flex justify-center items-center space-x-3">
                        <DollarSign className="w-10 h-10 text-[#4ADE80]" />
                        <h2 className="text-4xl font-bold text-[#4ADE80]">$22.59</h2>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#20152E]">Lifetime Value (LTV)</h3>
                      <p className="text-lg text-[#20152E]">
                        Assessing the Average Value Generated per Customer During the MVP Test
                      </p>
                    </div>
                    <p className="mx-auto max-w-3xl text-gray-600">
                      Customer Lifetime Value (LTV) represents the total revenue generated by a customer over their entire relationship with TradeWizz. During the MVP test phase, we achieved an average LTV of $22.59, demonstrating strong monetization potential and customer retention.
                    </p>
                  </div>

                  {/* LTV Insights Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Insight Card 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Revenue Growth</h3>
                          <p className="text-sm text-gray-600">
                            Average monthly revenue per customer increased by 27% over the test period
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Users className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Customer Retention</h3>
                          <p className="text-sm text-gray-600">
                            87% of customers remained active after their first month of paid usage
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Scale className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">LTV:CAC Ratio</h3>
                          <p className="text-sm text-gray-600">
                            Strong LTV:CAC ratio of 3.08:1 indicates healthy unit economics
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-6 lg:grid-cols-4">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Average Monthly Revenue</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$7.53</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Customer Lifespan</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">3 months</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Churn Rate</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">13%</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Expansion Revenue</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">27%</p>
                      </div>
                    </div>
                  </div>

                  {/* Value Timeline */}
                  <div className="p-6 bg-white rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Customer Value Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#4ADE80]/20"></div>
                      <div className="pl-8 space-y-6">
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Initial Purchase</h5>
                          <p className="text-sm text-gray-600">Average first month value: $5.92</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]/60"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Feature Adoption</h5>
                          <p className="text-sm text-gray-600">Value increases with feature usage: $7.53/month</p>
                        </div>
                        <div className="relative">
                          <div className="absolute left-[-2rem] top-1 w-4 h-4 rounded-full bg-[#4ADE80]"></div>
                          <h5 className="text-sm font-semibold text-[#20152E]">Expansion Revenue</h5>
                          <p className="text-sm text-gray-600">27% increase through upgrades and add-ons</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LTV Components Breakdown */}
                  <div className="p-6 bg-white rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">LTV Components Analysis</h4>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <h5 className="text-sm font-semibold text-[#20152E]">Revenue Streams</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Base Subscription</span>
                            <span className="text-sm font-medium text-[#4ADE80]">65%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Feature Add-ons</span>
                            <span className="text-sm font-medium text-[#4ADE80]">23%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Usage-based Fees</span>
                            <span className="text-sm font-medium text-[#4ADE80]">12%</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h5 className="text-sm font-semibold text-[#20152E]">Customer Behavior</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Feature Adoption Rate</span>
                            <span className="text-sm font-medium text-[#4ADE80]">78%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Upgrade Rate</span>
                            <span className="text-sm font-medium text-[#4ADE80]">31%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Active Usage Days</span>
                            <span className="text-sm font-medium text-[#4ADE80]">19/month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* LTV:CAC Ratio Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section with Main Metric */}
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="flex justify-center items-center space-x-3">
                        <Scale className="w-10 h-10 text-[#4ADE80]" />
                        <h2 className="text-4xl font-bold text-[#4ADE80]">4.73x</h2>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#20152E]">LTV:CAC Ratio</h3>
                      <p className="text-lg text-[#20152E]">
                        Demonstrating a Positive Return on Customer Acquisition Investment
                      </p>
                    </div>
                    <p className="mx-auto max-w-3xl text-gray-600">
                      The LTV:CAC ratio of 4.73x indicates that for every dollar spent on customer acquisition, TradeWizz generates $4.73 in customer lifetime value, demonstrating strong unit economics and efficient marketing spend.
                    </p>
                  </div>

                  {/* LTV:CAC Insights Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Insight Card 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Healthy Economics</h3>
                          <p className="text-sm text-gray-600">
                            Ratio exceeds industry benchmark of 3:1, indicating strong business model viability
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <ArrowUpRight className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Growth Potential</h3>
                          <p className="text-sm text-gray-600">
                            Strong ratio suggests room for increased marketing investment
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Users className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Customer Value</h3>
                          <p className="text-sm text-gray-600">
                            High ratio reflects strong customer retention and monetization
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insight Card 4 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <DollarSign className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">ROI Performance</h3>
                          <p className="text-sm text-gray-600">
                            373% return on customer acquisition investment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-6 lg:grid-cols-4">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Average LTV</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$22.59</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Average CAC</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">$7.32</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Payback Period</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">2.1 months</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Margin Contribution</p>
                        <p className="text-2xl font-bold text-[#4ADE80]">79%</p>
                      </div>
                    </div>
                  </div>

                  {/* Performance Analysis */}
                  <div className="p-6 bg-white rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Unit Economics Analysis</h4>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <h5 className="text-sm font-semibold text-[#20152E]">Revenue Components</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Initial Revenue</span>
                            <span className="text-sm font-medium text-[#4ADE80]">$5.92</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Monthly Growth</span>
                            <span className="text-sm font-medium text-[#4ADE80]">27%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Expansion Revenue</span>
                            <span className="text-sm font-medium text-[#4ADE80]">$1.61/mo</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h5 className="text-sm font-semibold text-[#20152E]">Cost Structure</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Marketing Cost</span>
                            <span className="text-sm font-medium text-[#4ADE80]">$3.66</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Sales Cost</span>
                            <span className="text-sm font-medium text-[#4ADE80]">$2.23</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Onboarding Cost</span>
                            <span className="text-sm font-medium text-[#4ADE80]">$1.43</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Key Learnings Section */}
              <Card className="p-6 bg-[#F8F8F8]">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-[#20152E]">
                        Key Learnings: Actionable Insights from the MVP Test
                      </h2>
                      <p className="text-lg text-[#20152E]">
                        Leveraging Data to Refine Product and Strategy for Future Growth
                      </p>
                    </div>
                    <p className="mx-auto max-w-3xl text-gray-600">
                      The one-year MVP test phase provided valuable insights into user behavior, product-market fit, and the effectiveness of early marketing efforts. These learnings are crucial for shaping TradeWizz's future development and go-to-market strategy.
                    </p>
                  </div>

                  {/* Learning Cards Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Learning Card 1 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Users className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Strong Initial Interest</h3>
                          <p className="text-sm text-gray-600">
                            Achieved 41 paying customers with a 19.51% trial-to-paid conversion rate, indicating strong value proposition resonance with target market.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Learning Card 2 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <DollarSign className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Efficient Customer Acquisition</h3>
                          <p className="text-sm text-gray-600">
                            Achieved remarkably low CAC of $7.32 through targeted marketing strategies and efficient channel optimization.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Learning Card 3 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <AlertTriangle className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">External Factors Impact</h3>
                          <p className="text-sm text-gray-600">
                            Identified need for platform diversification due to impact of Amazon account bans on customer churn rate.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Learning Card 4 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Scale className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">LTV:CAC Validation</h3>
                          <p className="text-sm text-gray-600">
                            Achieved 4.73x LTV:CAC ratio, validating business model viability and establishing foundation for future growth.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Learning Card 5 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Sparkles className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">High Engagement Features</h3>
                          <p className="text-sm text-gray-600">
                            AI-driven product research, automated pricing, and multi-channel inventory sync emerged as most valued features.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Learning Card 6 */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                          <Target className="w-8 h-8 text-[#4ADE80]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#20152E]">Refined Target Audience</h3>
                          <p className="text-sm text-gray-600">
                            Gained deeper understanding of user needs and preferences, informing future product development priorities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Analysis */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Product Impact */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Product Impact</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Feature Usage Rate</span>
                          <span className="text-sm font-medium text-[#4ADE80]">78%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">User Satisfaction</span>
                          <span className="text-sm font-medium text-[#4ADE80]">4.2/5.0</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Feature Requests Implemented</span>
                          <span className="text-sm font-medium text-[#4ADE80]">73%</span>
                        </div>
                      </div>
                    </div>

                    {/* Market Impact */}
                    <div className="p-6 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-[#20152E] mb-4">Market Impact</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Market Penetration</span>
                          <span className="text-sm font-medium text-[#4ADE80]">0.02%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Brand Awareness</span>
                          <span className="text-sm font-medium text-[#4ADE80]">12%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Competitor Analysis Score</span>
                          <span className="text-sm font-medium text-[#4ADE80]">8.4/10</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Implications */}
                  <div className="p-6 bg-white rounded-lg border border-gray-100">
                    <h4 className="text-lg font-semibold text-[#20152E] mb-4">Strategic Implications</h4>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-[#20152E]">Short-term Focus</h5>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Platform diversification</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Feature optimization</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Churn reduction</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-[#20152E]">Mid-term Goals</h5>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Market expansion</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Product scaling</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Team growth</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-[#20152E]">Long-term Vision</h5>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Market leadership</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Global expansion</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
                            <span className="text-sm text-gray-600">Platform ecosystem</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
    </div>
  );
};

export default TractionTab; 