import React from 'react';

const MainTab: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[40vh]">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">News Aggregator</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-6">Work in progress. Stay tuned for aggregated news articles!</p>
    <div className="flex space-x-2 mt-2">
      <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
      <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
      <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
    </div>
  </div>
);

export default MainTab; 