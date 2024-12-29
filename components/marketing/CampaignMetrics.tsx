import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Megaphone, 
  Calendar, 
  Video, 
  Users, 
  Building2, 
  ShoppingBag, 
  Globe, 
  Boxes, 
  HeartHandshake, 
  Store, 
  Package 
} from 'lucide-react';

const campaignMetrics = [
  {
    title: 'Small to Medium Enterprises',
    value: '400M',
    icon: Building2,
    description: 'Global SMEs using platform',
    gradient: 'from-violet-50 to-white',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600'
  },
  {
    title: 'E-commerce Startups',
    value: '30.7M',
    icon: Store,
    description: 'Worldwide e-commerce sites',
    gradient: 'from-fuchsia-50 to-white',
    iconBg: 'bg-fuchsia-100',
    iconColor: 'text-fuchsia-600'
  },
  {
    title: 'Online Retailers',
    value: '26.6M',
    icon: ShoppingBag,
    description: 'Independent online stores',
    gradient: 'from-purple-50 to-white',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    title: 'Marketplace Sellers',
    value: '250M',
    icon: Globe,
    description: 'Active marketplace sellers',
    gradient: 'from-pink-50 to-white',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600'
  },
  {
    title: 'Social Media Sellers',
    value: '5.17B',
    icon: Users,
    description: 'Social media commerce users',
    gradient: 'from-blue-50 to-white',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Dropshipping Market',
    value: '$301B',
    icon: Package,
    description: 'Market value in billions',
    gradient: 'from-indigo-50 to-white',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600'
  },
  {
    title: 'Manufacturers',
    value: '45K',
    icon: Boxes,
    description: 'Direct-to-consumer manufacturers',
    gradient: 'from-emerald-50 to-white',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600'
  },
  {
    title: 'NGOs',
    value: '10K',
    icon: HeartHandshake,
    description: 'Organizations using e-commerce',
    gradient: 'from-rose-50 to-white',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600'
  },
  {
    title: 'Local Artisans',
    value: '15K',
    icon: Video,
    description: 'Artisans selling globally',
    gradient: 'from-amber-50 to-white',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600'
  },
  {
    title: 'D2C Brands',
    value: '20K',
    icon: Store,
    description: 'Direct-to-consumer brands',
    gradient: 'from-cyan-50 to-white',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600'
  },
  {
    title: 'Subscription Services',
    value: '$37.5B',
    icon: Calendar,
    description: 'Market value in billions',
    gradient: 'from-teal-50 to-white',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600'
  }
];

const CampaignMetrics = () => {
  const lastMetric = campaignMetrics[10];

  return (
    <div className="space-y-6">
      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {campaignMetrics.slice(0, 10).map((metric) => (
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
      </div>

      {/* Centered Last Card */}
      <div className="flex justify-center">
        <div className="w-full md:w-1/2">
          <Card 
            className={`p-3 md:p-4 bg-gradient-to-br ${lastMetric.gradient} border-${lastMetric.iconColor.split('-')[1]}-100 hover:shadow-md transition-shadow duration-200`}
          >
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className={`p-2 md:p-3 ${lastMetric.iconBg} rounded-lg`}>
                <lastMetric.icon className={`w-5 h-5 md:w-6 md:h-6 ${lastMetric.iconColor}`} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 md:text-lg">{lastMetric.value}</h3>
                    <p className="text-xs text-gray-600 md:text-sm">{lastMetric.title}</p>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-500">{lastMetric.description}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>


    </div>
  );
};

export default CampaignMetrics; 