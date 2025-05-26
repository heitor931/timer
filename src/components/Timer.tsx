"use client";

import { useState, useRef, useEffect,MouseEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TimerType } from "@/lib/dummyData";

const Timer = ({ timerName, currentTime }: TimerType) => {
  const [seconds, setSeconds] = useState(currentTime);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [timerLocalName, setTimerName] = useState(timerName);

  

//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       console.log("Seconds before refresh:", seconds);
//     };
//     window.addEventListener("beforeunload", handleBeforeUnload);
//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [seconds]);

  // For set timer dialog
  const [showSetDialog, setShowSetDialog] = useState(false);
  const [inputHours, setInputHours] = useState(1);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      if (showSetDialog) {
        setShowSetDialog(false);
      }
      if (showTimer) {
        setShowTimer(false);
      }
    });
    return () => {
      window.removeEventListener("click", () => {
        if (showSetDialog) {
          setShowSetDialog(false);
        }
        if (showTimer) {
          setShowTimer(false);
        }
      }
      );
    };
  })

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
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleSetTimer = () => {
    const total = inputHours * 3600 + inputMinutes * 60 + inputSeconds;
    setSeconds(total);
    setIsActive(false);
    setShowSetDialog(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleShowTimer = (e:MouseEvent<HTMLInputElement>) => { 
    e.stopPropagation()
    setShowTimer(!showTimer)
   }

  return (
    <main className="flex  gap-6 justify-start items-start ">
      <Input
      onClick={handleShowTimer}
        type="text"
        style={{backgroundColor: showTimer ? "#3b82f6" : "#000", color: showTimer ? "#000" : "white"}}
        className="w-80 text-center"
        value={timerLocalName}
        onChange={(e) => setTimerName(e.target.value)}
        placeholder="Timer Name"
      />
      {showTimer && (
        <div className="flex absolute left-[24rem] top-30 flex-col border p-4 mt-2  border-white rounded items-center justify-center min-h-fit w-fit">
          <div className="relative mt-4 flex items-center justify-center mb-8">
            {/* Animated circular border */}
            <svg
              className="absolute w-[180px]  h-[180px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 180 180"
            >
              <circle
                cx="90"
                cy="90"
                r="80"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="12"
              />
              <circle
                cx="90"
                cy="90"
                r="80"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="12"
                strokeDasharray={2 * Math.PI * 80}
                strokeDashoffset={
                  2 *
                  Math.PI *
                  80 *
                  (1 -
                    seconds /
                      (inputHours * 3600 + inputMinutes * 60 + inputSeconds ||
                        3600))
                }
                className={`transition-[stroke-dashoffset] duration-1000 ease-linear ${
                  isActive ? "drop-shadow-[0_0_8px_#3b82f6]" : ""
                }`}
                strokeLinecap="round"
                transform="rotate(-90 90 90)"
              />
            </svg>
            <div className="text-3xl font-mono px-8 py-4 rounded-full shadow bg-white text-black w-[160px] h-[160px] flex items-center justify-center z-10 relative">
              {formatTime(seconds)}
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <Button
              onClick={startTimer}
              disabled={isActive || seconds === 0}
              className={`px-4 py-2 rounded font-semibold transition-colors ${
                isActive || seconds === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              Start
            </Button>
            <Button
              onClick={pauseTimer}
              disabled={!isActive}
              className={`px-6 py-2 rounded font-semibold transition-colors ${
                !isActive
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600 text-white"
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
            <div className="translate-y-38 flex items-center justify-center bg-black bg-opacity-40 z-50 fixed">
              <div className="bg-white p-6 rounded shadow flex flex-col gap-4 min-w-[300px]">
                <h3 className="text-lg font-bold mb-2 text-black">Set Timer</h3>
                <div className="flex gap-2 items-center">
                  <Input
                    type="number"
                    min={0}
                    max={99}
                    value={inputHours}
                    onChange={(e) => setInputHours(Number(e.target.value))}
                    className="w-16 p-1 border rounded text-black"
                    placeholder="HH"
                  />
                  <span className="text-black">:</span>
                  <Input
                    type="number"
                    min={0}
                    max={59}
                    value={inputMinutes}
                    onChange={(e) => setInputMinutes(Number(e.target.value))}
                    className="w-16 p-1 border rounded text-black"
                    placeholder="MM"
                  />
                  <span className="text-black">:</span>
                  <Input
                    type="number"
                    min={0}
                    max={59}
                    value={inputSeconds}
                    onChange={(e) => setInputSeconds(Number(e.target.value))}
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
      )}
    </main>
  );
};

export default Timer;
