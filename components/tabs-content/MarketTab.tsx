import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
    <div className="space-y-8 min-h-screen">
      {/* TAM Section */}
      <Card className="bg-gradient-to-br from-gray-50 to-white">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-semibold text-[#20152E]">
            Total Addressable Market (TAM): $1 Trillion
          </CardTitle>
          <p className="text-lg text-[#20152E]">
            Capturing a Share of the Global E-commerce Market
          </p>
          <p className="text-gray-600">
            The Total Addressable Market (TAM) for TradeWizz represents the
            entire global e-commerce market, reflecting the vast opportunity
            for e-commerce enablement solutions.
          </p>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Market Size Metrics */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-4 bg-gradient-to-br from-violet-50 to-white border-violet-100 transition-all hover:shadow-md">
              <p className="text-sm font-medium text-violet-600">TAM</p>
              <p className="text-2xl font-bold text-[#20152E]">$1T</p>
              <p className="text-sm text-gray-600">Global E-commerce</p>
            </Card>
            <Card className="p-4 bg-gradient-to-br from-fuchsia-50 to-white border-fuchsia-100 transition-all hover:shadow-md">
              <p className="text-sm font-medium text-fuchsia-600">SAM</p>
              <p className="text-2xl font-bold text-[#20152E]">$600B</p>
              <p className="text-sm text-gray-600">Serviceable Market</p>
            </Card>
            <Card className="p-4 bg-gradient-to-br from-purple-50 to-white border-purple-100 transition-all hover:shadow-md">
              <p className="text-sm font-medium text-purple-600">SOM</p>
              <p className="text-2xl font-bold text-[#20152E]">$6B</p>
              <p className="text-sm text-gray-600">Obtainable Market</p>
            </Card>
          </div>

          {/* Market Opportunity Data Points */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Data Point 1 */}
            <Card className="p-6 transition-all hover:shadow-md">
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
            </Card>

            {/* Data Point 2 */}
            <Card className="p-6 transition-all hover:shadow-md">
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
            </Card>

            {/* Data Point 3 */}
            <Card className="p-6 transition-all hover:shadow-md">
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
            </Card>

            {/* Data Point 4 */}
            <Card className="p-6 transition-all hover:shadow-md">
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
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* SAM Section */}
      <Card className="bg-gradient-to-br from-gray-50 to-white">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-semibold text-[#20152E]">
            Serviceable Available Market (SAM): $600 Billion
          </CardTitle>
          <p className="text-lg text-[#20152E]">
            Focusing on the Reachable Segment of the Global E-commerce Market
          </p>
          <p className="text-gray-600">
            The Serviceable Available Market (SAM) represents the portion of
            the Total Addressable Market (TAM) that TradeWizz can
            realistically serve with its current product offerings and
            geographic focus.
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Data Point 1 */}
            <Card className="p-6 transition-all hover:shadow-md">
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
            </Card>

            {/* Data Point 2 */}
            <Card className="p-6 transition-all hover:shadow-md">
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
            </Card>

            {/* Data Point 3 */}
            <Card className="p-6 transition-all hover:shadow-md">
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
            </Card>

            {/* Data Point 4 */}
            <Card className="p-6 transition-all hover:shadow-md">
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
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* SOM Section */}
      <Card className="bg-gradient-to-br from-gray-50 to-white">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-semibold text-[#20152E]">
            Serviceable Obtainable Market (SOM): $6 Billion
          </CardTitle>
          <p className="text-lg text-[#20152E]">
            Realistically Capturing a Portion of the E-commerce SaaS Market
          </p>
          <p className="text-gray-600">
            The Serviceable Obtainable Market (SOM) represents the portion of
            the SAM that TradeWizz can realistically capture within the next
            3-5 years, considering its current resources, competitive
            landscape, and go-to-market strategy.
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Data Point 1 */}
            <Card className="p-6 transition-all hover:shadow-md">
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
            </Card>

            {/* Data Point 2 */}
            <Card className="p-6 transition-all hover:shadow-md">
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
            </Card>

            {/* Data Point 3 */}
            <Card className="p-6 transition-all hover:shadow-md">
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
            </Card>

            {/* Data Point 4 */}
            <Card className="p-6 transition-all hover:shadow-md">
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
            </Card>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default MarketTab;
