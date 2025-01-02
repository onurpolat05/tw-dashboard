import React from "react";
import { Card } from "@/components/ui/card";
import { Users, Target, Briefcase, LineChart } from "lucide-react";

const HRStrategy = () => {
  const teamMetrics = [
    { label: "Founding Team", value: "4 Members" },
    { label: "Technical Team", value: "7 + 2 Members" },
    { label: "Marketing/Sales Team", value: "2 Members" },
    { label: "Customer Success Team", value: "3 Members" },
    { label: "Operations Team", value: "2 Members" },
  ];

  const employeeStats = [
    { label: "Full-Time Employee", value: "16" },
    { label: "Part-Time Employee", value: "1" },
    { label: "Freelancer", value: "2" },
    { label: "Founding Team", value: "4" },
    { label: "Total", value: "23" },
  ];

  const performanceMetrics = [
    "Timely Completion of Hiring Goals: Track planned vs. actual hires made quarterly.",
    "Employee Retention Rate: Monitor turnover and proactively address retention issues.",
    "Successful Onboarding of New Hires: Ensure new hires are well-integrated and productive.",
    "Employee Satisfaction and Engagement: Regularly assess employee morale and job satisfaction.",
    "Training Program Effectiveness: Evaluate impact of training on employee performance.",
    "Performance Management System Usage: Track usage and effectiveness of the system.",
    "Agile/Scrum Adoption and Impact: Assess implementation and team performance improvements.",
    "HR Process Efficiency: Streamline and improve HR processes for efficiency.",
    "Diversity and Inclusion Metrics: Monitor diversity within the company.",
    "Compliance with Labor Laws: Ensure adherence to all relevant regulations.",
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* HR Structure Card */}
        <Card className="p-6">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            HR Structure
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Team Growth</p>
                <p className="text-2xl font-bold text-purple-600">%400</p>
              </div>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <div className="space-y-1">
                <p className="text-sm text-gray-600"># of Departments</p>
                <p className="text-2xl font-bold text-indigo-600">4</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Employee Stats Card */}
        <Card className="p-6">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            Employee Statistics
          </h2>
          <div className="space-y-4">
            {teamMetrics.map((metric, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-sm font-medium text-gray-700">
                  {metric.label}
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-3 sm:grid-cols-3 lg:grid-cols-5">
            {employeeStats.map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg border border-gray-100"
              >
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Executive Summary and Performance Evaluation side by side */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Executive Summary */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Executive Summary
          </h2>
          <div className="mt-6 space-y-6">
            <div className="flex items-start space-x-3">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Strategic Talent Acquisition
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  The plan focuses on filling 9 new full-time positions by the
                  end of 2025, attracting skilled individuals for Technical,
                  Customer Success, Marketing/Sales, and Operations teams.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Employee Development
                </h3>
                <p className="mt-1 text-base text-gray-600">
                  TradeWizz will invest in professional growth through training
                  programs, mentorship opportunities, and performance reviews to
                  enhance skills.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Agile Adoption
                </h3>
                <p className="mt-1 text-base text-gray-600">
                  Implementation of Agile and Scrum methodologies within the
                  Technical Team to promote iterative development and
                  collaboration.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Performance Evaluation */}
        <Card className="p-6">
          <div className="flex items-center mb-6 space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <LineChart className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Performance Evaluation
            </h2>
          </div>
          <div className="space-y-3">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-2 w-2 h-2 bg-green-500 rounded-full" />
                <p className="text-sm text-gray-600">{metric}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HRStrategy;
