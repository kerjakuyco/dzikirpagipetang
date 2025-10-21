import React, { memo } from 'react';
import { Sparkles } from 'lucide-react';

interface InstructionsModalProps {
  showInstructions: boolean;
  setShowInstructions: (show: boolean) => void;
}

const InstructionsModalComponent: React.FC<InstructionsModalProps> = ({ showInstructions, setShowInstructions }) => {
  if (!showInstructions) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl">
        <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center">
          <Sparkles className="w-5 h-5 mr-2" />
          Panduan Penggunaan
        </h3>
        <div className="space-y-3 text-sm text-gray-700">
          <p>• Pilih tab Dzikir Pagi atau Petang sesuai waktu</p>
          <p>• Baca dzikir dengan khusyuk dan penuh penghayatan</p>
          <p>• Gunakan tombol hitung untuk menghitung bacaan</p>
          <p>• Selesaikan semua dzikir untuk mendapatkan pahala</p>
          <p>• Setiap dzikir dilengkapi dengan faedah dan keutamaannya</p>
        </div>
        <button
          onClick={() => setShowInstructions(false)}
          className="w-full mt-4 bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

const InstructionsModal = memo(InstructionsModalComponent);
InstructionsModal.displayName = 'InstructionsModal';

export default InstructionsModal;