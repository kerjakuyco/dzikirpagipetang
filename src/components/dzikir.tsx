"use client";

import React, { useState, useEffect } from 'react';
import { dzikirPagi, dzikirPetang } from '../lib/data';
import Header from './dzikir/Header';
import InstructionsModal from './dzikir/InstructionsModal';
import TabNavigation from './dzikir/TabNavigation';
import DzikirDisplay from './dzikir/DzikirDisplay';
import Controls from './dzikir/Controls';
import ProgressOverview from './dzikir/ProgressOverview';

const DzikirApp = () => {
    const [activeTab, setActiveTab] = useState('pagi');
    const [currentDzikirIndex, setCurrentDzikirIndex] = useState(0);
    const [counter, setCounter] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);

    // Mock audio context simulation
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setCounter(prev => prev + 1);
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const currentDzikirList = activeTab === 'pagi' ? dzikirPagi : dzikirPetang;
    const currentDzikir = currentDzikirList[currentDzikirIndex];

    const handleNext = () => {
        if (currentDzikirIndex < currentDzikirList.length - 1) {
            setCurrentDzikirIndex(currentDzikirIndex + 1);
            setCounter(0);
        }
    };

    const handlePrevious = () => {
        if (currentDzikirIndex > 0) {
            setCurrentDzikirIndex(currentDzikirIndex - 1);
            setCounter(0);
        }
    };

    const handleReset = () => {
        setCounter(0);
    };

    const handleCompleteAll = () => {
        setCounter(currentDzikir.count);
    };

    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
    };

    const incrementCounter = () => {
        setCounter(prev => Math.min(prev + 1, currentDzikir.count));
    };

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
                    isPlaying={isPlaying}
                    toggleAudio={toggleAudio}
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