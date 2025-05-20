"use client"

import  { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';

const Timer = () => {
    const [seconds, setSeconds] = useState(3600);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        if (!isActive) {
            setIsActive(true);
            intervalRef.current = setInterval(() => {
                setSeconds((prev) => prev - 1);
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
        const mins = Math.floor(secs / 60);
        const s = secs % 60;
        return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex flex-col border border-white rounded items-center justify-center min-h-fit w-fit  ">
            <h2 className="text-2xl font-bold mb-2 ">Timer </h2>
            <div className="text-5xl font-mono mb-8  px-8 py-4 rounded shadow">
                {formatTime(seconds)}
            </div>
            <div className="flex gap-4">
                <Button
                    onClick={startTimer}
                    disabled={isActive}
                    className={`px-4 py-2 rounded font-semibold transition-colors ${
                        isActive
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
            </div>
        </div>
    );
};

export default Timer;