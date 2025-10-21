import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setCurrentDzikirIndex: (index: number) => void;
  setCounter: (counter: number) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ 
  activeTab, 
  setActiveTab,
  setCurrentDzikirIndex,
  setCounter
}) => {
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentDzikirIndex(0);
    setCounter(0);
  };

  return (
    <div className="flex bg-white rounded-2xl p-2 shadow-lg mb-8 border border-emerald-100">
      <button
        onClick={() => handleTabChange('pagi')}
        className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all ${activeTab === 'pagi'
            ? 'bg-emerald-500 text-white shadow-md'
            : 'text-emerald-600 hover:bg-emerald-50'
          }`}
      >
        <Sun className="w-4 h-4" />
        <span>Dzikir Pagi</span>
      </button>
      <button
        onClick={() => handleTabChange('petang')}
        className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all ${activeTab === 'petang'
            ? 'bg-emerald-500 text-white shadow-md'
            : 'text-emerald-600 hover:bg-emerald-50'
          }`}
      >
        <Moon className="w-4 h-4" />
        <span>Dzikir Petang</span>
      </button>
    </div>
  );
};

export default TabNavigation;