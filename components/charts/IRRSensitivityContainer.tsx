import React from 'react';
import IRRSensitivityHeatmap from './IRRSensitivityHeatmap';

// Generate data points for the heatmap
const generateHeatmapData = (values: number[][]) => {
  const data = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
      data.push({
        x: -30 + j * 10, // Revenue change from -30 to 30
        y: -30 + i * 10, // Cost change from -30 to 30
        value: values[i][j]
      });
    }
  }
  return data;
};

// Best case data
const bestCaseValues = [
  [43.6, 48.0, 51.9, 55.4, 58.7, 61.7, 64.6],
  [41.3, 45.8, 49.8, 53.5, 56.8, 59.9, 62.8],
  [38.9, 43.6, 47.8, 51.5, 54.9, 58.0, 61.0],
  [36.6, 41.4, 45.7, 49.5, 53.0, 56.2, 59.2],
  [34.1, 39.2, 43.6, 47.5, 51.1, 54.4, 57.4],
  [31.7, 37.0, 41.5, 45.6, 49.2, 52.5, 55.6],
  [29.2, 34.7, 39.4, 43.6, 47.3, 50.7, 53.9]
];

// Optimal case data
const optimalCaseValues = [
  [36.3, 40.7, 44.5, 48.0, 51.1, 54.0, 56.8],
  [33.7, 38.2, 42.2, 45.8, 49.0, 52.0, 54.8],
  [30.9, 35.7, 39.9, 43.6, 46.9, 50.0, 52.8],
  [28.1, 33.2, 37.5, 41.4, 44.8, 48.0, 50.9],
  [25.2, 30.6, 35.2, 39.2, 42.7, 46.0, 49.0],
  [22.1, 27.9, 32.8, 36.9, 40.6, 44.0, 47.0],
  [19.0, 25.2, 30.3, 34.7, 38.5, 41.9, 45.1]
];

// Worst case data
const worstCaseValues = [
  [25.8, 30.2, 34.1, 37.4, 40.5, 43.2, 45.8],
  [22.3, 27.2, 31.3, 34.9, 38.0, 40.9, 43.6],
  [18.7, 24.1, 28.5, 32.3, 35.6, 38.6, 41.4],
  [14.8, 20.8, 25.6, 29.6, 33.1, 36.3, 39.1],
  [10.6, 17.3, 22.6, 26.9, 30.6, 33.9, 36.9],
  [5.8, 13.6, 19.4, 24.1, 28.0, 31.5, 34.6],
  [0.4, 9.6, 16.1, 21.2, 25.4, 29.1, 32.3]
];

const IRRSensitivityContainer = () => {
  const bestCaseData = generateHeatmapData(bestCaseValues);
  const optimalCaseData = generateHeatmapData(optimalCaseValues);
  const worstCaseData = generateHeatmapData(worstCaseValues);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <IRRSensitivityHeatmap
          data={bestCaseData}
          title="Best Case - IRR Sensitivity (%)"
          maxValue={65}
        />
      </div>
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <IRRSensitivityHeatmap
          data={optimalCaseData}
          title="Optimal Case - IRR Sensitivity (%)"
          maxValue={57}
        />
      </div>
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <IRRSensitivityHeatmap
          data={worstCaseData}
          title="Worst Case - IRR Sensitivity (%)"
          maxValue={46}
        />
      </div>
    </div>
  );
};

export default IRRSensitivityContainer; 