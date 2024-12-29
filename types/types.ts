import { LucideIcon } from 'lucide-react';

export interface MetricCardProps {
  title: string;
  value: string | number;
  trend: 'up' | 'down';
  change: string;
  icon: LucideIcon;
}

export interface InsightCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export interface ChartProps {
  data: any[];
}

export interface MarketingMetricsProps {
  data: {
    roi: number;
    spend: number;
    cpa: number;
    conversions: number;
  };
} 