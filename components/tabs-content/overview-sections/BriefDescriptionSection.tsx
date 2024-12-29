import React from 'react';
import { Sparkles } from 'lucide-react';

const BriefDescriptionSection = () => {
  const features = [
    {
      title: 'Smart Automation',
      description: 'Automated inventory management and pricing optimization for maximum efficiency',
    },
    {
      title: 'Market Intelligence',
      description: 'Real-time market analysis and competitor tracking for informed decision-making',
    },
    {
      title: 'Growth Analytics',
      description: 'Comprehensive performance metrics and growth forecasting tools',
    },
  ];

  return (
    <div className="p-5 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100">
      <div className="grid grid-cols-1 gap-6">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-[#20152E]">Brief Description</h2>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-[#20152E] leading-relaxed">
            TradeWizz is an <span className="font-medium">AI-powered e-commerce management platform</span> designed to help online sellers optimize their operations, increase profitability, and scale their businesses. Our platform leverages advanced artificial intelligence to provide:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-purple-100">
                <h3 className="text-sm font-medium text-purple-600 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-[#20152E] leading-relaxed">
            Our platform currently focuses on Amazon sellers, with plans to expand to other major e-commerce platforms, providing a comprehensive solution for multi-channel online retail management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BriefDescriptionSection; 