import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface CustomerMetricsData {
  month: string;
  total_users: number;
  trial_users: number;
  revenue: number;
  trial_to_paid_ratio: number;
  al_to_total_ra: number;
}

interface PackageRevenueData {
  month: string;
  eko_revenue: number;
  premium_revenue: number;
  simple_revenue: number;
  total_users: number;
  trial_users: number;
  trial_to_total_ratio: number;
}

const CustomerMetrics: React.FC = () => {
  // Mock data
  const customerData: CustomerMetricsData[] = [
    { month: '2023-11', total_users: 3, trial_users: 0, revenue: 109.85, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2023-12', total_users: 6, trial_users: 0, revenue: 239.70, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2024-01', total_users: 5, trial_users: 0, revenue: 189.75, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2024-02', total_users: 5, trial_users: 0, revenue: 189.75, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2024-03', total_users: 21, trial_users: 13, revenue: 267.13, trial_to_paid_ratio: 162.50, al_to_total_ra: 61.90 },
    { month: '2024-04', total_users: 15, trial_users: 5, revenue: 259.90, trial_to_paid_ratio: 50.00, al_to_total_ra: 33.33 },
    { month: '2024-05', total_users: 10, trial_users: 3, revenue: 199.93, trial_to_paid_ratio: 42.86, al_to_total_ra: 30.00 },
    { month: '2024-06', total_users: 9, trial_users: 2, revenue: 169.93, trial_to_paid_ratio: 28.57, al_to_total_ra: 22.22 },
    { month: '2024-07', total_users: 10, trial_users: 2, revenue: 179.92, trial_to_paid_ratio: 25.00, al_to_total_ra: 20.00 },
    { month: '2024-08', total_users: 7, trial_users: 0, revenue: 119.93, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2024-09', total_users: 7, trial_users: 0, revenue: 119.93, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2024-10', total_users: 4, trial_users: 0, revenue: 39.96, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2024-11', total_users: 4, trial_users: 0, revenue: 39.96, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 }
  ];

  const packageRevenueData: PackageRevenueData[] = [
    { month: '2023-11', eko_revenue: 0.0, premium_revenue: 79.9, simple_revenue: 29.95, total_users: 3, trial_users: 0, trial_to_total_ratio: 0 },
    { month: '2023-12', eko_revenue: 0.0, premium_revenue: 209.75, simple_revenue: 29.95, total_users: 6, trial_users: 0, trial_to_total_ratio: 0 },
    { month: '2024-01', eko_revenue: 0.0, premium_revenue: 129.85, simple_revenue: 58.9, total_users: 5, trial_users: 0, trial_to_total_ratio: 0 },
    { month: '2024-02', eko_revenue: 0.0, premium_revenue: 99.9, simple_revenue: 89.85, total_users: 5, trial_users: 0, trial_to_total_ratio: 0 },
    { month: '2024-03', eko_revenue: 19.94, premium_revenue: 117.31, simple_revenue: 129.88, total_users: 21, trial_users: 13, trial_to_total_ratio: 61.9 },
    { month: '2024-04', eko_revenue: 59.94, premium_revenue: 119.98, simple_revenue: 79.98, total_users: 15, trial_users: 5, trial_to_total_ratio: 33.33 },
    { month: '2024-05', eko_revenue: 39.96, premium_revenue: 119.98, simple_revenue: 39.99, total_users: 10, trial_users: 3, trial_to_total_ratio: 30 },
    { month: '2024-06', eko_revenue: 49.95, premium_revenue: 119.98, simple_revenue: 0.0, total_users: 9, trial_users: 2, trial_to_total_ratio: 22.22 },
    { month: '2024-07', eko_revenue: 59.94, premium_revenue: 119.98, simple_revenue: 0.0, total_users: 10, trial_users: 2, trial_to_total_ratio: 20 },
    { month: '2024-08', eko_revenue: 59.94, premium_revenue: 59.99, simple_revenue: 0.0, total_users: 7, trial_users: 0, trial_to_total_ratio: 0 },
    { month: '2024-09', eko_revenue: 59.94, premium_revenue: 59.99, simple_revenue: 0.0, total_users: 7, trial_users: 0, trial_to_total_ratio: 0 },
    { month: '2024-10', eko_revenue: 39.96, premium_revenue: 0.0, simple_revenue: 0.0, total_users: 4, trial_users: 0, trial_to_total_ratio: 0 },
    { month: '2024-11', eko_revenue: 39.96, premium_revenue: 0.0, simple_revenue: 0.0, total_users: 4, trial_users: 0, trial_to_total_ratio: 0 }
  ];

  // Calculate key metrics
  const avgTrialConversion = customerData.reduce((acc, curr) => acc + curr.trial_to_paid_ratio, 0) / customerData.filter(d => d.trial_to_paid_ratio > 0).length || 0;
  const currentMonth = customerData[customerData.length - 1];
  const previousMonth = customerData[customerData.length - 2];
  const revenueChange = ((currentMonth.revenue - previousMonth.revenue) / previousMonth.revenue) * 100;
  const userChange = ((currentMonth.total_users - previousMonth.total_users) / previousMonth.total_users) * 100;

  // Format dates to be more concise
  const formattedData = packageRevenueData.map(item => ({
    ...item,
    month: item.month.replace('2023-', '2023-').replace('2024-', '24-')
  }));

  // State for chart filters
  const [userFilters, setUserFilters] = useState({
    trial_users: true,
    paid_users: true
  });

  const [packageFilters, setPackageFilters] = useState({
    eko: true,
    premium: true,
    simple: true
  });

  // Toggle filters
  const toggleUserFilter = (key: keyof typeof userFilters) => {
    setUserFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePackageFilter = (key: keyof typeof packageFilters) => {
    setPackageFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      {/* Title Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Customer Growth & Trial Metrics</h2>
      </div>
        {/* Metrics Cards */}
        <div className="grid grid-cols-4 gap-4">
          {/* First Row - User Focused Metrics */}
          <Card className="p-4 bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
            <div className="space-y-1">
              <p className="text-sm font-medium text-indigo-600">Total Unique Customers</p>
              <p className="text-2xl font-semibold text-indigo-900">41</p>
              <div className="flex items-center space-x-1">
                <span className={`text-sm font-medium text-emerald-600`}>
                  ↑ Overall
                </span>
                <span className="text-xs text-gray-500">lifetime</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-violet-50 to-white border-violet-100">
            <div className="space-y-1">
              <p className="text-sm font-medium text-violet-600">Trial Users</p>
              <p className="text-2xl font-semibold text-violet-900">26</p>
              <p className="text-xs text-gray-500">total trial users</p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-purple-50 to-white border-purple-100">
            <div className="space-y-1">
              <p className="text-sm font-medium text-purple-600">Trial to Paid Conversion</p>
              <p className="text-2xl font-semibold text-purple-900">19.51%</p>
              <p className="text-xs text-gray-500">conversion rate</p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-fuchsia-50 to-white border-fuchsia-100">
            <div className="space-y-1">
              <p className="text-sm font-medium text-fuchsia-600">Average Days to Convert</p>
              <p className="text-2xl font-semibold text-fuchsia-900">97.88</p>
              <p className="text-xs text-gray-500">days</p>
            </div>
          </Card>

          {/* Second Row - Performance Metrics */}
          <Card className="p-4 bg-gradient-to-br from-cyan-50 to-white border-cyan-100">
            <div className="space-y-1">
              <p className="text-sm font-medium text-cyan-600">Avg Trial Usage</p>
              <p className="text-2xl font-semibold text-cyan-900">1.88</p>
              <p className="text-xs text-gray-500">before conversion</p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-teal-50 to-white border-teal-100">
            <div className="space-y-1">
              <p className="text-sm font-medium text-teal-600">Revenue per Convert</p>
              <p className="text-2xl font-semibold text-teal-900">${265.70}</p>
              <p className="text-xs text-gray-500">average</p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-emerald-50 to-white border-emerald-100">
            <div className="space-y-1">
              <p className="text-sm font-medium text-emerald-600">Monthly Revenue</p>
              <p className="text-2xl font-semibold text-emerald-900">
                ${(formattedData[formattedData.length - 1].eko_revenue + 
                   formattedData[formattedData.length - 1].premium_revenue + 
                   formattedData[formattedData.length - 1].simple_revenue).toFixed(2)}
              </p>
              <div className="flex items-center space-x-1">
                <span className={`text-sm font-medium ${revenueChange >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {revenueChange >= 0 ? '↑' : '↓'} {Math.abs(revenueChange).toFixed(1)}%
                </span>
                <span className="text-xs text-gray-500">vs last month</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-sky-50 to-white border-sky-100">
            <div className="space-y-1">
              <p className="text-sm font-medium text-sky-600">Trial to Total Ratio</p>
              <p className="text-2xl font-semibold text-sky-900">{formattedData[formattedData.length - 1].trial_to_total_ratio}%</p>
              <p className="text-xs text-gray-500">current month</p>
            </div>
          </Card>
        </div>
      {/* Charts and Metrics Grid */}
      <div className="space-y-8">
        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Monthly User Distribution */}
          <Card className="p-6">
            <CardHeader className="px-0 pt-0">
              <div className="flex justify-between items-center">
                <CardTitle>Monthly User Distribution</CardTitle>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleUserFilter('trial_users')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      userFilters.trial_users
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Trial Users
                  </button>
                  <button
                    onClick={() => toggleUserFilter('paid_users')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      userFilters.paid_users
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Paid Users
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                    <XAxis
                      dataKey="month"
                      angle={-45}
                      textAnchor="end"
                      height={60}
                      tick={{ fontSize: 12, fill: '#666' }}
                      tickMargin={20}
                      axisLine={{ stroke: '#E0E0E0' }}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: '#666' }}
                      axisLine={{ stroke: '#E0E0E0' }}
                      label={{
                        value: 'Number of Users',
                        angle: -90,
                        position: 'insideLeft',
                        style: { textAnchor: 'middle', fill: '#666', fontSize: 12 }
                      }}
                    />
                    <Tooltip
                      formatter={(value: any, name: string) => [value, name === 'trial_users' ? 'Trial Users' : 'Paid Users']}
                      contentStyle={{
                        fontSize: 12,
                        backgroundColor: 'rgba(255, 255, 255, 0.96)',
                        border: '1px solid #E0E0E0',
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    />
                    {userFilters.trial_users && (
                      <Bar
                        dataKey="trial_users"
                        name="Trial Users"
                        stackId="a"
                        fill="#4F46E5"
                        opacity={0.2}
                        radius={[4, 4, 0, 0]}
                      />
                    )}
                    {userFilters.paid_users && (
                      <Bar
                        dataKey={(data) => data.total_users - data.trial_users}
                        name="Paid Users"
                        stackId="a"
                        fill="#4F46E5"
                        radius={[4, 4, 0, 0]}
                      />
                    )}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Package Revenue */}
          <Card className="p-6">
            <CardHeader className="px-0 pt-0">
              <div className="flex justify-between items-center">
                <CardTitle>Monthly Package Revenue</CardTitle>
                <div className="flex gap-2">
                  <button
                    onClick={() => togglePackageFilter('eko')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      packageFilters.eko
                        ? 'bg-violet-100 text-violet-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Eko Package
                  </button>
                  <button
                    onClick={() => togglePackageFilter('premium')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      packageFilters.premium
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Premium Package
                  </button>
                  <button
                    onClick={() => togglePackageFilter('simple')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      packageFilters.simple
                        ? 'bg-fuchsia-100 text-fuchsia-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Simple Package
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                    <XAxis
                      dataKey="month"
                      angle={-45}
                      textAnchor="end"
                      height={60}
                      tick={{ fontSize: 12, fill: '#666' }}
                      tickMargin={20}
                      axisLine={{ stroke: '#E0E0E0' }}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: '#666' }}
                      tickFormatter={(value) => `$${value}`}
                      axisLine={{ stroke: '#E0E0E0' }}
                      label={{
                        value: 'Revenue ($)',
                        angle: -90,
                        position: 'insideLeft',
                        style: { textAnchor: 'middle', fill: '#666', fontSize: 12 }
                      }}
                    />
                    <Tooltip
                      formatter={(value: any, name: string) => [
                        `$${Number(value).toFixed(2)}`,
                        name.split('_')[0].charAt(0).toUpperCase() + name.split('_')[0].slice(1) + ' Package'
                      ]}
                      contentStyle={{
                        fontSize: 12,
                        backgroundColor: 'rgba(255, 255, 255, 0.96)',
                        border: '1px solid #E0E0E0',
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    />
                    {packageFilters.eko && (
                      <Line
                        type="monotone"
                        dataKey="eko_revenue"
                        name="eko_revenue"
                        stroke="#8B5CF6"
                        strokeWidth={2}
                        dot={{ fill: '#8B5CF6', r: 4 }}
                      />
                    )}
                    {packageFilters.premium && (
                      <Line
                        type="monotone"
                        dataKey="premium_revenue"
                        name="premium_revenue"
                        stroke="#D946EF"
                        strokeWidth={2}
                        dot={{ fill: '#D946EF', r: 4 }}
                      />
                    )}
                    {packageFilters.simple && (
                      <Line
                        type="monotone"
                        dataKey="simple_revenue"
                        name="simple_revenue"
                        stroke="#EC4899"
                        strokeWidth={2}
                        dot={{ fill: '#EC4899', r: 4 }}
                      />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerMetrics; 