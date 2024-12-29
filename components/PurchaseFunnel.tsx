import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Megaphone, Calendar, Video, Users } from 'lucide-react';

interface PurchaseFunnelData {
  stage: string;
  count: number;
  color: string;
}

const mockPurchaseFunnelData: PurchaseFunnelData[] = [
  { stage: 'Total Reach', count: 179368, color: '#9333EA' },
  { stage: 'Page Views', count: 97876, color: '#A855F7' },
  { stage: 'Visitors', count: 11778, color: '#B575F7' },
  { stage: 'Registrations', count: 210, color: '#C495F7' },
  { stage: 'Paid Customers', count: 41, color: '#D4B5F7' }
];

const PurchaseFunnel: React.FC = () => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const campaignMetrics = [
    {
      title: 'Ad Campaigns & Coupons',
      value: '12',
      icon: Megaphone,
      description: 'Targeted campaigns and discount offers',
      gradient: 'from-violet-50 to-white',
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-600'
    },
    {
      title: 'Digital Marketing Days',
      value: '82',
      icon: Calendar,
      description: 'Days of active marketing',
      gradient: 'from-fuchsia-50 to-white',
      iconBg: 'bg-fuchsia-100',
      iconColor: 'text-fuchsia-600'
    },
    {
      title: 'Webinars Delivered',
      value: '16',
      icon: Video,
      description: 'Educational sessions',
      gradient: 'from-purple-50 to-white',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'E-commerce Partnerships',
      value: '5',
      icon: Users,
      description: 'Advisor collaborations',
      gradient: 'from-pink-50 to-white',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    }
  ];

  return (
    <div className="overflow-x-auto pb-2 w-full">
      <div className="min-w-[768px]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap-8">
          {/* Funnel Chart */}
          <Card className="flex flex-col p-4 h-full md:p-6">
            <CardHeader className="flex-none px-0 pt-0">
              <div className="flex flex-col gap-2 justify-between mb-4 md:flex-row md:items-center md:gap-0 md:mb-6">
                <div>
                  <CardTitle className="mb-1 text-lg md:text-xl">Customer Conversion Funnel</CardTitle>
                </div>
                <span className="text-xs font-medium text-purple-600 md:text-sm">Total Spend: $300.31</span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 justify-center p-0">
              <div className="space-y-3 md:space-y-4">
                {mockPurchaseFunnelData.map((item, index) => {
                  const scaleWidth = 1 - (index * 0.15);
                  const heightPx = 52;
                  
                  return (
                    <div 
                      key={item.stage} 
                      className="relative mx-auto"
                      style={{
                        width: `${scaleWidth * 100}%`,
                        height: `${heightPx}px`,
                        marginTop: index === 0 ? '0' : '-12px',
                        maxWidth: '900px'
                      }}
                    >
                      <div
                        className="flex absolute inset-0 justify-between items-center px-4 transition-all duration-300 md:px-8 hover:opacity-90"
                        style={{
                          backgroundColor: item.color,
                          clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)',
                          height: '100%',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                      >
                        <span className="text-sm font-medium text-white md:text-base lg:text-lg">
                          {item.stage}
                        </span>
                        <span className="text-sm font-bold text-white md:text-base lg:text-lg">
                          {formatNumber(item.count)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Calculated Metrics */}
              <div className="pt-4 mt-6 border-t border-gray-200 md:pt-6 md:mt-8">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="text-center">
                    <p className="mb-1 text-sm text-gray-600 md:text-base">Conversion Rate</p>
                    <p className="text-xl font-bold text-purple-600 md:text-2xl">0.02%</p>
                  </div>
                  <div className="text-center">
                    <p className="mb-1 text-sm text-gray-600 md:text-base">Cost per Customer</p>
                    <p className="text-xl font-bold text-purple-600 md:text-2xl">$7.32</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Campaign Performance Cards */}
          <div className="space-y-3 md:space-y-4">
            {campaignMetrics.map((metric) => (
              <Card 
                key={metric.title} 
                className={`p-3 md:p-4 bg-gradient-to-br ${metric.gradient} border-${metric.iconColor.split('-')[1]}-100 hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className={`p-2 md:p-3 ${metric.iconBg} rounded-lg`}>
                    <metric.icon className={`w-5 h-5 md:w-6 md:h-6 ${metric.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 md:text-lg">{metric.value}</h3>
                        <p className="text-xs text-gray-600 md:text-sm">{metric.title}</p>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">{metric.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Additional Performance Metrics */}
            <Card className="p-3 bg-gradient-to-br from-indigo-50 to-white border-indigo-100 md:p-4">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="p-2 text-center bg-white rounded-lg shadow-sm md:p-3">
                  <p className="text-xs text-gray-600 md:text-sm">Visitor to Registration</p>
                  <p className="text-lg font-bold text-indigo-600 md:text-xl">1.8%</p>
                </div>
                <div className="p-2 text-center bg-white rounded-lg shadow-sm md:p-3">
                  <p className="text-xs text-gray-600 md:text-sm">Registration to Customer</p>
                  <p className="text-lg font-bold text-indigo-600 md:text-xl">19.5%</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseFunnel; 