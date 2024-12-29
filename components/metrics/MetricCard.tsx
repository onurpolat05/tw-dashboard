import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface YearlyData {
  year: string;
  value: string | number;
}

interface MetricCardProps {
  title: string;
  yearlyData: YearlyData[];
  average: string | number;
  colorScheme: 'purple' | 'fuchsia' | 'indigo';
  valuePrefix?: string;
  valueSuffix?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  yearlyData,
  average,
  colorScheme,
  valuePrefix = '',
  valueSuffix = '',
}) => {
  return (
    <Card className={`overflow-hidden bg-gradient-to-br from-${colorScheme}-50 to-white border border-${colorScheme}-100 transition-all hover:shadow-md`}>
      <CardHeader className={`p-3 text-center border-b border-${colorScheme}-100/30`}>
        <CardTitle className={`text-lg font-semibold text-${colorScheme}-900`}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="space-y-3">
          <div className="flex justify-between items-baseline px-2">
            {yearlyData.map((data) => (
              <div key={data.year} className="text-center">
                <p className={`text-base font-bold text-${colorScheme}-700`}>
                  {valuePrefix}{data.value}{valueSuffix}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500">{data.year}</p>
              </div>
            ))}
          </div>
          <div className={`pt-3 border-t border-${colorScheme}-100`}>
            <div className="text-center">
              <p className={`text-xl font-bold text-${colorScheme}-700`}>
                {valuePrefix}{average}{valueSuffix}
              </p>
              <p className={`mt-1 text-xs font-medium text-${colorScheme}-600`}>3 Year Average</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard; 