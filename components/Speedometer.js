
import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const Speedometer = ({ value }) => {
  // Function to determine debt level and color
  const getDebtLevel = (val) => {
    if (val >= 70) return { level: 'HIGH', color: '#ff6b6b' };
    if (val >= 40) return { level: 'MEDIUM', color: '#ffd93d' };
    return { level: 'LOW', color: '#6bcf7f' };
  };

  const debtLevel = getDebtLevel(value);

  // Function to get insights based on debt level
  const getInsights = (val) => {
    if (val >= 70) {
      return {
        title: "Critical Action Required",
        description: "Your tech debt is at a critical level. Immediate refactoring of core systems is needed to prevent development velocity from grinding to a halt.",
        recommendations: [
          "Prioritize legacy system modernization",
          "Implement automated testing coverage",
          "Establish code review standards",
          "Consider technical debt sprints"
        ]
      };
    } else if (val >= 40) {
      return {
        title: "Moderate Attention Needed",
        description: "Tech debt is manageable but requires strategic planning to prevent escalation.",
        recommendations: [
          "Schedule regular refactoring sessions",
          "Improve documentation practices",
          "Monitor debt accumulation trends"
        ]
      };
    } else {
      return {
        title: "Well Maintained",
        description: "Excellent technical practices! Continue maintaining this healthy codebase.",
        recommendations: [
          "Maintain current development practices",
          "Regular code quality reviews",
          "Share best practices with team"
        ]
      };
    }
  };

  const insights = getInsights(value);

  return (
    <div className="flex flex-col items-center">
      <ReactSpeedometer
        value={value}
        minValue={0}
        maxValue={100}
        segments={100}
        maxSegmentLabels={0}
        startColor="#6bcf7f"
        endColor="#ff6b6b"
        needleColor="#ffffff"
        needleHeightRatio={0.8}
        ringWidth={60}
        textColor="#ffffff"
        valueTextFontSize="24px"
        valueTextFontWeight="bold"
        currentValueText={`${value}%`}
        width={300}
        height={200}
        needleTransitionDuration={1000}
        needleTransition="easeElastic"
      />
      
      {/* Debt level label */}
      <div 
        className="mt-4 text-center"
        style={{ color: debtLevel.color }}
      >
        <div className="text-3xl font-ocr-a font-bold">
          {debtLevel.level}
        </div>
        <div className="text-sm font-jetbrains-mono text-gray-400 mt-1">
          Tech Debt Score
        </div>
      </div>

      {/* Insights Section */}
      <div className="mt-6 w-full">
        <h3 className="text-lg font-ocr-a text-white mb-3">Insights</h3>
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-md font-ocr-a mb-2" style={{ color: debtLevel.color }}>
            {insights.title}
          </h4>
          <p className="text-sm font-jetbrains-mono text-gray-300 mb-3 leading-relaxed">
            {insights.description}
          </p>
          <div className="space-y-1">
            {insights.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start">
                <span className="text-xs text-gray-400 mr-2 mt-1">•</span>
                <span className="text-xs font-jetbrains-mono text-gray-300">
                  {rec}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speedometer;
