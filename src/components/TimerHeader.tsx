"use client";

import { showTimerAction } from "@/actions/timerActions";
import { useState } from "react";

type TimerHeaderProps = {
  timerName: string;
  currentTime: number;
  timerId: string;
};

function TimerHeader({ timerName, timerId }: TimerHeaderProps) {
  const [activate, setActivate] = useState(false);

  const activateAction = showTimerAction.bind(null, activate, timerId);

  return (
    <div
      onClick={() => {
        setActivate(!activate);
        activateAction();
      }}
      className="w-72"
    >
      <p className="bg-transparent cursor-pointer rounded-md border p-2 text-center">
        {timerName}
      </p>
    </div>
  );
}

export default TimerHeader;
