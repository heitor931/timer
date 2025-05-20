"use client"

import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Timer = () => {
    const [seconds, setSeconds] = useState(3600);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [timerName, setTimerName] = useState('Backend engineering');

    // For set timer dialog
    const [showSetDialog, setShowSetDialog] = useState(false);
    const [inputHours, setInputHours] = useState(1);
    const [inputMinutes, setInputMinutes] = useState(0);
    const [inputSeconds, setInputSeconds] = useState(0);

    const startTimer = () => {
        if (!isActive && seconds > 0) {
            setIsActive(true);
            intervalRef.current = setInterval(() => {
                setSeconds((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current!);
                        setIsActive(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
    };

    const pauseTimer = () => {
        setIsActive(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const resetTimer = () => {
        setIsActive(false);
        setSeconds(0);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const formatTime = (secs: number) => {
        const hours = Math.floor(secs / 3600);
        const mins = Math.floor((secs % 3600) / 60);
        const s = secs % 60;
        return `${hours.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleSetTimer = () => {
        const total =
            inputHours * 3600 + inputMinutes * 60 + inputSeconds;
        setSeconds(total);
        setIsActive(false);
        setShowSetDialog(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    return (
        <div className="flex flex-col border p-4 border-white rounded items-center justify-center min-h-fit w-fit">
            <Input
                type="text"
                //className="text-2xl font-bold mb-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 text-center"
                value={timerName}
                onChange={e => setTimerName(e.target.value)}
                placeholder="Timer Name"
            />
            <div className="text-5xl font-mono mb-8 px-8 py-4 rounded shadow">
                {formatTime(seconds)}
            </div>
            <div className="flex gap-4 mb-4">
                <Button
                    onClick={startTimer}
                    disabled={isActive || seconds === 0}
                    className={`px-4 py-2 rounded font-semibold transition-colors ${
                        isActive || seconds === 0
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                >
                    Start
                </Button>
                <Button
                    onClick={pauseTimer}
                    disabled={!isActive}
                    className={`px-6 py-2 rounded font-semibold transition-colors ${
                        !isActive
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    }`}
                >
                    Pause
                </Button>
                <Button
                    onClick={resetTimer}
                    className="px-6 py-2 rounded font-semibold bg-red-500 hover:bg-red-600 text-white transition-colors"
                >
                    Reset
                </Button>
                <Button
                    onClick={() => setShowSetDialog(true)}
                    className="px-6 py-2 rounded font-semibold bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                >
                    Set Timer
                </Button>
            </div>
            {showSetDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <div className="bg-white p-6 rounded shadow flex flex-col gap-4 min-w-[300px]">
                        <h3 className="text-lg font-bold mb-2 text-black">Set Timer</h3>
                        <div className="flex gap-2 items-center">
                            <input
                                type="number"
                                min={0}
                                max={99}
                                value={inputHours}
                                onChange={e => setInputHours(Number(e.target.value))}
                                className="w-16 p-1 border rounded text-black"
                                placeholder="HH"
                            />
                            <span className="text-black">:</span>
                            <input
                                type="number"
                                min={0}
                                max={59}
                                value={inputMinutes}
                                onChange={e => setInputMinutes(Number(e.target.value))}
                                className="w-16 p-1 border rounded text-black"
                                placeholder="MM"
                            />
                            <span className="text-black">:</span>
                            <input
                                type="number"
                                min={0}
                                max={59}
                                value={inputSeconds}
                                onChange={e => setInputSeconds(Number(e.target.value))}
                                className="w-16 p-1 border rounded text-black"
                                placeholder="SS"
                            />
                        </div>
                        <div className="flex gap-2 justify-end">
                            <Button
                                onClick={() => setShowSetDialog(false)}
                                className="bg-gray-300 text-black hover:bg-gray-400"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleSetTimer}
                                className="bg-blue-500 text-white hover:bg-blue-600"
                            >
                                Set
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Timer;