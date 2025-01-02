import React from "react";
import { Card } from "@/components/ui/card";
import {
  Users,
  Target,
  GraduationCap,
  GitMerge,
  LineChart,
  Users2,
  Briefcase,
  Building2,
} from "lucide-react";
import HRStructureChart from "./HRStructureChart";

const HRStrategy = () => {
  const teamMetrics = [
    { label: "Founding Team", value: "4 Members" },
    { label: "Technical Team", value: "7 + 2 Members" },
    { label: "Marketing/Sales Team", value: "2 Members" },
    { label: "Customer Success Team", value: "3 Members" },
    { label: "Operations Team", value: "2 Members" },
  ];

  const employeeStats = [
    { label: "Full-Time Employee", value: "16", icon: Users },
    { label: "Part-Time Employee", value: "1", icon: Users2 },
    { label: "Freelancer", value: "2", icon: Briefcase },
    { label: "Founding Team", value: "4", icon: Target },
    { label: "Total", value: "23", icon: Building2 },
  ];

  const growthMetrics = [
    { label: "Team Growth", value: "400", unit: "%", color: "purple" },
    { label: "# of Departments", value: "4", unit: "", color: "indigo" },
  ];

  const performanceMetrics = [
    "Track planned vs. actual hires made quarterly.",
    "Monitor turnover and proactively address retention issues.",
    "Ensure new hires are well-integrated and productive.",
    "Regularly assess employee morale and job satisfaction.",
    "Evaluate impact of training on employee performance.",
    "Track usage and effectiveness of the system.",
    "Assess implementation and team performance improvements.",
    "Streamline and improve HR processes for efficiency.",
    "Monitor diversity within the company.",
    "Ensure adherence to all relevant regulations.",
  ];

  return (
    <div className="space-y-8">
      {/* HR Structure Card - Full Width */}
      <Card className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="flex flex-col mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              HR Structure
            </h2>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Our unique organizational structure and core team composition
          </p>
        </div>
        <HRStructureChart />
      </Card>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Employee Stats Card */}
        <Card className="p-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Users2 className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Employee Statistics
            </h2>
          </div>

          {/* Growth Metrics */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {growthMetrics.map((metric, index) => (
              <div
                key={index}
                className={`p-4 bg-gradient-to-br from-${metric.color}-50 to-white rounded-xl border-2 border-${metric.color}-200 shadow-sm hover:shadow-md transition-all duration-200 hover:bg-${metric.color}-50/50 group`}
              >
                <p
                  className={`text-sm text-${metric.color}-900 font-medium mb-1 group-hover:text-${metric.color}-800`}
                >
                  {metric.label}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-3xl font-bold text-${metric.color}-700 group-hover:text-${metric.color}-800 transition-colors`}
                  >
                    {metric.value}
                  </span>
                  {metric.unit && (
                    <span
                      className={`text-lg font-semibold text-${metric.color}-600 group-hover:text-${metric.color}-700 transition-colors`}
                    >
                      {metric.unit}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 mb-8">
            {teamMetrics.map((metric, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-purple-200 group"
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                  {metric.label}
                </span>
                <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {employeeStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-purple-200 group"
                >
                  <div className="flex flex-col h-full">
                    <div className="p-2 bg-purple-50 rounded-lg w-fit group-hover:bg-purple-100 transition-colors">
                      <Icon className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                    </div>
                    <div className="flex flex-col justify-between flex-1 mt-3">
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 mt-2">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Executive Summary */}
        <Card className="p-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Executive Summary
            </h2>
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-purple-200 group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                  <Target className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-700">
                    Strategic Talent Acquisition
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    The plan focuses on filling 9 new full-time positions by the
                    end of 2025 across Technical, Customer Success,
                    Marketing/Sales, and Operations teams. We'll implement
                    competitive compensation packages, flexible work
                    arrangements, and structured interview processes to attract
                    and retain top talent while ensuring team diversity and
                    cultural fit.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-purple-200 group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                  <GraduationCap className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-700">
                    Employee Development
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    TradeWizz will establish a comprehensive professional
                    development program featuring regular training sessions,
                    one-on-one mentorship opportunities, and quarterly
                    performance reviews. Each employee will receive a
                    personalized growth plan aligned with their career
                    aspirations and company objectives through structured
                    development paths.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-purple-200 group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                  <GitMerge className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-700">
                    Agile Adoption
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    We'll implement Agile and Scrum methodologies within the
                    company through daily stand-ups, bi-weekly sprint planning,
                    and regular retrospectives. The focus will be on fostering
                    cross-functional collaboration and continuous improvement
                    practices through dedicated team workshops and knowledge
                    sharing sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Performance Evaluation */}
      <Card className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-purple-50 rounded-lg">
            <LineChart className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Performance Evaluation
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {performanceMetrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-purple-200 group"
            >
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-purple-500 rounded-full group-hover:bg-purple-600" />
              <p className="text-sm text-gray-600 group-hover:text-gray-700">
                {metric}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HRStrategy;
