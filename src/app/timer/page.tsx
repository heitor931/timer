
import InputWithButton from "@/components/InputWithButton";
import Timer from "@/components/Timer";
//import { timers } from "@/lib/dummyData";
import { prisma } from "../../../prisma";
import TimerHeader from "@/components/TimerHeader";

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
  }
});
  
  

  return (
    <main className="flex flex-col gap-3 flex-wrap p-2">
        <InputWithButton />
<div className="flex justify-between gap-4 ">
  <div className="flex  flex-col w-72 gap-2">
    {timers.map((timer) => (
      <TimerHeader key={timer.timerId} {...timer} />
    ))}
  </div>
  {/* <hr className="w-full m-auto border border-white  rotate-90" /> */}
  <div className="flex gap-2">
    {
      timers.map((timer) => timer.isActive && <Timer key={timer.timerId} {...timer} />)
    }

  </div>

</div>
    
    </main>
  );
}

export default TimerHome;