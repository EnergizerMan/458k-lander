
import React from 'react';

const PlaybookMockup = () => {
  return (
    <div className="relative w-full max-w-md mx-auto animate-float">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 transform rotate-3 rounded-lg shadow-xl"></div>
      <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 text-white p-6 rounded-lg shadow-2xl transform -rotate-3">
        <div className="border-2 border-white border-opacity-30 p-4 rounded">
          <h3 className="text-xl font-bold mb-1">$458K in 30 Days</h3>
          <h4 className="text-lg font-medium mb-4">The AI GTM Playbook</h4>
          <div className="space-y-2 mb-6">
            <div className="h-2 bg-white bg-opacity-30 rounded w-full"></div>
            <div className="h-2 bg-white bg-opacity-30 rounded w-3/4"></div>
            <div className="h-2 bg-white bg-opacity-30 rounded w-5/6"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-12 h-12 rounded-full bg-white bg-opacity-20"></div>
            <div className="space-y-1">
              <div className="h-1.5 bg-white bg-opacity-30 rounded w-16"></div>
              <div className="h-1.5 bg-white bg-opacity-30 rounded w-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaybookMockup;
