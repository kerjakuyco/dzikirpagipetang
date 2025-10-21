import React, { memo } from 'react';
import { Sun, Moon, Heart } from 'lucide-react';
import { DzikirItem } from '@/lib/data';

interface DzikirDisplayProps {
  activeTab: string;
  currentDzikir: DzikirItem;
  counter: number;
  currentDzikirIndex: number;
  currentDzikirList: DzikirItem[];
}

const DzikirDisplayComponent: React.FC<DzikirDisplayProps> = ({ 
  activeTab, 
  currentDzikir,
  counter,
  currentDzikirIndex,
  currentDzikirList
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-emerald-100">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
          {activeTab === 'pagi' ? (
            <Sun className="w-6 h-6 text-emerald-600" />
          ) : (
            <Moon className="w-6 h-6 text-emerald-600" />
          )}
        </div>
        <h2 className="text-2xl font-bold text-emerald-800 mb-2">
          {currentDzikir.title}
        </h2>
        <p className="text-emerald-600">Dzikir ke-{currentDzikirIndex + 1} dari {currentDzikirList.length}</p>
      </div>

      {/* Arabic Text */}
      <div className="text-center mb-6">
        <p className="text-2xl font-arabic text-gray-800 leading-relaxed mb-4 text-right" dir="rtl">
          {currentDzikir.arabic}
        </p>
        <p className="text-lg text-emerald-700 font-medium mb-2">
          {currentDzikir.latin}
        </p>
        <p className="text-gray-600 italic mb-2">
          &quot;{currentDzikir.translation}&quot;
        </p>
        {currentDzikir.reference && (
          <p className="text-sm text-gray-500">{currentDzikir.reference}</p>
        )}
      </div>

      {/* Counter */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 text-white rounded-full text-2xl font-bold mb-2">
          {counter}
        </div>
        <p className="text-sm text-gray-500">
          dari {currentDzikir.count} kali
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min((counter / currentDzikir.count) * 100, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-emerald-50 rounded-xl p-4 mb-6 border border-emerald-100">
        <h4 className="font-bold text-emerald-800 mb-2 flex items-center">
          <Heart className="w-4 h-4 mr-2" />
          Faedah:
        </h4>
        <p className="text-sm text-emerald-700">{currentDzikir.benefit}</p>
      </div>
    </div>
  );
};

const DzikirDisplay = memo(DzikirDisplayComponent);
DzikirDisplay.displayName = 'DzikirDisplay';

export default DzikirDisplay;