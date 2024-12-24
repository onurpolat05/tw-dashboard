import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Megaphone, Calendar, Video, Users, DollarSign, TrendingUp, TrendingDown, Target, AlertCircle, Activity, UserPlus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, Cell, ComposedChart } from 'recharts';
import { MetricCardProps, InsightCardProps, ChartProps, MarketingMetricsProps } from '@/types/types';
import KpiMetrics from './KpiMetrics';
import KeyInsights from './KeyInsights';
import MrrCharts from './MrrCharts';
import SubscriptionDistribution from './SubscriptionDistribution';
import CustomerMetrics from './CustomerMetrics';
import LTVAnalysis from './LTVAnalysis';
import CohortAnalysis from './CohortAnalysis';
import PurchaseFunnel from './PurchaseFunnel';
import SummaryAndEvaluation from './SummaryAndEvaluation';

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <div className="mx-auto space-y-8 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">TradeWizz Investor Dashboard</h1>
          <span className="text-sm text-gray-500">Last updated: Dec 20, 2024</span>
        </div>

        {/* KPI Metrics */}
        <KpiMetrics />

        {/* Key Insights */}
        <KeyInsights />

        {/* MRR Charts Side by Side */}
        <MrrCharts />

        {/* Subscription Distribution */}
        <SubscriptionDistribution />

        {/* Customer Metrics Section */}
        <CustomerMetrics />

        {/* LTV Analysis Section */}
        <LTVAnalysis />

        {/* Cohort Analysis Section */}
        <CohortAnalysis />

        {/* Purchase Funnel and Instagram Campaign Performance */}
        <PurchaseFunnel />

        {/* Summary and Evaluation */}
        <SummaryAndEvaluation />
      </div>
    </div>
  );
};

export default Dashboard;