import React, { useRef } from 'react';
import { Card } from '@/components/ui/card';
import CumulativeCashFlowChart from '@/components/charts/CumulativeCashFlowChart';
import { TrendingDown, Scale, TrendingUp, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Utility function to export chart as SVG
const exportToSVG = (element: HTMLDivElement, fileName: string) => {
  try {
    const svgElement = element.querySelector('svg');
    if (!svgElement) {
      console.error('SVG element not found');
      return;
    }

    // Clone the SVG to avoid modifying the original
    const clonedSvg = svgElement.cloneNode(true) as SVGElement;
    
    // Add white background
    clonedSvg.style.backgroundColor = 'transparent';
    
    // Get SVG string
    const svgString = new XMLSerializer().serializeToString(clonedSvg);
    
    // Create blob and download
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error generating SVG:', error);
  }
};

const ProjectedCashFlowSection = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportSVG = () => {
    if (chartRef.current) {
      exportToSVG(chartRef.current, 'projected-cash-flow-analysis');
    }
  };

  const scenarios = [
    {
      icon: TrendingDown,
      title: 'Conservative',
      value: '$570.34K',
      description: 'Assumes higher operating costs and slower revenue growth',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-500',
      valueColor: 'text-red-500',
    },
    {
      icon: Scale,
      title: 'Moderate',
      value: '$889.21K',
      description: 'Based on current growth trajectory and market conditions',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-500',
      valueColor: 'text-yellow-500',
    },
    {
      icon: TrendingUp,
      title: 'Optimistic',
      value: '$1,225.46K',
      description: 'Reflects accelerated growth and operational efficiency',
      iconBg: 'bg-[#4ADE80]/10',
      iconColor: 'text-[#4ADE80]',
      valueColor: 'text-[#4ADE80]',
    },
  ];

  const assumptions = [
    {
      category: 'Revenue Growth',
      values: [
        { label: 'Conservative', value: '25%', color: 'text-red-500' },
        { label: 'Moderate', value: '35%', color: 'text-yellow-500' },
        { label: 'Optimistic', value: '45%', color: 'text-[#4ADE80]' },
      ],
    },
    {
      category: 'Operating Margin',
      values: [
        { label: 'Conservative', value: '15%', color: 'text-red-500' },
        { label: 'Moderate', value: '25%', color: 'text-yellow-500' },
        { label: 'Optimistic', value: '35%', color: 'text-[#4ADE80]' },
      ],
    },
    {
      category: 'Working Capital',
      values: [
        { label: 'Conservative', value: '12%', color: 'text-red-500' },
        { label: 'Moderate', value: '10%', color: 'text-yellow-500' },
        { label: 'Optimistic', value: '8%', color: 'text-[#4ADE80]' },
      ],
    },
  ];

  const keyMetrics = [
    {
      label: 'Burn Rate',
      values: [
        { value: '$45K/mo', color: 'text-red-500' },
        { value: '$35K/mo', color: 'text-yellow-500' },
        { value: '$25K/mo', color: 'text-[#4ADE80]' },
      ],
    },
    {
      label: 'Cash Runway',
      values: [
        { value: '18 months', color: 'text-red-500' },
        { value: '24 months', color: 'text-yellow-500' },
        { value: '30 months', color: 'text-[#4ADE80]' },
      ],
    },
    {
      label: 'Break-even Point',
      values: [
        { value: 'Q4 2025', color: 'text-red-500' },
        { value: 'Q2 2025', color: 'text-yellow-500' },
        { value: 'Q1 2025', color: 'text-[#4ADE80]' },
      ],
    },
  ];

  return (
    <Card className="p-4 md:p-6 bg-[#F8F8F8]">
      <div className="space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-[#20152E]">
                Projected Cash Flow Analysis
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportSVG}
                className="flex gap-2 items-center"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">SVG</span>
              </Button>
            </div>
            <p className="text-base md:text-lg text-[#20152E]">
              Quarterly Cash Flow Projections Under Different Scenarios
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-sm text-gray-600 md:text-base">
            Analysis of projected cash flows based on different growth scenarios and operational assumptions.
          </p>
        </div>

        {/* Chart Section */}
        <div className="p-4 bg-white rounded-lg border border-gray-100 md:p-6">
          <div ref={chartRef} className="h-[400px]">
            <CumulativeCashFlowChart />
          </div>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 ${scenario.iconBg} rounded-lg`}>
                      <scenario.icon className={`w-8 h-8 ${scenario.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#20152E]">{scenario.title}</h3>
                  </div>
                </div>
                <div className="py-4 text-center">
                  <p className={`text-3xl font-bold ${scenario.valueColor}`}>{scenario.value}</p>
                </div>
                <p className="text-sm text-gray-600">{scenario.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Metrics and Assumptions */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
          {/* Assumptions */}
          <div className="p-6 bg-white rounded-lg border border-gray-100">
            <h4 className="text-lg font-semibold text-[#20152E] mb-4">Key Assumptions</h4>
            <div className="space-y-4">
              {assumptions.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h5 className="text-sm font-medium text-[#20152E]">{item.category}</h5>
                  <div className="flex justify-between items-center">
                    {item.values.map((value, idx) => (
                      <div key={idx} className="text-center">
                        <p className={`text-sm font-medium ${value.color}`}>{value.value}</p>
                        <p className="text-xs text-gray-500">{value.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="p-6 bg-white rounded-lg border border-gray-100">
            <h4 className="text-lg font-semibold text-[#20152E] mb-4">Key Metrics</h4>
            <div className="space-y-4">
              {keyMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <h5 className="text-sm font-medium text-[#20152E]">{metric.label}</h5>
                  <div className="flex justify-between items-center">
                    {metric.values.map((value, idx) => (
                      <div key={idx} className="text-center">
                        <p className={`text-sm font-medium ${value.color}`}>{value.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectedCashFlowSection; 