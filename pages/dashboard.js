
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Speedometer from '../components/Speedometer';
import ZoomableSunburst from '../components/ZoomableSunburst';
import LineChart from '../components/LineChart';
import ZoomableIcicle from '../components/ZoomableIcicle';
import { placeholderData } from '../data/placeholder-data';

export default function Dashboard() {
  const sunburstData = {
    name: "flare",
    children: [
      {name: "analytics", children: [
        {name: "cluster", children: [
          {name: "AgglomerativeCluster", value: 3938},
          {name: "CommunityStructure", value: 3812},
          {name: "HierarchicalCluster", value: 6714},
          {name: "MergeEdge", value: 743}
        ]},
        {name: "graph", children: [
          {name: "BetweennessCentrality", value: 3534},
          {name: "LinkDistance", value: 5731},
          {name: "MaxFlowMinCut", value: 7840},
          {name: "ShortestPath", value: 5914},
          {name: "SpanningTree", value: 3416}
        ]},
        {name: "optimization", children: [
          {name: "AspectRatioBanker", value: 7074}
        ]}
      ]}
    ]
  };

  const lineChartData = [
    {x: 0, y: 25},    // Jan
    {x: 10, y: 35},   // Feb
    {x: 20, y: 28},   // Mar
    {x: 30, y: 45},   // Apr
    {x: 40, y: 38},   // May
    {x: 50, y: 52},   // Jun
    {x: 60, y: 48},   // Jul
    {x: 70, y: 58},   // Aug
    {x: 80, y: 55},   // Sep
    {x: 90, y: 65},   // Oct
    {x: 100, y: 62},  // Nov
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Head>
        <title>Dashboard - Bridge</title>
        <meta name="description" content="Bridge Dashboard" />
        <link rel="icon" href="/images/bridge.svg" />
      </Head>

      <Header />

      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        <h1 className="text-4xl font-ocr-a mb-8 text-center">Dashboard</h1>
        <div className="flex flex-col lg:flex-row h-full gap-4">
          {/* Left Half */}
          <div className="w-full lg:w-1/2 bg-gray-900 rounded-lg p-4 aspect-square">
            <h2 className="text-2xl font-ocr-a mb-4">Current Debt</h2>
            <Speedometer value={95} />
          </div>

          {/* Right Half */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 aspect-square">
            <div className="bg-gray-800 rounded-lg p-4 aspect-square">
              <h3 className="text-xl font-ocr-a">Zoomable Sunburst</h3>
              <ZoomableSunburst data={sunburstData} />
            </div>
            <div className="bg-gray-800 rounded-lg p-4 aspect-square">
              <h3 className="text-xl font-ocr-a">History</h3>
              <LineChart data={lineChartData} />
            </div>
            <div className="bg-gray-800 rounded-lg p-4 aspect-square">
              <h3 className="text-xl font-ocr-a">Debt Breakdown</h3>
              <ZoomableIcicle data={sunburstData} />
            </div>
            <div className="bg-gray-800 rounded-lg p-4 aspect-square">
              <h3 className="text-xl font-ocr-a">Predicted Debt</h3>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
