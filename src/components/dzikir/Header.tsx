import React, { memo } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

interface HeaderProps {
  showInstructions: boolean;
  setShowInstructions: (show: boolean) => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({ showInstructions, setShowInstructions }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-100 p-2 rounded-xl">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-emerald-800">Dzikir Pagi & Petang</h1>
              <p className="text-sm text-emerald-600">Amalan Harian Umat Muslim</p>
            </div>
          </div>
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-200 transition-colors"
            aria-expanded={showInstructions}
          >
            Panduan
          </button>
        </div>
      </div>
    </header>
  );
};

const Header = memo(HeaderComponent);
Header.displayName = 'Header';

export default Header;