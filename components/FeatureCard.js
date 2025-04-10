import React from 'react';

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="p-6 border border-gray-800 rounded-lg bg-opacity-20 bg-gray-900 hover:bg-opacity-30 transition duration-300">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-ocr-a mb-3">{title}</h3>
      <p className="font-jetbrains-mono text-gray-400">{description}</p>
    </div>
  );
} 