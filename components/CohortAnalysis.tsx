import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Activity, Target } from 'lucide-react';

interface CohortRevenueData {
  month: string;
  mrr: number;
  start_mrr: number;
  retention_1: number;
  retention_2: number;
  retention_3: number;
  retention_4: number;
  retention_5: number;
  retention_6: number;
  retention_7: number;
  retention_8: number;
  retention_9: number;
  retention_10: number;
  retention_11: number;
  retention_12: number;
}

interface CohortSubscriberData {
  month: string;
  subscribers: number;
  start_value: number;
  retention_1: number;
  retention_2: number;
  retention_3: number;
  retention_4: number;
  retention_5: number;
  retention_6: number;
  retention_7: number;
  retention_8: number;
  retention_9: number;
  retention_10: number;
  retention_11: number;
  retention_12: number;
}

type CohortData = CohortRevenueData | CohortSubscriberData;

const getStartValue = (data: CohortData, type: 'revenue' | 'subscribers'): number => {
  if (type === 'revenue' && 'start_mrr' in data) {
    return data.start_mrr;
  } else if (type === 'subscribers' && 'start_value' in data) {
    return data.start_value;
  }
  return 0;
};

interface RetentionTrendsProps {
  revenueData: CohortRevenueData[];
  subscriberData: CohortSubscriberData[];
}

const RetentionTrends = ({ revenueData, subscriberData }: RetentionTrendsProps): JSX.Element => {
  const [activeView, setActiveView] = useState<'revenue' | 'subscribers'>('revenue');
  const [selectedCohorts, setSelectedCohorts] = useState<string[]>([
    'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024',
    'May 2024', 'Jun 2024', 'Jul 2024'
  ]);

  const toggleCohort = (cohort: string) => {
    setSelectedCohorts(prev => 
      prev.includes(cohort)
        ? prev.filter(c => c !== cohort)
        : [...prev, cohort]
    );
  };

  const activeData = activeView === 'revenue' ? revenueData : subscriberData;
  const months = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'];
  const cohortColors = {
    'Dec 2023': '#9333EA', // violet
    'Jan 2024': '#E879F9', // fuchsia
    'Feb 2024': '#D946EF', // pink
    'Mar 2024': '#C026D3', // purple
    'Apr 2024': '#A21CAF', // dark purple
    'May 2024': '#86198F', // darker purple
    'Jun 2024': '#701A75', // darkest purple
    'Jul 2024': '#4C0264'  // deep purple
  } as const;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap-8">
      {/* Chart */}
      <Card className="p-4 md:p-6">
        <CardHeader className="px-0 pt-0">
          <div className="flex flex-col gap-2 justify-between md:flex-row md:items-center md:gap-0">
            <CardTitle className="text-lg md:text-xl">Retention Trends</CardTitle>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveView('revenue')}
                className={`px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeView === 'revenue'
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Revenue
              </button>
              <button
                onClick={() => setActiveView('subscribers')}
                className={`px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeView === 'subscribers'
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Subscribers
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[240px] md:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                <XAxis
                  dataKey="month"
                  type="category"
                  allowDuplicatedCategory={false}
                  tick={{ fontSize: 10, fill: '#666' }}
                  axisLine={{ stroke: '#E0E0E0' }}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fontSize: 10, fill: '#666' }}
                  axisLine={{ stroke: '#E0E0E0' }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  formatter={(value: any) => [`${value}%`, 'Retention']}
                  contentStyle={{
                    fontSize: 11,
                    backgroundColor: 'rgba(255, 255, 255, 0.96)',
                    border: '1px solid #E0E0E0',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                {activeData
                  .filter(cohort => 
                    cohort.month !== 'Average' && 
                    selectedCohorts.includes(cohort.month) &&
                    cohort.retention_1 > 0
                  )
                  .map((cohort) => (
                    <Line
                      key={cohort.month}
                      type="monotone"
                      data={months.map((month, idx) => ({
                        month,
                        value: cohort[`retention_${idx + 1}` as keyof typeof cohort]
                      }))}
                      dataKey="value"
                      name={cohort.month}
                      stroke={cohortColors[cohort.month as keyof typeof cohortColors]}
                      strokeWidth={2}
                      dot={{ 
                        fill: cohortColors[cohort.month as keyof typeof cohortColors],
                        r: 3 
                      }}
                      activeDot={{ r: 5, strokeWidth: 2 }}
                    />
                  ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Cohort Selection */}
          <div className="flex flex-wrap gap-2 mt-4">
            {Object.entries(cohortColors).map(([cohort, color]) => (
              <button
                key={cohort}
                onClick={() => toggleCohort(cohort)}
                className={`px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium rounded-md transition-all ${
                  selectedCohorts.includes(cohort)
                    ? 'text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
                style={{
                  backgroundColor: selectedCohorts.includes(cohort) ? color : undefined,
                  borderWidth: '1px',
                  borderColor: color,
                }}
              >
                {cohort}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards Side by Side */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap-8">
        {/* Retention Statistics Card */}
        <Card className="p-4 md:p-6">
          <h3 className="mb-3 text-base font-semibold text-gray-900 md:mb-4 md:text-lg">Retention Statistics</h3>
          <div className="space-y-3 md:space-y-4">
            <div className="p-3 bg-violet-50 rounded-lg md:p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-medium text-violet-600 md:text-sm">Average First Month</p>
                  <p className="text-xl font-semibold text-violet-900 md:text-2xl">
                    {activeView === 'revenue' ? '98%' : '95%'}
                  </p>
                </div>
                <Users className="w-6 h-6 text-violet-400 opacity-20 md:w-8 md:h-8" />
              </div>
            </div>
            <div className="p-3 rounded-lg md:p-4 bg-violet-50/70">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-medium text-violet-600 md:text-sm">Average Third Month</p>
                  <p className="text-xl font-semibold text-violet-900 md:text-2xl">
                    {activeView === 'revenue' ? '42%' : '45%'}
                  </p>
                </div>
                <Activity className="w-6 h-6 text-violet-400 opacity-20 md:w-8 md:h-8" />
              </div>
            </div>
            <div className="p-3 rounded-lg md:p-4 bg-violet-50/50">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-medium text-violet-600 md:text-sm">Average Sixth Month</p>
                  <p className="text-xl font-semibold text-violet-900 md:text-2xl">
                    {activeView === 'revenue' ? '35%' : '39%'}
                  </p>
                </div>
                <Target className="w-6 h-6 text-violet-400 opacity-20 md:w-8 md:h-8" />
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Analysis Card */}
        <Card className="p-4 md:p-6">
          <h3 className="mb-3 text-base font-semibold text-gray-900 md:mb-4 md:text-lg">Quick Analysis</h3>
          <div className="space-y-4 md:space-y-6">
            <div>
              <h4 className="mb-2 text-xs font-medium text-gray-600 md:text-sm">Best Performing</h4>
              <div className="flex gap-2 items-center">
                <span className="px-2 py-1 text-xs font-medium text-violet-700 bg-violet-100 rounded-md md:text-sm">
                  Jan-Feb 2024
                </span>
                <span className="text-xs text-gray-600 md:text-sm">
                  100% retention through first 6 months
                </span>
              </div>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-medium text-gray-600 md:text-sm">Critical Drop-off</h4>
              <div className="flex gap-2 items-center">
                <span className="px-2 py-1 text-xs font-medium text-violet-700 bg-violet-100 rounded-md md:text-sm">
                  Month 2-3
                </span>
                <span className="text-xs text-gray-600 md:text-sm">
                  Average retention drops by 31%
                </span>
              </div>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-medium text-gray-600 md:text-sm">Recent Trend</h4>
              <div className="flex gap-2 items-center">
                <span className="px-2 py-1 text-xs font-medium text-violet-700 bg-violet-100 rounded-md md:text-sm">
                  Improving
                </span>
                <span className="text-xs text-gray-600 md:text-sm">
                  Last 3 cohorts show better initial retention
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Cohort Table */}
      <Card className="p-4 md:p-6">
        <CardHeader className="px-0 pt-0">
          <div className="flex flex-col gap-2 justify-between md:flex-row md:items-center md:gap-0">
            <CardTitle className="text-lg md:text-xl">Cohort Analysis</CardTitle>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveView('revenue')}
                className={`px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeView === 'revenue'
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Revenue
              </button>
              <button
                onClick={() => setActiveView('subscribers')}
                className={`px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeView === 'subscribers'
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Subscribers
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[300px] md:h-[400px] relative overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr>
                  <th className="sticky left-0 px-3 py-2 font-medium text-left text-gray-900 bg-white md:px-4">Cohort</th>
                  <th className="px-3 py-2 font-medium text-center text-gray-900 md:px-4">
                    {activeView === 'revenue' ? 'Start MRR' : 'Start Value'}
                  </th>
                  {Array.from({ length: 12 }, (_, i) => (
                    <th key={i} className="px-3 py-2 font-medium text-center text-gray-900 md:px-4">
                      M{i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(activeView === 'revenue' ? cohortRevenueData : cohortSubscribersData).map((cohort, idx) => (
                  <tr key={cohort.month} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} ${cohort.month === 'Average' ? 'font-semibold' : ''}`}>
                    <td className="sticky left-0 px-3 py-2 font-medium text-gray-900 md:px-4 bg-inherit">
                      {cohort.month}
                    </td>
                    <td className="px-3 py-2 text-center text-gray-900 md:px-4">
                      {activeView === 'revenue' 
                        ? `$${getStartValue(cohort, 'revenue').toFixed(2)}`
                        : getStartValue(cohort, 'subscribers')
                      }
                    </td>
                    {Array.from({ length: 12 }, (_, i) => {
                      const retention = cohort[`retention_${i + 1}` as keyof typeof cohort] as number;
                      return (
                        <td
                          key={i}
                          className="px-3 py-2 text-center md:px-4"
                          style={{
                            background: retention
                              ? `rgba(139, 92, 246, ${retention / 100})`
                              : 'transparent',
                            color: retention > 50 ? 'white' : 'black'
                          }}
                        >
                          {retention ? `${retention}%` : '-'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Summary Card */}
      <Card className="p-4 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 md:p-6">
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-base font-semibold text-gray-900 md:text-lg">Cohort Analysis Insights</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
            <div className="space-y-2">
              <h4 className="text-xs font-medium text-purple-900 md:text-sm">Retention Patterns</h4>
              <p className="text-xs text-gray-600 md:text-sm">
                Early cohorts (Dec 2023) show moderate retention with gradual decline.
                Recent cohorts demonstrate higher initial retention but steeper drop-offs.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-medium text-purple-900 md:text-sm">Revenue Impact</h4>
              <p className="text-xs text-gray-600 md:text-sm">
                March 2024 cohort shows strong initial revenue but significant early churn.
                January and February 2024 cohorts maintain consistent revenue retention.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-medium text-purple-900 md:text-sm">Cohort Performance</h4>
              <p className="text-xs text-gray-600 md:text-sm">
                Best performing cohorts initiated in early 2024, maintaining 100% retention.
                Larger cohorts tend to experience more variable retention rates.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-medium text-purple-900 md:text-sm">Recommendations</h4>
              <p className="text-xs text-gray-600 md:text-sm">
                Focus on replicating success factors from Jan-Feb 2024 cohorts.
                Implement targeted retention strategies for months 2-3 where significant drops occur.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const CohortAnalysis: React.FC = () => {
  const [activeView, setActiveView] = useState<'revenue' | 'subscribers'>('revenue');

  // Cohort Revenue Data with Average
  const cohortRevenueData: CohortRevenueData[] = [
    { month: 'Average', mrr: 81.52, start_mrr: 81.52, retention_1: 98, retention_2: 67, retention_3: 42, retention_4: 36, retention_5: 36, retention_6: 35, retention_7: 29, retention_8: 30, retention_9: 26, retention_10: 39, retention_11: 30, retention_12: 18 },
    { month: 'Dec 2023', mrr: 339.60, start_mrr: 339.60, retention_1: 100, retention_2: 53, retention_3: 29, retention_4: 18, retention_5: 18, retention_6: 18, retention_7: 18, retention_8: 21, retention_9: 21, retention_10: 18, retention_11: 18, retention_12: 18 },
    { month: 'Jan 2024', mrr: 59.90, start_mrr: 59.90, retention_1: 100, retention_2: 100, retention_3: 100, retention_4: 100, retention_5: 100, retention_6: 100, retention_7: 100, retention_8: 100, retention_9: 100, retention_10: 100, retention_11: 100, retention_12: 0 },
    { month: 'Feb 2024', mrr: 59.90, start_mrr: 59.90, retention_1: 100, retention_2: 100, retention_3: 100, retention_4: 100, retention_5: 100, retention_6: 100, retention_7: 100, retention_8: 100, retention_9: 100, retention_10: 100, retention_11: 0, retention_12: 0 },
    { month: 'Mar 2024', mrr: 389.00, start_mrr: 389.00, retention_1: 95, retention_2: 64, retention_3: 26, retention_4: 23, retention_5: 23, retention_6: 23, retention_7: 8, retention_8: 8, retention_9: 8, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Apr 2024', mrr: 49.95, start_mrr: 49.95, retention_1: 100, retention_2: 100, retention_3: 100, retention_4: 100, retention_5: 100, retention_6: 100, retention_7: 100, retention_8: 100, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'May 2024', mrr: 39.96, start_mrr: 39.96, retention_1: 100, retention_2: 100, retention_3: 50, retention_4: 25, retention_5: 25, retention_6: 25, retention_7: 25, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Jun 2024', mrr: 19.98, start_mrr: 19.98, retention_1: 100, retention_2: 50, retention_3: 50, retention_4: 50, retention_5: 50, retention_6: 50, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Jul 2024', mrr: 19.98, start_mrr: 19.98, retention_1: 100, retention_2: 50, retention_3: 50, retention_4: 50, retention_5: 50, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Aug 2024', mrr: 0.00, start_mrr: 0.00, retention_1: 0, retention_2: 0, retention_3: 0, retention_4: 0, retention_5: 0, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Sep 2024', mrr: 0.00, start_mrr: 0.00, retention_1: 0, retention_2: 0, retention_3: 0, retention_4: 0, retention_5: 0, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Oct 2024', mrr: 0.00, start_mrr: 0.00, retention_1: 0, retention_2: 0, retention_3: 0, retention_4: 0, retention_5: 0, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Nov 2024', mrr: 0.00, start_mrr: 0.00, retention_1: 0, retention_2: 0, retention_3: 0, retention_4: 0, retention_5: 0, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 }
  ];

  // Cohort Subscribers Data with Average
  const cohortSubscribersData: CohortSubscriberData[] = [
    { month: 'Average', subscribers: 3.17, start_value: 3.17, retention_1: 95, retention_2: 76, retention_3: 45, retention_4: 39, retention_5: 39, retention_6: 39, retention_7: 35, retention_8: 40, retention_9: 28, retention_10: 50, retention_11: 40, retention_12: 25 },
    { month: 'Dec 2023', subscribers: 4, start_value: 4, retention_1: 100, retention_2: 50, retention_3: 25, retention_4: 25, retention_5: 25, retention_6: 25, retention_7: 25, retention_8: 50, retention_9: 50, retention_10: 25, retention_11: 25, retention_12: 25 },
    { month: 'Jan 2024', subscribers: 1, start_value: 1, retention_1: 100, retention_2: 100, retention_3: 100, retention_4: 100, retention_5: 100, retention_6: 100, retention_7: 100, retention_8: 100, retention_9: 100, retention_10: 100, retention_11: 100, retention_12: 0 },
    { month: 'Feb 2024', subscribers: 1, start_value: 1, retention_1: 100, retention_2: 100, retention_3: 100, retention_4: 100, retention_5: 100, retention_6: 100, retention_7: 100, retention_8: 100, retention_9: 100, retention_10: 100, retention_11: 0, retention_12: 0 },
    { month: 'Mar 2024', subscribers: 19, start_value: 19, retention_1: 89, retention_2: 74, retention_3: 26, retention_4: 21, retention_5: 21, retention_6: 21, retention_7: 16, retention_8: 16, retention_9: 16, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Apr 2024', subscribers: 5, start_value: 5, retention_1: 100, retention_2: 100, retention_3: 100, retention_4: 100, retention_5: 100, retention_6: 100, retention_7: 100, retention_8: 100, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'May 2024', subscribers: 4, start_value: 4, retention_1: 100, retention_2: 100, retention_3: 50, retention_4: 25, retention_5: 25, retention_6: 25, retention_7: 25, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Jun 2024', subscribers: 2, start_value: 2, retention_1: 100, retention_2: 50, retention_3: 50, retention_4: 50, retention_5: 50, retention_6: 50, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Jul 2024', subscribers: 2, start_value: 2, retention_1: 100, retention_2: 50, retention_3: 50, retention_4: 50, retention_5: 50, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Aug 2024', subscribers: 0, start_value: 0, retention_1: 0, retention_2: 0, retention_3: 0, retention_4: 0, retention_5: 0, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Sep 2024', subscribers: 0, start_value: 0, retention_1: 0, retention_2: 0, retention_3: 0, retention_4: 0, retention_5: 0, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Oct 2024', subscribers: 0, start_value: 0, retention_1: 0, retention_2: 0, retention_3: 0, retention_4: 0, retention_5: 0, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Nov 2024', subscribers: 0, start_value: 0, retention_1: 0, retention_2: 0, retention_3: 0, retention_4: 0, retention_5: 0, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 }
  ];

  return (
    <div className="overflow-x-auto pb-2 w-full">
      <div className="min-w-[768px]">
        <div className="space-y-4 md:space-y-8">
          {/* Title Section */}
          <div className="flex flex-col gap-2 justify-between md:flex-row md:items-center md:gap-0">
            <h2 className="text-lg font-semibold text-gray-900 md:text-xl lg:text-2xl">Cohort Analysis</h2>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-6">
            <Card className="p-3 bg-gradient-to-br from-violet-50 to-white border-violet-100 md:p-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-violet-600 md:text-sm">Average 1st Month Retention</p>
                <p className="text-xl font-semibold text-violet-900 md:text-2xl">78.5%</p>
                <p className="text-xs text-gray-500">across all cohorts</p>
              </div>
            </Card>

            <Card className="p-3 bg-gradient-to-br from-fuchsia-50 to-white border-fuchsia-100 md:p-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-fuchsia-600 md:text-sm">Average 3rd Month Retention</p>
                <p className="text-xl font-semibold text-fuchsia-900 md:text-2xl">55.3%</p>
                <p className="text-xs text-gray-500">across all cohorts</p>
              </div>
            </Card>

            <Card className="p-3 bg-gradient-to-br from-purple-50 to-white border-purple-100 md:p-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-purple-600 md:text-sm">Best Performing Cohort</p>
                <p className="text-xl font-semibold text-purple-900 md:text-2xl">Jan 2024</p>
                <p className="text-xs text-gray-500">100% retention</p>
              </div>
            </Card>

            <Card className="p-3 bg-gradient-to-br from-indigo-50 to-white border-indigo-100 md:p-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-indigo-600 md:text-sm">Largest Cohort Size</p>
                <p className="text-xl font-semibold text-indigo-900 md:text-2xl">19</p>
                <p className="text-xs text-gray-500">Mar 2024 cohort</p>
              </div>
            </Card>
          </div>


          {/* Cohort Table */}
          <Card className="p-4 md:p-6">
            <CardHeader className="px-0 pt-0">
              <div className="flex flex-col gap-2 justify-between md:flex-row md:items-center md:gap-0">
                <CardTitle className="text-lg md:text-xl">Cohort Analysis</CardTitle>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveView('revenue')}
                    className={`px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium rounded-md transition-all ${
                      activeView === 'revenue'
                        ? 'bg-violet-100 text-violet-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Revenue
                  </button>
                  <button
                    onClick={() => setActiveView('subscribers')}
                    className={`px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium rounded-md transition-all ${
                      activeView === 'subscribers'
                        ? 'bg-violet-100 text-violet-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Subscribers
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[300px] md:h-[400px] relative overflow-x-auto">
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr>
                      <th className="sticky left-0 px-3 py-2 font-medium text-left text-gray-900 bg-white md:px-4">Cohort</th>
                      <th className="px-3 py-2 font-medium text-center text-gray-900 md:px-4">
                        {activeView === 'revenue' ? 'Start MRR' : 'Start Value'}
                      </th>
                      {Array.from({ length: 12 }, (_, i) => (
                        <th key={i} className="px-3 py-2 font-medium text-center text-gray-900 md:px-4">
                          M{i + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(activeView === 'revenue' ? cohortRevenueData : cohortSubscribersData).map((cohort, idx) => (
                      <tr key={cohort.month} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} ${cohort.month === 'Average' ? 'font-semibold' : ''}`}>
                        <td className="sticky left-0 px-3 py-2 font-medium text-gray-900 md:px-4 bg-inherit">
                          {cohort.month}
                        </td>
                        <td className="px-3 py-2 text-center text-gray-900 md:px-4">
                          {activeView === 'revenue' 
                            ? `$${getStartValue(cohort, 'revenue').toFixed(2)}`
                            : getStartValue(cohort, 'subscribers')
                          }
                        </td>
                        {Array.from({ length: 12 }, (_, i) => {
                          const retention = cohort[`retention_${i + 1}` as keyof typeof cohort] as number;
                          return (
                            <td
                              key={i}
                              className="px-3 py-2 text-center md:px-4"
                              style={{
                                background: retention
                                  ? `rgba(139, 92, 246, ${retention / 100})`
                                  : 'transparent',
                                color: retention > 50 ? 'white' : 'black'
                              }}
                            >
                              {retention ? `${retention}%` : '-'}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          {/* Stats Cards Side by Side */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap-8">
            {/* Retention Statistics Card */}
            <Card className="p-4 md:p-6">
              <h3 className="mb-3 text-base font-semibold text-gray-900 md:mb-4 md:text-lg">Retention Statistics</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="p-3 bg-violet-50 rounded-lg md:p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-medium text-violet-600 md:text-sm">Average First Month</p>
                      <p className="text-xl font-semibold text-violet-900 md:text-2xl">
                        {activeView === 'revenue' ? '98%' : '95%'}
                      </p>
                    </div>
                    <Users className="w-6 h-6 text-violet-400 opacity-20 md:w-8 md:h-8" />
                  </div>
                </div>
                <div className="p-3 rounded-lg md:p-4 bg-violet-50/70">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-medium text-violet-600 md:text-sm">Average Third Month</p>
                      <p className="text-xl font-semibold text-violet-900 md:text-2xl">
                        {activeView === 'revenue' ? '42%' : '45%'}
                      </p>
                    </div>
                    <Activity className="w-6 h-6 text-violet-400 opacity-20 md:w-8 md:h-8" />
                  </div>
                </div>
                <div className="p-3 rounded-lg md:p-4 bg-violet-50/50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-medium text-violet-600 md:text-sm">Average Sixth Month</p>
                      <p className="text-xl font-semibold text-violet-900 md:text-2xl">
                        {activeView === 'revenue' ? '35%' : '39%'}
                      </p>
                    </div>
                    <Target className="w-6 h-6 text-violet-400 opacity-20 md:w-8 md:h-8" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Analysis Card */}
            <Card className="p-4 md:p-6">
              <h3 className="mb-3 text-base font-semibold text-gray-900 md:mb-4 md:text-lg">Quick Analysis</h3>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="mb-2 text-xs font-medium text-gray-600 md:text-sm">Best Performing</h4>
                  <div className="flex gap-2 items-center">
                    <span className="px-2 py-1 text-xs font-medium text-violet-700 bg-violet-100 rounded-md md:text-sm">
                      Jan-Feb 2024
                    </span>
                    <span className="text-xs text-gray-600 md:text-sm">
                      100% retention through first 6 months
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-medium text-gray-600 md:text-sm">Critical Drop-off</h4>
                  <div className="flex gap-2 items-center">
                    <span className="px-2 py-1 text-xs font-medium text-violet-700 bg-violet-100 rounded-md md:text-sm">
                      Month 2-3
                    </span>
                    <span className="text-xs text-gray-600 md:text-sm">
                      Average retention drops by 31%
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-medium text-gray-600 md:text-sm">Recent Trend</h4>
                  <div className="flex gap-2 items-center">
                    <span className="px-2 py-1 text-xs font-medium text-violet-700 bg-violet-100 rounded-md md:text-sm">
                      Improving
                    </span>
                    <span className="text-xs text-gray-600 md:text-sm">
                      Last 3 cohorts show better initial retention
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>


          {/* Summary Card */}
          <Card className="p-4 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 md:p-6">
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base font-semibold text-gray-900 md:text-lg">Cohort Analysis Insights</h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-medium text-purple-900 md:text-sm">Retention Patterns</h4>
                  <p className="text-xs text-gray-600 md:text-sm">
                    Early cohorts (Dec 2023) show moderate retention with gradual decline.
                    Recent cohorts demonstrate higher initial retention but steeper drop-offs.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium text-purple-900 md:text-sm">Revenue Impact</h4>
                  <p className="text-xs text-gray-600 md:text-sm">
                    March 2024 cohort shows strong initial revenue but significant early churn.
                    January and February 2024 cohorts maintain consistent revenue retention.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium text-purple-900 md:text-sm">Cohort Performance</h4>
                  <p className="text-xs text-gray-600 md:text-sm">
                    Best performing cohorts initiated in early 2024, maintaining 100% retention.
                    Larger cohorts tend to experience more variable retention rates.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium text-purple-900 md:text-sm">Recommendations</h4>
                  <p className="text-xs text-gray-600 md:text-sm">
                    Focus on replicating success factors from Jan-Feb 2024 cohorts.
                    Implement targeted retention strategies for months 2-3 where significant drops occur.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CohortAnalysis; 