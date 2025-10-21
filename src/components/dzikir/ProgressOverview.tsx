import React from 'react';
import { Heart } from 'lucide-react';

interface ProgressOverviewProps {
  currentDzikirList: any[];
  currentDzikirIndex: number;
  counter: number;
}

const ProgressOverview: React.FC<ProgressOverviewProps> = ({ 
  currentDzikirList, 
  currentDzikirIndex,
  counter
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
      <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center">
        <Heart className="w-5 h-5 mr-2" />
        Kemajuan Anda
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {currentDzikirList.map((dzikir, index) => (
          <div
            key={dzikir.id}
            className={`p-3 rounded-lg border-2 transition-all ${index === currentDzikirIndex
                ? 'border-emerald-500 bg-emerald-50'
                : counter >= dzikir.count && index < currentDzikirIndex
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
          >
            <div className="text-center">
              <div className="text-xs font-medium text-gray-700 mb-1">
                {dzikir.title.split(' ')[0]}
              </div>
              <div className="text-xs text-gray-500">
                {counter >= dzikir.count && index <= currentDzikirIndex ? '✓' : `${counter}/${dzikir.count}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressOverview;