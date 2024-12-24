import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface SubscriptionData {
  name: string;
  users: number;
  revenue: number;
  transactions: number;
  avgTransactionValue: number;
  revenueShare: number;
  color: string;
}

// Mock data moved into the component
const mockSubscriptionData: SubscriptionData[] = [
  { 
    name: 'Eko Package', 
    users: 14, 
    revenue: 429.53, 
    transactions: 43,
    avgTransactionValue: 9.99,
    revenueShare: 20.21,
    color: '#9333EA'
  },
  { 
    name: 'Premium Package', 
    users: 8, 
    revenue: 1236.61, 
    transactions: 25,
    avgTransactionValue: 49.46,
    revenueShare: 58.18,
    color: '#D946EF'
  },
  { 
    name: 'Simple Package', 
    users: 5, 
    revenue: 459.50, 
    transactions: 13,
    avgTransactionValue: 35.35,
    revenueShare: 21.62,
    color: '#A855F7'
  }
];

const SubscriptionDistribution: React.FC = () => {
  const totalUsers = mockSubscriptionData.reduce((acc, curr) => acc + curr.users, 0);
  const totalRevenue = mockSubscriptionData.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalTransactions = mockSubscriptionData.reduce((acc, curr) => acc + curr.transactions, 0);

  return (
    <Card className="p-6 mb-8">
      <CardHeader className="px-0 pt-0 pb-6">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Package Distribution & Metrics</CardTitle>
          <div className="text-sm text-gray-500">
            Total Revenue: <span className="font-medium">${totalRevenue.toFixed(2)}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 space-y-8">
        {/* Package Overview Cards */}
        <div className="grid grid-cols-3 gap-6">
          {mockSubscriptionData.map((subscription) => (
            <div
              key={subscription.name}
              className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
              style={{ 
                borderLeft: `4px solid ${subscription.color}`,
                backgroundColor: `${subscription.color}08`
              }}
            >
              <h4 className="mb-3 text-base font-medium text-gray-900">
                {subscription.name}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Users</p>
                  <p className="text-sm font-medium text-gray-900">
                    {subscription.users}
                    <span className="ml-1 text-xs text-gray-500">
                      ({((subscription.users / totalUsers) * 100).toFixed(1)}%)
                    </span>
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Revenue</p>
                  <p className="text-sm font-medium text-gray-900">
                    ${subscription.revenue.toFixed(2)}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Transactions</p>
                  <p className="text-sm font-medium text-gray-900">
                    {subscription.transactions}
                    <span className="ml-1 text-xs text-gray-500">
                      ({((subscription.transactions / totalTransactions) * 100).toFixed(1)}%)
                    </span>
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Avg. Value</p>
                  <p className="text-sm font-medium text-gray-900">
                    ${subscription.avgTransactionValue.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* Revenue Share Distribution */}
          <div className="h-[280px]">
            <p className="mb-4 text-sm font-medium text-gray-900">Revenue Share Distribution</p>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mockSubscriptionData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                barSize={24}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  type="number" 
                  tickFormatter={(value) => `${value.toFixed(1)}%`}
                  domain={[0, 100]}
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                  width={120}
                />
                <Tooltip
                  formatter={(value: number) => [`${value.toFixed(1)}%`, 'Revenue Share']}
                  contentStyle={{
                    fontSize: 12,
                    backgroundColor: 'rgba(255, 255, 255, 0.96)',
                    border: '1px solid #E5E7EB',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                />
                <Bar dataKey="revenueShare" name="Revenue Share" radius={[0, 4, 4, 0]}>
                  {mockSubscriptionData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} fillOpacity={0.9} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Transaction Value Distribution */}
          <div className="h-[280px]">
            <p className="mb-4 text-sm font-medium text-gray-900">Transaction Distribution</p>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mockSubscriptionData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                barSize={24}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  type="number"
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                  width={120}
                />
                <Tooltip
                  formatter={(value: number) => [value, 'Transactions']}
                  contentStyle={{
                    fontSize: 12,
                    backgroundColor: 'rgba(255, 255, 255, 0.96)',
                    border: '1px solid #E5E7EB',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                />
                <Bar dataKey="transactions" name="Transactions" radius={[0, 4, 4, 0]}>
                  {mockSubscriptionData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} fillOpacity={0.9} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionDistribution; 