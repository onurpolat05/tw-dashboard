import React from "react";
import { Card } from "@/components/ui/card";
import ROIProjectionsChart from "@/components/charts/ROIProjectionsChart";
import ROIMetricCards from "@/components/metrics/ROIMetricCards";
import RunwayAnalysisChart from "@/components/charts/RunwayAnalysisChart";
import IRRSensitivityContainer from "@/components/charts/IRRSensitivityContainer";
import ImpactAnalysisChart from "@/components/charts/ImpactAnalysisChart";
import CumulativeCashFlowChart from "@/components/charts/CumulativeCashFlowChart";

const ValuationTab = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="w-full lg:w-2/5">
            <ROIMetricCards />
          </div>
          <div className="w-full lg:w-3/5">
            <ROIProjectionsChart />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">Runway Analysis</h2>
        <p className="mb-6 text-gray-600">
          Financial runway analysis showing revenue, remaining cash, and net
          burn rate over time
        </p>
        <RunwayAnalysisChart />
      </Card>

      <Card className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">Free Cash Flow</h2>
        <p className="mb-6 text-gray-600">
          Projected cumulative cash flow comparison across different scenarios
          over time
        </p>
        <CumulativeCashFlowChart />
      </Card>

      <Card className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">Impact Analysis</h2>
        <p className="mb-6 text-gray-600">
          Comparative analysis of market size, revenue growth, and operating
          costs impact across scenarios
        </p>
        <ImpactAnalysisChart />
      </Card>

      <Card className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">Sensitivity Analysis</h2>
        <p className="mb-6 text-gray-600">
          Internal Rate of Return (IRR) sensitivity analysis across different
          revenue and cost scenarios
        </p>
        <IRRSensitivityContainer />
      </Card>
    </div>
  );
};

export default ValuationTab;
