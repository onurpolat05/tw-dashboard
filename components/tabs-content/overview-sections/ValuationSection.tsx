import React from 'react';

const ValuationSection = () => {
  return (
    <div className="p-4 bg-gradient-to-br from-[#4ADE80]/10 to-white border border-[#4ADE80]/20 rounded-lg">
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-[#20152E]">Current Valuation</h2>
        <div className="text-2xl font-bold text-[#4ADE80]">$1.91M - $4.43M</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-600">Worst Case</p>
            <p className="text-lg font-semibold text-[#20152E]">$1.91M</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-600">Optimal Case</p>
            <p className="text-lg font-semibold text-[#20152E]">$3.18M</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-600">Best Case</p>
            <p className="text-lg font-semibold text-[#20152E]">$4.43M</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationSection; 