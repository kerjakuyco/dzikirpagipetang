"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { DzikirItem, dzikirPagi, dzikirPetang } from '../lib/data';
import Header from './dzikir/Header';
import InstructionsModal from './dzikir/InstructionsModal';
import TabNavigation from './dzikir/TabNavigation';
import DzikirDisplay from './dzikir/DzikirDisplay';
import Controls from './dzikir/Controls';
import ProgressOverview from './dzikir/ProgressOverview';

const DzikirApp = () => {
    const [activeTab, setActiveTab] = useState<'pagi' | 'petang'>('pagi');
    const [currentDzikirIndex, setCurrentDzikirIndex] = useState(0);
    const [counter, setCounter] = useState(0);
    const [showInstructions, setShowInstructions] = useState(false);

    const currentDzikirList = activeTab === 'pagi' ? dzikirPagi : dzikirPetang;
    const currentDzikir: DzikirItem = currentDzikirList[currentDzikirIndex];


    const handleNext = useCallback(() => {
        if (currentDzikirIndex < currentDzikirList.length - 1) {
            setCurrentDzikirIndex(currentDzikirIndex + 1);
            setCounter(0);
        }
    }, [currentDzikirIndex, currentDzikirList.length]);

    const handlePrevious = useCallback(() => {
        if (currentDzikirIndex > 0) {
            setCurrentDzikirIndex(currentDzikirIndex - 1);
            setCounter(0);
        }
    }, [currentDzikirIndex]);

    const handleReset = useCallback(() => {
        setCounter(0);
    }, []);

    const handleCompleteAll = useCallback(() => {
        setCounter(currentDzikir.count);
    }, [currentDzikir.count]);


    const incrementCounter = useCallback(() => {
        setCounter(prev => Math.min(prev + 1, currentDzikir.count));
    }, [currentDzikir.count]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
            <Header
                showInstructions={showInstructions}
                setShowInstructions={setShowInstructions}
            />

            <InstructionsModal
                showInstructions={showInstructions}
                setShowInstructions={setShowInstructions}
            />

            <main className="max-w-4xl mx-auto px-4 py-8">
                <TabNavigation
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    setCurrentDzikirIndex={setCurrentDzikirIndex}
                    setCounter={setCounter}
                />

                <DzikirDisplay
                    activeTab={activeTab}
                    currentDzikir={currentDzikir}
                    counter={counter}
                    currentDzikirIndex={currentDzikirIndex}
                    currentDzikirList={currentDzikirList}
                />

                <Controls
                    handlePrevious={handlePrevious}
                    handleReset={handleReset}
                    handleCompleteAll={handleCompleteAll}
                    handleNext={handleNext}
                    incrementCounter={incrementCounter}
                    currentDzikirIndex={currentDzikirIndex}
                    currentDzikirList={currentDzikirList}
                    counter={counter}
                    currentDzikir={currentDzikir}
                />

                <div className="mt-6">
                    <ProgressOverview
                        currentDzikirList={currentDzikirList}
                        currentDzikirIndex={currentDzikirIndex}
                        counter={counter}
                    />
                </div>

                {/* Footer */}
                <footer className="mt-8 text-center text-gray-500 text-sm">
                    <p>Barangsiapa yang membaca dzikir ini dengan khusyuk, Allah akan menjaganya sepanjang hari.</p>
                    <p className="mt-2">Semoga Allah meridhoi amalan kita semua. Aamiin.</p>
                </footer>
            </main>
        </div>
    );
};

export default DzikirApp;