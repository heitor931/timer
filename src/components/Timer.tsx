"use client";

import {
  useState,
  useRef,
  useEffect,
  MouseEvent,
  startTransition,
} from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TimerType } from "@/lib/dummyData";
import { openVlcAction, updateInitialTimeAction, updateCurrentTimeAction, updateIsRunningAction } from "@/actions/timerActions";
import useTimerStore from "@/app/timer/_context/store";

const Timer = ({ timerName, currentTime, isActive,isRunning, timerId, initialTime }: TimerType) => {
  const [seconds, setSeconds] = useState(currentTime); // Default to 1 hour if no currentTime is provided
  const [isActivated, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [timerLocalName, setTimerName] = useState(timerName);
  const {updateCurrentTime } = useTimerStore()

  useEffect(() => {
    if (isRunning) {
      startTimer()
     }

  },[])

    useEffect(() => {
      const handleBeforeUnload = () => {
        console.log(seconds);
        updateCurrentTime(timerId, seconds);
        
        startTransition(() => {
          updateCurrentTimeAction(timerId, seconds);
        }
      );
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }, [seconds, timerId, updateCurrentTime]);

  // For set timer dialog
  const [showSetDialog, setShowSetDialog] = useState(false);
  const [inputHours, setInputHours] = useState(1);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [showTimer, setShowTimer] = useState(isActive);

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
      });
    };
  });

  const startTimer = () => {
    if (!isActivated && seconds > 0) {
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

    // update isRunning with action
    startTransition(() => {
      updateIsRunningAction(timerId, true);
    }
    );
  };

  const pauseTimer = () => {
    startTransition(() => {
      updateCurrentTimeAction(timerId, seconds);
    }
    );
    setIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // update isRunning with action
    startTransition(() => {
      updateIsRunningAction(timerId, false);
    }
    );
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(initialTime);
    startTransition(() => {
      updateCurrentTimeAction(timerId, initialTime);
    });
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

  useEffect(() => {
    if (seconds === 0) {
      // Open VLC when timer reaches 0
      startTransition(() => {
        openVlcAction();
      });
    }
  }, [seconds]);

  const handleSetTimer = () => {
    const total = inputHours * 3600 + inputMinutes * 60 + inputSeconds;
    const updateInitiateTimerAction = updateInitialTimeAction.bind(null, timerId, total);
    startTransition(() => {
      updateCurrentTimeAction(timerId, total);
    }
    );
    setSeconds(total);
    //update database with new timer values
    // startTransition(() => {
    //   updateInitialTimeAction(timerId, total);
    // });
    updateInitiateTimerAction();

    setIsActive(false);
    setShowSetDialog(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleShowTimer = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setShowTimer(!showTimer);
  };

  return (
    <main
      onClick={(e) => e.stopPropagation()}
      className="flex  gap-6 justify-start items-start  "
    >
      <div className="flex  flex-col border p-4 mt-2  border-white rounded items-center justify-center min-h-fit w-fit">
        <Input
          onClick={handleShowTimer}
          type="text"
          style={{
            backgroundColor: isActive ? "#3b82f6" : "#000",
            color: isActive ? "#000" : "white",
          }}
          className="w-80 text-center"
          value={timerLocalName}
          onChange={(e) => setTimerName(e.target.value)}
          placeholder="Timer Name"
        />
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
                isActivated ? "drop-shadow-[0_0_8px_#3b82f6]" : ""
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
            disabled={isActivated || seconds === 0}
            className={`px-4 py-2 rounded font-semibold transition-colors ${
              isActivated || seconds === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            Start
          </Button>
          <Button
            onClick={pauseTimer}
            disabled={!isActivated}
            className={`px-6 py-2 rounded font-semibold transition-colors ${
              !isActivated
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
            onClick={() => {
              setShowSetDialog(true);
              console.log(timerName);
            }}
            className="px-6 py-2 rounded font-semibold bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          >
            Set Timer
          </Button>
        </div>
        {showSetDialog && (
            <div className="w-full absolute translate-y-36 z-10 flex flex-col items-center justify-center mt-4">
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6 min-w-[320px] border border-gray-200 relative">
                <button
                  onClick={() => setShowSetDialog(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
                  aria-label="Close"
                >
                  &times;
                </button>
                <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">Set Timer</h3>
                <div className="flex gap-3 items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Input
                      type="number"
                      min={0}
                      max={99}
                      value={inputHours}
                      onChange={(e) => setInputHours(Number(e.target.value))}
                      className="w-16 p-2 border-2 border-gray-300 rounded-lg text-center text-lg font-mono text-black focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="HH"
                    />
                    <span className="text-xs text-gray-500 mt-1">Hours</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-700">:</span>
                  <div className="flex flex-col items-center">
                    <Input
                      type="number"
                      min={0}
                      max={59}
                      value={inputMinutes}
                      onChange={(e) => setInputMinutes(Number(e.target.value))}
                      className="w-16 p-2 border-2 border-gray-300 rounded-lg text-center text-lg font-mono text-black focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="MM"
                    />
                    <span className="text-xs text-gray-500 mt-1">Minutes</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-700">:</span>
                  <div className="flex flex-col items-center">
                    <Input
                      type="number"
                      min={0}
                      max={59}
                      value={inputSeconds}
                      onChange={(e) => setInputSeconds(Number(e.target.value))}
                      className="w-16 p-2 border-2 border-gray-300 rounded-lg text-center text-lg font-mono text-black focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="SS"
                    />
                    <span className="text-xs text-gray-500 mt-1">Seconds</span>
                  </div>
                </div>
                <div className="flex gap-3 justify-end mt-4">
                  <Button
                    onClick={() => setShowSetDialog(false)}
                    className="bg-gray-200 text-gray-700 hover:bg-gray-300 font-semibold px-5 py-2 rounded-lg"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSetTimer}
                    className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-5 py-2 rounded-lg shadow"
                  >
                    Set
                  </Button>
                </div>
              </div>
            </div>
        )}
      </div>
    </main>
  );
};

export default Timer;
