"use client";
import Timer from "@/components/Timer";
import type { TimerType } from "@/lib/dummyData";
import useTimerStore from "./_context/store";
import { useEffect } from "react";
import TimerHeader from "@/components/TimerHeader";
import InputWithButton from "@/components/InputWithButton";

function TimerClientList({ activeTimers }: { activeTimers: TimerType[] }) {
  const { setTimers, timers } = useTimerStore();
  useEffect(() => {
    setTimers(activeTimers);
  }, []);
  // Get the timers from the store
  //  const timers = useTimerStore((state) => state.timers);
  const render = timers.length !== 0 ? timers : activeTimers;

  return (
    <main>
      <InputWithButton />

      <div className="flex gap-2 justify-between items-start flex-wrap p-2">
        <div className="flex  flex-col w-72 gap-2">
          {render.map((timer) => (
            <TimerHeader key={timer.timerId} {...timer} />
          ))}
        </div>
        <div className="flex gap-2 w-[75%] flex-wrap">
        {render.map(
          (timer) => timer.isActive && <Timer key={timer.timerId} {...timer} />
        )}

        </div>
      </div>
    </main>
  );
}

export default TimerClientList;
