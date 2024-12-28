import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const customerData = [
  { year: '2025', count: 1405 },
  { year: '2026', count: 4020 },
  { year: '2027', count: 10908 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white rounded-lg border border-cyan-100 shadow-sm">
        <p className="text-sm font-medium text-cyan-900">{`Year: ${label}`}</p>
        <p className="text-sm font-bold text-cyan-700">{`Customers: ${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const MetricsOverviewCard = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="border-b">
        <CardTitle className="text-lg font-semibold">Metrics Overview</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-6">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* First Metric Card - ACR */}
            <Card className="overflow-hidden bg-gradient-to-br from-purple-50 to-white border border-purple-100 transition-all hover:shadow-md">
              <CardHeader className="p-3 text-center border-b border-purple-100/30">
                <CardTitle className="text-lg font-semibold text-purple-900">ACR</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline px-2">
                    <div className="text-center">
                      <p className="text-base font-bold text-purple-700">15%</p>
                      <p className="mt-1 text-xs font-medium text-gray-500">2025</p>
                    </div>
                    <div className="text-center">
                      <p className="text-base font-bold text-purple-700">10%</p>
                      <p className="mt-1 text-xs font-medium text-gray-500">2026</p>
                    </div>
                    <div className="text-center">
                      <p className="text-base font-bold text-purple-700">7%</p>
                      <p className="mt-1 text-xs font-medium text-gray-500">2027</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-purple-100">
                    <div className="text-center">
                      <p className="text-xl font-bold text-purple-700">10.67%</p>
                      <p className="mt-1 text-xs font-medium text-purple-600">3 Year Average</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second Metric Card - NRR */}
            <Card className="overflow-hidden bg-gradient-to-br from-fuchsia-50 to-white border border-fuchsia-100 transition-all hover:shadow-md">
              <CardHeader className="p-3 text-center border-b border-fuchsia-100/30">
                <CardTitle className="text-lg font-semibold text-fuchsia-900">NRR</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline px-2">
                    <div className="text-center">
                      <p className="text-base font-bold text-fuchsia-700">3.23x</p>
                      <p className="mt-1 text-xs font-medium text-gray-500">2025</p>
                    </div>
                    <div className="text-center">
                      <p className="text-base font-bold text-fuchsia-700">1.48x</p>
                      <p className="mt-1 text-xs font-medium text-gray-500">2026</p>
                    </div>
                    <div className="text-center">
                      <p className="text-base font-bold text-fuchsia-700">1.23x</p>
                      <p className="mt-1 text-xs font-medium text-gray-500">2027</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-fuchsia-100">
                    <div className="text-center">
                      <p className="text-xl font-bold text-fuchsia-700">1.87x</p>
                      <p className="mt-1 text-xs font-medium text-fuchsia-600">3 Year Average</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third Metric Card - System Cost */}
            <Card className="overflow-hidden bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 transition-all hover:shadow-md">
              <CardHeader className="p-3 text-center border-b border-indigo-100/30">
                <CardTitle className="text-lg font-semibold text-indigo-900">System Cost</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline px-2">
                    <div className="text-center">
                      <p className="text-base font-bold text-indigo-700">$5</p>
                      <p className="mt-1 text-xs font-medium text-gray-500">2025</p>
                    </div>
                    <div className="text-center">
                      <p className="text-base font-bold text-indigo-700">$5.12</p>
                      <p className="mt-1 text-xs font-medium text-gray-500">2026</p>
                    </div>
                    <div className="text-center">
                      <p className="text-base font-bold text-indigo-700">$5.12</p>
                      <p className="mt-1 text-xs font-medium text-gray-500">2027</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-indigo-100">
                    <div className="text-center">
                      <p className="text-xl font-bold text-indigo-700">$5.08</p>
                      <p className="mt-1 text-xs font-medium text-indigo-600">3 Year Average</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customer Count Chart */}
          <Card className="overflow-hidden bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 transition-all hover:shadow-md">
            <CardHeader className="p-3 text-center border-b border-cyan-100/30">
              <CardTitle className="text-lg font-semibold text-cyan-900">Customer Count Chart</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={customerData} 
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                  >
                    <XAxis 
                      type="number"
                      fontSize={12}
                      tickLine={false}
                      axisLine={{ stroke: '#E5E7EB' }}
                      tickFormatter={(value) => value.toLocaleString()}
                    />
                    <YAxis 
                      type="category"
                      dataKey="year"
                      fontSize={12}
                      tickLine={false}
                      axisLine={{ stroke: '#E5E7EB' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="count" 
                      fill="#0891b2" 
                      radius={[0, 4, 4, 0]}
                      barSize={30}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsOverviewCard; 