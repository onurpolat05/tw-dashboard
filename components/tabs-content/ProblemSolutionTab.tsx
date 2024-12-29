import React from 'react';
import PainPointsSection from '@/components/pain-points/PainPointsSection';
import SolutionSection from '@/components/solution/SolutionSection';
import FeaturesDashboard from '@/components/features/FeaturesDashboard';

const ProblemSolutionTab = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <PainPointsSection />
      <SolutionSection />
      <FeaturesDashboard />
    </div>
  );
};

export default ProblemSolutionTab; 