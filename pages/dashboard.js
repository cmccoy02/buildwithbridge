
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Speedometer from '../components/Speedometer';
import PieChart from '../components/PieChart';
import AreaChart from '../components/LineChart';
import ZoomableIcicle from '../components/ZoomableIcicle';
import { placeholderData } from '../data/placeholder-data';

// Predicted Debt Component
const PredictedDebt = ({ currentValue, predictedValue }) => {
  const difference = predictedValue - currentValue;
  const isImprovement = difference < 0;
  const absDifference = Math.abs(difference);
  
  // Color logic for predicted value
  const getPredictedColor = (val) => {
    if (val >= 70) return '#ff6b6b'; // Red
    if (val >= 40) return '#ffd93d'; // Yellow
    return '#6bcf7f'; // Green
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Predicted Value */}
      <div 
        className="text-6xl font-ocr-a font-bold mb-4"
        style={{ color: getPredictedColor(predictedValue) }}
      >
        {predictedValue}
      </div>
      
      {/* Arrow and Difference */}
      <div className="flex items-center space-x-2">
        <span 
          className={`text-2xl ${isImprovement ? 'text-green-400' : 'text-red-400'}`}
        >
          {isImprovement ? '↓' : '↑'}
        </span>
        <span 
          className={`text-xl font-jetbrains-mono font-bold ${
            isImprovement ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {absDifference}
        </span>
      </div>
    </div>
  );
};

// Prioritized Debt Component
const PrioritizedDebt = () => {
  const debtItems = [
    {
      name: "Legacy Authentication System",
      impact: "Critical",
      color: "#ff6b6b", // Red
      description: "Outdated OAuth implementation causing security vulnerabilities"
    },
    {
      name: "Monolithic Database Architecture", 
      impact: "High",
      color: "#ffa726", // Orange (fits between yellow and green)
      description: "Single database handling all services, creating bottlenecks"
    },
    {
      name: "Missing Test Coverage",
      impact: "Medium",
      color: "#ffd93d", // Yellow
      description: "Only 45% test coverage, increasing deployment risks"
    },
    {
      name: "Deprecated Dependencies",
      impact: "Low",
      color: "#6bcf7f", // Green
      description: "23 outdated packages with known security issues"
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 space-y-3">
        {debtItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 bg-gray-700 rounded-lg">
            {/* Impact Indicator */}
            <div 
              className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
              style={{ backgroundColor: item.color }}
            ></div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-ocr-a text-white truncate">
                  {item.name}
                </h4>
                <span 
                  className="text-xs font-jetbrains-mono px-2 py-1 rounded"
                  style={{ 
                    backgroundColor: item.color + '20',
                    color: item.color
                  }}
                >
                  {item.impact}
                </span>
              </div>
              <p className="text-xs font-jetbrains-mono text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Dashboard() {
  // Data for pie chart showing repo components and their debt contributions
  const pieChartData = [
    { name: "Frontend Components", value: 35 },
    { name: "API Services", value: 28 },
    { name: "Database Layer", value: 22 },
    { name: "Authentication", value: 15 }
  ];

  // Updated data for area chart - months leading to August
  const areaChartData = [
    {x: 0, y: 2.5},   // Mar
    {x: 1, y: 3.5},   // Apr
    {x: 2, y: 2.8},   // May
    {x: 3, y: 4.5},   // Jun
    {x: 4, y: 3.8},   // Jul
    {x: 5, y: 5.2},   // Aug (current)
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Head>
        <title>Dashboard - Bridge</title>
        <meta name="description" content="Bridge Dashboard" />
        <link rel="icon" href="/images/bridge.svg" />
      </Head>

      <Header />

      <main className="flex-grow p-6 lg:p-8">
        <h1 className="text-4xl font-ocr-a mb-8 text-center">Dashboard</h1>
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Left Column - Large Tile */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-xl p-6 h-full">
              <h2 className="text-2xl font-ocr-a mb-6">Current Debt</h2>
              <Speedometer value={95} />
            </div>
          </div>

          {/* Right Column - 2x2 Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6 h-full">
              
              {/* History Tile */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-ocr-a mb-4">History</h3>
                <AreaChart data={areaChartData} />
              </div>

              {/* Predicted Debt Tile */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-ocr-a mb-4">Predicted Debt</h3>
                <PredictedDebt currentValue={95} predictedValue={63} />
              </div>

              {/* Prioritized Debt Tile */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-ocr-a mb-4">Prioritized Debt</h3>
                <PrioritizedDebt />
              </div>

              {/* Debt Breakdown Tile */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-ocr-a mb-4">Debt Breakdown</h3>
                <PieChart data={pieChartData} />
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
