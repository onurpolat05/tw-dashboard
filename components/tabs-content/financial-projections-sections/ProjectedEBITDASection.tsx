import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingDown, Scale, TrendingUp, DollarSign, Building, Users } from 'lucide-react';

const ProjectedEBITDASection = () => {
  const scenarios = [
    {
      icon: TrendingDown,
      title: 'Conservative',
      value: '$285.17K',
      margin: '25%',
      description: 'Higher costs, slower growth',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-500',
      valueColor: 'text-red-500',
    },
    {
      icon: Scale,
      title: 'Base Case',
      value: '$444.60K',
      margin: '35%',
      description: 'Expected trajectory',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-500',
      valueColor: 'text-yellow-500',
    },
    {
      icon: TrendingUp,
      title: 'Optimistic',
      value: '$677.23K',
      margin: '45%',
      description: 'Accelerated growth',
      iconBg: 'bg-[#4ADE80]/10',
      iconColor: 'text-[#4ADE80]',
      valueColor: 'text-[#4ADE80]',
    },
  ];

  const costStructure = [
    {
      icon: Building,
      category: 'Operating Expenses',
      items: [
        {
          label: 'Staff Costs',
          values: ['45%', '40%', '35%'],
          colors: ['text-red-500', 'text-yellow-500', 'text-[#4ADE80]'],
        },
        {
          label: 'Marketing',
          values: ['15%', '12%', '10%'],
          colors: ['text-red-500', 'text-yellow-500', 'text-[#4ADE80]'],
        },
        {
          label: 'Infrastructure',
          values: ['10%', '8%', '7%'],
          colors: ['text-red-500', 'text-yellow-500', 'text-[#4ADE80]'],
        },
      ],
    },
    {
      icon: Users,
      category: 'Growth Investments',
      items: [
        {
          label: 'R&D',
          values: ['12%', '15%', '18%'],
          colors: ['text-red-500', 'text-yellow-500', 'text-[#4ADE80]'],
        },
        {
          label: 'Market Expansion',
          values: ['8%', '10%', '12%'],
          colors: ['text-red-500', 'text-yellow-500', 'text-[#4ADE80]'],
        },
        {
          label: 'Customer Success',
          values: ['10%', '12%', '15%'],
          colors: ['text-red-500', 'text-yellow-500', 'text-[#4ADE80]'],
        },
      ],
    },
  ];

  const keyAssumptions = [
    {
      label: 'Revenue Growth',
      values: [
        { value: '35%', color: 'text-red-500' },
        { value: '45%', color: 'text-yellow-500' },
        { value: '55%', color: 'text-[#4ADE80]' },
      ],
    },
    {
      label: 'Gross Margin',
      values: [
        { value: '70%', color: 'text-red-500' },
        { value: '75%', color: 'text-yellow-500' },
        { value: '80%', color: 'text-[#4ADE80]' },
      ],
    },
    {
      label: 'Operating Leverage',
      values: [
        { value: '1.2x', color: 'text-red-500' },
        { value: '1.5x', color: 'text-yellow-500' },
        { value: '1.8x', color: 'text-[#4ADE80]' },
      ],
    },
  ];

  return (
    <Card className="p-4 md:p-6 bg-[#F8F8F8]">
      <div className="space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-[#20152E]">
              Projected EBITDA Analysis
            </h2>
            <p className="text-base md:text-lg text-[#20152E]">
              Monthly EBITDA Projections Under Different Scenarios (2027)
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-sm text-gray-600 md:text-base">
            Analysis of projected EBITDA based on different growth scenarios and operational efficiency assumptions.
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 ${scenario.iconBg} rounded-lg`}>
                      <scenario.icon className={`w-8 h-8 ${scenario.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#20152E]">{scenario.title}</h3>
                  </div>
                </div>
                <div className="py-4 text-center">
                  <p className={`text-3xl font-bold ${scenario.valueColor}`}>{scenario.value}</p>
                  <p className={`text-lg font-medium ${scenario.valueColor} mt-1`}>
                    {scenario.margin} margin
                  </p>
                </div>
                <p className="text-sm text-gray-600">{scenario.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cost Structure */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
          {costStructure.map((section, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <section.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#20152E]">{section.category}</h4>
                </div>
                <div className="space-y-3">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{item.label}</span>
                      <div className="flex space-x-4">
                        {item.values.map((value, vIdx) => (
                          <span key={vIdx} className={`text-sm font-medium ${item.colors[vIdx]}`}>
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Assumptions */}
        <div className="p-6 bg-white rounded-lg border border-gray-100">
          <h4 className="text-lg font-semibold text-[#20152E] mb-4">Key Assumptions</h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {keyAssumptions.map((assumption, index) => (
              <div key={index} className="space-y-2">
                <h5 className="text-sm font-medium text-[#20152E]">{assumption.label}</h5>
                <div className="flex justify-between items-center">
                  {assumption.values.map((value, idx) => (
                    <div key={idx} className="text-center">
                      <p className={`text-sm font-medium ${value.color}`}>{value.value}</p>
                      <p className="text-xs text-gray-500">
                        {idx === 0 ? 'Conservative' : idx === 1 ? 'Base' : 'Optimistic'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectedEBITDASection; 