import React from 'react';

const FinancialImpact = () => {
  // Financial data for a medium-sized company with legacy systems
  const currentQuarterCost = 284000;
  const previousQuarterCost = 312000;
  const bridgeSavings = 156000;
  const costChange = currentQuarterCost - previousQuarterCost;
  const costChangePercent = ((costChange / previousQuarterCost) * 100).toFixed(1);
  const isImprovement = costChange < 0;

  // Breakdown of tech debt costs
  const costBreakdown = [
    { category: "Developer Productivity Loss", amount: 142000, percentage: 50 },
    { category: "Bug Fixes & Maintenance", amount: 85200, percentage: 30 },
    { category: "System Downtime", amount: 28400, percentage: 10 },
    { category: "Security Vulnerabilities", amount: 28400, percentage: 10 }
  ];

  // Bridge ROI calculation
  const bridgeROI = ((bridgeSavings / currentQuarterCost) * 100).toFixed(0);

  return (
    <div className="h-full flex flex-col space-y-3">
      {/* Main Financial Impact */}
      <div className="text-center">
        <div className="text-2xl font-ocr-a text-gray-300 mb-1">Q3 2024 Tech Debt Cost</div>
        <div className="text-4xl font-ocr-a font-bold text-red-400 mb-2">
          ${(currentQuarterCost / 1000).toFixed(0)}k
        </div>
        
        {/* Quarter over Quarter Change */}
        <div className="flex items-center justify-center space-x-2 mb-3">
          <span className={`text-lg ${isImprovement ? 'text-green-400' : 'text-red-400'}`}>
            {isImprovement ? '↓' : '↑'}
          </span>
          <span className={`text-sm font-jetbrains-mono ${isImprovement ? 'text-green-400' : 'text-red-400'}`}>
            {Math.abs(costChangePercent)}% from Q2
          </span>
        </div>
      </div>

      {/* Bridge Savings Highlight */}
      <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 rounded-lg p-3 border border-green-500/20">
        <div className="text-center">
          <div className="text-sm font-ocr-a text-green-400 mb-1">Bridge Savings</div>
          <div className="text-2xl font-ocr-a font-bold text-green-300">
            ${(bridgeSavings / 1000).toFixed(0)}k
          </div>
          <div className="text-xs font-jetbrains-mono text-green-400">
            {bridgeROI}% ROI this quarter
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div>
        <div className="text-sm font-ocr-a text-gray-300 mb-2">Cost Breakdown</div>
        <div className="space-y-1">
          {costBreakdown.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ 
                    backgroundColor: index === 0 ? '#ff6b6b' : 
                                 index === 1 ? '#ffa726' : 
                                 index === 2 ? '#ffd93d' : '#6bcf7f' 
                  }}
                ></div>
                <span className="text-xs font-jetbrains-mono text-gray-300 truncate">
                  {item.category}
                </span>
              </div>
              <div className="text-xs font-jetbrains-mono text-gray-400">
                ${(item.amount / 1000).toFixed(0)}k
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-gray-700/50 rounded p-2">
          <div className="text-xs font-ocr-a text-gray-400">Avg. Dev Hours Lost</div>
          <div className="text-sm font-jetbrains-mono font-bold text-yellow-400">127 hrs</div>
        </div>
        <div className="bg-gray-700/50 rounded p-2">
          <div className="text-xs font-ocr-a text-gray-400">System Uptime</div>
          <div className="text-sm font-jetbrains-mono font-bold text-green-400">94.2%</div>
        </div>
      </div>
    </div>
  );
};

export default FinancialImpact; 