import React from 'react';
import MRRDashboard from '@/components/MrrDashboard';

const MRRDashboardPage = () => {
  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold dark:text-white">MRR Analytics Dashboard</h1>
      <MRRDashboard />
    </div>
  );
};

export default MRRDashboardPage; 