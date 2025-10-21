import React from 'react';
import { Volume2, VolumeX, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface ControlsProps {
  isPlaying: boolean;
  toggleAudio: () => void;
  handlePrevious: () => void;
  handleReset: () => void;
  handleCompleteAll: () => void;
  handleNext: () => void;
  incrementCounter: () => void;
  currentDzikirIndex: number;
  currentDzikirList: any[];
  counter: number;
  currentDzikir: any;
}

const Controls: React.FC<ControlsProps> = ({ 
  isPlaying,
  toggleAudio,
  handlePrevious,
  handleReset,
  handleCompleteAll,
  handleNext,
  incrementCounter,
  currentDzikirIndex,
  currentDzikirList,
  counter,
  currentDzikir
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <button
        onClick={toggleAudio}
        className="flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors"
      >
        {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>
      <button
        onClick={handlePrevious}
        disabled={currentDzikirIndex === 0}
        className="flex items-center px-3 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Sebelumnya
      </button>
      <button
        onClick={handleReset}
        className="flex items-center px-3 py-2 bg-amber-100 text-amber-700 rounded-lg font-medium hover:bg-amber-200 transition-colors"
      >
        <RotateCcw className="w-4 h-4 mr-1" />
        Reset
      </button>
      <button
        onClick={incrementCounter}
        disabled={counter >= currentDzikir.count}
        className="px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        +1
      </button>
      <button
        onClick={handleCompleteAll}
        disabled={counter >= currentDzikir.count}
        className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Selesai
      </button>
      <button
        onClick={handleNext}
        disabled={currentDzikirIndex === currentDzikirList.length - 1 || counter < currentDzikir.count}
        className="flex items-center px-3 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Berikutnya
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};

export default Controls;