import React from 'react';
import TestDurationSection from './traction-sections/TestDurationSection';
import TotalCustomersSection from './traction-sections/TotalCustomersSection';
import TrialToConversionSection from './traction-sections/TrialToConversionSection';
import CustomerAcquisitionSection from './traction-sections/CustomerAcquisitionSection';
import KeyLearningsSection from './traction-sections/KeyLearningsSection';

const TractionTab = () => {
  return (
    <div className="space-y-6">
      <TestDurationSection />
      <TotalCustomersSection />
      <TrialToConversionSection />
      <CustomerAcquisitionSection />
      <KeyLearningsSection />
    </div>
  );
};

export default TractionTab; 