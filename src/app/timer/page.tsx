//import { timers } from "@/lib/dummyData";
import { prisma } from "../../../prisma";
import TimerClientList from "./TimerClientList";

async function TimerHome() {
  const timers = await prisma.timer.findMany({
    select: {
      timerName: true,
      currentTime: true,
      timerId: true,
      timerEventList: true,
      timerTriggerList: true,
      timerStartDate: true,
      timerStartTime: true,
      timerEndDate: true,
      timerEndTime: true,
      isPaused: true,
      isActive: true,
      isSet: true,
      isRunning: true,
      isStopped: true,
      isReset: true,
      isStarted: true,
      isFinished: true,
      isCompleted: true,
    },
  });

  return (
    <main className="flex flex-col gap-3 flex-wrap p-2">
        <TimerClientList activeTimers={timers} />
    </main>
  );
}

export default TimerHome;
