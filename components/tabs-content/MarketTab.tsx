import React from "react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Target,
  TrendingUp,
  Puzzle,
  BarChart,
  Store,
  Layers,
  Settings,
  PieChart,
  Scale,
  Trophy,
  DollarSign,
  Brain,
  Rocket,
  Network,
  Building2,
  Blocks,
  Calendar,
  Users,
  Megaphone,
} from "lucide-react";

const MarketTab = () => {
  return (
    <div className="space-y-6">
      {/* TAM Section */}
      <Card className="p-6">
        {/* Header Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[#20152E]">
              Total Addressable Market (TAM): $1 Trillion
            </h2>
            <p className="text-lg text-[#20152E]">
              Capturing a Share of the Global E-commerce Market
            </p>
            <p className="text-gray-600">
              The Total Addressable Market (TAM) for TradeWizz represents the
              entire global e-commerce market, reflecting the vast opportunity
              for e-commerce enablement solutions.
            </p>
          </div>

          {/* Market Size Metrics */}
          <div className="grid grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-violet-50 to-white rounded-lg border border-violet-100">
              <p className="text-sm font-medium text-violet-600">TAM</p>
              <p className="text-2xl font-bold text-[#20152E]">$1T</p>
              <p className="text-sm text-gray-600">Global E-commerce</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-fuchsia-50 to-white rounded-lg border border-fuchsia-100">
              <p className="text-sm font-medium text-fuchsia-600">SAM</p>
              <p className="text-2xl font-bold text-[#20152E]">$600B</p>
              <p className="text-sm text-gray-600">Serviceable Market</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100">
              <p className="text-sm font-medium text-purple-600">SOM</p>
              <p className="text-2xl font-bold text-[#20152E]">$6B</p>
              <p className="text-sm text-gray-600">Obtainable Market</p>
            </div>
          </div>

          {/* Market Opportunity Data Points */}
          <div className="grid grid-cols-2 gap-6">
            {/* Data Point 1 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <LineChart className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Market Growth
                  </h3>
                  <p className="text-sm text-gray-600">
                    Global e-commerce sales are projected to reach $6.38
                    trillion by 2024, highlighting the immense scale of the
                    market.
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
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Market Position
                  </h3>
                  <p className="text-sm text-gray-600">
                    TradeWizz's AI-powered platform is uniquely positioned to
                    serve a wide range of e-commerce businesses, from individual
                    sellers to large enterprises, operating across various
                    platforms and marketplaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 3 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Puzzle className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Solution Impact
                  </h3>
                  <p className="text-sm text-gray-600">
                    With a focus on simplifying complex operations, such as
                    product research, inventory management, supplier sourcing,
                    and marketing, TradeWizz addresses key pain points that
                    limit the growth of online businesses, unlocking significant
                    revenue potential.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 4 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Market Projection
                  </h3>
                  <p className="text-sm text-gray-600">
                    The e-commerce SaaS market, a subset of the total e-commerce
                    market, is projected to reach $50 billion by 2030, further
                    emphasizing the demand for comprehensive e-commerce
                    management solutions like TradeWizz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* SAM Section */}
      <Card className="p-6 bg-[#F8F8F8]">
        {/* Header Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[#20152E]">
              Serviceable Available Market (SAM): $600 Billion
            </h2>
            <p className="text-lg text-[#20152E]">
              Focusing on the Reachable Segment of the Global E-commerce Market
            </p>
            <p className="text-gray-600">
              The Serviceable Available Market (SAM) represents the portion of
              the Total Addressable Market (TAM) that TradeWizz can
              realistically serve with its current product offerings and
              geographic focus.
            </p>
          </div>

          {/* SAM Data Points */}
          <div className="grid grid-cols-2 gap-6">
            {/* Data Point 1 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <BarChart className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Market Share
                  </h3>
                  <p className="text-sm text-gray-600">
                    TradeWizz's SAM is estimated at $600 billion, representing a
                    significant portion of the global e-commerce market.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 2 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Store className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Platform Focus
                  </h3>
                  <p className="text-sm text-gray-600">
                    This SAM focuses on e-commerce sellers operating on
                    platforms like Amazon, with a particular emphasis on those
                    engaged in online arbitrage, wholesale, and those looking to
                    leverage our 3PL and Twizz Shop marketplace.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 3 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Layers className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Business Models
                  </h3>
                  <p className="text-sm text-gray-600">
                    The SAM considers TradeWizz's current capabilities in
                    serving various business models including private label
                    dropshipping, online/retail arbitrage, and wholesale, with
                    planned expansion into broader e-commerce segments.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 4 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Settings className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Core Capabilities
                  </h3>
                  <p className="text-sm text-gray-600">
                    This reachable market is defined by businesses seeking to
                    streamline operations, optimize inventory, automate pricing,
                    and enhance sourcing, all core strengths of the TradeWizz
                    platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* SOM Section */}
      <Card className="p-6 bg-[#F8F8F8]">
        {/* Header Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[#20152E]">
              Serviceable Obtainable Market (SOM): $6 Billion
            </h2>
            <p className="text-lg text-[#20152E]">
              Realistically Capturing a Portion of the E-commerce SaaS Market
            </p>
            <p className="text-gray-600">
              The Serviceable Obtainable Market (SOM) represents the portion of
              the SAM that TradeWizz can realistically capture within the next
              3-5 years, considering its current resources, competitive
              landscape, and go-to-market strategy.
            </p>
          </div>

          {/* SOM Data Points */}
          <div className="grid grid-cols-2 gap-6">
            {/* Data Point 1 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <PieChart className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Market Segment
                  </h3>
                  <p className="text-sm text-gray-600">
                    TradeWizz's SOM is estimated at $6 billion, representing a
                    focused segment of the e-commerce SaaS market.
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
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Market Penetration
                  </h3>
                  <p className="text-sm text-gray-600">
                    This projection is based on capturing 1% of the SAM,
                    aligning with TradeWizz's phased approach to market
                    penetration, starting with Amazon arbitrage sellers and
                    expanding to other business models.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 3 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Scale className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Conservative Estimate
                  </h3>
                  <p className="text-sm text-gray-600">
                    The SOM reflects a conservative estimate, accounting for
                    competition, market adoption rates, and the time required to
                    scale operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 4 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Trophy className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Market Position
                  </h3>
                  <p className="text-sm text-gray-600">
                    Achieving this SOM will position TradeWizz as a significant
                    player in the e-commerce SaaS space, demonstrating strong
                    traction and revenue generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* E-commerce SaaS Market Size Section */}
      <Card className="p-6 bg-[#F8F8F8]">
        {/* Header Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[#20152E]">
              E-commerce SaaS Market Size: High Growth and Expanding Opportunity
            </h2>
            <p className="text-lg text-[#20152E]">
              Demonstrating the Rapidly Growing Market for TradeWizz's Solution
            </p>
            <p className="text-gray-600">
              The E-commerce SaaS market is experiencing substantial growth,
              driven by the increasing adoption of digital solutions by
              businesses of all sizes. This section highlights the current
              market size, growth projections, and key trends shaping the
              industry.
            </p>
          </div>

          {/* Market Size Data Points */}
          <div className="grid grid-cols-2 gap-6">
            {/* Data Point 1 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <DollarSign className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Current Market Value
                  </h3>
                  <p className="text-sm text-gray-600">
                    The global E-commerce SaaS market was valued at
                    approximately $9.4 billion in 2024.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 2 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Growth Projection
                  </h3>
                  <p className="text-sm text-gray-600">
                    The market is projected to reach $29.82 billion by 2032,
                    exhibiting a robust CAGR of 15.52%.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 3 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Brain className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    AI Integration
                  </h3>
                  <p className="text-sm text-gray-600">
                    The market is expected to cross $50 billion by 2030, with an
                    increasing need for AI integrations in the sector.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 4 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Rocket className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Growth Drivers
                  </h3>
                  <p className="text-sm text-gray-600">
                    Key drivers of this growth include the rising demand for
                    AI-driven personalization, omnichannel retailing, and the
                    need for scalable, cost-effective e-commerce solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Market Growth Rate Section */}
      <Card className="p-6 bg-[#F8F8F8]">
        {/* Header Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[#20152E]">
              Market Growth Rate: Sustained Expansion in E-commerce SaaS
            </h2>
            <p className="text-lg text-[#20152E]">
              Highlighting the Strong Momentum of E-commerce and SaaS Adoption
            </p>
            <p className="text-gray-600">
              The E-commerce SaaS market is experiencing a period of rapid
              growth, fueled by increasing digitalization and the adoption of
              cloud-based solutions. This section highlights the impressive
              growth rates driving the market forward.
            </p>
          </div>

          {/* Growth Rate Data Points */}
          <div className="grid grid-cols-2 gap-6">
            {/* Data Point 1 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    CAGR Growth
                  </h3>
                  <p className="text-sm text-gray-600">
                    The global E-commerce SaaS market is projected to maintain a
                    robust Compound Annual Growth Rate (CAGR) of 15.52% from
                    2024 to 2032.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 2 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <LineChart className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Market Expansion
                  </h3>
                  <p className="text-sm text-gray-600">
                    This growth trajectory indicates a market size expansion
                    from $9.4 billion in 2024 to $29.82 billion by 2032.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 3 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <BarChart className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Optimistic Outlook
                  </h3>
                  <p className="text-sm text-gray-600">
                    In a more optimistic view by other resources, the market
                    could reach $50 billion by 2030.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 4 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Brain className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    AI Adoption Impact
                  </h3>
                  <p className="text-sm text-gray-600">
                    Specifically, the adoption of AI-powered solutions within
                    e-commerce is contributing to this growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Trends Section */}
      <Card className="p-6 bg-[#F8F8F8]">
        {/* Header Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[#20152E]">
              Key Trends: Shaping the Future of E-commerce SaaS
            </h2>
            <p className="text-lg text-[#20152E]">
              Highlighting the Major Trends Driving Growth and Innovation in the
              Market
            </p>
            <p className="text-gray-600">
              The e-commerce SaaS market is constantly evolving, driven by
              emerging technologies and shifting consumer behavior. This section
              outlines key trends that present both opportunities and challenges
              for businesses in this sector.
            </p>
          </div>

          {/* Trends Data Points */}
          <div className="grid grid-cols-2 gap-6">
            {/* Trend 1 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Brain className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    AI-Driven Personalization
                  </h3>
                  <p className="text-sm text-gray-600">
                    87% of current AI adopters reporting its use for enhancing
                    customer experience
                  </p>
                </div>
              </div>
            </div>

            {/* Trend 2 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Network className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Omnichannel Integration
                  </h3>
                  <p className="text-sm text-gray-600">
                    67% of consumers expect consistent experience across
                    touchpoints
                  </p>
                </div>
              </div>
            </div>

            {/* Trend 3 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Building2 className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Rise of Vertical SaaS
                  </h3>
                  <p className="text-sm text-gray-600">
                    Market projected to reach $157.4 billion by 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Trend 4 */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Blocks className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#20152E]">
                    Low-Code/No-Code Development
                  </h3>
                  <p className="text-sm text-gray-600">
                    Market expected to reach $32 billion by 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MarketTab;
