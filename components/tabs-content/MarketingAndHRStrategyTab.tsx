import React from 'react';
import MarketingStrategy from '../marketing/MarketingStrategy';
import HRStrategy from '../hr/HRStrategy';

const MarketingAndHRStrategyTab = () => {
  return (
    <div className="space-y-12">
      <MarketingStrategy />
      <HRStrategy />
    </div>
  );
};

export default MarketingAndHRStrategyTab; 

