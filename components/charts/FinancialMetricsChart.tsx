import React, { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

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
    clonedSvg.style.backgroundColor = 'white';
    
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

const data = [
  { quarter: '25-Q1', revenueGrowth: null, rdSales: 663 },
  { quarter: '25-Q2', revenueGrowth: 320, rdSales: 217 },
  { quarter: '25-Q3', revenueGrowth: 103, rdSales: 165 },
  { quarter: '25-Q4', revenueGrowth: 247, rdSales: 76 },
  { quarter: '26-Q1', revenueGrowth: 102, rdSales: 34 },
  { quarter: '26-Q2', revenueGrowth: 28, rdSales: 38 },
  { quarter: '26-Q3', revenueGrowth: 34, rdSales: 31 },
  { quarter: '26-Q4', revenueGrowth: 29, rdSales: 23 },
  { quarter: '27-Q1', revenueGrowth: 29, rdSales: 42 },
  { quarter: '27-Q2', revenueGrowth: 31, rdSales: 32 },
  { quarter: '27-Q3', revenueGrowth: 19, rdSales: 27 },
  { quarter: '27-Q4', revenueGrowth: 12, rdSales: 24 },
];

const ChartCard = ({ title, children, onExport }: { title: string; children: React.ReactNode; onExport: () => void }) => (
  <Card className="p-4">
    <CardHeader className="px-0 pt-0">
      <div className="flex justify-between items-center">
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        <Button
          variant="outline"
          size="sm"
          onClick={onExport}
          className="flex gap-2 items-center"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">SVG</span>
        </Button>
      </div>
    </CardHeader>
    <CardContent className="p-0">
      <div className="h-[300px]">
        {children}
      </div>
    </CardContent>
  </Card>
);

const commonChartProps = {
  margin: { top: 20, right: 30, left: 20, bottom: 20 },
  data,
};

const commonAxisProps = {
  tick: { fontSize: 12, fill: '#666' },
  axisLine: { stroke: '#E0E0E0' },
};

const commonXAxisProps = {
  ...commonAxisProps,
  dataKey: "quarter",
  interval: 0,
  angle: -45,
  textAnchor: "end",
  height: 60,
  tickMargin: 25,
};

const tooltipStyle = {
  contentStyle: {
    fontSize: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
};

const FinancialMetricsChart = () => {
  const revenueChartRef = useRef<HTMLDivElement>(null);
  const rdChartRef = useRef<HTMLDivElement>(null);

  const handleExportRevenueChart = () => {
    if (revenueChartRef.current) {
      exportToSVG(revenueChartRef.current, 'revenue-growth-chart');
    }
  };

  const handleExportRDChart = () => {
    if (rdChartRef.current) {
      exportToSVG(rdChartRef.current, 'rd-sales-chart');
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Revenue Growth Chart */}
      <ChartCard title="Revenue Growth %" onExport={handleExportRevenueChart}>
        <div ref={revenueChartRef} className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart {...commonChartProps}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
              <XAxis {...commonXAxisProps} />
              <YAxis {...commonAxisProps} tickFormatter={(value) => `${value}%`} />
              <Tooltip 
                formatter={(value: any) => [`${value}%`, 'Revenue Growth']}
                {...tooltipStyle}
              />
              <Area
                type="monotone"
                dataKey="revenueGrowth"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.2}
                strokeWidth={2}
                dot={{ fill: '#8B5CF6', r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      {/* R&D As of Sales Chart */}
      <ChartCard title="R&D As of Sales %" onExport={handleExportRDChart}>
        <div ref={rdChartRef} className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart {...commonChartProps}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
              <XAxis {...commonXAxisProps} />
              <YAxis {...commonAxisProps} tickFormatter={(value) => `${value}%`} />
              <Tooltip 
                formatter={(value: any) => [`${value}%`, 'R&D Sales Ratio']}
                {...tooltipStyle}
              />
              <Area
                type="monotone"
                dataKey="rdSales"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.2}
                strokeWidth={2}
                dot={{ fill: '#10B981', r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
    </div>
  );
};

export default FinancialMetricsChart; 