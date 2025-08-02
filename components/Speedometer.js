
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

  return (
    <div className="flex flex-col items-center">
      <ReactSpeedometer
        value={value}
        minValue={0}
        maxValue={100}
        segments={5}
        segmentColors={[
          '#6bcf7f', // Green for low
          '#a8e6cf', // Light green
          '#ffd3b6', // Light orange
          '#ff8b94', // Light red
          '#ff6b6b'  // Red for high
        ]}
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
    </div>
  );
};

export default Speedometer;
